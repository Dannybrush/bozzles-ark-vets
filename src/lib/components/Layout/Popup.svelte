<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let showPopup = $state(false);
  let mounted = $state(false);
  
  // Function to close the popup
  function closePopup() {
    showPopup = false;
    // Set a flag in sessionStorage so popup doesn't show again this session
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('opening-popup-shown', 'true');
    }
  }
  
  // Handle escape key
  function handleKeydown(event) {
    if (event.key === 'Escape' && showPopup) {
      closePopup();
    }
  }
  
  // Handle backdrop click
  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  }
  
  onMount(() => {
    mounted = true;
    
    // Check if popup has already been shown this session
    const hasBeenShown = sessionStorage.getItem('opening-popup-shown');
    
    if (!hasBeenShown) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        showPopup = true;
      }, 1000);
      
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
        aria-label="Close announcement"
      >
        ×
      </button>
      
      <!-- Content -->
      <div class="popup-header">
        <div class="popup-icon">
          🎉
        </div>
        <h2 id="popup-title">We're Opening Soon!</h2>
      </div>
      
      <div class="popup-body">
        <p id="popup-description">
          Bozzles Ark Vets is excited to announce that we'll be opening our doors in 
          <strong>October 2025</strong>. We can't wait to provide compassionate care 
          for all creatures great and small in the Barwell community.
        </p>
        
        <div class="popup-details">
          <div class="detail-item">
            <span class="detail-label">Opening Date:</span>
            <span class="detail-value">October 2025</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Location:</span>
            <span class="detail-value">39 Jersey Way, Barwell, LE9 8HR</span>
          </div>
        </div>
        
        <p class="popup-cta-text">
          Pre-register now to be among our first patients and secure priority booking!
        </p>
      </div>
      
      <div class="popup-actions">
        <button onclick={closePopup} class="btn btn-outline">
          Maybe Later
        </button>
        <a href="/preregistration" class="btn btn-primary">
          Pre-Register Now
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
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 1rem;
  }

  /* Popup Content */
  .popup-content {
    background: var(--color-white);
    border-radius: 12px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
    max-width: 500px;
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
    background: none;
    border: none;
    font-size: 2rem;
    color: var(--color-text-light);
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-fast) ease;
    z-index: 1;
  }

  .popup-close:hover {
    background-color: var(--color-gray-100);
    color: var(--color-text);
  }

  .popup-close:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  /* Header */
  .popup-header {
    text-align: center;
    padding: 2rem 2rem 1rem;
  }

  .popup-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
  }

  .popup-header h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-primary);
    margin: 0;
    line-height: 1.3;
  }

  /* Body */
  .popup-body {
    padding: 0 2rem 1.5rem;
    text-align: center;
  }

  .popup-body p {
    color: var(--color-text);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .popup-body strong {
    color: var(--color-primary);
    font-weight: 600;
  }

  /* Details */
  .popup-details {
    background: var(--color-gray-100);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: left;
  }

  .detail-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
  }

  .detail-item:last-child {
    margin-bottom: 0;
  }

  .detail-label {
    font-weight: 600;
    color: var(--color-text);
    flex-shrink: 0;
    margin-right: 1rem;
  }

  .detail-value {
    color: var(--color-text-light);
    text-align: right;
  }

  /* CTA Text */
  .popup-cta-text {
    font-size: 0.95rem;
    color: var(--color-text-light);
    font-style: italic;
    margin-bottom: 0 !important;
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
    padding: 0.75rem 1rem;
    font-weight: 600;
    transition: all var(--transition-fast) ease;
  }

  .popup-actions .btn:hover {
    transform: translateY(-1px);
  }

  /* Mobile Responsiveness */
  @media (max-width: 480px) {
    .popup-backdrop {
      padding: 0.5rem;
    }

    .popup-content {
      border-radius: 8px;
    }

    .popup-header {
      padding: 1.5rem 1.5rem 1rem;
    }

    .popup-header h2 {
      font-size: 1.5rem;
    }

    .popup-body {
      padding: 0 1.5rem 1rem;
    }

    .popup-details {
      padding: 1rem;
    }

    .popup-actions {
      flex-direction: column;
      padding: 0 1.5rem 1.5rem;
    }

    .detail-item {
      flex-direction: column;
      gap: 0.25rem;
    }

    .detail-value {
      text-align: left;
    }
  }

  /* Accessibility - Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .popup-content {
      transition: none;
    }
    
    .popup-backdrop {
      transition: none;
    }
  }

  /* Focus trap for better accessibility */
  .popup-content:focus {
    outline: none;
  }

  /* Button styles to ensure they work with your existing CSS */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    text-decoration: none;
    font-size: 0.95rem;
    line-height: 1.5;
    transition: all var(--transition-fast) ease;
  }

  .btn-primary {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  .btn-primary:hover {
    background-color: var(--color-primary-light);
  }

  .btn-outline {
    background-color: transparent;
    border: 2px solid var(--color-gray-300);
    color: var(--color-text);
  }

  .btn-outline:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
</style>