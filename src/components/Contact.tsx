import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle, 
  ExternalLink, Sparkles, AlertCircle 
} from 'lucide-react';

interface ContactProps {
  gymName: string;
  address: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  hoursWeekday: string;
  hoursWeekend: string;
  selectedPlanOrProgram?: string;
  onOpenTrialModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  gymName,
  address,
  phone,
  whatsappNumber,
  email,
  hoursWeekday,
  hoursWeekend,
  selectedPlanOrProgram,
  onOpenTrialModal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: selectedPlanOrProgram || 'Standard Membership',
    timeSlot: 'Morning (6:00 AM - 10:00 AM)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedPass, setSubmittedPass] = useState<{
    id: string;
    name: string;
    interest: string;
    date: string;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      errs.phone = 'Please enter a valid phone number (e.g., 0300 1234567)';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate verified registration confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedPass({
        id: `IFF-${Math.floor(1000 + Math.random() * 9000)}`,
        name: formData.name,
        interest: formData.interest,
        date: new Date().toLocaleDateString('en-PK', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
      });
    }, 700);
  };

  const whatsappInquiryUrl = `https://wa.me/${whatsappNumber}?text=Hi%20${encodeURIComponent(gymName)},%20my%20name%20is%20${encodeURIComponent(formData.name || 'Member')}.%20I'd%20like%20to%20inquire%20about%20${encodeURIComponent(formData.interest || 'Membership')}.`;

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold tracking-widest text-black uppercase mb-2">
              07 · Join & Connect
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-neutral-950 tracking-tight">
              BEGIN YOUR <span className="underline decoration-black decoration-4">TRANSFORMATION</span>
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md text-sm sm:text-base leading-relaxed font-medium">
            Drop by our facility, message our coaching desk on WhatsApp, or book your free one-day trial pass right here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Form & Confirmed Pass */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xl">
            {submittedPass ? (
              <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-neutral-100 text-black rounded-full flex items-center justify-center mx-auto mb-4 border border-black">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-neutral-950">
                  Registration Received
                </h3>
                <p className="text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                  Welcome aboard, <strong className="text-black">{submittedPass.name}</strong>. Your trial pass and training slot have been reserved in our system.
                </p>

                {/* Digital Pass Ticket in Light Theme */}
                <div className="mt-6 max-w-sm mx-auto p-5 rounded-xl bg-neutral-50 border-2 border-dashed border-black text-left">
                  <div className="flex items-center justify-between text-xs text-neutral-500 border-b border-neutral-200 pb-2">
                    <span className="font-mono text-black font-extrabold">{submittedPass.id}</span>
                    <span>{submittedPass.date}</span>
                  </div>
                  <div className="mt-3">
                    <div className="text-xs text-neutral-500">Selected Discipline</div>
                    <div className="text-sm font-bold text-black mt-0.5">{submittedPass.interest}</div>
                  </div>
                  <div className="mt-3">
                    <div className="text-xs text-neutral-500">Location</div>
                    <div className="text-xs font-semibold text-neutral-800 mt-0.5">{address}</div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmittedPass(null);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        interest: 'Standard Membership',
                        timeSlot: 'Morning (6:00 AM - 10:00 AM)',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-neutral-700 hover:text-black rounded-lg border border-neutral-300 hover:border-black cursor-pointer"
                  >
                    Register Another Athlete
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-black">
                      Request Trial / Membership
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Enter your details below and our head coach will confirm your slot.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenTrialModal}
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-black border border-neutral-300 px-3 py-1.5 rounded hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Free 1-Day Pass</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-800 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Asad Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-neutral-50 border ${
                        errors.name ? 'border-red-600' : 'border-neutral-300'
                      } focus:border-black rounded-lg px-4 py-2.5 text-sm text-black placeholder-neutral-400 outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-800 mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-neutral-50 border ${
                          errors.phone ? 'border-red-600' : 'border-neutral-300'
                        } focus:border-black rounded-lg px-4 py-2.5 text-sm text-black placeholder-neutral-400 outline-none transition-colors`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-800 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. asad@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-neutral-50 border ${
                          errors.email ? 'border-red-600' : 'border-neutral-300'
                        } focus:border-black rounded-lg px-4 py-2.5 text-sm text-black placeholder-neutral-400 outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-800 mb-1.5">
                        Program or Membership Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-300 focus:border-black rounded-lg px-4 py-2.5 text-sm text-black outline-none transition-colors"
                      >
                        <option value="Basic Membership (PKR 8,500/mo)">Basic Membership (PKR 8,500/mo)</option>
                        <option value="Standard Membership (PKR 14,000/mo)">Standard Membership (PKR 14,000/mo)</option>
                        <option value="Premium Membership (PKR 22,500/mo)">Premium Membership (PKR 22,500/mo)</option>
                        <option value="Strength Training Program">Strength Training Program</option>
                        <option value="Olympic Weightlifting Program">Olympic Weightlifting Program</option>
                        <option value="Bodybuilding & Hypertrophy">Bodybuilding & Hypertrophy</option>
                        <option value="Cardio & Endurance">Cardio & Endurance</option>
                        <option value="1-on-1 Personal Coaching">1-on-1 Personal Coaching</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-800 mb-1.5">
                        Preferred Training Time Slot
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-300 focus:border-black rounded-lg px-4 py-2.5 text-sm text-black outline-none transition-colors"
                      >
                        <option value="Early Morning (6:00 AM - 9:00 AM)">Early Morning (6:00 AM - 9:00 AM)</option>
                        <option value="Mid-Day (11:00 AM - 3:00 PM)">Mid-Day (11:00 AM - 3:00 PM)</option>
                        <option value="Evening Peak (5:00 PM - 8:30 PM)">Evening Peak (5:00 PM - 8:30 PM)</option>
                        <option value="Late Night (8:30 PM - 11:00 PM)">Late Night (8:30 PM - 11:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-800 mb-1.5">
                      Your Fitness Goals / Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Looking to improve my deadlift technique and lose 8kg. Have trained before."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 focus:border-black rounded-lg px-4 py-2.5 text-sm text-black placeholder-neutral-400 outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 font-bold uppercase tracking-wider text-sm bg-black hover:bg-neutral-800 text-white rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing Slot...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Submit Registration & Request Trial</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Location, Map, & Direct WhatsApp Action */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location & Map Card */}
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 shadow-sm">
              <h3 className="font-display text-xl font-bold uppercase text-black mb-4">
                Facility Location
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-neutral-800">
                  <MapPin className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-black">Iron Force Fitness Club</div>
                    <div className="text-neutral-600 mt-0.5 leading-relaxed">{address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-neutral-800">
                  <Clock className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-black">Training Hours</div>
                    <div className="text-neutral-600 mt-0.5">Mon – Sat: {hoursWeekday}</div>
                    <div className="text-neutral-600">Sunday: {hoursWeekend}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-neutral-800">
                  <Mail className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-black">Desk Email</div>
                    <div className="text-neutral-600 mt-0.5">{email}</div>
                  </div>
                </div>
              </div>

              {/* Interactive Stylized Map Card */}
              <div className="mt-6 rounded-xl overflow-hidden border border-neutral-300 relative h-48 bg-white group shadow-xs">
                <div className="absolute inset-0 bg-neutral-100 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-2 shadow-sm border border-neutral-200">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div className="font-bold text-black text-sm">Sector F-7 Markaz, Islamabad</div>
                  <div className="text-xs text-neutral-500 mt-1">Convenient parking & security on site</div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black hover:bg-neutral-800 px-3.5 py-1.5 rounded-lg transition-colors shadow-xs"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Instant Chat Card */}
            <div className="p-6 rounded-2xl bg-white border-2 border-neutral-300 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-black">Instant WhatsApp Helpdesk</h4>
                  <p className="text-xs text-neutral-600">Direct line to our head trainer & floor manager</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-neutral-500 font-semibold">Desk Number:</div>
                  <div className="font-mono text-sm font-extrabold text-black">{phone}</div>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20${encodeURIComponent(gymName)},%20I'd%20like%20to%20chat%20about%20joining.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-black hover:bg-neutral-800 text-white rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>Chat Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
