import React from 'react';
import { Dumbbell, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  gymName: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  hoursWeekday: string;
  hoursWeekend: string;
  onOpenSettings: () => void;
  onOpenTrialModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  gymName,
  phone,
  email,
  address,
  hoursWeekday,
  hoursWeekend,
  onOpenSettings,
  onOpenTrialModal,
}) => {
  return (
    <footer className="bg-[#f4f4f5] border-t border-neutral-300 text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 & 2: Brand Lockup & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 text-xl font-extrabold text-black uppercase tracking-wider group">
              <div className="w-8 h-8 rounded bg-black flex items-center justify-center text-white shadow-xs">
                <Dumbbell className="w-4 h-4 text-white" />
              </div>
              <span className="font-display">
                {gymName.split(' ')[0]} <span className="text-black font-black">{gymName.split(' ').slice(1).join(' ')}</span>
              </span>
            </a>

            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
              Pakistan's highest standard strength and performance facility. Dedicated to heavy barbell progression, athletic conditioning, and scientific bodybuilding.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-200 hover:bg-black text-neutral-800 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-200 hover:bg-black text-neutral-800 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-200 hover:bg-black text-neutral-800 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-black">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-black transition-colors font-medium">Home Base</a></li>
              <li><a href="#about" className="hover:text-black transition-colors font-medium">About Facility</a></li>
              <li><a href="#programs" className="hover:text-black transition-colors font-medium">Training Programs</a></li>
              <li><a href="#trainers" className="hover:text-black transition-colors font-medium">Expert Trainers</a></li>
              <li><a href="#membership" className="hover:text-black transition-colors font-medium">Membership Plans</a></li>
              <li><a href="#gallery" className="hover:text-black transition-colors font-medium">Gym Gallery</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors font-medium">Contact & Location</a></li>
            </ul>
          </div>

          {/* Column 4: Hours & Operation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-black">
              Opening Hours
            </h4>
            <div className="text-sm space-y-2">
              <div>
                <span className="text-neutral-500 block text-xs font-medium">Monday – Saturday</span>
                <span className="text-black font-bold">{hoursWeekday}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-xs font-medium">Sunday</span>
                <span className="text-black font-bold">{hoursWeekend}</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenTrialModal}
                  className="text-xs font-bold text-black hover:underline uppercase tracking-wide block cursor-pointer"
                >
                  Book 1-Day Trial Pass →
                </button>
              </div>
            </div>
          </div>

          {/* Column 5: Desk & Help */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-black">
              Lifting Floor Desk
            </h4>
            <div className="text-sm space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-neutral-700">{address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-black shrink-0" />
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-xs font-bold text-neutral-800 hover:text-black">
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-black shrink-0" />
                <a href={`mailto:${email}`} className="text-xs text-neutral-800 hover:text-black truncate font-medium">
                  {email}
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenSettings}
                  className="text-[11px] text-neutral-600 hover:text-black underline cursor-pointer"
                >
                  Edit Gym Information & PKR Pricing
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {gymName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-black">Safety Protocols</a>
            <span aria-hidden="true">·</span>
            <a href="#membership" className="hover:text-black">Member Terms</a>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="hover:text-black">Directions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
