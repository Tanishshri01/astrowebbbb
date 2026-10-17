/**
 * Service Images mapping for Astro Kannada
 * Maps all 12 Vedic astrology services to authentic, high-resolution devotional imagery.
 */

export interface ServiceImageMeta {
  src: string;
  alt: string;
  fallbackIcon: string;
}

export const serviceImages: Record<string, ServiceImageMeta> = {
  'lakshmi-vashikarana': {
    src: '/images/goddess_lakshmi.jpg',
    alt: 'Goddess Mahalakshmi Aradhana - Wealth & Auspicious Prosperity',
    fallbackIcon: 'Coins'
  },
  'jana-vashikarana': {
    src: '/images/krishna_govardhan.png',
    alt: 'Lord Sri Krishna Govardhan Protection - Public Harmony & Respect',
    fallbackIcon: 'Users'
  },
  'dhana-vashikarana': {
    src: '/images/lord_kubera.jpg',
    alt: 'Lord Kubera & Riddhi - Wealth Attraction & Abundance',
    fallbackIcon: 'Gem'
  },
  'love-relationship-issues': {
    src: '/images/radha_krishna.jpg',
    alt: 'Radha Krishna Divine Union - Love & Couple Harmony',
    fallbackIcon: 'HeartHandshake'
  },
  'education-and-studies': {
    src: '/images/goddess_saraswati.jpg',
    alt: 'Goddess Saraswati Vidya Upasana - Wisdom & Academic Success',
    fallbackIcon: 'GraduationCap'
  },
  'job-and-career-guidance': {
    src: '/images/lord_surya.jpg',
    alt: 'Surya Bhagwan Sun Deity - Professional Victory & Career Rise',
    fallbackIcon: 'Briefcase'
  },
  'financial-problems': {
    src: '/images/lord_ganesha.jpg',
    alt: 'Lord Ganesha Vighnaharta - Obstacle Removal & Debt Relief',
    fallbackIcon: 'ShieldAlert'
  },
  'enemy-troubles-spiritual-remedy': {
    src: '/images/protection_hanuman.jpg',
    alt: 'Sankatmochan Hanuman - Spiritual Protection & Shield',
    fallbackIcon: 'Building2'
  },
  'business-problems': {
    src: '/images/lord_kubera.jpg',
    alt: 'Vyapar Vriddhi Kubera Aradhana - Trade & Business Growth',
    fallbackIcon: 'TrendingDown'
  },
  'financial-loss-guidance': {
    src: '/images/krishna_darshan.jpg',
    alt: 'Lord Krishna Shanti Darshan - Recovery & Planetary Balance',
    fallbackIcon: 'Home'
  },
  'domestic-discord-and-family-peace': {
    src: '/images/lord_shiva.jpg',
    alt: 'Lord Shiva Meditation - Family Tranquility & Home Peace',
    fallbackIcon: 'Flame'
  },
  'homa-and-yajna-guidance': {
    src: '/images/vedic_yajna.jpg',
    alt: 'Sacred Vedic Fire Homa & Yajna Havan Kund',
    fallbackIcon: 'Flame'
  }
};

export const KRISHNA_BHAGWAN_IMAGE = '/images/krishna_darshan.jpg';
export const PANDIT_SACHIN_SHARMA_IMAGE = '/images/pandit_sachin_sharma.jpg';
export const PANDIT_FALLBACK_SVG = '/astrologer_portrait.svg';
