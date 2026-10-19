import React, { useState, useEffect } from 'react';
import { X, Lock, Key, AlertCircle, CheckCircle, Shield, KeyRound, Eye, EyeOff } from 'lucide-react';
import { useDeveloperMode } from '../context/DeveloperContext';

const MAX_ATTEMPTS = 5;
const LOCKOUT_SECONDS = 30;

export const DeveloperLoginModal: React.FC = () => {
  const {
    loginModalOpen,
    closeLoginModal,
    changePasswordModalOpen,
    closeChangePasswordModal,
    enableDevMode,
    changeDevPassword,
  } = useDeveloperMode();

  const isOpen = loginModalOpen || changePasswordModalOpen;

  const [activeTab, setActiveTab] = useState<'login' | 'change'>(
    changePasswordModalOpen ? 'change' : 'login'
  );

  // Sync tab when opened directly in change mode
  useEffect(() => {
    if (changePasswordModalOpen) {
      setActiveTab('change');
    } else if (loginModalOpen) {
      setActiveTab('login');
    }
  }, [changePasswordModalOpen, loginModalOpen]);

  // Login form state
  const [pin, setPin] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutTimer, setLockoutTimer] = useState(0);

  // Change password form state
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [changeError, setChangeError] = useState<string | null>(null);
  const [changeSuccess, setChangeSuccess] = useState<string | null>(null);

  // Lockout countdown timer
  useEffect(() => {
    if (lockoutTimer <= 0) return;
    const interval = setInterval(() => {
      setLockoutTimer((prev) => {
        if (prev <= 1) {
          setFailedAttempts(0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [lockoutTimer]);

  if (!isOpen) return null;

  const handleClose = () => {
    closeLoginModal();
    closeChangePasswordModal();
    setLoginError(null);
    setChangeError(null);
    setChangeSuccess(null);
    setPin('');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lockoutTimer > 0) return;

    if (!pin) {
      setLoginError('Please enter your developer password.');
      return;
    }

    const success = enableDevMode(pin);
    if (!success) {
      const nextAttempts = failedAttempts + 1;
      setFailedAttempts(nextAttempts);
      if (nextAttempts >= MAX_ATTEMPTS) {
        setLockoutTimer(LOCKOUT_SECONDS);
        setLoginError(`Too many failed attempts. Security lockout active for ${LOCKOUT_SECONDS} seconds.`);
      } else {
        setLoginError(`Incorrect password. Attempt ${nextAttempts} of ${MAX_ATTEMPTS}.`);
      }
    } else {
      setLoginError(null);
      setPin('');
      setFailedAttempts(0);
      handleClose();
    }
  };

  const handleChangePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setChangeError(null);
    setChangeSuccess(null);

    if (!oldPassword) {
      setChangeError('Please enter your previous password.');
      return;
    }
    if (!newPassword) {
      setChangeError('Please enter a new password.');
      return;
    }
    if (newPassword.length < 5) {
      setChangeError('New password must be at least 5 characters long for security.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setChangeError('New password and confirmation do not match.');
      return;
    }

    const result = changeDevPassword(oldPassword, newPassword);
    if (!result.success) {
      setChangeError(result.error || 'Failed to change password. Verify your previous password.');
    } else {
      setChangeSuccess('Password successfully updated! Use your new password to log in.');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setActiveTab('login');
        setChangeSuccess(null);
      }, 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md bg-gradient-to-b from-[#240306] via-[#160204] to-[#0A0102] border-2 border-[#FACC15] rounded-3xl p-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#FACC15]/40">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#FACC15]" />
            <h3 className="text-base sm:text-lg font-black text-[#FEF08A]">
              Developer Control Center
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full bg-[#1C0204] hover:bg-[#3C0409] text-[#FEF08A] border border-[#FACC15]/50 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Toggle: Login vs Change Password */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-[#0D0102] rounded-xl border border-[#FACC15]/30 mb-5">
          <button
            type="button"
            onClick={() => {
              setActiveTab('login');
              setLoginError(null);
              setChangeError(null);
            }}
            className={`py-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 ${
              activeTab === 'login'
                ? 'bg-gradient-to-r from-[#FEF08A] to-[#FACC15] text-[#240306] font-black shadow-md'
                : 'text-[#FEF08A]/70 hover:text-[#FEF08A] hover:bg-[#1E0204]'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Developer Login</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('change');
              setLoginError(null);
              setChangeError(null);
            }}
            className={`py-2 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 ${
              activeTab === 'change'
                ? 'bg-gradient-to-r from-[#FEF08A] to-[#FACC15] text-[#240306] font-black shadow-md'
                : 'text-[#FEF08A]/70 hover:text-[#FEF08A] hover:bg-[#1E0204]'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Change Password</span>
          </button>
        </div>

        {/* Tab 1: Login Form (Clean, Zero default password hints) */}
        {activeTab === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <p className="text-xs text-[#FFFBEB]/80 leading-relaxed">
              Authorized administrator access only. Upload controls and sensitive site tools remain hidden from public visitors.
            </p>

            <div>
              <label className="block text-xs font-bold text-[#FEF08A] mb-1.5">
                Developer Password
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-[#FACC15] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setLoginError(null);
                  }}
                  disabled={lockoutTimer > 0}
                  placeholder="Enter your developer password"
                  autoFocus
                  autoComplete="current-password"
                  className="w-full bg-[#0D0102] border-2 border-[#FACC15]/50 focus:border-[#FACC15] text-[#FEF08A] text-sm rounded-xl pl-10 pr-10 py-2.5 outline-none transition disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FACC15]/70 hover:text-[#FACC15] p-1 cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {loginError && (
                <p className="text-xs text-red-400 mt-2 flex items-start gap-1.5 font-semibold bg-red-950/40 p-2 rounded-lg border border-red-500/30">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{loginError}</span>
                </p>
              )}

              {lockoutTimer > 0 && (
                <div className="mt-2 text-center text-xs font-bold text-amber-400 bg-amber-950/40 p-2 rounded-lg border border-amber-500/40">
                  Locked for security: Retry in {lockoutTimer}s
                </div>
              )}
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 py-2.5 rounded-xl bg-[#1C0204] hover:bg-[#300307] border border-[#FACC15]/40 text-[#FFFBEB] text-xs font-bold transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={lockoutTimer > 0}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#FEF08A] to-[#FACC15] hover:brightness-110 text-[#240306] text-xs font-black shadow-lg transition active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Enter Dev Mode</span>
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Change Password Form */}
        {activeTab === 'change' && (
          <form onSubmit={handleChangePasswordSubmit} className="space-y-3.5">
            <p className="text-xs text-[#FFFBEB]/80 leading-relaxed">
              Verify your previous password to set a new custom developer password.
            </p>

            {changeSuccess && (
              <div className="p-2.5 rounded-xl bg-green-950/70 border border-green-500 text-green-200 text-xs font-bold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span>{changeSuccess}</span>
              </div>
            )}

            {changeError && (
              <div className="p-2.5 rounded-xl bg-red-950/70 border border-red-500 text-red-200 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{changeError}</span>
              </div>
            )}

            {/* Previous Password */}
            <div>
              <label className="block text-xs font-bold text-[#FEF08A] mb-1">
                Previous Password
              </label>
              <div className="relative">
                <input
                  type={showOldPass ? 'text' : 'password'}
                  value={oldPassword}
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                    setChangeError(null);
                  }}
                  placeholder="Enter your previous password"
                  autoComplete="current-password"
                  className="w-full bg-[#0D0102] border-2 border-[#FACC15]/50 focus:border-[#FACC15] text-[#FEF08A] text-xs rounded-xl px-3.5 pr-10 py-2.5 outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowOldPass(!showOldPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FACC15]/70 hover:text-[#FACC15] p-1 cursor-pointer"
                >
                  {showOldPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="block text-xs font-bold text-[#FEF08A] mb-1">
                New Strong Password
              </label>
              <div className="relative">
                <input
                  type={showNewPass ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setChangeError(null);
                  }}
                  placeholder="Minimum 5 characters"
                  autoComplete="new-password"
                  className="w-full bg-[#0D0102] border-2 border-[#FACC15]/50 focus:border-[#FACC15] text-[#FEF08A] text-xs rounded-xl px-3.5 pr-10 py-2.5 outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPass(!showNewPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FACC15]/70 hover:text-[#FACC15] p-1 cursor-pointer"
                >
                  {showNewPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="block text-xs font-bold text-[#FEF08A] mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setChangeError(null);
                }}
                placeholder="Re-enter new password"
                autoComplete="new-password"
                className="w-full bg-[#0D0102] border-2 border-[#FACC15]/50 focus:border-[#FACC15] text-[#FEF08A] text-xs rounded-xl px-3.5 py-2.5 outline-none transition"
              />
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => setActiveTab('login')}
                className="flex-1 py-2.5 rounded-xl bg-[#1C0204] hover:bg-[#300307] border border-[#FACC15]/40 text-[#FFFBEB] text-xs font-bold transition cursor-pointer"
              >
                Back to Login
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#FEF08A] to-[#FACC15] hover:brightness-110 text-[#240306] text-xs font-black shadow-lg transition active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Save Password</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
