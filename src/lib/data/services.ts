// src/lib/data/services.ts
// This file contains detailed information about the veterinary services offered.

export interface FAQ {
    question: string;
    answer: string;
}

export interface Service {
    slug: string; // Unique identifier for the service
    title: string; // Title of the service
    shortDescription: string; // Brief description for listings
    icon: string; // Emoji or icon representing the service
    heroImage: string; // Path to the hero image for the service
    fullDescription: string; // Detailed description of the service
    features: string[]; // Key features or benefits of the service
    pricing?: string; // Pricing information or starting price
    emergencyNumber?: string; // Emergency contact number if applicable
    faqs: FAQ[]; // Frequently asked questions
} 


export const servicesData : Service[] = [
  {
    slug: "exotic",
    title: "Exotic Pet Care",
    shortDescription: "Specialized care for birds, reptiles, and small mammals.",
    icon: "🦜",
    heroImage: "/images/services/exotic-pets.jpg",
    fullDescription: "Our exotic pet care services cater to the unique needs of birds, reptiles, small mammals, and other non-traditional pets. We understand that exotic animals require specialized knowledge and care.",
    features: [
      "Avian medicine and surgery",
      "Reptile health assessments",
      "Small mammal wellness exams",
      "Specialized nutrition guidance",
      "Habitat and husbandry advice",
      "Emergency exotic pet care"
    ],
    pricing: "Consultations from £50",
    faqs: [
      {
        question: "What types of exotic pets do you treat?",
        answer: "We treat birds (parrots, canaries, finches), reptiles (snakes, lizards, turtles), small mammals (rabbits, guinea pigs, hamsters, ferrets), and other exotic species. Contact us if you're unsure about your pet."
      },
      {
        question: "Do I need to bring my pet's habitat information?",
        answer: "Yes, please bring details about your pet's enclosure, diet, temperature, humidity levels, and any recent changes to their environment."
      }
    ]
  },
  {
    slug: "emergency",
    title: "Emergency Care",
    shortDescription: "24/7 emergency services for urgent veterinary needs.",
    icon: "🚑",
    heroImage: "/images/services/emergency.jpg",
    fullDescription: "When your pet faces a medical emergency, every second counts. Our 24/7 emergency care service ensures that expert veterinary attention is always available when you need it most.",
    features: [
      "24/7 emergency hotline",
      "Immediate triage and assessment",
      "Advanced life support equipment",
      "Emergency surgery capabilities",
      "Critical care monitoring",
      "Experienced emergency veterinarians on call"
    ],
    pricing: "Emergency consultation from £100",
    emergencyNumber: "01455 710 796",
    faqs: [
      {
        question: "What constitutes a veterinary emergency?",
        answer: "Emergencies include difficulty breathing, suspected poisoning, severe bleeding, seizures, inability to urinate, collapse, severe pain, eye injuries, and any situation where you're worried about your pet's immediate health."
      },
      {
        question: "Should I call before bringing my pet in?",
        answer: "Yes, please call our emergency line so we can prepare for your arrival and provide immediate guidance on what to do while you're on your way."
      }
    ]
  },
  {
    slug: "diagnostics",
    title: "Diagnostic Imaging",
    shortDescription: "Advanced facilities for CT Scans, in-house Blood work, X-ray, and ultrasound diagnostics.",
    icon: "🩸",
    heroImage: "/images/services/diagnostics.jpg",
    fullDescription: "Our state-of-the-art diagnostic imaging suite enables us to quickly and accurately diagnose your pet's condition. We use the latest technology to provide comprehensive internal views without invasive procedures.",
    features: [
      "Digital X-ray with immediate results",
      "Ultrasound imaging",
      "CT scanning capabilities",
      "In-house laboratory for blood work",
      "Rapid test results (often within hours)",
      "ECG and cardiac monitoring"
    ],
    pricing: "From £35 depending on tests required",
    faqs: [
      {
        question: "How long does diagnostic imaging take?",
        answer: "Most X-rays and ultrasounds can be performed within 30 minutes. Results are typically available the same day. CT scans may require sedation and take 1-2 hours including recovery time."
      },
      {
        question: "Will my pet need sedation?",
        answer: "Most X-rays and ultrasounds don't require sedation. However, for nervous pets or CT scans, light sedation may be recommended to ensure clear images and reduce stress."
      }
    ]
  },
  {
    slug: "flexible-hours",
    title: "Early Drop-off and Late Pick-up",
    shortDescription: "Convenient options for busy pet owners.",
    icon: "⌚",
    heroImage: "/images/services/flexible-hours.jpg",
    fullDescription: "We understand that your schedule can be demanding. Our flexible drop-off and pick-up times are designed to accommodate your busy lifestyle while ensuring your pet receives the care they need.",
    features: [
      "Early morning drop-off from 7:30 AM",
      "Late evening pick-up until 8:00 PM",
      "Comfortable waiting areas for pets",
      "Regular updates throughout the day",
      "Secure and supervised environment",
      "No additional charges for extended hours"
    ],
    pricing: "Included with all services at no extra cost",
    faqs: [
      {
        question: "Do I need to book early drop-off in advance?",
        answer: "We recommend calling ahead to let us know you'll be using early drop-off, but walk-ins are usually accommodated. This helps us ensure a staff member is ready to greet you and your pet."
      },
      {
        question: "Can I drop off my pet if they have an afternoon appointment?",
        answer: "Absolutely! Many pet owners prefer to drop off in the morning and pick up after work, regardless of appointment time. Your pet will be kept comfortable and safe until their scheduled procedure or examination."
      }
    ]
  },
  {
    slug: "wellness",
    title: "Health Plans",
    shortDescription: "Bundled comprehensive check-ups and preventive care to keep your pets healthy.",
    icon: "🩺",
    heroImage: "/images/services/wellness.jpg",
    fullDescription: "Prevention is better than cure. Our comprehensive health plans are designed to keep your pet healthy throughout their life with regular check-ups, vaccinations, and preventive treatments at affordable monthly rates.",
    features: [
      "Annual health examinations",
      "Complete vaccination schedule",
      "Parasite prevention treatments",
      "Dental check-ups",
      "Nutritional counseling",
      "10% discount on additional services"
    ],
    pricing: "From £12.50 - £25/month depending on pet size, species and age",
    faqs: [
      {
        question: "Can I cancel my health plan?",
        answer: "Yes, our health plans are flexible. You can cancel with 30 days' notice. However, continuing the plan ensures your pet receives all preventive care and saves you money in the long run."
      },
      {
        question: "What's included in the annual health examination?",
        answer: "A thorough physical examination, weight check, body condition assessment, dental check, ear examination, and discussion of any concerns. We'll also update your pet's medical records and vaccination schedule."
      }
    ]
  },
  {
    slug: "vaccinations",
    title: "Vaccinations",
    shortDescription: "Protective vaccines to safeguard your pet's health.",
    icon: "💉",
    heroImage: "/images/services/vaccinations.jpg",
    fullDescription: "Vaccinations are one of the most important ways to protect your pet from serious and potentially fatal diseases. We provide comprehensive vaccination programs tailored to your pet's lifestyle and risk factors.",
    features: [
      "Core vaccinations for dogs and cats",
      "Lifestyle-based vaccine recommendations",
      "Puppy and kitten vaccination courses",
      "Annual booster vaccinations",
      "Vaccine health checks included",
      "Digital vaccination certificates"
    ],
    pricing: "Dogs from £45, Cats from £60, Rabbits from £55",
    faqs: [
      {
        question: "When should my puppy or kitten be vaccinated?",
        answer: "Puppies and kittens typically start their vaccination course at 8-9 weeks old, with boosters at 12 weeks and sometimes 16 weeks. We'll create a personalized schedule for your pet."
      },
      {
        question: "Are there any side effects from vaccines?",
        answer: "Most pets experience no side effects. Some may be slightly lethargic or have mild swelling at the injection site for a day or two. Serious reactions are very rare, and we monitor all pets after vaccination."
      }
    ]
  },
  {
    slug: "parasite-prevention",
    title: "Parasite Prevention",
    shortDescription: "Effective treatments to keep parasites at bay.",
    icon: "🐛",
    heroImage: "/images/services/parasite.jpg",
    fullDescription: "Parasites like fleas, ticks, and worms can cause serious health problems for your pet and even affect your family. Our comprehensive parasite prevention programs keep your pets protected year-round.",
    features: [
      "Flea and tick prevention",
      "Worm treatments (roundworm, tapeworm, hookworm)",
      "Heartworm prevention",
      "Tailored treatment schedules",
      "Safe for all life stages",
      "Monthly or quarterly options available"
    ],
    pricing: "From £15/month depending on pet size",
    faqs: [
      {
        question: "How often does my pet need parasite prevention?",
        answer: "We recommend year-round protection. Flea and tick prevention is typically monthly, while worming frequency depends on your pet's lifestyle - from monthly to every 3 months."
      },
      {
        question: "Can indoor pets get parasites?",
        answer: "Yes! Even indoor pets can get fleas, ticks, and worms. Parasites can be brought in on clothing, other pets, or through open windows. Prevention is important for all pets."
      }
    ]
  },
  {
    slug: "sick-consultations",
    title: "Sick Pet Consultations",
    shortDescription: "Expert diagnosis and treatment for ill pets.",
    icon: "💊",
    heroImage: "/images/services/consultation.jpg",
    fullDescription: "When your pet is unwell, prompt diagnosis and treatment are essential. Our experienced veterinarians provide thorough examinations and evidence-based treatment plans to get your pet back to health.",
    features: [
      "Same-day appointments for urgent cases",
      "Comprehensive physical examinations",
      "Diagnostic testing as needed",
      "Treatment plans tailored to your pet",
      "Prescription medications available",
      "Follow-up care and monitoring"
    ],
    pricing: "Standard consultation £50, Extended consultation £75",
    faqs: [
      {
        question: "When should I bring my pet in?",
        answer: "If your pet is showing signs of illness such as lethargy, loss of appetite, vomiting, diarrhea, coughing, or any behavior that concerns you, please book a consultation. When in doubt, it's better to have us check."
      },
      {
        question: "What should I bring to the appointment?",
        answer: "Bring any medication your pet is currently taking, a stool sample if they have diarrhea, and notes on symptoms including when they started and how often they occur."
      }
    ]
  },
  {
    slug: "dental",
    title: "Dental Care",
    shortDescription: "Complete dental services to maintain your pet's oral health.",
    icon: "🦷",
    heroImage: "/images/services/dental.jpg",
    fullDescription: "Dental disease affects 80% of pets over three years old. Our comprehensive dental care services help prevent painful conditions and keep your pet's teeth and gums healthy throughout their life.",
    features: [
      "Dental examinations and assessments",
      "Professional teeth cleaning and scaling",
      "Dental X-rays",
      "Tooth extractions when necessary",
      "Oral surgery",
      "Home dental care advice"
    ],
    pricing: "Dental check-up included free in standard consultation, Professional cleaning, Scale & Polish from £350",
    faqs: [
      {
        question: "Does my pet need to be anesthetized for dental cleaning?",
        answer: "Yes, general anesthesia is necessary for thorough dental cleaning. This allows us to clean below the gum line and take dental X-rays. We use the safest anesthetic protocols and monitor your pet closely throughout."
      },
      {
        question: "How can I prevent dental disease at home?",
        answer: "Regular tooth brushing is most effective. We also recommend dental diets, dental chews, and water additives. We'll show you proper brushing techniques and recommend products suitable for your pet."
      }
    ]
  },
  {
    slug: "surgery",
    title: "Surgery",
    shortDescription: "From routine procedures to complex operations with expert veterinary care.",
    icon: "⚕️",
    heroImage: "/images/services/surgery.jpg",
    fullDescription: "Our modern surgical suite is equipped for both routine and complex procedures. Our experienced surgical team uses the latest techniques and equipment to ensure the best outcomes for your pet.",
    features: [
      "Soft tissue surgery",
      "Orthopedic procedures",
      "Neutering and spaying",
      "Tumor removals",
      "Emergency surgery",
      "Advanced pain management"
    ],
    pricing: "Prices vary by procedure - please contact us for a quote",
    faqs: [
      {
        question: "How do I prepare my pet for surgery?",
        answer: "Your pet should fast from midnight the night before (water allowed until morning). We'll provide detailed pre-operative instructions when you book. Bring any medications your pet takes regularly."
      },
      {
        question: "What happens after surgery?",
        answer: "Your pet will recover in our comfortable recovery area with close monitoring. We'll provide detailed post-operative care instructions, pain medication, and schedule follow-up appointments as needed."
      }
    ]
  },
  {
    slug: "hospitalisation",
    title: "Hospitalisation",
    shortDescription: "Hospital care with round-the-clock monitoring and treatment.",
    icon: "🏥",
    heroImage: "/images/services/hospital.jpg",
    fullDescription: "Some conditions require intensive care and monitoring. Our hospitalization facilities provide a safe, comfortable environment where your pet receives round-the-clock professional care and treatment.",
    features: [
      "24/7 monitoring and care",
      "Intravenous fluid therapy",
      "Oxygen therapy when needed",
      "Comfortable individual kennels",
      "Regular updates to pet owners",
      "Experienced veterinary nurses"
    ],
    pricing: "From £190 per 12-hour period including treatment",
    faqs: [
      {
        question: "Can I visit my pet during hospitalisation?",
        answer: "We encourage visits during designated hours as seeing you can aid recovery. However, we may restrict visits if your pet becomes too distressed during departures. We'll keep you updated with regular phone calls."
      },
      {
        question: "How will I know how my pet is doing?",
        answer: "We provide at least twice-daily updates, and you're welcome to call anytime for an update. We'll contact you immediately if there are any significant changes in your pet's condition."
      }
    ]
  },
  {
    slug: "eol",
    title: "End of Life Care",
    shortDescription: "Compassionate support and services during your pet's final moments.",
    icon: "🕊️",
    heroImage: "/images/services/eol.jpg",
    fullDescription: "Making the decision to say goodbye to a beloved pet is one of the hardest decisions you'll ever make. We provide compassionate, dignified end-of-life care in a peaceful environment, with support for you and your family.",
    features: [
      "Private, peaceful consultation rooms",
      "Home euthanasia visits available",
      "Pain management and palliative care",
      "Grief counseling resources",
      "Cremation services",
      "Memorial options including paw prints and fur clippings"
    ],
    pricing: "Euthanasia from £50, Home visit from £170",
    faqs: [
      {
        question: "How do I know when it's time?",
        answer: "This is very personal, but we can help you assess your pet's quality of life. Consider their pain levels, ability to eat and drink, mobility, and enjoyment of life. We'll discuss your pet's condition honestly and support whatever decision you make."
      },
      {
        question: "Can I be with my pet?",
        answer: "Absolutely. Most owners choose to be present, and we encourage this. The process is peaceful and painless. You can take as much time as you need before and after to say goodbye."
      }
    ]
  }
];

export function getServiceBySlug(slug : string) {
  return servicesData.find(service => service.slug === slug);
}

export function getAllServices() {
  return servicesData;
}