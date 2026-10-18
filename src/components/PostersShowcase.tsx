import React, { useState, useEffect, useRef } from 'react';
import { Upload, Trash2, Maximize2, X, RefreshCw, Loader2, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useDeveloperMode } from '../context/DeveloperContext';
import {
  compressImage,
  safeStorageSet,
  safeStorageGet,
  safeStorageGetAsync,
  safeStorageRemove,
  findStoredImage,
  findStoredImageAsync
} from '../utils/imageStorage';

interface PosterSlot {
  id: number;
  title: string;
  defaultPath: string;
  devotionalTitle: Record<string, string>;
  devotionalSubtitle: Record<string, string>;
}

const DEFAULT_POSTER_SLOTS: PosterSlot[] = [
  {
    id: 1,
    title: 'Poster 1',
    defaultPath: '/images/poster_1.jpg',
    devotionalTitle: {
      kn: 'ಶ್ರೀ ಮಹಾಲಕ್ಷ್ಮಿ ಧನ ಪ್ರಾಪ್ತಿ ಆರಾಧನೆ',
      en: 'Sri Mahalakshmi Prosperity Puja',
      hi: 'श्री महालक्ष्मी धन प्राप्ति आराधना',
      te: 'శ్రీ మహాలక్ష్మి ధన ప్రాప్తి పూజ',
    },
    devotionalSubtitle: {
      kn: 'ಸಂಪತ್ತು ಮತ್ತು ಐಶ್ವರ್ಯ ವೃದ್ಧಿ',
      en: 'Abundance & Auspicious Wealth',
      hi: 'धन-धान्य एवं ऐश्वर्य वृद्धि',
      te: 'సంపద మరియు ఐశ్వర్య వృద్ధి',
    },
  },
  {
    id: 2,
    title: 'Poster 2',
    defaultPath: '/images/poster_2.jpg',
    devotionalTitle: {
      kn: 'ರಾಧಾ ಕೃಷ್ಣ ಪ್ರೇಮ & ದಾಂಪತ್ಯ ಶಾಂತಿ',
      en: 'Radha Krishna Divine Harmony',
      hi: 'राधा कृष्ण प्रेम एवं दांपत्य शांति',
      te: 'రాధా కృష్ణ దివ్య దాంపత్య శాంతి',
    },
    devotionalSubtitle: {
      kn: 'ಪ್ರೀತಿ ಮತ್ತು ಕುಟುಂಬ ಸೌಖ್ಯ',
      en: 'Love & Family Tranquility',
      hi: 'पारिवारिक सुख एवं मधुर संबंध',
      te: 'ప్రేమ మరియు కుటుంబ సౌఖ్యం',
    },
  },
  {
    id: 3,
    title: 'Poster 3',
    defaultPath: '/images/poster_3.jpg',
    devotionalTitle: {
      kn: 'ಸಂಕಟಮೋಚನ ಹನುಮದ್ ರಕ್ಷಾ ಕವಚ',
      en: 'Sankatmochan Hanuman Shield',
      hi: 'संकटमोचन हनुमान रक्षा कवच',
      te: 'సంకటమోచన హనుమత్ రక్షా కవచం',
    },
    devotionalSubtitle: {
      kn: 'ಶತ್ರು ಬಾಧೆ & ನಕಾರಾತ್ಮಕ ಶಕ್ತಿ ನಿವಾರಣೆ',
      en: 'Spiritual Protection & Evil Eye Removal',
      hi: 'शत्रु बाधा एवं नकारात्मक ऊर्जा निवारण',
      te: 'శత్రు బాధలు & నకారాత్మక శక్తి నివారణ',
    },
  },
  {
    id: 4,
    title: 'Poster 4',
    defaultPath: '/images/poster_4.jpg',
    devotionalTitle: {
      kn: 'ಪವಿತ್ರ ವೇದ ಮಹಾ ಯಾಗ & ಶಾಂತಿ ಹೋಮ',
      en: 'Sacred Vedic Maha Homa Ritual',
      hi: 'पवित्र वैदिक महायज्ञ एवं शांति होम',
      te: 'పవిత్ర వేద మహా యాగము & శాంతి హోమం',
    },
    devotionalSubtitle: {
      kn: 'ಗ್ರಹದೋಷ ಮುಕ್ತಿ & ಸರ್ವಕಾರ್ಯ ಸಿದ್ಧಿ',
      en: 'Planetary Balance & Success Blessings',
      hi: 'ग्रहदोष शांति एवं सर्वकार्य सिद्धि',
      te: 'గ్రహదోష ముక్తి & సర్వకార్య సిద్ధి',
    },
  },
];

