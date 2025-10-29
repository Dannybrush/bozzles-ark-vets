<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import StatsCard from './StatsCard.svelte';
  
  // Statistics data - Update these numbers with actual data
  const stats = [
    { value: '850+', label: 'Families Registered', icon: '👨‍👩‍👧‍👦' },
    { value: '1,247', label: 'Pets Registered', icon: '🐾' },
    { value: '15+', label: 'Species Registered', icon: '🦜' },
    { value: '320+', label: 'Appointments Booked', icon: '📅' }
  ];
  
  function handleRedirect() {
    window.location.href = '/appointments';
  }
</script>

<main class="prereg-closed-page">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container">
      <div class="hero-content" in:fly={{ y: 30, duration: 800, easing: quintOut }}>
        <div class="success-icon">✓</div>
        <h1>Pre-Registration is Now Closed</h1>
        <h2>Thank You for Your Overwhelming Support!</h2>
        <p class="hero-description">
          We're thrilled by the incredible response from our community. 
          Bozzles Ark Vets is now <strong>officially open</strong> and welcoming new patients!
        </p>
        
        <div class="cta-container">
          <button 
            onclick={handleRedirect}
            class="btn btn-primary btn-large"
          >
            Book Your Appointment Now
          </button>
          <p class="cta-subtext">New patient registrations and appointments available</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Statistics Section -->
  <section class="stats-section">
    <div class="container">
      <div class="section-header" in:fade={{ delay: 200, duration: 800 }}>
        <h3>Pre-Registration Success</h3>
        <p>Thanks to our wonderful community of early supporters</p>
      </div>
      
      <div class="stats-grid">
        {#each stats as stat, i}
          <StatsCard 
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
            delay={300 + (i * 100)}
          />
        {/each}
      </div>
    </div>
  </section>

  <!-- Information Section -->
  <section class="info-section">
    <div class="container">
      <div class="info-cards">
        <div class="info-card" in:fly={{ y: 20, delay: 600, duration: 600 }}>
          <div class="info-icon">🏥</div>
          <h4>Now Accepting New Patients</h4>
          <p>
            Register your pet and book your first appointment all in one simple process.
          </p>
        </div>
        
        <div class="info-card" in:fly={{ y: 20, delay: 700, duration: 600 }}>
          <div class="info-icon">🎉</div>
          <h4>Special Opening Offers</h4>
          <p>
            Early bird discounts still available for new clients booking within the first month!
          </p>
        </div>
        
        <div class="info-card" in:fly={{ y: 20, delay: 800, duration: 600 }}>
          <div class="info-icon">⚡</div>
          <h4>24/7 Emergency Care</h4>
          <p>
            Our emergency services are fully operational. We're here when you need us most.
          </p>
        </div>
      </div>
      
      <div class="final-cta" in:fade={{ delay: 1000, duration: 800 }}>
        <button 
          onclick={handleRedirect}
          class="btn btn-secondary btn-large"
        >
          Get Started →
        </button>
      </div>
    </div>
  </section>
</main>

<style>
  .prereg-closed-page {
    min-height: 100vh;
    background: var(--color-background);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Hero Section */
  .hero-section {
    background: linear-gradient(135deg, #1a3c6e 0%, #2c5490 100%);
    color: var(--color-white);
    padding: 5rem 0 4rem;
    text-align: center;
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
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  .hero-content {
    position: relative;
    z-index: 1;
  }

  .success-icon {
    width: 100px;
    height: 100px;
    margin: 0 auto 2rem;
    background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: bold;
    color: white;
    box-shadow: 0 10px 30px rgba(74, 222, 128, 0.3);
  }

  .hero-content h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-white);
  }

  .hero-content h2 {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.95);
  }

  .hero-description {
    font-size: 1.25rem;
    line-height: 1.6;
    max-width: 700px;
    margin: 0 auto 3rem;
    opacity: 0.95;
  }

  .hero-description strong {
    color: #4ade80;
    font-weight: 600;
  }

  .cta-container {
    margin-top: 3rem;
  }

  .btn-large {
    font-size: 1.25rem;
    padding: 1rem 3rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    animation: pulse-glow 2s ease-in-out infinite;
  }

  .cta-subtext {
    margin-top: 1rem;
    font-size: 0.95rem;
    opacity: 0.8;
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    50% {
      box-shadow: 0 10px 35px rgba(74, 222, 128, 0.4);
    }
  }

  /* Statistics Section */
  .stats-section {
    padding: 4rem 0;
    background: var(--color-white);
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-header h3 {
    font-size: 2.25rem;
    color: var(--color-primary);
    margin-bottom: 0.75rem;
    font-weight: 700;
  }

  .section-header p {
    font-size: 1.125rem;
    color: var(--color-text-light);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  /* Information Section */
  .info-section {
    padding: 4rem 0 5rem;
    background: var(--color-background);
  }

  .info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .info-card {
    background: var(--color-white);
    border-radius: 12px;
    padding: 2.5rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: var(--color-primary);
  }

  .info-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  .info-card h4 {
    font-size: 1.5rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .info-card p {
    color: var(--color-text-light);
    line-height: 1.6;
    font-size: 1.05rem;
  }

  .final-cta {
    text-align: center;
    margin-top: 3rem;
  }

  /* Button Styles */
  .btn {
    display: inline-block;
    padding: 0.75rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    font-family: inherit;
  }

  .btn-primary {
    background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
    color: white;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(74, 222, 128, 0.4);
  }

  .btn-secondary {
    background: var(--color-primary);
    color: white;
  }

  .btn-secondary:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(26, 60, 110, 0.3);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-section {
      padding: 3rem 0 2.5rem;
    }

    .success-icon {
      width: 80px;
      height: 80px;
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    .hero-content h1 {
      font-size: 2rem;
    }

    .hero-content h2 {
      font-size: 1.25rem;
    }

    .hero-description {
      font-size: 1.05rem;
    }

    .btn-large {
      font-size: 1.1rem;
      padding: 0.875rem 2rem;
    }

    .section-header h3 {
      font-size: 1.75rem;
    }

    .stats-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .info-cards {
      grid-template-columns: 1fr;
    }

    .info-card {
      padding: 2rem;
    }

    .stats-section,
    .info-section {
      padding: 3rem 0;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 1rem;
    }

    .hero-content h1 {
      font-size: 1.5rem;
    }

    .hero-content h2 {
      font-size: 1.1rem;
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

  .btn:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 3px;
  }
</style>