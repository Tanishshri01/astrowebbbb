import React from 'react';
import { BookOpen, Heart, Flame, Sparkles } from 'lucide-react';
import { VedicChartVisual } from './SacredIcons';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const TrustIntro: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0E0102] relative overflow-hidden border-b border-[#FACC15]/30">
      
      {/* Background glow decoration in sacred red and yellow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#991B1B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FACC15]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FACC15] tracking-widest uppercase mb-2">
            <span>{t.about.tagline}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFBEB] mb-4">
            {t.about.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FACC15] to-transparent mx-auto rounded-full" />
        </div>

        {/* 2-Column Split: Story & Visual Altar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Vedic Tradition Explanation */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="border-l-4 border-[#FACC15] pl-4 sm:pl-6 py-2 bg-[#180204]/60 rounded-r-xl">
              <p className="text-lg sm:text-xl font-bold text-[#FEF08A] italic leading-relaxed">
                "{t.about.quote}"
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#FFFBEB]/90 leading-relaxed">
              {t.about.desc1}
            </p>

            <p className="text-base text-[#FFFBEB]/85 leading-relaxed">
              {t.about.desc2}
            </p>

            {/* Core Values / Traditional Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-[#180204] border-2 border-[#FACC15]/40 flex items-start gap-3 shadow-md hover:border-[#FACC15] transition-colors">
                <BookOpen className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#FFFBEB] mb-1">{t.about.pillar1Title}</h4>
                  <p className="text-xs text-[#FFFBEB]/75 leading-normal">
                    {t.about.pillar1Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#180204] border-2 border-[#FACC15]/40 flex items-start gap-3 shadow-md hover:border-[#FACC15] transition-colors">
                <Flame className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#FFFBEB] mb-1">{t.about.pillar2Title}</h4>
                  <p className="text-xs text-[#FFFBEB]/75 leading-normal">
                    {t.about.pillar2Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#180204] border-2 border-[#FACC15]/40 flex items-start gap-3 shadow-md hover:border-[#FACC15] transition-colors">
                <Heart className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#FFFBEB] mb-1">{t.about.pillar3Title}</h4>
                  <p className="text-xs text-[#FFFBEB]/75 leading-normal">
                    {t.about.pillar3Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#180204] border-2 border-[#FACC15]/40 flex items-start gap-3 shadow-md hover:border-[#FACC15] transition-colors">
                <Sparkles className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#FFFBEB] mb-1">{t.about.pillar4Title}</h4>
                  <p className="text-xs text-[#FFFBEB]/75 leading-normal">
                    {t.about.pillar4Desc}
                  </p>
                </div>
              </div>

            </div>

            {/* Action */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(t.servicesSection.items[0]?.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FACC15] hover:text-[#FFFFFF] transition-colors group"
              >
                <span>{t.about.whatsappChat}</span>
                <span className="transition-transform group-hover:translate-x-1 font-bold">→</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Vedic Chart / Photo-ready Altar Frame in Yellow & Red */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-[#180204] p-5 sm:p-6 border-2 border-[#FACC15] shadow-2xl relative">
              
              {/* Corner Traditional Accents */}
              <div className="absolute top-2 left-2 text-[#FACC15] font-bold text-xs">ॐ</div>
              <div className="absolute top-2 right-2 text-[#FACC15] font-bold text-xs">卐</div>

              {/* Vedic Chart Container */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0A0102] border border-[#FACC15]/50 mb-4 flex items-center justify-center p-3 shadow-inner">
                <VedicChartVisual className="w-full h-full" />
              </div>

              {/* Title & Caption ready for real photograph replacement */}
              <div className="text-center">
                <div className="text-sm font-black text-[#FEF08A]">
                  {t.brand.astrologer}
                </div>
                <div className="text-xs text-[#FFFBEB]/80 mt-0.5 font-medium">
                  {t.brand.name}
                </div>
                <div className="text-[11px] text-[#FACC15] mt-2 italic font-semibold">
                  {t.about.chartTitle}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
