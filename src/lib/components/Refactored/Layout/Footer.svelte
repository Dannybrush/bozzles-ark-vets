<script lang="ts">
  /**
   * Footer Component for Bozzles Ark Vets
   * Refactored for Svelte 5 with TypeScript
   * WCAG 2.2 Level AA Compliant
   */
  
  import { Phone, Mail, ArrowRight, ArrowUp, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-svelte';
  
  // Types
  interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
  }
  
  interface SocialLink {
    name: string;
    url: string;
    icon: string;
    enabled: boolean;
  }
  
  interface OpeningHour {
    days: string;
    hours: string;
    isEmergency?: boolean;
  }
  
  // Reactive state
  let email = $state<string>('');
  let subscribeStatus = $state<string>('');
  let subscribeError = $state<string>('');
  let isSubmitting = $state<boolean>(false);
  
  // Current year for copyright
  const currentYear: number = new Date().getFullYear();
  
  // Quick Links Configuration
  const quickLinks: FooterLink[] = [
    { label: 'Book Appointment', href: '/appointments' },
    { label: 'Our Services', href: '/services' },
    { label: 'Pet Portal', href: '/pet-portal' },
    { label: 'Pet Care Guides', href: '/resources/pet-care' },
    { label: 'Meet Our Team', href: '/about-us/team' },
    { label: 'Join Our Team', href: '/careers' }
  ];
  
  // Legal Links Configuration
  const legalLinks: FooterLink[] = [
    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
    { label: 'Terms of Service', href: '/legal/terms-of-service' },
    { label: 'Accessibility', href: '/legal/accessibility-statement' },
    { label: 'Sitemap', href: '/sitemap.xml' },
    { label: 'Cookie Policy', href: '/legal/cookie-policy' }
  ];
  
  // Social Links Configuration
  const socialLinks: SocialLink[] = [
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
      enabled: false // Uncomment when account is ready
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
  ];
  
  // Opening Hours Configuration
  const openingHours: OpeningHour[] = [
    { days: 'Monday - Friday', hours: '9:00am - 7:00pm' },
    { days: 'Saturday', hours: '10:00am - 5:00pm' },
    { days: 'Sunday', hours: '10:00am - 2:00pm' },
    { days: 'Emergency Care', hours: '24/7', isEmergency: true }
  ];
  
  /**
   * Handle newsletter subscription
   */
  async function handleSubscribe(e: SubmitEvent): Promise<void> {
    e.preventDefault();
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      subscribeError = 'Please enter a valid email address';
      return;
    }
    
    isSubmitting = true;
    subscribeError = '';
    subscribeStatus = '';
    
    try {
      // TODO: Implement actual API call
      // const response = await fetch('/api/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      subscribeStatus = 'Thanks for subscribing!';
      email = '';
      
      // Reset message after 3 seconds
      setTimeout(() => {
        subscribeStatus = '';
      }, 3000);
    } catch (error) {
      subscribeError = 'Something went wrong. Please try again.';
      console.error('Newsletter subscription error:', error);
    } finally {
      isSubmitting = false;
    }
  }
  
  /**
   * Scroll to top of page with reduced motion support
   */
  function scrollToTop(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }
  
  /**
   * Get social icon component
   */
  function getSocialIcon(iconName: string) {
    const icons: Record<string, typeof Facebook> = {
      facebook: Facebook,
      instagram: Instagram,
      twitter: Twitter,
      youtube: Youtube,
      linkedin: Linkedin
    };
    return icons[iconName] || Facebook;
  }
  
  // Structured data for opening hours
  const openingHoursSchema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ]
  };
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(openingHoursSchema)}<\/script>`}
</svelte:head>

<footer class="footer" role="contentinfo">
  <div class="footer-top">
    <div class="container">
      <div class="footer-grid">
        <!-- Practice Information -->
        <div class="footer-section">
          <h3 class="footer-title">Bozzles Ark Vets</h3>
          <address class="footer-address">
            <p>39 Jersey Way</p>
            <p>Barwell, LE9 8HR</p>
            <p class="footer-phone">
              <Phone size={16} aria-hidden="true" />
              <a href="tel:+441455710796">01455 710 796</a>
            </p>
            <p class="footer-email">
              <Mail size={16} aria-hidden="true" />
              <a href="mailto:care@bozzlesarkvets.co.uk">care@bozzlesarkvets.co.uk</a>
            </p>
          </address>
          <div class="cert-logos">
            <img 
              src="/images/rcvs.jpg" 
              alt="RCVS Accredited Practice" 
              class="cert-logo"
              width="80"
              height="40"
              loading="lazy"
            />
          </div>
        </div>
        
        <!-- Opening Hours -->
        <div class="footer-section">
          <h3 class="footer-title">Opening Hours</h3>
          <ul class="hours-list">
            {#each openingHours as hour}
              <li class:emergency-hours={hour.isEmergency}>
                <span>{hour.days}:</span>
                <span>{hour.hours}</span>
              </li>
            {/each}
          </ul>
          <a href="/contact" class="footer-link">
            Find Us
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        
        <!-- Quick Links -->
        <div class="footer-section">
          <h3 class="footer-title">Quick Links</h3>
          <ul class="footer-links">
            {#each quickLinks as link}
              <li>
                <a 
                  href={link.href} 
                  class="footer-link"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
        
        <!-- Newsletter -->
        <div class="footer-section">
          <h3 class="footer-title">Stay Updated</h3>
          <p class="newsletter-text">
            Subscribe for pet health tips, practice news and special offers.
          </p>
          
          <!-- Newsletter Form -->
          <form 
            class="newsletter-form" 
            onsubmit={handleSubscribe}
            novalidate
          >
            <div class="form-group">
              <label for="newsletter-email" class="visually-hidden">
                Email address
              </label>
              <input 
                id="newsletter-email"
                type="email" 
                placeholder="your@email.com" 
                class="newsletter-input"
                bind:value={email}
                disabled={isSubmitting}
                required
                aria-describedby={subscribeError ? 'newsletter-error' : subscribeStatus ? 'newsletter-success' : undefined}
              />
              <button 
                type="submit" 
                class="newsletter-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            
            {#if subscribeError}
              <p 
                id="newsletter-error" 
                class="subscribe-message error" 
                role="alert"
              >
                {subscribeError}
              </p>
            {/if}
            
            {#if subscribeStatus}
              <p 
                id="newsletter-success" 
                class="subscribe-message success" 
                role="status"
              >
                {subscribeStatus}
              </p>
            {/if}
          </form>
          
          <!-- Social Links -->
          <div class="social-links" role="list">
            {#each socialLinks.filter(link => link.enabled) as social}
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                class="social-link" 
                aria-label="Visit Bozzles Ark Vets on {social.name} (opens in new window)"
                role="listitem"
              >
                <svelte:component this={getSocialIcon(social.icon)} size={20} />
              </a>
            {/each}
            
            <!-- Developer Credit -->
            <a 
              href="https://www.bozzlesarkvets.co.uk/meet-the-developer" 
              class="social-link dev-link" 
              aria-label="Website developed by Daniel Broomhead (opens in new window)"
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
            >
              <img 
                src="/images/DB-Monogram.png" 
                alt="" 
                class="dev-logo"
                width="24"
                height="24"
                loading="lazy"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Footer Bottom -->
  <div class="footer-bottom">
    <div class="container">
      <div class="footer-bottom-content">
        <p class="copyright">
          © {currentYear} Bozzles Ark Vets. All rights reserved. Company Number #16434819
        </p>
        
        <nav aria-label="Legal information">
          <ul class="legal-links">
            {#each legalLinks as link}
              <li>
                <a 
                  href={link.href} 
                  class="legal-link"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </nav>
        
        <a 
          href="#top" 
          class="scroll-top" 
          aria-label="Scroll to top of page"
          onclick={(e: MouseEvent) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <ArrowUp size={20} aria-hidden="true" />
        </a>
      </div>
      
      <p class="provet-notice">
        Practice Management powered by 
        <a 
          href="https://provet.cloud" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          ProVet Cloud
        </a>
      </p>
    </div>
  </div>
</footer>

<style>
  /* ===== FOOTER BASE STYLES ===== */
  .footer {
    background-color: #1a3c6e;
    color: #ffffff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  /* ===== FOOTER TOP ===== */
  .footer-top {
    padding: 3rem 0;
    background-color: #1a3c6e;
  }
  
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  
  .footer-section {
    display: flex;
    flex-direction: column;
  }
  
  /* ===== FOOTER TITLES ===== */
  .footer-title {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
    position: relative;
    padding-bottom: 0.75rem;
  }
  
  .footer-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #e53e3e;
  }
  
  /* ===== ADDRESS SECTION ===== */
  .footer-address {
    font-style: normal;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .footer-phone,
  .footer-email {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  
  .footer-phone a,
  .footer-email a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .footer-phone a:hover,
  .footer-email a:hover {
    color: #e53e3e;
    text-decoration: underline;
  }
  
  .cert-logos {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .cert-logo {
    height: 40px;
    width: auto;
    object-fit: contain;
  }
  
  /* ===== OPENING HOURS ===== */
  .hours-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem 0;
  }
  
  .hours-list li {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  
  .hours-list span:first-child {
    font-weight: 500;
    min-width: 140px;
  }
  
  .emergency-hours {
    color: #fbbf24;
    font-weight: 600;
    margin-top: 0.5rem;
  }
  
  /* ===== LINKS ===== */
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-links li {
    margin-bottom: 0.75rem;
  }
  
  .footer-link {
    color: #e2e8f0;
    text-decoration: none;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .footer-link:hover {
    color: #ffffff;
    transform: translateX(5px);
  }
  
  /* ===== NEWSLETTER ===== */
  .newsletter-text {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  .newsletter-form {
    margin-bottom: 1.5rem;
  }
  
  .form-group {
    display: flex;
    gap: 0.5rem;
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  .newsletter-input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    font-size: 0.875rem;
    color: #ffffff;
    transition: all 0.2s ease;
  }
  
  .newsletter-input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  .newsletter-input:focus {
    outline: none;
    border-color: #e53e3e;
    background-color: rgba(255, 255, 255, 0.15);
  }
  
  .newsletter-input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .newsletter-button {
    background-color: #e53e3e;
    color: white;
    border: none;
    padding: 0.75rem 1.25rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
    white-space: nowrap;
  }
  
  .newsletter-button:hover:not(:disabled) {
    background-color: #c53030;
    transform: translateY(-2px);
  }
  
  .newsletter-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .subscribe-message {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .subscribe-message.success {
    color: #4ade80;
  }
  
  .subscribe-message.error {
    color: #fbbf24;
  }
  
  /* ===== SOCIAL LINKS ===== */
  .social-links {
    display: flex;
    gap: 0.75rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .social-link:hover {
    background-color: #e53e3e;
    transform: translateY(-3px);
  }
  
  .dev-link {
    background-color: rgba(255, 255, 255, 0.15);
  }
  
  .dev-logo {
    width: 24px;
    height: 24px;
    border-radius: 4px;
  }
  
  /* ===== FOOTER BOTTOM ===== */
  .footer-bottom {
    background-color: #15325a;
    padding: 1.5rem 0;
  }
  
  .footer-bottom-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .copyright {
    font-size: 0.875rem;
    margin: 0;
  }
  
  .legal-links {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
  }
  
  .legal-link {
    color: #d6dde5;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s ease;
  }
  
  .legal-link:hover {
    color: #ffffff;
    text-decoration: underline;
  }
  
  .scroll-top {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background-color: #e53e3e;
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .scroll-top:hover {
    background-color: #c53030;
    transform: translateY(-3px);
  }
  
  .provet-notice {
    text-align: center;
    font-size: 0.75rem;
    color: #a0aec0;
    margin: 0;
  }
  
  .provet-notice a {
    color: #cbd5e0;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .provet-notice a:hover {
    color: #ffffff;
    text-decoration: underline;
  }
  
  /* ===== FOCUS STYLES (WCAG 2.2 AA) ===== */
  .footer-link:focus-visible,
  .legal-link:focus-visible,
  .social-link:focus-visible,
  .scroll-top:focus-visible,
  .newsletter-button:focus-visible,
  .newsletter-input:focus-visible {
    outline: 3px solid #fbbf24;
    outline-offset: 2px;
  }
  
  .footer-phone a:focus-visible,
  .footer-email a:focus-visible,
  .provet-notice a:focus-visible {
    outline: 3px solid #fbbf24;
    outline-offset: 2px;
    border-radius: 2px;
  }
  
  /* Remove default focus for mouse users */
  *:focus:not(:focus-visible) {
    outline: none;
  }
  
  /* ===== RESPONSIVE DESIGN ===== */
  @media (max-width: 1024px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .footer-bottom-content {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .legal-links {
      justify-content: center;
    }
  }
  
  @media (max-width: 640px) {
    .footer-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    
    .footer-section:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      padding-bottom: 2rem;
    }
    
    .form-group {
      flex-direction: column;
    }
    
    .newsletter-button {
      width: 100%;
    }
    
    .legal-links {
      flex-direction: column;
      gap: 0.75rem;
      align-items: center;
    }
    
    .hours-list li {
      flex-direction: column;
      gap: 0.25rem;
    }
    
    .hours-list span:first-child {
      min-width: auto;
    }
  }
  
  /* ===== ACCESSIBILITY ===== */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  
  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .footer-link,
    .legal-link,
    .social-link,
    .scroll-top,
    .newsletter-button {
      border: 2px solid currentColor;
    }
  }
  
  /* Touch-friendly sizing */
  @media (hover: none) and (pointer: coarse) {
    .footer-link,
    .legal-link,
    .social-link {
      min-height: 44px;
      min-width: 44px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
