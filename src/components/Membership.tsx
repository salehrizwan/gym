import React, { useState } from 'react';
import { Check, X, Zap, ArrowRight, Settings2 } from 'lucide-react';
import { MembershipPlan } from '../data/gymData';

interface MembershipProps {
  plans: MembershipPlan[];
  onSelectPlan: (plan: MembershipPlan) => void;
  onOpenSettings: () => void;
}

export const Membership: React.FC<MembershipProps> = ({
  plans,
  onSelectPlan,
  onOpenSettings,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  const formatPKR = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      maximumFractionDigits: 0,
    }).format(amount).replace('PKR', 'PKR ');
  };

  return (
    <section id="membership" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-black uppercase mb-2 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
            <Zap className="w-4 h-4 text-black" />
            <span>04 · Membership Tiers</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-neutral-950 tracking-tight">
            TRANSPARENT INVESTMENT IN <span className="underline decoration-black decoration-4">YOUR CAPACITY</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 [text-wrap:balance]">
            No hidden maintenance charges, zero lock-in contracts, and full access to Olympic-grade equipment.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 inline-flex items-center p-1 bg-neutral-100 rounded-lg border border-neutral-300">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded transition-colors whitespace-nowrap cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'quarterly'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <span>Quarterly (Save 10%)</span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.priceMonthlyPKR : plan.priceQuarterlyPKR;
            const periodLabel = billingCycle === 'monthly' ? '/ month' : '/ 3 months';

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-neutral-50/80 border-2 border-black shadow-xl ring-1 ring-black lg:-translate-y-2'
                    : 'bg-white border border-neutral-200 hover:border-neutral-400 shadow-sm'
                } p-6 sm:p-8`}
              >
                {/* Popular / Recommended Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white text-[11px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-md whitespace-nowrap">
                    RECOMMENDED CHOICE
                  </div>
                )}

                <div>
                  {/* Plan Title & Tagline */}
                  <div className="border-b border-neutral-200 pb-6">
                    <h3 className="font-display text-2xl font-bold uppercase text-black tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1 min-h-[32px] font-medium">
                      {plan.tagline}
                    </p>

                    {/* Price in PKR */}
                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-black tabular-nums tracking-tight">
                        {formatPKR(price)}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-neutral-500">
                        {periodLabel}
                      </span>
                    </div>

                    <div className="text-[11px] text-neutral-500 mt-1">
                      {billingCycle === 'monthly' ? 'Billed monthly · Cancel anytime' : 'Billed upfront for 90 days'}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="py-6 space-y-3.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-black">
                      What's Included:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-black shrink-0 mt-0.5 font-bold" />
                        ) : (
                          <X className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-neutral-800 font-medium' : 'text-neutral-400 line-through'}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Button */}
                <div className="pt-6 border-t border-neutral-200">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 px-4 font-bold uppercase tracking-wider text-xs sm:text-sm rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-black hover:bg-neutral-800 text-white shadow-md hover:shadow-lg'
                        : 'bg-white hover:bg-neutral-100 text-black border-2 border-black'
                    }`}
                  >
                    <span>Choose {plan.name.replace(' Membership', '')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customizer / Admin Notice */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-neutral-600">
          <span>Need to modify Pakistan Rupee pricing, perks, or gym contact details?</span>
          <button
            onClick={onOpenSettings}
            className="text-black hover:underline font-bold flex items-center gap-1 cursor-pointer"
          >
            <Settings2 className="w-3.5 h-3.5 text-black" />
            <span>Open Live Price & Details Editor</span>
          </button>
        </div>
      </div>
    </section>
  );
};
