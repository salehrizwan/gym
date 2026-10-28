import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Flame } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  gymName: string;
  whatsappNumber: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  gymName,
  whatsappNumber,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('Tomorrow');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSuccess(true);
  };

  const passId = `PASS-FREE-${Math.floor(100 + Math.random() * 900)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white border border-neutral-300 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-white/20 text-white hover:text-white hover:bg-white/30 transition-colors shadow-xs"
          aria-label="Close trial pass modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Bar in Solid Black */}
        <div className="bg-black p-6 text-white text-center">
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Flame className="w-3.5 h-3.5" />
            <span>100% Free · Zero Commitment</span>
          </div>
          <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white">
            CLAIM YOUR 1-DAY ALL-ACCESS PASS
          </h3>
          <p className="text-xs text-neutral-300 mt-1">
            Experience the Olympic platforms, conditioning deck & meet our head coaches.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 text-neutral-900 bg-white">
          {isSuccess ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-neutral-100 text-black rounded-full flex items-center justify-center mx-auto border-2 border-black">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-display text-xl font-bold uppercase text-black">
                Free Pass Confirmed!
              </h4>
              <p className="text-xs text-neutral-600">
                Show this digital pass code at the front desk when arriving:
              </p>
              <div className="font-mono text-xl font-extrabold text-black bg-neutral-100 p-3 rounded-lg border-2 border-dashed border-black tracking-wider">
                {passId}
              </div>
              <div className="text-[11px] text-neutral-500">
                Valid for {preferredDate} during standard hours (6:00 AM – 10:00 PM).
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20${encodeURIComponent(gymName)},%20I%20have%20claimed%20Free%20Trial%20Pass%20${passId}%20under%20the%20name%20${encodeURIComponent(name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 text-xs font-bold uppercase bg-black hover:bg-neutral-800 text-white rounded-lg transition-colors text-center shadow-xs"
                >
                  Confirm Slot on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleClaim} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-neutral-800 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bilal Tariq"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-300 focus:border-black rounded-lg px-3.5 py-2 text-sm text-black placeholder-neutral-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-800 mb-1">
                  WhatsApp / Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0300 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-300 focus:border-black rounded-lg px-3.5 py-2 text-sm text-black placeholder-neutral-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-800 mb-1">
                  When Would You Like to Visit?
                </label>
                <select
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-300 focus:border-black rounded-lg px-3.5 py-2 text-sm text-black outline-none"
                >
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Weekend">This Weekend</option>
                  <option value="Next Week">Next Week</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs sm:text-sm font-bold uppercase tracking-wider bg-black hover:bg-neutral-800 text-white rounded-lg transition-all shadow-md cursor-pointer"
                >
                  Generate Free Day Pass
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-black" />
                <span>No credit card required. Free locker & towel provided.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
