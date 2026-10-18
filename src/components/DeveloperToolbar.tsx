import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Camera, 
  Image as ImageIcon, 
  User, 
  FileText, 
  LogOut, 
  Check, 
  Info,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  FolderGit2,
  X,
  Copy,
  RefreshCw,
  Upload,
  Sparkles,
  Search
} from 'lucide-react';
import { useDeveloperMode } from '../context/DeveloperContext';
import { 
  safeStorageSet, 
  safeStorageGet, 
  compressImage, 
  idbGetAll, 
  findStoredImage 
} from '../utils/imageStorage';

const SERVICE_ITEMS_META = [
  { id: 'lakshmi-vashikarana', number: '01', title: 'Lakshmi Vashikarana (ಲಕ್ಷ್ಮಿ ವಶೀಕರಣ)', defaultImg: '/images/lakshmi-vashikarana.jpg' },
  { id: 'jana-vashikarana', number: '02', title: 'Jana Vashikarana (ಜನ ವಶೀಕರಣ)', defaultImg: '/images/jana-vashikarana.jpg' },
  { id: 'dhana-vashikarana', number: '03', title: 'Dhana Vashikarana (ಧನ ವಶೀಕರಣ)', defaultImg: '/images/dhana-vashikarana.jpg' },
  { id: 'love-relationship-issues', number: '04', title: 'Love & Relationship (ಪ್ರೇಮ ಸಮಸ್ಯೆ)', defaultImg: '/images/love-relationship-issues.jpg' },
  { id: 'education-and-studies', number: '05', title: 'Education & Studies (ವಿದ್ಯಾಭ್ಯಾಸ)', defaultImg: '/images/education-and-studies.jpg' },
  { id: 'job-and-career-guidance', number: '06', title: 'Job & Career (ಉದ್ಯೋಗ)', defaultImg: '/images/job-and-career-guidance.jpg' },
  { id: 'financial-problems', number: '07', title: 'Financial Problems (ಆರ್ಥಿಕ ಸಮಸ್ಯೆ)', defaultImg: '/images/financial-problems.jpg' },
  { id: 'enemy-troubles-spiritual-remedy', number: '08', title: 'Enemy Troubles (ಶತ್ರು ಬಾಧೆ)', defaultImg: '/images/enemy-troubles-spiritual-remedy.jpg' },
  { id: 'business-problems', number: '09', title: 'Business Problems (ವ್ಯಾಪಾರ ಸಮಸ್ಯೆ)', defaultImg: '/images/business-problems.jpg' },
  { id: 'financial-loss-guidance', number: '10', title: 'Financial Loss (ಧನ ನಷ್ಟ)', defaultImg: '/images/financial-loss-guidance.jpg' },
  { id: 'domestic-discord-and-family-peace', number: '11', title: 'Family Peace (ಕುಟುಂಬ ಕಲಹ)', defaultImg: '/images/domestic-discord-and-family-peace.jpg' },
  { id: 'homa-and-yajna-guidance', number: '12', title: 'Homa & Yajna (ಹೋಮ ಯಾಗ)', defaultImg: '/images/homa-and-yajna-guidance.jpg' },
];

