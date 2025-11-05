<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let isLoaded = $state(false);
  let iframeError = $state(false);
  
  function handleIframeLoad() {
    isLoaded = true;
  }
  
  function handleIframeError() {
    iframeError = true;
    isLoaded = true;
  }
  
  onMount(() => {
    // Fallback timeout in case load event doesn't fire
    const timer = setTimeout(() => {
      if (!isLoaded && !iframeError) {
        isLoaded = true;
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  });
</script>

<svelte:head>
  <title>Book an Appointment | Bozzles Ark Vets</title>
  <meta name="description" content="Register your pet and book an appointment at Bozzles Ark Vets. Compassionate care for all creatures great and small." />
</svelte:head>

<main class="appointments-page">
  <!-- Header Section -->
  <section id="top" class="header-section">
    <div class="container">
      <div class="header-content" in:fly={{ y: 30, duration: 800 }}>
        <h1>Register & Book Your Appointment</h1>
        <p class="header-subtitle">
          Welcome to Bozzles Ark Vets! Whether you're a new client or returning patient, 
          we're here to provide compassionate care for your beloved companions.
        </p>
      </div>
    </div>
  </section>

  <!-- Information Cards -->
  <section class="info-banner">
    <div class="container">
      <div class="info-grid">
        <div class="info-item" in:fly={{ x: -20, delay: 200, duration: 600 }}>
          <div class="info-icon">📋</div>
          <div class="info-content">
            <h3>New Clients</h3>
            <p>Complete registration and book your first appointment in one go</p>
          </div>
        </div>
        
        <div class="info-item" in:fly={{ x: -20, delay: 300, duration: 600 }}>
          <div class="info-icon">📅</div>
          <div class="info-content">
            <h3>Existing Clients</h3>
            <p>Quick and easy appointment booking for registered patients</p>
          </div>
        </div>
        
        <div class="info-item" in:fly={{ x: -20, delay: 400, duration: 600 }}>
          <div class="info-icon">🚑</div>
          <div class="info-content">
            <h3>Emergency Care</h3>
            <p>For urgent matters, please call us immediately at <a href="tel:01455710796" class="phone-link">01455 710796</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Booking Form Section -->
  <section class="booking-section">
    <div class="container">
      <div class="booking-container">
        <div class="booking-intro" in:fade={{ delay: 500, duration: 600 }}>
          <h2>Complete the Form Below</h2>
          <p>
            Use the secure booking system below to register as a new client or book an appointment. 
            All your information is encrypted and protected.
          </p>
          
          <div class="feature-list">
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span>Secure online registration</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span>Real-time appointment availability</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">✓</span>
              <span>Instant confirmation</span>
            </div>
          </div>
        </div>

        <!-- Loading State -->
        {#if !isLoaded}
          <div class="loading-state" transition:fade>
            <div class="loading-spinner"></div>
            <p>Loading booking system...</p>
            <p class="loading-subtext">This may take a few moments</p>
          </div>
        {/if}

        <!-- Error State -->
        {#if iframeError}
          <div class="error-state" transition:fade>
            <div class="error-icon">⚠️</div>
            <h3>Booking System Temporarily Unavailable</h3>
            <p>
              We're experiencing technical difficulties with our online booking system. 
              Please try one of the following options:
            </p>
            <div class="error-actions">
              <button 
                onclick={() => window.location.reload()} 
                class="btn btn-primary"
              >
                Refresh Page
              </button>
              <a href="tel:01455710796" class="btn btn-secondary">
                Call Us: 01455 710796
              </a>
            </div>
            <p class="error-note">
              Our team is available to help you book an appointment over the phone during business hours.
            </p>
          </div>
        {:else}
          <!-- Iframe Container -->
          <div 
            class="iframe-wrapper" 
            class:visible={isLoaded} 
            transition:fade={{ duration: 500 }}
          >
            <iframe
              src="https://provetcloud.com/6810/onlinebooking/?lang=en-gb"
              width="100%"
              height="900"
              title="Appointment Booking System"
              loading="lazy"
              onload={handleIframeLoad}
              onerror={handleIframeError}
              allow="forms payment"
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
            >
              Your browser does not support embedded booking systems. 
              Please <a href="https://provetcloud.com/6810/onlinebooking/?lang=en-gb" target="_blank" rel="noopener noreferrer">click here</a> 
              to access the booking form directly.
            </iframe>
          </div>
        {/if}
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact-section">
    <div class="container">
      <div class="contact-card" in:fly={{ y: 20, delay: 600, duration: 600 }}>
        <h3>Need Help Booking?</h3>
        <p>Our friendly team is here to assist you with any questions or booking requirements.</p>
        <div class="contact-details">
          <a href="tel:01455710796" class="contact-item">
            <span class="contact-icon">📞</span>
            <span>01455 710796</span>
          </a>
          <a href="mailto:info@bozzlesarkvets.co.uk" class="contact-item">
            <span class="contact-icon">✉️</span>
            <span>info@bozzlesarkvets.co.uk</span>
          </a>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <span>39 Jersey Way, Barwell, LE9 8HR</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .appointments-page {
    min-height: 100vh;
    background: var(--color-background);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Header Section */
  .header-section {
    background: linear-gradient(135deg, #1a3c6e 0%, #2c5490 100%);
    color: var(--color-white);
    padding: 4rem 0 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .header-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  .header-content {
    position: relative;
    z-index: 1;
  }

  .header-content h1 {
    font-size: 2.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-white);
  }

  .header-subtitle {
    font-size: 1.25rem;
    line-height: 1.6;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.95;
  }

  /* Info Banner */
  .info-banner {
    background: var(--color-white);
    padding: 2rem 0;
    border-bottom: 1px solid var(--color-border);
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .info-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .info-content h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 0.5rem;
  }

  .info-content p {
    font-size: 0.95rem;
    color: var(--color-text-light);
    line-height: 1.5;
  }

  .phone-link {
    color: var(--color-secondary);
    font-weight: 600;
    text-decoration: none;
  }

  .phone-link:hover {
    text-decoration: underline;
  }

  /* Booking Section */
  .booking-section {
    padding: 3rem 0 4rem;
  }

  .booking-container {
    background: var(--color-white);
    border-radius: 12px;
    box-shadow: var(--shadow-lg);
    padding: 2.5rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .booking-intro {
    text-align: center;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid var(--color-border);
  }

  .booking-intro h2 {
    font-size: 2rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .booking-intro > p {
    font-size: 1.05rem;
    color: var(--color-text-light);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .feature-list {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    color: var(--color-text);
  }

  .feature-icon {
    color: var(--color-success);
    font-weight: bold;
  }

  /* Loading State */
  .loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    text-align: center;
  }

  .loading-spinner {
    width: 3.5rem;
    height: 3.5rem;
    border: 4px solid var(--color-border);
    border-top: 4px solid var(--color-primary);
    border-radius: 50%;
    margin-bottom: 1.5rem;
    animation: spin 1s linear infinite;
  }

  .loading-state p {
    color: var(--color-text);
    font-size: 1.125rem;
    margin: 0;
  }

  .loading-subtext {
    color: var(--color-text-light) !important;
    font-size: 0.95rem !important;
    margin-top: 0.5rem !important;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Error State */
  .error-state {
    text-align: center;
    padding: 4rem 2rem;
  }

  .error-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .error-state h3 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 1rem;
  }

  .error-state > p {
    color: var(--color-text-light);
    font-size: 1.05rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .error-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .error-note {
    font-size: 0.95rem !important;
    color: var(--color-text-lighter) !important;
    margin-top: 1.5rem !important;
  }

  /* Iframe Wrapper */
  .iframe-wrapper {
    border-radius: 8px;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .iframe-wrapper.visible {
    opacity: 1;
  }

  .iframe-wrapper iframe {
    display: block;
    width: 100%;
    border: none;
    border-radius: 8px;
  }

  /* Contact Section */
  .contact-section {
    padding: 3rem 0 4rem;
    background: var(--color-white);
  }

  .contact-card {
    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
    border-radius: 12px;
    padding: 3rem;
    text-align: center;
    border: 2px solid var(--color-border);
  }

  .contact-card h3 {
    font-size: 1.75rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .contact-card > p {
    font-size: 1.05rem;
    color: var(--color-text-light);
    margin-bottom: 2rem;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 500px;
    margin: 0 auto;
  }

  .contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--color-white);
    border-radius: 8px;
    font-size: 1.05rem;
    color: var(--color-text);
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .contact-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  a.contact-item {
    cursor: pointer;
  }

  a.contact-item:hover {
    color: var(--color-primary);
  }

  .contact-icon {
    font-size: 1.5rem;
  }

  /* Button Styles */
  .btn {
    display: inline-block;
    padding: 0.875rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    font-family: inherit;
    font-size: 1rem;
  }

  .btn-primary {
    background: var(--color-primary);
    color: white;
  }

  .btn-primary:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(26, 60, 110, 0.2);
  }

  .btn-secondary {
    background: var(--color-secondary);
    color: white;
  }

  .btn-secondary:hover {
    background: var(--color-secondary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(229, 62, 62, 0.2);
  }

  /* Responsive Design */
  @media (min-width: 640px) {
    .error-actions {
      flex-direction: row;
      justify-content: center;
    }

    .container {
      padding: 0 2rem;
    }
  }

  @media (max-width: 768px) {
    .header-section {
      padding: 3rem 0 2rem;
    }

    .header-content h1 {
      font-size: 2rem;
    }

    .header-subtitle {
      font-size: 1.05rem;
    }

    .info-banner {
      padding: 1.5rem 0;
    }

    .info-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .booking-container {
      padding: 1.5rem;
      margin: 0 -1rem;
      border-radius: 0;
      box-shadow: none;
    }

    .booking-intro h2 {
      font-size: 1.5rem;
    }

    .feature-list {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .iframe-wrapper iframe {
      height: 1000px;
    }

    .contact-card {
      padding: 2rem 1.5rem;
    }

    .contact-card h3 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .header-content h1 {
      font-size: 1.5rem;
    }

    .header-subtitle {
      font-size: 0.95rem;
    }

    .booking-intro h2 {
      font-size: 1.25rem;
    }

    .iframe-wrapper iframe {
      height: 1200px;
    }

    .contact-details {
      gap: 0.75rem;
    }

    .contact-item {
      font-size: 0.95rem;
      padding: 0.875rem;
    }
  }

  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  .btn:focus-visible,
  iframe:focus-visible,
  .contact-item:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 3px;
  }
</style>