<script>
  import { fade } from 'svelte/transition';
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
    const timer = setTimeout(() => {
      if (!isLoaded && !iframeError) {
        isLoaded = true;
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  });
</script>

<main class="preregistration-page">
  <!-- Header -->
  <section id="PreRegistration" class="header-section">
    <div class="container">
      <div class="header-content">
        <h1>Pet Pre-Registration</h1>
        <h2>Complete the form below to register your pet with Bozzles Ark Vets</h2>
        <p> 10% discount on first consultations, routine neutering and dental care booked within 3 months of opening when you pre-register!</p>
      </div>
    </div>
  </section>

  <!-- Registration Form -->
  <section class="form-section">
    <div class="container">
      <div class="form-container">
        
        <!-- Loading State -->
        {#if !isLoaded}
          <div class="loading-state" transition:fade>
            <div class="loading-spinner"></div>
            <p>Loading registration form...</p>
          </div>
        {/if}

        <!-- Error State -->
        {#if iframeError}
          <div class="error-state" transition:fade>
            <h3>Form Temporarily Unavailable</h3>
            <p>We're experiencing technical difficulties. Please try refreshing the page or contact us directly.</p>
            <div class="error-actions">
              <button onclick={() => window.location.reload()} class="btn btn-primary">
                Refresh Page
              </button>
              <a href="tel:01455710796" class="btn btn-outline">
                Call Us Instead
              </a>
            </div>
          </div>
        {:else}
          <!-- Iframe Container -->
          <div class="iframe-container" class:hidden={!isLoaded} transition:fade={{ duration: 500 }}>
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
  </section>
</main>

<style>
  .preregistration-page {
    min-height: 100vh;
    background: var(--color-background);
  }

  /* Header Section */
  .header-section {
    background: var(--color-primary);
    color: var(--color-white);
    padding: 3rem 0 2rem;
    text-align: center;
  }

  .header-content h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-white);
  }
    .header-content h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: var(--color-white);
  }

  .header-content p {
    font-size: 1.25rem;
    opacity: 0.9;
    margin: 0;
  }

  /* Form Section */
  .form-section {
    padding: 3rem 0;
  }

  .form-container {
    background: var(--color-white);
    border-radius: 8px;
    box-shadow: var(--shadow-lg);
    padding: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  /* Loading State */
  .loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
    text-align: center;
  }

  .loading-spinner {
    width: 3rem;
    height: 3rem;
    border: 3px solid var(--color-border);
    border-top: 3px solid var(--color-primary);
    border-radius: 50%;
    margin-bottom: 1rem;
    animation: spin 1s linear infinite;
  }

  .loading-state p {
    color: var(--color-text-light);
    margin: 0;
  }

  /* Error State */
  .error-state {
    text-align: center;
    padding: 4rem 0;
  }

  .error-state h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--color-text);
  }

  .error-state p {
    color: var(--color-text-light);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .error-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  @media (min-width: 640px) {
    .error-actions {
      flex-direction: row;
      justify-content: center;
    }
  }

  /* Iframe Container */
  .iframe-container {
    transition: opacity 0.5s ease;
    border-radius: 8px;
    overflow: hidden;
  }

  .iframe-container.hidden {
    opacity: 0;
  }

  .iframe-container iframe {
    display: block;
    width: 100%;
    border-radius: 8px;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .header-section {
      padding: 2rem 0 1.5rem;
    }
    
    .header-content h1 {
      font-size: 2rem;
    }
    .header-content h2 {
      font-size: 1.25rem;
    }
    
    .header-content p {
      font-size: 1rem;
    }

    .form-container {
      margin: 0 -1rem;
      border-radius: 0;
      box-shadow: none;
    }

    .iframe-container iframe {
      height: 1000px;
    }
  }

  @media (max-width: 480px) {
    .iframe-container iframe {
      height: 1200px;
    }
  }

  /* Animations */
  @keyframes spin {
    to {
      transform: rotate(360deg);
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

  /* Focus styles */
  .btn:focus,
  iframe:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  /* Container utility */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (min-width: 640px) {
    .container {
      padding: 0 2rem;
    }
  }
</style>