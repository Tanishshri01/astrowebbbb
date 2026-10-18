import React, { useState } from 'react';
import { X, Lock, Key, AlertCircle, CheckCircle } from 'lucide-react';
import { useDeveloperMode } from '../context/DeveloperContext';

export const DeveloperLoginModal: React.FC = () => {
  const { loginModalOpen, closeLoginModal, enableDevMode } = useDeveloperMode();
  const [pin, setPin] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!loginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin) {
      setError('ದಯವಿಟ್ಟು ಪಿನ್ ನಮೂದಿಸಿ (Please enter PIN)');
      return;
    }
    const success = enableDevMode(pin);
    if (!success) {
      setError('ತಪ್ಪಾದ ಪಿನ್ (Incorrect PIN). Default: 888499');
    } else {
      setError(null);
      setPin('');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={closeLoginModal}
    >
      <div
        className="w-full max-w-md bg-gradient-to-b from-[#240306] via-[#160204] to-[#0A0102] border-2 border-[#FACC15] rounded-3xl p-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#FACC15]/40">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#FACC15]" />
            <h3 className="text-base sm:text-lg font-black text-[#FEF08A]">
              ನಿರ್ವಾಹಕ ಲಾಗಿನ್ • Developer Access
            </h3>
          </div>
          <button
            onClick={closeLoginModal}
            className="p-1.5 rounded-full bg-[#1C0204] hover:bg-[#3C0409] text-[#FEF08A] border border-[#FACC15]/50 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-[#FFFBEB]/80 mb-5 leading-relaxed">
          This portal allows the website administrator/developer to change service photos, update special posters, and manage blog articles. 
          <span className="block mt-1 text-[#FACC15] font-semibold">
            Normal public visitors will never see any upload or edit buttons.
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#FEF08A] mb-1.5">
              Developer PIN (ಡೀಫಾಲ್ಟ್ ಪಿನ್: 888499)
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-[#FACC15] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError(null);
                }}
                placeholder="Enter 888499"
                autoFocus
                className="w-full bg-[#0D0102] border-2 border-[#FACC15]/50 focus:border-[#FACC15] text-[#FEF08A] text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none transition"
              />
            </div>
            {error && (
              <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1 font-semibold">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{error}</span>
              </p>
            )}
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={closeLoginModal}
              className="flex-1 py-2.5 rounded-xl bg-[#1C0204] hover:bg-[#300307] border border-[#FACC15]/40 text-[#FFFBEB] text-xs font-bold transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#FEF08A] to-[#FACC15] hover:from-[#FFFFFF] hover:to-[#FACC15] text-[#240306] text-xs font-black shadow-lg transition active:scale-95 flex items-center justify-center gap-1.5"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Enter Dev Mode</span>
            </button>
          </div>
        </form>

        <div className="mt-4 pt-3 border-t border-[#FACC15]/20 text-center">
          <p className="text-[11px] text-[#FFFBEB]/50">
            Tip: You can also append <code className="text-[#FACC15]">?dev=true</code> to your website URL to activate automatically.
          </p>
        </div>
      </div>
    </div>
  );
};
