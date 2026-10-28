import React, { useEffect } from 'react';
import { X, Calendar, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { Program } from '../data/gymData';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onSelectProgramForTrial: (programTitle: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onSelectProgramForTrial,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (program) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-neutral-800 hover:text-black hover:bg-neutral-100 transition-colors shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-1">
              <span>{program.intensity} Intensity</span>
              <span aria-hidden="true">·</span>
              <span>Structured Curriculum</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-white text-neutral-900">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
              Program Overview
            </h4>
            <p className="text-base text-black leading-relaxed font-bold">
              {program.tagline}
            </p>
            <p className="text-sm text-neutral-700 mt-2 leading-relaxed">
              {program.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-600 uppercase">
                <Target className="w-4 h-4 text-black" />
                <span>Primary Focus</span>
              </div>
              <p className="text-sm font-bold text-black mt-1.5">{program.focus}</p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-600 uppercase">
                <Calendar className="w-4 h-4 text-black" />
                <span>Weekly Schedule</span>
              </div>
              <p className="text-sm font-bold text-black mt-1.5">{program.schedule}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              Included In This Program
            </h4>
            <div className="space-y-2.5">
              {program.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-500 font-medium">
              Free trial session available for all new attendees.
            </span>
            <button
              onClick={() => {
                onSelectProgramForTrial(program.title);
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-3.5 font-bold uppercase tracking-wider text-xs sm:text-sm bg-black hover:bg-neutral-800 text-white rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enroll In Free Trial Session</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
