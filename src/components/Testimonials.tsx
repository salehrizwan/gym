import React from 'react';
import { Quote, TrendingUp } from 'lucide-react';
import { memberTestimonials } from '../data/gymData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8fafc] border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-black uppercase mb-2">
            06 · Athletic Progression Stories
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-neutral-950 tracking-tight">
            FORGED BY <span className="underline decoration-black decoration-4">CONSISTENT EFFORT</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 [text-wrap:balance]">
            Representative member training logs illustrating tangible physical and metric adaptations.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memberTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-black transition-all duration-300 flex flex-col justify-between relative group shadow-sm hover:shadow-lg"
            >
              {/* Black Quote Icon */}
              <Quote className="w-8 h-8 text-black mb-4" />

              <div>
                {/* Metric Achievement Highlight */}
                <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider mb-3">
                  <TrendingUp className="w-3.5 h-3.5 text-black" />
                  <span>{item.achievement}</span>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed font-medium">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Attributable Info */}
              <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
                    {item.name}
                  </h4>
                  <div className="text-xs text-neutral-500 flex items-center gap-1.5 mt-0.5">
                    <span>{item.role}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet disclaimer */}
        <p className="text-center text-[11px] text-neutral-500 mt-8 max-w-xl mx-auto">
          *Member accounts represent sample fitness profiles and progressive strength adaptation logs achieved through dedicated adherence to progressive overload and personalized nutrition.
        </p>
      </div>
    </section>
  );
};
