/**
 * Services Configuration
 * Centralized service definitions for entire site
 */
import type { Component } from 'svelte';
import { 
  Bird, 
  Ambulance, 
  Activity, 
  Heart, 
  Syringe, 
  Bug, 
  Stethoscope, 
  Scissors,
  Building2,
  Flower2,
  Clock,
  type IconProps
} from '@lucide/svelte';
import { bottleToothbrushComb as Tooth } from '@lucide/lab';;

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: Component<IconProps>;
  iconColor: string;
  link: string;
  featured: boolean; // Show on homepage
  category?: 'preventive' | 'emergency' | 'specialized' | 'routine';
  price?: string;
}

export const services: Service[] = [
  {
    id: 'exotic-pet-care',
    title: 'Exotic Pet Care',
    description: 'Specialized care for birds, reptiles, and small mammals.',
    longDescription: 'Our experienced vets provide comprehensive care for exotic pets including birds, reptiles, small mammals, and more. We understand the unique needs of these special companions.',
    icon: Bird,
    iconColor: 'linear-gradient(135deg, #a6e3ff 0%, #5FC3BF 100%)',
    link: '/services/exotic',
    featured: true,
    category: 'specialized'
  },
  {
    id: 'emergency-care',
    title: 'Emergency Care',
    description: '24/7 emergency services for urgent veterinary needs.',
    longDescription: 'Available 24/7 for emergency situations. Our dedicated team is ready to provide immediate care when your pet needs it most.',
    icon: Ambulance,
    iconColor: 'linear-gradient(135deg, #e53e3e 0%, #c53030 100%)',
    link: '/services/emergency',
    featured: true,
    category: 'emergency'
  },
  {
    id: 'diagnostic-imaging',
    title: 'Diagnostic Imaging',
    description: 'Advanced facilities for CT Scans, in-house blood work, X-ray, and ultrasound diagnostics.',
    longDescription: 'State-of-the-art diagnostic equipment including CT scanners, digital X-ray, ultrasound, and comprehensive in-house laboratory for rapid results.',
    icon: Activity,
    iconColor: 'linear-gradient(135deg, #3182ce 0%, #2c5282 100%)',
    link: '/services/diagnostics',
    featured: true,
    category: 'specialized'
  },
  {
    id: 'health-plans',
    title: 'Health Plans',
    description: 'Bundled comprehensive check-ups and preventive care to keep your pets healthy.',
    longDescription: 'Affordable monthly payment plans that include regular check-ups, vaccinations, parasite prevention, and discounts on additional services.',
    icon: Heart,
    iconColor: 'linear-gradient(135deg, #f687b3 0%, #ed64a6 100%)',
    link: '/bozzle-plans',
    featured: true,
    category: 'preventive'
  },
  {
    id: 'vaccinations',
    title: 'Vaccinations',
    description: 'Protective vaccines to safeguard your pet\'s health.',
    longDescription: 'Complete vaccination programs for dogs, cats, and exotic pets. We follow WSAVA guidelines to ensure your pet is protected.',
    icon: Syringe,
    iconColor: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
    link: '/services/vaccinations',
    featured: true,
    category: 'preventive'
  },
  {
    id: 'parasite-prevention',
    title: 'Parasite Prevention',
    description: 'Effective treatments to keep parasites at bay.',
    longDescription: 'Comprehensive parasite prevention including flea, tick, and worm treatments. We\'ll create a customized prevention plan for your pet.',
    icon: Bug,
    iconColor: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    link: '/services/parasite-prevention',
    featured: true,
    category: 'preventive'
  },
  {
    id: 'consultations',
    title: 'Sick Pet Consultations',
    description: 'Expert diagnosis and treatment for ill pets.',
    longDescription: 'Thorough consultations for sick pets with experienced veterinarians. We take the time to understand your pet\'s symptoms and provide effective treatment.',
    icon: Stethoscope,
    iconColor: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
    link: '/services/consultations',
    featured: true,
    category: 'routine'
  },
  {
    id: 'surgery',
    title: 'Surgery',
    description: 'From routine procedures to complex operations with expert veterinary care.',
    longDescription: 'Modern surgical facilities for routine neutering, complex soft tissue surgery, and orthopedic procedures. All surgeries performed by experienced veterinary surgeons.',
    icon: Scissors,
    iconColor: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    link: '/services/surgery',
    featured: true,
    category: 'specialized'
  },
  {
    id: 'dental-care',
    title: 'Dental Care',
    description: 'Complete dental services to maintain your pet\'s oral health.',
    longDescription: 'Professional dental cleaning, extractions, and oral health assessments. Dental disease is common in pets - let us help keep your pet\'s teeth healthy.',
    icon: Tooth,
    iconColor: 'linear-gradient(135deg, #f0abfc 0%, #e879f9 100%)',
    link: '/services/dental',
    featured: false,
    category: 'routine'
  },
  {
    id: 'flexible-hours',
    title: 'Early Drop-off and Late Pick-up',
    description: 'Convenient options for busy pet owners.',
    longDescription: 'We understand your schedule can be demanding. Drop off your pet early or pick up late to accommodate your busy lifestyle.',
    icon: Clock,
    iconColor: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
    link: '/services/flexible-hours',
    featured: false,
    category: 'routine'
  },
  {
    id: 'hospitalisation',
    title: 'Hospitalisation',
    description: 'Hospital care with round-the-clock monitoring and treatment.',
    longDescription: 'Dedicated hospitalisation facilities with 24-hour monitoring for pets requiring intensive care. Our team is always available to care for your pet.',
    icon: Building2,
    iconColor: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
    link: '/services/hospitalisation',
    featured: false,
    category: 'specialized'
  },
  {
    id: 'end-of-life-care',
    title: 'End of Life Care',
    description: 'Compassionate support and services during your pet\'s final moments.',
    longDescription: 'Gentle, compassionate end-of-life care in the comfort of your home or at our practice. We\'re here to support you and your pet during this difficult time.',
    icon: Flower2,
    iconColor: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
    link: '/services/end-of-life',
    featured: false,
    category: 'specialized'
  }
];

/**
 * Get services by category
 */
export function getServicesByCategory(category: Service['category']): Service[] {
  return services.filter(s => s.category === category);
}

/**
 * Get featured services (for homepage)
 */
export function getFeaturedServices(limit?: number): Service[] {
  const featured = services.filter(s => s.featured);
  return limit ? featured.slice(0, limit) : featured;
}

/**
 * Get service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}

/**
 * Get all service categories
 */
export function getServiceCategories(): Array<{ 
  value: Service['category']; 
  label: string;
}> {
  return [
    { value: 'preventive', label: 'Preventive Care' },
    { value: 'routine', label: 'Routine Care' },
    { value: 'specialized', label: 'Specialized Services' },
    { value: 'emergency', label: 'Emergency Care' }
  ];
}