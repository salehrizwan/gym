import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export const FitnessTools: React.FC<{ onBookTrial: () => void }> = ({ onBookTrial }) => {
  const [weight, setWeight] = useState<number>(100);
  const [reps, setReps] = useState<number>(5);
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');

  // Epley Formula: 1RM = Weight * (1 + Reps / 30)
  const oneRepMax = reps === 1 ? weight : Math.round(weight * (1 + reps / 30));

  const percentages = [
    { pct: 95, label: 'Near Max Effort', weight: Math.round(oneRepMax * 0.95), reps: '1-2 reps' },
    { pct: 90, label: 'Heavy Strength', weight: Math.round(oneRepMax * 0.90), reps: '3-4 reps' },
    { pct: 85, label: 'Hypertrophy Power', weight: Math.round(oneRepMax * 0.85), reps: '5-6 reps' },
    { pct: 80, label: 'Working Volume', weight: Math.round(oneRepMax * 0.80), reps: '7-8 reps' },
    { pct: 75, label: 'Speed & Endurance', weight: Math.round(oneRepMax * 0.75), reps: '9-10 reps' },
    { pct: 70, label: 'Conditioning Deload', weight: Math.round(oneRepMax * 0.70), reps: '12+ reps' },
  ];

  return (
    <section className="py-20 bg-[#f8fafc] border-t border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-black uppercase mb-2">
              <Calculator className="w-4 h-4 text-black" />
              <span>Athletic Tools</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-neutral-950 tracking-tight">
              CALCULATE YOUR <span className="underline decoration-black decoration-4">ONE-REP MAX</span>
            </h2>
            <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-medium">
              Estimate your true maximal force production and determine exact percentage loads for strength blocks, bench press, deadlift, or squat sessions.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-white border border-neutral-200 shadow-xs space-y-2">
              <div className="text-xs font-bold uppercase text-black">Why 1RM Matters:</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                At Iron Force, every strength program is programmed strictly against percentage-based loading to prevent premature CNS burnout and ensure progressive overload.
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={onBookTrial}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-neutral-800 px-5 py-3 rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>Test 1RM on Our Calibrated Platforms</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right interactive calculator */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
            <div className="flex items-center justify-between pb-5 border-b border-neutral-200">
              <span className="text-sm font-bold uppercase tracking-wider text-black">
                Lift Parameters
              </span>
              <div className="flex items-center gap-1 p-0.5 bg-neutral-100 rounded-lg border border-neutral-300">
                <button
                  onClick={() => setUnit('kg')}
                  className={`px-3 py-1 text-xs font-bold rounded cursor-pointer ${
                    unit === 'kg' ? 'bg-black text-white' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  KG
                </button>
                <button
                  onClick={() => setUnit('lbs')}
                  className={`px-3 py-1 text-xs font-bold rounded cursor-pointer ${
                    unit === 'lbs' ? 'bg-black text-white' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  LBS
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-2">
                  Weight Lifted ({unit})
                </label>
                <input
                  type="number"
                  min="10"
                  max="500"
                  value={weight || ''}
                  onChange={(e) => setWeight(Number(e.target.value) || 0)}
                  className="w-full bg-neutral-50 border border-neutral-300 focus:border-black rounded-lg px-4 py-2.5 text-black font-mono text-lg outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-2">
                  Repetitions Completed (1-12)
                </label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={reps || ''}
                  onChange={(e) => setReps(Math.min(12, Math.max(1, Number(e.target.value) || 1)))}
                  className="w-full bg-neutral-50 border border-neutral-300 focus:border-black rounded-lg px-4 py-2.5 text-black font-mono text-lg outline-none transition-colors"
                />
              </div>
            </div>

            {/* Estimated 1RM Highlight */}
            <div className="mt-6 p-4 rounded-xl bg-neutral-100 border border-neutral-300 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase font-bold text-neutral-800">Estimated 1-Rep Max</div>
                <div className="text-xs text-neutral-500">Based on Epley & Brzycki formula</div>
              </div>
              <div className="text-right">
                <span className="font-display text-3xl sm:text-4xl font-black text-black tabular-nums">
                  {oneRepMax}
                </span>
                <span className="text-sm font-bold text-neutral-700 ml-1">{unit}</span>
              </div>
            </div>

            {/* Percentage Breakdown Grid */}
            <div className="mt-6">
              <div className="text-xs font-bold text-neutral-700 uppercase mb-3">
                Training Load Percentage Table
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {percentages.map((p) => (
                  <div key={p.pct} className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center justify-between text-xs text-neutral-600">
                      <span className="font-bold text-black">{p.pct}%</span>
                      <span>{p.reps}</span>
                    </div>
                    <div className="font-mono text-base font-bold text-black mt-1 tabular-nums">
                      {p.weight} {unit}
                    </div>
                    <div className="text-[10px] text-neutral-500 truncate">{p.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
