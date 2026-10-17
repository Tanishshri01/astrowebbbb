import React, { useState, useEffect, useRef } from 'react';
import { ImagePlus, Upload, Trash2, Maximize2, X, RefreshCw, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { compressImage, safeStorageSet, safeStorageGet, safeStorageGetAsync, safeStorageRemove } from '../utils/imageStorage';

interface PosterSlot {
  id: number;
  title: string;
  defaultPath: string;
}

const DEFAULT_POSTER_SLOTS: PosterSlot[] = [
  { id: 1, title: 'Poster 1', defaultPath: '/images/poster_1.jpg' },
  { id: 2, title: 'Poster 2', defaultPath: '/images/poster_2.jpg' },
  { id: 3, title: 'Poster 3', defaultPath: '/images/poster_3.jpg' },
  { id: 4, title: 'Poster 4', defaultPath: '/images/poster_4.jpg' },
];

export const PostersShowcase: React.FC = () => {
  const { language } = useLanguage();

  // Load saved posters safely from storage synchronously
  const [posters, setPosters] = useState<Record<number, string | null>>(() => {
    const saved: Record<number, string | null> = {};
    DEFAULT_POSTER_SLOTS.forEach((slot) => {
      saved[slot.id] =
        safeStorageGet(`astro_poster_slot_${slot.id}`) ||
        safeStorageGet(`astro_poster_${slot.id}`) ||
        safeStorageGet(`poster_slot_${slot.id}`) ||
        null;
    });
    return saved;
  });

  // Asynchronously hydrate from IndexedDB to guarantee slots 3 & 4 are NEVER lost across refreshes
  useEffect(() => {
    let isMounted = true;
    async function loadPostersAsync() {
      const updates: Record<number, string> = {};
      for (const slot of DEFAULT_POSTER_SLOTS) {
        const candidateKeys = [
          `astro_poster_slot_${slot.id}`,
          `astro_poster_${slot.id}`,
          `poster_slot_${slot.id}`,
        ];
        for (const k of candidateKeys) {
          const stored = await safeStorageGetAsync(k);
          if (stored) {
            updates[slot.id] = stored;
            break;
          }
        }
      }
      if (isMounted && Object.keys(updates).length > 0) {
        setPosters((prev) => ({ ...prev, ...updates }));
      }
    }
    loadPostersAsync();
    return () => {
      isMounted = false;
    };
  }, []);

  const [activeFullscreenPoster, setActiveFullscreenPoster] = useState<{ id: number; url: string } | null>(null);
  const [uploadingSlot, setUploadingSlot] = useState<number | null>(null);
  const fileInputRefs = useRef<Record<number, HTMLInputElement | null>>({});

  const sectionHeadings = {
    kn: {
      tagline: 'ದೈವಿಕ ಪ್ರಕಟಣೆಗಳು & ಪೋಸ್ಟರ್‌ಗಳು',
      title: 'SPECIAL POSTERS',
      subtitle: 'ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮಗಳು, ಪೂಜಾ ಆಹ್ವಾನಗಳು ಮತ್ತು ಆಶೀರ್ವಾದ ಪೋಸ್ಟರ್‌ಗಳು',
      addBtn: 'ಪೋಸ್ಟರ್ ಸೇರಿಸಿ',
      changeBtn: 'ಬದಲಾಯಿಸಿ',
      removeBtn: 'ತೆಗೆದುಹಾಕಿ',
      blankLabel: 'ಖಾಲಿ ಸ್ಲೈಡ್ • ಹೊಸ ಪೋಸ್ಟರ್ ಸೇರಿಸಿ',
    },
    en: {
      tagline: 'SACRED ANNOUNCEMENTS & POSTERS',
      title: 'SPECIAL POSTERS',
      subtitle: 'Special ritual schedules, festival invitations, and sacred blessing posters',
      addBtn: 'Add Poster',
      changeBtn: 'Change',
      removeBtn: 'Remove',
      blankLabel: 'Blank Slide • Click to Add Poster',
    },
    hi: {
      tagline: 'दिव्य पोस्टर एवं पावन घोषणाएं',
      title: 'SPECIAL POSTERS',
      subtitle: 'विशेष अनुष्ठान, पावन पर्व एवं आशीर्वाद पोस्टर',
      addBtn: 'पोस्टर जोड़ें',
      changeBtn: 'बदलें',
      removeBtn: 'हटाएं',
      blankLabel: 'रिक्त स्लाइड • पोस्टर जोड़ें',
    },
    te: {
      tagline: 'దివ్య పోస్టర్లు & ప్రత్యేక ఆహ్వానాలు',
      title: 'SPECIAL POSTERS',
      subtitle: 'ప్రత్యేక పూజా కార్యక్రమాలు మరియు ఆశీర్వాద పోస్టర్లు',
      addBtn: 'పోస్టర్ జోడించండి',
      changeBtn: 'మార్చండి',
      removeBtn: 'తొలగించండి',
      blankLabel: 'ఖాళీ స్లైడ్ • పోస్టర్ జోడించండి',
    },
  };

  const text = sectionHeadings[language] || sectionHeadings.en;

  const triggerSlotUpload = (slotId: number) => {
    const el = fileInputRefs.current[slotId] || (document.getElementById(`poster-file-input-${slotId}`) as HTMLInputElement);
    if (el) {
      el.click();
    }
  };

  const handleFileUpload = async (slotId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingSlot(slotId);
      // Efficient HD compression (~50-80KB) so all slots 1, 2, 3, 4 comfortably persist in storage
      const compressedBase64 = await compressImage(file, 1080, 1080, 0.78);
      safeStorageSet(`astro_poster_slot_${slotId}`, compressedBase64);
      safeStorageSet(`astro_poster_${slotId}`, compressedBase64);
      setPosters((prev) => ({ ...prev, [slotId]: compressedBase64 }));
    } catch (err) {
      console.error(`Failed to upload poster for slot ${slotId}:`, err);
    } finally {
      setUploadingSlot(null);
      if (e.target) {
        e.target.value = '';
      }
    }
  };

  const handleRemovePoster = (slotId: number) => {
    safeStorageRemove(`astro_poster_slot_${slotId}`);
    safeStorageRemove(`astro_poster_${slotId}`);
    setPosters((prev) => ({ ...prev, [slotId]: null }));
    const el = fileInputRefs.current[slotId] || (document.getElementById(`poster-file-input-${slotId}`) as HTMLInputElement);
    if (el) {
      el.value = '';
    }
  };

  return (
    <section id="posters" className="py-16 sm:py-24 bg-gradient-to-b from-[#0A0102] via-[#120103] to-[#0A0102] relative border-b border-[#FACC15]/30 overflow-hidden">
      {/* Background Sacred Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#991B1B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FACC15]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Fullscreen Poster Modal */}
      {activeFullscreenPoster && (
        <div
          className="fixed inset-0 z-50 bg-[#070102]/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6"
          onClick={() => setActiveFullscreenPoster(null)}
        >
          <div className="w-full max-w-5xl flex items-center justify-between py-2 border-b border-[#FACC15]/40">
            <div className="flex items-center gap-2 text-[#FEF08A] font-black text-sm sm:text-base">
              <span className="text-[#FACC15]">ॐ</span>
              <span>Poster {activeFullscreenPoster.id} • Full View</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveFullscreenPoster(null);
              }}
              className="p-2 rounded-full bg-[#1C0204] hover:bg-[#3D050A] text-[#FEF08A] border border-[#FACC15] transition cursor-pointer"
              title="Close Fullscreen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center max-h-[82vh] py-3 w-full">
            <img
              src={activeFullscreenPoster.url}
              alt={`Poster ${activeFullscreenPoster.id}`}
              className="max-h-[80vh] w-auto max-w-[92vw] object-contain rounded-2xl border-2 border-[#FACC15] shadow-2xl shadow-yellow-500/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="text-center text-xs text-[#FFFBEB]/70 pb-2">
            Click outside or press Close to return
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-widest uppercase mb-4 drop-shadow-md">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FEF08A] to-[#FACC15]">
              {text.title}
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#FACC15] to-transparent mx-auto rounded-full shadow-sm shadow-[#FACC15]/50" />
        </div>

        {/* 4 Posters Side by Side Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {DEFAULT_POSTER_SLOTS.map((slot) => {
            const currentPoster = posters[slot.id];

            return (
              <div
                key={slot.id}
                className="relative group flex flex-col h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#1E0204] via-[#140103] to-[#0D0102] border-2 border-[#FACC15]/60 hover:border-[#FACC15] transition-all duration-300 shadow-xl shadow-black/80 hover:shadow-2xl hover:shadow-[#FACC15]/10"
              >
                {/* Direct Native File Input for this slot */}
                <input
                  type="file"
                  id={`poster-file-input-${slot.id}`}
                  onChange={(e) => handleFileUpload(slot.id, e)}
                  accept="image/*"
                  className="sr-only"
                />

                {/* Card Corner Auspicious Symbols */}
                <div className="absolute top-2 left-2 text-[#FACC15]/60 group-hover:text-[#FACC15] font-serif text-xs select-none z-10 transition-colors pointer-events-none">
                  ॐ
                </div>
                <div className="absolute top-2 right-2 text-[#FACC15]/60 group-hover:text-[#FACC15] font-serif text-xs select-none z-10 transition-colors pointer-events-none">
                  卐
                </div>

                {/* Slot Poster Display Area */}
                {currentPoster ? (
                  /* Filled Poster State */
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A0102] flex items-center justify-center group/img">
                    <img
                      src={currentPoster}
                      alt={`Poster Slot ${slot.id}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-103"
                    />

                    {/* Hover Overlay with Action Buttons */}
                    <div className="absolute inset-0 bg-black/65 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                      <button
                        type="button"
                        onClick={() => setActiveFullscreenPoster({ id: slot.id, url: currentPoster })}
                        className="px-3.5 py-1.5 bg-[#FACC15] hover:bg-[#FEF08A] text-[#1E0204] rounded-lg text-xs font-black flex items-center gap-1.5 shadow-lg transition cursor-pointer"
                        title="View Fullscreen"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>ಪೂರ್ಣ ವೀಕ್ಷಣೆ</span>
                      </button>

                      <div className="flex items-center gap-2">
                        <label
                          htmlFor={`poster-file-input-${slot.id}`}
                          className="px-3 py-1.5 bg-[#1E0204] hover:bg-[#320408] border border-[#FACC15] text-[#FEF08A] hover:text-white rounded-lg text-xs font-bold flex items-center gap-1 transition cursor-pointer select-none"
                          title="Change Poster"
                        >
                          {uploadingSlot === slot.id ? (
                            <Loader2 className="w-3 h-3 animate-spin text-[#FACC15]" />
                          ) : (
                            <RefreshCw className="w-3 h-3" />
                          )}
                          <span>{text.changeBtn}</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => handleRemovePoster(slot.id)}
                          className="px-3 py-1.5 bg-red-950/80 hover:bg-red-900 border border-red-600/70 text-red-200 rounded-lg text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                          title="Remove Poster"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>{text.removeBtn}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Blank Slide / Empty Placeholder with Direct Native Label */
                  <label
                    htmlFor={`poster-file-input-${slot.id}`}
                    className="relative aspect-[3/4] w-full border-2 border-dashed border-[#FACC15]/60 hover:border-[#FACC15] bg-[#0A0102]/70 hover:bg-[#1C0204]/90 transition-all flex flex-col items-center justify-center p-6 text-center cursor-pointer group/blank select-none"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#1C0204] border border-[#FACC15]/70 group-hover/blank:border-[#FACC15] flex items-center justify-center text-[#FACC15] mb-3 group-hover/blank:scale-110 transition-transform shadow-md">
                      {uploadingSlot === slot.id ? (
                        <Loader2 className="w-7 h-7 animate-spin text-[#FACC15]" />
                      ) : (
                        <ImagePlus className="w-7 h-7" />
                      )}
                    </div>

                    <div className="text-sm font-black text-[#FEF08A] tracking-wider mb-1">
                      POSTER {slot.id}
                    </div>

                    <p className="text-[11px] text-[#FFFBEB]/80 leading-relaxed mb-4 max-w-[190px]">
                      {uploadingSlot === slot.id ? 'ಚಿತ್ರ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತಿದೆ...' : text.blankLabel}
                    </p>

                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] hover:from-[#FFFFFF] hover:to-[#FACC15] text-[#240306] text-xs font-black shadow-md transition-all active:scale-95 border border-[#FEF08A] pointer-events-none">
                      {uploadingSlot === slot.id ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#240306]" />
                      ) : (
                        <Upload className="w-3.5 h-3.5" />
                      )}
                      <span>+ {text.addBtn}</span>
                    </span>
                  </label>
                )}

                {/* Footer Bar of each poster slot */}
                <div className="p-3 bg-gradient-to-r from-[#180204] via-[#0E0102] to-[#180204] border-t border-[#FACC15]/30 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#FEF08A]">
                    ಪೋಸ್ಟರ್ {slot.id}
                  </span>
                  <label
                    htmlFor={`poster-file-input-${slot.id}`}
                    className="text-[11px] text-[#FACC15] hover:text-[#FFFFFF] underline font-bold cursor-pointer flex items-center gap-1 select-none"
                  >
                    <Upload className="w-3 h-3" />
                    <span>{currentPoster ? text.changeBtn : `+ ${text.addBtn}`}</span>
                  </label>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
