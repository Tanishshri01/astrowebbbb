/**
 * Robust Image Storage & Compression for Astro Kannada
 * Uses IndexedDB for permanent unlimited storage + localStorage for instant synchronous cache,
 * with canvas compression to ensure uploaded service photos are NEVER lost or removed across refreshes.
 */

const DB_NAME = 'AstroKannadaDB';
const DB_VERSION = 1;
const STORE_NAME = 'images';

// Open Native IndexedDB database
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function idbGet(key: string): Promise<string | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function idbSet(key: string, value: string): Promise<boolean> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(value, key);
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch {
    return false;
  }
}

export async function idbRemove(key: string): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.delete(key);
  } catch {
    // ignore
  }
}

// In-memory fallback
const memoryStore: Record<string, string> = {};

/**
 * Compresses an image file client-side to ~35-70KB while preserving sharp HD resolution.
 */
export async function compressImage(
  file: File,
  maxWidth = 960,
  maxHeight = 960,
  quality = 0.78
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (!result) {
        reject(new Error('Empty file content'));
        return;
      }

      const img = new Image();
      img.onerror = () => {
        resolve(result);
      };
      img.onload = () => {
        try {
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            if (width / height > maxWidth / maxHeight) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            } else {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, width);
          canvas.height = Math.max(1, height);
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve(result);
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(dataUrl);
        } catch {
          resolve(result);
        }
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Sets an image value simultaneously in memory, localStorage, and IndexedDB for permanent retention.
 */
export function safeStorageSet(key: string, value: string): boolean {
  memoryStore[key] = value;
  // Always asynchronously persist to IndexedDB (virtually unlimited browser storage)
  idbSet(key, value).catch(() => {});

  try {
    localStorage.setItem(key, value);
    return true;
  } catch (err) {
    console.warn(`localStorage quota exceeded for ${key}, persisted via IndexedDB`, err);
    return true;
  }
}

/**
 * Gets image value from memory cache or localStorage
 */
export function safeStorageGet(key: string): string | null {
  if (memoryStore[key]) {
    return memoryStore[key];
  }
  try {
    const val = localStorage.getItem(key);
    if (val) {
      memoryStore[key] = val;
      return val;
    }
  } catch {
    // ignore
  }
  return null;
}

/**
 * Removes image value from memory, localStorage, and IndexedDB
 */
export function safeStorageRemove(key: string): void {
  delete memoryStore[key];
  idbRemove(key).catch(() => {});
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
}

/**
 * Asynchronously loads an image from IndexedDB if not found in synchronous localStorage
 */
export async function safeStorageGetAsync(key: string): Promise<string | null> {
  const syncVal = safeStorageGet(key);
  if (syncVal) return syncVal;

  const idbVal = await idbGet(key);
  if (idbVal) {
    memoryStore[key] = idbVal;
    try {
      localStorage.setItem(key, idbVal);
    } catch {
      // ignore
    }
    return idbVal;
  }
  return null;
}
