import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const STORAGE_KEY = 'kannada_astro_popup_dismissed_session';

export const WhatsAppPopup: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const isDismissed = sessionStorage.getItem(STORAGE_KEY);
      if (isDismissed === 'true') {
        return;
      }
    } catch {
      // ignore
    }

    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    return () => clearTimeout(initialTimer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // ignore
    }
  };

  const handleOpenWhatsApp = () => {
    window.open(getWhatsAppUrl(t.servicesSection.items[0]?.whatsappMessage), '_blank', 'noopener,noreferrer');
    handleDismiss();
  };

  if (!isVisible) return null;

  return (
    <div
      role="complementary"
      aria-label="WhatsApp Consultation Popup"
      className="fixed bottom-20 right-4 sm:right-6 z-50 max-w-xs sm:max-w-sm w-full bg-[#140103] border-2 border-[#FACC15] rounded-2xl shadow-2xl p-4 text-[#FFFBEB] transition-all duration-300 transform translate-y-0 opacity-100"
      style={{
        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 20px rgba(250, 204, 21, 0.35)',
      }}
    >
      {/* Top Gold/Yellow Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] rounded-t-2xl" />

      {/* Close button */}
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute top-2.5 right-2.5 p-1 text-[#FACC15] hover:text-[#FFFFFF] hover:bg-[#280307] rounded-full transition-colors focus:outline-hidden focus:ring-1 focus:ring-[#FACC15]"
        aria-label={t.popup.closeLabel}
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start gap-3 pt-1">
        {/* WhatsApp Icon */}
        <div className="w-10 h-10 rounded-full bg-[#15803D]/30 border-2 border-[#FACC15] flex items-center justify-center shrink-0 shadow-sm">
          <MessageCircle className="w-5 h-5 fill-[#22C55E] text-[#22C55E]" />
        </div>

        <div className="flex-1 pr-4">
          <h4 className="text-sm font-black text-[#FEF08A] leading-tight">
            {t.popup.heading}
          </h4>
          <p className="text-xs text-[#FFFBEB]/85 mt-1 leading-snug font-medium">
            {t.popup.subtext}
          </p>

          <button
            type="button"
            onClick={handleOpenWhatsApp}
            className="mt-3 w-full py-2 px-3 text-xs font-black text-[#380307] bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] hover:brightness-110 rounded-lg shadow-md flex items-center justify-center gap-1.5 transition-all active:scale-98 cursor-pointer border border-[#FEF08A]"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#15803D] text-[#15803D]" />
            <span>{t.popup.button}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
