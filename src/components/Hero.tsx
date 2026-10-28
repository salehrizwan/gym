import React from 'react';
import { ArrowRight, ShieldCheck, Flame, Compass, Clock, MapPin } from 'lucide-react';

interface HeroProps {
  gymName: string;
  hours?: string;
  onJoinClick: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  gymName,
  hours = '2:00 PM – 11:00 PM',
  onJoinClick,
  onExplorePrograms,
}) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image Container with Measured Light Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/gym_hero_weights_1793166311133.jpg"
          alt="Iron Force Fitness high-end gym facility"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform animate-in fade-in zoom-in-95 duration-1000"
        />
        {/* Measured High-Contrast Light Overlay Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-white/85 to-white" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Subtle Location & Brand Kicker */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-black uppercase mb-4 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
          <Flame className="w-4 h-4 text-black" />
          <span>{gymName} · F-7 Markaz, Islamabad</span>
        </div>

        {/* Main Heading in Jet Black */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-neutral-950 max-w-5xl leading-[1.05] drop-shadow-xs [text-wrap:balance]">
          BUILD YOUR <span className="underline decoration-black decoration-4 underline-offset-8">STRONGEST SELF</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-bold text-neutral-800 max-w-2xl [text-wrap:balance]">
          Train Hard. Stay Focused. Become Unstoppable.
        </p>

        <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl font-medium leading-relaxed">
          Pakistan's premier strength training sanctuary. Championship Olympic lifting platforms, heavy iron vaults, and science-backed conditioning.
        </p>

        {/* CTAs: Primary Black, Secondary White with Black Border */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold uppercase tracking-wider bg-black hover:bg-neutral-800 text-white rounded transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>JOIN THE GYM</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={onExplorePrograms}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-50 border-2 border-black rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-sm hover:shadow-md"
          >
            <Compass className="w-5 h-5 text-black" />
            <span>EXPLORE PROGRAMS</span>
          </button>
        </div>

        {/* Facility Trust Strip */}
        <div className="mt-14 pt-8 border-t border-neutral-200/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="p-4 rounded-lg bg-white/90 border border-neutral-200 backdrop-blur-md shadow-xs">
            <div className="flex items-center gap-2 text-neutral-600 text-xs uppercase font-bold">
              <Clock className="w-3.5 h-3.5 text-black" />
              <span>Hours</span>
            </div>
            <p className="text-sm font-bold text-neutral-900 mt-1">{hours}</p>
          </div>

          <div className="p-4 rounded-lg bg-white/90 border border-neutral-200 backdrop-blur-md shadow-xs">
            <div className="flex items-center gap-2 text-neutral-600 text-xs uppercase font-bold">
              <MapPin className="w-3.5 h-3.5 text-black" />
              <span>Location</span>
            </div>
            <p className="text-sm font-bold text-neutral-900 mt-1 truncate">F-7 Markaz, Islamabad</p>
          </div>

          <div className="p-4 rounded-lg bg-white/90 border border-neutral-200 backdrop-blur-md shadow-xs">
            <div className="flex items-center gap-2 text-neutral-600 text-xs uppercase font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-black" />
              <span>Equipment</span>
            </div>
            <p className="text-sm font-bold text-neutral-900 mt-1">Eleiko & Rogue</p>
          </div>

          <div className="p-4 rounded-lg bg-white/90 border border-neutral-200 backdrop-blur-md shadow-xs">
            <div className="flex items-center gap-2 text-neutral-600 text-xs uppercase font-bold">
              <Flame className="w-3.5 h-3.5 text-black" />
              <span>Day Pass</span>
            </div>
            <p className="text-sm font-bold text-neutral-900 mt-1">Free 1-Day Trial</p>
          </div>
        </div>
      </div>
    </section>
  );
};