export const PostersShowcase: React.FC = () => {
  const { language } = useLanguage();
  const { isDevMode } = useDeveloperMode();

  const [posters, setPosters] = useState<Record<number, string | null>>(() => {
    const saved: Record<number, string | null> = {};
    DEFAULT_POSTER_SLOTS.forEach((slot) => {
      saved[slot.id] = findStoredImage(`astro_poster_slot_${slot.id}`, [
        `astro_poster_${slot.id}`,
        `poster_slot_${slot.id}`,
        `poster_${slot.id}`,
        `custom_poster_${slot.id}`,
        `poster${slot.id}`,
      ]);
    });
    return saved;
  });

  // Asynchronously hydrate from IndexedDB to guarantee slots are never lost
  useEffect(() => {
    let isMounted = true;
    async function loadPostersAsync() {
      const updates: Record<number, string> = {};
      for (const slot of DEFAULT_POSTER_SLOTS) {
        const stored = await findStoredImageAsync(`astro_poster_slot_${slot.id}`, [
          `astro_poster_${slot.id}`,
          `poster_slot_${slot.id}`,
          `poster_${slot.id}`,
          `custom_poster_${slot.id}`,
          `poster${slot.id}`,
        ]);
        if (stored) {
          updates[slot.id] = stored;
        }
      }
      if (isMounted && Object.keys(updates).length > 0) {
        setPosters((prev) => ({ ...prev, ...updates }));
      }
    }
    loadPostersAsync();

    // Listen to real-time custom image change events
    const handleStorageChange = () => {
      const saved: Record<number, string | null> = {};
      DEFAULT_POSTER_SLOTS.forEach((slot) => {
        saved[slot.id] = findStoredImage(`astro_poster_slot_${slot.id}`, [
          `astro_poster_${slot.id}`,
          `poster_slot_${slot.id}`,
          `poster_${slot.id}`,
          `custom_poster_${slot.id}`,
          `poster${slot.id}`,
        ]);
      });
      setPosters(saved);
    };

    window.addEventListener('astro_image_change', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      isMounted = false;
      window.removeEventListener('astro_image_change', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const [activeFullscreenPoster, setActiveFullscreenPoster] = useState<{ id: number; url: string; title: string } | null>(null);
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
      viewFull: 'ಪೂರ್ಣ ವೀಕ್ಷಣೆ',
    },
    en: {
      tagline: 'SACRED ANNOUNCEMENTS & POSTERS',
      title: 'SPECIAL POSTERS',
      subtitle: 'Special ritual schedules, festival invitations, and sacred blessing posters',
      addBtn: 'Add Poster',
      changeBtn: 'Change',
      removeBtn: 'Remove',
      viewFull: 'Full View',
    },
    hi: {
      tagline: 'दिव्य पोस्टर एवं पावन घोषणाएं',
      title: 'SPECIAL POSTERS',
      subtitle: 'विशेष अनुष्ठान, पावन पर्व एवं आशीर्वाद पोस्टर',
      addBtn: 'पोस्टर जोड़ें',
      changeBtn: 'बदलें',
      removeBtn: 'हटाएं',
      viewFull: 'पूर्ण दर्शन',
    },
    te: {
      tagline: 'దివ్య పోస్టర్లు & ప్రత్యేక ఆహ్వానాలు',
      title: 'SPECIAL POSTERS',
      subtitle: 'ప్రత్యేక పూజా కార్యక్రమాలు మరియు ఆశీర్వాద పోస్టర్లు',
      addBtn: 'పోస్టర్ జోడించండి',
      changeBtn: 'మార్చండి',
      removeBtn: 'తొలగించండి',
      viewFull: 'పూర్తి వీక్షణ',
    },
  };

  const text = sectionHeadings[language] || sectionHeadings.en;

  const handleFileUpload = async (slotId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingSlot(slotId);
      // High quality HD canvas compression with small ~35KB footprint
      const compressedBase64 = await compressImage(file, 800, 1060, 0.72);
      
      const posterKeys = [
        `astro_poster_slot_${slotId}`,
        `astro_poster_${slotId}`,
        `poster_slot_${slotId}`,
        `poster_${slotId}`,
        `custom_poster_${slotId}`,
        `poster${slotId}`,
      ];
      posterKeys.forEach((k) => safeStorageSet(k, compressedBase64));

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
    const posterKeys = [
      `astro_poster_slot_${slotId}`,
      `astro_poster_${slotId}`,
      `poster_slot_${slotId}`,
      `poster_${slotId}`,
      `custom_poster_${slotId}`,
      `poster${slotId}`,
    ];
    posterKeys.forEach((k) => safeStorageRemove(k));
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
              <span>{activeFullscreenPoster.title} • Full View</span>
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
              alt={activeFullscreenPoster.title}
              className="max-h-[80vh] w-auto max-w-[92vw] object-contain rounded-2xl border-2 border-[#FACC15] shadow-2xl shadow-yellow-500/20"
            />
          </div>

          <div className="text-center text-xs text-[#FFFBEB]/70 py-2">
            Click anywhere or press Close to dismiss
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
            const hasCustom = Boolean(posters[slot.id]);
            const currentPoster = posters[slot.id] || slot.defaultPath;
            const slotTitle = slot.devotionalTitle[language] || slot.devotionalTitle.en;
            const slotSubtitle = slot.devotionalSubtitle[language] || slot.devotionalSubtitle.en;

            return (
              <div
                key={slot.id}
                className="relative group flex flex-col h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#1E0204] via-[#140103] to-[#0D0102] border-2 border-[#FACC15]/60 hover:border-[#FACC15] transition-all duration-300 shadow-xl shadow-black/80 hover:shadow-2xl hover:shadow-[#FACC15]/10"
              >
                {/* Developer Mode ONLY: File Input */}
                {isDevMode && (
                  <input
                    type="file"
                    id={`poster-file-input-${slot.id}`}
                    onChange={(e) => handleFileUpload(slot.id, e)}
                    accept="image/*"
                    className="sr-only"
                  />
                )}

                {/* Card Corner Auspicious Symbols */}
                <div className="absolute top-2 left-2 text-[#FACC15]/60 group-hover:text-[#FACC15] font-serif text-xs select-none z-10 transition-colors pointer-events-none">
                  ॐ
                </div>
                <div className="absolute top-2 right-2 text-[#FACC15]/60 group-hover:text-[#FACC15] font-serif text-xs select-none z-10 transition-colors pointer-events-none">
                  卐
                </div>

                {/* Slot Poster Display Area */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A0102] flex items-center justify-center group/img">
                  <img
                    src={currentPoster}
                    alt={slotTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-103 cursor-pointer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith('/images/krishna_darshan.jpg')) {
                        target.src = '/images/krishna_darshan.jpg';
                      }
                    }}
                    onClick={() => setActiveFullscreenPoster({ id: slot.id, url: currentPoster, title: slotTitle })}
                  />

                  {/* Hover Overlay with Action Buttons */}
                  <div className="absolute inset-0 bg-black/65 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4 pointer-events-auto">
                    <button
                      type="button"
                      onClick={() => setActiveFullscreenPoster({ id: slot.id, url: currentPoster, title: slotTitle })}
                      className="px-4 py-2 bg-gradient-to-r from-[#FEF08A] to-[#FACC15] hover:brightness-110 text-[#1E0204] rounded-xl text-xs font-black flex items-center gap-1.5 shadow-lg transition cursor-pointer"
                      title={text.viewFull}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{text.viewFull}</span>
                    </button>

                    {/* Developer Only Edit Controls */}
                    {isDevMode && (
                      <div className="flex items-center gap-2 mt-1">
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
                        {hasCustom && (
                          <button
                            type="button"
                            onClick={() => handleRemovePoster(slot.id)}
                            className="px-3 py-1.5 bg-red-950/80 hover:bg-red-900 border border-red-600/70 text-red-200 rounded-lg text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                            title="Reset to default poster"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>{text.removeBtn}</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Bar of each poster slot */}
                <div className="p-3.5 bg-gradient-to-r from-[#180204] via-[#0E0102] to-[#180204] border-t border-[#FACC15]/30 flex flex-col items-center text-center">
                  <div className="font-bold text-[#FEF08A] text-xs sm:text-sm line-clamp-1">
                    {slotTitle}
                  </div>
                  <div className="text-[11px] text-[#FFFBEB]/70 line-clamp-1 mt-0.5">
                    {slotSubtitle}
                  </div>

                  {/* Developer Mode ONLY Indicator in footer */}
                  {isDevMode && (
                    <div className="mt-2 pt-2 border-t border-[#FACC15]/20 w-full flex items-center justify-between text-[11px]">
                      <span className="text-emerald-400 font-mono text-[10px]">Dev Slot {slot.id} • Active</span>
                      <label
                        htmlFor={`poster-file-input-${slot.id}`}
                        className="text-[#FACC15] hover:text-[#FFFFFF] underline font-bold cursor-pointer flex items-center gap-1 select-none"
                      >
                        <Upload className="w-3 h-3" />
                        <span>{text.changeBtn}</span>
                      </label>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
