<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let showPopup = $state(false);
  let mounted = $state(false);
  
  // Function to close the popup
  function closePopup() {
    showPopup = false;
    // Set a flag in sessionStorage so popup doesn't show again this session
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
      
      return () => clearTimeout(timer);
    }
  });
  
  $effect(() => {
    if (mounted && showPopup) {
      // Add event listener for escape key
      window.addEventListener('keydown', handleKeydown);
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
      
      return () => {
        window.removeEventListener('keydown', handleKeydown);
        document.body.style.overflow = '';
      };
    }
  });
</script>

{#if showPopup}
  <!-- Backdrop -->
  <div 
    class="popup-backdrop"
    onclick={handleBackdropClick}
    transition:fade={{ duration: 300 }}
    role="dialog"
    aria-modal="true"
    aria-labelledby="popup-title"
    aria-describedby="popup-description"
  >
    <!-- Popup Content -->
    <div 
      class="popup-content"
      transition:fly={{ y: 50, duration: 400, delay: 100 }}
    >
      <!-- Close button -->
      <button 
        class="popup-close"
        onclick={closePopup}
        aria-label="Close welcome message"
      >
        ×
      </button>
      
      <!-- Content -->
      <div class="popup-header">
        <div class="popup-icon-wrapper">
          <div class="popup-icon primary">🎉</div>
          <div class="popup-icon secondary">🐾</div>
        </div>
        <h2 id="popup-title">Welcome to Bozzles Ark Vets!</h2>
        <p class="popup-subtitle">We're Thrilled to Serve You & Your Pets</p>
      </div>
      
      <div class="popup-body">
        <p id="popup-description" class="main-text">
          Our doors are officially open today, and we're ready to provide 
          <strong>compassionate, expert veterinary care</strong> for all creatures great and small.
        </p>
        
        <div class="features-grid">
          <div class="feature-item">
            <span class="feature-icon">🩺</span>
            <span class="feature-text">Expert Care</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">⚡</span>
            <span class="feature-text">Same-Day Appointments</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🏥</span>
            <span class="feature-text">Modern Facilities</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">❤️</span>
            <span class="feature-text">Compassionate Team</span>
          </div>
        </div>
        
        <div class="offer-box">
          <div class="offer-badge">NEW PATIENT OFFER</div>
          <p class="offer-text">
            <strong>2 Months Free on all Care plans</strong> when you purchased annually before 2026!
          </p>
        </div>
        
        <div class="popup-details">
          <div class="detail-item">
            <span class="detail-icon">📍</span>
            <div class="detail-content">
              <span class="detail-label">Visit Us</span>
              <span class="detail-value">39 Jersey Way, Barwell, LE9 8HR</span>
            </div>
          </div>
          <div class="detail-item">
            <span class="detail-icon">📞</span>
            <div class="detail-content">
              <span class="detail-label">Call Us</span>
              <span class="detail-value">01455 710 796</span>
            </div>
          </div>
          <div class="detail-item">
            <span class="detail-icon">⏰</span>
            <div class="detail-content">
              <span class="detail-label">Opening Hours</span>
              <span class="detail-value">Mon-Fri: 9am-7pm | Sat: 10am-5pm</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="popup-actions">
        <button onclick={closePopup} class="btn btn-outline">
          Browse Services
        </button>
        <a href="#PreRegistration" class="btn btn-primary" onclick={closePopup}>
          Book Appointment
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
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 1rem;
    backdrop-filter: blur(4px);
  }

  /* Popup Content */
  .popup-content {
    background: linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%);
    border-radius: 16px;
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.25),
      0 0 0 1px rgba(0, 0, 0, 0.05);
    max-width: 550px;
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
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 1.75rem;
    color: #6b7280;
    cursor: pointer;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    z-index: 1;
    line-height: 1;
  }

  .popup-close:hover {
    background-color: #f3f4f6;
    color: #1f2937;
    transform: rotate(90deg);
  }

  .popup-close:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  /* Header */
  .popup-header {
    text-align: center;
    padding: 2.5rem 2rem 1.5rem;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    border-radius: 16px 16px 0 0;
    position: relative;
    overflow: hidden;
  }
  
  .popup-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  .popup-icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    position: relative;
  }

  .popup-icon {
    font-size: 2.5rem;
    display: block;
    position: relative;
    animation: bounce 2s ease-in-out infinite;
  }
  
  .popup-icon.primary {
    animation-delay: 0s;
  }
  
  .popup-icon.secondary {
    animation-delay: 0.3s;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  .popup-header h2 {
    font-size: 1.875rem;
    font-weight: 800;
    margin: 0 0 0.5rem;
    line-height: 1.2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .popup-subtitle {
    font-size: 1.125rem;
    font-weight: 500;
    opacity: 0.95;
    margin: 0;
    position: relative;
  }

  /* Body */
  .popup-body {
    padding: 2rem;
  }

  .main-text {
    color: #374151;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
    text-align: center;
  }

  .main-text strong {
    color: #059669;
    font-weight: 600;
  }
  
  /* Features Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    background: #f3f4f6;
    border-radius: 12px;
    transition: all 0.3s ease;
  }
  
  .feature-item:hover {
    background: #e5e7eb;
    transform: translateY(-2px);
  }
  
  .feature-icon {
    font-size: 1.75rem;
  }
  
  .feature-text {
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
    text-align: center;
  }
  
  /* Offer Box */
  .offer-box {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border: 2px solid #fbbf24;
    border-radius: 12px;
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  
  .offer-box::before {
    content: '✨';
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    font-size: 1.5rem;
    animation: sparkle 2s ease-in-out infinite;
  }
  
  .offer-box::after {
    content: '✨';
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    font-size: 1.5rem;
    animation: sparkle 2s ease-in-out infinite;
    animation-delay: 1s;
  }
  
  @keyframes sparkle {
    0%, 100% { 
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
    50% { 
      transform: scale(1.2) rotate(180deg);
      opacity: 0.7;
    }
  }
  
  .offer-badge {
    display: inline-block;
    background: #f59e0b;
    color: white;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    padding: 0.375rem 1rem;
    border-radius: 50px;
    margin-bottom: 0.75rem;
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
  }
  
  .offer-text {
    color: #92400e;
    font-size: 0.95rem;
    margin: 0;
    line-height: 1.5;
  }
  
  .offer-text strong {
    color: #78350f;
    font-weight: 700;
  }

  /* Details */
  .popup-details {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .detail-item {
    display: flex;
    align-items: flex-start;
    gap: 0.875rem;
  }
  
  .detail-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 0.125rem;
  }
  
  .detail-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
  }

  .detail-label {
    font-weight: 700;
    color: #1f2937;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.025em;
  }

  .detail-value {
    color: #6b7280;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  /* Actions */
  .popup-actions {
    display: flex;
    gap: 0.75rem;
    padding: 0 2rem 2rem;
  }

  .popup-actions .btn {
    flex: 1;
    text-align: center;
    padding: 0.875rem 1.25rem;
    font-weight: 700;
    font-size: 0.95rem;
    transition: all 0.2s ease;
    border-radius: 50px;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .popup-actions .btn:hover {
    transform: translateY(-2px);
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
    border: none;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }
  
  .btn-primary:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
  }
  
  .btn-outline {
    background: white;
    border: 2px solid #d1d5db;
    color: #374151;
  }
  
  .btn-outline:hover {
    border-color: #059669;
    color: #059669;
    background: #f0fdf4;
  }

  /* Mobile Responsiveness */
  @media (max-width: 640px) {
    .popup-backdrop {
      padding: 0.5rem;
    }

    .popup-content {
      border-radius: 12px;
    }

    .popup-header {
      padding: 2rem 1.5rem 1.25rem;
      border-radius: 12px 12px 0 0;
    }

    .popup-header h2 {
      font-size: 1.5rem;
    }
    
    .popup-subtitle {
      font-size: 1rem;
    }

    .popup-body {
      padding: 1.5rem;
    }
    
    .main-text {
      font-size: 1rem;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }
    
    .feature-item {
      flex-direction: row;
      justify-content: flex-start;
      text-align: left;
    }
    
    .feature-icon {
      font-size: 1.5rem;
    }

    .popup-details {
      padding: 1rem;
    }

    .popup-actions {
      flex-direction: column;
      padding: 0 1.5rem 1.5rem;
    }

    .detail-item {
      gap: 0.75rem;
    }
  }

  /* Accessibility - Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .popup-content,
    .popup-backdrop,
    .popup-icon,
    .offer-box::before,
    .offer-box::after,
    .feature-item {
      animation: none !important;
      transition: none !important;
    }
    
    .popup-close:hover,
    .popup-actions .btn:hover,
    .feature-item:hover {
      transform: none !important;
    }
  }

  /* Focus trap for better accessibility */
  .popup-content:focus {
    outline: none;
  }
  
  /* Smooth scrolling for popup content */
  .popup-content {
    scroll-behavior: smooth;
  }
  
  /* Custom scrollbar for popup */
  .popup-content::-webkit-scrollbar {
    width: 8px;
  }
  
  .popup-content::-webkit-scrollbar-track {
    background: #f3f4f6;
  }
  
  .popup-content::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 4px;
  }
  
  .popup-content::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
</style>