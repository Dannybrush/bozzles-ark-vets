/**
 * Configuration for Appointment CTA Component
 */

export interface CTABenefit {
  text: string;
  icon?: string;
}

export interface CTACardConfig {
  title: string;
  description: string;
  benefits: string[];
  buttonText: string;
  buttonLink: string;
  analyticsId: string;
}

export interface AppointmentCTAConfig {
  heading: string;
  subheading: string;
  newPatient: CTACardConfig;
  existingPatient: CTACardConfig;
  emergency: {
    text: string;
    phoneNumber: string;
    phoneDisplay: string;
  };
}

export const appointmentCTAConfig: AppointmentCTAConfig = {
  heading: 'Ready to Give Your Pet the Best Care?',
  subheading: 'Book an appointment with our expert veterinary team today',
  
  newPatient: {
    title: 'New Patient',
    description: 'Register your pet and book your first visit',
    benefits: [
      'Complete health assessment',
      'Personalized care plan',
      'Welcome package included'
    ],
    buttonText: 'Register & Book',
    buttonLink: '/appointments#new-patient',
    analyticsId: 'cta-new-patient'
  },
  
  existingPatient: {
    title: 'Existing Patient',
    description: 'Quick and easy appointment booking',
    benefits: [
      'Same-day appointments available',
      'Access your pet\'s records',
      'Flexible scheduling options'
    ],
    buttonText: 'Book Now',
    buttonLink: '/appointments#existing-patient',
    analyticsId: 'cta-existing-patient'
  },
  
  emergency: {
    text: 'Emergency? Call us immediately at',
    phoneNumber: '+441455710796',
    phoneDisplay: '01455 710796'
  }
};

/**
 * Helper to format phone number for tel: links
 */
export function getPhoneHref(phone: string): string {
  return `tel:${phone}`;
}

/**
 * Helper to create analytics attributes
 */
export function getAnalyticsAttrs(id: string): Record<string, string> {
  return {
    'data-analytics': id,
    'data-section': 'appointment-cta'
  };
}