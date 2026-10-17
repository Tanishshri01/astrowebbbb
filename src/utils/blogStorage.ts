import { BlogPost } from '../types/blog';
import { initialBlogPosts } from '../data/blogData';

const STORAGE_KEY = 'kannada_astro_custom_blogs_v1';
const ADMIN_PIN_KEY = 'kannada_astro_admin_pin';
export const DEFAULT_ADMIN_PIN = '888499';

/**
 * Loads all blog posts (defaults + custom added by user via Admin CMS)
 */
export function getAllBlogPosts(): BlogPost[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed: BlogPost[] = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Merge with initial, avoiding duplicates by id
        const initialMap = new Map(initialBlogPosts.map((p) => [p.id, p]));
        parsed.forEach((p) => initialMap.set(p.id, p));
        return Array.from(initialMap.values()).sort(
          (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      }
    }
  } catch (err) {
    console.error('Error reading blogs from storage:', err);
  }
  return initialBlogPosts;
}

/**
 * Saves a new or edited blog post
 */
export function saveBlogPost(post: BlogPost): void {
  try {
    const current = getAllBlogPosts();
    const existingIndex = current.findIndex((p) => p.id === post.id);
    let updated: BlogPost[];
    if (existingIndex >= 0) {
      updated = [...current];
      updated[existingIndex] = post;
    } else {
      updated = [post, ...current];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving blog post:', err);
  }
}

/**
 * Deletes a blog post
 */
export function deleteBlogPost(id: string): void {
  try {
    const current = getAllBlogPosts().filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch (err) {
    console.error('Error deleting blog post:', err);
  }
}

/**
 * Verifies admin PIN
 */
export function verifyAdminPin(pin: string): boolean {
  try {
    const savedPin = localStorage.getItem(ADMIN_PIN_KEY) || DEFAULT_ADMIN_PIN;
    return pin.trim() === savedPin;
  } catch {
    return pin.trim() === DEFAULT_ADMIN_PIN;
  }
}

/**
 * Updates admin PIN
 */
export function updateAdminPin(newPin: string): void {
  try {
    localStorage.setItem(ADMIN_PIN_KEY, newPin.trim());
  } catch (err) {
    console.error('Error saving new PIN:', err);
  }
}
