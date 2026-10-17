import { Language } from '../context/LanguageContext';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  language: Language;
}

export type BlogCategory =
  | 'all'
  | 'kundali'
  | 'vastu'
  | 'relationships'
  | 'rituals'
  | 'planets';
