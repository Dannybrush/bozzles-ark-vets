/* Hero Section Configuration  */

export interface HeroConfig {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  heading: string;
  tagline: string;
  buttons: {
    primary: {
      text: string;
      href: string;
      analyticsId: string;
    };
    secondary: {
      text: string;
      action: 'link' | 'scroll';
      href?: string;
      scrollTarget?: string;
      analyticsId: string;
    };
  };
}

export const heroConfig: HeroConfig = {
  logo: {
    src: '/images/new-logo.jpg',
    alt: 'Bozzles Ark Vets - Compassionate veterinary care for all pets',
    width: 400,
    height: 400
  },
  heading: 'Welcome to Bozzles Ark Vets',
  tagline: 'Compassionate care for all creatures great and small',
  buttons: {
    primary: {
      text: 'Register Now',
      href: '/pre-registration',
      analyticsId: 'hero-register-now'
    },
    secondary: {
      text: 'Our Services',
      action: 'scroll',
      scrollTarget: 'services',
      analyticsId: 'hero-our-services'
    }
  }
};

/* Alternative hero configurations for different pages or campaigns  */
export const emergencyHeroConfig: HeroConfig = {
  ...heroConfig,
  heading: 'Emergency Veterinary Care',
  tagline: '24/7 emergency services for your pets',
  buttons: {
    primary: {
      text: 'Call Now',
      href: 'tel:+441455710796',
      analyticsId: 'hero-emergency-call'
    },
    secondary: {
      text: 'Find Us',
      action: 'link',
      href: '/contact',
      analyticsId: 'hero-emergency-location'
    }
  }
};

export const newClientHeroConfig: HeroConfig = {
  ...heroConfig,
  heading: 'Welcome New Clients',
  tagline: 'Starting your journey with us is easy',
  buttons: {
    primary: {
      text: 'Register Your Pet',
      href: '/pre-registration',
      analyticsId: 'hero-new-client-register'
    },
    secondary: {
      text: 'View Pricing',
      action: 'link',
      href: '/services/pricelist',
      analyticsId: 'hero-new-client-pricing'
    }
  }
};