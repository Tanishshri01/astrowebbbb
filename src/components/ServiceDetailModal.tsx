import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';
import { getWhatsAppUrl, getPhoneCallUrl, ASTROLOGER_PHONE } from '../utils/whatsapp';
import { SacredDiya } from './SacredIcons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { serviceImages } from '../utils/serviceImages';
import { safeStorageGet, safeStorageGetAsync } from '../utils/imageStorage';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  const [modalImg, setModalImg] = useState(() => {
    const meta = service ? serviceImages[service.id] : null;
    return (service ? safeStorageGet(`astro_service_custom_img_${service.id}`) : null) || meta?.src || '/images/krishna_darshan.jpg';
  });

  useEffect(() => {
    if (!service) return;
    const meta = serviceImages[service.id];
    const immediate = safeStorageGet(`astro_service_custom_img_${service.id}`) || meta?.src || '/images/krishna_darshan.jpg';
    setModalImg(immediate);
    safeStorageGetAsync(`astro_service_custom_img_${service.id}`).then((val) => {
      if (val) setModalImg(val);
    });
  }, [service]);

  if (!service) return null;

  const imageMeta = serviceImages[service.id];
  const displayImgSrc = modalImg;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#140103] border-2 border-[#FACC15] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#FFFBEB] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.9), 0 0 25px rgba(250, 204, 21, 0.35)',
        }}
      >
        {/* Top Gold/Yellow Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#FACC15] hover:text-[#FFFFFF] hover:bg-[#280307] rounded-full transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#FACC15] z-10"
          aria-label={t.servicesSection.modalClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Breadcrumb / Service Number */}
        <div className="flex items-center gap-2 text-xs font-bold text-[#FACC15] mb-2 uppercase tracking-wider">
          <span>{t.servicesSection.modalService} {service.number}</span>
          <span>·</span>
          <span>{t.brand.astrologerTitle}</span>
        </div>

        {/* Modal Title */}
        <div className="flex items-center gap-3 mb-2">
          <SacredDiya className="w-8 h-8 shrink-0" />
          <h3 id="modal-service-title" className="text-xl sm:text-2xl font-black text-[#FEF08A]">
            {service.title}
          </h3>
        </div>

        {/* Subtitle */}
        <div className="text-sm font-bold text-[#FACC15] mb-4">
          {service.subtitle}
        </div>

        {/* Service Photo in Modal */}
        <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-5 border-2 border-[#FACC15]/50 bg-[#0A0102] shadow-lg">
          <img
            src={displayImgSrc}
            alt={imageMeta?.alt || service.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140103] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Full Prose Description */}
        <div className="space-y-4 text-sm sm:text-base text-[#FFFBEB]/90 leading-relaxed border-t border-b border-[#FACC15]/30 py-4 mb-6">
          <p>{service.fullDescription}</p>

          {/* Traditional Aspects */}
          {service.traditionalAspects && service.traditionalAspects.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-extrabold text-[#FACC15] uppercase tracking-wider mb-2">
                {t.servicesSection.traditionalAspectsTitle}
              </h4>
              <ul className="space-y-2">
                {service.traditionalAspects.map((aspect, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FFFBEB]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                    <span>{aspect}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Spiritual Guidance Note in Temple Vermilion Red */}
          <div className="p-3.5 rounded-xl bg-[#240306] border border-[#FACC15]/40 text-xs text-[#FEF08A] flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
            <div className="font-medium">{service.spiritualGuidance}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          <a
            href={getWhatsAppUrl(service.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-black text-[#380307] bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] hover:from-[#FFFFFF] hover:to-[#FACC15] rounded-xl shadow-md transition-all active:scale-98 border border-[#FEF08A]"
          >
            <MessageCircle className="w-4 h-4 fill-[#15803D] text-[#15803D]" />
            <span>{t.servicesSection.modalWhatsappCta}</span>
          </a>

          <a
            href={getPhoneCallUrl()}
            className="inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#FFFBEB] bg-[#240306] hover:bg-[#380409] border border-[#FACC15]/60 rounded-xl transition-all"
          >
            <Phone className="w-4 h-4 text-[#FACC15]" />
            <span>{t.servicesSection.modalCallCta}: {ASTROLOGER_PHONE}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
