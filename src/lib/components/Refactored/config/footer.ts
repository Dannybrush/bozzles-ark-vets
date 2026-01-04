/**
 * Centralized Footer Configuration
 * All footer data in one place for easy maintenance
 */

import type { FooterConfig } from '$lib/types/footer';

export const footerConfig: FooterConfig = {
  // Quick navigation links
  quickLinks: [
    { label: 'Book Appointment', href: '/appointments' },
    { label: 'Our Services', href: '/services' },
    { label: 'Pet Portal', href: '/pet-portal' },
    { label: 'Pet Care Guides', href: '/resources/pet-care' },
    { label: 'Meet Our Team', href: '/about-us/team' },
    { label: 'Join Our Team', href: '/careers' }
  ],

  // Legal and policy links
  legalLinks: [
    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
    { label: 'Terms of Service', href: '/legal/terms-of-service' },
    { label: 'Accessibility', href: '/legal/accessibility-statement' },
    { label: 'Sitemap', href: '/sitemap.xml' },
    { label: 'Cookie Policy', href: '/legal/cookie-policy' }
  ],

  // Social media links
  socialLinks: [
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/bozzlesarkvets',
      icon: 'facebook',
      enabled: true 
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/bozzlesarkvets',
      icon: 'instagram',
      enabled: true 
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/bozzlesarkvets',
      icon: 'twitter',
      enabled: false // Enable when account is ready
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@bozzlesarkvets',
      icon: 'youtube',
      enabled: false
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/bozzlesarkvets',
      icon: 'linkedin',
      enabled: false
    }
  ],

  // Practice opening hours
  openingHours: [
    { days: 'Monday - Friday', hours: '9:00am - 7:00pm' },
    { days: 'Saturday', hours: '10:00am - 5:00pm' },
    { days: 'Sunday', hours: '10:00am - 2:00pm' },
    { days: 'Emergency Care', hours: '24/7', isEmergency: true }
  ],

  // Contact information
  contact: {
    address: {
      street: '39 Jersey Way',
      city: 'Barwell',
      postcode: 'LE9 8HR'
    },
    phone: '+441455710796',
    email: 'care@bozzlesarkvets.co.uk'
  },

  // Professional certifications
  certifications: [
    {
      src: '/images/rcvs.jpg',
      alt: 'RCVS Accredited Practice',
      width: 80,
      height: 40
    }
    // Add more certifications here as needed
  ]
};

/**
 * Helper to format phone number for display
 */
export function formatPhoneDisplay(phone: string): string {
  return phone.replace('+44', '0');
}

/**
 * Helper to get phone link
 */
export function getPhoneLink(phone: string): string {
  return `tel:${phone}`;
}

/**
 * Helper to get email link
 */
export function getEmailLink(email: string): string {
  return `mailto:${email}`;
}