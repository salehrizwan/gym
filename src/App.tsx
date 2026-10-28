/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { ProgramModal } from './components/ProgramModal';
import { Trainers } from './components/Trainers';
import { Membership } from './components/Membership';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FitnessTools } from './components/FitnessTools';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';
import { SettingsModal } from './components/SettingsModal';
import {
  initialGymConfig,
  initialPrograms,
  initialTrainers,
  initialPlans,
  galleryItems,
  Program,
  MembershipPlan,
} from './data/gymData';

export default function App() {
  // Load saved gym configuration or use defaults
  const [gymConfig, setGymConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('iff_gym_config');
      return saved ? JSON.parse(saved) : initialGymConfig;
    } catch {
      return initialGymConfig;
    }
  });

  // Load saved membership plans in PKR or use defaults
  const [plans, setPlans] = useState<MembershipPlan[]>(() => {
    try {
      const saved = localStorage.getItem('iff_membership_plans');
      return saved ? JSON.parse(saved) : initialPlans;
    } catch {
      return initialPlans;
    }
  });

  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [prefilledInterest, setPrefilledInterest] = useState<string>('Standard Membership');

  // Save config changes
  const handleSaveSettings = (updated: {
    gymName: string;
    phone: string;
    whatsappNumber: string;
    address: string;
    plans: MembershipPlan[];
  }) => {
    const newConfig = {
      ...gymConfig,
      name: updated.gymName,
      phone: updated.phone,
      whatsappNumber: updated.whatsappNumber,
      address: updated.address,
    };
    setGymConfig(newConfig);
    setPlans(updated.plans);

    try {
      localStorage.setItem('iff_gym_config', JSON.stringify(newConfig));
      localStorage.setItem('iff_membership_plans', JSON.stringify(updated.plans));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const handleResetSettings = () => {
    setGymConfig(initialGymConfig);
    setPlans(initialPlans);
    try {
      localStorage.removeItem('iff_gym_config');
      localStorage.removeItem('iff_membership_plans');
    } catch (e) {
      console.error('Failed to reset localStorage', e);
    }
  };

  const scrollToContactWithInterest = (interest: string) => {
    setPrefilledInterest(interest);
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-black selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar
        gymName={gymConfig.name}
        phone={gymConfig.phone}
        whatsappNumber={gymConfig.whatsappNumber}
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
        onOpenSettingsModal={() => setIsSettingsModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          gymName={gymConfig.name}
          hours={gymConfig.hoursWeekday}
          onJoinClick={() => {
            const el = document.querySelector('#membership');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExplorePrograms={() => {
            const el = document.querySelector('#programs');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. About Our Gym */}
        <About
          gymName={gymConfig.name}
          onBookTour={() => setIsTrialModalOpen(true)}
        />

        {/* 3. Training Programs */}
        <Programs
          programs={initialPrograms}
          onLearnMore={(prog) => setSelectedProgram(prog)}
          onQuickEnroll={(progTitle) => scrollToContactWithInterest(`${progTitle} Program`)}
        />

        {/* 4. Expert Trainers */}
        <Trainers
          trainers={initialTrainers}
          onBookTrainer={(trainerName) => scrollToContactWithInterest(`1-on-1 Coaching with ${trainerName}`)}
        />

        {/* 5. Membership Plans in PKR */}
        <Membership
          plans={plans}
          onSelectPlan={(plan) => scrollToContactWithInterest(`${plan.name} (PKR)`)}
          onOpenSettings={() => setIsSettingsModalOpen(true)}
        />

        {/* Bonus High-Utility Athletic Tool: 1-Rep Max Calculator */}
        <FitnessTools onBookTrial={() => setIsTrialModalOpen(true)} />

        {/* 6. Gym Gallery */}
        <Gallery items={galleryItems} />

        {/* 7. Member Progression Logs / Testimonials */}
        <Testimonials />

        {/* 8. Contact, Location & Registration */}
        <Contact
          gymName={gymConfig.name}
          address={gymConfig.address}
          phone={gymConfig.phone}
          whatsappNumber={gymConfig.whatsappNumber}
          email={gymConfig.email}
          hoursWeekday={gymConfig.hoursWeekday}
          hoursWeekend={gymConfig.hoursWeekend}
          selectedPlanOrProgram={prefilledInterest}
          onOpenTrialModal={() => setIsTrialModalOpen(true)}
        />
      </main>

      {/* 9. Footer */}
      <Footer
        gymName={gymConfig.name}
        phone={gymConfig.phone}
        whatsappNumber={gymConfig.whatsappNumber}
        email={gymConfig.email}
        address={gymConfig.address}
        hoursWeekday={gymConfig.hoursWeekday}
        hoursWeekend={gymConfig.hoursWeekend}
        onOpenSettings={() => setIsSettingsModalOpen(true)}
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
      />

      {/* Program In-Depth Curriculum Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onSelectProgramForTrial={(progTitle) => scrollToContactWithInterest(`${progTitle} Trial Session`)}
      />

      {/* Free 1-Day Trial Pass Modal */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        gymName={gymConfig.name}
        whatsappNumber={gymConfig.whatsappNumber}
      />

      {/* Live Customizer & Pricing Editor */}
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        gymName={gymConfig.name}
        phone={gymConfig.phone}
        whatsappNumber={gymConfig.whatsappNumber}
        address={gymConfig.address}
        plans={plans}
        onSave={handleSaveSettings}
        onReset={handleResetSettings}
      />
    </div>
  );
}
