import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const FaqAccordion: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0E0102] relative border-b border-[#FACC15]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-bold text-[#FACC15] tracking-widest uppercase mb-2">
            {t.faq.tagline}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFBEB] mb-4">
            {t.faq.heading}
          </h2>
          <p className="text-sm text-[#FFFBEB]/80">
            {t.faq.subheading}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FACC15] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Accessible Accordion List in Red & Yellow */}
        <div className="space-y-4">
          {t.faq.items.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[#140103] border-2 border-[#FACC15]/40 overflow-hidden transition-all duration-200 shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 text-base sm:text-lg font-bold text-[#FFFBEB] hover:text-[#FEF08A] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#FACC15]"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#FACC15] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FACC15] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#FFFBEB]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#FFFBEB]/85 leading-relaxed border-t border-[#FACC15]/20 bg-[#0A0102]"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Ask on WhatsApp prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#180204] border-2 border-[#FACC15] shadow-xl">
          <h3 className="text-base font-black text-[#FEF08A] mb-2">
            {t.faq.moreQuestions}
          </h3>
          <p className="text-xs sm:text-sm text-[#FFFBEB]/80 mb-4">
            {t.faq.moreQuestionsDesc}
          </p>
          <a
            href={getWhatsAppUrl(language === 'kn' ? "ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನನಗೆ ಜ್ಯೋತಿಷ್ಯ ಸಮಾಲೋಚನೆಯ ಬಗ್ಗೆ ಕೆಲವು ಪ್ರಶ್ನೆಗಳಿವೆ." : (language === 'hi' ? "नमस्ते पंडित जी, परामर्श के संदर्भ में मेरे कुछ प्रश्न हैं।" : "Hello Pandit Ji, I have some questions regarding consultation."))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-extrabold text-[#380307] bg-gradient-to-r from-[#FEF08A] to-[#FACC15] hover:brightness-110 rounded-xl transition-all shadow-md border border-[#FEF08A]"
          >
            <MessageCircle className="w-4 h-4 fill-[#15803D] text-[#15803D]" />
            <span>{t.faq.askButton}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
