import React, { useState } from 'react';
import { Menu, X, Dumbbell, Phone, ChevronRight } from 'lucide-react';

interface NavbarProps {
  gymName: string;
  phone: string;
  whatsappNumber: string;
  onOpenTrialModal: () => void;
  onOpenSettingsModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  gymName,
  whatsappNumber,
  onOpenTrialModal,
  onOpenSettingsModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Membership', href: '#membership' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 text-xl sm:text-2xl font-extrabold tracking-wider text-black uppercase whitespace-nowrap shrink-0 group"
        >
          <div className="w-9 h-9 rounded bg-black flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <span className="font-display tracking-wide text-neutral-900">
            {gymName.split(' ')[0]} <span className="text-black font-black">{gymName.split(' ').slice(1).join(' ')}</span>
          </span>
        </a>

        {/* Zone 2: 4-7 Clean Single-Line Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="hover:text-black transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Quick Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSettingsModal}
            className="hidden sm:inline-flex items-center text-xs font-semibold px-2.5 py-1.5 rounded border border-neutral-300 hover:border-black text-neutral-700 hover:text-black transition-colors whitespace-nowrap cursor-pointer"
            title="Edit gym details, prices & phone numbers"
          >
            Customize
          </button>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%20${encodeURIComponent(gymName)},%20I%20would%20like%20to%20inquire%20about%20memberships.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 hover:text-black px-3 py-2 rounded border border-neutral-300 hover:border-black hover:bg-neutral-50 transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-black" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenTrialModal}
            className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold tracking-wide uppercase bg-black hover:bg-neutral-800 text-white rounded transition-all shadow-md hover:shadow-lg whitespace-nowrap shrink-0 active:scale-95 cursor-pointer"
          >
            Book Free Trial
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-base font-semibold text-neutral-800 hover:text-black py-1.5 border-b border-neutral-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider bg-black text-white rounded shadow-md"
              >
                Book Free Trial Pass
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSettingsModal();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-neutral-700 border border-neutral-300 rounded hover:bg-neutral-100"
              >
                Edit Gym Details & PKR Prices
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
