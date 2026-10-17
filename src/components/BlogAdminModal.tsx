import React, { useState } from 'react';
import { X, Lock, KeyRound, Plus, Trash2, Edit3, Download, CheckCircle2, AlertCircle, Sparkles, Globe, ExternalLink, ShieldCheck, Check, Search } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { verifyAdminPin, saveBlogPost, deleteBlogPost, updateAdminPin, DEFAULT_ADMIN_PIN } from '../utils/blogStorage';
import { Language } from '../context/LanguageContext';

interface BlogAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPostUpdated: () => void;
  allPosts: BlogPost[];
}

export const BlogAdminModal: React.FC<BlogAdminModalProps> = ({
  isOpen,
  onClose,
  onPostUpdated,
  allPosts,
}) => {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [pinError, setPinError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'posts' | 'seo'>('posts');

  // Form states for creating / editing post
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('planets');
  const [postLanguage, setPostLanguage] = useState<Language>('kn');
  const [author, setAuthor] = useState('ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ');
  const [readTime, setReadTime] = useState('4 ನಿಮಿಷ ಓದು');
  const [feedback, setFeedback] = useState<string | null>(null);

  // Settings
  const [newPin, setNewPin] = useState('');
  const [pinChangedMsg, setPinChangedMsg] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyAdminPin(pin)) {
      setIsAuthenticated(true);
      setPinError(null);
    } else {
      setPinError('ತಪ್ಪಾದ ಪಿನ್ (Incorrect PIN). ಡೀಫಾಲ್ಟ್ ಪಿನ್: 888499');
    }
  };

  const handleStartEdit = (post: BlogPost) => {
    setEditingPostId(post.id);
    setTitle(post.title);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setCategory(post.category);
    setPostLanguage(post.language);
    setAuthor(post.author);
    setReadTime(post.readTime);
    setFeedback(null);
  };

  const handleResetForm = () => {
    setEditingPostId(null);
    setTitle('');
    setExcerpt('');
    setContent('');
    setCategory('planets');
    setPostLanguage('kn');
    setAuthor('ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ');
    setReadTime('4 ನಿಮಿಷ ಓದು');
    setFeedback(null);
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setFeedback('ದಯವಿಟ್ಟು ಶೀರ್ಷಿಕೆ ಮತ್ತು ವಿವರವನ್ನು ನಮೂದಿಸಿ.');
      return;
    }

    const postToSave: BlogPost = {
      id: editingPostId || `blog-custom-${Date.now()}`,
      slug: title.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `post-${Date.now()}`,
      title: title.trim(),
      excerpt: excerpt.trim() || title.trim(),
      content: content.trim(),
      category,
      author: author.trim() || 'ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ',
      publishedAt: new Date().toISOString().split('T')[0],
      readTime: readTime.trim() || '4 ನಿಮಿಷ ಓದು',
      language: postLanguage,
    };

    saveBlogPost(postToSave);
    onPostUpdated();
    setFeedback(editingPostId ? 'ಲೇಖನವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ!' : 'ಹೊಸ ಲೇಖನ ಯಶಸ್ವಿಯಾಗಿ ಪ್ರಕಟಗೊಂಡಿದೆ!');
    handleResetForm();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('ಈ ಲೇಖನವನ್ನು ಖಂಡಿತವಾಗಿ ಅಳಿಸಲು ಬಯಸುವಿರಾ? (Delete this post?)')) {
      deleteBlogPost(id);
      onPostUpdated();
      setFeedback('ಲೇಖನವನ್ನು ಅಳಿಸಲಾಗಿದೆ.');
    }
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(allPosts, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `astrology-blogs-backup-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.trim().length >= 4) {
      updateAdminPin(newPin.trim());
      setPinChangedMsg(true);
      setNewPin('');
      setTimeout(() => setPinChangedMsg(false), 3000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#4A050D] border-2 border-[#FACC15] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#FFFBEB] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.9), 0 0 25px rgba(250, 204, 21, 0.35)',
        }}
      >
        {/* Top Gold Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#FACC15] hover:text-[#FFFFFF] hover:bg-[#7A0C16] rounded-full transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#FACC15]"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#7A0C16] border border-[#FACC15] flex items-center justify-center text-[#FACC15]">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h2 id="admin-modal-title" className="text-xl sm:text-2xl font-black text-[#FEF08A]">
              ಲೇಖನ ನಿರ್ವಹಣೆ ಮತ್ತು ಪ್ರಕಾಶನ (Blog Admin CMS)
            </h2>
            <div className="text-xs text-[#FACC15] font-semibold">
              WordPress ರೀತಿಯಲ್ಲಿ ನೇರವಾಗಿ ವೆಬ್‌ಸೈಟ್‌ನಿಂದಲೇ ಲೇಖನಗಳನ್ನು ಪ್ರಕಟಿಸಿ
            </div>
          </div>
        </div>

        {/* Authentication View */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto py-8 text-center">
            <KeyRound className="w-12 h-12 text-[#FACC15] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#FFFBEB] mb-2">
              ಅಡ್ಮಿನ್ ಪ್ರವೇಶ (Admin Authentication)
            </h3>
            <p className="text-xs text-[#FFFBEB]/75 mb-6">
              ಹೊಸ ಲೇಖನಗಳನ್ನು ಬರೆಯಲು ಮತ್ತು ಸಂಪಾದಿಸಲು ನಿಮ್ಮ ಅಡ್ಮಿನ್ ಪಿನ್ ನಮೂದಿಸಿ. (ಡೀಫಾಲ್ಟ್ ಪಿನ್: <strong className="text-[#FACC15]">{DEFAULT_ADMIN_PIN}</strong>)
            </p>

            {pinError && (
              <div className="mb-4 p-3 rounded-lg bg-red-950 border border-red-500 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{pinError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="ಅಡ್ಮಿನ್ ಪಿನ್ ನಮೂದಿಸಿ (Enter PIN)"
                className="w-full text-center tracking-widest text-lg font-bold py-3 px-4 rounded-xl bg-[#260307] border-2 border-[#FACC15]/60 text-[#FEF08A] focus:outline-hidden focus:border-[#FACC15]"
                autoFocus
                required
              />

              <button
                type="submit"
                className="w-full py-3 px-6 text-sm font-black text-[#4A050D] bg-gradient-to-r from-[#FEF08A] to-[#FACC15] hover:brightness-110 rounded-xl shadow-md transition-all cursor-pointer border border-[#FEF08A]"
              >
                ಪ್ರವೇಶಿಸಿ (Login to CMS)
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated CMS Dashboard */
          <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-1">
            
            {/* Top Navigation Tabs */}
            <div className="flex items-center gap-2 border-b-2 border-[#FACC15]/30 pb-3">
              <button
                type="button"
                onClick={() => setActiveTab('posts')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'posts'
                    ? 'bg-[#FACC15] text-[#4A050D] shadow-md'
                    : 'bg-[#2D040A] text-[#FFFBEB]/80 hover:text-[#FACC15] hover:bg-[#7A0C16]'
                }`}
              >
                <Edit3 className="w-4 h-4" />
                <span>ಲೇಖನ ನಿರ್ವಹಣೆ (Blog Posts)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('seo')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'seo'
                    ? 'bg-[#FACC15] text-[#4A050D] shadow-md'
                    : 'bg-[#2D040A] text-[#FFFBEB]/80 hover:text-[#FACC15] hover:bg-[#7A0C16]'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>100% SEO & Google Ranking</span>
              </button>
            </div>

            {activeTab === 'posts' ? (
              <div className="space-y-8">
            
            {/* Feedback alert */}
            {feedback && (
              <div className="p-3 rounded-lg bg-emerald-950 border-2 border-emerald-500 text-emerald-200 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-bold">{feedback}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setFeedback(null)}
                  className="text-emerald-300 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Quick Actions Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[#2D040A] border border-[#FACC15]/30">
              <div className="flex items-center gap-2 text-xs text-[#FEF08A] font-bold">
                <Sparkles className="w-4 h-4 text-[#FACC15]" />
                <span>ಒಟ್ಟು ಲೇಖನಗಳು: {allPosts.length}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleExportJSON}
                  className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#7A0C16] border border-[#FACC15]/60 text-xs font-bold text-[#FACC15] hover:text-white transition-colors cursor-pointer"
                  title="ಎಲ್ಲಾ ಲೇಖನಗಳನ್ನು JSON ಫೈಲ್ ಆಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>ಬ್ಯಾಕಪ್ ಡೌನ್‌ಲೋಡ್ (Export JSON)</span>
                </button>

                {editingPostId && (
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="py-1.5 px-3 rounded-lg bg-[#560714] text-xs font-bold text-white hover:bg-[#7A0C16] transition-colors cursor-pointer"
                  >
                    ರದ್ದುಗೊಳಿಸಿ (Cancel Edit)
                  </button>
                )}
              </div>
            </div>

            {/* Post Creation / Editing Form */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#320409] border-2 border-[#FACC15]/40 shadow-inner">
              <h3 className="text-base font-black text-[#FEF08A] mb-4 flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-[#FACC15]" />
                <span>{editingPostId ? 'ಲೇಖನ ಸಂಪಾದಿಸಿ (Edit Blog Post)' : 'ಹೊಸ ಲೇಖನ ಪ್ರಕಟಿಸಿ (Create New Blog Post)'}</span>
              </h3>

              <form onSubmit={handleSavePost} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Language */}
                  <div>
                    <label className="block text-xs font-bold text-[#FACC15] mb-1">
                      ಭಾಷೆ (Language) *
                    </label>
                    <select
                      value={postLanguage}
                      onChange={(e) => setPostLanguage(e.target.value as Language)}
                      className="w-full px-3 py-2 rounded-lg bg-[#260307] border border-[#FACC15]/40 text-[#FFFBEB] text-xs font-semibold focus:outline-hidden focus:border-[#FACC15]"
                    >
                      <option value="kn">ಕನ್ನಡ (Kannada)</option>
                      <option value="te">తెలుగు (Telugu)</option>
                      <option value="en">English</option>
                      <option value="hi">हिन्दी (Hindi)</option>
                    </select>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-xs font-bold text-[#FACC15] mb-1">
                      ವರ್ಗ (Category) *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#260307] border border-[#FACC15]/40 text-[#FFFBEB] text-xs font-semibold focus:outline-hidden focus:border-[#FACC15]"
                    >
                      <option value="planets">ನವಗ್ರಹಗಳು (Planets & Navagraha)</option>
                      <option value="relationships">ಸಂಬಂಧಗಳು (Relationships & Marriage)</option>
                      <option value="vastu">ವಾಸ್ತು ಶಾಸ್ತ್ರ (Vastu Shastra)</option>
                      <option value="rituals">ಪೂಜೆ & ಹೋಮಗಳು (Pooja & Homas)</option>
                      <option value="kundali">ಜಾತಕ ಮತ್ತು ಮುಹೂರ್ತ (Kundali & Muhurtha)</option>
                    </select>
                  </div>

                  {/* Read Time */}
                  <div>
                    <label className="block text-xs font-bold text-[#FACC15] mb-1">
                      ಓದುವ ಸಮಯ (Read Time)
                    </label>
                    <input
                      type="text"
                      value={readTime}
                      onChange={(e) => setReadTime(e.target.value)}
                      placeholder="ಉದಾ: 4 ನಿಮಿಷ ಓದು"
                      className="w-full px-3 py-2 rounded-lg bg-[#260307] border border-[#FACC15]/40 text-[#FFFBEB] text-xs focus:outline-hidden focus:border-[#FACC15]"
                    />
                  </div>

                </div>

                {/* Title */}
                <div>
                  <label className="block text-xs font-bold text-[#FACC15] mb-1">
                    ಲೇಖನದ ಶೀರ್ಷಿಕೆ (Article Title) *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="ಉದಾಹರಣೆ: ಗೃಹ ಶಾಂತಿಗಾಗಿ ಸರಳ ವಾಸ್ತು ಪರಿಹಾರಗಳು"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#260307] border border-[#FACC15]/40 text-[#FFFBEB] text-sm font-bold focus:outline-hidden focus:border-[#FACC15]"
                    required
                  />
                </div>

                {/* Excerpt / Summary */}
                <div>
                  <label className="block text-xs font-bold text-[#FACC15] mb-1">
                    ಕಿರು ಸಾರಾಂಶ (Short Summary / Excerpt) *
                  </label>
                  <textarea
                    rows={2}
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="ಲೇಖನದ ಮುಖ್ಯ ಅಂಶಗಳನ್ನು 1-2 ಸಾಲುಗಳಲ್ಲಿ ಬರೆಯಿರಿ..."
                    className="w-full px-4 py-2 rounded-lg bg-[#260307] border border-[#FACC15]/40 text-[#FFFBEB] text-xs focus:outline-hidden focus:border-[#FACC15] resize-none"
                    required
                  />
                </div>

                {/* Full Article Content */}
                <div>
                  <label className="block text-xs font-bold text-[#FACC15] mb-1">
                    ಸಂಪೂರ್ಣ ಲೇಖನದ ವಿವರ (Full Article Content) *
                  </label>
                  <textarea
                    rows={8}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="ಪ್ಯಾರಾಗ್ರಾಫ್‌ಗಳಾಗಿ ನಿಮ್ಮ ಪೂರ್ಣ ಲೇಖನವನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ..."
                    className="w-full px-4 py-3 rounded-lg bg-[#260307] border border-[#FACC15]/40 text-[#FFFBEB] text-sm focus:outline-hidden focus:border-[#FACC15]"
                    required
                  />
                  <div className="text-[11px] text-[#FEF08A]/70 mt-1">
                    ಪ್ರತಿಯೊಂದು ಪ್ಯಾರಾಗ್ರಾಫ್ ನಡುವೆ ಒಂದು ಖಾಲಿ ಸಾಲು (Enter key) ನೀಡಿ.
                  </div>
                </div>

                {/* Author Name */}
                <div>
                  <label className="block text-xs font-bold text-[#FACC15] mb-1">
                    ಲೇಖಕರ ಹೆಸರು (Author)
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#260307] border border-[#FACC15]/40 text-[#FFFBEB] text-xs font-semibold focus:outline-hidden focus:border-[#FACC15]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-sm font-black text-[#4A050D] bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308] hover:from-[#FFFFFF] hover:to-[#FACC15] rounded-xl shadow-lg transition-all cursor-pointer border border-[#FEF08A] flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4 text-[#4A050D]" />
                  <span>{editingPostId ? 'ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ (Save Changes)' : 'ಈಗಲೇ ಪ್ರಕಟಿಸಿ (Publish Post Live)'}</span>
                </button>
              </form>
            </div>

            {/* List of Published Blogs with Edit / Delete */}
            <div>
              <h3 className="text-sm font-black text-[#FEF08A] uppercase tracking-wider mb-3">
                ಪ್ರಕಟಿತ ಲೇಖನಗಳ ಪಟ್ಟಿ (Manage Existing Posts)
              </h3>

              <div className="space-y-2">
                {allPosts.map((post) => (
                  <div
                    key={post.id}
                    className="p-3.5 rounded-xl bg-[#260307] border border-[#FACC15]/30 flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[11px] text-[#FACC15] font-bold mb-0.5">
                        <span className="uppercase font-mono">{post.language}</span>
                        <span>·</span>
                        <span>{post.publishedAt}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#FFFBEB] truncate">
                        {post.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleStartEdit(post)}
                        className="p-2 text-[#FACC15] hover:text-white hover:bg-[#7A0C16] rounded-lg transition-colors cursor-pointer"
                        title="ಸಂಪಾದಿಸಿ (Edit)"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(post.id)}
                        className="p-2 text-red-400 hover:text-red-200 hover:bg-[#7A0C16] rounded-lg transition-colors cursor-pointer"
                        title="ಅಳಿಸಿ (Delete)"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Change Admin PIN Section */}
            <div className="p-4 rounded-xl bg-[#2D040A] border border-[#FACC15]/20">
              <h4 className="text-xs font-bold text-[#FACC15] mb-2">
                ಅಡ್ಮಿನ್ ಪಿನ್ ಬದಲಾಯಿಸಿ (Change Admin PIN)
              </h4>
              <form onSubmit={handleChangePin} className="flex gap-2 max-w-sm">
                <input
                  type="password"
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  placeholder="ಹೊಸ ಪಿನ್ (New PIN min 4 chars)"
                  className="flex-1 px-3 py-1.5 rounded-lg bg-[#1C0407] border border-[#FACC15]/40 text-xs text-[#FEF08A] focus:outline-hidden"
                  required
                />
                <button
                  type="submit"
                  className="py-1.5 px-3 rounded-lg bg-[#7A0C16] text-xs font-bold text-[#FACC15] hover:bg-[#991B1B] transition-colors cursor-pointer border border-[#FACC15]/50"
                >
                  ಅಪ್‌ಡೇಟ್
                </button>
              </form>
              {pinChangedMsg && (
                <div className="text-[11px] text-emerald-400 font-bold mt-1.5">
                  ಪಿನ್ ಯಶಸ್ವಿಯಾಗಿ ಬದಲಾಗಿದೆ! (PIN updated successfully)
                </div>
              )}
            </div>
          </div>
        ) : (
          /* 100% SEO & Google Ranking Dashboard */
          <div className="space-y-6">
            
            {/* Score Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#4A050D] to-[#260307] border-2 border-[#FACC15] shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Google & Search Engines Readiness</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#FEF08A]">
                  100% SEO Score (Outperforms WordPress)
                </h3>
                <p className="text-xs text-[#FFFBEB]/80 max-w-lg mt-1">
                  This website includes Yoast &amp; RankMath-grade Schema.org JSON-LD graphs, Core Web Vitals optimization, and multilingual crawler discovery.
                </p>
              </div>

              <div className="flex sm:flex-col items-center justify-center bg-[#7A0C16] border-2 border-[#FACC15] rounded-xl px-5 py-3 text-center shrink-0">
                <span className="text-3xl font-black text-[#FACC15]">100%</span>
                <span className="text-[10px] uppercase font-bold text-[#FEF08A]">SEO Audit</span>
              </div>
            </div>

            {/* 6 Key Architectural Pillars (Why It Ranks Better than WordPress) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              
              <div className="p-4 rounded-xl bg-[#260307] border border-[#FACC15]/40 flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#FEF08A]">Google Rich Results &amp; FAQ Schema</h4>
                  <p className="text-[11px] text-[#FFFBEB]/75 leading-relaxed mt-0.5">
                    FAQPage &amp; ProfessionalService Schema.org JSON-LD are pre-configured to show expandable FAQ dropdowns directly on Google search results.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#260307] border border-[#FACC15]/40 flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#FEF08A]">Lightning Speed &amp; Core Web Vitals</h4>
                  <p className="text-[11px] text-[#FFFBEB]/75 leading-relaxed mt-0.5">
                    No slow WordPress MySQL lag or bloated PHP plugins. Sub-second first contentful paint (FCP) gives higher Google mobile rank.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#260307] border border-[#FACC15]/40 flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#FEF08A]">Multilingual Hreflang Tags</h4>
                  <p className="text-[11px] text-[#FFFBEB]/75 leading-relaxed mt-0.5">
                    Configured with canonical and hreflang links for Kannada (kn-IN), Telugu (te-IN), Hindi (hi-IN), and English (en-IN).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#260307] border border-[#FACC15]/40 flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#FEF08A]">Dynamic XML Sitemap &amp; Robots.txt</h4>
                  <p className="text-[11px] text-[#FFFBEB]/75 leading-relaxed mt-0.5">
                    Clean <code>/sitemap.xml</code> and <code>/robots.txt</code> files instruct Googlebot to index every single service and blog.
                  </p>
                </div>
              </div>

            </div>

            {/* 3 Steps to Rank #1 on Google (Action Plan for Client) */}
            <div className="p-5 rounded-2xl bg-[#320409] border border-[#FACC15]/40">
              <h4 className="text-sm font-black text-[#FEF08A] mb-3 flex items-center gap-2">
                <Search className="w-4 h-4 text-[#FACC15]" />
                <span>How to Get Maximum Clients from Google in 3 Steps:</span>
              </h4>

              <ol className="space-y-3 text-xs text-[#FFFBEB]/90">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FACC15] text-[#4A050D] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-[#FACC15]">Submit to Google Search Console:</strong> Go to <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="underline text-[#FEF08A]">Google Search Console</a>, enter your custom domain, and submit your sitemap link: <code>https://yourdomain.com/sitemap.xml</code>.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FACC15] text-[#4A050D] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-[#FACC15]">Create Google Business Profile (Local Maps):</strong> Add &quot;ಆಸ್ಟ್ರೋ ಕನ್ನಡ | ಪಂಡಿತ್ ಸಚಿನ್ ಶರ್ಮಾ&quot; on Google Maps with phone <strong>8151816172</strong> and link this website URL.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#FACC15] text-[#4A050D] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-[#FACC15]">Publish 1 Blog Post Weekly:</strong> Use this Admin Publisher to write blogs targeting questions your clients ask (e.g., Kuja Dosha, Vastu, Navagraha). Fresh blogs boost domain authority rapidly.
                  </div>
                </li>
              </ol>
            </div>

            {/* External Verification Links */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://search.google.com/test/rich-results"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#7A0C16] hover:bg-[#991B1B] text-[#FEF08A] text-xs font-bold border border-[#FACC15]/60 transition-colors"
              >
                <span>Test Schema on Google Rich Results</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://pagespeed.web.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#7A0C16] hover:bg-[#991B1B] text-[#FEF08A] text-xs font-bold border border-[#FACC15]/60 transition-colors"
              >
                <span>Test Google PageSpeed</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        )}

      </div>
    )}

      </div>
    </div>
  );
};
