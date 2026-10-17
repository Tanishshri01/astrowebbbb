import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { OmEmblem } from './SacredIcons';
import { getWhatsAppUrl, getPhoneCallUrl, ASTROLOGER_PHONE, INSTAGRAM_URL, FACEBOOK_URL } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { LanguageSelector } from './LanguageSelector';

export const Header: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.rituals, href: '#rituals' },
    { label: t.nav.blog, href: '#blog' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      {/* Top Auspicious Announcement Bar in Sacred Red and Haldi Yellow */}
      <div className="bg-[#140103] text-[#FEF08A] text-xs py-2 px-4 border-b border-[#FACC15]/40 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          <div className="flex items-center gap-2 truncate">
            <span className="text-base font-bold text-[#FACC15]">ॐ</span>
            <span className="truncate font-medium">{t.topBar.announcement}</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Social Links */}
            <div className="hidden sm:flex items-center gap-2 pr-2 border-r border-[#FACC15]/30">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFFBEB] hover:text-[#FACC15] transition-colors p-1"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFFBEB] hover:text-[#FACC15] transition-colors p-1"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Phone link */}
            <a
              href={getPhoneCallUrl()}
              className="hidden md:flex items-center gap-1.5 text-xs text-[#FFFBEB] hover:text-[#FACC15] transition-colors"
              title={t.topBar.callNow}
            >
              <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
              <span className="font-bold tracking-wider">{ASTROLOGER_PHONE}</span>
            </a>

            {/* Translate Button at the Top (English, Kannada, Hindi, Telugu) */}
            <LanguageSelector />
          </div>

        </div>
      </div>

      {/* Main Sticky Header in Auspicious Temple Red & Sacred Yellow */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#100102]/98 backdrop-blur-md shadow-xl shadow-black/70 border-b-2 border-[#FACC15] py-2.5'
            : 'bg-[#180204]/98 backdrop-blur-xs border-b border-[#FACC15]/40 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Brand Wordmark with Om Emblem */}
            <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <OmEmblem className="w-10 h-10 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold text-[#FFFBEB] tracking-tight group-hover:text-[#FACC15] transition-colors whitespace-nowrap">
                  {t.brand.name}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#FACC15] font-semibold tracking-wide whitespace-nowrap">
                  {t.brand.astrologer}
                </span>
              </div>
            </a>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#FFFBEB]/90">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#FACC15] transition-colors py-1 relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FACC15] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Consultation CTA & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={getWhatsAppUrl(language === 'kn' ? undefined : (language === 'hi' ? 'नमस्ते पंडित जी, मुझे ज्योतिषीय परामर्श चाहिए।' : 'Hello Pandit Ji, I would like to consult regarding astrology.'))}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-[#4A050D] bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] hover:from-[#FFFFFF] hover:to-[#FACC15] rounded-full shadow-md shadow-[#FACC15]/30 hover:shadow-lg transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer border border-[#FEF08A]"
              >
                <MessageCircle className="w-4 h-4 fill-[#15803D] text-[#15803D]" />
                <span>WhatsApp Now</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#FACC15] hover:text-[#FFFBEB] hover:bg-[#2A0307] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#FACC15]"
                aria-label="ಮುಖ್ಯ ಮೆನು ತೆರೆಯಿರಿ"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#100102] border-b-2 border-[#FACC15] px-4 pt-3 pb-6 animate-fadeIn shadow-2xl">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-bold text-[#FFFBEB] hover:text-[#FACC15] hover:bg-[#1C0205] rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-[#FACC15]/30 flex flex-col gap-2.5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-bold text-[#380307] bg-gradient-to-r from-[#FEF08A] to-[#FACC15] rounded-lg shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-[#15803D] text-[#15803D]" />
                  <span>WhatsApp Now</span>
                </a>
                <a
                  href={getPhoneCallUrl()}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-bold text-[#FFFBEB] bg-[#1C0205] border border-[#FACC15] rounded-lg"
                >
                  <Phone className="w-4 h-4 text-[#FACC15]" />
                  <span>{ASTROLOGER_PHONE}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
