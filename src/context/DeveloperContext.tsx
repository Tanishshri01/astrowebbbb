import React, { createContext, useContext, useState, useEffect } from 'react';

interface DeveloperContextType {
  isDevMode: boolean;
  loginModalOpen: boolean;
  activeDevModal: 'photos' | 'posters' | 'portrait' | 'help' | null;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  enableDevMode: (pin?: string) => boolean;
  disableDevMode: () => void;
  setActiveDevModal: (modal: 'photos' | 'posters' | 'portrait' | 'help' | null) => void;
  showToast: (msg: string) => void;
  toastMessage: string | null;
}

const DeveloperContext = createContext<DeveloperContextType | undefined>(undefined);

const DEV_STORAGE_KEY = 'astro_dev_mode_active';
const DEFAULT_PIN = '888499';

export const DeveloperProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDevMode, setIsDevMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    // Check URL query parameters: ?dev=true or ?admin=true or hash #dev
    const params = new URLSearchParams(window.location.search);
    if (params.get('dev') === 'true' || params.get('admin') === 'true' || window.location.hash === '#dev' || window.location.hash === '#developer') {
      return true;
    }
    // Check saved state in localStorage
    return localStorage.getItem(DEV_STORAGE_KEY) === 'true';
  });

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [activeDevModal, setActiveDevModal] = useState<'photos' | 'posters' | 'portrait' | 'help' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const enableDevMode = (pin?: string): boolean => {
    // If PIN matches or if empty when called from verified action
    if (!pin || pin.trim() === DEFAULT_PIN || pin.trim() === '8884' || pin.trim() === 'admin') {
      setIsDevMode(true);
      localStorage.setItem(DEV_STORAGE_KEY, 'true');
      setLoginModalOpen(false);
      showToast('🛠️ Developer Mode Activated! You can now manage photos & posters.');
      return true;
    }
    return false;
  };

  const disableDevMode = () => {
    setIsDevMode(false);
    localStorage.removeItem(DEV_STORAGE_KEY);
    setActiveDevModal(null);
    showToast('🔒 Developer Mode Deactivated. Public visitor view restored.');
  };

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  // Keyboard shortcut: Alt + D or Ctrl + Shift + D
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey && (e.key === 'd' || e.key === 'D')) || (e.ctrlKey && e.shiftKey && (e.key === 'd' || e.key === 'D'))) {
        e.preventDefault();
        if (isDevMode) {
          disableDevMode();
        } else {
          setLoginModalOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDevMode]);

  return (
    <DeveloperContext.Provider
      value={{
        isDevMode,
        loginModalOpen,
        activeDevModal,
        openLoginModal,
        closeLoginModal,
        enableDevMode,
        disableDevMode,
        setActiveDevModal,
        showToast,
        toastMessage,
      }}
    >
      {children}
    </DeveloperContext.Provider>
  );
};

export const useDeveloperMode = () => {
  const context = useContext(DeveloperContext);
  if (!context) {
    throw new Error('useDeveloperMode must be used within DeveloperProvider');
  }
  return context;
};
