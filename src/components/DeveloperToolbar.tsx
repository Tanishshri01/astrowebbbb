import React, { useState } from 'react';
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
  Copy
} from 'lucide-react';
import { useDeveloperMode } from '../context/DeveloperContext';

export const DeveloperToolbar: React.FC = () => {
  const { isDevMode, disableDevMode, showToast, toastMessage } = useDeveloperMode();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isDevMode) return null;

  // Scan localStorage for any saved custom photos
  const getStoredImages = () => {
    const list: Array<{ name: string; targetFile: string; data: string; description: string }> = [];
    if (typeof window === 'undefined') return list;

    // Check Pandit portrait
    const pandit = localStorage.getItem('astro_pandit_custom_portrait');
    if (pandit && pandit.startsWith('data:')) {
      list.push({
        name: 'Pandit Sachin Sharma Portrait',
        targetFile: 'pandit_sachin_sharma.jpg',
        data: pandit,
        description: 'Main Astrologer Photo in Top Card'
      });
    }

    // Check Krishna darshan
    const krishna = localStorage.getItem('astro_krishna_custom_darshan');
    if (krishna && krishna.startsWith('data:')) {
      list.push({
        name: 'Lord Krishna Darshan',
        targetFile: 'krishna_darshan.jpg',
        data: krishna,
        description: 'Lord Krishna Altar Section'
      });
    }

    // Check 4 posters
    for (let i = 1; i <= 4; i++) {
      const poster = localStorage.getItem(`astro_poster_slot_${i}`) || localStorage.getItem(`astro_poster_${i}`);
      if (poster && poster.startsWith('data:')) {
        list.push({
          name: `Special Poster ${i}`,
          targetFile: `poster_${i}.jpg`,
          data: poster,
          description: `Poster Showcase Slot ${i}`
        });
      }
    }

    // Check 12 services
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('astro_service_custom_img_')) {
        const serviceId = key.replace('astro_service_custom_img_', '');
        const data = localStorage.getItem(key);
        if (data && data.startsWith('data:')) {
          list.push({
            name: `Service: ${serviceId}`,
            targetFile: `${serviceId}.jpg`,
            data,
            description: `Custom image for service ${serviceId}`
          });
        }
      }
    }

    return list;
  };

  const storedImages = getStoredImages();

  // Helper to trigger browser download of base64 image
  const downloadImage = (dataUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Downloaded ${fileName}! Drop it in GitHub public/images/`);
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
    showToast('Copied to clipboard!');
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

      {/* Export / Permanent GitHub Sync Modal */}
      {showExportModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowExportModal(false)}
        >
          <div
            className="w-full max-w-2xl bg-gradient-to-b from-[#240306] via-[#160204] to-[#0A0102] border-2 border-[#FACC15] rounded-3xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#FACC15]/40">
              <div className="flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-[#FACC15]" />
                <h3 className="text-base sm:text-lg font-black text-[#FEF08A]">
                  Permanent Photos Guide (GitHub & Vercel)
                </h3>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="p-1.5 rounded-full bg-[#1C0204] hover:bg-[#3C0409] text-[#FEF08A] border border-[#FACC15]/50 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#FFFBEB]/80 mb-5 leading-relaxed">
              Vercel builds your live website from files saved inside your <strong className="text-[#FEF08A]">GitHub repository</strong>. 
              To make your photos 100% permanent for all visitors on any device, follow either of these 2 easy methods:
            </p>

            {/* Method 1: Download from this browser and drop in GitHub */}
            <div className="p-4 rounded-2xl bg-[#0D0102] border border-[#FACC15]/40 mb-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FACC15] text-[#240306] font-black text-xs flex items-center justify-center">1</span>
                  <span className="text-xs sm:text-sm font-bold text-[#FEF08A]">
                    Download Photos Uploaded In This Browser
                  </span>
                </div>
                <span className="text-[11px] text-[#4ADE80] font-semibold">
                  {storedImages.length} custom photo(s) found
                </span>
              </div>

              {storedImages.length > 0 ? (
                <div className="space-y-2 mt-2">
                  {storedImages.map((img) => (
                    <div key={img.targetFile} className="flex items-center justify-between p-2.5 rounded-xl bg-[#180204] border border-[#FACC15]/20 gap-3">
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <img src={img.data} alt={img.name} className="w-10 h-10 object-cover rounded-lg border border-[#FACC15]/40 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#FEF08A]">{img.name}</div>
                          <div className="text-[10px] text-[#FFFBEB]/60 font-mono">File: public/images/{img.targetFile}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => downloadImage(img.data, img.targetFile)}
                        className="px-3 py-1.5 bg-[#FACC15] hover:bg-[#FEF08A] text-[#1E0204] text-xs font-extrabold rounded-lg flex items-center gap-1.5 transition shrink-0 cursor-pointer shadow"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-[#140103] border border-dashed border-[#FACC15]/30 text-center">
                  <p className="text-xs text-[#FFFBEB]/60">
                    No custom photos detected in this specific browser yet. You can upload them below or drop your images directly into GitHub!
                  </p>
                </div>
              )}
            </div>

            {/* Method 2: How to drop photos directly on GitHub.com */}
            <div className="p-4 rounded-2xl bg-[#0D0102] border border-[#FACC15]/40 mb-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FACC15] text-[#240306] font-black text-xs flex items-center justify-center">2</span>
                <span className="text-xs sm:text-sm font-bold text-[#FEF08A]">
                  Upload Files to GitHub (Takes 60 seconds)
                </span>
              </div>

              <ol className="text-xs text-[#FFFBEB]/85 space-y-2 pl-3 list-decimal leading-relaxed">
                <li>
                  Open your repository's images folder on GitHub:{' '}
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
                  Click <strong className="text-[#FEF08A]">"Add file"</strong> (top right) ➔ Select <strong className="text-[#FEF08A]">"Upload files"</strong>.
                </li>
                <li>
                  Drag & drop your photos with these exact file names:
                  <ul className="list-disc pl-5 mt-1 space-y-1 font-mono text-[11px] text-[#FEF08A]">
                    <li><code>pandit_sachin_sharma.jpg</code> (Astrologer portrait)</li>
                    <li><code>poster_1.jpg</code>, <code>poster_2.jpg</code>, <code>poster_3.jpg</code>, <code>poster_4.jpg</code> (4 Posters)</li>
                    <li>Or service images: <code>goddess_lakshmi.jpg</code>, <code>radha_krishna.jpg</code>, etc.</li>
                  </ul>
                </li>
                <li>
                  Click the green <strong className="text-[#4ADE80]">"Commit changes"</strong> button.
                </li>
                <li>
                  <strong>Done!</strong> Vercel will automatically re-build and deploy your photos in under 1 minute.
                </li>
              </ol>
            </div>

            {/* Method 3: Or send them in chat */}
            <div className="p-3.5 rounded-2xl bg-[#140103] border border-emerald-500/40 flex items-center justify-between gap-3">
              <div className="text-left">
                <div className="text-xs font-bold text-emerald-300">Method 3: Share Image URLs in Chat</div>
                <div className="text-[11px] text-[#FFFBEB]/70">
                  You can also paste any public image link (Imgur, Google Drive public link, or Postimages) here in chat, and I will commit them directly to GitHub for you!
                </div>
              </div>
            </div>

            <div className="mt-5 text-center">
              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#FEF08A] to-[#FACC15] text-[#240306] text-xs font-black transition active:scale-95 shadow"
              >
                Got It! Close Guide
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
                  title="Make photos permanent on GitHub & Vercel"
                >
                  <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden md:inline">Make Photos Permanent</span>
                  <span className="md:hidden">Permanent</span>
                </button>

                <a
                  href="#services"
                  className="px-2.5 py-1.5 rounded-lg bg-[#2A0408] hover:bg-[#3D050A] border border-[#FACC15]/60 text-[#FEF08A] text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  title="Scroll to Services to edit photos"
                >
                  <Camera className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span className="hidden md:inline">Services Photos</span>
                  <span className="md:hidden">Services</span>
                </a>

                <a
                  href="#posters"
                  className="px-2.5 py-1.5 rounded-lg bg-[#2A0408] hover:bg-[#3D050A] border border-[#FACC15]/60 text-[#FEF08A] text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  title="Scroll to Posters section to edit posters"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span className="hidden md:inline">Special Posters</span>
                  <span className="md:hidden">Posters</span>
                </a>

                <a
                  href="#home"
                  className="px-2.5 py-1.5 rounded-lg bg-[#2A0408] hover:bg-[#3D050A] border border-[#FACC15]/60 text-[#FEF08A] text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  title="Scroll to Astrologer Card"
                >
                  <User className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span className="hidden md:inline">Pandit Portrait</span>
                  <span className="md:hidden">Portrait</span>
                </a>

                <a
                  href="#blog"
                  className="px-2.5 py-1.5 rounded-lg bg-[#2A0408] hover:bg-[#3D050A] border border-[#FACC15]/60 text-[#FEF08A] text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  title="Scroll to Blog section"
                >
                  <FileText className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span className="hidden md:inline">Write Blog</span>
                  <span className="md:hidden">Blog</span>
                </a>

                <button
                  type="button"
                  onClick={disableDevMode}
                  className="px-2.5 py-1.5 rounded-lg bg-red-950/90 hover:bg-red-900 border border-red-500/80 text-red-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  title="Exit Developer Mode to view website as a normal visitor"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Exit Mode</span>
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
