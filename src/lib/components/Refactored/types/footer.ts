/**
 * Type definitions for Footer component
 */

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin';
  enabled: boolean;
}

export interface OpeningHour {
  days: string;
  hours: string;
  isEmergency?: boolean;
}

export interface FooterConfig {
  quickLinks: FooterLink[];
  legalLinks: FooterLink[];
  socialLinks: SocialLink[];
  openingHours: OpeningHour[];
  contact: {
    address: {
      street: string;
      city: string;
      postcode: string;
    };
    phone: string;
    email: string;
  };
  certifications: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
}