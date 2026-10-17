import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowUp, Instagram, Facebook } from 'lucide-react';
import { OmEmblem } from './SacredIcons';
import {
  getWhatsAppUrl,
  getPhoneCallUrl,
  ASTROLOGER_PHONE,
  ASTROLOGER_PHONE_DISPLAY,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  DESIGNER_URL
} from '../utils/whatsapp';
import { LegalModal } from './LegalModal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#080102] text-[#FFFBEB] border-t-2 border-[#FACC15] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FACC15]/20">
            
            {/* Column 1: Brand & Astrologer (Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <OmEmblem className="w-12 h-12 shrink-0" />
                <div>
                  <h3 className="text-xl font-black text-[#FFFBEB]">
                    {t.brand.name}
                  </h3>
                  <div className="text-sm font-bold text-[#FACC15]">
                    {t.brand.astrologer}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#FFFBEB]/80 leading-relaxed font-medium">
                {t.footer.desc}
              </p>

              {/* Direct Phone & WhatsApp */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={getPhoneCallUrl()}
                  className="inline-flex items-center gap-2 text-sm text-[#FACC15] hover:text-[#FFFFFF] transition-colors font-bold"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {ASTROLOGER_PHONE_DISPLAY}</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#4ADE80] hover:text-[#FFFFFF] transition-colors font-bold"
                >
                  <MessageCircle className="w-4 h-4 fill-[#15803D] text-[#15803D]" />
                  <span>WhatsApp: {ASTROLOGER_PHONE}</span>
                </a>
              </div>

              {/* Official Social Media Links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#140103] hover:bg-[#220205] border border-[#FACC15]/60 hover:border-[#FACC15] text-xs font-bold text-[#FFFBEB] hover:text-[#FEF08A] transition-all shadow-sm"
                  aria-label="Follow Pandit Sachin Sharma on Instagram"
                >
                  <Instagram className="w-4 h-4 text-[#FACC15]" />
                  <span>Instagram</span>
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#140103] hover:bg-[#220205] border border-[#FACC15]/60 hover:border-[#FACC15] text-xs font-bold text-[#FFFBEB] hover:text-[#FEF08A] transition-all shadow-sm"
                  aria-label="Connect with Pandit Sachin Sharma on Facebook"
                >
                  <Facebook className="w-4 h-4 text-[#FACC15]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Links (Span 2) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-black text-[#FACC15] uppercase tracking-wider">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#FFFBEB]/85">
                <li>
                  <a href="#home" className="hover:text-[#FACC15] transition-colors">{t.nav.home}</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#FACC15] transition-colors">{t.nav.about}</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FACC15] transition-colors">{t.nav.services}</a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#FACC15] transition-colors">{t.howItWorks.tagline}</a>
                </li>
                <li>
                  <a href="#rituals" className="hover:text-[#FACC15] transition-colors">{t.nav.rituals}</a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-[#FACC15] transition-colors">{t.nav.blog}</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#FACC15] transition-colors">{t.nav.faq}</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#FACC15] transition-colors">{t.nav.contact}</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Service Links (Span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-black text-[#FACC15] uppercase tracking-wider">
                {t.footer.servicesTitle}
              </h4>
              <ul className="space-y-2 text-xs text-[#FFFBEB]/80">
                {t.servicesSection.items.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <a
                      href="#services"
                      className="hover:text-[#FACC15] transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-[#FACC15]">•</span>
                      <span className="truncate">{service.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: More Services (Span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-black text-[#FACC15] uppercase tracking-wider">
                {t.footer.otherServices}
              </h4>
              <ul className="space-y-2 text-xs text-[#FFFBEB]/80">
                {t.servicesSection.items.slice(6, 12).map((service) => (
                  <li key={service.id}>
                    <a
                      href="#services"
                      className="hover:text-[#FACC15] transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-[#FACC15]">•</span>
                      <span className="truncate">{service.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Ethical Disclaimer */}
          <div className="py-6 border-b border-[#FACC15]/20 text-center max-w-4xl mx-auto">
            <p className="text-xs text-[#FFFBEB]/75 leading-relaxed font-medium">
              <strong className="text-[#FACC15]">{t.footer.disclaimerTitle} </strong>
              {t.footer.disclaimerText}
            </p>
          </div>

          {/* Bottom Bar: Copyright, Designed by Credit & Legal Policies */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FFFBEB]/80">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <span>© {new Date().getFullYear()} Astro Kannada. All rights reserved.</span>
              <span className="hidden sm:inline text-[#FACC15]/60">•</span>
              <span className="text-[#FEF08A] font-medium">
                Designed by{' '}
                <a
                  href={DESIGNER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FACC15] hover:text-[#FFFFFF] underline font-bold transition-colors ml-0.5 inline-flex items-center gap-1"
                >
                  <Instagram className="w-3 h-3 text-[#FACC15]" />
                  <span>deepproductions</span>
                </a>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setLegalType('privacy')}
                className="hover:text-[#FACC15] transition-colors underline cursor-pointer"
              >
                {t.footer.privacyPolicy}
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setLegalType('terms')}
                className="hover:text-[#FACC15] transition-colors underline cursor-pointer"
              >
                {t.footer.termsConditions}
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 text-[#FACC15] hover:text-[#FFFFFF] transition-colors cursor-pointer font-bold"
                aria-label={t.footer.backToTop}
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{t.footer.backToTop}</span>
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />
    </>
  );
};
