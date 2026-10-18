/**
 * Robust Image Storage & Universal Recovery for Astro Kannada
 * Uses IndexedDB + localStorage + memory cache with lightweight canvas compression (~25-45KB)
 * to ensure all 12 services and 4 posters are reliably stored, recovered, and rendered.
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

export async function idbGetAll(): Promise<Record<string, string>> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const items: Record<string, string> = {};
      const req = store.openCursor();
      req.onsuccess = (e) => {
        const cursor = (e.target as IDBRequest<IDBCursorWithValue>).result;
        if (cursor) {
          if (typeof cursor.value === 'string') {
            items[String(cursor.key)] = cursor.value;
          }
          cursor.continue();
        } else {
          resolve(items);
        }
      };
      req.onerror = () => resolve(items);
    });
  } catch {
    return {};
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
 * Compresses an image file client-side to crisp ~25-45KB so 20+ images comfortably fit in localStorage.
 */
export async function compressImage(
  file: File,
  maxWidth = 800,
  maxHeight = 800,
  quality = 0.72
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
  
  // Persist to IndexedDB
  idbSet(key, value).catch(() => {});

  // Persist to localStorage
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    console.warn(`localStorage quota exceeded for ${key}, persisted via IndexedDB`, err);
  }

  // Notify any listening components
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('astro_image_change', { detail: { key, value } }));
  }

  return true;
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
    if (val && (val.startsWith('data:') || val.startsWith('/') || val.startsWith('http'))) {
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
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('astro_image_change', { detail: { key, value: null } }));
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

/**
 * Universal synchronous search for an image across multiple alias keys and fuzzy localStorage matching
 */
export function findStoredImage(primaryKey: string, aliasKeys: string[] = []): string | null {
  // 1. Check primary key
  const direct = safeStorageGet(primaryKey);
  if (direct) return direct;

  // 2. Check alias keys
  for (const alias of aliasKeys) {
    if (!alias) continue;
    const v = safeStorageGet(alias);
    if (v) return v;
  }

  // 3. Fuzzy search in localStorage
  if (typeof window !== 'undefined') {
    try {
      const keysToSearch = [primaryKey, ...aliasKeys].filter(Boolean);
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!k) continue;

        // Check if any search term matches this key
        for (const term of keysToSearch) {
          const cleanTerm = term.replace(/^(astro_|service_|custom_|img_)/, '').toLowerCase();
          if (cleanTerm && k.toLowerCase().includes(cleanTerm)) {
            const val = localStorage.getItem(k);
            if (val && val.startsWith('data:image')) {
              memoryStore[primaryKey] = val;
              return val;
            }
          }
        }
      }
    } catch {
      // ignore
    }
  }

  return null;
}

/**
 * Universal asynchronous search including IndexedDB
 */
export async function findStoredImageAsync(primaryKey: string, aliasKeys: string[] = []): Promise<string | null> {
  const sync = findStoredImage(primaryKey, aliasKeys);
  if (sync) return sync;

  // Check IndexedDB direct
  const idbVal = await safeStorageGetAsync(primaryKey);
  if (idbVal) return idbVal;

  for (const alias of aliasKeys) {
    if (!alias) continue;
    const aVal = await safeStorageGetAsync(alias);
    if (aVal) return aVal;
  }

  // Check all IndexedDB items
  const allIdb = await idbGetAll();
  const searchTerms = [primaryKey, ...aliasKeys].map((t) => t.replace(/^(astro_|service_|custom_|img_)/, '').toLowerCase()).filter(Boolean);

  for (const [k, val] of Object.entries(allIdb)) {
    if (!val || !val.startsWith('data:image')) continue;
    for (const term of searchTerms) {
      if (k.toLowerCase().includes(term)) {
        memoryStore[primaryKey] = val;
        try {
          localStorage.setItem(primaryKey, val);
        } catch {
          // ignore
        }
        return val;
      }
    }
  }

  return null;
}
