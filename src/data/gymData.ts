export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  intensity: 'Medium' | 'High' | 'Extreme';
  focus: string;
  schedule: string;
  features: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  certifications: string[];
  bio: string;
  image: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  priceMonthlyPKR: number;
  priceQuarterlyPKR: number;
  isPopular?: boolean;
  tagline: string;
  features: { name: string; included: boolean }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Heavy Iron' | 'Conditioning' | 'Facility' | 'Recovery';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  duration: string;
  achievement: string;
  quote: string;
  avatarText: string;
}

export const initialGymConfig = {
  name: "IRON FORCE FITNESS",
  tagline: "Build Your Strongest Self",
  subheading: "Train Hard. Stay Focused. Become Unstoppable.",
  phone: "+92 300 8594211",
  whatsappNumber: "923008594211",
  email: "info@ironforcefitness.pk",
  address: "Plot 18-C, Main Boulevard, Sector F-7 Markaz, Islamabad, Pakistan",
  hoursWeekday: "02:00 PM – 11:00 PM",
  hoursWeekend: "02:00 PM – 08:00 PM",
  googleMapsUrl: "https://maps.google.com/?q=Sector+F-7+Markaz+Islamabad",
};

export const initialPrograms: Program[] = [
  {
    id: "strength-training",
    title: "Strength Training",
    tagline: "Master compound movements and build raw physical power",
    description: "A progressive overload protocol centered on the foundational big lifts: squat, bench press, deadlift, and overhead press. Supervised by national-level powerlifting coaches.",
    image: "/src/assets/images/gym_strength_training_1793166310986.jpg",
    intensity: "Extreme",
    focus: "Maximal Force & Neurological Adaptation",
    schedule: "Mon / Wed / Fri · 6:00 AM & 6:30 PM",
    features: [
      "Dedicated Eleiko & Rogue power racks",
      "Calibrated competition steel discs",
      "Velocity-based training tracking",
      "Bi-weekly form analysis & deload planning"
    ]
  },
  {
    id: "bodybuilding",
    title: "Bodybuilding & Hypertrophy",
    tagline: "Sculpt symmetry, muscle density, and structural definition",
    description: "Specialized resistance training focusing on mind-muscle connection, time under tension, and targeted muscular development with elite selectorized and plate-loaded machines.",
    image: "/src/assets/images/gym_equipment_facility_1793166311786.jpg",
    intensity: "High",
    focus: "Hypertrophy, Symmetry & Aesthetics",
    schedule: "Mon to Sat · Open Floor Coaching",
    features: [
      "Custom Arsenal Strength and Prime Fitness machines",
      "Dumbbells spanning 2.5 kg up to 60 kg",
      "Posing clinic and structural physique checks",
      "Periodized hypertrophy splits with volume cycling"
    ]
  },
  {
    id: "weight-training",
    title: "Olympic Weightlifting",
    tagline: "Explosive triple extension, snatch, and clean & jerk mastery",
    description: "Develop unmatched athleticism, speed under the bar, and mobility through structured Olympic lifting classes on competition-grade hardwood platforms.",
    image: "/src/assets/images/gym_hero_weights_1793166311133.jpg",
    intensity: "Extreme",
    focus: "Kinetic Power, Speed & Balance",
    schedule: "Tue / Thu / Sat · 7:00 AM & 7:00 PM",
    features: [
      "6 IWF-certified hardwood lifting platforms",
      "Men's & women's bearing bars with zero whip lag",
      "Drop blocks and jerk boxes",
      "Video slow-motion kinetic playback station"
    ]
  },
  {
    id: "cardio-endurance",
    title: "Cardio & Endurance",
    tagline: "Unleash metabolic conditioning and VO2 max capacity",
    description: "High-octane conditioning featuring curved manual treadmills, Concept2 ergometers, SkiErgs, and air bikes engineered to elevate stamina and burn fat.",
    image: "/src/assets/images/gym_cardio_endurance_1793166311994.jpg",
    intensity: "High",
    focus: "Aerobic Threshold & Lactate Clearance",
    schedule: "Daily Sessions · 7:30 AM, 12:00 PM, 7:30 PM",
    features: [
      "Woodway non-motorized curved treadmills",
      "Concept2 RowErgs and SkiErgs fleet",
      "Heart-rate zone telemetry monitors",
      "High-intensity interval pacing protocols"
    ]
  },
  {
    id: "personal-training",
    title: "Elite Personal Training",
    tagline: "1-on-1 private coaching tailored strictly to your genetic blueprint",
    description: "Direct mentorship with senior strength specialists. Includes custom nutritional blueprints, in-depth body composition tracking, and private lifting station reservations.",
    image: "/src/assets/images/gym_strength_training_1793166310986.jpg",
    intensity: "High",
    focus: "Individual Goal Accelerated Execution",
    schedule: "Flexible Booking 6:00 AM – 10:00 PM",
    features: [
      "Custom monthly periodized workout program",
      "Macro and micronutrient diet strategy",
      "Mobility screening & injury risk mitigation",
      "Direct 24/7 WhatsApp coach accountability"
    ]
  },
  {
    id: "group-fitness",
    title: "Iron Force Group Conditioning",
    tagline: "High-energy collective grind with an unrelenting community",
    description: "Hard-hitting team sweat sessions combining kettlebell complexes, sled pushes, battle ropes, and functional calisthenics under heart-thumping beats.",
    image: "/src/assets/images/gym_cardio_endurance_1793166311994.jpg",
    intensity: "Medium",
    focus: "Functional Stamina & Team Grit",
    schedule: "Mon / Wed / Fri · 8:00 AM & 6:00 PM",
    features: [
      "50-meter indoor astroturf sprint track",
      "Prowler sleds, battle ropes, and sandbags",
      "Heart rate display on main board",
      "Max 14 athletes per cohort for strict coaching"
    ]
  }
];

