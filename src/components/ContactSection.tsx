import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl, getPhoneCallUrl, ASTROLOGER_PHONE } from '../utils/whatsapp';
import { OmEmblem } from './SacredIcons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!fullName.trim()) {
      setError(t.contact.errName);
      return;
    }
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError(t.contact.errPhone);
      return;
    }
    if (!message.trim()) {
      setError(t.contact.errMessage);
      return;
    }

    // Format WhatsApp message based on language
    const introLine = language === 'kn' ? 'ನಮಸ್ಕಾರ ಪಂಡಿತರೇ,' : (language === 'hi' ? 'नमस्ते पंडित जी,' : 'Hello Pandit Ji,');
    const nameLabel = language === 'kn' ? 'ಹೆಸರು' : (language === 'hi' ? 'नाम' : 'Name');
    const phoneLabel = language === 'kn' ? 'ಮೊಬೈಲ್' : (language === 'hi' ? 'फोन' : 'Phone');
    const msgLabel = language === 'kn' ? 'ವಿಷಯ / ಸಮಸ್ಯೆ' : (language === 'hi' ? 'प्रश्न / समस्या' : 'Concern / Query');

    const formattedMsg = `${introLine}\n${nameLabel}: ${fullName.trim()}\n${phoneLabel}: ${cleanPhone}\n\n${msgLabel}:\n${message.trim()}`;
    const waUrl = getWhatsAppUrl(formattedMsg);

    setSubmitted(true);

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0A0102] relative border-b border-[#FACC15]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-bold text-[#FACC15] tracking-widest uppercase mb-2">
            {t.contact.tagline}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFBEB] mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-sm text-[#FFFBEB]/80">
            {t.contact.subheading}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FACC15] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Astrologer Information & Direct Phone / WhatsApp CTAs */}
          <div className="lg:col-span-6 rounded-2xl bg-[#180204] border-2 border-[#FACC15] p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <OmEmblem className="w-12 h-12" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#FFFBEB]">
                    {t.brand.name}
                  </h3>
                  <div className="text-sm sm:text-base font-bold text-[#FEF08A]">
                    {t.brand.astrologer}
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#FFFBEB]/85 leading-relaxed mb-6 font-medium">
                {t.about.quote}
              </p>

              {/* Verified Contact Details Box */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-[#0E0102] border-2 border-[#FACC15]/40 shadow-inner">
                  <div className="text-xs text-[#FEF08A] font-semibold mb-1">
                    {t.contact.boxPhoneTitle}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#FFFBEB] tracking-wider">
                    {ASTROLOGER_PHONE}
                  </div>
                  <div className="text-xs text-[#4ADE80] font-bold mt-1">
                    {t.contact.boxPhoneDesc}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Quick Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#FACC15]/30">
              <a
                href={getWhatsAppUrl(t.servicesSection.items[0]?.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 text-sm sm:text-base font-black text-[#380307] bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] hover:from-[#FFFFFF] hover:to-[#FACC15] rounded-xl shadow-lg transition-all active:scale-98 border border-[#FEF08A]"
              >
                <MessageCircle className="w-5 h-5 fill-[#15803D] text-[#15803D]" />
                <span>{t.contact.whatsappButton}</span>
              </a>

              <a
                href={getPhoneCallUrl()}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold text-[#FFFBEB] bg-[#240306] hover:bg-[#380409] border-2 border-[#FACC15]/50 rounded-xl transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-[#FACC15]" />
                <span>{t.contact.callButton}: {ASTROLOGER_PHONE}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Inquiries Form */}
          <div className="lg:col-span-6 rounded-2xl bg-[#180204] border-2 border-[#FACC15] p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#FEF08A] mb-1">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#FFFBEB]/80 mb-6 font-medium">
                {t.contact.formSubtitle}
              </p>

              {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-950 border-2 border-red-500 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="font-semibold">{error}</span>
                </div>
              )}

              {submitted && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-950 border-2 border-emerald-500 text-emerald-200 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold">{t.contact.successMessage}</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-[#FACC15] mb-1.5">
                    {t.contact.labelName}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t.contact.placeholderName}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0A0102] border-2 border-[#FACC15]/40 text-[#FFFBEB] placeholder-[#FFFBEB]/30 text-sm focus:outline-hidden focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-[#FACC15] mb-1.5">
                    {t.contact.labelPhone}
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder={t.contact.placeholderPhone}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0A0102] border-2 border-[#FACC15]/40 text-[#FFFBEB] placeholder-[#FFFBEB]/30 text-sm focus:outline-hidden focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-[#FACC15] mb-1.5">
                    {t.contact.labelMessage}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.placeholderMessage}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0A0102] border-2 border-[#FACC15]/40 text-[#FFFBEB] placeholder-[#FFFBEB]/30 text-sm focus:outline-hidden focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-sm font-black text-[#380307] bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] hover:from-[#FFFFFF] hover:to-[#FACC15] rounded-xl shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer border border-[#FEF08A]"
                >
                  <Send className="w-4 h-4 text-[#380307]" />
                  <span>{t.contact.submitButton}</span>
                </button>
              </form>
            </div>

            {/* Privacy note */}
            <div className="pt-4 mt-4 border-t border-[#FACC15]/20 flex items-center gap-2 text-[11px] text-[#FFFBEB]/75">
              <ShieldCheck className="w-4 h-4 text-[#FACC15] shrink-0" />
              <span>{t.contact.privacyNote}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
