import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, PlusCircle, Search, Share2, Sparkles, Filter } from 'lucide-react';
import { BlogPost, BlogCategory } from '../types/blog';
import { getAllBlogPosts } from '../utils/blogStorage';
import { BlogPostModal } from './BlogPostModal';
import { BlogAdminModal } from './BlogAdminModal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const BlogSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const loadPosts = () => {
    setPosts(getAllBlogPosts());
  };

  useEffect(() => {
    loadPosts();
  }, []);

  // Category labels based on language
  const categories: Array<{ id: string; label: string }> = [
    {
      id: 'all',
      label:
        language === 'kn'
          ? 'ಎಲ್ಲಾ ಲೇಖನಗಳು'
          : language === 'te'
          ? 'అన్ని వ్యాసాలు'
          : language === 'hi'
          ? 'सभी लेख'
          : 'All Articles',
    },
    {
      id: 'planets',
      label:
        language === 'kn'
          ? 'ನವಗ್ರಹಗಳು'
          : language === 'te'
          ? 'నవగ్రహాలు'
          : language === 'hi'
          ? 'नवग्रह'
          : 'Planets',
    },
    {
      id: 'relationships',
      label:
        language === 'kn'
          ? 'ಸಂಬಂಧಗಳು & ದಾಂಪತ್ಯ'
          : language === 'te'
          ? 'సంబంధాలు & దాంపత్యం'
          : language === 'hi'
          ? 'संबंध व विवाह'
          : 'Relationships',
    },
    {
      id: 'vastu',
      label:
        language === 'kn'
          ? 'ವಾಸ್ತು ಶಾಸ್ತ್ರ'
          : language === 'te'
          ? 'వాస్తు శాస్త్రం'
          : language === 'hi'
          ? 'वास्तु'
          : 'Vastu',
    },
  ];

  // Filter posts matching current language (or show matching category/search)
  const filteredPosts = posts.filter((post) => {
    // Prefer posts in current language, or include all if few
    const matchesLang = post.language === language || posts.filter((p) => p.language === language).length === 0;
    const matchesCat = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLang && matchesCat && matchesSearch;
  });

  return (
    <section id="blog" className="py-16 sm:py-24 bg-[#0A0102] relative border-b border-[#FACC15]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FACC15] tracking-widest uppercase mb-2">
              <BookOpen className="w-4 h-4" />
              <span>
                {language === 'kn'
                  ? 'ಜ್ಯೋತಿಷ್ಯ ಜ್ಞಾನ ಭಂಡಾರ'
                  : language === 'te'
                  ? 'జ్యోతిష్య జ్ఞాన భాండాగారం'
                  : language === 'hi'
                  ? 'ज्योतिष ज्ञान गंगा'
                  : 'Vedic Wisdom Blog'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFBEB] mb-2">
              {language === 'kn'
                ? 'ಆಧ್ಯಾತ್ಮಿಕ ಹಾಗೂ ಜ್ಯೋತಿಷ್ಯ ಲೇಖನಗಳು'
                : language === 'te'
                ? 'ఆధ్యాత్మిక మరియు జ్యోతిష్య వ్యాసాలు'
                : language === 'hi'
                ? 'आध्यात्मिक एवं ज्योतिषीय आलेख'
                : 'Astrological Articles & Insights'}
            </h2>
            <p className="text-sm sm:text-base text-[#FFFBEB]/80 max-w-2xl">
              {language === 'kn'
                ? 'ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ ಅವರ ಜ್ಯೋತಿಷ್ಯ ಲೇಖನಗಳು, ಗ್ರಹಚಾರ, ವಾಸ್ತು ಮತ್ತು ಧಾರ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ.'
                : language === 'te'
                ? 'పండిత్ సచిన్ శర్మ వారి జ్యోతిష్య వ్యాసాలు, గ్రహచారాలు, వాస్తు మరియు ధార్మిక మార్గదర్శనం.'
                : language === 'hi'
                ? 'पंडित सचिन शर्मा द्वारा लिखित ग्रह, वास्तु एवं सनातन परंपरा के प्रामाणिक आलेख।'
                : 'Articles on Vedic astrology, planetary transits, Vastu harmony, and spiritual guidance by Pandit Sachin Sharma.'}
            </p>
          </div>

          {/* Post Blog Action Button */}
          <div className="shrink-0 flex items-center">
            <button
              type="button"
              onClick={() => setIsAdminOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] hover:from-[#FFFFFF] hover:to-[#FACC15] text-[#380307] text-xs sm:text-sm font-black transition-all shadow-lg active:scale-95 cursor-pointer border-2 border-[#FEF08A]"
            >
              <PlusCircle className="w-4 h-4 text-[#380307]" />
              <span>
                {language === 'kn'
                  ? '+ ಹೊಸ ಲೇಖನ ಬರೆಯಿರಿ (Post Blog)'
                  : language === 'te'
                  ? '+ కొత్త వ్యాసం రాయండి (Post Blog)'
                  : language === 'hi'
                  ? '+ नया लेख लिखें (Post Blog)'
                  : '+ Post New Blog'}
              </span>
            </button>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 p-3 rounded-xl bg-[#140103] border border-[#FACC15]/30">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#FACC15] text-[#380307] shadow-sm'
                      : 'text-[#FFFBEB]/80 hover:text-[#FACC15] hover:bg-[#240306]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[200px] sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#FACC15] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'kn'
                  ? 'ಲೇಖನ ಹುಡುಕಿ...'
                  : language === 'te'
                  ? 'వ్యాసం కోసం శోధించండి...'
                  : language === 'hi'
                  ? 'लेख खोजें...'
                  : 'Search articles...'
              }
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#0A0102] border border-[#FACC15]/40 text-[#FFFBEB] placeholder-[#FFFBEB]/40 text-xs focus:outline-hidden focus:border-[#FACC15]"
            />
          </div>

        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#140103] hover:bg-[#200205] border-2 border-[#FACC15]/40 hover:border-[#FACC15] p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#FACC15]/15"
              >
                <div>
                  {/* Metadata (Zero-Pill Discipline: Unboxed clean text with separators) */}
                  <div className="flex items-center gap-2 text-xs text-[#FEF08A] font-bold mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#FACC15]" />
                      <span>{post.publishedAt}</span>
                    </span>
                    <span aria-hidden="true" className="text-[#FACC15]/40">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FACC15]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-[#FFFBEB] group-hover:text-[#FEF08A] transition-colors mb-2.5 leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#FFFBEB]/75 leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-[#FACC15]/20 flex items-center justify-between">
                  <span className="text-[11px] text-[#FACC15] font-semibold truncate max-w-[140px]">
                    {post.author}
                  </span>

                  <button
                    type="button"
                    onClick={() => setActivePost(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#FEF08A] hover:text-[#FFFFFF] transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                  >
                    <span>
                      {language === 'kn'
                        ? 'ಪೂರ್ಣ ಓದಿ'
                        : language === 'te'
                        ? 'పూర్తిగా చదవండి'
                        : language === 'hi'
                        ? 'पूरा पढ़ें'
                        : 'Read Article'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FACC15]" />
                  </button>
                </div>

              </article>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-[#320409] border border-[#FACC15]/30">
            <BookOpen className="w-10 h-10 text-[#FACC15] mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#FFFBEB] mb-1">
              {language === 'kn'
                ? 'ಯಾವುದೇ ಲೇಖನಗಳು ಕಂಡುಬಂದಿಲ್ಲ'
                : language === 'te'
                ? 'ఎటువంటి వ్యాసాలు లభించలేదు'
                : language === 'hi'
                ? 'कोई लेख नहीं मिला'
                : 'No articles found'}
            </h3>
            <p className="text-xs text-[#FFFBEB]/70 mb-4">
              {language === 'kn'
                ? 'ಬೇರೆ ಹುಡುಕಾಟ ಅಥವಾ ವರ್ಗವನ್ನು ಪ್ರಯತ್ನಿಸಿ.'
                : language === 'te'
                ? 'వేరే శోధన పదం లేదా విభాగాన్ని ప్రయత్నించండి.'
                : language === 'hi'
                ? 'अन्य खोज शब्द या श्रेणी का चयन करें।'
                : 'Try another search keyword or category.'}
            </p>
            <button
              type="button"
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="py-1.5 px-4 text-xs font-bold text-[#4A050D] bg-[#FACC15] rounded-lg cursor-pointer"
            >
              {language === 'kn'
                ? 'ಎಲ್ಲಾ ಲೇಖನಗಳನ್ನು ತೋರಿಸಿ'
                : language === 'te'
                ? 'అన్ని వ్యాసాలను చూపించండి'
                : language === 'hi'
                ? 'सभी लेख दिखाएं'
                : 'Reset Filters'}
            </button>
          </div>
        )}


      </div>

      {/* Full Article Reader Modal */}
      <BlogPostModal
        post={activePost}
        onClose={() => setActivePost(null)}
      />

      {/* In-App WordPress CMS Publisher Modal */}
      <BlogAdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onPostUpdated={loadPosts}
        allPosts={posts}
      />
    </section>
  );
};
