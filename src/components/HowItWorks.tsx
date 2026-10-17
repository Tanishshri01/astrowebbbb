import React from 'react';
import { MessageCircle, MessageSquareText, HelpCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const HowItWorks: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    {
      step: '01',
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
      icon: <MessageSquareText className="w-6 h-6 text-[#FACC15]" />,
    },
    {
      step: '02',
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
      icon: <HelpCircle className="w-6 h-6 text-[#FACC15]" />,
    },
    {
      step: '03',
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
      icon: <Sparkles className="w-6 h-6 text-[#FACC15]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#0A0102] relative border-b border-[#FACC15]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-bold text-[#FACC15] tracking-widest uppercase mb-2">
            {t.howItWorks.tagline}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFBEB] mb-4">
            {t.howItWorks.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#FFFBEB]/80 max-w-xl mx-auto">
            {t.howItWorks.subheading}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FACC15] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Step Cards in Red and Yellow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative rounded-2xl bg-[#180204] border-2 border-[#FACC15]/40 p-8 flex flex-col items-center text-center group hover:border-[#FACC15] transition-all duration-300 shadow-xl"
            >
              {/* Step Badge */}
              <div className="w-14 h-14 rounded-2xl bg-[#280307] border-2 border-[#FACC15] flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                {item.icon}
              </div>

              <div className="text-xs font-mono font-bold text-[#FACC15] tracking-widest mb-2">
                STEP {item.step}
              </div>

              <h3 className="text-lg font-black text-[#FFFBEB] mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#FFFBEB]/80 leading-relaxed">
                {item.description}
              </p>

              {/* Connecting arrow on desktop */}
              {index < 2 && (
                <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-20 text-[#FACC15] text-2xl font-black">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp CTA beneath steps */}
        <div className="text-center">
          <a
            href={getWhatsAppUrl(language === 'kn' ? "ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನಾನು ಮೊದಲ ಬಾರಿಗೆ ಜ್ಯೋತಿಷ್ಯ ಸಮಾಲೋಚನೆ ಪಡೆಯಲು ಬಯಸುತ್ತೇನೆ. ವಿವರ ತಿಳಿಸಿ." : (language === 'hi' ? "नमस्ते पंडित जी, मुझे प्रथम बार ज्योतिषीय परामर्श प्राप्त करना है। कृपया विधि बताएं।" : "Hello Pandit Ji, I would like to schedule an astrological consultation."))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-black text-[#380307] bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] hover:from-[#FFFFFF] hover:to-[#FACC15] rounded-xl shadow-xl shadow-[#FACC15]/30 hover:shadow-2xl transition-all active:scale-98 cursor-pointer border border-[#FEF08A]"
          >
            <MessageCircle className="w-5 h-5 fill-[#15803D] text-[#15803D]" />
            <span>{t.howItWorks.ctaButton}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
