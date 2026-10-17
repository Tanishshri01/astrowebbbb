import React, { useState, useEffect } from 'react';
import {
  Coins,
  Users,
  Gem,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  ShieldAlert,
  Building2,
  TrendingDown,
  Home,
  Flame,
  MessageCircle,
  Info,
  Camera,
  RotateCcw,
  Loader2,
  Check
} from 'lucide-react';
import { ServiceItem } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { ServiceDetailModal } from './ServiceDetailModal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { serviceImages } from '../utils/serviceImages';
import {
  compressImage,
  safeStorageSet,
  safeStorageGet,
  safeStorageGetAsync,
  safeStorageRemove
} from '../utils/imageStorage';

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  Coins: <Coins className="w-5 h-5 text-[#FACC15]" />,
  Users: <Users className="w-5 h-5 text-[#FACC15]" />,
  Gem: <Gem className="w-5 h-5 text-[#FACC15]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#FACC15]" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-[#FACC15]" />,
  Briefcase: <Briefcase className="w-5 h-5 text-[#FACC15]" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-[#FACC15]" />,
  Building2: <Building2 className="w-5 h-5 text-[#FACC15]" />,
  TrendingDown: <TrendingDown className="w-5 h-5 text-[#FACC15]" />,
  Home: <Home className="w-5 h-5 text-[#FACC15]" />,
  Flame: <Flame className="w-5 h-5 text-[#FACC15]" />,
};

// Helper to search across all known storage keys for restored service images
function getCandidateServiceImage(id: string, num?: string): string | null {
  const keys = [
    `astro_service_custom_img_${id}`,
    `astro_service_img_${id}`,
    `service_custom_${id}`,
    `service_image_${id}`,
    `astro_service_${id}`,
    num ? `astro_service_custom_img_${num}` : '',
    num ? `astro_service_img_${num}` : '',
    num ? `service_${num}` : '',
    num ? `astro_service_slot_${num}` : '',
  ].filter(Boolean);

  for (const k of keys) {
    const v = safeStorageGet(k);
    if (v) return v;
  }
  return null;
}

async function getCandidateServiceImageAsync(id: string, num?: string): Promise<string | null> {
  const sync = getCandidateServiceImage(id, num);
  if (sync) return sync;

  const keys = [
    `astro_service_custom_img_${id}`,
    `astro_service_img_${id}`,
    `service_custom_${id}`,
    `service_image_${id}`,
    `astro_service_${id}`,
    num ? `astro_service_custom_img_${num}` : '',
    num ? `astro_service_img_${num}` : '',
    num ? `service_${num}` : '',
    num ? `astro_service_slot_${num}` : '',
  ].filter(Boolean);

  for (const k of keys) {
    const v = await safeStorageGetAsync(k);
    if (v) return v;
  }
  return null;
}

export const ServicesGrid: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Synchronously load any existing custom service images from storage cache
  const [customImages, setCustomImages] = useState<Record<string, string | null>>(() => {
    const map: Record<string, string | null> = {};
    t.servicesSection.items.forEach((item) => {
      map[item.id] = getCandidateServiceImage(item.id, item.number);
    });
    return map;
  });
  const [uploadingServiceId, setUploadingServiceId] = useState<string | null>(null);
  const [recentlySavedId, setRecentlySavedId] = useState<string | null>(null);

  // Asynchronously hydrate from IndexedDB to guarantee persistence across all refreshes
  useEffect(() => {
    let isMounted = true;
    async function loadAllAsync() {
      const updates: Record<string, string> = {};
      for (const item of t.servicesSection.items) {
        const stored = await getCandidateServiceImageAsync(item.id, item.number);
        if (stored) {
          updates[item.id] = stored;
        }
      }
      if (isMounted && Object.keys(updates).length > 0) {
        setCustomImages((prev) => ({ ...prev, ...updates }));
      }
    }
    loadAllAsync();
    return () => {
      isMounted = false;
    };
  }, [language, t.servicesSection.items]);

  const handleServiceImageUpload = async (serviceId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingServiceId(serviceId);
      // High quality HD canvas compression with small ~45KB footprint
      const compressed = await compressImage(file, 960, 960, 0.78);
      // Write to multiple persistent keys in both localStorage AND IndexedDB database
      safeStorageSet(`astro_service_custom_img_${serviceId}`, compressed);
      safeStorageSet(`astro_service_img_${serviceId}`, compressed);
      setCustomImages((prev) => ({ ...prev, [serviceId]: compressed }));
      setRecentlySavedId(serviceId);
      setTimeout(() => setRecentlySavedId((curr) => (curr === serviceId ? null : curr)), 3500);
    } catch (err) {
      console.error(`Failed to upload photo for service ${serviceId}:`, err);
    } finally {
      setUploadingServiceId(null);
      if (e.target) e.target.value = '';
    }
  };

  const handleResetServiceImage = (serviceId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    safeStorageRemove(`astro_service_custom_img_${serviceId}`);
    safeStorageRemove(`astro_service_img_${serviceId}`);
    setCustomImages((prev) => ({ ...prev, [serviceId]: null }));
    const input = document.getElementById(`service-file-input-${serviceId}`) as HTMLInputElement;
    if (input) input.value = '';
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#0A0102] relative border-b border-[#FACC15]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider uppercase mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308]">
              OUR SERVICES
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FACC15] to-transparent mx-auto rounded-full" />
        </div>

        {/* 12 Services Responsive Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.servicesSection.items.map((service) => {
            const icon = iconMap[service.iconName] || <Coins className="w-5 h-5 text-[#FACC15]" />;
            const imageMeta = serviceImages[service.id];
            const currentImg = customImages[service.id] || imageMeta?.src || '/images/krishna_darshan.jpg';
            const hasCustom = Boolean(customImages[service.id]);

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#140103] hover:bg-[#200205] border-2 border-[#FACC15]/40 hover:border-[#FACC15] overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#FACC15]/15"
              >
                {/* Service Photo Banner */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#0A0102] border-b border-[#FACC15]/30">
                  {/* Native file input for this service */}
                  <input
                    type="file"
                    id={`service-file-input-${service.id}`}
                    accept="image/*"
                    onChange={(e) => handleServiceImageUpload(service.id, e)}
                    className="sr-only"
                  />

                  <img
                    src={currentImg}
                    alt={imageMeta?.alt || service.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 cursor-pointer"
                    onClick={() => {
                      const input = document.getElementById(`service-file-input-${service.id}`) as HTMLInputElement;
                      if (input) input.click();
                    }}
                    title={language === 'kn' ? 'ಫೋಟೋ ಬದಲಾಯಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ' : 'Click to change photo'}
                  />
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140103] via-transparent to-black/40 pointer-events-none" />

                  {/* Top Left: Change Picture Upload Button & Save Status */}
                  <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 flex-wrap">
                    <label
                      htmlFor={`service-file-input-${service.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#140103]/95 hover:bg-[#2A0307] border border-[#FACC15] hover:border-[#FEF08A] text-[#FEF08A] hover:text-[#FFFFFF] text-xs font-bold shadow-md cursor-pointer transition-all active:scale-95 select-none"
                      title={language === 'kn' ? 'ಫೋಟೋ ಬದಲಾಯಿಸಿ / ಅಪ್‌ಲೋಡ್ ಮಾಡಿ' : 'Change / Upload Picture'}
                    >
                      {uploadingServiceId === service.id ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#FACC15]" />
                      ) : (
                        <Camera className="w-3.5 h-3.5 text-[#FACC15]" />
                      )}
                      <span>
                        {uploadingServiceId === service.id
                          ? 'Uploading...'
                          : hasCustom
                          ? (language === 'kn' ? 'ಫೋಟೋ ಬದಲಾಯಿಸಿ' : 'Change Photo')
                          : (language === 'kn' ? 'ಫೋಟೋ ಹಾಕಿ' : 'Upload Photo')}
                      </span>
                    </label>

                    {recentlySavedId === service.id && (
                      <span className="px-2 py-0.5 rounded-lg bg-emerald-950/95 border border-emerald-400 text-emerald-300 text-[10px] font-bold flex items-center gap-1 shadow-sm animate-pulse">
                        <Check className="w-2.5 h-2.5" />
                        <span>Saved</span>
                      </span>
                    )}

                    {hasCustom && (
                      <button
                        type="button"
                        onClick={(e) => handleResetServiceImage(service.id, e)}
                        className="p-1 rounded-lg bg-[#0A0102]/90 hover:bg-red-950/90 border border-red-500/60 text-red-300 hover:text-white transition cursor-pointer shadow-sm"
                        title={language === 'kn' ? 'ಮೂಲ ಚಿತ್ರಕ್ಕೆ ಮರುಹೊಂದಿಸಿ' : 'Reset to default image'}
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  {/* Top Corner Number Accent */}
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#0A0102]/95 border border-[#FACC15] text-xs font-mono font-black text-[#FEF08A] shadow-md z-10">
                    {service.number}
                  </div>

                  {/* Sacred Icon Badge */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-[#1E0204]/95 border border-[#FACC15] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-[#FEF08A] transition-all z-10 pointer-events-none">
                    {icon}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  {/* Service Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-lg font-black text-[#FFFBEB] group-hover:text-[#FEF08A] transition-colors mb-1.5 leading-snug">
                      {service.title}
                    </h3>
                    <div className="text-xs text-[#FACC15] font-bold mb-2.5">
                      {service.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-[#FFFBEB]/80 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-[#FACC15]/20 flex items-center justify-between gap-2 mt-auto">
                    {/* More details trigger */}
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FACC15] hover:text-[#FFFFFF] transition-colors cursor-pointer py-1"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>{t.servicesSection.moreInfo}</span>
                    </button>

                    {/* Direct WhatsApp Action for this specific service */}
                    <a
                      href={getWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-extrabold text-[#380307] bg-gradient-to-r from-[#FEF08A] to-[#FACC15] hover:from-[#FFFFFF] hover:to-[#FACC15] rounded-lg transition-all cursor-pointer shadow-sm whitespace-nowrap border border-[#FEF08A]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-[#15803D] text-[#15803D]" />
                      <span>{t.servicesSection.whatsappAsk}</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* In-depth Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