export const initialTrainers: Trainer[] = [
  {
    id: "trainer-1",
    name: "Hamza Malik",
    role: "Head Strength & Conditioning Coach",
    specialty: "Powerlifting & Heavy Compound Mechanics",
    experience: "11 Years Experience",
    certifications: ["CSCS (NSCA)", "USA Weightlifting Level 2", "Precision Nutrition L1"],
    bio: "Former national weightlifting athlete with over a decade of coaching elite lifters, competitive athletes, and executives across Pakistan.",
    image: "/src/assets/images/gym_strength_training_1793166310986.jpg"
  },
  {
    id: "trainer-2",
    name: "Zainab Tariq",
    role: "Senior Physique & Hypertrophy Specialist",
    specialty: "Body Recomposition & Posture Alignment",
    experience: "8 Years Experience",
    certifications: ["ACE Certified Personal Trainer", "ISSA Master Trainer", "FMS Functional Movement"],
    bio: "Specializes in biomechanics, muscle hypertrophy without joint wear, and female strength progression with scientific nutritional protocols.",
    image: "/src/assets/images/gym_hero_weights_1793166311133.jpg"
  },
  {
    id: "trainer-3",
    name: "Bilal Sher",
    role: "Metabolic Conditioning & Calisthenics Lead",
    specialty: "VO2 Max, Agility & Athletic Conditioning",
    experience: "7 Years Experience",
    certifications: ["CrossFit Level 2", "TRX Senior Master Instructor", "Red Cross CPR/AED"],
    bio: "Pioneered functional athletic bootcamp programming designed to push human conditioning limits through relentless interval training.",
    image: "/src/assets/images/gym_cardio_endurance_1793166311994.jpg"
  },
  {
    id: "trainer-4",
    name: "Usman Raza",
    role: "Biomechanical Rehab & Mobility Coach",
    specialty: "Spinal Health, Deloading & Injury Prevention",
    experience: "9 Years Experience",
    certifications: ["B.Sc. Exercise Science", "NASM Corrective Exercise Specialist", "FRC Mobility Specialist"],
    bio: "Dedicated to keeping heavy lifters pain-free through pre-hab mobility protocols, active release techniques, and joint stability drills.",
    image: "/src/assets/images/gym_equipment_facility_1793166311786.jpg"
  }
];

