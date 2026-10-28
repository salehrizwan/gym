import React from 'react';
import { Calendar } from 'lucide-react';
import { Trainer } from '../data/gymData';

interface TrainersProps {
  trainers: Trainer[];
  onBookTrainer: (trainerName: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ trainers, onBookTrainer }) => {
  return (
    <section id="trainers" className="py-24 bg-[#f8fafc] border-t border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold tracking-widest text-black uppercase mb-2">
              03 · The Coaching Staff
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-neutral-950 tracking-tight">
              WORLD-CLASS <span className="underline decoration-black decoration-4">STRENGTH SPECIALISTS</span>
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md text-sm sm:text-base leading-relaxed font-medium">
            Our coaches don't shout vague encouragement from the sidelines. They analyze biomechanics, calibrate loads, and build lifelong strength resilience.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-black transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xs hover:shadow-lg"
            >
              {/* Trainer Photo Container */}
              <div className="relative h-72 w-full overflow-hidden bg-neutral-100">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-xs font-bold text-black border border-neutral-200 shadow-sm">
                  {trainer.experience}
                </div>
              </div>

              {/* Trainer Information */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-black group-hover:underline transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-bold text-neutral-800 uppercase tracking-wider mt-0.5">
                    {trainer.role}
                  </p>

                  <div className="mt-3 pt-3 border-t border-neutral-100">
                    <div className="text-xs text-neutral-500 font-semibold">Specialty:</div>
                    <div className="text-xs font-bold text-neutral-900 mt-0.5">{trainer.specialty}</div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {trainer.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100">
                  <button
                    onClick={() => onBookTrainer(trainer.name)}
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-wider bg-black hover:bg-neutral-800 text-white rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book 1-on-1 Session</span>
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
