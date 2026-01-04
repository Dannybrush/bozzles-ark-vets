/**
 * Configuration for New Client CTA Component
 */

import type { ComponentType } from 'svelte';
import { ClipboardList, Search, Monitor } from 'lucide-svelte';

export interface CTAFeature {
  icon: ComponentType;
  title: string;
  description: string;
  id: string;
}

export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  analyticsId: string;
}

export interface NewClientCTAConfig {
  sectionId: string;
  heading: string;
  description: string;
  features: CTAFeature[];
  buttons: CTAButton[];
}

export const newClientCTAConfig: NewClientCTAConfig = {
  sectionId: 'NewClients',
  heading: 'New to Bozzles Ark Vets?',
  description: 'We\'d love to welcome you and your pets to our family. First-time visits include a comprehensive wellness check and personalized care plan.',
  
  features: [
    {
      icon: ClipboardList,
      title: 'Easy Registration',
      description: 'Complete your forms online before your visit',
      id: 'feature-registration'
    },
    {
      icon: Search,
      title: 'Thorough First Visit',
      description: 'Comprehensive exam and health assessment',
      id: 'feature-first-visit'
    },
    {
      icon: Monitor,
      title: 'Digital Records',
      description: 'Access your pet\'s health info anytime with ProVet Cloud',
      id: 'feature-digital-records'
    }
  ],
  
  buttons: [
    {
      text: 'New Client Guide',
      href: '/new-clients',
      variant: 'primary',
      analyticsId: 'new-client-guide'
    },
    {
      text: 'Book First Visit',
      href: '/appointments',
      variant: 'secondary',
      analyticsId: 'book-first-visit'
    }
  ]
};

/**
 * Helper to get feature by ID
 */
export function getFeatureById(id: string): CTAFeature | undefined {
  return newClientCTAConfig.features.find(f => f.id === id);
}

/**
 * Helper to get analytics attributes
 */
export function getAnalyticsAttrs(id: string): Record<string, string> {
  return {
    'data-analytics': id,
    'data-section': 'new-client-cta'
  };
}