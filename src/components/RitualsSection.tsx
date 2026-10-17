import React from 'react';
import { Flame, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const RitualsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="rituals" className="py-16 sm:py-24 bg-[#0E0102] relative border-b border-[#FACC15]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider uppercase mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308]">
              Sacred Homas & Yajnas
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FACC15] to-transparent mx-auto rounded-full" />
        </div>

        {/* 4 Major Homas List - Full Width 2-Column Responsive Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {t.rituals.items.map((ritual, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#180204] border-2 border-[#FACC15]/40 hover:border-[#FACC15] transition-all duration-300 flex items-start gap-4 shadow-xl hover:shadow-[#FACC15]/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#240306] border border-[#FACC15]/60 flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform">
                  <Flame className="w-6 h-6 text-[#FACC15]" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-[#FEF08A] mb-1.5 group-hover:text-[#FFFFFF] transition-colors">
                    {ritual.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#FFFBEB]/80 leading-relaxed">
                    {ritual.purpose}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={getWhatsAppUrl(
                language === 'kn'
                  ? "ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನನಗೆ ಹೋಮ ಮತ್ತು ಯಜ್ಞ ಆಚರಣೆಯ ಕುರಿತು ವಿವರಣೆ ಹಾಗೂ ಮುಹೂರ್ತದ ಮಾಹಿತಿ ಬೇಕಾಗಿದೆ."
                  : (language === 'hi'
                    ? "नमस्ते पंडित जी, मुझे होम एवं यज्ञ अनुष्ठान के संबंध में जानकारी चाहिए।"
                    : "Hello Pandit Ji, I would like information regarding Homas and sacred rituals.")
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 text-sm sm:text-base font-extrabold text-[#4A050D] bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] hover:from-[#FFFFFF] hover:to-[#FACC15] rounded-xl shadow-xl shadow-[#FACC15]/20 transition-all active:scale-98 border-2 border-[#FEF08A] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-[#15803D] text-[#15803D]" />
              <span>{t.rituals.ctaButton}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