export const DeveloperToolbar: React.FC = () => {
  const { isDevMode, disableDevMode, showToast, toastMessage } = useDeveloperMode();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'manager' | 'guide'>('manager');
  const [isScanning, setIsScanning] = useState(false);
  const [uploadingTarget, setUploadingTarget] = useState<string | null>(null);

  if (!isDevMode) return null;

  // Scan localStorage & memory for any saved custom photos
  const getStoredImages = () => {
    const list: Array<{ name: string; targetFile: string; data: string; description: string; key: string }> = [];
    if (typeof window === 'undefined') return list;

    // Check Pandit portrait
    const pandit = localStorage.getItem('astro_pandit_custom_portrait') || safeStorageGet('astro_pandit_custom_portrait');
    if (pandit && pandit.startsWith('data:')) {
      list.push({
        name: 'Pandit Sachin Sharma Portrait',
        targetFile: 'pandit_sachin_sharma.jpg',
        data: pandit,
        description: 'Main Astrologer Photo in Top Card',
        key: 'astro_pandit_custom_portrait'
      });
    }

    // Check Krishna darshan
    const krishna = localStorage.getItem('astro_krishna_custom_darshan') || safeStorageGet('astro_krishna_custom_darshan');
    if (krishna && krishna.startsWith('data:')) {
      list.push({
        name: 'Lord Krishna Darshan',
        targetFile: 'krishna_darshan.jpg',
        data: krishna,
        description: 'Lord Krishna Altar Section',
        key: 'astro_krishna_custom_darshan'
      });
    }

    // Check 4 posters
    for (let i = 1; i <= 4; i++) {
      const poster = findStoredImage(`astro_poster_slot_${i}`, [
        `astro_poster_${i}`,
        `poster_slot_${i}`,
        `poster_${i}`,
        `custom_poster_${i}`,
      ]);
      if (poster && poster.startsWith('data:')) {
        list.push({
          name: `Special Poster ${i}`,
          targetFile: `poster_${i}.jpg`,
          data: poster,
          description: `Poster Showcase Slot ${i}`,
          key: `astro_poster_slot_${i}`
        });
      }
    }

    // Check 12 services
    SERVICE_ITEMS_META.forEach((service) => {
      const custom = findStoredImage(`astro_service_custom_img_${service.id}`, [
        `astro_service_img_${service.id}`,
        `service_custom_${service.id}`,
        `service_${service.id}`,
        `astro_service_${service.id}`,
        `service_${service.number}`,
        `astro_service_${service.number}`,
        `service_${parseInt(service.number, 10)}`,
      ]);
      if (custom && custom.startsWith('data:')) {
        list.push({
          name: service.title,
          targetFile: `${service.id}.jpg`,
          data: custom,
          description: `Service ${service.number}`,
          key: `astro_service_custom_img_${service.id}`
        });
      }
    });

    return list;
  };

  const storedImages = getStoredImages();

  // Deep Scan & Auto-Recover across entire browser storage
  const handleDeepScanAndRecover = async () => {
    setIsScanning(true);
    let recoveredCount = 0;

    try {
      // 1. Scan all localStorage keys
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!k) continue;
        const val = localStorage.getItem(k);
        if (!val || !val.startsWith('data:image')) continue;

        const lowerK = k.toLowerCase();

        // Check if matches posters
        for (let p = 1; p <= 4; p++) {
          if (lowerK.includes('poster') && lowerK.includes(String(p))) {
            safeStorageSet(`astro_poster_slot_${p}`, val);
            safeStorageSet(`astro_poster_${p}`, val);
            recoveredCount++;
          }
        }

        // Check if matches services
        SERVICE_ITEMS_META.forEach((item) => {
          if (
            lowerK.includes(item.id.toLowerCase()) ||
            lowerK.includes(`service_${item.number}`) ||
            lowerK.includes(`service_${parseInt(item.number, 10)}`)
          ) {
            safeStorageSet(`astro_service_custom_img_${item.id}`, val);
            safeStorageSet(`astro_service_img_${item.id}`, val);
            recoveredCount++;
          }
        });
      }

      // 2. Scan all IndexedDB entries
      const idbData = await idbGetAll();
      for (const [k, val] of Object.entries(idbData)) {
        if (!val || !val.startsWith('data:image')) continue;
        const lowerK = k.toLowerCase();

        for (let p = 1; p <= 4; p++) {
          if (lowerK.includes('poster') && lowerK.includes(String(p))) {
            safeStorageSet(`astro_poster_slot_${p}`, val);
            recoveredCount++;
          }
        }

        SERVICE_ITEMS_META.forEach((item) => {
          if (lowerK.includes(item.id.toLowerCase()) || lowerK.includes(`service_${item.number}`)) {
            safeStorageSet(`astro_service_custom_img_${item.id}`, val);
            recoveredCount++;
          }
        });
      }

      showToast(`Scan complete! Recovered and synchronized ${recoveredCount} custom photo records.`);
    } catch (err) {
      console.error('Scan error:', err);
      showToast('Scan complete.');
    } finally {
      setIsScanning(false);
    }
  };

  // Direct upload for any item from the manager modal
  const handleDirectUpload = async (targetType: 'service' | 'poster', targetId: string | number, file: File) => {
    try {
      const targetKey = `${targetType}-${targetId}`;
      setUploadingTarget(targetKey);

      if (targetType === 'service') {
        const compressed = await compressImage(file, 800, 800, 0.72);
        safeStorageSet(`astro_service_custom_img_${targetId}`, compressed);
        safeStorageSet(`astro_service_img_${targetId}`, compressed);
        safeStorageSet(`service_${targetId}`, compressed);
        showToast(`Updated photo for service ${targetId}!`);
      } else {
        const compressed = await compressImage(file, 800, 1060, 0.72);
        safeStorageSet(`astro_poster_slot_${targetId}`, compressed);
        safeStorageSet(`astro_poster_${targetId}`, compressed);
        safeStorageSet(`poster_${targetId}`, compressed);
        showToast(`Updated Poster ${targetId}!`);
      }
    } catch (err) {
      console.error('Upload error:', err);
    } finally {
      setUploadingTarget(null);
    }
  };

  const downloadImage = async (urlOrData: string, fileName: string) => {
    try {
      if (urlOrData.startsWith('data:')) {
        const link = document.createElement('a');
        link.href = urlOrData;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const response = await fetch(urlOrData);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      }
      showToast(`Downloaded ${fileName}! Drop it in GitHub public/images/`);
    } catch (err) {
      console.error('Download error:', err);
      window.open(urlOrData, '_blank');
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#1C0204] border-2 border-[#FACC15] text-[#FEF08A] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce">
          <Check className="w-5 h-5 text-green-400" />
          <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Photo Manager & Permanent GitHub Sync Modal */}
      {showExportModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
          onClick={() => setShowExportModal(false)}
        >
          <div
            className="w-full max-w-4xl bg-gradient-to-b from-[#240306] via-[#160204] to-[#0A0102] border-2 border-[#FACC15] rounded-3xl p-5 sm:p-6 shadow-2xl relative max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#FACC15]/40 shrink-0">
              <div className="flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-[#FACC15]" />
                <h3 className="text-base sm:text-lg font-black text-[#FEF08A]">
                  Photo Manager & Permanent GitHub Tools
                </h3>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="p-1.5 rounded-full bg-[#1C0204] hover:bg-[#3C0409] text-[#FEF08A] border border-[#FACC15]/50 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mode Tabs & Deep Scan Button */}
            <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#FACC15]/20 shrink-0 flex-wrap">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('manager')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    activeTab === 'manager'
                      ? 'bg-[#FACC15] text-[#240306]'
                      : 'bg-[#1C0204] text-[#FEF08A] border border-[#FACC15]/40 hover:bg-[#2A0307]'
                  }`}
                >
                  📸 Photo Manager & Direct Upload (All 12 Services & 4 Posters Ready)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('guide')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    activeTab === 'guide'
                      ? 'bg-[#FACC15] text-[#240306]'
                      : 'bg-[#1C0204] text-[#FEF08A] border border-[#FACC15]/40 hover:bg-[#2A0307]'
                  }`}
                >
                  📖 Permanent GitHub Guide
                </button>
              </div>

              <button
                type="button"
                onClick={handleDeepScanAndRecover}
                disabled={isScanning}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center gap-1.5 transition active:scale-95 shadow cursor-pointer"
                title="Scan all browser memory and IndexedDB to restore any lost photos"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                <span>{isScanning ? 'Scanning Browser...' : '🔍 Auto-Recover Lost Photos'}</span>
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-4">
              {activeTab === 'manager' ? (
                <>
                  {/* 4 Special Posters Manager */}
                  <div className="p-4 rounded-2xl bg-[#0D0102] border border-[#FACC15]/40">
                    <h4 className="text-xs sm:text-sm font-black text-[#FEF08A] mb-3 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-[#FACC15]" />
                        <span>4 Special Posters (ವಿಶೇಷ ಪೋಸ್ಟರ್‌ಗಳು - 4/4 Active)</span>
                      </span>
                      <span className="text-[11px] text-emerald-400 font-mono font-semibold">Ready for Vercel & GitHub</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {[1, 2, 3, 4].map((slotId) => {
                        const current = findStoredImage(`astro_poster_slot_${slotId}`, [
                          `astro_poster_${slotId}`,
                          `poster_${slotId}`,
                        ]);
                        const isUploading = uploadingTarget === `poster-${slotId}`;
                        const activePosterUrl = current || `/images/poster_${slotId}.jpg`;

                        return (
                          <div
                            key={slotId}
                            className="p-3 rounded-xl bg-[#140103] border border-[#FACC15]/30 flex flex-col items-center text-center gap-2"
                          >
                            <span className="text-xs font-bold text-[#FEF08A]">Special Poster {slotId}</span>
                            <div className="w-full aspect-[3/4] max-h-36 rounded-lg overflow-hidden bg-[#0A0102] border border-[#FACC15]/40 relative">
                              <img
                                src={activePosterUrl}
                                alt={`Poster ${slotId}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.currentTarget;
                                  if (!target.src.endsWith('/images/krishna_darshan.jpg')) {
                                    target.src = '/images/krishna_darshan.jpg';
                                  }
                                }}
                              />
                              <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-emerald-950/90 border border-emerald-400 text-emerald-300 text-[9px] font-bold">
                                {current ? 'Custom' : 'Active'}
                              </span>
                            </div>

                            <label
                              htmlFor={`modal-upload-poster-${slotId}`}
                              className="w-full py-1.5 bg-[#FACC15] hover:bg-[#FEF08A] text-[#1E0204] text-xs font-black rounded-lg flex items-center justify-center gap-1 cursor-pointer transition active:scale-95 shadow"
                            >
                              <Upload className="w-3 h-3" />
                              <span>{isUploading ? 'Uploading...' : 'Change Photo'}</span>
                            </label>
                            <input
                              type="file"
                              id={`modal-upload-poster-${slotId}`}
                              accept="image/*"
                              className="sr-only"
                              onChange={(e) => {
                                const f = e.target.files?.[0];
                                if (f) handleDirectUpload('poster', slotId, f);
                              }}
                            />

                            <button
                              type="button"
                              onClick={() => downloadImage(activePosterUrl, `poster_${slotId}.jpg`)}
                              className="text-[11px] text-[#FACC15] hover:underline flex items-center gap-1 cursor-pointer"
                              title="Download to save permanently in GitHub public/images/"
                            >
                              <Download className="w-3 h-3" />
                              <span>Download for GitHub</span>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 12 Services Photos Manager */}
                  <div className="p-4 rounded-2xl bg-[#0D0102] border border-[#FACC15]/40">
                    <h4 className="text-xs sm:text-sm font-black text-[#FEF08A] mb-3 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-[#FACC15]" />
                        <span>12 Vedic Services Photos (೧೨ ಜ್ಯೋತಿಷ್ಯ ಸೇವೆಗಳು - 12/12 Active)</span>
                      </span>
                      <span className="text-[11px] text-emerald-400 font-mono font-semibold">All 12 Active in /public/images</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {SERVICE_ITEMS_META.map((item) => {
                        const current = findStoredImage(`astro_service_custom_img_${item.id}`, [
                          `astro_service_img_${item.id}`,
                          `service_custom_${item.id}`,
                          `service_${item.id}`,
                        ]);
                        const isUploading = uploadingTarget === `service-${item.id}`;
                        const activeServiceUrl = current || item.defaultImg;

                        return (
                          <div
                            key={item.id}
                            className="p-3 rounded-xl bg-[#140103] border border-[#FACC15]/30 flex flex-col justify-between gap-2"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#0A0102] border border-[#FACC15]/40 shrink-0 relative">
                                <img
                                  src={activeServiceUrl}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    if (!target.src.endsWith('/images/krishna_darshan.jpg')) {
                                      target.src = '/images/krishna_darshan.jpg';
                                    }
                                  }}
                                />
                                <span className="absolute bottom-0 inset-x-0 bg-emerald-950/90 text-emerald-300 text-[8px] font-bold text-center">
                                  {current ? 'Custom' : 'Active'}
                                </span>
                              </div>
                              <div className="overflow-hidden">
                                <div className="text-xs font-bold text-[#FEF08A] line-clamp-1">{item.title}</div>
                                <div className="text-[10px] text-[#FFFBEB]/60 font-mono">Service {item.number} • {item.id}.jpg</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 pt-1 border-t border-[#FACC15]/20">
                              <label
                                htmlFor={`modal-upload-service-${item.id}`}
                                className="flex-1 py-1.5 bg-[#FACC15] hover:bg-[#FEF08A] text-[#1E0204] text-[11px] font-black rounded-lg flex items-center justify-center gap-1 cursor-pointer transition active:scale-95 shadow"
                              >
                                <Upload className="w-3 h-3" />
                                <span>{isUploading ? 'Uploading...' : 'Change'}</span>
                              </label>
                              <input
                                type="file"
                                id={`modal-upload-service-${item.id}`}
                                accept="image/*"
                                className="sr-only"
                                onChange={(e) => {
                                  const f = e.target.files?.[0];
                                  if (f) handleDirectUpload('service', item.id, f);
                                }}
                              />

                              <button
                                type="button"
                                onClick={() => downloadImage(activeServiceUrl, `${item.id}.jpg`)}
                                className="p-1.5 rounded-lg bg-[#2A0307] hover:bg-[#3D050A] text-[#FEF08A] border border-[#FACC15]/40 cursor-pointer"
                                title={`Download ${item.id}.jpg for GitHub`}
                              >
                                <Download className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                /* Permanent GitHub Guide Tab */
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#0D0102] border border-[#FACC15]/40 space-y-3">
                    <h4 className="text-sm font-black text-[#FEF08A]">
                      How to Make All Photos Permanent on GitHub & Vercel
                    </h4>
                    <p className="text-xs text-[#FFFBEB]/80 leading-relaxed">
                      Browser memory is temporary. To make photos permanent for all visitors on mobile, desktop, and all networks:
                    </p>

                    <ol className="text-xs text-[#FFFBEB]/85 space-y-2.5 pl-4 list-decimal leading-relaxed">
                      <li>
                        Download your customized photos using the <strong>"Download for GitHub"</strong> buttons in the Photos Manager tab.
                      </li>
                      <li>
                        Open your repository on GitHub:{' '}
                        <a
                          href="https://github.com/Tanishshri01/astrowebbbb/tree/main/public/images"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FACC15] underline font-bold inline-flex items-center gap-1"
                        >
                          <span>github.com/Tanishshri01/astrowebbbb/public/images</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>
                        Click <strong>"Add file"</strong> (top-right) ➔ <strong>"Upload files"</strong>.
                      </li>
                      <li>
                        Drag & drop the downloaded files (e.g. <code>pandit_sachin_sharma.jpg</code>, <code>poster_1.jpg</code>, etc.).
                      </li>
                      <li>
                        Click <strong>"Commit changes"</strong>. Vercel will rebuild and your photos will be permanent for everyone worldwide!
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="pt-3 mt-3 border-t border-[#FACC15]/30 flex items-center justify-between shrink-0">
              <span className="text-[11px] text-[#FFFBEB]/60">
                Any photo uploaded here updates the website immediately.
              </span>
              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#FEF08A] to-[#FACC15] text-[#240306] text-xs font-black transition active:scale-95 shadow cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Developer Toolbar */}
      <aside 
        aria-label="Developer Mode Controls"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl"
      >
        <div className="bg-[#1C0204]/95 border-2 border-[#FACC15] backdrop-blur-md rounded-2xl shadow-2xl shadow-black/80 px-4 py-3 text-[#FFFBEB]">
          <div className="flex items-center justify-between gap-3">
            {/* Left Status Badge */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="flex flex-col">
                <span className="text-xs font-black text-[#FEF08A] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>DEVELOPER MODE ACTIVE</span>
                </span>
                <span className="text-[10px] text-[#FFFBEB]/70 hidden sm:inline">
                  Upload buttons are visible ONLY to you
                </span>
              </div>
            </div>

            {/* Quick Actions (when expanded) */}
            {!isCollapsed && (
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-end">
                <button
                  type="button"
                  onClick={() => setShowExportModal(true)}
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-500/80 text-emerald-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  title="Open Photos Manager & Recovery Center"
                >
                  <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-extrabold text-amber-300">📸 Photos Manager</span>
                </button>

                <a
                  href="#services"
                  className="px-2.5 py-1.5 rounded-lg bg-[#2A0408] hover:bg-[#3D050A] border border-[#FACC15]/60 text-[#FEF08A] text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  title="Scroll to Services to edit photos"
                >
                  <Camera className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span className="hidden md:inline">Services</span>
                </a>

                <a
                  href="#posters"
                  className="px-2.5 py-1.5 rounded-lg bg-[#2A0408] hover:bg-[#3D050A] border border-[#FACC15]/60 text-[#FEF08A] text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  title="Scroll to Posters section to edit posters"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span className="hidden md:inline">Posters</span>
                </a>

                <a
                  href="#home"
                  className="px-2.5 py-1.5 rounded-lg bg-[#2A0408] hover:bg-[#3D050A] border border-[#FACC15]/60 text-[#FEF08A] text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  title="Scroll to Astrologer Card"
                >
                  <User className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span className="hidden md:inline">Portrait</span>
                </a>

                <a
                  href="#blog"
                  className="px-2.5 py-1.5 rounded-lg bg-[#2A0408] hover:bg-[#3D050A] border border-[#FACC15]/60 text-[#FEF08A] text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  title="Scroll to Blog section"
                >
                  <FileText className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span className="hidden md:inline">Blog</span>
                </a>

                <button
                  type="button"
                  onClick={disableDevMode}
                  className="px-2.5 py-1.5 rounded-lg bg-red-950/90 hover:bg-red-900 border border-red-500/80 text-red-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  title="Exit Developer Mode to view website as a normal visitor"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Exit</span>
                </button>
              </div>
            )}

            {/* Collapse toggle */}
            <button
              type="button"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 rounded-lg bg-[#2A0408] hover:bg-[#3D050A] text-[#FEF08A] border border-[#FACC15]/40 transition cursor-pointer shrink-0"
              title={isCollapsed ? 'Expand Developer Toolbar' : 'Minimize Developer Toolbar'}
            >
              {isCollapsed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
