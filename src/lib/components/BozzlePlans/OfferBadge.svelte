<script lang="ts">
  // Check if offer is still valid (before Jan 1, 2026)
  const offerEndDate = new Date('2026-01-01T00:00:00');
  const now = new Date();
  const isOfferValid = now < offerEndDate;
</script>

{#if isOfferValid}
  <div class="offer-badge">
    <div class="badge-content">
      <div class="badge-icon">⚡</div>
      <div class="badge-text">
        <span class="badge-title">Limited Offer</span>
        <span class="badge-subtitle">2 Months FREE!</span>
      </div>
    </div>
    <div class="badge-pulse"></div>
  </div>
{/if}

<style>
  .offer-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    pointer-events: none;
  }
  
  .badge-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    color: #1a202c;
    padding: 0.75rem 1.25rem;
    border-radius: 50px;
    box-shadow: 0 8px 16px rgba(245, 158, 11, 0.4);
    font-weight: 700;
    position: relative;
    animation: gentle-pulse 3s ease-in-out infinite;
  }
  
  .badge-icon {
    font-size: 1.25rem;
    animation: rotate-flash 2s ease-in-out infinite;
  }
  
  .badge-text {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
  }
  
  .badge-title {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .badge-subtitle {
    font-size: 1rem;
    font-weight: 800;
  }
  
  .badge-pulse {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    opacity: 0.6;
    animation: pulse-ring 2s ease-out infinite;
    pointer-events: none;
  }
  
  @keyframes gentle-pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  @keyframes rotate-flash {
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
  }
  
  @keyframes pulse-ring {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    100% {
      transform: scale(1.3);
      opacity: 0;
    }
  }
  
  @media (max-width: 768px) {
    .offer-badge {
      top: 0.5rem;
      right: 0.5rem;
    }
    
    .badge-content {
      padding: 0.5rem 1rem;
    }
    
    .badge-icon {
      font-size: 1rem;
    }
    
    .badge-title {
      font-size: 0.65rem;
    }
    
    .badge-subtitle {
      font-size: 0.875rem;
    }
  }
  
  @media (max-width: 480px) {
    .badge-content {
      padding: 0.5rem 0.75rem;
      gap: 0.35rem;
    }
    
    .badge-title {
      font-size: 0.6rem;
    }
    
    .badge-subtitle {
      font-size: 0.8rem;
    }
  }
</style>