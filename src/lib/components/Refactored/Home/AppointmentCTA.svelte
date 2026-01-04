<script lang="ts">
  /**
   * Appointment Call-to-Action Component
   * Refactored for enhanced accessibility and performance
   */
  
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { Calendar, Paw, Ambulance, Check } from '@lucide/svelte';
  
  // Component props with defaults
  interface Props {
    sectionId?: string;
    phoneNumber?: string;
    phoneDisplay?: string;
    newPatientLink?: string;
    existingPatientLink?: string;
  }
  
  let { 
    sectionId = 'BookAppointment',
    phoneNumber = '+441455710796',
    phoneDisplay = '01455 710796',
    newPatientLink = '/appointments#new-patient',
    existingPatientLink = '/appointments#existing-patient'
  }: Props = $props();
  
  // Benefits data
  const newPatientBenefits = [
    'Complete health assessment',
    'Personalized care plan',
    'Welcome package included'
  ];
  
  const existingPatientBenefits = [
    'Same-day appointments available',
    'Access your pet\'s records',
    'Flexible scheduling options'
  ];
  
  // Structured data for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Bozzles Ark Vets",
    "offers": [
      {
        "@type": "Offer",
        "name": "New Patient Registration",
        "description": "Complete health assessment with personalized care plan and welcome package",
        "url": `https://bozzlesarkvets.co.uk${newPatientLink}`
      },
      {
        "@type": "Offer",
        "name": "Existing Patient Appointments",
        "description": "Quick and easy appointment booking with same-day availability",
        "url": `https://bozzlesarkvets.co.uk${existingPatientLink}`
      }
    ],
    "telephone": phoneNumber
  };
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(serviceSchema)}<\/script>`}
</svelte:head>

<section id={sectionId} class="appointment-cta">
  <div class="container">
    <div class="cta-content">
      <!-- Header -->
      <div class="cta-header" in:fade={{ duration: 600 }}>
        <h2>Ready to Give Your Pet the Best Care?</h2>
        <p>Book an appointment with our expert veterinary team today</p>
      </div>
      
      <!-- CTA Cards -->
      <div class="cta-cards">
        <!-- New Patient Card -->
        <article 
          class="cta-card new-patient"
          in:fly={{ y: 30, duration: 500, delay: 100, easing: quintOut }}
          aria-labelledby="new-patient-heading"
        >
          <div class="card-icon" aria-hidden="true">
            <Paw size={40} strokeWidth={2} />
          </div>
          <h3 id="new-patient-heading">New Patient</h3>
          <p>Register your pet and book your first visit</p>
          
          <ul class="benefits-list" role="list">
            {#each newPatientBenefits as benefit}
              <li>
                <span class="check-icon" aria-hidden="true">
                  <Check size={18} strokeWidth={3} />
                </span>
                <span>{benefit}</span>
              </li>
            {/each}
          </ul>
          
          <a 
            href={newPatientLink}
            class="btn btn-primary"
            data-analytics="cta-new-patient"
          >
            Register & Book
          </a>
        </article>
        
        <!-- Existing Patient Card -->
        <article 
          class="cta-card existing-patient"
          in:fly={{ y: 30, duration: 500, delay: 200, easing: quintOut }}
          aria-labelledby="existing-patient-heading"
        >
          <div class="card-icon" aria-hidden="true">
            <Calendar size={40} strokeWidth={2} />
          </div>
          <h3 id="existing-patient-heading">Existing Patient</h3>
          <p>Quick and easy appointment booking</p>
          
          <ul class="benefits-list" role="list">
            {#each existingPatientBenefits as benefit}
              <li>
                <span class="check-icon" aria-hidden="true">
                  <Check size={18} strokeWidth={3} />
                </span>
                <span>{benefit}</span>
              </li>
            {/each}
          </ul>
          
          <a 
            href={existingPatientLink}
            class="btn btn-secondary"
            data-analytics="cta-existing-patient"
          >
            Book Now
          </a>
        </article>
      </div>
      
      <!-- Emergency Notice -->
      <div class="cta-footer" in:fade={{ delay: 400, duration: 600 }}>
        <div class="emergency-notice" role="alert" aria-live="polite">
          <span class="emergency-icon" aria-hidden="true">
            <Ambulance size={28} strokeWidth={2} />
          </span>
          <span class="emergency-text">
            <strong>Emergency?</strong> Call us immediately at 
            <a 
              href="tel:{phoneNumber}" 
              class="phone-link"
              aria-label="Call emergency line: {phoneDisplay}"
              data-analytics="cta-emergency-phone"
            >
              {phoneDisplay}
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* ===== BASE STYLES ===== */
  .appointment-cta {
    padding: 4rem 1rem;
    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
    position: relative;
    overflow: hidden;
  }
  
  /* Subtle background pattern */
  .appointment-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 35px,
        rgba(26, 60, 110, 0.02) 35px,
        rgba(26, 60, 110, 0.02) 70px
      );
    pointer-events: none;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  
  .cta-content {
    text-align: center;
  }
  
  /* ===== HEADER ===== */
  .cta-header {
    margin-bottom: 3rem;
  }
  
  .cta-header h2 {
    font-size: 2.5rem;
    color: #1a3c6e;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
  }
  
  .cta-header p {
    font-size: 1.25rem;
    color: #4a5568;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  /* ===== CARDS CONTAINER ===== */
  .cta-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .cta-card {
    background: white;
    border-radius: 16px;
    padding: 2.5rem 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 2px solid transparent;
  }
  
  .cta-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
  
  .cta-card.new-patient:hover {
    border-color: #3182ce;
  }
  
  .cta-card.existing-patient:hover {
    border-color: #e53e3e;
  }
  
  /* ===== CARD ICON ===== */
  .card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #a6e3ff 0%, #5FC3BF 100%);
    border-radius: 50%;
    color: #1a3c6e;
  }
  
  /* ===== CARD CONTENT ===== */
  .cta-card h3 {
    font-size: 1.75rem;
    color: #1a3c6e;
    margin-bottom: 0.75rem;
    font-weight: 700;
  }
  
  .cta-card > p {
    font-size: 1rem;
    color: #4a5568;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
  
  /* ===== BENEFITS LIST ===== */
  .benefits-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
    text-align: left;
    width: 100%;
  }
  
  .benefits-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    color: #4a5568;
  }
  
  .check-icon {
    color: #4ade80;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    margin-top: 0.125rem;
  }
  
  /* ===== BUTTONS ===== */
  .btn {
    display: inline-block;
    padding: 0.875rem 2.5rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 1.05rem;
    width: 100%;
    max-width: 250px;
    text-align: center;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3);
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(49, 130, 206, 0.4);
  }
  
  .btn-secondary {
    background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3);
  }
  
  .btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(229, 62, 62, 0.4);
  }
  
  /* ===== EMERGENCY NOTICE ===== */
  .cta-footer {
    margin-top: 2rem;
  }
  
  .emergency-notice {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: white;
    padding: 1.25rem 2rem;
    border-radius: 50px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    border: 2px solid #fbbf24;
  }
  
  .emergency-icon {
    display: flex;
    align-items: center;
    color: #e53e3e;
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  
  .emergency-text {
    font-size: 1rem;
    color: #4a5568;
  }
  
  .emergency-text strong {
    color: #1a3c6e;
    font-weight: 700;
  }
  
  .phone-link {
    color: #e53e3e;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.2s ease;
  }
  
  .phone-link:hover {
    text-decoration: underline;
    color: #c53030;
  }
  
  /* ===== FOCUS STYLES (WCAG 2.2 AA) ===== */
  .btn:focus-visible,
  .phone-link:focus-visible {
    outline: 3px solid #1a3c6e;
    outline-offset: 3px;
  }
  
  /* ===== RESPONSIVE DESIGN ===== */
  @media (max-width: 768px) {
    .appointment-cta {
      padding: 3rem 1rem;
    }
    
    .cta-header h2 {
      font-size: 2rem;
    }
    
    .cta-header p {
      font-size: 1.05rem;
    }
    
    .cta-cards {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .cta-card {
      padding: 2rem 1.5rem;
    }
    
    .card-icon {
      width: 70px;
      height: 70px;
    }
    
    .cta-card h3 {
      font-size: 1.5rem;
    }
    
    .emergency-notice {
      flex-direction: column;
      gap: 0.75rem;
      text-align: center;
      padding: 1.25rem 1.5rem;
    }
    
    .emergency-text {
      font-size: 0.95rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .phone-link {
      display: block;
      font-size: 1.125rem;
      padding: 0.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .cta-header h2 {
      font-size: 1.75rem;
    }
    
    .cta-header p {
      font-size: 1rem;
    }
    
    .benefits-list li {
      font-size: 0.9rem;
    }
    
    .btn {
      padding: 0.75rem 2rem;
      font-size: 1rem;
    }
    
    .card-icon {
      width: 60px;
      height: 60px;
    }
  }
  
  /* ===== ACCESSIBILITY ===== */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    
    .emergency-icon {
      animation: none;
    }
  }
  
  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .btn,
    .emergency-notice {
      border: 2px solid currentColor;
    }
  }
  
  /* Touch-friendly sizing */
  @media (hover: none) and (pointer: coarse) {
    .btn,
    .phone-link {
      min-height: 44px;
      min-width: 44px;
      padding: 1rem 2rem;
    }
  }
</style>