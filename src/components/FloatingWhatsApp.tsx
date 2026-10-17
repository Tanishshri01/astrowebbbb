import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <aside aria-label="Fast WhatsApp Contact">
      <a
        href={getWhatsAppUrl(t.servicesSection.items[0]?.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 group p-3 sm:px-4 sm:py-3 rounded-full bg-[#15803D] text-[#FFFFFF] shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#FACC15] focus:outline-hidden focus:ring-4 focus:ring-[#FACC15]/50"
        title={t.floating.label}
      >
        <MessageCircle className="w-6 h-6 fill-white text-white shrink-0" />
        <span className="hidden sm:inline-block text-xs font-black text-white tracking-wide whitespace-nowrap">
          {t.floating.label}
        </span>

        {/* Subtle glowing Haldi Yellow ring pulse */}
        <span className="absolute -inset-1 rounded-full border-2 border-[#FACC15] opacity-75 animate-ping pointer-events-none" />
      </a>
    </aside>
  );
};
