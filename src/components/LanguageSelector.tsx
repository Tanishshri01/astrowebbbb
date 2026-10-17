import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

export const LanguageSelector: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Array<{ code: Language; name: string; native: string }> = [
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు' },
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Translate Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="ಭಾಷೆ ಬದಲಾಯಿಸಿ / Change Language"
        className={`inline-flex items-center gap-1.5 rounded-full border border-[#FACC15]/60 bg-[#7A0C16] text-[#FEF08A] hover:bg-[#991B1B] hover:text-[#FFFFFF] transition-all shadow-sm focus:outline-hidden focus:ring-2 focus:ring-[#FACC15] cursor-pointer ${
          compact ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-xs sm:text-sm font-semibold'
        }`}
      >
        <Globe className="w-3.5 h-3.5 text-[#FACC15]" />
        <span className="font-bold">{currentLang.native}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-[#FACC15] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 mt-1.5 w-44 rounded-xl bg-[#4A050D] border-2 border-[#FACC15] shadow-2xl py-1 z-50 animate-fadeIn"
          style={{
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.8), 0 0 15px rgba(250, 204, 21, 0.3)',
          }}
        >
          <div className="px-3 py-1.5 text-[11px] font-bold text-[#FACC15] uppercase tracking-wider border-b border-[#FACC15]/20">
            ಭಾಷೆ / Select Language
          </div>
          {languages.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-left flex items-center justify-between text-xs sm:text-sm transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#991B1B] text-[#FEF08A] font-bold'
                    : 'text-[#FFFBEB] hover:bg-[#7A0C16] hover:text-[#FACC15]'
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-semibold">{lang.native}</span>
                  <span className="text-[10px] opacity-75">{lang.name}</span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-[#FACC15]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
