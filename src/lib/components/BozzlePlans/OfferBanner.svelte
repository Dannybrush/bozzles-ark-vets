<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  // Check if offer is still valid (before Feb 1, 2026)
  const offerEndDate = new Date('2026-02-01T00:00:00');
  const now = new Date();
  const isOfferValid = now < offerEndDate;
  
  // Calculate days remaining
  const daysRemaining = Math.ceil((offerEndDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  // Banner dismiss state
  let isDismissed = $state(false);
  
  function dismissBanner() {
    isDismissed = true;
  }
</script>

{#if isOfferValid && !isDismissed}
  <div class="offer-banner" in:fly={{ y: -50, duration: 600, easing: quintOut }} out:fade={{ duration: 300 }}>
    <div class="container">
      <div class="banner-content">
        <div class="banner-icon">🎉</div>
        <div class="banner-text">
          <strong>Limited Time Offer!</strong>
          <span class="banner-message">
            Pay upfront NOW and get <strong>1 MONTH FREE</strong>
          </span><!--
          <span class="banner-countdown">
             {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} remaining
          </span> --> 
        </div>
        <button class="banner-dismiss" onclick={dismissBanner} aria-label="Dismiss offer banner">
          ✕
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .offer-banner {
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    color: white;
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 100;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .banner-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    position: relative;
  }
  
  .banner-icon {
    font-size: 1.5rem;
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  
  .banner-text {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
  }
  
  .banner-text strong {
    font-weight: 700;
  }
  
  .banner-message {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  .banner-countdown {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    backdrop-filter: blur(10px);
  }
  
  .banner-dismiss {
    position: absolute;
    right: 0;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.5rem;
    opacity: 0.8;
    transition: opacity 0.3s ease;
    line-height: 1;
  }
  
  .banner-dismiss:hover {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    .banner-content {
      flex-direction: column;
      text-align: center;
      gap: 0.75rem;
    }
    
    .banner-text {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .banner-dismiss {
      position: static;
      margin-top: 0.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .offer-banner {
      padding: 0.75rem;
    }
    
    .banner-text {
      font-size: 0.875rem;
    }
    
    .banner-icon {
      font-size: 1.25rem;
    }
  }
</style>