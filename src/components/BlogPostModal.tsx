import React, { useEffect } from 'react';
import { X, Calendar, Clock, User, Share2, MessageCircle, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface BlogPostModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  const handleShareWhatsApp = () => {
    let contactNotice = 'ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸಿ: 8151816172';
    if (language === 'te') {
      contactNotice = 'జ్యోతిష్య మార్గదర్శనం కోసం సంప్రదించండి: 8151816172';
    } else if (language === 'hi') {
      contactNotice = 'ज्योतिष परामर्श हेतु संपर्क करें: 8151816172';
    } else if (language === 'en') {
      contactNotice = 'Contact for Vedic Astrology Guidance: 8151816172';
    }
    const shareText = `*${post.title}*\n${post.excerpt}\n\n${contactNotice}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank', 'noopener,noreferrer');
  };

  const getArticleWhatsappMessage = () => {
    if (language === 'te') {
      return `నమస్కారం పండిత్ జీ, నేను మీ "${post.title}" వ్యాసం చదివాను. దీని గురించి నాకు జ్యోతిష్య మార్గదర్శనం కావాలి.`;
    }
    if (language === 'hi') {
      return `नमस्ते पंडित जी, मैंने आपका "${post.title}" लेख पढ़ा। इसके संबंध में मुझे परामर्श चाहिए।`;
    }
    if (language === 'en') {
      return `Hello Pandit Ji, I read your article "${post.title}". I would like spiritual guidance regarding this.`;
    }
    return `ನಮಸ್ಕಾರ ಪಂಡಿತರೇ, ನಾನು ನಿಮ್ಮ "${post.title}" ಲೇಖನವನ್ನು ಓದಿದೆ. ಇದರ ಕುರಿತು ಮಾರ್ಗದರ್ಶನ ಬೇಕಾಗಿದೆ.`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-blog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#3E060E] border-2 border-[#FACC15] rounded-2xl shadow-2xl p-6 sm:p-10 text-[#FFFBEB] overflow-hidden my-8"
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
          className="absolute top-4 right-4 p-2 text-[#FACC15] hover:text-[#FFFFFF] hover:bg-[#7A0C16] rounded-full transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#FACC15] cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Back Link */}
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FACC15] hover:text-[#FFFFFF] transition-colors mb-4 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>
            {language === 'kn'
              ? 'ಎಲ್ಲಾ ಲೇಖನಗಳು'
              : language === 'te'
              ? 'అన్ని వ్యాసాలు'
              : language === 'hi'
              ? 'सभी लेख'
              : 'Back to Articles'}
          </span>
        </button>

        {/* Metadata: Unboxed text with typographic separators */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#FEF08A] font-semibold mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>{post.publishedAt}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>{post.readTime}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>{post.author}</span>
          </span>
        </div>

        {/* Article Headline */}
        <h2 id="modal-blog-title" className="text-xl sm:text-2xl md:text-3xl font-black text-[#FFFBEB] leading-snug mb-4">
          {post.title}
        </h2>

        {/* Excerpt Lead */}
        <div className="p-4 rounded-xl bg-[#2D040A] border-l-4 border-[#FACC15] text-sm sm:text-base text-[#FEF08A] font-medium leading-relaxed mb-6">
          {post.excerpt}
        </div>

        {/* Article Body */}
        <div className="space-y-4 text-sm sm:text-base text-[#FFFBEB]/90 leading-relaxed max-h-[50vh] overflow-y-auto pr-2 border-b border-[#FACC15]/20 pb-6 mb-6">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Article Footer & Consultation CTA */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={handleShareWhatsApp}
            className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-bold text-[#FFFBEB] bg-[#7A0C16] hover:bg-[#991B1B] border border-[#FACC15]/60 rounded-xl transition-all cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-[#FACC15]" />
            <span>
              {language === 'kn'
                ? 'WhatsApp ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ'
                : language === 'te'
                ? 'WhatsApp లో షేర్ చేయండి'
                : language === 'hi'
                ? 'WhatsApp पर शेयर करें'
                : 'Share on WhatsApp'}
            </span>
          </button>

          <a
            href={getWhatsAppUrl(getArticleWhatsappMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-2.5 px-5 text-xs sm:text-sm font-black text-[#4A050D] bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] hover:from-[#FFFFFF] hover:to-[#FACC15] rounded-xl shadow-md transition-all border border-[#FEF08A]"
          >
            <MessageCircle className="w-4 h-4 fill-[#15803D] text-[#15803D]" />
            <span>{t.nav.whatsappCta}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
