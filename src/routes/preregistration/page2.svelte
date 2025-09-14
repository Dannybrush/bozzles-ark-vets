<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let isLoaded = $state(false);
  let iframeError = $state(false);
  
  // Handle iframe load events
  function handleIframeLoad() {
    isLoaded = true;
  }
  
  function handleIframeError() {
    iframeError = true;
    isLoaded = true;
  }
  
  onMount(() => {
    // Add some delay to show loading state
    const timer = setTimeout(() => {
      if (!isLoaded && !iframeError) {
        isLoaded = true;
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  });
</script>

<svelte:head>
  <title>Pre-registration - Bozzles Ark Vets</title>
  <meta name="description" content="Register your pet with Bozzles Ark Vets. Complete our simple pre-registration form to get started with compassionate veterinary care." />
  <meta name="keywords" content="pet registration, veterinary registration, Bozzles Ark Vets, pet care, Barwell vet" />
</svelte:head>

<main class="preregistration-page">
  <!-- Hero Section -->
  <section class="hero-section bg-primary text-white">
    <div class="container">
      <div class="hero-content text-center">
        <h1 class="hero-title" in:fly={{ y: 30, duration: 800, delay: 200 }}>
          Welcome to Bozzles Ark Vets
        </h1>
        <p class="hero-subtitle text-lg" in:fly={{ y: 30, duration: 800, delay: 400 }}>
          Register your beloved pet with our practice
        </p>
        <div class="hero-description" in:fade={{ duration: 1000, delay: 600 }}>
          <p class="text-base opacity-90 max-w-2xl mx-auto">
            Begin your journey with Bozzles Ark Vets by completing our simple pre-registration form. 
            This helps us prepare for your first visit and ensures we can provide the best possible care for your pet.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Pre-registration Content -->
  <section class="registration-section py-16">
    <div class="container">
      <div class="max-w-6xl mx-auto">
        
        <!-- Introduction -->
        <div class="text-center mb-12" in:fly={{ y: 20, duration: 600, delay: 200 }}>
          <h2 class="text-3xl font-bold text-primary mb-4">
            Pet Pre-Registration
          </h2>
          <p class="text-lg text-text-light max-w-3xl mx-auto">
            Please complete the registration form below to enroll your pet in our practice management system. 
            This secure form will help us create your pet's medical record and schedule your first appointment.
          </p>
        </div>

        <!-- Benefits Cards -->
        <div class="grid md:grid-cols-3 gap-6 mb-12" in:fly={{ y: 20, duration: 600, delay: 400 }}>
          <div class="card text-center p-6">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Complete Medical History</h3>
            <p class="text-text-light">Build a comprehensive medical record for your pet from day one.</p>
          </div>

          <div class="card text-center p-6">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Faster Appointments</h3>
            <p class="text-text-light">Pre-registration speeds up your check-in process for future visits.</p>
          </div>

          <div class="card text-center p-6">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Secure & Private</h3>
            <p class="text-text-light">Your pet's information is protected with enterprise-grade security.</p>
          </div>
        </div>

        <!-- Registration Form Container -->
        <div class="registration-form-container" in:fly={{ y: 20, duration: 600, delay: 600 }}>
          <div class="bg-white rounded-lg shadow-lg p-6 border">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-semibold text-primary">
                Registration Form
              </h3>
              <div class="flex items-center text-sm text-text-light">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure Form
              </div>
            </div>

            <!-- Loading State -->
            {#if !isLoaded}
              <div class="flex flex-col items-center justify-center py-20" transition:fade>
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                <p class="text-text-light">Loading registration form...</p>
              </div>
            {/if}

            <!-- Error State -->
            {#if iframeError}
              <div class="text-center py-20" transition:fade>
                <div class="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h4 class="text-xl font-semibold mb-2">Form Temporarily Unavailable</h4>
                <p class="text-text-light mb-6">We're experiencing technical difficulties. Please try refreshing the page or contact us directly.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onclick={() => window.location.reload()} 
                    class="btn btn-primary"
                  >
                    Refresh Page
                  </button>
                  <a href="tel:01455842707" class="btn btn-outline-primary">
                    Call Us Instead
                  </a>
                </div>
              </div>
            {:else}
              <!-- Iframe Container -->
              <div class="iframe-container" class:opacity-0={!isLoaded} transition:fade={{ duration: 500 }}>
                <iframe
                  src="https://provetcloud.com/6810/onlinebooking/?lang=en-gb"
                  width="100%"
                  height="900"
                  style="border: 0px; border-radius: 8px;"
                  title="Pet Registration Form"
                  loading="lazy"
                  onload={handleIframeLoad}
                  onerror={handleIframeError}
                  allow="forms payment"
                >
                  Your browser does not support iframes. Please <a href="https://provetcloud.com/6810/onlinebooking/?lang=en-gb" target="_blank" rel="noopener noreferrer">click here</a> to access the registration form.
                </iframe>
              </div>
            {/if}
          </div>
        </div>

        <!-- Help Section -->
        <div class="mt-12 text-center" in:fly={{ y: 20, duration: 600, delay: 800 }}>
          <div class="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 class="text-xl font-semibold mb-4">Need Help?</h3>
            <p class="text-text-light mb-6">
              If you're experiencing any issues with the registration form or have questions about our services, 
              we're here to help.
            </p>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="tel:01455842707" class="btn btn-outline-primary">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
              <a href="mailto:info@bozzlesark.co.uk" class="btn btn-outline-primary">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a href="/contact" class="btn btn-outline-primary">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .preregistration-page {
    min-height: 100vh;
  }

  .hero-section {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    padding: 80px 0 60px;
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .hero-content {
    position: relative;
    z-index: 1;
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  .hero-subtitle {
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }

  .registration-section {
    background: var(--background);
  }

  .iframe-container {
    transition: opacity 0.5s ease;
    border-radius: 8px;
    overflow: hidden;
  }

  .iframe-container iframe {
    display: block;
    width: 100%;
  }

  /* Mobile responsiveness for iframe */
  @media (max-width: 768px) {
    .iframe-container iframe {
      height: 1000px;
    }
    
    .hero-section {
      padding: 60px 0 40px;
    }
    
    .registration-form-container {
      margin: 0 -1rem;
    }
    
    .registration-form-container .bg-white {
      margin: 0;
      border-radius: 0;
      box-shadow: none;
      border-left: none;
      border-right: none;
    }
  }

  @media (max-width: 480px) {
    .iframe-container iframe {
      height: 1200px;
    }
  }

  /* Loading animation */
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }

  /* Hover effects for cards */
  .card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(26, 60, 110, 0.1);
  }

  /* Button enhancements */
  .btn {
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .btn:hover {
    transform: translateY(-1px);
  }

  /* Accessibility improvements */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    
    .hero-section::before {
      animation: none;
    }
  }

  /* Focus styles for accessibility */
  .btn:focus,
  iframe:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
</style>