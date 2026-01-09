<script lang="ts">
  /**
   * Services Section Component
   * Displays featured veterinary services on homepage
   * Refactored for Svelte 5 with TypeScript and enhanced accessibility
   */
  
  import { scale, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { 
    Bird, 
    Ambulance, 
    Activity, 
    Heart, 
    Syringe, 
    Bug, 
    Stethoscope, 
    Scissors,
    Tooth,
    Building2,
    Flower2
  } from 'lucide-svelte';
  import type { ComponentType } from 'svelte';
  
  // Props interface
  interface Props {
    maxServices?: number;
    showViewAll?: boolean;
    enableAnimations?: boolean;
  }
  
  let { 
    maxServices = 7,
    showViewAll = true,
    enableAnimations = true
  }: Props = $props();
  
  // Service interface
  interface Service {
    id: string;
    title: string;
    description: string;
    icon: ComponentType;
    iconColor: string;
    link: string;
    featured: boolean;
  }
  
  // All services configuration
  const allServices: Service[] = [
    {
      id: 'exotic-pet-care',
      title: 'Exotic Pet Care',
      description: 'Specialized care for birds, reptiles, and small mammals.',
      icon: Bird,
      iconColor: 'linear-gradient(135deg, #a6e3ff 0%, #5FC3BF 100%)',
      link: '/services/exotic',
      featured: true
    },
    {
      id: 'emergency-care',
      title: 'Emergency Care',
      description: '24/7 emergency services for urgent veterinary needs.',
      icon: Ambulance,
      iconColor: 'linear-gradient(135deg, #e53e3e 0%, #c53030 100%)',
      link: '/services/emergency',
      featured: true
    },
    {
      id: 'diagnostic-imaging',
      title: 'Diagnostic Imaging',
      description: 'Advanced facilities for CT Scans, in-house blood work, X-ray, and ultrasound diagnostics.',
      icon: Activity,
      iconColor: 'linear-gradient(135deg, #3182ce 0%, #2c5282 100%)',
      link: '/services/diagnostics',
      featured: true
    },
    {
      id: 'health-plans',
      title: 'Health Plans',
      description: 'Bundled comprehensive check-ups and preventive care to keep your pets healthy.',
      icon: Heart,
      iconColor: 'linear-gradient(135deg, #f687b3 0%, #ed64a6 100%)',
      link: '/services/wellness',
      featured: true
    },
    {
      id: 'vaccinations',
      title: 'Vaccinations',
      description: 'Protective vaccines to safeguard your pet\'s health.',
      icon: Syringe,
      iconColor: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
      link: '/services/vaccinations',
      featured: true
    },
    {
      id: 'parasite-prevention',
      title: 'Parasite Prevention',
      description: 'Effective treatments to keep parasites at bay.',
      icon: Bug,
      iconColor: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      link: '/services/parasite-prevention',
      featured: true
    },
    {
      id: 'consultations',
      title: 'Sick Pet Consultations',
      description: 'Expert diagnosis and treatment for ill pets.',
      icon: Stethoscope,
      iconColor: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
      link: '/services/consultations',
      featured: true
    },
    {
      id: 'surgery',
      title: 'Surgery',
      description: 'From routine procedures to complex operations with expert veterinary care.',
      icon: Scissors,
      iconColor: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
      link: '/services/surgery',
      featured: true
    },
    {
      id: 'dental-care',
      title: 'Dental Care',
      description: 'Complete dental services to maintain your pet\'s oral health.',
      icon: Tooth,
      iconColor: 'linear-gradient(135deg, #f0abfc 0%, #e879f9 100%)',
      link: '/services/dental',
      featured: false
    },
    {
      id: 'hospitalisation',
      title: 'Hospitalisation',
      description: 'Hospital care with round-the-clock monitoring and treatment.',
      icon: Building2,
      iconColor: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
      link: '/services/hospitalisation',
      featured: false
    },
    {
      id: 'end-of-life-care',
      title: 'End of Life Care',
      description: 'Compassionate support and services during your pet\'s final moments.',
      icon: Flower2,
      iconColor: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
      link: '/services/end-of-life',
      featured: false
    }
  ];
  
  // Filter services for homepage
  const displayServices = $derived(
    allServices
      .filter(s => s.featured)
      .slice(0, maxServices)
  );
</script>

<section id="services" class="services">
  <div class="container">
    <!-- Section Header -->
    <header class="section-header">
      <h2>Our Services</h2>
      <p>Comprehensive veterinary care for all your beloved companions</p>
    </header>
    
    <!-- Service Grid -->
    <ul class="service-grid" role="list">
      {#each displayServices as service, i}
        <li 
          class="service-card"
          {...(enableAnimations ? { 
            'in:scale': { 
              delay: Math.min(100 * i, 400), 
              duration: 500, 
              easing: quintOut 
            } 
          } : {})}
        >
          <article aria-labelledby="service-{service.id}">
            <div 
              class="service-icon" 
              style="background: {service.iconColor};"
              aria-hidden="true"
            >
              <svelte:component this={service.icon} size={32} strokeWidth={2} />
            </div>
            
            <h3 id="service-{service.id}" class="service-title">
              {service.title}
            </h3>
            
            <p class="service-description">
              {service.description}
            </p>
            
            <a 
              href={service.link} 
              class="service-link"
              aria-label="Learn more about {service.title}"
              data-analytics="service-card-{service.id}"
            >
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </article>
        </li>
      {/each}
    </ul>
    
    <!-- View All CTA -->
    {#if showViewAll}
      <div class="services-cta">
        <a 
          href="/services" 
          class="btn-services"
          data-analytics="view-all-services"
        >
          View All Services
        </a>
      </div>
    {/if}
  </div>
</section>

<style>
  /* ===== BASE STYLES ===== */
  .services {
    padding: 4rem 1rem;
    background-color: #ffffff;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* ===== SECTION HEADER ===== */
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  h2 {
    font-size: clamp(1.875rem, 4vw, 2.25rem);
    color: #1a3c6e;
    margin-bottom: 0.75rem;
    font-weight: 700;
    line-height: 1.2;
  }
  
  .section-header p {
    font-size: clamp(1rem, 2vw, 1.125rem);
    color: #4a5568;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  /* ===== SERVICE GRID ===== */
  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    list-style: none;
    padding: 0;
  }
  
  .service-card {
    background-color: #f7fafc;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
  }
  
  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    border-color: #5FC3BF;
    background-color: #ffffff;
  }
  
  .service-card article {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
  }
  
  /* ===== SERVICE ICON ===== */
  .service-icon {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    color: white;
    transition: transform 0.3s ease;
  }
  
  .service-card:hover .service-icon {
    transform: scale(1.1) rotate(5deg);
  }
  
  /* ===== SERVICE CONTENT ===== */
  .service-title {
    font-size: 1.25rem;
    color: #2c5282;
    margin-bottom: 0.75rem;
    font-weight: 600;
    line-height: 1.3;
  }
  
  .service-description {
    color: #4a5568;
    margin-bottom: 1.5rem;
    flex-grow: 1;
    font-size: 0.9375rem;
    line-height: 1.6;
  }
  
  /* ===== SERVICE LINK ===== */
  .service-link {
    color: #3182ce;
    font-weight: 600;
    text-decoration: none;
    position: relative;
    padding-bottom: 4px;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    transition: all 0.2s ease;
    font-size: 0.9375rem;
  }
  
  .service-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3182ce;
    transition: width 0.3s ease;
  }
  
  .service-link:hover {
    color: #2c5282;
  }
  
  .service-link:hover::after {
    width: 100%;
  }
  
  /* ===== VIEW ALL CTA ===== */
  .services-cta {
    text-align: center;
    margin-top: 2rem;
  }
  
  .btn-services {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);
    color: white;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3);
    font-size: 1rem;
    min-height: 48px;
  }
  
  .btn-services:hover {
    background: linear-gradient(135deg, #2c5282 0%, #1a3c6e 100%);
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(49, 130, 206, 0.4);
  }
  
  .btn-services:active {
    transform: translateY(-1px);
  }
  
  /* ===== FOCUS STYLES (WCAG 2.2 AA) ===== */
  .service-link:focus-visible,
  .btn-services:focus-visible {
    outline: 3px solid #3182ce;
    outline-offset: 3px;
    border-radius: 4px;
  }
  
  /* Remove default focus for mouse users */
  .service-link:focus:not(:focus-visible),
  .btn-services:focus:not(:focus-visible) {
    outline: none;
  }
  
  /* ===== RESPONSIVE DESIGN ===== */
  @media (max-width: 640px) {
    .services {
      padding: 3rem 1rem;
    }
    
    .service-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .service-card {
      padding: 1.5rem;
    }
    
    .service-icon {
      width: 70px;
      height: 70px;
    }
  }
  
  @media (min-width: 641px) and (max-width: 1024px) {
    .service-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1025px) {
    .service-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  /* ===== ACCESSIBILITY ===== */
  @media (prefers-reduced-motion: reduce) {
    .service-card,
    .service-icon,
    .service-link,
    .btn-services {
      animation: none !important;
      transition: none !important;
    }
    
    .service-card:hover {
      transform: none;
    }
    
    .service-icon:hover {
      transform: none;
    }
  }
  
  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .service-card {
      border: 2px solid #1a3c6e;
    }
    
    .service-link,
    .btn-services {
      border: 2px solid currentColor;
    }
  }
  
  /* Touch-friendly sizing */
  @media (hover: none) and (pointer: coarse) {
    .service-link,
    .btn-services {
      min-height: 48px;
      padding: 0.75rem 1.5rem;
    }
    
    .service-card {
      padding: 2rem 1.5rem;
    }
  }
  
  /* Print styles */
  @media print {
    .services {
      background: white;
    }
    
    .service-card {
      border: 1px solid #e2e8f0;
      box-shadow: none;
      page-break-inside: avoid;
    }
    
    .services-cta {
      display: none;
    }
  }
</style>