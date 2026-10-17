import React, { useState } from 'react';
import { MessageCircle, Maximize2, X } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { KRISHNA_BHAGWAN_IMAGE } from '../utils/serviceImages';
import { useLanguage } from '../context/LanguageContext';

export const KrishnaDarshanSection: React.FC = () => {
  const { language } = useLanguage();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [krishnaImg] = useState(() => {
    return localStorage.getItem('astro_krishna_custom_darshan') || KRISHNA_BHAGWAN_IMAGE;
  });

  const titleByLang = {
    kn: 'ಭಗವಾನ್ ಶ್ರೀ ಕೃಷ್ಣ ಪರಮಾತ್ಮನ ದೈವಿಕ ದರ್ಶನ & ಆಶೀರ್ವಾದ',
    en: 'Divine Darshan & Sacred Blessings of Lord Sri Krishna',
    hi: 'भगवान श्री कृष्ण का दिव्य दर्शन एवं पावन आशीर्वाद',
    te: 'భగవాన్ శ్రీ కృష్ణ పరమాత్మ దివ్య దర్శనం & ఆశీస్సులు'
  };

  const subtitleByLang = {
    kn: 'ಸಮಸ್ತ ಕಷ್ಟ ಕಾರ್ಪಣ್ಯಗಳ ನಿವಾರಕ ಹಾಗೂ ಜ್ಞಾನಜ್ಯೋತಿಯಾದ ಶ್ರೀ ಕೃಷ್ಣ ಪರಬ್ರಹ್ಮನ ಕೃಪೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಜೀವನದ ಶುಭಾರಂಭ',
    en: 'Commence your spiritual consultation with the supreme grace of Lord Sri Krishna, remover of all afflictions and difficulties.',
    hi: 'समस्त कष्टों का नाश करने वाले एवं ज्ञानदाता भगवान श्री कृष्ण की कृपा के साथ जीवन में सकारात्मकता लाएं।',
    te: 'సకల కష్టాలను నివారించి జ్ఞానాన్ని ప్రసాదించే శ్రీ కృష్ణ భగవానుని అనుగ్రహంతో జీవితాన్ని ముందుకు సాగించండి.'
  };

  const shlokaKannada = 'ಕೃಷ್ಣಾಯ ವಾಸುದೇವಾಯ ಹರಯೇ ಪರಮಾತ್ಮನೇ । ಪ್ರಣತ ಕ್ಲೇಶನಾಶಾಯ ಗೋವಿಂದಾಯ ನಮೋ ನಮಃ ॥';

  const ctaText = {
    kn: 'ಶ್ರೀ ಕೃಷ್ಣ ಕೃಪೆಗೆ ಪ್ರಾರ್ಥಿಸಿ • WhatsApp ಸಮಾಲೋಚನೆ',
    en: 'Seek Lord Krishna Blessings • WhatsApp Consultation',
    hi: 'श्री कृष्ण कृपा हेतु • WhatsApp परामर्श',
    te: 'శ్రీ కృష్ణ అనుగ్రహం కోసం • WhatsApp సంప్రదింపు'
  };

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[#0A0102] via-[#140103] to-[#0A0102] border-b-2 border-[#FACC15]/40 overflow-hidden">
      {/* Fullscreen Sacred Darshan Lightbox Modal */}
      {isFullScreen && (
        <div
          className="fixed inset-0 z-50 bg-[#070102]/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 animate-fadeIn"
          onClick={() => setIsFullScreen(false)}
        >
          {/* Top Bar with Title and Close Button */}
          <div className="w-full max-w-4xl flex items-center justify-between py-2 border-b border-[#FACC15]/40">
            <div className="flex items-center gap-2 text-[#FEF08A] font-black text-sm sm:text-base">
              <span className="text-[#FACC15]">ॐ</span>
              <span>ಶ್ರೀ ಕೃಷ್ಣ ಪರಮಾತ್ಮನ ಪೂರ್ಣ ದರ್ಶನ • Lord Krishna Darshan</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFullScreen(false);
              }}
              className="p-2 rounded-full bg-[#1C0204] hover:bg-[#3D050A] text-[#FEF08A] border border-[#FACC15] transition cursor-pointer"
              title="Close Fullscreen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Screen-Fitted Image Container */}
          <div className="flex-1 flex items-center justify-center max-h-[82vh] py-2 w-full">
            <div
              className="relative max-h-full rounded-2xl overflow-hidden border-2 border-[#FACC15] shadow-2xl shadow-yellow-500/20 bg-[#0A0102]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={krishnaImg}
                alt="Lord Sri Krishna Fullscreen Divine Darshan"
                className="max-h-[80vh] w-auto max-w-[90vw] object-contain rounded-xl"
              />
              <div className="absolute top-2 left-2 text-[#FACC15] text-xs font-serif opacity-75">ॐ</div>
              <div className="absolute top-2 right-2 text-[#FACC15] text-xs font-serif opacity-75">卐</div>
            </div>
          </div>

          {/* Bottom Blessing Caption */}
          <div className="text-center pb-2">
            <p className="text-sm font-bold text-[#FEF08A] font-serif">
              {shlokaKannada}
            </p>
            <p className="text-xs text-[#FFFBEB]/70 mt-1">
              Click anywhere outside or press Close to return
            </p>
          </div>
        </div>
      )}

      {/* Sacred Background Accents */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FACC15] to-transparent" />
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#FACC15]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#991B1B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#200205]/95 via-[#120103]/95 to-[#200205]/95 border-2 border-[#FACC15] p-6 sm:p-10 shadow-2xl shadow-black/90">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Lord Krishna Sacred Photo with Temple Frame (Span 5) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
                {/* Ornate Gold Border & Glow */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#FACC15] via-[#FEF08A] to-[#EAB308] opacity-80 blur-xs group-hover:opacity-100 transition duration-500" />
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#FACC15] bg-[#0A0102] shadow-2xl">
                  {/* Lord Krishna Image - Screen-Fitted Aspect */}
                  <div
                    className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#0A0102] cursor-pointer relative group/img"
                    onClick={() => setIsFullScreen(true)}
                    title="Click to view full screen darshan"
                  >
                    <img
                      src={krishnaImg}
                      alt="Lord Sri Krishna Bhagwan Darshan - Astro Kannada"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-[#1C0204]/90 border border-[#FACC15] text-[#FEF08A] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5 text-[#FACC15]" />
                        <span>ಪೂರ್ಣ ದರ್ಶನ • Full Screen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sacred Shloka & Blessings Text (Span 7) */}
            <div className="md:col-span-7 flex flex-col items-start text-left">
              
              <h2 className="text-2xl sm:text-3xl font-black text-[#FFFBEB] leading-tight mb-3">
                {titleByLang[language]}
              </h2>

              <p className="text-sm text-[#FFFBEB]/85 leading-relaxed mb-6 font-medium">
                {subtitleByLang[language]}
              </p>

              {/* WhatsApp Seeking Blessing Button */}
              <a
                href={getWhatsAppUrl('ನಮಸ್ಕಾರ ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ ಅವರೇ, ಶ್ರೀ ಕೃಷ್ಣ ಪರಮಾತ್ಮನ ಕೃಪೆಯಿಂದ ನನಗೆ ಜ್ಯೋತಿಷ್ಯ ಸಮಾಲೋಚನೆ ಬೇಕಾಗಿದೆ.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-extrabold text-[#380307] bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] hover:from-[#FFFFFF] hover:to-[#FACC15] rounded-xl shadow-xl shadow-[#FACC15]/20 transition-all active:scale-98 border-2 border-[#FEF08A] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-[#15803D] text-[#15803D]" />
                <span>{ctaText[language]}</span>
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
