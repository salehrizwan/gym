import React, { useState } from 'react';
import { X, Save, RotateCcw, Building2 } from 'lucide-react';
import { MembershipPlan } from '../data/gymData';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  gymName: string;
  phone: string;
  whatsappNumber: string;
  address: string;
  plans: MembershipPlan[];
  onSave: (config: {
    gymName: string;
    phone: string;
    whatsappNumber: string;
    address: string;
    plans: MembershipPlan[];
  }) => void;
  onReset: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  gymName: initialGymName,
  phone: initialPhone,
  whatsappNumber: initialWhatsapp,
  address: initialAddress,
  plans: initialPlans,
  onSave,
  onReset,
}) => {
  const [gymName, setGymName] = useState(initialGymName);
  const [phone, setPhone] = useState(initialPhone);
  const [whatsappNumber, setWhatsappNumber] = useState(initialWhatsapp);
  const [address, setAddress] = useState(initialAddress);
  const [plans, setPlans] = useState<MembershipPlan[]>(initialPlans);

  if (!isOpen) return null;

  const handlePriceChange = (id: string, monthly: number, quarterly: number) => {
    setPlans(prev => prev.map(p => {
      if (p.id === id) {
        return {
          ...p,
          priceMonthlyPKR: monthly,
          priceQuarterlyPKR: quarterly,
        };
      }
      return p;
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      gymName,
      phone,
      whatsappNumber,
      address,
      plans,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white border border-neutral-300 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-5 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-black" />
            <h3 className="font-display text-lg font-bold uppercase text-black tracking-wide">
              Live Customizer & Pricing Editor
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-black rounded"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-6 text-neutral-900 bg-white">
          <p className="text-xs text-neutral-600">
            Edit your brand name, Pakistani Rupee membership prices, contact numbers, and location. Updates apply immediately across the website.
          </p>

          {/* Brand Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-black">
              Gym Brand & Location
            </h4>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Gym Brand Name
              </label>
              <input
                type="text"
                value={gymName}
                onChange={(e) => setGymName(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 focus:border-black rounded-lg px-3 py-2 text-sm text-black outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-300 focus:border-black rounded-lg px-3 py-2 text-sm text-black outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  WhatsApp Number (Digits Only, e.g. 923001234567)
                </label>
                <input
                  type="text"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value.replace(/[^0-9]/g, ''))}
                  className="w-full bg-neutral-50 border border-neutral-300 focus:border-black rounded-lg px-3 py-2 text-sm text-black outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Full Physical Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-300 focus:border-black rounded-lg px-3 py-2 text-sm text-black outline-none"
              />
            </div>
          </div>

          {/* Membership Pricing in PKR */}
          <div className="space-y-4 pt-4 border-t border-neutral-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-black">
              Membership Pricing (in PKR)
            </h4>

            {plans.map((plan) => (
              <div key={plan.id} className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                <div className="text-xs font-bold uppercase text-neutral-900 flex items-center justify-between">
                  <span>{plan.name}</span>
                  {plan.isPopular && <span className="text-black font-extrabold text-[10px] bg-neutral-200 px-2 py-0.5 rounded">RECOMMENDED</span>}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-neutral-600 font-semibold mb-0.5">Monthly (PKR)</label>
                    <input
                      type="number"
                      value={plan.priceMonthlyPKR}
                      onChange={(e) => {
                        const val = Number(e.target.value) || 0;
                        handlePriceChange(plan.id, val, plan.priceQuarterlyPKR);
                      }}
                      className="w-full bg-white border border-neutral-300 rounded px-2.5 py-1.5 text-xs text-black font-mono font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-neutral-600 font-semibold mb-0.5">Quarterly (PKR)</label>
                    <input
                      type="number"
                      value={plan.priceQuarterlyPKR}
                      onChange={(e) => {
                        const val = Number(e.target.value) || 0;
                        handlePriceChange(plan.id, plan.priceMonthlyPKR, val);
                      }}
                      className="w-full bg-white border border-neutral-300 rounded px-2.5 py-1.5 text-xs text-black font-mono font-bold"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-neutral-200 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                onReset();
                onClose();
              }}
              className="text-xs text-neutral-600 hover:text-black flex items-center gap-1.5 py-2 px-3 rounded hover:bg-neutral-100 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-black rounded border border-neutral-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-black hover:bg-neutral-800 text-white rounded-lg transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
