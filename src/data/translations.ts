import { Language } from '../context/LanguageContext';
import { ServiceItem, FaqItem } from '../types';

export interface TranslationContent {
  topBar: {
    announcement: string;
    callNow: string;
    translateLabel: string;
  };
  brand: {
    name: string;
    astrologer: string;
    astrologerTitle: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    rituals: string;
    faq: string;
    blog: string;
    contact: string;
    whatsappCta: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    whatsappPrimary: string;
    servicesSecondary: string;
    callDirect: string;
    confidential: string;
    directComm: string;
    vedicMethod: string;
    altarTitle: string;
    altarDesc: string;
    quickContact: string;
    activeStatus: string;
    sendMessage: string;
  };
  about: {
    tagline: string;
    heading: string;
    quote: string;
    desc1: string;
    desc2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
    whatsappChat: string;
    chartTitle: string;
    chartSubtitle: string;
  };
  servicesSection: {
    tagline: string;
    heading: string;
    subheading: string;
    moreInfo: string;
    whatsappAsk: string;
    disclaimer: string;
    modalService: string;
    modalClose: string;
    traditionalAspectsTitle: string;
    modalWhatsappCta: string;
    modalCallCta: string;
    items: ServiceItem[];
  };
  howItWorks: {
    tagline: string;
    heading: string;
    subheading: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    ctaButton: string;
  };
  whyChooseUs: {
    tagline: string;
    heading: string;
    subheading: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    badge: string;
  };
  rituals: {
    tagline: string;
    heading: string;
    subheading: string;
    altarTitle: string;
    altarDesc: string;
    items: Array<{ name: string; purpose: string }>;
    ctaButton: string;
  };
  faq: {
    tagline: string;
    heading: string;
    subheading: string;
    moreQuestions: string;
    moreQuestionsDesc: string;
    askButton: string;
    items: FaqItem[];
  };
  contact: {
    tagline: string;
    heading: string;
    subheading: string;
    boxPhoneTitle: string;
    boxPhoneDesc: string;
    whatsappButton: string;
    callButton: string;
    formTitle: string;
    formSubtitle: string;
    labelName: string;
    placeholderName: string;
    labelPhone: string;
    placeholderPhone: string;
    labelMessage: string;
    placeholderMessage: string;
    submitButton: string;
    privacyNote: string;
    errName: string;
    errPhone: string;
    errMessage: string;
    successMessage: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    servicesTitle: string;
    otherServices: string;
    disclaimerTitle: string;
    disclaimerText: string;
    copyright: string;
    privacyPolicy: string;
    termsConditions: string;
    backToTop: string;
  };
  popup: {
    heading: string;
    subtext: string;
    button: string;
    closeLabel: string;
  };
  floating: {
    label: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  kn: {
    topBar: {
      announcement: 'ಸಾಂಪ್ರದಾಯಿಕ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ',
      callNow: 'ಕರೆ ಮಾಡಿ',
      translateLabel: 'ಭಾಷೆ / Language',
    },
    brand: {
      name: 'ಆಸ್ಟ್ರೋ ಕನ್ನಡ',
      astrologer: 'ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ',
      astrologerTitle: 'ವೈದಿಕ ಜ್ಯೋತಿಷಿ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶಕರು',
    },
    nav: {
      home: 'ಮುಖಪುಟ',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      services: 'ನಮ್ಮ ಸೇವೆಗಳು',
      rituals: 'ಪೂಜಾ ವಿಧಾನಗಳು',
      faq: 'ಪ್ರಶ್ನೋತ್ತರ',
      blog: 'ಲೇಖನಗಳು',
      contact: 'ಸಂಪರ್ಕಿಸಿ',
      whatsappCta: 'WhatsApp ಸಮಾಲೋಚನೆ',
    },
    hero: {
      badge: 'ಸಾಂಪ್ರದಾಯಿಕ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ ಮತ್ತು ದೈವಿಕ ಮಾರ್ಗದರ್ಶನ',
      title: 'ನಿಮ್ಮ ಜೀವನದ ಸಮಸ್ಯೆಗಳಿಗೆ',
      titleHighlight: 'ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ',
      description: 'ವೈಯಕ್ತಿಕ ಆತಂಕಗಳು, ಪ್ರೇಮ ಮತ್ತು ದಾಂಪತ್ಯ ಸಂಬಂಧಗಳು, ಉದ್ಯೋಗ, ಆರ್ಥಿಕ ಸ್ಥಿರತೆ, ವ್ಯಾಪಾರ, ಮಕ್ಕಳ ಶಿಕ್ಷಣ ಹಾಗೂ ಕುಟುಂಬದ ನೆಮ್ಮದಿಯ ಕುರಿತು ಸಾಂಪ್ರದಾಯಿಕ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯದ ಬೆಳಕಿನಲ್ಲಿ ಆಪ್ತ ಸಮಾಲೋಚನೆ ಪಡೆಯಿರಿ.',
      whatsappPrimary: 'ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ',
      servicesSecondary: 'ನಮ್ಮ ಸೇವೆಗಳನ್ನು ನೋಡಿ',
      callDirect: 'ಕರೆ ಮಾಡಿ',
      confidential: 'ಗೌಪ್ಯ ಸಮಾಲೋಚನೆ',
      directComm: 'ಕನ್ನಡದಲ್ಲಿ ನೇರ ಸಂವಹನ',
      vedicMethod: 'ಶಾಸ್ತ್ರೋಕ್ತ ವೈದಿಕ ಮಾರ್ಗ',
      altarTitle: 'ದೈವಜ್ಞ ಪಂಡಿತರೊಂದಿಗೆ ಮಾತನಾಡಿ',
      altarDesc: 'ನಿಮ್ಮ ಜಾತಕ ಮತ್ತು ಪ್ರಶ್ನೆಗಳಿಗೆ ಶಾಸ್ತ್ರೋಕ್ತ ಪರಿಹಾರ ಹಾಗೂ ಅನುಕೂಲಕರ ಮುಹೂರ್ತಗಳ ಮಾರ್ಗದರ್ಶನ.',
      quickContact: 'ತ್ವರಿತ ಸಂಪರ್ಕಕ್ಕಾಗಿ',
      activeStatus: 'WhatsApp ಸಕ್ರಿಯವಾಗಿದೆ',
      sendMessage: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
    },
    about: {
      tagline: 'ಸಂಪ್ರದಾಯ ಮತ್ತು ಪರಂಪರೆ',
      heading: 'ಪ್ರಾಚೀನ ವೈದಿಕ ಪರಂಪರೆಯ ದೈವಿಕ ಮಾರ್ಗದರ್ಶನ',
      quote: 'ಕೇರಳ ಮತ್ತು ದಕ್ಷಿಣ ಕಾಶಿಯ ಪ್ರಾಚೀನ ಆಧ್ಯಾತ್ಮಿಕ ಸಂಪ್ರದಾಯಗಳು, ತಲೆಮಾರುಗಳಿಂದ ಬಂದ ಜ್ಞಾನ, ಹೋಮ ಮತ್ತು ಯಜ್ಞಗಳಂತಹ ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳ ಕುರಿತು ಮಾರ್ಗದರ್ಶನ.',
      desc1: 'ಜ್ಯೋತಿಷ್ಯ ಶಾಸ್ತ್ರವು ಕೇವಲ ಭವಿಷ್ಯ ನುಡಿಯುವ ಸಾಧನವಲ್ಲ; ಅದು ಮಾನವ ಜೀವನದ ಏಳು-ಬೀಳುಗಳಲ್ಲಿ ಸರಿಯಾದ ದಿಕ್ಕನ್ನು ತೋರಿಸುವ ದೈವಿಕ ಜ್ಞಾನಜ್ಯೋತಿ. ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ ಅವರು ಕೇರಳದ ತಾಂತ್ರಿಕ ಪರಂಪರೆ ಹಾಗೂ ದಕ್ಷಿಣ ಕಾಶಿಯ ಪುರಾತನ ವೈದಿಕ ಪದ್ಧತಿಯ ಸಾರವನ್ನು ಅನುಸರಿಸಿ ಭಕ್ತರ ಕಷ್ಟ-ಕಾರ್ಪಣ್ಯಗಳನ್ನು ಆಲಿಸುತ್ತಾರೆ.',
      desc2: 'ಜಾತಕ ಪರಿಶೀಲನೆ, ನವಗ್ರಹ ದೋಷ ನಿವಾರಣೆ, ವಾಸ್ತು ಸಲಹೆ ಹಾಗೂ ಪುರಾತನ ಶಾಸ್ತ್ರೋಕ್ತ ಹೋಮ-ಹವನಗಳ ಮೂಲಕ ಜೀವನದಲ್ಲಿ ಸಕಾರಾತ್ಮಕ ಶಕ್ತಿಯನ್ನು ಮರಳಿ ತರಲು ಅವರು ಧಾರ್ಮಿಕ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ.',
      pillar1Title: 'ಶಾಸ್ತ್ರೋಕ್ತ ಜಾತಕ ಅಧ್ಯಯನ',
      pillar1Desc: 'ಜನನ ಕುಂಡಲಿ, ನವಗ್ರಹ ಸ್ಥಿತಿ ಮತ್ತು ದಶಾ-ಭುಕ್ತಿಗಳ ನಿಖರ ಪರಿಶೀಲನೆ.',
      pillar2Title: 'ಹೋಮ & ಯಜ್ಞ ಮಾರ್ಗದರ್ಶನ',
      pillar2Desc: 'ದೋಷ ನಿವಾರಣೆ ಮತ್ತು ಗೃಹ ಶಾಂತಿಗಾಗಿ ಸಾಂಪ್ರದಾಯಿಕ ವೈದಿಕ ಆಚರಣೆಗಳು.',
      pillar3Title: 'ಆಪ್ತ ಹಾಗೂ ಗೌಪ್ಯ ಸಮಾಲೋಚನೆ',
      pillar3Desc: 'ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಸಮಸ್ಯೆಗಳನ್ನು ಸಂಪೂರ್ಣ ಗೌಪ್ಯವಾಗಿಟ್ಟು ಸಹಾನುಭೂತಿಯಿಂದ ಆಲಿಸುವಿಕೆ.',
      pillar4Title: 'ಸರಳ ಪರಿಹಾರ ಕ್ರಮಗಳು',
      pillar4Desc: 'ನಿತ್ಯ ಜೀವನದಲ್ಲಿ ಆಚರಿಸಬಹುದಾದ ಸ್ತೋತ್ರ ಪಠಣ ಮತ್ತು ಪ್ರಾರ್ಥನಾ ವಿಧಾನಗಳು.',
      whatsappChat: 'ಪಂಡಿತರೊಂದಿಗೆ WhatsApp ನಲ್ಲಿ ಸಂವಹನ ನಡೆಸಿ',
      chartTitle: 'ವೈದಿಕ ಜಾತಕ ಚಕ್ರ ಹಾಗೂ ಶಾಸ್ತ್ರೀಯ ನವಗ್ರಹ ವಿಶ್ಲೇಷಣೆ',
      chartSubtitle: 'ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ ಅವರ ಮಾರ್ಗದರ್ಶನ ಪೀಠ',
    },
    servicesSection: {
      tagline: 'ನಮ್ಮ ಜ್ಯೋತಿಷ್ಯ ಸೇವೆಗಳು',
      heading: 'ಜೀವನದ ಪ್ರಮುಖ ಸಮಸ್ಯೆಗಳಿಗೆ ಆಧ್ಯಾತ್ಮಿಕ ಪರಿಹಾರಗಳು',
      subheading: 'ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ ಅವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಪ್ರತಿಯೊಂದು ಸಮಸ್ಯೆಗೂ ಶಾಸ್ತ್ರೋಕ್ತ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ವೈದಿಕ ಕ್ರಮಗಳನ್ನು ಸೂಚಿಸಲಾಗುತ್ತದೆ.',
      moreInfo: 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿ',
      whatsappAsk: 'WhatsApp ವಿಚಾರಿಸಿ',
      disclaimer: 'ಗಮನಿಸಿ: ಜ್ಯೋತಿಷ್ಯ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪದ್ಧತಿಗಳು ಪ್ರಾಚೀನ ನಂಬಿಕೆ ಹಾಗೂ ಶಾಸ್ತ್ರೋಕ್ತ ಸಂಪ್ರದಾಯಗಳನ್ನು ಆಧರಿಸಿವೆ. ಇವು ಭಕ್ತರಿಗೆ ಧೈರ್ಯ ಮತ್ತು ಸಕಾರಾತ್ಮಕ ಮಾರ್ಗದರ್ಶನ ನೀಡುವ ಉದ್ದೇಶವನ್ನು ಹೊಂದಿವೆ.',
      modalService: 'ಸೇವೆ',
      modalClose: 'ಮುಚ್ಚಿ',
      traditionalAspectsTitle: 'ಶಾಸ್ತ್ರೋಕ್ತ ಅಂಶಗಳು ಮತ್ತು ಪೂಜಾ ಮಾರ್ಗಗಳು:',
      modalWhatsappCta: 'WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ',
      modalCallCta: 'ಕರೆ ಮಾಡಿ',
      items: [
        {
          id: 'lakshmi-vashikarana',
          number: '01',
          title: 'ಲಕ್ಷ್ಮಿ ವಶೀಕರಣ',
          subtitle: 'ಮಹಾಲಕ್ಷ್ಮಿ ಕೃಪೆ ಮತ್ತು ಗೃಹ-ವ್ಯಾಪಾರ ಸಮೃದ್ಧಿಯ ಆಚರಣೆ',
          shortDescription: 'ಸಾಂಪ್ರದಾಯಿಕ ಮಹಾಲಕ್ಷ್ಮಿ ಪೂಜಾ ವಿಧಾನಗಳು, ಧನ ವೃದ್ಧಿ ಮಂತ್ರಗಳು ಮತ್ತು ಗೃಹದಲ್ಲಿ ಧನಾತ್ಮಕ ಶಕ್ತಿಯ ಆಕರ್ಷಣೆಗೆ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ.',
          fullDescription: 'ಲಕ್ಷ್ಮಿ ವಶೀಕರಣ ಎಂಬುದು ಪುರಾತನ ವೈದಿಕ ಪದ್ಧತಿಯಲ್ಲಿ ಮಹಾಲಕ್ಷ್ಮಿಯ ಅನುಗ್ರಹವನ್ನು ಆಕರ್ಷಿಸಲು ಆಚರಿಸುವ ಶ್ರೇಷ್ಠ ಆಧ್ಯಾತ್ಮಿಕ ವಿಧಾನವಾಗಿದೆ. ಗೃಹದಲ್ಲಿ ಅಥವಾ ಕೆಲಸದ ಸ್ಥಳದಲ್ಲಿ ಆರ್ಥಿಕ ಅಡೆತಡೆಗಳು, ಅದೃಷ್ಟದ ಕೊರತೆ ಅಥವಾ ಅಸ್ಥಿರತೆ ಎದುರಾದಾಗ, ಶಾಸ್ತ್ರೋಕ್ತ ಲಕ್ಷ್ಮಿ ಯಂತ್ರ ಪೂಜೆ, ಕಮಲ ಪುಷ್ಪ ಅರ್ಚನೆ ಮತ್ತು ಧನಲಕ್ಷ್ಮಿ ಮಂತ್ರ ಜಪದ ಮೂಲಕ ಧನಾತ್ಮಕ ಶಕ್ತಿಯನ್ನು ಆಕರ್ಷಿಸಲು ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ ಅವರು ಸಾಂಪ್ರದಾಯಿಕ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ.',
          traditionalAspects: [
            'ಶ್ರೀ ಸೂಕ್ತ ಪಠಣ ಮತ್ತು ಕುಂಕುಮಾರ್ಚನೆ ಮಾರ್ಗದರ್ಶನ',
            'ಗೃಹ ಮತ್ತು ವ್ಯಾಪಾರ ಸ್ಥಳದಲ್ಲಿ ವಾಸ್ತು ಲಕ್ಷ್ಮಿ ಆಕರ್ಷಣೆಯ ನಿಯಮಗಳು',
            'ಅನಗತ್ಯ ಖರ್ಚುಗಳನ್ನು ನಿಯಂತ್ರಿಸಿ ಧನಾಗಮನವನ್ನು ಹೆಚ್ಚಿಸುವ ಸಾಂಪ್ರದಾಯಿಕ ಚಿಂತನೆ',
            'ಧನ ತ್ರಯೋದಶಿ ಮತ್ತು ಹುಣ್ಣಿಮೆಯ ವಿಶೇಷ ಪೂಜಾ ಸಂಪ್ರದಾಯಗಳು'
          ],
          spiritualGuidance: 'ಆಧ್ಯಾತ್ಮಿಕ ಆಚರಣೆಗಳು ನಂಬಿಕೆ ಹಾಗೂ ಭಕ್ತಿಯ ಸಂಕೇತವಾಗಿದ್ದು, ಸಕಾರಾತ್ಮಕ ಶಕ್ತಿಯನ್ನು ವೃದ್ಧಿಸಲು ನೆರವಾಗುತ್ತವೆ.',
          whatsappMessage: 'ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನನಗೆ "ಲಕ್ಷ್ಮಿ ವಶೀಕರಣ" ಮತ್ತು ಆರ್ಥಿಕ ಸಮೃದ್ಧಿಯ ಪೂಜಾ ಮಾರ್ಗದರ್ಶನದ ಕುರಿತು ಮಾಹಿತಿ ಬೇಕಾಗಿದೆ.',
          iconName: 'Coins'
        },
        {
          id: 'jana-vashikarana',
          number: '02',
          title: 'ಜನ ವಶೀಕರಣ',
          subtitle: 'ಸಮಾಜದಲ್ಲಿ ಗೌರವ, ಜನಾನುರಾಗ ಮತ್ತು ಸೌಹಾರ್ದ ಸಂಬಂಧಗಳು',
          shortDescription: 'ಸಾರ್ವಜನಿಕ ಜೀವನ, ಕಾರ್ಯಕ್ಷೇತ್ರ ಅಥವಾ ಕುಟುಂಬದಲ್ಲಿ ಪರಸ್ಪರ ಪ್ರೀತಿ, ಸ್ನೇಹ ಮತ್ತು ಗೌರವವನ್ನು ಗಳಿಸಲು ವೈದಿಕ ಪರಿಹಾರಗಳು.',
          fullDescription: 'ಜನ ವಶೀಕರಣವು ಪ್ರಾಚೀನ ಕಾಲದಿಂದಲೂ ಸಮಾಜದಲ್ಲಿ ಸೌಹಾರ್ದತೆ, ಪರಸ್ಪರ ಗೌರವ ಮತ್ತು ಉತ್ತಮ ಬಾಂಧವ್ಯವನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಲು ಬಳಸಲ್ಪಡುವ ಸಾಂಪ್ರದಾಯಿಕ ಪದ್ಧತಿಯಾಗಿದೆ. ಕಚೇರಿಯಲ್ಲಿ ಸಹೋದ್ಯೋಗಿಗಳೊಂದಿಗೆ, ಸಾರ್ವಜನಿಕ ವ್ಯವಹಾರಗಳಲ್ಲಿ ಅಥವಾ ಆಪ್ತರೊಂದಿಗೆ ಮನಸ್ತಾಪ ಉಂಟಾದಾಗ ಮನಸ್ಸಿನ ಶಾಂತಿ ಮತ್ತು ವ್ಯಕ್ತಿತ್ವದ ಧನಾತ್ಮಕ ಪ್ರಭಾವವನ್ನು ಹೆಚ್ಚಿಸುವ ಧಾರ್ಮಿಕ ನಿಯಮಗಳು ಹಾಗೂ ಮಂತ್ರೋಪದೇಶದ ಬಗ್ಗೆ ಪಂಡಿತರು ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ.',
          traditionalAspects: [
            'ಆಕರ್ಷಣಾ ಶಕ್ತಿ ಮತ್ತು ವಾಕ್ ಸಿದ್ಧಿಗೆ ಸಂಬಂಧಿಸಿದ ಮಂತ್ರ ಮಾರ್ಗದರ್ಶನ',
            'ಸಾರ್ವಜನಿಕ ಜೀವನದಲ್ಲಿ ಅಪಖ್ಯಾತಿ ಅಥವಾ ಅಪಾರ್ಥಗಳನ್ನು ನಿವಾರಿಸುವ ಶಾಂತಿ ಪೂಜೆಗಳು',
            'ಕುಟುಂಬ ಮತ್ತು ಸಮಾಜದಲ್ಲಿ ಗೌರವಯುತ ಸ್ಥಾನಮಾನಕ್ಕಾಗಿ ಸೂರ್ಯಾರಾಧನೆ',
            'ಮನೋಸ್ಥೈರ್ಯ ಮತ್ತು ಸೌಮ್ಯ ವರ್ತನೆಗೆ ಸೂಕ್ತ ಪ್ರಾರ್ಥನಾ ವಿಧಾನಗಳು'
          ],
          spiritualGuidance: 'ಇದು ಯಾವುದೇ ವ್ಯಕ್ತಿಯ ಸ್ವತಂತ್ರ ಇಚ್ಛೆಯನ್ನು ಕಸಿದುಕೊಳ್ಳುವ ಸಾಧನವಲ್ಲ; ವ್ಯಕ್ತಿಯಲ್ಲಿ ಧನಾತ್ಮಕ ಆಕರ್ಷಣೆ ಹಾಗೂ ಸೌಹಾರ್ದತೆಯನ್ನು ಬೆಳೆಸುವ ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಕ್ರಿಯೆಯಾಗಿದೆ.',
          whatsappMessage: 'ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನನಗೆ "ಜನ ವಶೀಕರಣ" ಮತ್ತು ಸೌಹಾರ್ದ ಸಂಬಂಧಗಳ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನದ ಕುರಿತು ಮಾಹಿತಿ ಬೇಕಾಗಿದೆ.',
          iconName: 'Users'
        },
        {
          id: 'dhana-vashikarana',
          number: '03',
          title: 'ಧನ ವಶೀಕರಣ',
          subtitle: 'ಧನಾಗಮನದ ಅಡೆತಡೆಗಳ ನಿವಾರಣೆ ಮತ್ತು ಆರ್ಥಿಕ ಸಮೃದ್ಧಿ',
          shortDescription: 'ಶ್ರಮಕ್ಕೆ ತಕ್ಕ ಪ್ರತಿಫಲ ದೊರೆಯದೆ ಹಣದ ನಿಲುಗಡೆ ಉಂಟಾದಾಗ ಧನಪ್ರಾಪ್ತಿಯ ಗ್ರಹದೋಷ ನಿವಾರಣೆ ಮತ್ತು ಕುಬೇರ ಪೂಜೆಯ ಮಾರ್ಗದರ್ಶನ.',
          fullDescription: 'ಎಷ್ಟೇ ಕಷ್ಟಪಟ್ಟು ದುಡಿದರೂ ಹಣ ಕೈಯಲ್ಲಿ ಉಳಿಯದಿರುವುದು, ಸಾಲದ ಹೊರೆ ಹೆಚ್ಚಾಗುವುದು ಅಥವಾ ಅನಿರೀಕ್ಷಿತ ಖರ್ಚುಗಳು ಎದುರಾಗುವುದು ಜಾತಕದಲ್ಲಿ ಗುರು, ಶುಕ್ರ ಅಥವಾ ಎರಡನೇ-ಹನ್ನೊಂದನೇ ಮನೆಗಳ ಗ್ರಹಬಲದ ಕೊರತೆಯಿಂದ ಉಂಟಾಗಬಹುದು. ಧನ ವಶೀಕರಣ ಪದ್ಧತಿಯು ಕುಬೇರ ಯಂತ್ರ ಸ್ಥಾಪನೆ, ದಾರಿದ್ರ್ಯ ದಹನ ಸ್ತೋತ್ರ ಮತ್ತು ದಕ್ಷಿಣ ಕಾಶಿ ಸಂಪ್ರದಾಯದ ಧನಾಗಮನ ಯಜ್ಞಗಳ ಮೂಲಕ ಧನಸ್ಥಿರತೆಯನ್ನು ತರಲು ಸಹಾಯಕವಾಗಿದೆ.',
          traditionalAspects: [
            'ಕುಬೇರ ಯಂತ್ರ ಆರಾಧನೆ ಮತ್ತು ತಿಜೋರಿ ವಾಸ್ತು ಶಾಸ್ತ್ರದ ಸಲಹೆಗಳು',
            'ಜಾತಕದ ಧನ ಸ್ಥಾನ (೨ನೇ ಮನೆ) ಮತ್ತು ಲಾಭ ಸ್ಥಾನ (೧೧ನೇ ಮನೆ) ಗ್ರಹ ವಿಶ್ಲೇಷಣೆ',
            'ಧನಹಾನಿಯನ್ನುಂಟು ಮಾಡುವ ಜಾತಕದ ದೋಷಗಳಿಗೆ ಶಾಂತಿ ಪೂಜೆ',
            'ಆದಾಯದ ಮೂಲಗಳನ್ನು ಸದ್ಬಳಕೆ ಮಾಡಿಕೊಳ್ಳುವ ಮಾನಸಿಕ ಏಕಾಗ್ರತೆ'
          ],
          spiritualGuidance: 'ಪ್ರಾಮಾಣಿಕ ಪರಿಶ್ರಮದ ಜೊತೆಗೆ ಧಾರ್ಮಿಕ ಶ್ರದ್ಧೆಯು ಆರ್ಥಿಕ ಸಬಲತೆಗೆ ಮಾರ್ಗ ತೋರಿಸುತ್ತದೆ ಎಂಬುದು ಸಾಂಪ್ರದಾಯಿಕ ನಂಬಿಕೆ.',
          whatsappMessage: 'ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನನಗೆ "ಧನ ವಶೀಕರಣ" ಮತ್ತು ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿಯ ಪೂಜಾ ವಿಧಾನಗಳ ಕುರಿತು ಮಾಹಿತಿ ಬೇಕಾಗಿದೆ.',
          iconName: 'Gem'
        },
        {
          id: 'love-relationship-issues',
          number: '04',
          title: 'ಪ್ರೇಮ ಮತ್ತು ಸಂಬಂಧಗಳ ಸಮಸ್ಯೆಗಳು',
          subtitle: 'ದಾಂಪತ್ಯ ಸಾಮರಸ್ಯ, ಪ್ರೇಮ ಸಂಬಂಧಗಳ ಗೊಂದಲ ಮತ್ತು ಕುಟುಂಬ ಹೊಂದಾಣಿಕೆ',
          shortDescription: 'ಮನಸ್ತಾಪ, ಅಪನಂಬಿಕೆ, ದಾಂಪತ್ಯ ಕಲಹ ಅಥವಾ ಪ್ರೇಮ ಜೀವನದ ಸಂಕಷ್ಟಗಳಿಗೆ ಜಾತಕ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪರಿಹಾರಗಳು.',
          fullDescription: 'ಜೀವನದಲ್ಲಿ ಅತ್ಯಂತ ಮಹತ್ವದ್ದಾದ ಪ್ರೇಮ ಮತ್ತು ದಾಂಪತ್ಯ ಸಂಬಂಧಗಳು ಕೆಲವೊಮ್ಮೆ ಜಾತಕದಲ್ಲಿನ ಶುಕ್ರ, ಕುಜ (ಮಂಗಳ ದೋಷ) ಅಥವಾ ರಾಹು-ಕೇತುಗಳ ಪ್ರಭಾವದಿಂದಾಗಿ ಕಠಿಣ ಪರಿಸ್ಥಿತಿ ತಲುಪಬಹುದು. ಸಣ್ಣ ವಿಚಾರಗಳಿಗೂ ವಿರಸ, ಹೊಂದಾಣಿಕೆಯ ಕೊರತೆ ಅಥವಾ ಕುಟುಂಬದ ವಿರೋಧ ಎದುರಾದಾಗ, ಇಬ್ಬರ ಜಾತಕಗಳನ್ನು ಕೂಲಂಕಷವಾಗಿ ಪರಿಶೀಲಿಸಿ ಉಮಾ-ಮಹೇಶ್ವರ ಪೂಜೆ, ರಾಧಾ-ಕೃಷ್ಣ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಪರಸ್ಪರ ಪ್ರೀತಿಯನ್ನು ಪುನರುಜ್ಜೀವನಗೊಳಿಸುವ ಶಾಂತಿಯುತ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗಗಳನ್ನು ಪಂಡಿತರು ಸೂಚಿಸುತ್ತಾರೆ.',
          traditionalAspects: [
            'ದಂಪತಿಗಳ ಜಾತಕ ಕೂಟ ಹೊಂದಾಣಿಕೆ (ಅಷ್ಟಕೂಟ ಮಿಲನ) ಪುನರ್ವಿಮರ್ಶೆ',
            'ಕುಜ ದೋಷ ಅಥವಾ ಶುಕ್ರ ದೋಷದಿಂದ ಉಂಟಾಗುವ ಕಲಹಗಳಿಗೆ ಶಾಂತಿ',
            'ಸಂಬಂಧಗಳಲ್ಲಿ ಮಧುರತೆ ತರಲು ಕಾಮದೇವ-ರತಿ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಗೌರಿ ಪೂಜೆ',
            'ಕುಟುಂಬದ ಹಿರಿಯರೊಂದಿಗೆ ಸುಖಕರ ಬಾಂಧವ್ಯ ಬೆಳೆಸಲು ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗಗಳು'
          ],
          spiritualGuidance: 'ಪರಸ್ಪರ ತಿಳುವಳಿಕೆ, ಪ್ರೀತಿ ಮತ್ತು ತಾಳ್ಮೆಯ ಜೊತೆಗೆ ನಡೆಸುವ ಆಧ್ಯಾತ್ಮಿಕ ಆಚರಣೆಗಳು ಕುಟುಂಬದ ಶಾಂತಿಯನ್ನು ಕಾಪಾಡುತ್ತವೆ.',
          whatsappMessage: 'ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನನಗೆ ಪ್ರೇಮ ಮತ್ತು ಸಂಬಂಧಗಳ ಸಮಸ್ಯೆಗಳ ಕುರಿತು ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ ಬೇಕಾಗಿದೆ.',
          iconName: 'HeartHandshake'
        },
        {
          id: 'education-and-studies',
          number: '05',
          title: 'ವಿದ್ಯೆ ಮತ್ತು ಶಿಕ್ಷಣ',
          subtitle: 'ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಏಕಾಗ್ರತೆ, ನೆನಪಿನ ಶಕ್ತಿ ಮತ್ತು ಉನ್ನತ ಶಿಕ್ಷಣ ಮಾರ್ಗದರ್ಶನ',
          shortDescription: 'ಓದಿನಲ್ಲಿ ಆಸಕ್ತಿಯ ಕೊರತೆ, ಪರೀಕ್ಷಾ ಭಯ, ಬುಧ-ಗುರು ಗ್ರಹಗಳ ಬಲವರ್ಧನೆ ಮತ್ತು ಸರಸ್ವತಿ-ಹಯಗ್ರೀವ ಆರಾಧನಾ ವಿಧಾನಗಳು.',
          fullDescription: 'ಶಿಕ್ಷಣವು ಪ್ರತಿಯೊಬ್ಬ ವ್ಯಕ್ತಿಯ ಭವಿಷ್ಯದ ಅಡಿಪಾಯ. ಅನೇಕ ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳು ಪರೀಕ್ಷೆಯ ಸಮಯದಲ್ಲಿ ಮರೆವು, ಏಕಾಗ್ರತೆಯ ಕೊರತೆ ಅಥವಾ ಅಸ್ಥಿರ ಮನಸ್ಸಿನಿಂದ ಬಳಲುತ್ತಾರೆ. ಜ್ಯೋತಿಷ್ಯ ಶಾಸ್ತ್ರದಲ್ಲಿ ವಿದ್ಯೆಗೆ ಬುಧ ಮತ್ತು ಜ್ಞಾನಕ್ಕೆ ಗುರು ಕಾರಣಕರ್ತರಾಗಿದ್ದಾರೆ. ಜಾತಕದಲ್ಲಿನ ವಿದ್ಯಾ ಸ್ಥಾನ (೪ನೇ ಮತ್ತು ೫ನೇ ಮನೆ) ಪರಿಶೀಲಿಸಿ, ಮೇಧಾ ದಕ್ಷಿಣಾಮೂರ್ತಿ ಜಪ, ಹಯಗ್ರೀವ ಸ್ತೋತ್ರ ಮತ್ತು ಸರಸ್ವತಿ ಪೂಜೆಗಳ ಮೂಲಕ ಮಕ್ಕಳ ಬುದ್ಧಿಶಕ್ತಿಯನ್ನು ವಿಕಸಿಸಲು ಮಾರ್ಗದರ್ಶನ ನೀಡಲಾಗುತ್ತದೆ.',
          traditionalAspects: [
            'ವಿದ್ಯಾರ್ಥಿಯ ಜಾತಕದಲ್ಲಿ ಬುಧ ಮತ್ತು ಗುರು ಗ್ರಹಗಳ ಬಲವರ್ಧನೆ',
            'ಮೇಧಾ ಶಕ್ತಿ ಹೆಚ್ಚಿಸಲು ಹಯಗ್ರೀವ ಮತ್ತು ಸರಸ್ವತಿ ಪೂಜಾ ಕ್ರಮ',
            'ಉನ್ನತ ಶಿಕ್ಷಣ ಅಥವಾ ವಿದೇಶ ವ್ಯಾಸಂಗದ ಯೋಗಗಳ ಜಾತಕ ಪರಿಶೀಲನೆ',
            'ಪರೀಕ್ಷಾ ಭಯವನ್ನು ಹೋಗಲಾಡಿಸಿ ಆತ್ಮವಿಶ್ವಾಸ ಮೂಡಿಸುವ ಸಕಾರಾತ್ಮಕ ಮಾರ್ಗದರ್ಶನ'
          ],
          spiritualGuidance: 'ಶ್ರದ್ಧೆಯಿಂದ ಕೂಡಿದ ಅಧ್ಯಯನ ಮತ್ತು ದೈವ ಪ್ರಾರ್ಥನೆಯು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಯಶಸ್ಸನ್ನು ಕರುಣಿಸುತ್ತದೆ.',
          whatsappMessage: 'ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನನ್ನ ಮಗ/ಮಗಳ ಶಿಕ್ಷಣ ಮತ್ತು ವಿದ್ಯಾಭ್ಯಾಸದ ಕುರಿತು ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ ಬೇಕಾಗಿದೆ.',
          iconName: 'GraduationCap'
        },
        {
          id: 'job-and-career-guidance',
          number: '06',
          title: 'ಉದ್ಯೋಗ ಮತ್ತು ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ',
          subtitle: 'ಉದ್ಯೋಗ ಹುಡುಕಾಟ, ಬಡ್ತಿ, ವರ್ಗಾವಣೆ ಮತ್ತು ವೃತ್ತಿಜೀವನದ ಬೆಳವಣಿಗೆ',
          shortDescription: 'ಶನಿ ಮಹಾರಾಜ ಮತ್ತು ಸೂರ್ಯ ದೇವನ ಅನುಗ್ರಹದಿಂದ ಉದ್ಯೋಗದಲ್ಲಿ ಸ್ಥಿರತೆ, ಬಡ್ತಿಯ ಅಡೆತಡೆಗಳ ನಿವಾರಣೆ ಮತ್ತು ದಿಕ್ಕು ತೋರಿಸುವ ಸಲಹೆಗಳು.',
          fullDescription: 'ವೃತ್ತಿಜೀವನದಲ್ಲಿ ನಿರಂತರ ಶ್ರಮವಹಿಸಿದರೂ ಪ್ರಮೋಷನ್ ಸಿಗದಿರುವುದು, ಅನಗತ್ಯ ವರ್ಗಾವಣೆ, ಮೇಲಧಿಕಾರಿಗಳೊಂದಿಗೆ ವಿರಸ ಅಥವಾ ಸೂಕ್ತ ಉದ್ಯೋಗ ಸಿಗದೆ ನಿರಾಶರಾಗಿದ್ದೀರಾ? ಜಾತಕದಲ್ಲಿನ ೧೦ನೇ ಮನೆಯ (ಕರ್ಮ ಸ್ಥಾನ) ಸ್ಥಿತಿಗತಿ ಹಾಗೂ ಶನಿ-ಸೂರ್ಯ-ರವಿ ಗ್ರಹಗಳ ದೃಷ್ಟಿಯನ್ನು ಪರಿಶೀಲಿಸಿ, ಶನಿ ಶಾಂತಿ, ನವಗ್ರಹ ಅರ್ಚನೆ ಮತ್ತು ವೃತ್ತಿ ಬೆಳವಣಿಗೆಗೆ ಅನುಕೂಲಕರವಾದ ಕಾಲಘಟ್ಟಗಳ ಕುರಿತು ಪಂಡಿತರು ಸ್ಪಷ್ಟ ವಿವರಣೆ ನೀಡುತ್ತಾರೆ.',
          traditionalAspects: [
            'ಕರ್ಮ ಸ್ಥಾನ (೧೦ನೇ ಮನೆ) ಮತ್ತು ದಶಾ-ಭುಕ್ತಿಗಳ ಆಳವಾದ ವಿಶ್ಲೇಷಣೆ',
            'ಉದ್ಯೋಗ ಸಂದರ್ಶನಗಳಲ್ಲಿ ಯಶಸ್ಸಿಗೆ ಮಾನಸಿಕ ಹಾಗೂ ಆಧ್ಯಾತ್ಮಿಕ ತಯಾರಿ',
            'ಸರ್ಕಾರಿ ಉದ್ಯೋಗ ಅಥವಾ ಬಹುರಾಷ್ಟ್ರೀಯ ಕಂಪನಿಗಳಲ್ಲಿ ಅವಕಾಶಗಳ ಯೋಗ ಪರಿಶೀಲನೆ',
            'ಕಾರ್ಯಕ್ಷೇತ್ರದಲ್ಲಿ ಶತ್ರುಗಳ ಉಪಟಳ ಅಥವಾ ರಾಜಕೀಯ ತೊಂದರೆಗಳಿಗೆ ಶಾಂತಿ'
          ],
          spiritualGuidance: 'ಸರಿಯಾದ ಸಮಯದಲ್ಲಿ ಸೂಕ್ತ ನಿರ್ಧಾರ ಹಾಗೂ ದೈವಬಲವು ವೃತ್ತಿಜೀವನದಲ್ಲಿ ಉನ್ನತ ಶಿಖರ ಮುಟ್ಟಲು ನೆರವಾಗುತ್ತದೆ.',
          whatsappMessage: 'ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನನಗೆ ಉದ್ಯೋಗ ಮತ್ತು ವೃತ್ತಿಜೀವನದ ಕುರಿತು ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ ಬೇಕಾಗಿದೆ.',
          iconName: 'Briefcase'
        },
        {
          id: 'financial-problems',
          number: '07',
          title: 'ಹಣಕಾಸಿನ ಸಮಸ್ಯೆಗಳು',
          subtitle: 'ಸಾಲಬಾಧೆ, ಹಣಕಾಸು ತೊಂದರೆಗಳು ಮತ್ತು ಆರ್ಥಿಕ ಸಂಕಷ್ಟಗಳಿಗೆ ಪರಿಹಾರ',
          shortDescription: 'ನಿರಂತರ ಸಾಲದ ಸುಳಿಗೆ ಸಿಲುಕಿದಾಗ, ಸಾಲ ತೀರಿಸಲು ದಾರಿ ಕಾಣದಿದ್ದಾಗ ಋಣಮುಕ್ತಿ ಪೂಜೆಗಳು ಮತ್ತು ಜಾತಕ ಆಧಾರಿತ ಮಾರ್ಗದರ್ಶನ.',
          fullDescription: 'ಆರ್ಥಿಕ ಸಂಕಷ್ಟ ಮತ್ತು ಸಾಲಬಾಧೆಯು ವ್ಯಕ್ತಿಯ ನಿದ್ರೆಗೆಡಿಸಿ ಕುಟುಂಬದ ನೆಮ್ಮದಿಯನ್ನು ಕಸಿದುಕೊಳ್ಳುತ್ತದೆ. ಜಾತಕದಲ್ಲಿನ ೬ನೇ ಮನೆ (ಋಣ ಸ್ಥಾನ) ಮತ್ತು ೧೨ನೇ ಮನೆ (ವ್ಯಯ ಸ್ಥಾನ) ದೋಷಯುಕ್ತವಾಗಿದ್ದಾಗ ಇಂತಹ ಕ್ಲೇಶಗಳು ಹೆಚ್ಚಾಗುತ್ತವೆ. ಋಣವಿಮೋಚಕ ಮಂಗಳ ಸ್ತೋತ್ರ, ಸುಬ್ರಹ್ಮಣ್ಯ ಆರಾಧನೆ ಮತ್ತು ಲಕ್ಷ್ಮೀ-ನರಸಿಂಹ ಕೃಪೆಯಿಂದ ಸಾಲಬಾಧೆಗಳಿಂದ ಹೊರಬರಲು ಪೂರಕವಾದ ಧಾರ್ಮಿಕ ಮಾರ್ಗಗಳನ್ನು ಸೂಚಿಸಲಾಗುತ್ತದೆ.',
          traditionalAspects: [
            'ಜಾತಕದ ೬ನೇ ಮತ್ತು ೧೨ನೇ ಮನೆಗಳ ಗ್ರಹದೋಷಗಳ ನಿವಾರಣಾ ಪೂಜೆ',
            'ಋಣವಿಮೋಚಕ ಅಂಗಾರಕ ಪೂಜೆ ಮತ್ತು ಸುಬ್ರಹ್ಮಣ್ಯ ಹೋಮದ ಮಾರ್ಗದರ್ಶನ',
            'ಹಣದ ಒಳಹರಿವನ್ನು ಹೆಚ್ಚಿಸಲು ಗೃಹ ವಾಸ್ತು ಪರಿಶೀಲನೆಯ ಪ್ರಾಥಮಿಕ ಸಲಹೆಗಳು',
            'ಆರ್ಥಿಕ ಶಿಸ್ತು ಮತ್ತು ಶಾಂತಿಯುತ ಮನಸ್ಥಿತಿಗೆ ಆಧ್ಯಾತ್ಮಿಕ ಬಲ'
          ],
          spiritualGuidance: 'ಆಧ್ಯಾತ್ಮಿಕ ಪರಿಹಾರಗಳು ಸಂಕಷ್ಟದ ಸಮಯದಲ್ಲಿ ಧೈರ್ಯವನ್ನು ನೀಡಿ, ಸಾಲಮುಕ್ತ ಜೀವನಕ್ಕೆ ಹೊಸ ದಾರಿಗಳನ್ನು ಕಂಡುಕೊಳ್ಳಲು ಪ್ರೇರೇಪಿಸುತ್ತವೆ.',
          whatsappMessage: 'ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನನಗೆ ಹಣಕಾಸಿನ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ಸಾಲಬಾಧೆಯ ನಿವಾರಣೆಯ ಕುರಿತು ಜ್ಯೋತಿಷ್ಯ ಸಲಹೆ ಬೇಕಾಗಿದೆ.',
          iconName: 'Coins'
        },
        {
          id: 'enemy-troubles-spiritual-remedy',
          number: '08',
          title: 'ಶತ್ರು ಕಾಡಾಟದ ಕುರಿತು ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ',
          subtitle: 'ದೃಷ್ಟಿದೋಷ, ಅಸೂಯೆ, ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳ ಪ್ರಭಾವ ಮತ್ತು ರಕ್ಷಾ ಕವಚ',
          shortDescription: 'ಅನಾವಶ್ಯಕ ವಿರೋಧ, ಕೋರ್ಟ್-ಕಚೇರಿ ವ್ಯಾಜ್ಯ, ಅಸೂಯೆಯ ಕಣ್ಣುಗಳು ಮತ್ತು ನಕಾರಾತ್ಮಕ ಕಂಪನಗಳಿಂದ ರಕ್ಷಣೆ ಪಡೆಯಲು ವೈದಿಕ ವಿಧಾನಗಳು.',
          fullDescription: 'ಜೀವನದಲ್ಲಿ ನೀವು ಮುನ್ನಡೆಯುವಾಗ ಇತರರ ಅಸೂಯೆ, ಕೆಟ್ಟ ದೃಷ್ಟಿ (ದೃಷ್ಟಿ ದೋಷ) ಅಥವಾ ಗುಪ್ತ ಶತ್ರುಗಳ ತಂತ್ರಗಳು ನಿಮಗೆ ಮಾನಸಿಕ ಹಾಗೂ ಸಾಮಾಜಿಕ ತೊಂದರೆ ಉಂಟುಮಾಡಬಹುದು. ಪ್ರಾಚೀನ ಕೇರಳ ತಾಂತ್ರಿಕ ಮತ್ತು ವೈದಿಕ ಸಂಪ್ರದಾಯದ ಸುದರ್ಶನ ಹೋಮ, ಕಾಲಭೈರವ ಆರಾಧನೆ ಮತ್ತು ನಾರಸಿಂಹ ಕವಚ ಧಾರಣೆಯ ಮೂಲಕ ದುಷ್ಟ ಶಕ್ತಿಗಳು ಮತ್ತು ಶತ್ರು ಕಾಟದಿಂದ ನಿಮ್ಮನ್ನು ಹಾಗೂ ನಿಮ್ಮ ಕುಟುಂಬವನ್ನು ರಕ್ಷಿಸಿಕೊಳ್ಳುವ ಮಾರ್ಗಗಳನ್ನು ಪಂಡಿತರು ತಿಳಿಸುತ್ತಾರೆ.',
          traditionalAspects: [
            'ದೃಷ್ಟಿ ದೋಷ ಮತ್ತು ನಕಾರಾತ್ಮಕ ಕಂಪನಗಳ ಶಮನಕ್ಕೆ ಸಾಂಪ್ರದಾಯಿಕ ಪರಿಹಾರಗಳು',
            'ಸುದರ್ಶನ ಚಕ್ರ ಯಂತ್ರ ಆರಾಧನೆ ಮತ್ತು ರಕ್ಷಾ ಸೂತ್ರ ವಿಧಾನ',
            'ಅನಗತ್ಯ ಕಾನೂನು ವ್ಯಾಜ್ಯಗಳು ಮತ್ತು ಜಗಳಗಳಿಂದ ಮುಕ್ತಿ ಪಡೆಯಲು ಪ್ರಾರ್ಥನೆ',
            'ಕುಟುಂಬಕ್ಕೆ ಶಾಂತಿ ಮತ್ತು ಅಭಯ ಕರುಣಿಸುವ ಕಾಲಭೈರವ ಆರಾಧನೆ'
          ],
          spiritualGuidance: 'ಧರ್ಮ ಮಾರ್ಗದಲ್ಲಿ ನಡೆಯುವವರಿಗೆ ದೈವಿಕ ರಕ್ಷಣೆ ಸದಾ ಇರುತ್ತದೆ; ರಕ್ಷಾ ಪೂಜೆಗಳು ಮನೆಯಲ್ಲಿ ಪವಿತ್ರ ವಾತಾವರಣವನ್ನು ನಿರ್ಮಿಸುತ್ತವೆ.',
          whatsappMessage: 'ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನನಗೆ ಶತ್ರು ಕಾಡಾಟ ಮತ್ತು ದೃಷ್ಟಿದೋಷ ನಿವಾರಣೆಯ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ ಬೇಕಾಗಿದೆ.',
          iconName: 'ShieldAlert'
        },
        {
          id: 'business-problems',
          number: '09',
          title: 'ವ್ಯಾಪಾರ ಸಮಸ್ಯೆಗಳು',
          subtitle: 'ವ್ಯಾಪಾರದಲ್ಲಿ ಕುಂಠಿತ, ಗ್ರಾಹಕರ ಕೊರತೆ ಮತ್ತು ಪಾಲುದಾರಿಕೆ ಸವಾಲುಗಳು',
          shortDescription: 'ಅಂಗಡಿ, ಫ್ಯಾಕ್ಟರಿ ಅಥವಾ ಕಚೇರಿಯಲ್ಲಿ ವ್ಯಾಪಾರ ಕ್ಷೀಣಿಸಿದಾಗ ವ್ಯಾಪಾರ ವೃದ್ಧಿ ಯಂತ್ರ, ವಾಸ್ತು ದೋಷ ಪರಿಹಾರ ಮತ್ತು ಶುಭ ಕಾಲದ ಆಯ್ಕೆ.',
          fullDescription: 'ವ್ಯಾಪಾರದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿದ ಹಣ ವಾಪಸ್ ಬಾರದಿರುವುದು, ಗ್ರಾಹಕರ ಸಂಖ್ಯೆ ಕಡಿಮೆಯಾಗುವುದು, ಪಾಲುದಾರರ ನಡುವೆ ಭಿನ್ನಾಭಿಪ್ರಾಯ ಅಥವಾ ಹೊಸ ಉದ್ಯಮದಲ್ಲಿ ನಷ್ಟ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಾ? ಜಾತಕದಲ್ಲಿನ ೭ನೇ ಮನೆ (ವ್ಯಾಪಾರ ಸ್ಥಾನ) ಮತ್ತು ಬುಧ ಗ್ರಹದ ಪ್ರಭಾವವನ್ನು ಪರಿಶೀಲಿಸಿ, ವ್ಯಾಪಾರ ವೃದ್ಧಿ ಯಂತ್ರ ಸ್ಥಾಪನೆ, ಗಣಪತಿ ಪೂಜೆ ಮತ್ತು ಶುಭ ಮುಹೂರ್ತಗಳ ಪಾಲನೆಯ ಬಗ್ಗೆ ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ ಅವರು ಸಮಗ್ರ ಜ್ಯೋತಿಷ್ಯ ಸಲಹೆ ನೀಡುತ್ತಾರೆ.',
          traditionalAspects: [
            'ವ್ಯಾಪಾರ ಸಂಸ್ಥೆಯ ದಿಕ್ಕು, ಪ್ರವೇಶ ದ್ವಾರ ಮತ್ತು ನಗದು ಪೆಟ್ಟಿಗೆಯ ವಾಸ್ತು ಪರಿಶೀಲನೆ',
            'ವ್ಯಾಪಾರ ವೃದ್ಧಿ ಮಹಾಯಂತ್ರ ಮತ್ತು ನಿತ್ಯ ಪೂಜಾ ವಿಧಿವಿಧಾನಗಳು',
            'ಪಾಲುದಾರರ ಜಾತಕ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ಒಮ್ಮತಕ್ಕೆ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗ',
            'ಹೊಸ ಪ್ರಾಜೆಕ್ಟ್ ಅಥವಾ ಒಪ್ಪಂದಗಳಿಗೆ ಅನುಕೂಲಕರ ಗ್ರಹಚಾರ ಸಮಯ ನಿರ್ಧಾರ'
          ],
          spiritualGuidance: 'ವ್ಯಾಪಾರ ಧರ್ಮದೊಂದಿಗೆ ದೈವಾನುಗ್ರಹ ಸೇರಿದಾಗ ವ್ಯಾಪಾರದಲ್ಲಿ ಸ್ಥಿರ ಪ್ರಗತಿ ಸಾಧ್ಯವಾಗುತ್ತದೆ.',
          whatsappMessage: 'ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನನ್ನ ವ್ಯಾಪಾರ ಮತ್ತು ವ್ಯವಹಾರದ ಸಮಸ್ಯೆಗಳ ಕುರಿತು ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ ಬೇಕಾಗಿದೆ.',
          iconName: 'Building2'
        },
        {
          id: 'financial-loss-guidance',
          number: '10',
          title: 'ಆರ್ಥಿಕ ನಷ್ಟದ ಕುರಿತು ಮಾರ್ಗದರ್ಶನ',
          subtitle: 'ಷೇರು ಮಾರುಕಟ್ಟೆ, ಹೂಡಿಕೆ ಅಥವಾ ವ್ಯವಹಾರದಲ್ಲಿ ಹಠಾತ್ ನಷ್ಟದ ವಿಶ್ಲೇಷಣೆ',
          shortDescription: 'ರಾಹು-ಕೇತುಗಳ ದೆಸೆ, ಅನಿರೀಕ್ಷಿತ ಧನಹಾನಿಯ ಗ್ರಹದೋಷಗಳ ಶಾಂತಿ ಮತ್ತು ಆರ್ಥಿಕ ಪುನಶ್ಚೇತನಕ್ಕೆ ಆಧ್ಯಾತ್ಮಿಕ ದಾರಿ.',
          fullDescription: 'ಜೀವನದಲ್ಲಿ ಕೆಲವೊಮ್ಮೆ ಊಹಿಸಲಾಗದ ಹಠಾತ್ ಆರ್ಥಿಕ ಆಘಾತಗಳು ಸಂಭವಿಸುತ್ತವೆ. ಹೂಡಿಕೆಗಳಲ್ಲಿ ಮೋಸ ಹೋಗುವುದು, ಅಪಾರ ನಷ್ಟವಾಗುವುದು ಅಥವಾ ಆಸ್ತಿಪಾಸ್ತಿಯ ನಷ್ಟವು ಜಾತಕದಲ್ಲಿ ರಾಹು ಅಥವಾ ಕೇತುವಿನ ಕೆಟ್ಟ ಪ್ರಭಾವದಿಂದಾಗಿರಬಹುದು. ಇಂತಹ ಸಂದರ್ಭದಲ್ಲಿ ಹತಾಶರಾಗದೆ, ಜಾತಕದ ಗ್ರಹದೋಷಗಳನ್ನು ಶಾಂತಗೊಳಿಸಿ, ಧನಾಗಮನದ ಹೊಸ ಬಾಗಿಲುಗಳನ್ನು ತೆರೆಯಲು ನವಗ್ರಹ ದೋಷ ಶಾಂತಿ ಮತ್ತು ವಿಶೇಷ ಹೋಮಗಳ ಮೂಲಕ ಪಂಡಿತರು ಮಾರ್ಗದರ್ಶನ ಮಾಡುತ್ತಾರೆ.',
          traditionalAspects: [
            'ಆಕಸ್ಮಿಕ ನಷ್ಟಕ್ಕೆ ಕಾರಣವಾದ ರಾಹು-ಕೇತು ಅಥವಾ ಶನಿ ದೆಸೆಗಳ ಕೂಲಂಕಷ ಪರಿಶೀಲನೆ',
            'ನವಗ್ರಹ ಶಾಂತಿ ಹೋಮ ಮತ್ತು ನವಧಾನ್ಯ ದಾನ ಸಂಪ್ರದಾಯಗಳು',
            'ಹಣಕಾಸಿನ ಹೂಡಿಕೆಗಳಿಗೆ ಸೂಕ್ತವಾದ ಜಾತಕಾನುಸಾರ ಶುಭ ಸಮಯದ ಮಾಹಿತಿ',
            'ಕಳೆದುಹೋದ ಧನ-ಸಂಪತ್ತು ಮರಳಿ ಪಡೆಯಲು ಆತ್ಮಸ್ಥೈರ್ಯ ವೃದ್ಧಿ'
          ],
          spiritualGuidance: 'ಕಾಲಚಕ್ರದಲ್ಲಿ ಏಳು-ಬೀಳುಗಳು ಸಹಜ; ಗ್ರಹಶಾಂತಿ ಮತ್ತು ಸತ್ಕರ್ಮಗಳು ಸಂಕಷ್ಟದ ತೀವ್ರತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ನೆರವಾಗುತ್ತವೆ.',
          whatsappMessage: 'ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನನಗೆ ಆರ್ಥಿಕ ನಷ್ಟದ ಕುರಿತು ಜ್ಯೋತಿಷ್ಯ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ ಬೇಕಾಗಿದೆ.',
          iconName: 'TrendingDown'
        },
        {
          id: 'domestic-discord-and-family-peace',
          number: '11',
          title: 'ಮನೆಯಲ್ಲಿ ಅಶಾಂತಿ ಮತ್ತು ಕುಟುಂಬದ ಸಮಸ್ಯೆಗಳು',
          subtitle: 'ಗೃಹ ಕಲಹ, ಅಶಾಂತಿ, ಮಕ್ಕಳ ತೊಂದರೆ ಮತ್ತು ವಾಸ್ತು ದೋಷ ಪರಿಹಾರ',
          shortDescription: 'ಕುಟುಂಬ ಸದಸ್ಯರಲ್ಲಿ ಸಾಮರಸ್ಯದ ಕೊರತೆ, ಮನೆಯಲ್ಲಿ ನಕಾರಾತ್ಮಕ ವಾತಾವರಣ ಮತ್ತು ನೆಮ್ಮದಿಯಿಲ್ಲದ ಬದುಕಿಗೆ ಶಾಂತಿ ಪೂಜೆಗಳು.',
          fullDescription: 'ಮನೆ ಎಂಬುದು ನೆಮ್ಮದಿಯ ತಾಣವಾಗಬೇಕು. ಆದರೆ ಕೆಲವೊಮ್ಮೆ ಗೃಹದಲ್ಲಿ ಪ್ರವೇಶಿಸಿದ ತಕ್ಷಣ ಕಿರಿಕಿರಿ, ಅನಗತ್ಯ ಜಗಳ, ದಂಪತಿಗಳ ನಡುವೆ ಸಾಮರಸ್ಯವಿಲ್ಲದಿರುವುದು ಅಥವಾ ಮಕ್ಕಳ ಆರೋಗ್ಯ-ವರ್ತನೆಗಳಲ್ಲಿ ತೊಂದರೆ ಕಾಣಿಸಿಕೊಳ್ಳಬಹುದು. ಇದು ವಾಸ್ತು ದೋಷ, ಪಿತೃ ದೋಷ ಅಥವಾ ಕುಲದೇವತಾ ಪ್ರಾರ್ಥನೆಯ ಲೋಪದಿಂದ ಉಂಟಾಗಬಹುದು. ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ, ವಾಸ್ತು ಶಾಂತಿ ಮತ್ತು ಪಿತೃ ತರ್ಪಣ ಮಾರ್ಗದರ್ಶನದ ಮೂಲಕ ಗೃಹದಲ್ಲಿ ಸುಖ-ಶಾಂತಿ ನೆಲೆಸಲು ಪರಿಹಾರ ಸೂಚಿಸಲಾಗುತ್ತದೆ.',
          traditionalAspects: [
            'ಗೃಹ ವಾಸ್ತು ಮತ್ತು ಈಶಾನ್ಯ-ನೈಋತ್ಯ ದಿಕ್ಕುಗಳ ಶಕ್ತಿ ಸಮತೋಲನ',
            'ಕುಟುಂಬದ ಕುಲದೇವರ ಆರಾಧನೆ ಮತ್ತು ಪಿತೃ ದೋಷ ನಿವಾರಣಾ ಸಲಹೆ',
            'ಶಾಂತಿಯುತ ಗೃಹ ವಾತಾವರಣಕ್ಕಾಗಿ ನವಗ್ರಹ ದೀಪಾರಾಧನೆ ಮತ್ತು ಹೋಮ',
            'ಕುಟುಂಬ ಸದಸ್ಯರ ಪರಸ್ಪರ ಪ್ರೀತಿ-ವಿಶ್ವಾಸ ವೃದ್ಧಿಗೆ ಆಧ್ಯಾತ್ಮಿಕ ದಾರಿ'
          ],
          spiritualGuidance: 'ಪವಿತ್ರ ಮಂತ್ರೋಚ್ಛಾರಣೆ ಮತ್ತು ಶಾಂತಿ ಪೂಜೆಗಳು ಮನೆಯ ನಕಾರಾತ್ಮಕತೆಯನ್ನು ಹೋಗಲಾಡಿಸಿ ಆನಂದ ತರುತ್ತವೆ.',
          whatsappMessage: 'ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನಮ್ಮ ಮನೆಯಲ್ಲಿ ಅಶಾಂತಿ ಮತ್ತು ಕುಟುಂಬದ ಸಮಸ್ಯೆಗಳ ಕುರಿತು ಜ್ಯೋತಿಷ್ಯ ಸಲಹೆ ಬೇಕಾಗಿದೆ.',
          iconName: 'Home'
        },
        {
          id: 'homa-and-yajna-guidance',
          number: '12',
          title: 'ಹೋಮ ಮತ್ತು ಯಜ್ಞಗಳ ಕುರಿತು ಮಾರ್ಗದರ್ಶನ',
          subtitle: 'ಗಣಪತಿ, ನವಗ್ರಹ, ಮೃತ್ಯುಂಜಯ, ಚಂಡಿಕಾ ಮತ್ತು ಸುದರ್ಶನ ಹೋಮಗಳು',
          shortDescription: 'ವೈದಿಕ ಮಂತ್ರಗಳಿಂದ ಪ್ರೇರಿತವಾದ ಪವಿತ್ರ ಯಜ್ಞ-ಯಾಗಾದಿಗಳ ಮಹತ್ವ, ಸಂಕಲ್ಪ ವಿಧಿ ಮತ್ತು ದೋಷ ಪರಿಹಾರದ ಶಾಸ್ತ್ರೋಕ್ತ ವಿವರಣೆ.',
          fullDescription: 'ಭಾರತೀಯ ಸನಾತನ ಸಂಸ್ಕೃತಿಯಲ್ಲಿ ಹೋಮ ಮತ್ತು ಯಜ್ಞಗಳಿಗೆ ಅಗ್ರಸ್ಥಾನವಿದೆ. ಅಗ್ನಿ ದೇವನ ಮುಖಾಂತರ ದೇವತೆಗಳಿಗೆ ಅರ್ಪಿಸುವ ಹವಿಸ್ಸು ಸಮಸ್ತ ದೋಷಗಳನ್ನು ಭಸ್ಮ ಮಾಡಿ ಸಕಲ ಮಂಗಳವನ್ನುಂಟು ಮಾಡುತ್ತದೆ ಎಂಬುದು ದೃಢ ನಂಬಿಕೆ. ಗಣಪತಿ ಹೋಮ, ನವಗ್ರಹ ಹೋಮ, ಮಹಾಮೃತ್ಯುಂಜಯ ಹವನ, ಆಯುಷ್ಯ ಹೋಮ ಹಾಗೂ ಚಂಡಿಕಾ ಯಾಗಗಳ ಶಾಸ್ತ್ರೋಕ್ತ ವಿಧಾನ, ಪೂಜಾ ಸಾಮಗ್ರಿಗಳು ಮತ್ತು ಸಂಕಲ್ಪದ ಬಗ್ಗೆ ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ ಅವರು ಭಕ್ತರಿಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ.',
          traditionalAspects: [
            'ಕಾರ್ಯಸಿದ್ಧಿಗಾಗಿ ಶಾಸ್ತ್ರೋಕ್ತ ಮಹಾಗಣಪತಿ ಹೋಮದ ಮಾರ್ಗದರ್ಶನ',
            'ಆರೋಗ್ಯ ಮತ್ತು ದೀರ್ಘಾಯುಷ್ಯಕ್ಕಾಗಿ ಮಹಾಮೃತ್ಯುಂಜಯ ಹವನ ವಿಧಿ',
            'ಗ್ರಹದೋಷ ನಿವಾರಣೆ ಮತ್ತು ಶುಭಫಲಕ್ಕಾಗಿ ನವಗ್ರಹ ಶಾಂತಿ ಯಜ್ಞ',
            'ಸಂಕಲ್ಪ, ಮಂತ್ರ ಸಂಸ್ಕಾರ ಮತ್ತು ಪವಿತ್ರ ಹವಿಸ್ಸು ಅರ್ಪಣೆಯ ನಿಯಮಗಳು'
          ],
          spiritualGuidance: 'ಅಗ್ನಿ ಸಾಕ್ಷಿಯಾಗಿ ನಡೆಸುವ ಪವಿತ್ರ ಹೋಮಗಳು ವ್ಯಕ್ತಿಯ ಮನಸ್ಸು, ಶರೀರ ಮತ್ತು ಪರಿಸರವನ್ನು ಶುದ್ಧೀಕರಿಸುತ್ತವೆ.',
          whatsappMessage: 'ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನನಗೆ ಹೋಮ ಮತ್ತು ಯಜ್ಞಗಳ ಶಾಸ್ತ್ರೋಕ್ತ ಮಾರ್ಗದರ್ಶನದ ಕುರಿತು ಮಾಹಿತಿ ಬೇಕಾಗಿದೆ.',
          iconName: 'Flame'
        }
      ]
    },
    howItWorks: {
      tagline: 'ಸರಳ ಸಮಾಲೋಚನಾ ವಿಧಾನ',
      heading: 'ಜ್ಯೋತಿಷ್ಯ ಸಮಾಲೋಚನೆ ಪಡೆಯುವುದು ಹೇಗೆ?',
      subheading: 'ಮೂರು ಸುಲಭ ಹಂತಗಳಲ್ಲಿ ಪಂಡಿತರಿಂದ ಆಪ್ತ ಮತ್ತು ಗೌಪ್ಯ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.',
      step1Title: 'ನಿಮ್ಮ ಸಮಸ್ಯೆಯ ಕುರಿತು ಸಂಪರ್ಕಿಸಿ',
      step1Desc: 'WhatsApp ಅಥವಾ ಫೋನ್ ಕರೆ ಮೂಲಕ ನೇರವಾಗಿ ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ ಅವರನ್ನು ಸಂಪರ್ಕಿಸಿ ನಿಮ್ಮ ಪ್ರಾಥಮಿಕ ಮಾಹಿತಿಯನ್ನು ತಿಳಿಸಿ.',
      step2Title: 'ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳನ್ನು ಹಂಚಿಕೊಂಡು ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ',
      step2Desc: 'ನಿಮ್ಮ ಜನ್ಮ ದಿನಾಂಕ, ಸಮಯ, ಜಾತಕ ವಿವರಗಳು ಹಾಗೂ ಎದುರಿಸುತ್ತಿರುವ ವೈಯಕ್ತಿಕ ಅಥವಾ ಕುಟುಂಬದ ಸಮಸ್ಯೆಗಳನ್ನು ಹಂಚಿಕೊಂಡು ಶಾಸ್ತ್ರೋಕ್ತ ಸಲಹೆ ಪಡೆಯಿರಿ.',
      step3Title: 'ಅಗತ್ಯವಿದ್ದರೆ ಸೂಕ್ತ ಆಧ್ಯಾತ್ಮಿಕ ಆಚರಣೆಗಳ ಕುರಿತು ವಿಚಾರಿಸಿ',
      step3Desc: 'ನಿಮ್ಮ ಗ್ರಹಗತಿಗೆ ಅನುಗುಣವಾಗಿ ನವಗ್ರಹ ಶಾಂತಿ, ಹೋಮ-ಹವನ, ಜಪ-ತಪ ಅಥವಾ ಸರಳ ಪ್ರಾರ್ಥನಾ ವಿಧಿಗಳ ಕುರಿತು ಮಾರ್ಗದರ್ಶನ ಪಡೆದುಕೊಳ್ಳಿ.',
      ctaButton: 'ಈಗಲೇ WhatsApp ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ',
    },
    whyChooseUs: {
      tagline: 'ವಿಶ್ವಾಸಾರ್ಹತೆ',
      heading: 'ನಮ್ಮನ್ನು ಏಕೆ ಸಂಪರ್ಕಿಸಬೇಕು?',
      subheading: 'ಸಾಂಪ್ರದಾಯಿಕ ವೈದಿಕ ನಿಯಮಗಳು ಹಾಗೂ ಭಕ್ತರ ಹಿತದೃಷ್ಟಿಯೇ ನಮ್ಮ ಪ್ರಮುಖ ಆದ್ಯತೆ.',
      card1Title: 'ವೈಯಕ್ತಿಕ ಸಮಸ್ಯೆಗಳನ್ನು ಆಲಿಸುವುದು',
      card1Desc: 'ಪ್ರತಿಯೊಬ್ಬ ವ್ಯಕ್ತಿಯ ಕಷ್ಟ-ಸವಾಲುಗಳನ್ನು ತಾಳ್ಮೆ, ಗೌರವ ಹಾಗೂ ಸಂಪೂರ್ಣ ಗೌಪ್ಯತೆಯಿಂದ ಆಲಿಸಿ, ಮನಸ್ಸಿನ ಆತಂಕಗಳನ್ನು ನಿವಾರಿಸಲು ನೆರವಾಗುತ್ತೇವೆ.',
      card2Title: 'ಕನ್ನಡದಲ್ಲಿ ಆಪ್ತ ಸಂವಹನ',
      card2Desc: 'ನಮ್ಮ ಮಾತೃಭಾಷೆಯಾದ ಕನ್ನಡದಲ್ಲಿಯೇ ಸರಳವಾಗಿ, ಯಾವುದೇ ಆಡಂಬರವಿಲ್ಲದೆ ಜಾತಕದ ಫಲ ಹಾಗೂ ದೋಷ ನಿವಾರಣೆಯ ವಿವರಗಳನ್ನು ಅರ್ಥವಾಗುವಂತೆ ತಿಳಿಸಲಾಗುತ್ತದೆ.',
      card3Title: 'ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ',
      card3Desc: 'ಪ್ರಾಚೀನ ವೈದಿಕ ಶಾಸ್ತ್ರಗಳು, ಸಂಪ್ರದಾಯಬದ್ಧ ನವಗ್ರಹ ಪೂಜೆಗಳು ಮತ್ತು ಜೀವನಕ್ಕೆ ಧೈರ್ಯ ನೀಡುವ ಸಕಾರಾತ್ಮಕ ಆಧ್ಯಾತ್ಮಿಕ ದಾರಿಗಳನ್ನು ತೋರಿಸಲಾಗುತ್ತದೆ.',
      card4Title: 'ಸಂಪರ್ಕಿಸಲು ಸುಲಭವಾದ WhatsApp ಸೌಲಭ್ಯ',
      card4Desc: 'ಯಾವುದೇ ಅಡೆತಡೆಗಳಿಲ್ಲದೆ ನಿಮ್ಮ ಅನುಕೂಲಕರ ಸಮಯದಲ್ಲಿ WhatsApp ಮೂಲಕ ಸಂದೇಶ ಕಳುಹಿಸಿ ನೇರ ಸಂಪರ್ಕ ಸಾಧಿಸಲು ಅವಕಾಶ ಕಲ್ಪಿಸಲಾಗಿದೆ.',
      badge: 'ಶಾಸ್ತ್ರೋಕ್ತ ವಿಶ್ವಾಸಾರ್ಹತೆ',
    },
    rituals: {
      tagline: 'ವೈದಿಕ ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳು',
      heading: 'ಹೋಮ ಮತ್ತು ಯಜ್ಞ ಪದ್ಧತಿಗಳ ಮಾರ್ಗದರ್ಶನ',
      subheading: 'ಅಗ್ನಿ ದೇವನ ಮುಖಾಂತರ ದೇವತೆಗಳಿಗೆ ಹವಿಸ್ಸು ಅರ್ಪಿಸಿ ಗ್ರಹದೋಷಗಳನ್ನು ಶಮನಗೊಳಿಸುವ ಪ್ರಾಚೀನ ಭಾರತೀಯ ಪರಂಪರೆ.',
      altarTitle: 'ಶಾಸ್ತ್ರೋಕ್ತ ಯಾಗ ಸಂಕಲ್ಪ',
      altarDesc: 'ಯಾವುದೇ ಪೂಜೆ ಅಥವಾ ಹೋಮ ನಡೆಸುವ ಮುನ್ನ ಶುಭ ಮುಹೂರ್ತ, ಸಂಕಲ್ಪ ವಿಧಿ ಹಾಗೂ ಯಜ್ಞ ಸಾಮಗ್ರಿಗಳ ಶುದ್ಧತೆಯ ಕುರಿತು ಪಂಡಿತರಿಂದ ಸಮಾಲೋಚನೆ ಪಡೆಯಿರಿ.',
      items: [
        { name: 'ಮಹಾಗಣಪತಿ ಹೋಮ', purpose: 'ಯಾವುದೇ ಹೊಸ ಕಾರ್ಯ, ಗೃಹಪ್ರವೇಶ ಅಥವಾ ಉದ್ಯಮದ ಆರಂಭದಲ್ಲಿ ವಿಘ್ನಗಳು ನಿವಾರಣೆಯಾಗಿ ಸರ್ವ ಸಿದ್ಧಿ ಲಭಿಸಲು.' },
        { name: 'ನವಗ್ರಹ ಶಾಂತಿ ಯಜ್ಞ', purpose: 'ಜಾತಕದಲ್ಲಿನ ಗ್ರಹಗಳ ಅಶುಭ ಪ್ರಭಾವವನ್ನು ಶಮನಗೊಳಿಸಿ, ಆಯುಷ್ಯ, ಆರೋಗ್ಯ ಹಾಗೂ ಧನ ವೃದ್ಧಿಗಾಗಿ.' },
        { name: 'ಮಹಾಮೃತ್ಯುಂಜಯ ಹವನ', purpose: 'ದೀರ್ಘಕಾಲದ ಅನಾರೋಗ್ಯ, ಆಕಸ್ಮಿಕ ಭಯ ಮತ್ತು ಜೀವಭಯ ನಿವಾರಣೆಗಾಗಿ ಸಾಂಪ್ರದಾಯಿಕ ರುದ್ರ ಪ್ರಾರ್ಥನೆ.' },
        { name: 'ಸುದರ್ಶನ ಹೋಮ', purpose: 'ದೃಷ್ಟಿದೋಷ, ಶತ್ರು ಕಾಟ ಮತ್ತು ಗೃಹದಲ್ಲಿನ ನಕಾರಾತ್ಮಕ ಶಕ್ತಿಗಳ ಭಸ್ಮಕ್ಕಾಗಿ ದೈವಿಕ ಸುದರ್ಶನ ಚಕ್ರ ಆರಾಧನೆ.' },
      ],
      ctaButton: 'ಹೋಮಗಳ ಬಗ್ಗೆ WhatsApp ನಲ್ಲಿ ವಿಚಾರಿಸಿ',
    },
    faq: {
      tagline: 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೋತ್ತರಗಳು',
      heading: 'ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನದ ಬಗ್ಗೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳು',
      subheading: 'ಸಮಾಲೋಚನೆ ಮತ್ತು ಸಂಪರ್ಕಿಸುವ ಕುರಿತಾದ ಸಾಮಾನ್ಯ ಸಂದೇಹಗಳಿಗೆ ಸ್ಪಷ್ಟ ವಿವರಣೆ.',
      moreQuestions: 'ಇನ್ನಷ್ಟು ಪ್ರಶ್ನೆಗಳಿವೆಯೇ?',
      moreQuestionsDesc: 'ನಿಮ್ಮ ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಪ್ರಶ್ನೆಗಳಿಗೂ WhatsApp ಮೂಲಕ ನೇರವಾಗಿ ಪಂಡಿತರನ್ನು ಸಂಪರ್ಕಿಸಿ ಉತ್ತರ ಪಡೆಯಿರಿ.',
      askButton: 'WhatsApp ನಲ್ಲಿ ಪ್ರಶ್ನೆ ಕೇಳಿ',
      items: [
        {
          id: 'faq-1',
          question: 'ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಲು ಹೇಗೆ ಸಂಪರ್ಕಿಸಬೇಕು?',
          answer: 'ನೀವು ನೇರವಾಗಿ 8151816172 ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡುವ ಮೂಲಕ ಅಥವಾ WhatsApp ಮೂಲಕ ಸಂದೇಶ ಕಳುಹಿಸಿ ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ ಅವರನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು. ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿರುವ "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿದರೆ ನೇರವಾಗಿ WhatsApp ಚಾಟ್ ಆರಂಭವಾಗುತ್ತದೆ.'
        },
        {
          id: 'faq-2',
          question: 'WhatsApp ಮೂಲಕ ನನ್ನ ಸಮಸ್ಯೆಯನ್ನು ತಿಳಿಸಬಹುದೇ?',
          answer: 'ಖಂಡಿತವಾಗಿ ತಿಳಿಸಬಹುದು. ನಿಮ್ಮ ಹೆಸರು, ಜನ್ಮ ದಿನಾಂಕ, ಹುಟ್ಟಿದ ಸಮಯ, ಹುಟ್ಟಿದ ಸ್ಥಳ ಮತ್ತು ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಅಥವಾ ಸಮಸ್ಯೆಯ ಸಾರಾಂಶವನ್ನು WhatsApp (8151816172) ಮೂಲಕ ಸಂದೇಶ ಕಳುಹಿಸಬಹುದು. ಪಂಡಿತರು ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಸೂಕ್ತ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ.'
        },
        {
          id: 'faq-3',
          question: 'ಯಾವ ರೀತಿಯ ಸಮಸ್ಯೆಗಳ ಕುರಿತು ವಿಚಾರಿಸಬಹುದು?',
          answer: 'ವೈಯಕ್ತಿಕ ಜೀವನ, ದಾಂಪತ್ಯ ಮತ್ತು ಪ್ರೇಮ ಸಂಬಂಧಗಳು, ಉದ್ಯೋಗ ಮತ್ತು ವೃತ್ತಿ ಬೆಳವಣಿಗೆ, ಆರ್ಥಿಕ ಮತ್ತು ಸಾಲಬಾಧೆ, ವ್ಯಾಪಾರ-ವ್ಯವಹಾರ, ಮಕ್ಕಳ ವಿದ್ಯಾಭ್ಯಾಸ, ಗೃಹ ಅಶಾಂತಿ, ಶತ್ರು ಕಾಟ ಹಾಗೂ ಜಾತಕ ದೋಷ ನಿವಾರಣೆ ಮುಂತಾದ ಯಾವುದೇ ಗೊಂದಲಗಳ ಕುರಿತು ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಯೋತಿಷ್ಯ ಸಲಹೆ ಪಡೆಯಬಹುದು.'
        },
        {
          id: 'faq-4',
          question: 'ಹೋಮ ಮತ್ತು ಯಜ್ಞಗಳ ಕುರಿತು ಮಾಹಿತಿ ಪಡೆಯಬಹುದೇ?',
          answer: 'ಹೌದು. ಗಣಪತಿ ಹೋಮ, ನವಗ್ರಹ ಶಾಂತಿ, ಮಹಾಮೃತ್ಯುಂಜಯ ಹವನ, ಸುದರ್ಶನ ಹೋಮ, ಚಂಡಿಕಾ ಯಾಗ ಮುಂತಾದ ವೈದಿಕ ಪೂಜಾ ಕೈಂಕರ್ಯಗಳ ಮಹತ್ವ, ಆಚರಣಾ ವಿಧಾನ ಮತ್ತು ಸಂಕಲ್ಪದ ಕುರಿತು ಸಂಪೂರ್ಣ ಮಾಹಿತಿ ಹಾಗೂ ಮಾರ್ಗದರ್ಶನವನ್ನು ನೀಡಲಾಗುತ್ತದೆ.'
        },
        {
          id: 'faq-5',
          question: 'ಸಮಾಲೋಚನೆಗೆ ಮುಂಚಿತವಾಗಿ ಸಮಯ ನಿಗದಿಪಡಿಸಬೇಕೇ?',
          answer: 'ಹೌದು, ಪಂಡಿತರು ಪೂಜೆ ಅಥವಾ ಇತರ ಸಮಾಲೋಚನೆಗಳಲ್ಲಿ ನಿರತರಾಗಿರಬಹುದಾದ ಕಾರಣ, ಮುಂಚಿತವಾಗಿ WhatsApp ಅಥವಾ ಫೋನ್ ಕರೆ ಮೂಲಕ ಮಾತನಾಡಿ ಪರಸ್ಪರ ಅನುಕೂಲಕರವಾದ ಸಮಯವನ್ನು ನಿಗದಿಪಡಿಸಿಕೊಳ್ಳುವುದು ಸೂಕ್ತ.'
        },
        {
          id: 'faq-6',
          question: 'ಸಮಾಲೋಚನೆ ಶುಲ್ಕದ ಬಗ್ಗೆ ಹೇಗೆ ತಿಳಿದುಕೊಳ್ಳಬಹುದು?',
          answer: 'ಪ್ರತಿಯೊಬ್ಬರ ಸಮಸ್ಯೆ ಮತ್ತು ಜಾತಕ ಪರಿಶೀಲನೆಯ ಸ್ವರೂಪ ಭಿನ್ನವಾಗಿರುವುದರಿಂದ, ಸಮಾಲೋಚನೆ ಮತ್ತು ಪೂಜಾ ವಿವರಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಮಾಹಿತಿಗಾಗಿ ನೇರವಾಗಿ WhatsApp (8151816172) ಮೂಲಕ ಅಥವಾ ಫೋನ್ ಕರೆ ಮಾಡಿ ಸ್ಪಷ್ಟವಾಗಿ ವಿಚಾರಿಸಿಕೊಳ್ಳಬಹುದು.'
        }
      ]
    },
    contact: {
      tagline: 'ಸಂಪರ್ಕಿಸಿ',
      heading: 'ಪಂಡಿತರನ್ನು ಸಂಪರ್ಕಿಸಲು ವಿವರಗಳು',
      subheading: 'ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ ಅಥವಾ WhatsApp ಮೂಲಕ ಸಂದೇಶ ಕಳುಹಿಸಿ ಸಮಾಲೋಚನೆ ಪಡೆಯಿರಿ.',
      boxPhoneTitle: 'ಸಂಪರ್ಕ ದೂರವಾಣಿ (Phone & WhatsApp)',
      boxPhoneDesc: 'WhatsApp ಸಮಾಲೋಚನೆಗೆ ಲಭ್ಯವಿದೆ',
      whatsappButton: 'WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ',
      callButton: 'ನೇರ ಕರೆ ಮಾಡಿ',
      formTitle: 'ಸಂದೇಶ ಅಥವಾ ಜಾತಕ ವಿವರಗಳನ್ನು ಕಳುಹಿಸಿ',
      formSubtitle: 'ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ ನೇರವಾಗಿ WhatsApp ಮೂಲಕ ಪಂಡಿತರ ಮೊಬೈಲ್‌ಗೆ ತಲುಪಿಸಿ.',
      labelName: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು *',
      placeholderName: 'ಉದಾಹರಣೆ: ರಮೇಶ್ ಕುಮಾರ್',
      labelPhone: 'ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ *',
      placeholderPhone: 'ಉದಾಹರಣೆ: 98XXXXXXXX',
      labelMessage: 'ನಿಮ್ಮ ಸಮಸ್ಯೆ / ಪ್ರಶ್ನೆ ಅಥವಾ ಜಾತಕ ವಿವರಗಳು *',
      placeholderMessage: 'ನಿಮ್ಮ ಸಮಸ್ಯೆ, ಹುಟ್ಟಿದ ದಿನಾಂಕ ಅಥವಾ ಸಮಯದ ವಿವರಗಳನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ...',
      submitButton: 'WhatsApp ಮೂಲಕ ವಿವರ ಕಳುಹಿಸಿ',
      privacyNote: 'ನಿಮ್ಮ ಗೌಪ್ಯತೆ ಮುಖ್ಯ. ವಿವರಗಳನ್ನು ನೇರವಾಗಿ ಪಂಡಿತರೊಂದಿಗೆ ಮಾತ್ರ ಹಂಚಿಕೊಳ್ಳಲಾಗುತ್ತದೆ.',
      errName: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.',
      errPhone: 'ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.',
      errMessage: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸಂದೇಶ ಅಥವಾ ಪ್ರಶ್ನೆಯನ್ನು ಬರೆಯಿರಿ.',
      successMessage: 'ವಿವರಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ. WhatsApp ವಿಂಡೋ ತೆರೆಯಲಾಗುತ್ತಿದೆ...',
    },
    footer: {
      desc: 'ಕೇರಳ ಮತ್ತು ದಕ್ಷಿಣ ಕಾಶಿಯ ಪ್ರಾಚೀನ ಆಧ್ಯಾತ್ಮಿಕ ಸಂಪ್ರದಾಯಗಳು, ತಲೆಮಾರುಗಳಿಂದ ಬಂದ ಜ್ಞಾನ, ಹೋಮ ಮತ್ತು ಯಜ್ಞಗಳಂತಹ ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳ ಕುರಿತು ಮಾರ್ಗದರ್ಶನ.',
      quickLinks: 'ಮುಖ್ಯ ಪುಟಗಳು',
      servicesTitle: 'ಜ್ಯೋತಿಷ್ಯ ಸೇವೆಗಳು',
      otherServices: 'ಇನ್ನಿತರ ಮಾರ್ಗದರ್ಶನಗಳು',
      disclaimerTitle: 'ಧಾರ್ಮಿಕ ಪ್ರಕಟಣೆ ಮತ್ತು ಹಕ್ಕುತ್ಯಾಗ (Disclaimer):',
      disclaimerText: 'ಈ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ನೀಡಲಾದ ಜ್ಯೋತಿಷ್ಯ, ಜಾತಕ, ವಾಸ್ತು ಹಾಗೂ ಹೋಮ-ಹವನಗಳ ವಿವರಗಳು ಪ್ರಾಚೀನ ವೈದಿಕ ಸಂಪ್ರದಾಯಗಳು ಮತ್ತು ಧಾರ್ಮಿಕ ನಂಬಿಕೆಗಳನ್ನು ಆಧರಿಸಿವೆ. ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನವು ಸಕಾರಾತ್ಮಕ ಚಿಂತನೆ ಹಾಗೂ ಆತ್ಮವಿಶ್ವಾಸವನ್ನು ಹೆಚ್ಚಿಸುವ ಉದ್ದೇಶವನ್ನು ಹೊಂದಿದ್ದು, ಯಾವುದೇ ಫಲಿತಾಂಶವನ್ನು ವೈಜ್ಞಾನಿಕವಾಗಿ ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ.',
      copyright: 'ಆಸ್ಟ್ರೋ ಕನ್ನಡ. ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
      privacyPolicy: 'ಗೌಪ್ಯತಾ ನೀತಿ (Privacy Policy)',
      termsConditions: 'ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು (Terms)',
      backToTop: 'ಮೇಲಕ್ಕೆ',
    },
    popup: {
      heading: 'ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ ಬೇಕೇ?',
      subtext: 'ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳನ್ನು WhatsApp ಮೂಲಕ ಹಂಚಿಕೊಳ್ಳಿ.',
      button: 'WhatsApp ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ',
      closeLabel: 'ಪಾಪ್-ಅಪ್ ಮುಚ್ಚಿ',
    },
    floating: {
      label: 'WhatsApp ಚಾಟ್',
    },
  },

  en: {
    topBar: {
      announcement: 'Traditional Vedic Astrology & Spiritual Guidance',
      callNow: 'Call Now',
      translateLabel: 'Language',
    },
    brand: {
      name: 'Astro Kannada',
      astrologer: 'Pandit Sachin Sharma',
      astrologerTitle: 'Vedic Astrologer & Spiritual Counselor',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      rituals: 'Pooja & Homas',
      faq: 'FAQ',
      blog: 'Articles',
      contact: 'Contact',
      whatsappCta: 'WhatsApp Consult',
    },
    hero: {
      badge: 'Traditional Vedic Astrology & Divine Wisdom',
      title: 'Spiritual Guidance for Your',
      titleHighlight: 'Life Challenges',
      description: 'Receive confidential, compassionate guidance on personal dilemmas, love & marriage harmony, career advancement, financial stability, education, and family peace under ancient Vedic wisdom.',
      whatsappPrimary: 'Connect on WhatsApp',
      servicesSecondary: 'Explore Services',
      callDirect: 'Call Directly',
      confidential: 'Confidential Consultation',
      directComm: 'Direct Personal Care',
      vedicMethod: 'Authentic Vedic Methods',
      altarTitle: 'Speak with the Astrologer',
      altarDesc: 'Get scriptural astrological remedies and auspicious muhurtha guidance for your horoscope.',
      quickContact: 'Direct Helpline',
      activeStatus: 'Active on WhatsApp',
      sendMessage: 'Send Message',
    },
    about: {
      tagline: 'Tradition & Lineage',
      heading: 'Sacred Wisdom Rooted in Ancient Vedic Traditions',
      quote: 'Ancient spiritual traditions of Kerala and Dakshina Kashi, generational wisdom, and guidance on sacred religious practices including Homas and Yajnas.',
      desc1: 'Astrology is not merely about predicting the future; it is a divine lantern illuminating the path during life’s trials and tribulations. Pandit Sachin Sharma listens with empathy and draws upon Kerala Tantrik traditions and Dakshina Kashi Vedic heritage.',
      desc2: 'Through careful horoscope study, planetary remedy guidance, Vastu harmonization, and traditional sacred homas, he assists seekers in restoring positive energy and peace into their lives.',
      pillar1Title: 'Scriptural Horoscope Study',
      pillar1Desc: 'Accurate analysis of birth charts (Kundali), planetary placements, and dasha cycles.',
      pillar2Title: 'Homa & Yajna Guidance',
      pillar2Desc: 'Traditional Vedic fire rituals for peace, harmony, and obstacle clearance.',
      pillar3Title: 'Strictly Confidential',
      pillar3Desc: 'Your personal concerns and birth details are preserved with complete privacy and dignity.',
      pillar4Title: 'Practical Remedies',
      pillar4Desc: 'Daily stotras, mantras, and ethical prayers that foster courage and clarity.',
      whatsappChat: 'Discuss with Pandit Ji on WhatsApp',
      chartTitle: 'Vedic Horoscope Chart & Navagraha Study',
      chartSubtitle: 'Seat of Guidance — Pandit Sachin Sharma',
    },
    servicesSection: {
      tagline: 'Our Astrological Services',
      heading: 'Traditional Remedies for Key Life Challenges',
      subheading: 'Scriptural guidance and authentic remedies for your horoscope under the care of Pandit Sachin Sharma.',
      moreInfo: 'More Details',
      whatsappAsk: 'Inquire on WhatsApp',
      disclaimer: 'Note: Astrological and spiritual practices reflect traditional beliefs and scriptural heritage, aimed at fostering spiritual strength and positive orientation.',
      modalService: 'Service',
      modalClose: 'Close',
      traditionalAspectsTitle: 'Traditional Aspects & Ritual Guidance:',
      modalWhatsappCta: 'Ask via WhatsApp',
      modalCallCta: 'Call Astrologer',
      items: [
        {
          id: 'lakshmi-vashikarana',
          number: '01',
          title: 'Lakshmi Vashikarana',
          subtitle: 'Blessings of Goddess Mahalakshmi & Household Prosperity',
          shortDescription: 'Traditional Lakshmi pooja rituals, wealth stotras, and spiritual guidance to invite auspicious energy into home and business.',
          fullDescription: 'In traditional Vedic practice, Lakshmi Vashikarana refers to sacred spiritual practices invoking the grace of Goddess Mahalakshmi. When financial blockages or instability arise, scriptural Lakshmi Yantra worship and Sri Sukta recitations help attract positive abundance.',
          traditionalAspects: [
            'Sri Sukta recitation and Kumkumarchana guidance',
            'Vastu alignment for inviting positive wealth energy',
            'Controlling unnecessary expenses through mindful spiritual focus',
            'Special observances during Dhana Trayodashi and Purnima'
          ],
          spiritualGuidance: 'Spiritual observances are based on faith and devotion to foster positive cosmic vibrations.',
          whatsappMessage: 'Namaste Pandit Ji, I would like guidance on Lakshmi Vashikarana and wealth prosperity pooja.',
          iconName: 'Coins'
        },
        {
          id: 'jana-vashikarana',
          number: '02',
          title: 'Jana Vashikarana',
          subtitle: 'Social Respect, Goodwill, and Harmonious Bonds',
          shortDescription: 'Vedic guidance for earning goodwill, respect, and mutual affection in social, professional, and familial environments.',
          fullDescription: 'Jana Vashikarana is an ancient tradition aimed at radiating warmth, positivity, and gentle charisma. When misunderstandings or cold relations arise among peers or family, scriptural guidance helps develop calm presence and mutual respect.',
          traditionalAspects: [
            'Mantra guidance for serene speech and magnetic benevolence',
            'Shanti poojas to dispel unwarranted slander and social friction',
            'Surya worship for dignity and noble status in community',
            'Cultivating patience and compassionate demeanor'
          ],
          spiritualGuidance: 'This practice never overrides human free will; it nurtures an aura of goodwill and positive attraction in the individual.',
          whatsappMessage: 'Namaste Pandit Ji, I would like information regarding Jana Vashikarana and harmonious relationships.',
          iconName: 'Users'
        },
        {
          id: 'dhana-vashikarana',
          number: '03',
          title: 'Dhana Vashikarana',
          subtitle: 'Clearing Obstacles to Wealth and Financial Growth',
          shortDescription: 'Planetary remedy guidance for overcoming cash flow stagnation, Kubera yantra worship, and financial stabilization.',
          fullDescription: 'When diligent effort fails to yield fair returns or earnings vanish unexpectedly, planetary afflictions on the 2nd and 11th houses may be present. Kubera Yantra worship and ancient Dakshina Kashi rituals provide spiritual pathways toward stability.',
          traditionalAspects: [
            'Kubera Yantra consecration and cash-box Vastu guidance',
            'Analysis of 2nd (wealth) and 11th (gains) houses in the birth chart',
            'Planetary pacification for recurring financial drain',
            'Mental focus and discipline for optimal resource management'
          ],
          spiritualGuidance: 'Tradition affirms that earnest effort coupled with divine faith fosters genuine economic resilience.',
          whatsappMessage: 'Namaste Pandit Ji, I would like to consult on Dhana Vashikarana and financial stability.',
          iconName: 'Gem'
        },
        {
          id: 'love-relationship-issues',
          number: '04',
          title: 'Love & Relationship Challenges',
          subtitle: 'Marital Harmony, Mutual Trust, and Family Understanding',
          shortDescription: 'Astrological analysis for misunderstandings, compatibility hurdles, Manglik dosha, and restoring affection.',
          fullDescription: 'Relationships encounter turbulence when Venus, Mars, or Rahu-Ketu transit delicate positions. Pandit Ji analyzes Ashtakoota compatibility and prescribes Uma-Maheshwara and Radha-Krishna prayers to revive mutual trust and warmth.',
          traditionalAspects: [
            'Kundali compatibility and Ashtakoota Milan re-evaluation',
            'Remedies for Kuja (Mars) Dosha and afflicted Venus',
            'Gauri pooja and prayers for marital serenity',
            'Cultivating mutual patience and elder blessings'
          ],
          spiritualGuidance: 'Compassion, open dialogue, and sacred prayers together nurture enduring love and peace.',
          whatsappMessage: 'Namaste Pandit Ji, I need astrological guidance regarding my love or marital relationship.',
          iconName: 'HeartHandshake'
        },
        {
          id: 'education-and-studies',
          number: '05',
          title: 'Education & Academics',
          subtitle: 'Student Concentration, Memory, and Academic Path',
          shortDescription: 'Overcoming exam anxiety, strengthening Mercury and Jupiter, and Saraswati-Hayagriva worship for children.',
          fullDescription: 'Education forms the bedrock of life. Students facing memory lapses, restlessness, or examination panic receive astrological remedies strengthening Mercury (intellect) and Jupiter (wisdom), paired with Medha Dakshinamurthy stotras.',
          traditionalAspects: [
            'Empowering Mercury and Jupiter in the student’s birth chart',
            'Hayagriva and Saraswati worship for enhanced concentration',
            'Horoscope evaluation for higher education and foreign studies',
            'Instilling calm self-confidence prior to examinations'
          ],
          spiritualGuidance: 'Disciplined study reinforced with sincere prayer bestows academic distinction.',
          whatsappMessage: 'Namaste Pandit Ji, I need astrological guidance for my child’s studies and education.',
          iconName: 'GraduationCap'
        },
        {
          id: 'job-and-career-guidance',
          number: '06',
          title: 'Job & Career Guidance',
          subtitle: 'Career Progression, Promotions, Transfers, and Stability',
          shortDescription: 'Aligning with Saturn and Sun for professional stability, clearing promotional obstacles, and career roadmap.',
          fullDescription: 'If hard work goes unacknowledged, promotions stall, or toxic workplace politics cause despair, study of the 10th house (Karma Bhava) and Saturn’s transit reveals propitious timing and remedial measures.',
          traditionalAspects: [
            'In-depth study of the 10th house and Dasha-Bhukti periods',
            'Spiritual and mental readiness for critical interviews',
            'Yogas for civil service or multinational enterprise careers',
            'Pacifying workplace envy and professional friction'
          ],
          spiritualGuidance: 'Right timing, pragmatic effort, and divine blessings pave the road to professional success.',
          whatsappMessage: 'Namaste Pandit Ji, I require astrological guidance regarding my job and career prospects.',
          iconName: 'Briefcase'
        },
        {
          id: 'financial-problems',
          number: '07',
          title: 'Financial & Debt Relief',
          subtitle: 'Remedies for Debt Burden and Chronic Financial Distress',
          shortDescription: 'Traditional prayers to emerge from cyclic debts, Rina Vimochana Angaraka pooja, and financial restoration.',
          fullDescription: 'Debt pressure deprives one of sleep and domestic peace. Afflictions on the 6th (debts) and 12th (expenses) houses are analyzed to guide seekers through Rina Vimochana Stotra recitations and Lord Narasimha prayers.',
          traditionalAspects: [
            'Pacifying planetary afflictions in the 6th and 12th houses',
            'Rina Vimochana Angaraka and Subramanya homa guidance',
            'Basic household Vastu checks for wealth flow',
            'Building moral resilience to execute debt repayment plans'
          ],
          spiritualGuidance: 'Remedial prayers provide inner fortitude, opening constructive avenues toward a debt-free life.',
          whatsappMessage: 'Namaste Pandit Ji, I seek astrological guidance for debt relief and financial difficulties.',
          iconName: 'Coins'
        },
        {
          id: 'enemy-troubles-spiritual-remedy',
          number: '08',
          title: 'Protection from Negative Influences',
          subtitle: 'Evil Eye (Drishti), Malice, and Divine Protective Shield',
          shortDescription: 'Vedic rituals and Sudarshana protection to dispel negative vibrations, jealousy, and unwarranted disputes.',
          fullDescription: 'Unprovoked animosity, malicious eyes, or toxic disputes can induce acute mental distress. Traditional Kerala Tantrik remedies, Sudarshana Homa, and Narasimha Kavacha practices help establish a serene protective shield around family.',
          traditionalAspects: [
            'Traditional methods to neutralize evil eye (Drishti dosha)',
            'Sudarshana Yantra worship and consecrated protective threads',
            'Prayers to disarm unwarranted court litigations and conflicts',
            'Kala Bhairava worship for fearlessness and peace'
          ],
          spiritualGuidance: 'Righteous conduct invites divine guardianship; sacred poojas restore positive sanctity to the dwelling.',
          whatsappMessage: 'Namaste Pandit Ji, I need spiritual guidance for overcoming evil eye and negative influences.',
          iconName: 'ShieldAlert'
        },
        {
          id: 'business-problems',
          number: '09',
          title: 'Business & Commercial Hurdles',
          subtitle: 'Business Slump, Footfall Drop, and Partnership Friction',
          shortDescription: 'Vyapara Vriddhi yantra, commercial Vastu harmony, and identifying auspicious timings to revive enterprise.',
          fullDescription: 'When capital remains locked, customer footfall declines, or partners lock horns, examination of the 7th house (commerce) and Mercury provides actionable remedies and Vyapara Vriddhi yantra installation guidance.',
          traditionalAspects: [
            'Vastu check for commercial premises, entryway, and cash counter',
            'Vyapara Vriddhi Maha Yantra daily worship rituals',
            'Partnership horoscope harmony and mutual accord guidance',
            'Selecting auspicious muhurthas for new ventures or contracts'
          ],
          spiritualGuidance: 'Integrity in business combined with divine grace sustains enduring commercial prosperity.',
          whatsappMessage: 'Namaste Pandit Ji, I need astrological guidance for my business and commercial challenges.',
          iconName: 'Building2'
        },
        {
          id: 'financial-loss-guidance',
          number: '10',
          title: 'Recovery from Sudden Financial Losses',
          subtitle: 'Share Market, Investments, or Business Shock Analysis',
          shortDescription: 'Pacifying Rahu-Ketu or Saturn transits, Navagraha shanti, and spiritual revival after sudden financial distress.',
          fullDescription: 'Sudden economic shocks, fraud, or market losses often coincide with Rahu-Ketu or Saturn cycles. Rather than losing hope, Navagraha Shanti rituals and charity practices help neutralize harsh transits and revive confidence.',
          traditionalAspects: [
            'Exhaustive analysis of sudden loss indicators in birth chart',
            'Navagraha Shanti Homa and traditional grain charity',
            'Auspicious chart-based windows for fresh financial ventures',
            'Regaining emotional balance and spiritual clarity'
          ],
          spiritualGuidance: 'Life cycles witness peaks and valleys; sincere remedies mitigate planetary friction.',
          whatsappMessage: 'Namaste Pandit Ji, I require astrological guidance regarding sudden financial losses.',
          iconName: 'TrendingDown'
        },
        {
          id: 'domestic-discord-and-family-peace',
          number: '11',
          title: 'Domestic Discord & Family Peace',
          subtitle: 'Home Friction, Restlessness, and Harmonizing Vastu',
          shortDescription: 'Restoring warmth, Satyanarayana pooja, pitru dosha remedies, and clearing domestic negativity.',
          fullDescription: 'A home should be a sanctuary. When irritation, constant bickering, or lack of warmth plague the household upon entering, Vastu defects or Kuladevata omissions may be present. Satyanarayana and Vastu Shanti poojas restore domestic harmony.',
          traditionalAspects: [
            'Home Vastu balancing for Northeast and Southwest quadrants',
            'Kuladevata worship and Pitru Dosha pacification',
            'Navagraha lamps and home cleansing rituals',
            'Fostering mutual tenderness and unity among family members'
          ],
          spiritualGuidance: 'Sacred chants and domestic peace poojas dispel gloom and cultivate joyous togetherness.',
          whatsappMessage: 'Namaste Pandit Ji, I seek guidance for family peace and resolving domestic discord.',
          iconName: 'Home'
        },
        {
          id: 'homa-and-yajna-guidance',
          number: '12',
          title: 'Homa & Yajna Guidance',
          subtitle: 'Ganapati, Navagraha, Mrityunjaya, Chandika & Sudarshana Homas',
          shortDescription: 'Significance of sacred fire rituals, sankalpa procedures, and scriptural guidelines for all Vedic homas.',
          fullDescription: 'In Sanatana Dharma, holy fire rituals (Homas) hold paramount significance. Oblations offered through Agni Deva neutralize doshas and invoke divine grace. Pandit Ji guides devotees on authentic procedures, materials, and sankalpa for major homas.',
          traditionalAspects: [
            'Maha Ganapati Homa guidance for success in undertakings',
            'Maha Mrityunjaya Havan for vitality, health, and longevity',
            'Navagraha Shanti Yajna for mitigating planetary afflictions',
            'Scriptural sankalpa, sacred mantras, and pure offerings'
          ],
          spiritualGuidance: 'Vedic fire rituals performed with pure intent purify the mind, body, and surroundings.',
          whatsappMessage: 'Namaste Pandit Ji, I would like information and muhurtha guidance for Homas and Yajnas.',
          iconName: 'Flame'
        }
      ]
    },
    howItWorks: {
      tagline: 'Simple 3-Step Process',
      heading: 'How Consultation Works',
      subheading: 'Receive confidential, compassionate astrological guidance in three clear steps.',
      step1Title: 'Reach Out with Your Concern',
      step1Desc: 'Contact Pandit Sachin Sharma directly via WhatsApp or phone call with your initial inquiry.',
      step2Title: 'Share Details & Receive Insight',
      step2Desc: 'Provide your date of birth, time, birthplace, or specific question to receive scriptural astrological analysis.',
      step3Title: 'Explore Tailored Remedies',
      step3Desc: 'Gain guidance on suitable planetary remedies, homas, stotras, or lifestyle prayers aligned with your chart.',
      ctaButton: 'Connect on WhatsApp Now',
    },
    whyChooseUs: {
      tagline: 'Why Choose Us',
      heading: 'Why Consult Pandit Ji?',
      subheading: 'Ancient Vedic principles, patient care, and your well-being are our highest priorities.',
      card1Title: 'Empathetic & Attentive Listening',
      card1Desc: 'Every seeker is heard with genuine patience, profound respect, and complete confidentiality.',
      card2Title: 'Direct & Accessible Communication',
      card2Desc: 'Complex astrological findings are explained in clear, approachable language without ambiguity.',
      card3Title: 'Authentic Vedic Lineage',
      card3Desc: 'Rooted in traditional South Indian and Kerala astrological disciplines with ethical remedial focus.',
      card4Title: 'Effortless WhatsApp Access',
      card4Desc: 'Conveniently reach out anytime via WhatsApp for prompt, thoughtful responses.',
      badge: 'Scriptural Authenticity',
    },
    rituals: {
      tagline: 'Vedic Rituals',
      heading: 'Guidance on Sacred Homas & Yajnas',
      subheading: 'Invoking divine benevolence and pacifying planetary doshas through ancient Vedic fire ceremonies.',
      altarTitle: 'Scriptural Yajna Sankalpa',
      altarDesc: 'Consult Pandit Ji for auspicious muhurthas, ritual ingredients, and proper sankalpa before performing any ceremony.',
      items: [
        { name: 'Maha Ganapati Homa', purpose: 'Performed prior to new ventures, housewarming, or business inaugurations to dispel all obstacles.' },
        { name: 'Navagraha Shanti Yajna', purpose: 'To harmonize all nine planetary forces for longevity, vitality, and prosperity.' },
        { name: 'Maha Mrityunjaya Havan', purpose: 'Traditional Rudra prayers to conquer chronic distress, anxiety, and fear of premature ill-health.' },
        { name: 'Sudarshana Homa', purpose: 'Powerful invocation of Lord Sudarshana to ward off negative energies and evil eye.' },
      ],
      ctaButton: 'Inquire About Homas on WhatsApp',
    },
    faq: {
      tagline: 'Frequently Asked Questions',
      heading: 'Questions About Astrological Guidance',
      subheading: 'Clear answers regarding consultations, remedies, and contacting Pandit Ji.',
      moreQuestions: 'Have More Questions?',
      moreQuestionsDesc: 'Feel free to send a direct message on WhatsApp for personalized clarification.',
      askButton: 'Ask on WhatsApp',
      items: [
        {
          id: 'faq-1',
          question: 'How do I reach out for an astrological consultation?',
          answer: 'You can directly call 8151816172 or click any of the WhatsApp buttons across the website to start a direct message thread with Pandit Sachin Sharma.'
        },
        {
          id: 'faq-2',
          question: 'Can I explain my problem over WhatsApp?',
          answer: 'Yes, absolutely. You can share your name, date of birth, time of birth, birth place, and a brief description of your question via WhatsApp (8151816172).'
        },
        {
          id: 'faq-3',
          question: 'What types of life concerns can I discuss?',
          answer: 'You can discuss personal challenges, marital harmony, relationship dilemmas, career crossroads, financial distress, business obstacles, children’s studies, and planetary remedies.'
        },
        {
          id: 'faq-4',
          question: 'Can I obtain guidance regarding Homas and Poojas?',
          answer: 'Yes. Complete scriptural guidance on the significance, auspicious muhurtha, and conduct of Ganapati, Navagraha, Mrityunjaya, and Sudarshana homas is provided.'
        },
        {
          id: 'faq-5',
          question: 'Do I need to schedule an appointment in advance?',
          answer: 'Yes, as Pandit Ji may be engaged in sacred poojas or prior consultations, it is advisable to send a message beforehand on WhatsApp to agree on a mutually convenient time.'
        },
        {
          id: 'faq-6',
          question: 'How can I learn about consultation fees and details?',
          answer: 'Since each individual’s horoscope review and remedial scope differs, you may inquire directly via WhatsApp (8151816172) or over a phone call for transparent information.'
        }
      ]
    },
    contact: {
      tagline: 'Get in Touch',
      heading: 'Contact the Astrologer',
      subheading: 'Call directly or send a message via WhatsApp to begin your consultation.',
      boxPhoneTitle: 'Helpline (Phone & WhatsApp)',
      boxPhoneDesc: 'Active for WhatsApp Consultation',
      whatsappButton: 'Chat on WhatsApp',
      callButton: 'Call Directly',
      formTitle: 'Send Your Query or Horoscope Details',
      formSubtitle: 'Fill your details below to forward them directly to Pandit Ji via WhatsApp.',
      labelName: 'Your Full Name *',
      placeholderName: 'e.g., Ramesh Kumar',
      labelPhone: 'Your Mobile Number *',
      placeholderPhone: 'e.g., 98XXXXXXXX',
      labelMessage: 'Your Query / Birth Details *',
      placeholderMessage: 'Mention your concern, date of birth, or consultation question...',
      submitButton: 'Send Query via WhatsApp',
      privacyNote: 'Your privacy is paramount. Details are shared strictly and directly with the astrologer.',
      errName: 'Please provide your full name.',
      errPhone: 'Please enter a valid 10-digit mobile number.',
      errMessage: 'Please enter your message or question.',
      successMessage: 'Information ready. Opening WhatsApp window...',
    },
    footer: {
      desc: 'Ancient spiritual traditions of Kerala and Dakshina Kashi, generational wisdom, and guidance on sacred religious practices including Homas and Yajnas.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Astrology Services',
      otherServices: 'More Guidance',
      disclaimerTitle: 'Religious Disclaimer:',
      disclaimerText: 'Astrology, horoscopes, and Vedic rituals shared on this website are rooted in traditional Sanatana beliefs. Astrological counseling is intended to instill positive perspective and spiritual strength, and does not promise scientifically guaranteed outcomes.',
      copyright: 'Astro Kannada. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions',
      backToTop: 'Top',
    },
    popup: {
      heading: 'Need Astrological Guidance?',
      subtext: 'Share your questions directly on WhatsApp.',
      button: 'Chat on WhatsApp',
      closeLabel: 'Close popup',
    },
    floating: {
      label: 'WhatsApp Chat',
    },
  },

  hi: {
    topBar: {
      announcement: 'पारंपरिक वैदिक ज्योतिष एवं आध्यात्मिक मार्गदर्शन',
      callNow: 'कॉल करें',
      translateLabel: 'भाषा / Language',
    },
    brand: {
      name: 'ॐ श्री कृष्ण वादिराज ज्योतिषी',
      astrologer: 'पंडित सचिन शर्मा',
      astrologerTitle: 'वैदिक ज्योतिषी एवं आध्यात्मिक मार्गदर्शक',
    },
    nav: {
      home: 'होम',
      about: 'परिचय',
      services: 'हमारी सेवाएं',
      rituals: 'पूजा एवं हवन',
      faq: 'प्रश्नोत्तरी',
      blog: 'लेख (ब्लॉग)',
      contact: 'संपर्क करें',
      whatsappCta: 'WhatsApp परामर्श',
    },
    hero: {
      badge: 'प्राचीन वैदिक ज्योतिष एवं दैवीय मार्गदर्शन',
      title: 'आपके जीवन की समस्याओं का',
      titleHighlight: 'ज्योतिषीय समाधान',
      description: 'व्यक्तिगत चिंताएं, प्रेम एवं दांपत्य संबंध, नौकरी, व्यापार, आर्थिक स्थिति, बच्चों की शिक्षा तथा पारिवारिक शांति के लिए प्राचीन वैदिक परंपरा के अनुसार आत्मीय परामर्श प्राप्त करें।',
      whatsappPrimary: 'WhatsApp पर संपर्क करें',
      servicesSecondary: 'हमारी सेवाएं देखें',
      callDirect: 'सीधा कॉल करें',
      confidential: 'पूर्णतः गोपनीय परामर्श',
      directComm: 'आत्मीय संवाद',
      vedicMethod: 'शास्त्रसम्मत वैदिक विधि',
      altarTitle: 'विद्वान पंडित जी से बात करें',
      altarDesc: 'अपनी जन्मकुंडली और प्रश्नों के लिए शास्त्रोक्त उपाय एवं शुभ मुहूर्त का मार्गदर्शन प्राप्त करें।',
      quickContact: 'त्वरित संपर्क हेतु',
      activeStatus: 'WhatsApp सक्रिय है',
      sendMessage: 'संदेश भेजें',
    },
    about: {
      tagline: 'परंपरा और विरासत',
      heading: 'प्राचीन वैदिक परंपरा का दिव्य मार्गदर्शन',
      quote: 'केरल एवं दक्षिण काशी की प्राचीन आध्यात्मिक परंपराएं, पीढ़ियों से संजोया गया ज्ञान तथा होम और यज्ञ जैसे धार्मिक अनुष्ठानों का प्रामाणिक मार्गदर्शन।',
      desc1: 'ज्योतिष केवल भविष्य जानने का साधन नहीं है; यह जीवन के उतार-चढ़ाव में सही मार्ग दिखाने वाली ज्ञान की दिव्य ज्योति है। पंडित सचिन शर्मा जी केरल की तांत्रिक परंपरा और दक्षिण काशी की वैदिक पद्धति के आधार पर भक्तों के कष्टों को ध्यानपूर्वक सुनते हैं।',
      desc2: 'कुंडली विश्लेषण, नवग्रह दोष निवारण, वास्तु परामर्श तथा शास्त्रोक्त होम-हवन के माध्यम से जीवन में सकारात्मक ऊर्जा के संचार हेतु वे आध्यात्मिक मार्गदर्शन प्रदान करते हैं।',
      pillar1Title: 'शास्त्रोक्त जन्मकुंडली अध्ययन',
      pillar1Desc: 'जन्म कुंडली, नवग्रह स्थिति और दशा-भुक्ति का सूक्ष्म विश्लेषण।',
      pillar2Title: 'होम एवं यज्ञ मार्गदर्शन',
      pillar2Desc: 'दोष निवारण और पारिवारिक शांति हेतु पारंपरिक वैदिक अनुष्ठान।',
      pillar3Title: 'आत्मीय एवं गोपनीय परामर्श',
      pillar3Desc: 'आपकी व्यक्तिगत समस्याओं को पूरी गोपनीयता और सम्मान के साथ सुना जाता है।',
      pillar4Title: 'सरल एवं सात्विक उपाय',
      pillar4Desc: 'दैनिक जीवन में किए जा सकने वाले स्तोत्र पाठ, मंत्र एवं प्रार्थना के नियम।',
      whatsappChat: 'पंडित जी से WhatsApp पर बात करें',
      chartTitle: 'वैदिक जन्मकुंडली चक्र एवं नवग्रह विश्लेषण',
      chartSubtitle: 'पंडित सचिन शर्मा - मार्गदर्शन पीठ',
    },
    servicesSection: {
      tagline: 'हमारी ज्योतिष सेवाएं',
      heading: 'जीवन की प्रमुख समस्याओं के आध्यात्मिक उपाय',
      subheading: 'पंडित सचिन शर्मा जी के सान्निध्य में प्रत्येक समस्या हेतु शास्त्रसम्मत वैदिक परामर्श दिया जाता है।',
      moreInfo: 'विस्तृत जानकारी',
      whatsappAsk: 'WhatsApp पर पूछें',
      disclaimer: 'ध्यान दें: ज्योतिषीय एवं आध्यात्मिक परंपराएं प्राचीन आस्था और शास्त्रोक्त विधियों पर आधारित हैं, जिनका उद्देश्य सकारात्मक दृष्टिकोण और आत्मबल प्रदान करना है।',
      modalService: 'सेवा',
      modalClose: 'बंद करें',
      traditionalAspectsTitle: 'शास्त्रोक्त विधि एवं पारंपरिक अनुष्ठान:',
      modalWhatsappCta: 'WhatsApp पर परामर्श लें',
      modalCallCta: 'कॉल करें',
      items: [
        {
          id: 'lakshmi-vashikarana',
          number: '01',
          title: 'लक्ष्मी वशीकरण',
          subtitle: 'महालक्ष्मी कृपा, धन वृद्धि एवं गृह-व्यापार समृद्धि',
          shortDescription: 'पारंपरिक महालक्ष्मी पूजन विधियां, कनकधारा एवं श्री सूक्त पाठ द्वारा घर व व्यापार में सकारात्मक समृद्धि का आवाहन।',
          fullDescription: 'लक्ष्मी वशीकरण वैदिक परंपरा में महालक्ष्मी की अनुकंपा और स्थिर समृद्धि प्राप्त करने का पवित्र सात्विक विधान है। जब धन का ठहराव न हो या आर्थिक बाधाएं आ रही हों, तब श्री सूक्त और लक्ष्मी यंत्र पूजन के माध्यम से सकारात्मक ऊर्जा का संचार होता है।',
          traditionalAspects: [
            'श्री सूक्त पाठ एवं कुमकुमार्चन विधि',
            'घर और कार्यस्थल पर वास्तु लक्ष्मी आकर्षण के नियम',
            'अनावश्यक खर्चों पर नियंत्रण हेतु आध्यात्मिक संकल्प',
            'धन त्रयोदशी एवं पूर्णिमा के विशेष अनुष्ठान'
          ],
          spiritualGuidance: 'सात्विक साधना और शुद्ध भक्ति जीवन में सकारात्मक ऊर्जा और समृद्धि की वृद्धि करती है।',
          whatsappMessage: 'नमस्ते पंडित जी, मुझे "लक्ष्मी वशीकरण" एवं आर्थिक समृद्धि की पूजा विधि के बारे में मार्गदर्शन चाहिए।',
          iconName: 'Coins'
        },
        {
          id: 'jana-vashikarana',
          number: '02',
          title: 'जन वशीकरण',
          subtitle: 'समाज में सम्मान, सौहार्द और मधुर संबंध',
          shortDescription: 'कार्यक्षेत्र, समाज अथवा परिवार में आपसी स्नेह, सद्भाव और सम्मान अर्जित करने हेतु वैदिक उपाय।',
          fullDescription: 'जन वशीकरण प्राचीन काल से समाज में सौहार्द और परस्पर आदर भाव विकसित करने की सात्विक विधा रही है। जब अपनों में या सहयोगियों के साथ मनमुटाव हो, तब सौम्य वाणी और आंतरिक आकर्षण बढ़ाने वाले मंत्रों से शांति मिलती है।',
          traditionalAspects: [
            'सौम्य वाणी एवं सद्भावना आकर्षण हेतु मंत्र मार्गदर्शन',
            'अपयश या गलतफहमी दूर करने हेतु शांति पूजा',
            'सामाजिक प्रतिष्ठा हेतु सूर्य उपासना के नियम',
            'सहनशीलता और धैर्य बढ़ाने वाली प्रार्थनाएं'
          ],
          spiritualGuidance: 'यह किसी के स्वतंत्र विचार को नियंत्रित करने का साधन नहीं, अपितु व्यक्ति में सकारात्मक प्रभाव और आदर भाव जगाने की विधि है।',
          whatsappMessage: 'नमस्ते पंडित जी, मुझे "जन वशीकरण" एवं सामाजिक संबंधों में सुधार के संबंध में जानकारी चाहिए।',
          iconName: 'Users'
        },
        {
          id: 'dhana-vashikarana',
          number: '03',
          title: 'धन वशीकरण',
          subtitle: 'धन आगमन की रुकावटों का निवारण एवं आर्थिक स्थिरता',
          shortDescription: 'कठिन परिश्रम के बाद भी धन संचय न होने पर कुबेर यंत्र पूजन और धन स्थिरता हेतु ग्रह शांति।',
          fullDescription: 'मेहनत के बाद भी बरकत न होना, आकस्मिक धन हानि या कर्ज बढ़ना कुंडली में गुरु, शुक्र या द्वितीय-एकादश भाव के दोषों से हो सकता है। कुबेर यंत्र स्थापना और दक्षिण काशी परंपरा के अनुष्ठानों से धन स्थिरता प्राप्त होती है।',
          traditionalAspects: [
            'कुबेर यंत्र स्थापना एवं तिजोरी वास्तु के नियम',
            'कुंडली के द्वितीय (धन) व एकादश (लाभ) भाव का विश्लेषण',
            'धन हानि कराने वाले ग्रह दोषों की शांति',
            'आर्थिक अनुशासन और विवेक हेतु आध्यात्मिक मार्गदर्शन'
          ],
          spiritualGuidance: 'सच्चे परिश्रम के साथ ईश्वरीय कृपा जुड़ने से आर्थिक संपन्नता का मार्ग प्रशस्त होता है।',
          whatsappMessage: 'नमस्ते पंडित जी, मुझे "धन वशीकरण" और आर्थिक विकास के पूजन विधान के बारे में जानकारी चाहिए।',
          iconName: 'Gem'
        },
        {
          id: 'love-relationship-issues',
          number: '04',
          title: 'प्रेम एवं दांपत्य संबंध समस्याएं',
          subtitle: 'दांपत्य सामंजस्य, प्रेम में विश्वास और पारिवारिक तालमेल',
          shortDescription: 'मनमुटाव, अविश्वास, पारिवारिक कलह अथवा मांगलिक दोष के निवारण हेतु शास्त्रोक्त उपाय।',
          fullDescription: 'दांपत्य जीवन में शुक्र, मंगल (मांगलिक दोष) या राहु-केतु के प्रभाव से कलह उत्पन्न हो सकती है। पंडित जी कुंडली मिलान का पुनः परीक्षण कर उमा-महेश्वर पूजन और राधा-कृष्ण प्रार्थना द्वारा संबंधों में प्रेम और विश्वास का पुनर्स्थापना करते हैं।',
          traditionalAspects: [
            'अष्टकूट गुण मिलान का विस्तृत परीक्षण',
            'मांगलिक दोष या शुक्र दोष शांति अनुष्ठान',
            'रिश्तों में मिठास हेतु कामदेव-रति एवं गौरी पूजन',
            'परिवार के बुजुर्गों के साथ सौहार्दपूर्ण संबंध के उपाय'
          ],
          spiritualGuidance: 'आपसी समझ, प्रेम और धैर्य के साथ की गई सात्विक पूजा घर में सुख-शांति लाती है।',
          whatsappMessage: 'नमस्ते पंडित जी, मुझे प्रेम एवं दांपत्य जीवन की समस्याओं के संबंध में ज्योतिषीय परामर्श चाहिए।',
          iconName: 'HeartHandshake'
        },
        {
          id: 'education-and-studies',
          number: '05',
          title: 'विद्या एवं शिक्षा मार्गदर्शन',
          subtitle: 'विद्यार्थियों में एकाग्रता, स्मरण शक्ति और उच्च शिक्षा योग',
          shortDescription: 'पढ़ाई में मन न लगना, परीक्षा भय, बुध-गुरु ग्रहों का बलवर्धन और सरस्वती-हयग्रीव उपासना।',
          fullDescription: 'शिक्षा जीवन का आधार है। कई होनहार छात्र परीक्षा के समय घबराहट या ध्यान भटकने से जूझते हैं। कुंडली में पंचम भाव (विद्या) को मजबूत करने हेतु मेधा दक्षिणामूर्ति एवं सरस्वती स्तोत्र का मार्गदर्शन दिया जाता है।',
          traditionalAspects: [
            'विद्यार्थी की कुंडली में बुध एवं गुरु का बलवर्धन',
            'स्मरण शक्ति हेतु हयग्रीव एवं सरस्वती साधना',
            'उच्च शिक्षा एवं विदेश अध्ययन के योगों का विश्लेषण',
            'परीक्षा का तनाव दूर कर आत्मविश्वास जागृत करना'
          ],
          spiritualGuidance: 'श्रद्धापूर्वक अध्ययन और ईश्वरीय आराधना से विद्यार्थियों को सफलता प्राप्त होती है।',
          whatsappMessage: 'नमस्ते पंडित जी, मुझे बच्चे की शिक्षा और पढ़ाई के संबंध में ज्योतिषीय मार्गदर्शन चाहिए।',
          iconName: 'GraduationCap'
        },
        {
          id: 'job-and-career-guidance',
          number: '06',
          title: 'नौकरी एवं करियर मार्गदर्शन',
          subtitle: 'नौकरी में रुकावट, पदोन्नति, स्थानांतरण और करियर वृद्धि',
          shortDescription: 'शनि और सूर्य देव की कृपा से आजीविका में स्थिरता, प्रमोशन की बाधाएं दूर करने के उपाय।',
          fullDescription: 'लगातार परिश्रम के बाद भी प्रमोशन न मिलना, कार्यस्थल पर तनाव या नौकरी न मिलने से निराश हैं? कुंडली के दशम भाव (कर्म भाव) का विश्लेषण कर शनि शांति और अनुकूल समय का स्पष्ट मार्गदर्शन प्रदान किया जाता है।',
          traditionalAspects: [
            'दशम भाव (कर्म स्थान) एवं दशा-अंतर्दशा का विश्लेषण',
            'साक्षात्कार में सफलता हेतु आध्यात्मिक एवं मानसिक तैयारी',
            'सरकारी नौकरी अथवा बहुराष्ट्रीय कंपनियों में योग विचार',
            'कार्यस्थल पर विरोधियों के उपद्रव की शांति'
          ],
          spiritualGuidance: 'सही समय पर उचित निर्णय और दैवबल करियर में उच्च शिखर तक पहुंचाता है।',
          whatsappMessage: 'नमस्ते पंडित जी, मुझे नौकरी और करियर के संबंध में ज्योतिषीय परामर्श चाहिए।',
          iconName: 'Briefcase'
        },
        {
          id: 'financial-problems',
          number: '07',
          title: 'कर्ज मुक्ति एवं आर्थिक संकट',
          subtitle: 'ऋण मुक्ति, लगातार घाटा और आर्थिक तंगी का निवारण',
          shortDescription: 'ऋण मुक्ति स्तोत्र, अंगारक शांति और आर्थिक संकट से बाहर निकलने हेतु शास्त्रोक्त उपाय।',
          fullDescription: 'कर्ज का बोझ मानसिक शांति छीन लेता है। कुंडली में षष्ठ (ऋण) और द्वादश (व्यय) भाव के दोषों का विश्लेषण कर ऋणमोचक मंगल स्तोत्र और सुब्रह्मण्य आराधना के माध्यम से राहत का मार्ग सुझाया जाता है।',
          traditionalAspects: [
            'कुंडली के छठे और बारहवें भाव के दोषों की शांति',
            'ऋणमोचक अंगारक पूजन एवं सुब्रह्मण्य हवन',
            'घर के धन प्रवाह हेतु आवश्यक वास्तु सुधार',
            'आर्थिक अनुशासन और आत्मबल का विकास'
          ],
          spiritualGuidance: 'धार्मिक उपाय कठिन समय में धैर्य प्रदान कर कर्जमुक्त जीवन की नई राह दिखाते हैं।',
          whatsappMessage: 'नमस्ते पंडित जी, मुझे कर्ज मुक्ति और आर्थिक संकट के निवारण हेतु ज्योतिषीय उपाय चाहिए।',
          iconName: 'Coins'
        },
        {
          id: 'enemy-troubles-spiritual-remedy',
          number: '08',
          title: 'नकारात्मक ऊर्जा एवं शत्रु बाधा निवारण',
          subtitle: 'बुरी नजर (दृष्टि दोष), ईर्ष्या और रक्षा कवच अनुष्ठान',
          shortDescription: 'अकारण विरोध, अदालती विवाद और बुरी नजर के प्रभाव से मुक्ति हेतु सुदर्शन एवं नरसिंह रक्षा विधान।',
          fullDescription: 'जीवन में उन्नति के समय दूसरों की ईर्ष्या या बुरी नजर मानसिक तनाव का कारण बन सकती है। प्राचीन केरल परंपरा के अनुसार सुदर्शन होम और नरसिंह कवच द्वारा परिवार की रक्षा के उपाय बताए जाते हैं।',
          traditionalAspects: [
            'दृष्टि दोष एवं नकारात्मक तरंगों का शमन',
            'सुदर्शन चक्र यंत्र पूजन एवं रक्षा सूत्र धारण',
            'अनावश्यक मुकदमों और कलह से मुक्ति हेतु प्रार्थना',
            'कालभैरव आराधना द्वारा निर्भयता की प्राप्ति'
          ],
          spiritualGuidance: 'सत्य और धर्म के मार्ग पर चलने वालों की ईश्वर सदैव रक्षा करते हैं।',
          whatsappMessage: 'नमस्ते पंडित जी, मुझे बुरी नजर और नकारात्मक प्रभाव से रक्षा हेतु मार्गदर्शन चाहिए।',
          iconName: 'ShieldAlert'
        },
        {
          id: 'business-problems',
          number: '09',
          title: 'व्यापार एवं व्यवसाय समस्याएं',
          subtitle: 'व्यापार में मंदी, ग्राहकों की कमी और साझेदारी विवाद',
          shortDescription: 'दुकान या व्यापार में मंदी दूर करने हेतु व्यापार वृद्धि यंत्र, वास्तु सुधार और शुभ मुहूर्त का चयन।',
          fullDescription: 'व्यापार में फंसा हुआ पैसा न आना या बिक्री घट जाना कुंडली में सप्तम भाव और बुध ग्रह की स्थिति से जुड़ा हो सकता है। व्यापार वृद्धि यंत्र पूजन और गणपति आराधना से व्यापार में गति आती है।',
          traditionalAspects: [
            'दुकान/प्रतिष्ठान के मुख्य द्वार और तिजोरी का वास्तु परीक्षण',
            'व्यापार वृद्धि महायंत्र एवं दैनिक पूजन विधि',
            'साझेदारों की कुंडली में तालमेल हेतु परामर्श',
            'नए व्यापार या अनुबंधों के लिए शुभ मुहूर्त का चयन'
          ],
          spiritualGuidance: 'व्यापारिक निष्ठा के साथ ईश्वरीय कृपा मिलने से व्यापार में स्थायित्व आता है।',
          whatsappMessage: 'नमस्ते पंडित जी, मुझे अपने व्यापार की समस्याओं के समाधान हेतु ज्योतिषीय मार्गदर्शन चाहिए।',
          iconName: 'Building2'
        },
        {
          id: 'financial-loss-guidance',
          number: '10',
          title: 'आकस्मिक आर्थिक हानि का विश्लेषण',
          subtitle: 'शेयर बाजार, निवेश अथवा अचानक हुए नुकसान से उबरने के उपाय',
          shortDescription: 'राहु-केतु दशा जनित आर्थिक नुकसान की शांति, नवग्रह दोष निवारण और आर्थिक पुनर्स्थापन।',
          fullDescription: 'अचानक हुआ बड़ा आर्थिक नुकसान राहु-केतु या प्रतिकूल शनि गोचर का परिणाम हो सकता है। हताश होने के बजाय नवग्रह शांति हवन और दान-पुण्य से संकट के प्रभाव को कम कर पुनरुत्थान का मार्ग मिलता है।',
          traditionalAspects: [
            'आकस्मिक हानि के लिए उत्तरदायी राहु-केतु का विश्लेषण',
            'नवग्रह शांति हवन एवं नवधान्य दान परंपरा',
            'भविष्य के निवेशों हेतु कुंडली अनुसार शुभ समय का ज्ञान',
            'आत्मबल और विवेक की पुनः प्रतिष्ठा'
          ],
          spiritualGuidance: 'कालचक्र में उतार-चढ़ाव स्वाभाविक हैं; ग्रह शांति से विपत्ति का प्रभाव मंद होता है।',
          whatsappMessage: 'नमस्ते पंडित जी, मुझे आकस्मिक आर्थिक नुकसान के ज्योतिषीय समाधान हेतु परामर्श चाहिए।',
          iconName: 'TrendingDown'
        },
        {
          id: 'domestic-discord-and-family-peace',
          number: '11',
          title: 'घरेलू कलह एवं पारिवारिक शांति',
          subtitle: 'घर में अशांति, तनाव, बच्चों की समस्याएं और वास्तु दोष निवारण',
          shortDescription: 'परिवार में प्रेम का अभाव और अशांति दूर करने हेतु सत्यनारायण कथा, वास्तु शांति एवं पितृ शांति।',
          fullDescription: 'घर में प्रवेश करते ही तनाव या परिजनों के बीच विवाद होना वास्तु दोष या कुलदेवता की उपेक्षा से हो सकता है। सत्यनारायण पूजा और वास्तु शांति से घर में सुख, शांति और सकारात्मकता लौटती है।',
          traditionalAspects: [
            'ईशान और नैऋत्य कोण का वास्तु संतुलन',
            'कुलदेवता पूजन एवं पितृ दोष निवारण',
            'शांतिपूर्ण वातावरण हेतु नवग्रह दीपदान एवं हवन',
            'परिवार के सदस्यों में परस्पर प्रेम और विश्वास की वृद्धि'
          ],
          spiritualGuidance: 'पवित्र मंत्रोच्चार और सात्विक पूजा घर की नकारात्मकता समाप्त कर आनंद लाती है।',
          whatsappMessage: 'नमस्ते पंडित जी, मुझे घरेलू कलह और पारिवारिक शांति के संबंध में ज्योतिषीय उपाय चाहिए।',
          iconName: 'Home'
        },
        {
          id: 'homa-and-yajna-guidance',
          number: '12',
          title: 'होम एवं यज्ञ मार्गदर्शन',
          subtitle: 'गणपति, नवग्रह, मृत्युंजय, चंडिका एवं सुदर्शन होम',
          shortDescription: 'वैदिक मंत्रों से संपन्न पवित्र यज्ञ-हवन का महत्व, संकल्प विधि और दोष निवारण के नियम।',
          fullDescription: 'सनातन संस्कृति में अग्निहोत्र और यज्ञ का सर्वोच्च स्थान है। अग्नि देव के माध्यम से दी गई आहुतियां समस्त दोषों को भस्म कर शुभ फल प्रदान करती हैं। पंडित जी सभी प्रमुख हवनों का शास्त्रोक्त मार्गदर्शन करते हैं।',
          traditionalAspects: [
            'कार्य सिद्धि हेतु महागणपति होम का मार्गदर्शन',
            'आरोग्य एवं दीर्घायु हेतु महामृत्युंजय हवन विधि',
            'ग्रह दोष निवारण हेतु नवग्रह शांति यज्ञ',
            'संकल्प, मंत्र संस्कार और पवित्र हविष्य समर्पण के नियम'
          ],
          spiritualGuidance: 'अग्नि साक्षी में किए गए पवित्र हवन मन, शरीर और परिवेश को शुद्ध करते हैं।',
          whatsappMessage: 'नमस्ते पंडित जी, मुझे होम एवं यज्ञ अनुष्ठान के शास्त्रोक्त विधान के बारे में जानकारी चाहिए।',
          iconName: 'Flame'
        }
      ]
    },
    howItWorks: {
      tagline: 'सरल परामर्श प्रक्रिया',
      heading: 'ज्योतिष परामर्श कैसे प्राप्त करें?',
      subheading: 'तीन आसान चरणों में पंडित जी से आत्मीय एवं गोपनीय मार्गदर्शन प्राप्त करें।',
      step1Title: 'अपनी समस्या हेतु संपर्क करें',
      step1Desc: 'WhatsApp अथवा फोन कॉल द्वारा सीधे पंडित सचिन शर्मा जी से संपर्क कर अपनी प्राथमिक जानकारी बताएं।',
      step2Title: 'जन्म विवरण साझा कर समाधान पाएं',
      step2Desc: 'अपनी जन्म तिथि, समय, जन्म स्थान और प्रश्न साझा कर शास्त्रसम्मत ज्योतिषीय विश्लेषण प्राप्त करें।',
      step3Title: 'उचित आध्यात्मिक अनुष्ठान की सलाह लें',
      step3Desc: 'अपनी कुंडली के अनुसार नवग्रह शांति, हवन, जप अथवा सरल प्रार्थना विधियों का मार्गदर्शन प्राप्त करें।',
      ctaButton: 'अभी WhatsApp पर संपर्क करें',
    },
    whyChooseUs: {
      tagline: 'विश्वसनीयता',
      heading: 'हमसे संपर्क क्यों करें?',
      subheading: 'पारंपरिक वैदिक मर्यादाएं और भक्तों का कल्याण ही हमारी सर्वोच्च प्राथमिकता है।',
      card1Title: 'व्यक्तिगत समस्याओं को धैर्य से सुनना',
      card1Desc: 'प्रत्येक व्यक्ति के कष्टों को धैर्य, सम्मान और पूर्ण गोपनीयता के साथ सुनकर मन की शांति हेतु समाधान दिया जाता है।',
      card2Title: 'सरल एवं स्पष्ट संवाद',
      card2Desc: 'कठिन ज्योतिषीय विषयों को बिना किसी आडंबर के सहज एवं समझने योग्य भाषा में समझाया जाता है।',
      card3Title: 'प्रामाणिक वैदिक परंपरा',
      card3Desc: 'दक्षिण भारत एवं केरल की समृद्ध वैदिक परंपरा के अनुसार सात्विक एवं नीतिसम्मत उपाय बताए जाते हैं।',
      card4Title: 'सुविधाजनक WhatsApp सेवा',
      card4Desc: 'बिना किसी परेशानी के अपने समय अनुसार WhatsApp संदेश भेजकर शीघ्र संपर्क की सुविधा उपलब्ध है।',
      badge: 'शास्त्रसम्मत प्रामाणिकता',
    },
    rituals: {
      tagline: 'वैदिक धार्मिक अनुष्ठान',
      heading: 'होम एवं यज्ञ पद्धतियों का मार्गदर्शन',
      subheading: 'अग्नि देव के माध्यम से देवताओं को हविष्य अर्पित कर ग्रह दोषों को शांत करने की सनातन परंपरा।',
      altarTitle: 'शास्त्रोक्त यज्ञ संकल्प',
      altarDesc: 'कोई भी पूजा या होम कराने से पूर्व शुभ मुहूर्त, संकल्प विधि और सामग्री की शुद्धता के विषय में परामर्श प्राप्त करें।',
      items: [
        { name: 'महागणपति होम', purpose: 'किसी भी नए कार्य, गृहप्रवेश या व्यापार के शुभारंभ में विघ्नों के निवारण और सर्वसिद्धि हेतु।' },
        { name: 'नवग्रह शांति यज्ञ', purpose: 'कुंडली में ग्रहों के अशुभ प्रभाव को शांत कर आयु, स्वास्थ्य और धन वृद्धि हेतु।' },
        { name: 'महामृत्युंजय हवन', purpose: 'दीर्घकालीन अस्वस्थता, भय और संकट से मुक्ति हेतु रुद्र उपासना।' },
        { name: 'सुदर्शन होम', purpose: 'दृष्टि दोष, शत्रु बाधा और घर में नकारात्मक ऊर्जा के भस्म हेतु भगवान सुदर्शन का आह्वान।' },
      ],
      ctaButton: 'हवन के बारे में WhatsApp पर पूछें',
    },
    faq: {
      tagline: 'सामान्य प्रश्नोत्तरी',
      heading: 'ज्योतिष परामर्श से जुड़े आपके प्रश्न',
      subheading: 'सपर्क करने तथा परामर्श प्रक्रिया से संबंधित मुख्य प्रश्नों के स्पष्ट उत्तर।',
      moreQuestions: 'क्या आपके मन में और भी प्रश्न हैं?',
      moreQuestionsDesc: 'अपने किसी भी व्यक्तिगत प्रश्न के लिए WhatsApp पर सीधे पंडित जी से पूछें।',
      askButton: 'WhatsApp पर प्रश्न पूछें',
      items: [
        {
          id: 'faq-1',
          question: 'ज्योतिष परामर्श हेतु संपर्क कैसे करें?',
          answer: 'आप सीधे 8151816172 पर कॉल कर सकते हैं अथवा वेबसाइट पर दिए गए WhatsApp बटन पर क्लिक करके पंडित सचिन शर्मा जी से संदेश द्वारा संपर्क कर सकते हैं।'
        },
        {
          id: 'faq-2',
          question: 'क्या WhatsApp पर अपनी समस्या बता सकते हैं?',
          answer: 'हाँ, बिल्कुल। अपना नाम, जन्म तिथि, जन्म समय, जन्म स्थान और प्रश्न का संक्षिप्त विवरण WhatsApp (8151816172) पर भेज सकते हैं।'
        },
        {
          id: 'faq-3',
          question: 'किन विषयों पर परामर्श लिया जा सकता है?',
          answer: 'विवाह, प्रेम संबंध, नौकरी, व्यापार, आर्थिक स्थिति, कर्ज, बच्चों की पढ़ाई, पारिवारिक शांति एवं ग्रह दोष निवारण जैसे सभी विषयों पर परामर्श उपलब्ध है।'
        },
        {
          id: 'faq-4',
          question: 'क्या होम और यज्ञ के बारे में जानकारी मिल सकती है?',
          answer: 'हाँ। गणपति होम, नवग्रह शांति, महामृत्युंजय हवन, सुदर्शन होम आदि के महत्व, विधि और मुहूर्त की पूरी जानकारी दी जाती है।'
        },
        {
          id: 'faq-5',
          question: 'क्या परामर्श से पूर्व समय निर्धारित करना आवश्यक है?',
          answer: 'हाँ, पंडित जी पूजा अथवा अन्य परामर्शों में व्यस्त हो सकते हैं, इसलिए WhatsApp पर पहले समय तय कर लेना उचित रहता है।'
        },
        {
          id: 'faq-6',
          question: 'परामर्श शुल्क के संबंध में जानकारी कैसे प्राप्त करें?',
          answer: 'प्रत्येक व्यक्ति की समस्या और कुंडली की स्थिति भिन्न होती है, अतः सटीक जानकारी के लिए सीधे WhatsApp (8151816172) या कॉल पर बात कर सकते हैं।'
        }
      ]
    },
    contact: {
      tagline: 'संपर्क करें',
      heading: 'पंडित जी से संपर्क विवरण',
      subheading: 'सीधे कॉल करें या WhatsApp द्वारा संदेश भेजकर परामर्श आरंभ करें।',
      boxPhoneTitle: 'हेल्पलाइन नंबर (Phone & WhatsApp)',
      boxPhoneDesc: 'WhatsApp परामर्श हेतु सक्रिय',
      whatsappButton: 'WhatsApp पर संदेश भेजें',
      callButton: 'सीधा कॉल करें',
      formTitle: 'संदेश अथवा कुंडली विवरण भेजें',
      formSubtitle: 'नीचे अपना विवरण भरकर सीधे WhatsApp द्वारा पंडित जी के मोबाइल पर भेजें।',
      labelName: 'आपका पूरा नाम *',
      placeholderName: 'उदा: रमेश कुमार',
      labelPhone: 'आपका मोबाइल नंबर *',
      placeholderPhone: 'उदा: 98XXXXXXXX',
      labelMessage: 'आपकी समस्या / प्रश्न अथवा जन्म विवरण *',
      placeholderMessage: 'अपनी समस्या, जन्म तिथि या प्रश्न यहाँ लिखें...',
      submitButton: 'WhatsApp द्वारा भेजें',
      privacyNote: 'आपकी गोपनीयता सर्वोच्च है। विवरण केवल पंडित जी के साथ ही साझा होता है।',
      errName: 'कृपया अपना पूरा नाम लिखें।',
      errPhone: 'कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।',
      errMessage: 'कृपया अपना संदेश या प्रश्न लिखें।',
      successMessage: 'विवरण तैयार है। WhatsApp खोला जा रहा है...',
    },
    footer: {
      desc: 'केरल एवं दक्षिण काशी की प्राचीन आध्यात्मिक परंपराएं, पीढ़ियों से संजोया गया ज्ञान तथा होम और यज्ञ जैसे धार्मिक अनुष्ठानों का प्रामाणिक मार्गदर्शन।',
      quickLinks: 'मुख्य पृष्ठ',
      servicesTitle: 'ज्योतिष सेवाएं',
      otherServices: 'अन्य मार्गदर्शन',
      disclaimerTitle: 'धार्मिक अस्वीकरण (Disclaimer):',
      disclaimerText: 'इस वेबसाइट पर दी गई ज्योतिषीय, कुंडली व धार्मिक जानकारी सनातन परंपराओं और आस्था पर आधारित है। यह मार्गदर्शन आत्मबल और सकारात्मक दृष्टिकोण हेतु है, किसी वैज्ञानिक गारंटी का दावा नहीं करता।',
      copyright: 'ॐ श्री कृष्ण वादिराज ज्योतिषी। सर्वाधिकार सुरक्षित।',
      privacyPolicy: 'गोपनीयता नीति (Privacy Policy)',
      termsConditions: 'नियम एवं शर्तें (Terms)',
      backToTop: 'ऊपर जाएं',
    },
    popup: {
      heading: 'ज्योतिष मार्गदर्शन चाहिए?',
      subtext: 'अपने प्रश्न सीधे WhatsApp पर पूछें।',
      button: 'WhatsApp पर चैट करें',
      closeLabel: 'बंद करें',
    },
    floating: {
      label: 'WhatsApp चैट',
    },
  },

  te: {
    topBar: {
      announcement: 'సాంప్రదాయ వైదిక జ్యోతిష్య మరియు ఆధ్యాత్మిక మార్గదర్శనం',
      callNow: 'కాల్ చేయండి',
      translateLabel: 'భాష / Language',
    },
    brand: {
      name: 'ఆస్ట్రో కన్నడ',
      astrologer: 'పండిత్ సచిన్ శర్మ',
      astrologerTitle: 'వైదిక జ్యోతిష మరియు ఆధ్యాత్మిక మార్గదర్శకులు',
    },
    nav: {
      home: 'హోమ్',
      about: 'మా గురించి',
      services: 'మా సేవలు',
      rituals: 'పూజా విధానాలు',
      faq: 'ప్రశ్నోత్తరాలు',
      blog: 'వ్యాసాలు (బ్లాగ్)',
      contact: 'సంప్రదించండి',
      whatsappCta: 'WhatsApp సంప్రదింపు',
    },
    hero: {
      badge: 'సాంప్రదాయ వైదిక జ్యోతిష్యం మరియు దైవిక మార్గదర్శనం',
      title: 'మీ జీవిత సమస్యలకు',
      titleHighlight: 'జ్యోతిష్య మార్గదర్శనం',
      description: 'వ్యక్తిగత ఆందోళనలు, ప్రేమ మరియు వైవాహిక సంబంధాలు, ఉద్యోగం, ఆర్థిక స్థిరత్వం, వ్యాపారం, పిల్లల విద్య మరియు కుటుంబ శాంతికి ప్రాచీన వైదిక జ్యోతిష్య వెలుగులో ఆత్మీయ సలహాలు పొందండి.',
      whatsappPrimary: 'WhatsApp ద్వారా సంప్రదించండి',
      servicesSecondary: 'మా సేవలను చూడండి',
      callDirect: 'నేరుగా కాల్ చేయండి',
      confidential: 'పూర్తి గోప్యతా సంప్రదింపు',
      directComm: 'ఆత్మీయ సంభాషణ',
      vedicMethod: 'శాస్త్రోక్త వైదిక మార్గం',
      altarTitle: 'దైవజ్ఞ పండితులతో మాట్లాడండి',
      altarDesc: 'మీ జాతక చక్రం మరియు ప్రశ్నలకు శాస్త్రోక్త పరిష్కారం మరియు శుభ ముహూర్తాల మార్గదర్శనం.',
      quickContact: 'త్వరిత సంప్రదింపు కోసం',
      activeStatus: 'WhatsApp అందుబాటులో ఉంది',
      sendMessage: 'సందేశం పంపండి',
    },
    about: {
      tagline: 'సంప్రదాయం మరియు వారసత్వం',
      heading: 'ప్రాచీన వైదిక సంప్రదాయపు దివ్య మార్గదర్శనం',
      quote: 'కేరళ మరియు దక్షిణ కాశీ పురాతన ఆధ్యాత్మిక సంప్రదాయాలు, తరతరాల జ్ఞానం, హోమం మరియు యజ్ఞాల వంటి ధార్మిక ఆచారాల మార్గదర్శనం.',
      desc1: 'జ్యోతిష్య శాస్త్రం కేవలం భవిష్యత్తు చెప్పే సాధనం మాత్రమే కాదు; అది జీవితపు ఎత్తుపల్లాలలో సరైన మార్గం చూపే దివ్య జ్ఞానదీపం. పండిత్ సచిన్ శర్మ కేరళ తాంత్రిక పద్ధతులు మరియు దక్షిణ కాశీ వైదిక సంప్రదాయాల సారాన్ని అనుసరించి భక్తుల బాధలను వింటారు.',
      desc2: 'జాతక పరిశీలన, నవగ్రహ దోష నివారణ, వాస్తు సలహాలు మరియు ప్రాచీన శాస్త్రోక్త హోమ-హవనాల ద్వారా జీవితంలో సానుకూల శక్తిని నింపడానికి వారు ఆధ్యాత్మిక మార్గదర్శనం అందిస్తారు.',
      pillar1Title: 'శాస్త్రోక్త జాతక అధ్యయనం',
      pillar1Desc: 'జన్మ కుండలి, నవగ్రహ స్థితి మరియు దశా-భుక్తుల కచ్చితమైన విశ్లేషణ.',
      pillar2Title: 'హోమ & యజ్ఞ మార్గదర్శనం',
      pillar2Desc: 'దోష నివారణ మరియు గృహ శాంతి కోసం సాంప్రదాయ వైదిక ఆచారాలు.',
      pillar3Title: 'ఆత్మీయ & గోప్య సంప్రదింపు',
      pillar3Desc: 'మీ వ్యక్తిగత సమస్యలను పూర్తి గోప్యతతో మరియు గౌరవంతో వినడం జరుగుతుంది.',
      pillar4Title: 'సరళ నివారణ మార్గాలు',
      pillar4Desc: 'నిత్య జీవితంలో ఆచరించదగిన స్తోత్ర పఠనం, మంత్రాలు మరియు ప్రార్థనా పద్ధతులు.',
      whatsappChat: 'పండితులతో WhatsApp లో మాట్లాడండి',
      chartTitle: 'వైదిక జాతక చక్రం మరియు నవగ్రహ విశ్లేషణ',
      chartSubtitle: 'పండిత్ సచిన్ శర్మ మార్గదర్శక పీఠం',
    },
    servicesSection: {
      tagline: 'మా జ్యోతిష్య సేవలు',
      heading: 'జీవిత ముఖ్య సమస్యలకు ఆధ్యాత్మిక పరిష్కారాలు',
      subheading: 'పండిత్ సచిన్ శర్మ వారి మార్గదర్శనంలో ప్రతి సమస్యకూ శాస్త్రోక్త మరియు సాంప్రదాయ వైదిక నివారణలు లభిస్తాయి.',
      moreInfo: 'మరిన్ని వివరాలు',
      whatsappAsk: 'WhatsApp లో అడగండి',
      disclaimer: 'గమనిక: జ్యోతిష్య మరియు ఆధ్యాత్మిక ఆచారాలు ప్రాచీన నమ్మకాలు మరియు శాస్త్రోక్త పద్ధతులపై ఆధారపడి ఉంటాయి. భక్తులలో ఆత్మవిశ్వాసం, సానుకూల దృక్పథం పెంపొందించడమే వీటి ముఖ్య ఉద్దేశ్యం.',
      modalService: 'సేవ',
      modalClose: 'మూసివేయండి',
      traditionalAspectsTitle: 'శాస్త్రోక్త అంశాలు & పూజా విధానాలు:',
      modalWhatsappCta: 'WhatsApp లో సంప్రదించండి',
      modalCallCta: 'కాల్ చేయండి',
      items: [
        {
          id: 'lakshmi-vashikarana',
          number: '01',
          title: 'లక్ష్మీ వశీకరణ',
          subtitle: 'మహాలక్ష్మి కృప మరియు గృహ-వ్యాపార సమృద్ధి ఆచరణ',
          shortDescription: 'సాంప్రదాయ మహాలక్ష్మి పూజా విధానాలు, ధనవృద్ధి మంత్రాలు మరియు గృహంలో ధనాత్మక శక్తి ఆకర్షణకు ఆధ్యాత్మిక మార్గదర్శనం.',
          fullDescription: 'లక్ష్మీ వశీకరణ అనేది పురాతన వైదిక పద్ధతిలో మహాలక్ష్మి అనుగ్రహాన్ని పొందడానికి ఆచరించే శ్రేష్ఠమైన ఆధ్యాత్మిక విధానం. గృహంలో లేదా వ్యాపారంలో ఆర్థిక ఆటంకాలు ఎదురైనప్పుడు, శాస్త్రోక్త లక్ష్మీ యంత్ర పూజ, కనకధార మరియు శ్రీ సూక్త పఠనం ద్వారా ధనాత్మక శక్తిని ఆకర్షించడానికి పండితులు మార్గదర్శనం చేస్తారు.',
          traditionalAspects: [
            'శ్రీ సూక్త పఠనం మరియు కుంకుమార్చన మార్గదర్శనం',
            'గృహ మరియు వ్యాపార స్థలంలో వాస్తు లక్ష్మి ఆకర్షణ నియమాలు',
            'అనవసర ఖర్చులను తగ్గించి ధనాగమనాన్ని పెంచే ఆధ్యాత్మిక ఆలోచన',
            'ధన త్రయోదశి మరియు పూర్ణిమ ప్రత్యేక పూజా సంప్రదాయాలు'
          ],
          spiritualGuidance: 'ఆధ్యాత్మిక సాధనలు మరియు నిష్కల్మష భక్తి జీవితంలో సకల శుభాలను, ధన ధాన్యాలను సమకూరుస్తాయి.',
          whatsappMessage: 'నమస్కారం పండిత్ జీ, నాకు "లక్ష్మీ వశీకరణ" మరియు ఆర్థిక సమృద్ధి పూజా విధానం గురించి వివరాలు కావాలి.',
          iconName: 'Coins'
        },
        {
          id: 'jana-vashikarana',
          number: '02',
          title: 'జన వశీకరణ',
          subtitle: 'సమాజంలో గౌరవం, జనాదరణ మరియు సత్సంబంధాలు',
          shortDescription: 'సార్వజనిక జీవితం, కార్యక్షేత్రం లేదా కుటుంబంలో పరస్పర ప్రేమ, స్నేహం మరియు గౌరవాన్ని పొందేందుకు వైదిక పరిష్కారాలు.',
          fullDescription: 'జన వశీకరణ అనేది ప్రాచీన కాలం నుండి సమాజంలో సౌహార్దం, పరస్పర గౌరవం మరియు సత్సంబంధాలను పెంపొందించుకోవడానికి ఉపయోగించే సాత్విక ఆధ్యాత్మిక పద్ధతి. సహోద్యోగులు లేదా ఆప్తులతో మనస్పర్థలు వచ్చినప్పుడు మనశ్శాంతిని, వ్యక్తీకరణ ప్రభావాన్ని పెంచే ధార్మిక నియమాలపై పండితులు సలహాలు ఇస్తారు.',
          traditionalAspects: [
            'వాక్ శుద్ధి మరియు సాత్విక ఆకర్షణకు సంబంధించిన మంత్ర మార్గదర్శనం',
            'సమాజంలో అపవాదులు లేదా అపార్థాలను తొలగించే శాంతి పూజలు',
            'గౌరవప్రదమైన స్థానం కోసం సూర్యోపాసన పద్ధతులు',
            'సహనశీలత మరియు సౌమ్య ప్రవర్తనను పెంపొందించే ప్రార్థనలు'
          ],
          spiritualGuidance: 'ఇది ఇతరుల స్వేచ్ఛను హరించేది కాదు; వ్యక్తిలో సద్భావన మరియు ఆకర్షణీయమైన మంచి ప్రవర్తనను నింపే సాత్విక ప్రక్రియ.',
          whatsappMessage: 'నమస్కారం పండిత్ జీ, నాకు "జన వశీకరణ" మరియు సంబంధాల సామరస్య మార్గదర్శనం గురించి సమాచారం కావాలి.',
          iconName: 'Users'
        },
        {
          id: 'dhana-vashikarana',
          number: '03',
          title: 'ధన వశీకరణ',
          subtitle: 'ధనాగమన అడ్డంకుల నివారణ మరియు ఆర్థిక స్థిరత్వం',
          shortDescription: 'శ్రమకు తగిన ప్రతిఫలం లభించక డబ్బు నిలకడ లేనప్పుడు కుబేర యంత్ర పూజ మరియు ధన ప్రాప్తికి గ్రహదోష నివారణ.',
          fullDescription: 'ఎంత కష్టపడినా చేతిలో ధనం నిలవకపోవడం, రుణ భారం పెరగడం లేదా ఊహించని ఖర్చులు రావడం జాతకంలోని ద్వితీయ, ఏకాదశ భావాల దోషాల వల్ల కావచ్చు. కుబేర యంత్ర స్థాపన మరియు దక్షిణ కాశీ సంప్రదాయ హోమాల ద్వారా ఆర్థిక నిలకడ సాధించడానికి మార్గదర్శనం లభిస్తుంది.',
          traditionalAspects: [
            'కుబేర యంత్ర ఆరాధన మరియు తిజోరీ వాస్తు సలహాలు',
            'జాతకంలోని ధన స్థానం (2వ ఇల్లు) మరియు లాభ స్థానం (11వ ఇల్లు) విశ్లేషణ',
            'ధన నష్టాన్ని కలిగించే గ్రహ దోషాలకు శాంతి పూజ',
            'ఆదాయ వనరులను సద్వినియోగం చేసుకునే మనోస్థైర్యం'
          ],
          spiritualGuidance: 'ప్రామాణిక శ్రమకు దైవానుగ్రహం తోడైతేనే ఆర్థిక అభివృద్ధి శాశ్వతంగా ఉంటుంది.',
          whatsappMessage: 'నమస్కారం పండిత్ జీ, నాకు "ధన వశీకరణ" మరియు ఆర్థిక స్థిరత్వ పూజా మార్గాల గురించి మార్గదర్శనం కావాలి.',
          iconName: 'Gem'
        },
        {
          id: 'love-relationship-issues',
          number: '04',
          title: 'ప్రేమ & సంబంధాల సమస్యలు',
          subtitle: 'దాంపత్య సామరస్యం, ప్రేమ సంబంధాల సవాళ్లు మరియు కుటుంబ సర్దుబాటు',
          shortDescription: 'అపోహలు, మనస్పర్థలు, దాంపత్య కలహాలు లేదా మాంగళిక దోషాల నివారణకు జాతక అనుకూలత మరియు వైదిక నివారణలు.',
          fullDescription: 'జీవితంలో అతి ముఖ్యమైన ప్రేమ మరియు దాంపత్య బంధాలు శుక్రుడు, కుజుడు (కుజ దోషం) లేదా రాహు-కేతువుల ప్రభావంతో ఒడిదుడుకులకు లోనుకావచ్చు. అష్టకూట గుణమిలనం పునఃపరిశీలించి ఉమా-మహేశ్వర, రాధా-కృష్ణ పూజల ద్వారా బంధాలను బలోపేతం చేసే పరిష్కారాలను పండితులు సూచిస్తారు.',
          traditionalAspects: [
            'దంపతుల జాతక కూట అనుకూలత పునఃపరిశీలన',
            'కుజ దోషం లేదా శుక్ర దోష ప్రభావాలకు శాంతి పరిహారాలు',
            'దాంపత్యంలో మాధుర్యం కోసం గౌరీ పూజ మరియు ప్రార్థనలు',
            'కుటుంబ పెద్దలతో ఆత్మీయ అనుబంధాల పెంపునకు ఆధ్యాత్మిక మార్గాలు'
          ],
          spiritualGuidance: 'పరస్పర అవగాహన, ప్రేమ మరియు సహనంతో కూడిన ఆధ్యాత్మిక ఆచరణలు కుటుంబంలో చిరకాల శాంతిని నింపుతాయి.',
          whatsappMessage: 'నమస్కారం పండిత్ జీ, ప్రేమ మరియు దాంపత్య సంబంధాల సమస్యలపై నాకు జ్యోతిష్య సలహా కావాలి.',
          iconName: 'HeartHandshake'
        },
        {
          id: 'education-and-studies',
          number: '05',
          title: 'విద్య & విద్యాభ్యాస మార్గదర్శనం',
          subtitle: 'విద్యార్థులలో ఏకాగ్రత, జ్ఞాపకశక్తి మరియు ఉన్నత విద్యా యోగం',
          shortDescription: 'చదువుపై ఆసక్తి లేకపోవడం, పరీక్షల భయం, బుధ-గురు గ్రహాల బలవర్ధన మరియు సరస్వతి-హయగ్రీవ ఉపాసన.',
          fullDescription: 'విద్య అనేది ప్రతి ఒక్కరి భవిష్యత్తుకు పునాది. పరీక్షల సమయంలో భయం లేదా ఏకాగ్రత లోపంతో బాధపడే విద్యార్థులకు జాతకంలోని పంచమ స్థానాన్ని (విద్యా స్థానం) పరిశీలించి, మేధా దక్షిణామూర్తి, హయగ్రీవ మరియు సరస్వతీ స్తోత్రాల ద్వారా వారి బుద్ధి వికాసానికి మార్గదర్శనం చేయబడుతుంది.',
          traditionalAspects: [
            'విద్యార్థి జాతకంలో బుధ, గురు గ్రహాల బలవర్ధన పూజలు',
            'జ్ఞాపకశక్తిని పెంచే హయగ్రీవ మరియు సరస్వతీ పూజా విధానం',
            'ఉన్నత విద్య లేదా విదేశీ విద్యా యోగాల జాతక పరిశీలన',
            'పరీక్షల భయాన్ని పోగొట్టి ఆత్మవిశ్వాసం నింపే సానుకూల సలహాలు'
          ],
          spiritualGuidance: 'క్రమశిక్షణతో కూడిన అధ్యయనానికి భగవదారాధన తోడైతే విద్యార్థులకు ఉత్తమ విజయాలు లభిస్తాయి.',
          whatsappMessage: 'నమస్కారం పండిత్ జీ, నా పిల్లల చదువు మరియు విద్యాభ్యాసం గురించి జ్యోతిష్య మార్గదర్శనం కావాలి.',
          iconName: 'GraduationCap'
        },
        {
          id: 'job-and-career-guidance',
          number: '06',
          title: 'ఉద్యోగ & వృత్తి మార్గదర్శనం',
          subtitle: 'ఉద్యోగాన్వేషణ, ప్రమోషన్, బదిలీలు మరియు కెరీర్ పురోగతి',
          shortDescription: 'శని మహారాజు మరియు సూర్య భగవానుని అనుగ్రహంతో ఉద్యోగంలో స్థిరత్వం, ప్రమోషన్ అడ్డంకుల నివారణ.',
          fullDescription: 'వృత్తి జీవితంలో ఎంత శ్రమించినా గుర్తింపు రాకపోవడం, అకారణ బదిలీలు లేదా ఉద్యోగం లభించక నిరాశ చెందినప్పుడు, దశమ స్థానం (కర్మ స్థానం) మరియు శని గోచారాన్ని పరిశీలించి శని శాంతి, నవగ్రహార్చన మరియు అనుకూల సమయాల గురించి పండితులు స్పష్టమైన వివరణ ఇస్తారు.',
          traditionalAspects: [
            'కర్మ స్థానం (10వ ఇల్లు) మరియు దశా-భుక్తుల లోతైన విశ్లేషణ',
            'ఇంటర్వ్యూలలో విజయం కోసం మానసిక మరియు ఆధ్యాత్మిక సన్నద్ధత',
            'ప్రభుత్వ ఉద్యోగం లేదా ప్రైవేట్ కంపెనీలలో అవకాశాల పరిశీలన',
            'కార్యాలయంలో ఈర్ష్య మరియు వ్యతిరేకతల నివారణకు శాంతి'
          ],
          spiritualGuidance: 'సరైన సమయంలో సరైన నిర్ణయం మరియు దైవబలం కెరీర్‌లో ఉన్నత శిఖరాలను అధిరోహించడానికి సహాయపడతాయి.',
          whatsappMessage: 'నమస్కారం పండిత్ జీ, నాకు ఉద్యోగం మరియు కెరీర్ పురోగతికి సంబంధించి జ్యోతిష్య సలహా కావాలి.',
          iconName: 'Briefcase'
        },
        {
          id: 'financial-problems',
          number: '07',
          title: 'ఆర్థిక సమస్యలు & రుణ విముక్తి',
          subtitle: 'అప్పుల బాధలు, నిరంతర ధన నష్టం మరియు ఆర్థిక కష్టాలకు నివారణ',
          shortDescription: 'రుణవిమోచక అంగారక స్తోత్రం, సుబ్రహ్మణ్య ఆరాధన మరియు రుణాల నుండి బయటపడేందుకు శాస్త్రోక్త మార్గాలు.',
          fullDescription: 'ఆర్థిక సంక్షోభం మరియు రుణభారం కుటుంబ ప్రశాంతతను దెబ్బతీస్తాయి. జాతకంలోని షష్టమ (రుణం), ద్వాదశ (వ్యయం) భావాల దోషాలను విశ్లేషించి, రుణవిమోచక మంగళ పూజ మరియు లక్ష్మీ-నృసింహ కృపతో రుణాల నుండి విముక్తి పొందే ధార్మిక మార్గాలను సూచిస్తారు.',
          traditionalAspects: [
            'జాతకంలోని 6, 12వ ఇండ్ల గ్రహదోషాల నివారణా పూజలు',
            'రుణవిమోచక అంగారక పూజ మరియు సుబ్రహ్మణ్య హోమ మార్గదర్శనం',
            'ధన ప్రవాహాన్ని పెంచే గృహ వాస్తు సూచనలు',
            'ఆర్థిక క్రమశిక్షణ మరియు మనోధైర్యాన్ని పెంచే ఆధ్యాత్మిక బలం'
          ],
          spiritualGuidance: 'శాస్త్రోక్త పరిష్కారాలు క్లిష్ట సమయాల్లో ధైర్యాన్నిచ్చి, రుణ విముక్తికి నూతన మార్గాలను చూపుతాయి.',
          whatsappMessage: 'నమస్కారం పండిత్ జీ, ఆర్థిక సమస్యలు మరియు అప్పుల బాధల నివారణకు జ్యోతిష్య పరిష్కారం కావాలి.',
          iconName: 'Coins'
        },
        {
          id: 'enemy-troubles-spiritual-remedy',
          number: '08',
          title: 'శత్రు పీడ & దృష్టి దోష నివారణ',
          subtitle: 'దిష్టి దోషం, అసూయ, ప్రతికూల శక్తుల ప్రభావం మరియు రక్షా కవచం',
          shortDescription: 'అకారణ విరోధం, కోర్టు వివాదాలు మరియు నరదృష్టి నుండి రక్షణ పొందేందుకు సుదర్శన మరియు కాలభైరవ ఆరాధన.',
          fullDescription: 'మీరు జీవితంలో ఎదుగుతున్నప్పుడు ఇతరుల ఈర్ష్య, నరదృష్టి లేదా గుప్త శత్రువుల ప్రతికూల శక్తులు ఇబ్బంది కలిగించవచ్చు. కేరళ సాంప్రదాయ సుదర్శన హోమం, కాలభైరవ ఉపాసన మరియు నరసింహ కవచం ద్వారా కుటుంబానికి పవిత్రమైన రక్షణ కల్పించే మార్గాలను పండితులు తెలియజేస్తారు.',
          traditionalAspects: [
            'దృష్టి దోషం మరియు నకారాతక తరంగాల నివారణకు పరిష్కారాలు',
            'సుదర్శన చక్ర యంత్ర ఆరాధన మరియు రక్షా సూత్ర విధానం',
            'అనవసర వివాదాలు మరియు వ్యాజ్యాల నుండి ఉపశమన ప్రార్థనలు',
            'కుటుంబానికి అభయం చేకూర్చే కాలభైరవ ఆరాధన'
          ],
          spiritualGuidance: 'ధర్మ మార్గంలో నడిచే వారికి దైవరక్షణ ఎల్లప్పుడూ ఉంటుంది; రక్షా పూజలు గృహంలో శాంతిని నింపుతాయి.',
          whatsappMessage: 'నమస్కారం పండిత్ జీ, దృష్టి దోషం మరియు శత్రు బాధల నివారణకు నాకు ఆధ్యాత్మిక మార్గదర్శనం కావాలి.',
          iconName: 'ShieldAlert'
        },
        {
          id: 'business-problems',
          number: '09',
          title: 'వ్యాపార సమస్యలు',
          subtitle: 'వ్యాపారంలో మందగమనం, రాబడి తగ్గడం మరియు భాగస్వామ్య సవాళ్లు',
          shortDescription: 'వ్యాపార వృద్ధి యంత్రం, వాస్తు దోష నివారణ మరియు నూతన ఒప్పందాలకు శుభ ముహూర్తాల నిర్ణయం.',
          fullDescription: 'పెట్టుబడి పెట్టిన ధనం తిరిగి రాకపోవడం, కొనుగోలుదారులు తగ్గడం లేదా భాగస్వాముల మధ్య వివాదాలు ఏర్పడినప్పుడు, జాతకంలోని సప్తమ స్థానం (వ్యాపార స్థానం) మరియు బుధ గ్రహ ప్రభావాన్ని పరిశీలించి వ్యాపార వృద్ధి మహాయంత్రం మరియు గణపతి ఆరాధనలను సూచిస్తారు.',
          traditionalAspects: [
            'వ్యాపార సంస్థ ప్రధాన ద్వారం మరియు గల్లా పెట్టె వాస్తు పరిశీలన',
            'వ్యాపార వృద్ధి మహాయంత్ర నిత్య పూజా విధివిధానాలు',
            'భాగస్వాముల జాతక పొంతన మరియు సయోధ్య మార్గాలు',
            'నూతన ప్రాజెక్టులకు అనుకూలమైన గ్రహచార ముహూర్తాల నిర్ణయం'
          ],
          spiritualGuidance: 'వ్యాపార ధర్మానికి దైవానుగ్రహం తోడైతే వ్యాపారంలో శాశ్వత పురోగతి సాధ్యమవుతుంది.',
          whatsappMessage: 'నమస్కారం పండిత్ జీ, నా వ్యాపార సమస్యల నివారణకు జ్యోతిష్య సలహా కావాలి.',
          iconName: 'Building2'
        },
        {
          id: 'financial-loss-guidance',
          number: '10',
          title: 'ఆర్థిక నష్టం నుండి కోలుకునే మార్గదర్శనం',
          subtitle: 'షేర్ మార్కెట్, పెట్టుబడులు లేదా వ్యాపారంలో ఆకస్మిక నష్టాల విశ్లేషణ',
          shortDescription: 'రాహు-కేతువుల ప్రభావం, ఆకస్మిక ధన నష్ట నివారణకు నవగ్రహ శాంతి మరియు ఆర్థిక పునరుజ్జీవనం.',
          fullDescription: 'కొన్నిసార్లు ఊహించని పెద్ద ఆర్థిక నష్టాలు సంభవిస్తాయి. పెట్టుబడులలో మోసపోవడం లేదా సంపద హరించుకుపోవడం రాహు-కేతువుల లేదా శని దశల ప్రతికూలత వల్ల కావచ్చు. హతాశ చెందకుండా నవగ్రహ శాంతి హోమాలు మరియు దానధర్మాల ద్వారా సమస్యల తీవ్రతను తగ్గించవచ్చు.',
          traditionalAspects: [
            'ఆకస్మిక నష్టానికి కారణమైన గ్రహాల కూలంకష పరిశీలన',
            'నవగ్రహ శాంతి హోమం మరియు నవధాన్య దాన సంప్రదాయాలు',
            'భవిష్యత్తు పెట్టుబడులకు జాతకానుసార శుభ సమయాల సమాచారం',
            'కోల్పోయిన ఆత్మవిశ్వాసాన్ని తిరిగి పొందే మనోధైర్యం'
          ],
          spiritualGuidance: 'కాలచక్రంలో ఎత్తుపల్లాలు సహజం; గ్రహశాంతి మరియు సత్కర్మలు ఆపదల నుండి రక్షిస్తాయి.',
          whatsappMessage: 'నమస్కారం పండిత్ జీ, ఆకస్మిక ఆర్థిక నష్టాల నివారణకు జ్యోతిష్య సలహా కావాలి.',
          iconName: 'TrendingDown'
        },
        {
          id: 'domestic-discord-and-family-peace',
          number: '11',
          title: 'గృహంలో అశాంతి & కుటుంబ సమస్యలు',
          subtitle: 'గృహ కలహాలు, అశాంతి, పిల్లల ప్రవర్తన మరియు వాస్తు దోష నివారణ',
          shortDescription: 'కుటుంబ సభ్యుల మధ్య సామరస్యం లోపించినప్పుడు సత్యనారాయణ వ్రతం, వాస్తు శాంతి మరియు పితృ శాంతి పూజలు.',
          fullDescription: 'ఇంటికి రాగానే చికాకు, కలహాలు లేదా మనశ్శాంతి లేకపోవడం వాస్తు దోషం, పితృ దోషం లేదా కులదేవత ప్రార్థన లోపం వల్ల కావచ్చు. సత్యనారాయణ పూజ, వాస్తు శాంతి మరియు నవగ్రహ దీపారాధన ద్వారా గృహంలో ఆనందం, ప్రశాంతతలను పునరుద్ధరించవచ్చు.',
          traditionalAspects: [
            'గృహ వాస్తు మరియు ఈశాన్య-నైరుతి దిశల శక్తి సమతుల్యత',
            'కులదేవతా ఆరాధన మరియు పితృ దోష నివారణ సలహాలు',
            'శాంతియుత వాతావరణం కోసం నవగ్రహ దీపారాధన',
            'కుటుంబ సభ్యుల మధ్య పరస్పర ప్రేమ, విశ్వాసాల పెంపు'
          ],
          spiritualGuidance: 'పవిత్ర మంత్రోచ్ఛారణలు మరియు శాంతి పూజలు ఇంటిలోని నకారాత్మకతను తొలగించి శాంతిని నింపుతాయి.',
          whatsappMessage: 'నమస్కారం పండిత్ జీ, గృహంలో అశాంతి మరియు కుటుంబ సమస్యల నివారణకు మార్గదర్శనం కావాలి.',
          iconName: 'Home'
        },
        {
          id: 'homa-and-yajna-guidance',
          number: '12',
          title: 'హోమం & యజ్ఞాల మార్గదర్శనం',
          subtitle: 'గణపతి, నవగ్రహ, మృత్యుంజయ, చండికా మరియు సుదర్శన హోమాలు',
          shortDescription: 'వైదిక మంత్రాలతో కూడిన పవిత్ర యజ్ఞ-యాగాదుల ప్రాముఖ్యత, సంకల్ప విధి మరియు దోష పరిహార వివరాలు.',
          fullDescription: 'సనాతన ధర్మంలో హోమ-యజ్ఞాలకు అగ్రతాంబూలం ఉంది. అగ్నిదేవుని ముఖంగా దేవతలకు సమర్పించే హవిస్సు సమస్త దోషాలను భస్మం చేసి శుభాలను కలిగిస్తుంది. గణపతి హోమం, నవగ్రహ హోమం, మహామృత్యుంజయ హవనం తదితర క్రతువులపై పండితులు సశాస్త్రీయ మార్గదర్శనం చేస్తారు.',
          traditionalAspects: [
            'కార్యసిద్ధి కోసం శాస్త్రోక్త మహాగణపతి హోమ విధానం',
            'ఆరోగ్యం మరియు దీర్ఘాయుష్షు కోసం మహామృత్యుంజయ హవనం',
            'గ్రహదోష నివారణకు నవగ్రహ శాంతి యజ్ఞం',
            'సంకల్పం, మంత్ర సంస్కారం మరియు పవిత్ర హవిస్సు సమర్పణ'
          ],
          spiritualGuidance: 'అగ్ని సాక్షిగా నిర్వహించే పవిత్ర హోమాలు మనస్సును, శరీరాన్ని మరియు పరిసరాలను శుద్ధి చేస్తాయి.',
          whatsappMessage: 'నమస్కారం పండిత్ జీ, నాకు హోమాలు మరియు యజ్ఞాల శాస్త్రోక్త విధానం గురించి సమాచారం కావాలి.',
          iconName: 'Flame'
        }
      ]
    },
    howItWorks: {
      tagline: 'సరళ సంప్రదింపు విధానం',
      heading: 'జ్యోతిష్య సంప్రదింపు పొందడం ఎలా?',
      subheading: 'మూడు సులభమైన దశలలో పండితుల నుండి ఆత్మీయ మరియు గోప్యతా మార్గదర్శనం పొందండి.',
      step1Title: 'మీ సమస్య గురించి సంప్రదించండి',
      step1Desc: 'WhatsApp లేదా ఫోన్ కాల్ ద్వారా నేరుగా పండిత్ సచిన్ శర్మ వారిని సంప్రదించి ప్రాథమిక సమాచారం తెలియజేయండి.',
      step2Title: 'జన్మ వివరాలు పంచుకుని మార్గదర్శనం పొందండి',
      step2Desc: 'మీ జన్మ తేదీ, సమయం, పుట్టిన ప్రదేశం లేదా ప్రశ్నలను తెలియజేసి శాస్త్రోక్త జ్యోతిష్య విశ్లేషణను పొందండి.',
      step3Title: 'తగిన ఆధ్యాత్మిక ఆచారాలను తెలుసుకోండి',
      step3Desc: 'మీ గ్రహగతికి అనుగుణంగా నవగ్రహ శాంతి, హోమాలు లేదా సులభమైన ప్రార్థనా నియమాల మార్గదర్శనం తీసుకోండి.',
      ctaButton: 'ఇప్పుడే WhatsApp లో సంప్రదించండి',
    },
    whyChooseUs: {
      tagline: 'విశ్వసనీయత',
      heading: 'మమ్మల్ని ఎందుకు సంప్రదించాలి?',
      subheading: 'సాంప్రదాయ వైదిక నియమాలు మరియు భక్తుల క్షేమమే మా ప్రథమ ప్రాధాన్యత.',
      card1Title: 'వ్యక్తిగత సమస్యలను ఓపికగా వినడం',
      card1Desc: 'ప్రతి ఒక్కరి కష్టాలను పూర్తి సహనం, గౌరవం మరియు గోప్యతతో విని మనశ్శాంతికి మార్గం చూపుతాము.',
      card2Title: 'ఆత్మీయ సంభాషణ',
      card2Desc: 'ఎటువంటి గందరగోళం లేకుండా తేలికగా అర్థమయ్యే రీతిలో జాతక ఫలితాలు మరియు నివారణలను వివరిస్తాము.',
      card3Title: 'ప్రాచీన వైదిక సంప్రదాయం',
      card3Desc: 'దక్షిణ భారతీయ మరియు కేరళ వైదిక సంప్రదాయబద్ధమైన నవగ్రహ శాంతి, హోమ విధానాలు అనుసరిస్తాము.',
      card4Title: 'సులభమైన WhatsApp సదుపాయం',
      card4Desc: 'ఎలాంటి అసౌకర్యం లేకుండా మీ అనుకూల సమయంలో WhatsApp ద్వారా నేరుగా సంప్రదించే అవకాశం.',
      badge: 'శాస్త్రోక్త విశ్వసనీయత',
    },
    rituals: {
      tagline: 'వైదిక ధార్మిక ఆచారాలు',
      heading: 'హోమం మరియు యజ్ఞ పద్ధతుల మార్గదర్శనం',
      subheading: 'అగ్ని దేవుని ద్వారా దేవతలకు హవిస్సు సమర్పించి గ్రహదోషాలను శాంతింపజేసే పురాతన సంప్రదాయం.',
      altarTitle: 'శాస్త్రోక్త యజ్ఞ సంకల్పం',
      altarDesc: 'ఏ పూజ లేదా హోమం నిర్వహించే ముందైనా శుభ ముహూర్తం, సంకల్ప విధి మరియు పూజా సామగ్రి గురించి సంప్రదించండి.',
      items: [
        { name: 'మహాగణపతి హోమం', purpose: 'నూతన వ్యాపారం, గృహప్రవేశం లేదా నూతన కార్యాలలో విఘ్నాలు తొలగి సర్వసిద్ధి కలగడానికి.' },
        { name: 'నవగ్రహ శాంతి యజ్ఞం', purpose: 'జాతకంలోని గ్రహాల అశుభ ప్రభావాన్ని శమింపజేసి ఆయురారోగ్య, ఐశ్వర్య వృద్ధి కోసం.' },
        { name: 'మహామృత్యుంజయ హవనం', purpose: 'దీర్ఘకాలిక అనారోగ్యం, అకాల భయం మరియు సంకటాల నుండి విముక్తి కోసం రుద్ర ప్రార్థన.' },
        { name: 'సుదర్శన హోమం', purpose: 'దిష్టి దోషం, శత్రుపీడ మరియు గృహంలోని ప్రతికూల శక్తుల నివారణకు దివ్య సుదర్శన ఆరాధన.' },
      ],
      ctaButton: 'హోమాల గురించి WhatsApp లో అడగండి',
    },
    faq: {
      tagline: 'సాధారణ ప్రశ్నోత్తరాలు',
      heading: 'జ్యోతిష్య సంప్రదింపు గురించి మీ సందేహాలు',
      subheading: 'సంప్రదించే విధానం మరియు సేవల గురించిన సాధారణ సందేహాలకు స్పష్టమైన సమాధానాలు.',
      moreQuestions: 'ఇంకా సందేహాలు ఉన్నాయా?',
      moreQuestionsDesc: 'మీ ఏదైనా నిర్దిష్ట ప్రశ్న కోసం WhatsApp ద్వారా నేరుగా పండితులను సంప్రదించండి.',
      askButton: 'WhatsApp లో ప్రశ్న అడగండి',
      items: [
        {
          id: 'faq-1',
          question: 'జ్యోతిష్య సంప్రదింపు పొందడానికి ఎలా సంప్రదించాలి?',
          answer: 'మీరు నేరుగా 8151816172 కు కాల్ చేయవచ్చు లేదా వెబ్‌సైట్‌లోని WhatsApp బటన్ క్లిక్ చేసి పండిత్ సచిన్ శర్మ వారితో సంభాషణ ప్రారంభించవచ్చు.'
        },
        {
          id: 'faq-2',
          question: 'WhatsApp ద్వారా నా సమస్యను తెలియజేయవచ్చా?',
          answer: 'తప్పకుండా. మీ పేరు, పుట్టిన తేదీ, సమయం, పుట్టిన ఊరు మరియు మీ సమస్యను క్లుప్తంగా WhatsApp (8151816172) కు పంపవచ్చు.'
        },
        {
          id: 'faq-3',
          question: 'ఎలాంటి విషయాలపై సంప్రదించవచ్చు?',
          answer: 'వ్యక్తిగత జీవితం, దాంపత్యం, ఉద్యోగం, వ్యాపారం, అప్పుల బాధలు, పిల్లల చదువు, కుటుంబ అశాంతి మరియు గ్రహదోష నివారణపై సంప్రదించవచ్చు.'
        },
        {
          id: 'faq-4',
          question: 'హోమాలు మరియు యజ్ఞాల గురించి వివరాలు లభిస్తాయా?',
          answer: 'అవును. గణపతి హోమం, నవగ్రహ శాంతి, మృత్యుంజయ హవనం, సుదర్శన హోమం తదితర వైదిక పూజల విశిష్టత మరియు ముహూర్త సమాచారం అందించబడుతుంది.'
        },
        {
          id: 'faq-5',
          question: 'సంప్రదింపునకు ముందస్తు సమయం తీసుకోవాలా?',
          answer: 'అవును, పండితులు పూజలలో లేదా ఇతర సంప్రదింపులలో ఉండవచ్చు కాబట్టి, WhatsApp ద్వారా ముందే సమయం ఖరారు చేసుకోవడం మంచిది.'
        },
        {
          id: 'faq-6',
          question: 'సంప్రదింపు రుసుము గురించి ఎలా తెలుసుకోవాలి?',
          answer: 'ప్రతి ఒక్కరి సమస్య మరియు జాతక విశ్లేషణ స్వభావం వేర్వేరుగా ఉంటుంది కాబట్టి, ఖచ్చితమైన వివరాలకు WhatsApp (8151816172) లేదా కాల్ ద్వారా నేరుగా తెలుసుకోవచ్చు.'
        }
      ]
    },
    contact: {
      tagline: 'సంప్రదించండి',
      heading: 'పండితుల సంప్రదింపు వివరాలు',
      subheading: 'నేరుగా కాల్ చేయండి లేదా WhatsApp ద్వారా సందేశం పంపి సంప్రదింపు ప్రారంభించండి.',
      boxPhoneTitle: 'హెల్ప్‌లైన్ నంబర్ (Phone & WhatsApp)',
      boxPhoneDesc: 'WhatsApp సంప్రదింపు అందుబాటులో ఉంది',
      whatsappButton: 'WhatsApp లో సందేశం పంపండి',
      callButton: 'నేరుగా కాల్ చేయండి',
      formTitle: 'సందేశం లేదా జాతక వివరాలు పంపండి',
      formSubtitle: 'మీ వివరాలను నమోదు చేసి నేరుగా WhatsApp ద్వారా పండితుల మొబైల్‌కు పంపండి.',
      labelName: 'మీ పూర్తి పేరు *',
      placeholderName: 'ఉదా: రమేష్ కుమార్',
      labelPhone: 'మీ మొబైల్ నంబర్ *',
      placeholderPhone: 'ఉదా: 98XXXXXXXX',
      labelMessage: 'మీ సమస్య / ప్రశ్న లేదా జన్మ వివరాలు *',
      placeholderMessage: 'మీ సమస్య, పుట్టిన తేదీ లేదా సందేహాలను ఇక్కడ రాయండి...',
      submitButton: 'WhatsApp ద్వారా వివరాలు పంపండి',
      privacyNote: 'మీ గోప్యత పదిలం. మీ వివరాలు నేరుగా పండితులతో మాత్రమే పంచుకోబడతాయి.',
      errName: 'దయచేసి మీ పేరు నమోదు చేయండి.',
      errPhone: 'దయచేసి 10 అంకెల సరైన మొబైల్ నంబర్ నమోదు చేయండి.',
      errMessage: 'దయచేసి మీ సందేశం లేదా ప్రశ్న రాయండి.',
      successMessage: 'వివరాలు సిద్ధమయ్యాయి. WhatsApp తెరవబడుతోంది...',
    },
    footer: {
      desc: 'కేరళ మరియు దక్షిణ కాశీ పురాతన ఆధ్యాత్మిక సంప్రదాయాలు, తరతరాల జ్ఞానం, హోమం మరియు యజ్ఞాల వంటి ధార్మిక ఆచారాల మార్గదర్శనం.',
      quickLinks: 'ముఖ్య లింకులు',
      servicesTitle: 'జ్యోతిష్య సేవలు',
      otherServices: 'ఇతర మార్గదర్శనాలు',
      disclaimerTitle: 'ధార్మిక ప్రకటన & నిష్కృతి (Disclaimer):',
      disclaimerText: 'ఈ వెబ్‌సైట్‌లోని జ్యోతిష్య, జాతక మరియు ధార్మిక వివరాలు సనాతన సంప్రదాయాలు మరియు నమ్మకాలపై ఆధారపడి ఉన్నాయి. ఇది భక్తులకు ఆత్మస్థైర్యం మరియు సన్మార్గం చూపే ఉద్దేశ్యంతో కూడినది; ఎటువంటి శాస్త్రీయ గ్యారెంటీని ప్రకటించదు.',
      copyright: 'ఆస్ట్రో కన్నడ. సర్వ హక్కులు ప్రత్యేకించబడ్డాయి.',
      privacyPolicy: 'గోప్యతా విధానం (Privacy Policy)',
      termsConditions: 'నిబంధనలు & షరతులు (Terms)',
      backToTop: 'పైకి వెళ్లండి',
    },
    popup: {
      heading: 'జ్యోతిష్య మార్గదర్శనం కావాలా?',
      subtext: 'మీ ప్రశ్నలను నేరుగా WhatsApp ద్వారా పంచుకోండి.',
      button: 'WhatsApp లో చాట్ చేయండి',
      closeLabel: 'మూసివేయండి',
    },
    floating: {
      label: 'WhatsApp చాట్',
    },
  },
};

