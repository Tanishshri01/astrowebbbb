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
  ExternalLink
} from 'lucide-react';
import { useDeveloperMode } from '../context/DeveloperContext';

export const DeveloperToolbar: React.FC = () => {
  const { isDevMode, disableDevMode, setActiveDevModal, showToast, toastMessage } = useDeveloperMode();
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (!isDevMode) return null;

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#1C0204] border-2 border-[#FACC15] text-[#FEF08A] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce">
          <Check className="w-5 h-5 text-green-400" />
          <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
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
