<script lang="ts">
  import { fade, fly, scale } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let showPopup = $state(false);
  let mounted = $state(false);
  
  // Function to close the popup
  function closePopup() {
    showPopup = false;
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('welcome-popup-shown', 'true');
    }
  }
  
  // Handle escape key
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && showPopup) {
      closePopup();
    }
  }
  
  // Handle backdrop click
  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  }
  
  onMount(() => {
    mounted = true;
    
    // Check if popup has already been shown this session
    const hasBeenShown = sessionStorage.getItem('welcome-popup-shown');
    
    if (!hasBeenShown) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        showPopup = true;
      }, 1500);
      
      return () => {
        clearTimeout(timer);
      };
    }
  });
  
  $effect(() => {
    if (mounted && showPopup) {
      window.addEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'hidden';
      
      return () => {
        window.removeEventListener('keydown', handleKeydown);
        document.body.style.overflow = '';
      };
    }
  });
</script>

{#if showPopup}
  <div 
    class="popup-backdrop"
    onclick={handleBackdropClick}
    transition:fade={{ duration: 300 }}
    role="dialog"
    aria-modal="true"
    aria-labelledby="popup-title"
    aria-describedby="popup-description"
  >
    <div 
      class="popup-content"
      transition:fly={{ y: 50, duration: 400, delay: 100 }}
    >
      <button 
        class="popup-close"
        onclick={closePopup}
        aria-label="Close welcome message"
      >
        ×
      </button>
      
      <!-- Limited Time Badge -->
      <div class="limited-badge">
        <div class="badge-shine"></div>
        <span class="badge-text">✨ NEW YEAR SPECIAL - LIMITED TIME ✨</span>
      </div>
      
      <!-- Header -->
      <div class="popup-header">
        <div class="header-icon-wrapper">
          <div class="icon-circle">
            <span class="icon">🐾</span>
          </div>
        </div>
        <h2 id="popup-title">Start 2026 with Complete Pet Care</h2>
        <p class="popup-subtitle">Give your pet 365 days of expert care</p>
      </div>
      
      <!-- Offer Section -->
      <div class="offer-section">
        <div class="offer-badge-container">
          <div class="offer-badge">
            <span class="badge-icon">🎁</span>
            <div class="badge-content">
              <span class="badge-small">GET</span>
              <span class="badge-large">1 MONTH FREE</span>
              <span class="badge-small">ON ANNUAL PLANS</span>
            </div>
          </div>
        </div>
        
        <div class="savings-highlight">
          <div class="savings-item">
            <span class="savings-icon">💰</span>
            <div class="savings-content">
              <span class="savings-label">Direct Savings</span>
              <span class="savings-value">£10 - £60+</span>
            </div>
          </div>
          <div class="savings-divider"></div>
          <div class="savings-item">
            <span class="savings-icon">🎯</span>
            <div class="savings-content">
              <span class="savings-label">Plus Benefits</span>
              <span class="savings-value">Unlimited</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Benefits -->
      <div class="popup-body">
        <h3 class="benefits-title">What's Included in Your Care Plan:</h3>
        
        <div class="benefits-grid">
          <div class="benefit-card">
            <span class="benefit-icon">🩺</span>
            <span class="benefit-text">Health Check-ups</span>
          </div>
          <div class="benefit-card">
            <span class="benefit-icon">💉</span>
            <span class="benefit-text">Vaccinations</span>
          </div>
          <div class="benefit-card">
            <span class="benefit-icon">🦷</span>
            <span class="benefit-text">Dental Care</span>
          </div>
          <div class="benefit-card">
            <span class="benefit-icon">🐛</span>
            <span class="benefit-text">Parasite Prevention</span>
          </div>
          <div class="benefit-card">
            <span class="benefit-icon">⭐</span>
            <span class="benefit-text">Priority Booking</span>
          </div>
          <div class="benefit-card">
            <span class="benefit-icon">💝</span>
            <span class="benefit-text">Service Discounts</span>
          </div>
        </div>
        
        <div class="value-proposition">
          <div class="value-icon">✓</div>
          <p>
            <strong>Budget-friendly monthly payments</strong> with no surprises. 
            Get comprehensive care and <strong>unlimited discounts</strong> on additional services throughout the year.
          </p>
        </div>
        
        <!-- Contact Info -->
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <span class="contact-text">39 Jersey Way, Barwell, LE9 8HR</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <span class="contact-text">01455 710 796</span>
          </div>
        </div>
      </div>
      
      <!-- CTAs -->
      <div class="popup-actions">
        <a href="/bozzle-plans" class="btn btn-primary" onclick={closePopup}>
          <span>Explore Bozzle Plans</span>
          <span class="btn-arrow">→</span>
        </a>
        <a href="/appointments" class="btn btn-secondary" onclick={closePopup}>
          <span>Book Appointment</span>
        </a>
        <a href="/contact" class="btn-link" onclick={closePopup}>
          Questions? Contact Us
        </a>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Backdrop */
  .popup-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(249, 115, 22, 0.15)), 
                rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 1rem;
    backdrop-filter: blur(8px);
  }

  /* Popup Content */
  .popup-content {
    background: linear-gradient(to bottom, #ffffff 0%, #f0fdfa 100%);
    border-radius: 24px;
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.25),
      0 0 0 1px rgba(6, 182, 212, 0.1),
      0 0 60px rgba(6, 182, 212, 0.15);
    max-width: 560px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
  }

  /* Close Button */
  .popup-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid #e5e7eb;
    font-size: 1.75rem;
    color: #6b7280;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    z-index: 10;
    line-height: 1;
    font-weight: 300;
  }

  .popup-close:hover {
    background-color: #f97316;
    border-color: #f97316;
    color: white;
    transform: rotate(90deg);
  }

  .popup-close:focus {
    outline: 2px solid #06b6d4;
    outline-offset: 2px;
  }

  /* Limited Time Badge */
  .limited-badge {
    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
    color: white;
    text-align: center;
    padding: 0.875rem;
    font-weight: 800;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    position: relative;
    overflow: hidden;
    border-radius: 24px 24px 0 0;
  }

  .badge-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: shine-sweep 3s infinite;
  }

  @keyframes shine-sweep {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  .badge-text {
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  /* Header */
  .popup-header {
    text-align: center;
    padding: 2.5rem 2rem 1.5rem;
    background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%);
    position: relative;
  }

  .header-icon-wrapper {
    margin-bottom: 1.25rem;
    display: flex;
    justify-content: center;
  }

  .icon-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #06b6d4, #0891b2);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .icon {
    font-size: 2.5rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }

  .popup-header h2 {
    font-size: 2rem;
    font-weight: 800;
    margin: 0 0 0.75rem;
    background: linear-gradient(135deg, #0e7490, #f97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
  }
  
  .popup-subtitle {
    font-size: 1.125rem;
    font-weight: 500;
    color: #4b5563;
    margin: 0;
  }

  /* Offer Section */
  .offer-section {
    padding: 2rem;
    background: linear-gradient(135deg, #ecfeff 0%, #fff7ed 100%);
    border-top: 1px solid rgba(6, 182, 212, 0.1);
    border-bottom: 1px solid rgba(6, 182, 212, 0.1);
  }

  .offer-badge-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .offer-badge {
    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
    border-radius: 20px;
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 
      0 10px 30px rgba(249, 115, 22, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
  }

  .offer-badge::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: rotate-shine 4s linear infinite;
  }

  @keyframes rotate-shine {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .badge-icon {
    font-size: 2.5rem;
    position: relative;
    z-index: 1;
    animation: pulse-scale 2s ease-in-out infinite;
  }

  @keyframes pulse-scale {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .badge-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 1;
  }

  .badge-small {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
  }

  .badge-large {
    color: white;
    font-size: 1.75rem;
    font-weight: 900;
    line-height: 1;
    margin: 0.25rem 0;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  /* Savings Highlight */
  .savings-highlight {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 16px;
    padding: 1.25rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .savings-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
  }

  .savings-icon {
    font-size: 2rem;
  }

  .savings-content {
    display: flex;
    flex-direction: column;
  }

  .savings-label {
    font-size: 0.75rem;
    color: #6b7280;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .savings-value {
    font-size: 1.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #0e7490, #f97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
  }

  .savings-divider {
    width: 2px;
    height: 50px;
    background: linear-gradient(to bottom, transparent, #e5e7eb, transparent);
  }

  /* Body */
  .popup-body {
    padding: 2rem;
  }

  .benefits-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
    margin: 0 0 1.25rem;
    text-align: center;
  }

  /* Benefits Grid */
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.875rem;
    margin-bottom: 1.5rem;
  }

  .benefit-card {
    background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%);
    border: 2px solid #ccfbf1;
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .benefit-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(6, 182, 212, 0.15);
    border-color: #06b6d4;
  }

  .benefit-icon {
    font-size: 1.75rem;
  }

  .benefit-text {
    font-size: 0.875rem;
    font-weight: 600;
    color: #0e7490;
  }

  /* Value Proposition */
  .value-proposition {
    background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
    border-left: 4px solid #f97316;
    border-radius: 8px;
    padding: 1.25rem;
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .value-icon {
    width: 28px;
    height: 28px;
    background: #f97316;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 0.875rem;
    flex-shrink: 0;
  }

  .value-proposition p {
    color: #78350f;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
  }

  .value-proposition strong {
    color: #92400e;
    font-weight: 700;
  }

  /* Contact Info */
  .contact-info {
    background: #f9fafb;
    border-radius: 12px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .contact-icon {
    font-size: 1.25rem;
  }

  .contact-text {
    color: #374151;
    font-size: 0.95rem;
    font-weight: 500;
  }

  /* Actions */
  .popup-actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0 2rem 2rem;
  }

  .btn {
    text-align: center;
    padding: 1rem 1.5rem;
    font-weight: 700;
    font-size: 1rem;
    transition: all 0.2s ease;
    border-radius: 50px;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;
    width: 100%;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
    color: white;
    box-shadow: 0 6px 20px rgba(6, 182, 212, 0.3);
    position: relative;
    overflow: hidden;
  }

  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  .btn-primary:hover::before {
    transform: translateX(100%);
  }
  
  .btn-primary:hover {
    background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
    box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);
    transform: translateY(-2px);
  }

  .btn-arrow {
    font-size: 1.25rem;
    transition: transform 0.2s ease;
  }

  .btn-primary:hover .btn-arrow {
    transform: translateX(4px);
  }

  .btn-secondary {
    background: white;
    border: 2px solid #06b6d4;
    color: #0e7490;
  }
  
  .btn-secondary:hover {
    background: #f0fdfa;
    border-color: #0891b2;
    color: #0e7490;
    transform: translateY(-2px);
  }

  .btn-link {
    background: transparent;
    color: #6b7280;
    font-size: 0.875rem;
    padding: 0.5rem;
    font-weight: 600;
  }

  .btn-link:hover {
    color: #f97316;
  }

  /* Mobile Responsiveness */
  @media (max-width: 640px) {
    .popup-backdrop {
      padding: 0.5rem;
    }

    .popup-content {
      border-radius: 20px;
    }

    .limited-badge {
      font-size: 0.75rem;
      padding: 0.75rem;
      border-radius: 20px 20px 0 0;
    }

    .popup-header {
      padding: 2rem 1.5rem 1.25rem;
    }

    .icon-circle {
      width: 70px;
      height: 70px;
    }

    .icon {
      font-size: 2rem;
    }

    .popup-header h2 {
      font-size: 1.5rem;
    }
    
    .popup-subtitle {
      font-size: 1rem;
    }

    .offer-section {
      padding: 1.5rem;
    }

    .offer-badge {
      padding: 1.25rem 1.5rem;
      flex-direction: column;
      text-align: center;
    }

    .badge-content {
      align-items: center;
    }

    .badge-large {
      font-size: 1.5rem;
    }

    .savings-highlight {
      flex-direction: column;
      gap: 1rem;
    }

    .savings-divider {
      width: 100%;
      height: 2px;
    }

    .popup-body {
      padding: 1.5rem;
    }

    .benefits-grid {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }

    .benefit-card {
      flex-direction: row;
      justify-content: flex-start;
      text-align: left;
    }

    .popup-actions {
      padding: 0 1.5rem 1.5rem;
    }

    .btn {
      padding: 0.875rem 1.25rem;
      font-size: 0.95rem;
    }
  }

  /* Accessibility - Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    
    .popup-close:hover,
    .btn:hover,
    .benefit-card:hover {
      transform: none !important;
    }
  }

  /* Custom scrollbar */
  .popup-content::-webkit-scrollbar {
    width: 8px;
  }
  
  .popup-content::-webkit-scrollbar-track {
    background: #f0fdfa;
  }
  
  .popup-content::-webkit-scrollbar-thumb {
    background: #06b6d4;
    border-radius: 4px;
  }
  
  .popup-content::-webkit-scrollbar-thumb:hover {
    background: #0891b2;
  }
</style>