import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Program } from '../data/gymData';

interface ProgramsProps {
  programs: Program[];
  onLearnMore: (program: Program) => void;
  onQuickEnroll: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({
  programs,
  onLearnMore,
  onQuickEnroll,
}) => {
  return (
    <section id="programs" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-black uppercase mb-2 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
            <Zap className="w-4 h-4 text-black" />
            <span>02 · Training Disciplines</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-neutral-950 tracking-tight">
            ENGINEERED FOR <span className="underline decoration-black decoration-4">MAXIMUM ADAPTATION</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 [text-wrap:balance]">
            Choose your battlefield. Every program is grounded in exercise physiology, progressive overload, and injury-resilient movement patterns.
          </p>
        </div>

        {/* 6 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-black transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              {/* Card Image */}
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <img
                  src={program.image}
                  alt={program.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Clean unboxed metadata (anti-pill) */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-semibold text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded">
                  <span className="font-bold">{program.intensity}</span>
                  <span aria-hidden="true" className="text-neutral-400">·</span>
                  <span>{program.focus.split('&')[0]}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-black group-hover:underline transition-colors tracking-tight">
                    {program.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-700 font-semibold tracking-wide">
                    {program.tagline}
                  </p>
                  <p className="mt-3 text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-100 space-y-1.5">
                    {program.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-black" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onLearnMore(program)}
                    className="text-xs sm:text-sm font-bold text-black hover:underline flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>

                  <button
                    onClick={() => onQuickEnroll(program.title)}
                    className="text-xs font-bold px-3.5 py-2 rounded bg-black hover:bg-neutral-800 text-white transition-all whitespace-nowrap cursor-pointer shadow-xs"
                  >
                    Try Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
