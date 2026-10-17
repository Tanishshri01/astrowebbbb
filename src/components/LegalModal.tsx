import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#4A050D] border-2 border-[#FACC15] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#FFFBEB] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.9), 0 0 25px rgba(250, 204, 21, 0.35)',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#FACC15] hover:text-[#FFFFFF] hover:bg-[#7A0C16] rounded-full transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#FACC15]"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#7A0C16] border border-[#FACC15] flex items-center justify-center text-[#FACC15] shadow-sm">
            {isPrivacy ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
          </div>
          <div>
            <h3 id="legal-modal-title" className="text-xl font-black text-[#FEF08A]">
              {isPrivacy ? t.footer.privacyPolicy : t.footer.termsConditions}
            </h3>
            <div className="text-xs text-[#FACC15] font-bold">
              {t.brand.name}
            </div>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#FFFBEB]/90 leading-relaxed border-t border-b border-[#FACC15]/30 py-4 max-h-[60vh] overflow-y-auto">
          {language === 'kn' ? (
            isPrivacy ? (
              <>
                <p>
                  <strong>೧. ಮಾಹಿತಿ ಸಂಗ್ರಹ:</strong> ಭಕ್ತರು ಸಮಾಲೋಚನೆಗಾಗಿ ಸ್ವಯಂಪ್ರೇರಿತರಾಗಿ ಒದಗಿಸುವ ಹೆಸರು, ಮೊಬೈಲ್ ಸಂಖ್ಯೆ, ಜನನ ದಿನಾಂಕ, ಸಮಯ ಹಾಗೂ ಜಾತಕ ವಿವರಗಳನ್ನು ಕೇವಲ ಜ್ಯೋತಿಷ್ಯ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಸಮಾಲೋಚನೆಗೆ ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ.
                </p>
                <p>
                  <strong>೨. ಗೌಪ್ಯತೆ ಸಂರಕ್ಷಣೆ:</strong> ನಿಮ್ಮ ಯಾವುದೇ ವೈಯಕ್ತಿಕ ವಿವರಗಳು, ಕುಟುಂಬದ ಹಿನ್ನೆಲೆ ಅಥವಾ ಪ್ರಶ್ನೆಗಳನ್ನು ಯಾವುದೇ ಮೂರನೇ ವ್ಯಕ್ತಿಗೆ ಅಥವಾ ಕಂಪನಿಗೆ ಮಾರಾಟ ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ಹಂಚಿಕೊಳ್ಳುವುದಿಲ್ಲ.
                </p>
                <p>
                  <strong>೩. WhatsApp ಸಂವಹನ:</strong> WhatsApp ಮೂಲಕ ಕಳುಹಿಸಲಾದ ಸಂಭಾಷಣೆಗಳು WhatsApp ನ ಎಂಡ್-ಟು-ಎಂಡ್ ಎನ್‌ಕ್ರಿಪ್ಶನ್ ನೀತಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತವೆ.
                </p>
                <p>
                  <strong>೪. ಭದ್ರತೆ:</strong> ಭಕ್ತರ ನಂಬಿಕೆ ಮತ್ತು ಗೌಪ್ಯತೆಯನ್ನು ಕಾಪಾಡುವುದು ನಮ್ಮ ಪ್ರಮುಖ ಕರ್ತವ್ಯವಾಗಿದೆ.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>೧. ಸಾಂಪ್ರದಾಯಿಕ ನಂಬಿಕೆಗಳ ಆಧಾರ:</strong> ಈ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಒದಗಿಸಲಾದ ಜ್ಯೋತಿಷ್ಯ, ಜಾತಕ ಮತ್ತು ಧಾರ್ಮಿಕ ಪೂಜಾ ಮಾರ್ಗದರ್ಶನಗಳು ಪ್ರಾಚೀನ ಭಾರತೀಯ ವೈದಿಕ ಸಂಪ್ರದಾಯಗಳು ಮತ್ತು ಧಾರ್ಮಿಕ ನಂಬಿಕೆಗಳನ್ನು ಆಧರಿಸಿವೆ.
                </p>
                <p>
                  <strong>೨. ಯಾವುದೇ ಫಲಿತಾಂಶದ ಖಾತರಿಯಿಲ್ಲ (Disclaimer):</strong> ಜ್ಯೋತಿಷ್ಯ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನಗಳು ವೈಯಕ್ತಿಕ ನಂಬಿಕೆಗೆ ಸಂಬಂಧಿಸಿದ್ದಾಗಿದ್ದು, ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಫಲಿತಾಂಶವನ್ನು ವೈಜ್ಞಾನಿಕವಾಗಿ ಖಚಿತಪಡಿಸುವುದಿಲ್ಲ.
                </p>
                <p>
                  <strong>೩. ವೈದ್ಯಕೀಯ ಮತ್ತು ಕಾನೂನು ಸಲಹೆಯಲ್ಲ:</strong> ಗಂಭೀರ ಅನಾರೋಗ್ಯ, ವೈದ್ಯಕೀಯ ತುರ್ತುಸ್ಥಿತಿ ಅಥವಾ ಕಾನೂನು ವ್ಯಾಜ್ಯಗಳಲ್ಲಿ ಅಧಿಕೃತ ವೈದ್ಯರು ಅಥವಾ ವಕೀಲರ ವೃತ್ತಿಪರ ಸಲಹೆ ಪಡೆಯುವುದು ಅಗತ್ಯ.
                </p>
              </>
            )
          ) : language === 'te' ? (
            isPrivacy ? (
              <>
                <p>
                  <strong>1. సమాచార సేకరణ:</strong> భక్తులు సంప్రదింపుల కోసం స్వచ్ఛందంగా అందించే పేరు, మొబైల్ నంబర్, పుట్టిన తేదీ, సమయం మరియు జాతక వివరాలు కేవలం జ్యోతిష్య విశ్లేషణకు మాత్రమే ఉపయోగించబడతాయి.
                </p>
                <p>
                  <strong>2. పూర్తి గోప్యత:</strong> మీ వ్యక్తిగత వివరాలు, కుటుంబ నేపథ్యం లేదా ప్రశ్నలను ఏ ఇతర మూడవ వ్యక్తికి లేదా సంస్థకు పంచుకోవడం జరగదు.
                </p>
                <p>
                  <strong>3. WhatsApp సంభాషణ:</strong> WhatsApp ద్వారా పంపబడే సందేశాలు WhatsApp యొక్క ఎండ్-టు-ఎండ్ ఎన్‌క్రిప్షన్ విధానానికి లోబడి ఉంటాయి.
                </p>
                <p>
                  <strong>4. విశ్వసనీయత:</strong> భక్తుల నమ్మకం మరియు గోప్యతను కాపాడటమే మా ప్రధాన ప్రాధాన్యత.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>1. సనాతన సంప్రదాయాల ఆధారం:</strong> ఈ వెబ్‌సైట్‌లో అందించిన జ్యోతిష్య, జాతక మరియు ధార్మిక పూజా మార్గదర్శనాలు ప్రాచీన వైదిక సంప్రదాయాలు మరియు విశ్వాసాలపై ఆధారపడి ఉంటాయి.
                </p>
                <p>
                  <strong>2. ఫలితాల ప్రకటన & నిష్కృతి:</strong> జ్యోతిష్య మార్గదర్శనం మానసిక స్థైర్యం మరియు సన్మార్గం కోసం ఉద్దేశించినది; ఎటువంటి అద్భుతాలు లేదా నిర్దిష్ట ఫలితాలకు శాస్త్రీయ గ్యారెంటీ ప్రకటించదు.
                </p>
                <p>
                  <strong>3. వైద్య లేదా న్యాయ సలహా కాదు:</strong> తీవ్రమైన అనారోగ్యం లేదా న్యాయపరమైన వివాదాల్లో సంబంధిత అర్హత కలిగిన వైద్యులు మరియు న్యాయవాదుల సలహా తీసుకోవడం అవసరం.
                </p>
              </>
            )
          ) : language === 'hi' ? (
            isPrivacy ? (
              <>
                <p>
                  <strong>१. सूचना संग्रह:</strong> भक्तों द्वारा परामर्श हेतु स्वेच्छा से प्रदान किया गया नाम, मोबाइल नंबर, जन्म तिथि एवं जन्म विवरण केवल कुंडली परीक्षण हेतु ही उपयोग किया जाता है।
                </p>
                <p>
                  <strong>२. पूर्ण गोपनीयता:</strong> आपकी कोई भी व्यक्तिगत जानकारी किसी भी तीसरे पक्ष के साथ साझा या विक्रय नहीं की जाती।
                </p>
                <p>
                  <strong>३. WhatsApp संवाद:</strong> WhatsApp के माध्यम से भेजे गए संदेश WhatsApp की एंड-टू-एंड एन्क्रिप्शन नीति के अधीन हैं।
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>१. पारंपरिक आस्था का आधार:</strong> इस वेबसाइट पर प्रदान किया गया ज्योतिषीय मार्गदर्शन सनातन वैदिक परंपरा एवं आस्था पर आधारित है।
                </p>
                <p>
                  <strong>२. धार्मिक अस्वीकरण:</strong> ज्योतिषीय परामर्श आत्मबल व सकारात्मक मार्गदर्शन हेतु है, किसी प्रकार के चमत्कार या निश्चित परिणाम का वैज्ञानिक दावा नहीं करता।
                </p>
                <p>
                  <strong>३. पेशेवर विकल्प नहीं:</strong> गंभीर बीमारी या कानूनी मामलों में संबंधित चिकित्सकों व अधिवक्ताओं की सलाह आवश्यक है।
                </p>
              </>
            )
          ) : (
            isPrivacy ? (
              <>
                <p>
                  <strong>1. Data Collection:</strong> Details provided voluntarily (such as name, phone, birth date, time, and queries) are strictly used for astrological review.
                </p>
                <p>
                  <strong>2. Privacy Assurance:</strong> We never sell, share, or disclose client information to third parties.
                </p>
                <p>
                  <strong>3. Communication Security:</strong> Inquiries over WhatsApp operate under WhatsApp's standard end-to-end encryption.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>1. Scriptural & Faith-based:</strong> Astrological consultations reflect traditional Vedic principles and personal spiritual faith.
                </p>
                <p>
                  <strong>2. No Guaranteed Outcomes:</strong> Guidance is designed to offer moral fortitude and clarity, and makes no scientific guarantee of specific outcomes.
                </p>
                <p>
                  <strong>3. Not Medical/Legal Advice:</strong> Astrology is not a substitute for qualified professional medical or legal counsel.
                </p>
              </>
            )
          )}
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="py-2 px-5 text-xs font-black text-[#4A050D] bg-gradient-to-r from-[#FEF08A] to-[#FACC15] hover:brightness-110 rounded-lg transition-colors cursor-pointer border border-[#FEF08A]"
          >
            {language === 'kn'
              ? 'ಸರಿ, ಅರ್ಥವಾಯಿತು'
              : language === 'te'
              ? 'సరే, అర్థమైంది'
              : language === 'hi'
              ? 'ठीक है'
              : 'Understood'}
          </button>
        </div>

      </div>
    </div>
  );
};
