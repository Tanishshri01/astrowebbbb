import React, { createContext, useContext, useState, useEffect } from 'react';

interface DeveloperContextType {
  isDevMode: boolean;
  loginModalOpen: boolean;
  changePasswordModalOpen: boolean;
  activeDevModal: 'photos' | 'posters' | 'portrait' | 'help' | null;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openChangePasswordModal: () => void;
  closeChangePasswordModal: () => void;
  enableDevMode: (pin: string) => boolean;
  disableDevMode: () => void;
  changeDevPassword: (oldPassword: string, newPassword: string) => { success: boolean; error?: string };
  setActiveDevModal: (modal: 'photos' | 'posters' | 'portrait' | 'help' | null) => void;
  showToast: (msg: string) => void;
  toastMessage: string | null;
}

const DeveloperContext = createContext<DeveloperContextType | undefined>(undefined);

const DEV_STORAGE_KEY = 'astro_dev_mode_active';
const DEV_PASSWORD_STORAGE_KEY = 'astro_dev_password';
export const DEFAULT_DEV_PASSWORD = '95002';

export function getStoredDevPassword(): string {
  if (typeof window === 'undefined') return DEFAULT_DEV_PASSWORD;
  return localStorage.getItem(DEV_PASSWORD_STORAGE_KEY) || DEFAULT_DEV_PASSWORD;
}

export const DeveloperProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDevMode, setIsDevMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    // Check saved state in localStorage
    return localStorage.getItem(DEV_STORAGE_KEY) === 'true';
  });

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  const [activeDevModal, setActiveDevModal] = useState<'photos' | 'posters' | 'portrait' | 'help' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const enableDevMode = (pin: string): boolean => {
    if (!pin || typeof pin !== 'string') return false;
    const currentPass = getStoredDevPassword();
    if (pin.trim() === currentPass) {
      setIsDevMode(true);
      localStorage.setItem(DEV_STORAGE_KEY, 'true');
      setLoginModalOpen(false);
      showToast('🛠️ Developer Mode Activated! You can now manage photos & settings.');
      return true;
    }
    return false;
  };

  const changeDevPassword = (oldPassword: string, newPassword: string): { success: boolean; error?: string } => {
    const currentPass = getStoredDevPassword();
    if (oldPassword.trim() !== currentPass) {
      return { success: false, error: 'Incorrect previous password.' };
    }
    if (!newPassword || newPassword.trim().length < 4) {
      return { success: false, error: 'New password must be at least 4 characters.' };
    }
    if (newPassword.trim() === currentPass) {
      return { success: false, error: 'New password must be different from previous password.' };
    }

    localStorage.setItem(DEV_PASSWORD_STORAGE_KEY, newPassword.trim());
    showToast('🔑 Developer password updated successfully! Keep it safe.');
    return { success: true };
  };

  const disableDevMode = () => {
    setIsDevMode(false);
    localStorage.removeItem(DEV_STORAGE_KEY);
    setActiveDevModal(null);
    showToast('🔒 Developer Mode Deactivated. Public view restored.');
  };

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openChangePasswordModal = () => setChangePasswordModalOpen(true);
  const closeChangePasswordModal = () => setChangePasswordModalOpen(false);

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
        changePasswordModalOpen,
        activeDevModal,
        openLoginModal,
        closeLoginModal,
        openChangePasswordModal,
        closeChangePasswordModal,
        enableDevMode,
        disableDevMode,
        changeDevPassword,
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