export const initialPlans: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic Membership",
    priceMonthlyPKR: 8500,
    priceQuarterlyPKR: 22900,
    isPopular: false,
    tagline: "Essential access for consistent solo lifters",
    features: [
      { name: "Full Gym Floor & Dumbbell Area Access", included: true },
      { name: "Locker Room & Shower Access", included: true },
      { name: "Access During Standard Hours (6am - 10pm)", included: true },
      { name: "Cardio & Functional Turf Zone", included: true },
      { name: "Dedicated 1-on-1 Personal Coach", included: false },
      { name: "Infrared Sauna & Cryo Recovery Lounge", included: false },
      { name: "Monthly Nutrition & InBody Composition Scan", included: false },
      { name: "Free Guest Passes (2 per month)", included: false }
    ]
  },
  {
    id: "standard",
    name: "Standard Membership",
    priceMonthlyPKR: 14000,
    priceQuarterlyPKR: 37800,
    isPopular: true,
    tagline: "Our most chosen plan for serious progress",
    features: [
      { name: "Full 24/7 Unrestricted Keycard Access", included: true },
      { name: "Olympic Hardwood Platforms & Eleiko Plates", included: true },
      { name: "Unlimited Group Fitness & Conditioning Classes", included: true },
      { name: "Free Bi-weekly InBody 570 Body Scans", included: true },
      { name: "Infrared Sauna & Contrast Cold Plunge Access", included: true },
      { name: "1 Complimentary Personal Training Strategy Session", included: true },
      { name: "1 Guest Pass per month included", included: true },
      { name: "Unlimited Dedicated 1-on-1 PT Coaching", included: false }
    ]
  },
  {
    id: "premium",
    name: "Premium Membership",
    priceMonthlyPKR: 22500,
    priceQuarterlyPKR: 59900,
    isPopular: false,
    tagline: "The complete VIP strength & lifestyle transformation",
    features: [
      { name: "Everything in Standard Plan with Zero Restrictions", included: true },
      { name: "4 One-on-One Personal Training Sessions Monthly", included: true },
      { name: "Personalized Macro & Meal Prep Consultation", included: true },
      { name: "Priority Reserved Olympic Lifting Platforms", included: true },
      { name: "Daily Fresh Shake at Iron Fuel Protein Bar", included: true },
      { name: "Permanent Private Locker & Laundry Towel Service", included: true },
      { name: "Weekly Infrared Sauna & Recovery Suite Access", included: true },
      { name: "4 VIP Guest Passes per month", included: true }
    ]
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Competition Olympic Lifting Platforms",
    category: "Heavy Iron",
    image: "/src/assets/images/gym_hero_weights_1793166311133.jpg",
    caption: "Championship hardwood deadlift and squat stations equipped with Eleiko bars and calibrated plates."
  },
  {
    id: "g2",
    title: "Heavy Deadlift Precision Zone",
    category: "Heavy Iron",
    image: "/src/assets/images/gym_strength_training_1793166310986.jpg",
    caption: "Heavy pulling area with high-traction flooring and dedicated chalk reservoirs."
  },
  {
    id: "g3",
    title: "Dumbbell Vault & Free Weights Deck",
    category: "Facility",
    image: "/src/assets/images/gym_equipment_facility_1793166311786.jpg",
    caption: "Precision urethane dumbbells ranging up to 60 kg with custom heavy-duty adjustable benches."
  },
  {
    id: "g4",
    title: "Metabolic Cardio Conditioning Fleet",
    category: "Conditioning",
    image: "/src/assets/images/gym_cardio_endurance_1793166311994.jpg",
    caption: "Woodway curved treadmills and Concept2 rowers underneath atmospheric neon red light paths."
  },
  {
    id: "g5",
    title: "Power Cage Compound Grid",
    category: "Heavy Iron",
    image: "/src/assets/images/gym_hero_weights_1793166311133.jpg",
    caption: "Continuous row of heavy structural steel power racks with safety straps and band pegs."
  },
  {
    id: "g6",
    title: "Astroturf Functional Sled Track",
    category: "Conditioning",
    image: "/src/assets/images/gym_cardio_endurance_1793166311994.jpg",
    caption: "High-density 50m sprint and sled track built for brutal conditioning drills."
  }
];

export const memberTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Daniyal Qureshi",
    role: "Competitive Powerlifter & Software Engineer",
    duration: "Trained 18 months at Iron Force",
    achievement: "+65 kg Total on Big Three",
    quote: "Finding a gym with genuine calibrated plates, zero bent barbells, and coaches who understand biomechanics is rare in Pakistan. My deadlift went from 180kg to 245kg cleanly without lower back pain.",
    avatarText: "DQ"
  },
  {
    id: "t2",
    name: "Dr. Ayesha Niazi",
    role: "Radiologist & Marathon Finisher",
    duration: "Trained 12 months at Iron Force",
    achievement: "Decreased body fat 11% & PR in 21K",
    quote: "With 14-hour hospital shifts, I needed high efficiency. The trainer customized my strength work to support my endurance running while preventing knee fatigue. The 6:00 AM energy here is unmatched.",
    avatarText: "AN"
  },
  {
    id: "t3",
    name: "Farhan Siddiqui",
    role: "Entrepreneur & Father of Two",
    duration: "Trained 9 months at Iron Force",
    achievement: "Lost 19 kg & Built Functional Strength",
    quote: "I was intimidated by heavy lifting gyms initially. The coaching staff took me through baseline mobility, fixed my hip hinge, and gave me simple nutrition habits. I feel 15 years younger.",
    avatarText: "FS"
  }
];

export const gymFaqs = [
  {
    question: "Do you offer a free trial pass before signing up?",
    answer: "Yes! We offer a full 1-Day All-Access Pass completely free. You can test out all equipment, attend any group class, and talk with our head coach."
  },
  {
    question: "What are your peak and off-peak hours?",
    answer: "Peak hours are typically 6:30 PM to 9:30 PM on weekdays. If you prefer a quieter lifting floor, 6:00 AM to 11:00 AM and 2:00 PM to 5:00 PM offer plenty of space."
  },
  {
    question: "Are trainers always available on the gym floor?",
    answer: "Always. We maintain floor marshals and certified coaches who proactively assist with spotting, rack adjustments, and form corrections at no extra cost."
  },
  {
    question: "Can I freeze or pause my membership if I travel?",
    answer: "Yes, members can pause their memberships for up to 30 days per annual or quarterly term with prior written notice via WhatsApp or front desk."
  }
];
