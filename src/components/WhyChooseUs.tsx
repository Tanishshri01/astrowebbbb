import React from 'react';
import { Ear, Languages, Compass, MessageCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const pillars = [
    {
      icon: <Ear className="w-6 h-6 text-[#FACC15]" />,
      title: t.whyChooseUs.card1Title,
      description: t.whyChooseUs.card1Desc,
    },
    {
      icon: <Languages className="w-6 h-6 text-[#FACC15]" />,
      title: t.whyChooseUs.card2Title,
      description: t.whyChooseUs.card2Desc,
    },
    {
      icon: <Compass className="w-6 h-6 text-[#FACC15]" />,
      title: t.whyChooseUs.card3Title,
      description: t.whyChooseUs.card3Desc,
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#FACC15]" />,
      title: t.whyChooseUs.card4Title,
      description: t.whyChooseUs.card4Desc,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0E0102] relative border-b border-[#FACC15]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 drop-shadow-md tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FEF08A] to-[#FACC15]">
              {t.whyChooseUs.heading}
            </span>
          </h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-transparent via-[#FACC15] to-transparent mx-auto rounded-full shadow-sm shadow-[#FACC15]/40" />
        </div>

        {/* 4 Pillars Grid in Red and Yellow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#140103] border-2 border-[#FACC15]/40 p-6 flex flex-col justify-between hover:border-[#FACC15] transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#240306] border border-[#FACC15] flex items-center justify-center mb-5 shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#FFFBEB] mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FFFBEB]/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#FACC15]/20 flex items-center gap-1.5 text-xs text-[#FACC15] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#FACC15]" />
                <span>{t.whyChooseUs.badge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
