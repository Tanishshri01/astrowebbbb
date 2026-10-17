import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Compass, PhoneCall, Sparkles, Instagram, Facebook, X, Upload, Check, RefreshCw } from 'lucide-react';
import { ZodiacWheel } from './SacredIcons';
import {
  getWhatsAppUrl,
  getPhoneCallUrl,
  ASTROLOGER_PHONE,
  ASTROLOGER_PHONE_DISPLAY,
  INSTAGRAM_URL,
  FACEBOOK_URL
} from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { PANDIT_SACHIN_SHARMA_IMAGE, PANDIT_FALLBACK_SVG, KRISHNA_BHAGWAN_IMAGE } from '../utils/serviceImages';

const ROTATING_KEYWORDS = [
  'Astrology',
  'Psychic Readings',
  'Love Problem',
  'Career Problem',
  'Negative Energy',
  'Relationship Problems',
  'Financial Problems',
  'Health Problems',
  'Vastu Problems',
  'Spiritual Guidance',
];

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [imgSrc, setImgSrc] = useState(() => {
    return localStorage.getItem('astro_pandit_custom_portrait') || PANDIT_SACHIN_SHARMA_IMAGE;
  });

  // Private owner photo management (zero public buttons for visitors)
  const [showOwnerModal, setShowOwnerModal] = useState(false);
  const [ownerSavedToast, setOwnerSavedToast] = useState('');
  const panditInputRef = useRef<HTMLInputElement>(null);
  const krishnaInputRef = useRef<HTMLInputElement>(null);

  // Secret keyboard shortcut: Alt + P
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        setShowOwnerModal((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handlePanditFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        localStorage.setItem('astro_pandit_custom_portrait', base64);
        setImgSrc(base64);
        setOwnerSavedToast('Pandit Ji photo updated successfully!');
        setTimeout(() => setOwnerSavedToast(''), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleKrishnaFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        localStorage.setItem('astro_krishna_custom_darshan', base64);
        setOwnerSavedToast('Lord Krishna Darshan photo updated successfully! Refresh to view in Darshan section.');
        setTimeout(() => setOwnerSavedToast(''), 4000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetDefaultPhotos = () => {
    localStorage.removeItem('astro_pandit_custom_portrait');
    localStorage.removeItem('astro_krishna_custom_darshan');
    setImgSrc(PANDIT_SACHIN_SHARMA_IMAGE);
    setOwnerSavedToast('Reset to original default images.');
    setTimeout(() => setOwnerSavedToast(''), 3000);
  };

  // Typewriter motion state for cycling through services one by one
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const fullText = ROTATING_KEYWORDS[phraseIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1600);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % ROTATING_KEYWORDS.length);
      } else {
        const deleteTimer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, 28);
        return () => clearTimeout(deleteTimer);
      }
    } else {
      if (currentText === fullText) {
        setIsPaused(true);
      } else {
        const typeTimer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, 65);
        return () => clearTimeout(typeTimer);
      }
    }
  }, [currentText, isDeleting, isPaused, phraseIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#240205] via-[#140103] to-[#0A0102] pt-8 pb-16 lg:py-20 border-b border-[#FACC15]/30"
    >
      {/* Subtle Sacred Haldi & Red Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        <div className="absolute top-10 left-10 w-1.5 h-1.5 bg-[#FEF08A] rounded-full animate-ping" />
        <div className="absolute top-32 right-20 w-2 h-2 bg-[#FACC15] rounded-full animate-pulse" />
        <div className="absolute bottom-24 left-1/4 w-1.5 h-1.5 bg-[#FFFBEB] rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-12 w-2.5 h-2.5 bg-[#FACC15]/70 rounded-full animate-ping" />
        <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-[#FACC15] rounded-full" />
      </div>

      {/* Rotating Celestial Zodiac Wheel Background Graphic in Yellow */}
      <div className="absolute -right-24 sm:-right-16 md:right-4 lg:right-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-25 lg:opacity-35 scale-90 sm:scale-100 lg:scale-110">
        <ZodiacWheel className="w-[450px] h-[450px] sm:w-[560px] sm:h-[560px] lg:w-[680px] lg:h-[680px]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headings & Call to Actions (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Sacred Kicker with Dynamic Motion */}
            <div className="relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#240306] via-[#3A040A] to-[#240306] border-2 border-[#FACC15] text-[#FEF08A] text-xs sm:text-sm font-black mb-4 shadow-xl shadow-[#FACC15]/30 overflow-hidden group animate-radiant-glow">
              {/* Animated Light Sweep Shimmer in Motion */}
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-[#FACC15]/35 to-transparent pointer-events-none" />
              
              <Sparkles className="w-4 h-4 text-[#FACC15] animate-spin shrink-0 duration-1000" />
              <span className="tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FEF08A] to-[#FACC15] font-black drop-shadow-sm">
                Get all problems solution in 24 hours
              </span>
              <span className="relative flex h-2 w-2 ml-0.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
              </span>
            </div>

            {/* Brand Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#FACC15] tracking-wide mb-1 flex items-center gap-2">
              <span>{t.brand.name}</span>
            </h2>

            {/* Named Astrologer */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFBEB] drop-shadow-sm">
                {t.brand.astrologer}
              </span>
            </div>

            {/* Main Primary Heading: Fixed 'Best', Motion Word, and 'Solution in Karnataka' */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFBEB] leading-tight sm:leading-tight mb-6 max-w-2xl min-h-[105px] sm:min-h-[135px] flex flex-col justify-center"
              style={{ textWrap: 'balance' }}
            >
              <div className="inline-flex items-center flex-wrap gap-x-2">
                <span className="text-[#FFFBEB]">Best</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FEF08A] to-[#FACC15] underline decoration-[#FACC15]/60 decoration-wavy decoration-1 tracking-tight drop-shadow-sm transition-all duration-200">
                  {currentText}
                </span>
                {/* Blinking Golden Motion Cursor */}
                <span className="inline-block w-1 sm:w-1.5 h-[0.85em] bg-[#FACC15] -ml-0.5 rounded-full animate-pulse shadow-xs shadow-[#FACC15]" />
              </div>
              <span className="text-[#FEF08A] text-2xl sm:text-3xl md:text-4xl font-black mt-2 tracking-wide">
                Solution in Karnataka
              </span>
            </h1>

            {/* Supporting Prose with Requested Services List */}
            <p className="text-sm sm:text-base text-[#FFFBEB]/90 leading-relaxed mb-6 max-w-2xl font-normal">
              Career Guidance, Relationship Problems, Financial Problems, Health Problems, Negative Energy Removal, Vastu Problems, Love & Marriage Problems, Spiritual Guidance.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
              
              {/* Primary WhatsApp Action in Haldi Yellow with Red Text */}
              <a
                href={getWhatsAppUrl(t.servicesSection.items[0]?.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-extrabold text-[#380307] bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] hover:from-[#FFFFFF] hover:to-[#FACC15] rounded-xl shadow-xl shadow-[#FACC15]/30 hover:shadow-2xl transition-all duration-200 active:scale-98 cursor-pointer text-center border-2 border-[#FEF08A]"
              >
                <MessageCircle className="w-5 h-5 fill-[#15803D] text-[#15803D]" />
                <span>{t.hero.whatsappPrimary}</span>
              </a>

              {/* Secondary Services Action in Temple Vermilion Red */}
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-[#FEF08A] bg-[#1E0204] hover:bg-[#320408] border-2 border-[#FACC15]/70 hover:border-[#FACC15] rounded-xl transition-all duration-200 cursor-pointer text-center shadow-md"
              >
                <Compass className="w-4 h-4 text-[#FACC15]" />
                <span>{t.hero.servicesSecondary}</span>
              </a>

              {/* Quick Call Button */}
              <a
                href={getPhoneCallUrl()}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-[#FACC15] hover:text-[#FFFFFF] hover:bg-[#1E0204]/70 rounded-xl border border-[#FACC15]/40 hover:border-[#FACC15] transition-all duration-200 cursor-pointer text-center"
                title={t.hero.callDirect}
              >
                <PhoneCall className="w-4 h-4 text-[#FACC15]" />
                <span>{ASTROLOGER_PHONE}</span>
              </a>

            </div>

            {/* Official Social Media Links */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-[#FFFBEB]/70 font-semibold">Social:</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#833ab4]/40 via-[#fd1d1d]/40 to-[#fcb045]/40 hover:from-[#833ab4] hover:to-[#fcb045] border border-[#FACC15]/50 text-xs font-bold text-[#FFFBEB] transition-all shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>@astro.kannada</span>
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877F2]/30 hover:bg-[#1877F2] border border-[#FACC15]/50 text-xs font-bold text-[#FFFBEB] transition-all shadow-sm"
              >
                <Facebook className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>Facebook</span>
              </a>
            </div>

            {/* Traditional Trust Anchors (No Pills, clean unboxed metadata) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#FFFBEB]/85 pt-4 border-t border-[#FACC15]/30 w-full font-medium">
              <span className="flex items-center gap-1.5 text-[#FACC15]">
                <span className="font-bold">✓</span> {t.hero.confidential}
              </span>
              <span className="text-[#FACC15]/40" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-[#FACC15]">
                <span className="font-bold">✓</span> {t.hero.directComm}
              </span>
              <span className="text-[#FACC15]/40" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-[#FACC15]">
                <span className="font-bold">✓</span> {t.hero.vedicMethod}
              </span>
            </div>

          </div>

          {/* Right Column: Astrologer Photo & Direct Consultation Card (Span 5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#240306] via-[#160204] to-[#0A0102] p-5 sm:p-6 border-2 border-[#FACC15] shadow-2xl shadow-black/90 backdrop-blur-sm group">
              
              {/* Corner Traditional Accents (Double-click 卐 or press Alt+P for Private Owner Setup) */}
              <div
                className="absolute top-2.5 left-2.5 text-[#FACC15] font-bold text-sm select-none cursor-default"
                onDoubleClick={() => setShowOwnerModal(true)}
                title="Auspicious Symbol"
              >
                卐
              </div>
              <div className="absolute top-2.5 right-2.5 text-[#FACC15] font-bold text-sm select-none">ॐ</div>
              <div className="absolute bottom-2.5 left-2.5 text-[#FACC15] font-bold text-sm select-none">ॐ</div>
              <div className="absolute bottom-2.5 right-2.5 text-[#FACC15] font-bold text-sm select-none">卐</div>

              {/* Astrologer Top Portrait Frame - Perfectly Fitted */}
              <div className="relative mb-4">
                <div className="relative mx-auto w-full aspect-[4/5] max-w-[270px] rounded-2xl overflow-hidden border-2 border-[#FACC15] shadow-2xl bg-[#0A0102]">
                  <img
                    src={imgSrc}
                    alt="ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ - Astro Kannada Astrologer"
                    onError={() => {
                      if (imgSrc !== PANDIT_FALLBACK_SVG) {
                        setImgSrc(PANDIT_FALLBACK_SVG);
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  />
                  {/* Subtle golden bottom glow */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0102] via-[#0A0102]/60 to-transparent pointer-events-none" />
                </div>

                {/* Verified Astrologer Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#1C0204] border-2 border-[#FACC15] px-3.5 py-0.5 rounded-full shadow-lg text-[11px] font-black text-[#FEF08A] whitespace-nowrap flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  <span>ಶಾಸ್ತ್ರೋಕ್ತ ದೈವಜ್ಞರು • Verified Astrologer</span>
                </div>
              </div>

              {/* Astrologer Details & Name */}
              <div className="text-center pt-2 mb-3">
                <h3 className="text-xl font-black text-[#FEF08A] tracking-tight">
                  {t.brand.astrologer}
                </h3>
                <p className="text-xs font-bold text-[#FACC15] uppercase tracking-wider mt-0.5">
                  {t.brand.name} • ಮುಖ್ಯ ಜ್ಯೋತಿಷಿ
                </p>
                <p className="text-xs text-[#FFFBEB]/90 mt-1.5 leading-relaxed font-semibold">
                  Vastu, Numerology and Vedic Shastra Expert
                </p>
              </div>

              {/* Direct Contact Callout Box */}
              <div className="w-full bg-[#0A0102]/95 rounded-2xl p-3.5 border border-[#FACC15]/60 mb-3 text-center shadow-inner">
                <div className="text-[11px] text-[#FEF08A] font-semibold mb-0.5">
                  {t.hero.quickContact}
                </div>
                <a
                  href={getPhoneCallUrl()}
                  className="text-2xl font-black text-[#FFFBEB] hover:text-[#FACC15] transition-colors tracking-widest block font-mono"
                >
                  {ASTROLOGER_PHONE}
                </a>
                <div className="text-[11px] text-[#4ADE80] font-bold mt-0.5 flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                  <span>{t.hero.activeStatus} • {ASTROLOGER_PHONE_DISPLAY}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <a
                  href={getWhatsAppUrl(t.servicesSection.items[0]?.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 text-xs font-black text-[#380307] bg-gradient-to-r from-[#FEF08A] to-[#FACC15] hover:brightness-110 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all border border-[#FEF08A] text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-[#15803D] text-[#15803D] shrink-0" />
                  <span>WhatsApp ಚಾಟ್</span>
                </a>
                <a
                  href={getPhoneCallUrl()}
                  className="py-2.5 px-3 text-xs font-black text-[#FEF08A] bg-[#1E0204] hover:bg-[#320408] rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all border border-[#FACC15]/70 text-center"
                >
                  <PhoneCall className="w-4 h-4 text-[#FACC15] shrink-0" />
                  <span>ನೇರ ಕರೆ ಮಾಡಿ</span>
                </a>
              </div>

              {/* Social Channels Row */}
              <div className="pt-2 border-t border-[#FACC15]/20 flex items-center justify-center gap-3 text-xs">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#FACC15] hover:text-[#FFFFFF] transition-colors font-bold"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <span className="text-[#FACC15]/40">•</span>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#FACC15] hover:text-[#FFFFFF] transition-colors font-bold"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Toast Notification */}
      {ownerSavedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C0204] border-2 border-[#FACC15] text-[#FEF08A] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce">
          <Check className="w-5 h-5 text-green-400" />
          <span className="text-xs sm:text-sm font-bold">{ownerSavedToast}</span>
        </div>
      )}

      {/* Private Owner Photo Modal (Completely invisible to normal visitors) */}
      {showOwnerModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowOwnerModal(false)}
        >
          <div
            className="w-full max-w-lg bg-gradient-to-b from-[#240306] via-[#160204] to-[#0A0102] border-2 border-[#FACC15] rounded-3xl p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#FACC15]/40">
              <div className="flex items-center gap-2">
                <span className="text-lg text-[#FACC15]">🔐</span>
                <h3 className="text-base sm:text-lg font-black text-[#FEF08A]">
                  Owner Photo Settings (Private Altar Manager)
                </h3>
              </div>
              <button
                onClick={() => setShowOwnerModal(false)}
                className="p-1.5 rounded-full bg-[#1C0204] hover:bg-[#3C0409] text-[#FEF08A] border border-[#FACC15]/50 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#FFFBEB]/80 mb-5 leading-relaxed">
              This dialog is <strong className="text-[#FEF08A]">completely private to you</strong> (opened via Alt+P or double-clicking 卐). Normal website visitors will <strong className="text-amber-300">never see any upload buttons</strong>.
            </p>

            {/* Hidden File Inputs */}
            <input
              type="file"
              ref={panditInputRef}
              onChange={handlePanditFileSelect}
              accept="image/*"
              className="hidden"
            />
            <input
              type="file"
              ref={krishnaInputRef}
              onChange={handleKrishnaFileSelect}
              accept="image/*"
              className="hidden"
            />

            {/* Actions List */}
            <div className="space-y-3 mb-6">
              {/* Pandit Ji Photo Upload */}
              <div className="p-3.5 rounded-2xl bg-[#0D0102] border border-[#FACC15]/40 flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="text-xs font-bold text-[#FEF08A]">Pandit Sachin Sharma Portrait</div>
                  <div className="text-[11px] text-[#FFFBEB]/60">Select your IMG_8781.jpg photo</div>
                </div>
                <button
                  onClick={() => panditInputRef.current?.click()}
                  className="px-3.5 py-1.5 bg-gradient-to-r from-[#FEF08A] to-[#FACC15] hover:from-[#FFFFFF] hover:to-[#FACC15] text-[#240306] text-xs font-extrabold rounded-lg flex items-center gap-1.5 transition cursor-pointer shrink-0 shadow"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Choose Photo</span>
                </button>
              </div>

              {/* Lord Krishna Darshan Photo Upload */}
              <div className="p-3.5 rounded-2xl bg-[#0D0102] border border-[#FACC15]/40 flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="text-xs font-bold text-[#FEF08A]">Lord Sri Krishna Darshan Photo</div>
                  <div className="text-[11px] text-[#FFFBEB]/60">Select flute-playing Krishna wallpaper</div>
                </div>
                <button
                  onClick={() => krishnaInputRef.current?.click()}
                  className="px-3.5 py-1.5 bg-gradient-to-r from-[#FEF08A] to-[#FACC15] hover:from-[#FFFFFF] hover:to-[#FACC15] text-[#240306] text-xs font-extrabold rounded-lg flex items-center gap-1.5 transition cursor-pointer shrink-0 shadow"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Choose Photo</span>
                </button>
              </div>

              {/* Reset to Default */}
              <div className="p-3.5 rounded-2xl bg-[#0D0102] border border-red-900/40 flex items-center justify-between gap-3">
                <div className="text-left">
                  <div className="text-xs font-bold text-red-300">Reset to Defaults</div>
                  <div className="text-[11px] text-[#FFFBEB]/60">Clear stored custom browser photos</div>
                </div>
                <button
                  onClick={handleResetDefaultPhotos}
                  className="px-3 py-1.5 bg-[#2B0408] hover:bg-[#4A050D] text-red-200 border border-red-700/50 text-xs font-bold rounded-lg flex items-center gap-1.5 transition cursor-pointer shrink-0"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Permanent Code Instructions Notice */}
            <div className="p-3 rounded-xl bg-[#170204] border border-[#FACC15]/30 text-[11px] text-[#FFFBEB]/75 leading-relaxed text-left">
              💡 <strong>For Permanent GitHub Deployment:</strong> Save your photos as <code className="text-[#FEF08A]">public/images/pandit_sachin_sharma.jpg</code> and <code className="text-[#FEF08A]">public/images/krishna_darshan.jpg</code>. See <code className="text-[#FACC15]">GUIDE_IMAGE_REPLACEMENT.md</code> for step-by-step instructions.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
