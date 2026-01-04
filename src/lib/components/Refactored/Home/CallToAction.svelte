<script lang="ts">
  /**
   * New Client Call-to-Action Component
   * Refactored for Svelte 5 with TypeScript and enhanced accessibility
   */
  
  import { fly } from 'svelte/transition';
  import { ClipboardList, Search, Monitor } from 'lucide-svelte';
  import type { ComponentType } from 'svelte';
  
  // Props interface
  interface Props {
    sectionId?: string;
    title?: string;
    description?: string;
  }
  
  let { 
    sectionId = 'NewClients',
    title = 'New to Bozzles Ark Vets?',
    description = 'We\'d love to welcome you and your pets to our family. First-time visits include a comprehensive wellness check and personalized care plan.'
  }: Props = $props();
  
  // Feature configuration
  interface Feature {
    icon: ComponentType;
    title: string;
    description: string;
    id: string;
  }
  
  const features: Feature[] = [
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
  ];
  
  // Button configuration
  interface CTAButton {
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
    analyticsId: string;
  }
  
  const buttons: CTAButton[] = [
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
  ];
</script>

<section id={sectionId} class="cta" aria-labelledby="new-clients-heading">
  <div class="container">
    <div class="cta-content" in:fly={{ y: 20, duration: 800 }}>
      <!-- Header -->
      <h2 id="new-clients-heading">{title}</h2>
      <p class="cta-description">{description}</p>
      
      <!-- Features List -->
      <ul class="cta-features" role="list">
        {#each features as feature}
          <li class="feature" aria-labelledby={feature.id}>
            <div class="feature-icon" aria-hidden="true">
              <svelte:component this={feature.icon} size={28} strokeWidth={2} />
            </div>
            <div class="feature-text">
              <h3 id={feature.id}>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </li>
        {/each}
      </ul>
      
      <!-- Call-to-Action Buttons -->
      <nav class="cta-buttons" aria-label="New client actions">
        {#each buttons as button}
          <a 
            href={button.href} 
            class="btn btn-{button.variant}"
            data-analytics={button.analyticsId}
            data-section="new-client-cta"
          >
            {button.text}
          </a>
        {/each}
      </nav>
    </div>
  </div>
</section>

<style>
  /* ===== BASE STYLES ===== */
  .cta {
    padding: 5rem 1rem;
    background-color: #ebf8ff;
    position: relative;
    overflow: hidden;
  }
  
  /* Decorative background element */
  .cta::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(
      to bottom right, 
      rgba(99, 179, 237, 0.1) 0%, 
      rgba(99, 179, 237, 0.2) 100%
    );
    clip-path: polygon(0 50%, 100% 0, 100% 100%, 0% 100%);
    pointer-events: none;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  
  /* ===== CONTENT CARD ===== */
  .cta-content {
    background-color: white;
    border-radius: 16px;
    padding: 3rem 2rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
    text-align: center;
  }
  
  /* ===== HEADER ===== */
  h2 {
    font-size: 2.25rem;
    color: #1a3c6e;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
  }
  
  .cta-description {
    font-size: 1.125rem;
    color: #4a5568;
    margin-bottom: 2.5rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }
  
  /* ===== FEATURES LIST ===== */
  .cta-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2.5rem;
    list-style: none;
    padding: 0;
  }
  
  .feature {
    display: flex;
    align-items: flex-start;
    text-align: left;
    gap: 1rem;
  }
  
  .feature-icon {
    background-color: #ebf8ff;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #3182ce;
  }
  
  .feature-text {
    flex: 1;
  }
  
  .feature-text h3 {
    font-size: 1.125rem;
    color: #2c5282;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
  }
  
  .feature-text p {
    color: #4a5568;
    font-size: 0.875rem;
    margin: 0;
    line-height: 1.5;
  }
  
  /* ===== BUTTONS ===== */
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  
  .btn {
    display: inline-block;
    padding: 0.875rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
    min-width: 180px;
  }
  
  .btn-primary {
    background-color: #e53e3e;
    color: white;
    border: 2px solid #e53e3e;
    box-shadow: 0 4px 6px rgba(229, 62, 62, 0.25);
  }
  
  .btn-primary:hover {
    background-color: #c53030;
    border-color: #c53030;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(229, 62, 62, 0.3);
  }
  
  .btn-secondary {
    background-color: transparent;
    border: 2px solid #3182ce;
    color: #3182ce;
  }
  
  .btn-secondary:hover {
    background-color: #ebf8ff;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(49, 130, 206, 0.15);
  }
  
  /* ===== FOCUS STYLES (WCAG 2.2 AA) ===== */
  .btn:focus-visible {
    outline: 3px solid #1a3c6e;
    outline-offset: 3px;
  }
  
  /* Remove default focus for mouse users */
  .btn:focus:not(:focus-visible) {
    outline: none;
  }
  
  /* ===== RESPONSIVE DESIGN ===== */
  @media (max-width: 768px) {
    .cta {
      padding: 3rem 1rem;
    }
    
    .cta-content {
      padding: 2rem 1.5rem;
    }
    
    h2 {
      font-size: 1.875rem;
    }
    
    .cta-description {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    
    .cta-features {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .feature {
      flex-direction: row;
      text-align: left;
    }
    
    .cta-buttons {
      flex-direction: column;
      align-items: stretch;
    }
    
    .btn {
      width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    h2 {
      font-size: 1.625rem;
    }
    
    .feature-icon {
      width: 45px;
      height: 45px;
    }
    
    .feature-text h3 {
      font-size: 1rem;
    }
    
    .feature-text p {
      font-size: 0.8125rem;
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
    .btn {
      border-width: 3px;
    }
    
    .feature-icon {
      border: 2px solid currentColor;
    }
  }
  
  /* Touch-friendly sizing */
  @media (hover: none) and (pointer: coarse) {
    .btn {
      min-height: 48px;
      padding: 1rem 2rem;
    }
    
    .feature-icon {
      width: 56px;
      height: 56px;
    }
  }
  
  /* Print styles */
  @media print {
    .cta::before {
      display: none;
    }
    
    .cta {
      background-color: white;
    }
    
    .btn {
      border: 2px solid black;
      color: black;
      background: white;
    }
  }
</style>