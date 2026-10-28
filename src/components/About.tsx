import React, { useState } from 'react';
import { Target, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutProps {
  gymName: string;
  onBookTour: () => void;
}

export const About: React.FC<AboutProps> = ({ gymName, onBookTour }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'facility' | 'standards'>('mission');

  const stats = [
    { value: '1,800+', label: 'Active Members', detail: 'Consistent monthly athletes' },
    { value: '24+', label: 'Expert Trainers', detail: 'CSCS & IWF certified' },
    { value: '12+', label: 'Years of Excellence', detail: 'Forging lifters since 2014' },
    { value: '20,000', label: 'Sq. Ft. Training Floor', detail: 'Spacious high-ceiling facility' },
  ];

  return (
    <section id="about" className="py-24 bg-[#f8fafc] border-t border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold tracking-widest text-black uppercase mb-2">
              01 · The Iron Force Standard
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-neutral-950 tracking-tight">
              BUILT FOR THOSE WHO <span className="underline decoration-black decoration-4">REFUSE MEDIOCRITY</span>
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md text-sm sm:text-base leading-relaxed font-medium">
            We stripped away unnecessary gym fluff and engineered an uncompromising performance sanctuary where science, intensity, and brotherhood forge true physical capability.
          </p>
        </div>

        {/* 2-Column Split: Visual Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          {/* Column 1: High Impact Facility Showcase with Fallback */}
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-neutral-200 shadow-md group min-h-[380px] lg:min-h-full">
            <img
              src="/src/assets/images/gym_equipment_facility_1793166311786.jpg"
              alt="Iron Force high performance training floor"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase font-bold tracking-wider text-white bg-black/70 px-2.5 py-1 rounded">
                Championship Environment
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                Precision Equipment. Zero Compromise.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 mt-2">
                Every barbell is calibrated to competition tolerances. Designed for lifters who respect the discipline of hard physical work.
              </p>
            </div>
          </div>

          {/* Column 2: Tabbed Editorial Breakdown */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white p-6 sm:p-8 rounded-xl border border-neutral-200 shadow-sm">
            <div>
              {/* Functional Segmented Controls */}
              <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg border border-neutral-200 mb-8">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === 'mission'
                      ? 'bg-black text-white shadow-xs'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab('facility')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === 'facility'
                      ? 'bg-black text-white shadow-xs'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  The Facility
                </button>
                <button
                  onClick={() => setActiveTab('standards')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === 'standards'
                      ? 'bg-black text-white shadow-xs'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  Coaching Code
                </button>
              </div>

              {/* Tab Contents */}
              {activeTab === 'mission' && (
                <div className="space-y-4 animate-in fade-in-50 duration-200">
                  <h4 className="text-xl font-bold text-neutral-900">To Build Unbreakable Physical & Mental Resilience</h4>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Founded in Islamabad with a singular directive: provide serious athletes and fitness seekers an environment completely detached from trend-driven commercial fitness gimmicks.
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    At {gymName}, lifting is a discipline. We treat strength training as preventative medicine, cognitive clarity, and physical power. Whether you are squatting your first 60 kg or deadlifting 250 kg, the culture demands your absolute focus.
                  </p>
                  <div className="pt-2 space-y-2.5">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                      <CheckCircle className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Zero tolerance for distracted workout environments or crowded waiting lines</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                      <CheckCircle className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Dedicated chalk stations, high-grip rubber platforms, and heavy-duty safety cages</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'facility' && (
                <div className="space-y-4 animate-in fade-in-50 duration-200">
                  <h4 className="text-xl font-bold text-neutral-900">20,000 Sq. Ft. of Purpose-Built Strength</h4>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Four distinct training sectors engineered to eliminate bottlenecks during peak training hours:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                      <div className="text-xs font-bold text-black uppercase">Zone 1</div>
                      <div className="text-sm font-bold text-neutral-900 mt-0.5">Heavy Iron Vault</div>
                      <div className="text-xs text-neutral-600 mt-1">Dumbbells up to 60kg, 8 power racks, calibrated plates.</div>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                      <div className="text-xs font-bold text-black uppercase">Zone 2</div>
                      <div className="text-sm font-bold text-neutral-900 mt-0.5">Olympic Platforms</div>
                      <div className="text-xs text-neutral-600 mt-1">6 IWF platforms with competition bearing barbells.</div>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                      <div className="text-xs font-bold text-black uppercase">Zone 3</div>
                      <div className="text-sm font-bold text-neutral-900 mt-0.5">Astroturf & Sled Track</div>
                      <div className="text-xs text-neutral-600 mt-1">50m sprint deck with prowlers and battle ropes.</div>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                      <div className="text-xs font-bold text-black uppercase">Zone 4</div>
                      <div className="text-sm font-bold text-neutral-900 mt-0.5">Recovery & Contrast Suite</div>
                      <div className="text-xs text-neutral-600 mt-1">Cedarwood infrared saunas and cold immersion tubs.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'standards' && (
                <div className="space-y-4 animate-in fade-in-50 duration-200">
                  <h4 className="text-xl font-bold text-neutral-900">Coaches Who Actually Practice What They Preach</h4>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    No weekend certificate holders. Every trainer on our floor holds collegiate-level biomechanics degrees, NSCA-CSCS, or national athletic titles.
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    We conduct bi-weekly staff technical drills in spine preservation, shoulder impingement prevention, and kinematic trajectory analysis.
                  </p>
                  <div className="pt-2 space-y-2.5">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                      <CheckCircle className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Form-first protocol before loading any barbell</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                      <CheckCircle className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Custom periodized progression sheets, not random workouts of the day</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-8 mt-6 border-t border-neutral-200 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                Want to see the platforms in person?
              </span>
              <button
                onClick={onBookTour}
                className="text-xs sm:text-sm font-bold text-black hover:underline flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Book a Guided Facility Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabular Statistics Strip in Crisp White Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-black transition-all duration-300 group shadow-xs hover:shadow-md"
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-black tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-wider text-neutral-900 mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-500 mt-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
