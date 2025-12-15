<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let showPopup = $state(false);
  let mounted = $state(false);
  let timeRemaining = $state({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Calculate time remaining until December 31st, 2025 at 23:59:59
  function calculateTimeRemaining() {
    const now = new Date();
    const endDate = new Date('2025-12-31T23:59:59');
    const difference = endDate.getTime() - now.getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
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
      
      // Update countdown every second
      const countdownInterval = setInterval(() => {
        timeRemaining = calculateTimeRemaining();
      }, 1000);
      
      return () => {
        clearTimeout(timer);
        clearInterval(countdownInterval);
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
    <!-- Falling snowflakes -->
    <div class="snowflakes" aria-hidden="true">
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
    </div>

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
      
      <!-- Christmas decoration -->
      <div class="christmas-lights">
        <div class="light red"></div>
        <div class="light green"></div>
        <div class="light gold"></div>
        <div class="light red"></div>
        <div class="light green"></div>
        <div class="light gold"></div>
        <div class="light red"></div>
        <div class="light green"></div>
      </div>
      
      <!-- Urgent Banner -->
      <div class="urgent-banner">
        <div class="urgent-pulse"></div>
        <span class="urgent-text">🎄 LIMITED TIME FESTIVE OFFER 🎄</span>
      </div>
      
      <div class="popup-header">
        <div class="popup-icon-wrapper">
          <div class="popup-icon santa">🎅</div>
          <div class="popup-icon gift">🎁</div>
        </div>
        <h2 id="popup-title">🎄 Season's Greetings! 🎄</h2>
        <p class="popup-subtitle">Our Christmas & New Year Gift to Your Pets</p>
      </div>
      
      <!-- Countdown Timer -->
      <div class="countdown-section">
        <p class="countdown-label">⏰ Offer Expires In ⏰</p>
        <div class="countdown-timer">
          <div class="countdown-unit">
            <div class="countdown-number">{timeRemaining.days}</div>
            <div class="countdown-text">Days</div>
          </div>
          <div class="countdown-separator">:</div>
          <div class="countdown-unit">
            <div class="countdown-number">{String(timeRemaining.hours).padStart(2, '0')}</div>
            <div class="countdown-text">Hours</div>
          </div>
          <div class="countdown-separator">:</div>
          <div class="countdown-unit">
            <div class="countdown-number">{String(timeRemaining.minutes).padStart(2, '0')}</div>
            <div class="countdown-text">Minutes</div>
          </div>
          <div class="countdown-separator">:</div>
          <div class="countdown-unit">
            <div class="countdown-number">{String(timeRemaining.seconds).padStart(2, '0')}</div>
            <div class="countdown-text">Seconds</div>
          </div>
        </div>
        <p class="countdown-deadline">🎆 Ends December 31st at Midnight 🎆</p>
      </div>
      
      <div class="popup-body">
        <div class="offer-highlight">
          <div class="christmas-stars">
            <span class="star">⭐</span>
            <span class="star">✨</span>
            <span class="star">⭐</span>
          </div>
          <div class="offer-icon">🎁</div>
          <h3 class="offer-title">Get 2 Months FREE</h3>
          <p class="offer-subtitle">on all Care Plans purchased annually</p>
          <div class="offer-value">
            <span class="value-label">🎊 Save up to 🎊</span>
            <span class="value-amount">£120</span>
          </div>
          <div class="ribbon-wrapper">
            <span class="ribbon">FESTIVE SPECIAL</span>
          </div>
        </div>
        
        <div class="benefits-list">
          <div class="benefit-item">
            <span class="benefit-check">🎄</span>
            <span>Comprehensive health check-ups</span>
          </div>
          <div class="benefit-item">
            <span class="benefit-check">🎄</span>
            <span>Vaccinations & parasite prevention</span>
          </div>
          <div class="benefit-item">
            <span class="benefit-check">🎄</span>
            <span>Dental care & hygiene treatments</span>
          </div>
          <div class="benefit-item">
            <span class="benefit-check">🎄</span>
            <span>Priority appointment booking</span>
          </div>
        </div>
        
        <div class="urgency-note">
          <div class="urgency-icon">🎅</div>
          <p>
            <strong>Ho ho hurry!</strong> This magical Christmas offer is only available until New Year's Eve. 
            Give your furry friend the gift of excellent health care in 2026! 🐾
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
        </div>
      </div>
      
      <div class="popup-actions">
        <a href="/contact" class="btn btn-primary pulse-button" onclick={closePopup}>
          <span>🎁 Claim Your Gift Now 🎁</span>
          <span class="btn-arrow">→</span>
        </a>
        <button onclick={closePopup} class="btn btn-outline">
          Maybe Later
        </button>
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
    background: radial-gradient(circle at center, rgba(10, 25, 47, 0.85), rgba(0, 0, 0, 0.9));
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 1rem;
    backdrop-filter: blur(6px);
  }

  /* Snowflakes */
  .snowflakes {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .snowflake {
    position: absolute;
    top: -10%;
    color: white;
    font-size: 1.5rem;
    opacity: 0.8;
    animation: fall linear infinite;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }

  .snowflake:nth-child(1) { left: 10%; animation-duration: 8s; animation-delay: 0s; }
  .snowflake:nth-child(2) { left: 20%; animation-duration: 10s; animation-delay: 1s; font-size: 1.2rem; }
  .snowflake:nth-child(3) { left: 30%; animation-duration: 7s; animation-delay: 2s; }
  .snowflake:nth-child(4) { left: 40%; animation-duration: 9s; animation-delay: 0.5s; font-size: 1.8rem; }
  .snowflake:nth-child(5) { left: 50%; animation-duration: 11s; animation-delay: 1.5s; }
  .snowflake:nth-child(6) { left: 60%; animation-duration: 8s; animation-delay: 3s; font-size: 1.4rem; }
  .snowflake:nth-child(7) { left: 70%; animation-duration: 10s; animation-delay: 2.5s; }
  .snowflake:nth-child(8) { left: 85%; animation-duration: 9s; animation-delay: 1s; font-size: 1.6rem; }

  @keyframes fall {
    to {
      transform: translateY(105vh) rotate(360deg);
    }
  }

  /* Popup Content */
  .popup-content {
    background: linear-gradient(to bottom, #ffffff 0%, #fef3f3 100%);
    border-radius: 20px;
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.3),
      0 0 0 3px rgba(220, 38, 38, 0.3),
      0 0 30px rgba(16, 185, 129, 0.2);
    max-width: 580px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
  }

  /* Christmas Lights */
  .christmas-lights {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem;
    z-index: 2;
  }

  .light {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    animation: twinkle 1.5s infinite;
  }

  .light.red {
    background: radial-gradient(circle, #ff4444, #cc0000);
    box-shadow: 0 0 10px #ff4444;
  }

  .light.green {
    background: radial-gradient(circle, #44ff44, #00cc00);
    box-shadow: 0 0 10px #44ff44;
    animation-delay: 0.5s;
  }

  .light.gold {
    background: radial-gradient(circle, #ffd700, #ffaa00);
    box-shadow: 0 0 10px #ffd700;
    animation-delay: 1s;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  /* Close Button */
  .popup-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid #dc2626;
    font-size: 1.75rem;
    color: #dc2626;
    cursor: pointer;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    z-index: 3;
    line-height: 1;
  }

  .popup-close:hover {
    background-color: #dc2626;
    color: white;
    transform: rotate(90deg);
  }

  .popup-close:focus {
    outline: 2px solid #ef4444;
    outline-offset: 2px;
  }

  /* Urgent Banner */
  .urgent-banner {
    background: linear-gradient(135deg, #dc2626 0%, #16a34a 50%, #dc2626 100%);
    background-size: 200% 100%;
    animation: christmas-gradient 3s ease infinite;
    color: white;
    text-align: center;
    padding: 0.75rem;
    font-weight: 800;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    position: relative;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
    margin-top: 1.5rem;
  }

  @keyframes christmas-gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .urgent-pulse {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: pulse-sweep 2s infinite;
  }

  @keyframes pulse-sweep {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  .urgent-text {
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  /* Header */
  .popup-header {
    text-align: center;
    padding: 2rem 2rem 1.5rem;
    background: linear-gradient(135deg, #dc2626 0%, #16a34a 100%);
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
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 1;
  }

  .popup-icon-wrapper {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    position: relative;
  }

  .popup-icon {
    font-size: 3rem;
    display: inline-block;
    position: relative;
  }

  .popup-icon.santa {
    animation: wave 2s ease-in-out infinite;
  }

  .popup-icon.gift {
    animation: bounce-gift 2s ease-in-out infinite;
  }
  
  @keyframes wave {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
  }

  @keyframes bounce-gift {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .popup-header h2 {
    font-size: 2rem;
    font-weight: 800;
    margin: 0 0 0.5rem;
    color: white;
    line-height: 1.2;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    position: relative;
  }
  
  .popup-subtitle {
    font-size: 1.125rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.95);
    margin: 0;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    position: relative;
  }

  /* Countdown Section */
  .countdown-section {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    padding: 1.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .countdown-section::before {
    content: '❅';
    position: absolute;
    top: 10%;
    left: 10%;
    font-size: 3rem;
    opacity: 0.1;
    color: white;
  }

  .countdown-section::after {
    content: '❆';
    position: absolute;
    bottom: 10%;
    right: 10%;
    font-size: 3rem;
    opacity: 0.1;
    color: white;
  }

  .countdown-label {
    color: #fef3c7;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0 0 1rem;
  }

  .countdown-timer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .countdown-unit {
    background: rgba(220, 38, 38, 0.2);
    border: 2px solid #dc2626;
    border-radius: 12px;
    padding: 0.75rem 0.5rem;
    min-width: 70px;
    backdrop-filter: blur(10px);
  }

  .countdown-number {
    font-size: 1.75rem;
    font-weight: 800;
    color: #fca5a5;
    line-height: 1;
    margin-bottom: 0.25rem;
    font-variant-numeric: tabular-nums;
    text-shadow: 0 0 10px rgba(252, 165, 165, 0.5);
  }

  .countdown-text {
    font-size: 0.7rem;
    color: #fde68a;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
  }

  .countdown-separator {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fbbf24;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .countdown-deadline {
    color: #fde68a;
    font-size: 0.875rem;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Body */
  .popup-body {
    padding: 2rem;
  }

  /* Offer Highlight */
  .offer-highlight {
    background: linear-gradient(135deg, #dcfce7 0%, #d1fae5 50%, #fef3c7 100%);
    border: 3px solid #dc2626;
    border-radius: 16px;
    padding: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
    position: relative;
    overflow: hidden;
  }

  .offer-highlight::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }

  .christmas-stars {
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .star {
    font-size: 1.5rem;
    animation: sparkle-star 2s ease-in-out infinite;
  }

  .star:nth-child(2) {
    animation-delay: 0.7s;
  }

  .star:nth-child(3) {
    animation-delay: 1.4s;
  }

  @keyframes sparkle-star {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
    50% { transform: scale(1.3) rotate(180deg); opacity: 0.7; }
  }

  .offer-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    animation: rotate-gift 3s ease-in-out infinite;
  }

  @keyframes rotate-gift {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }

  .offer-title {
    font-size: 1.75rem;
    font-weight: 800;
    background: linear-gradient(135deg, #dc2626, #16a34a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 0.25rem;
    position: relative;
  }

  .offer-subtitle {
    font-size: 1rem;
    color: #047857;
    font-weight: 600;
    margin: 0 0 1rem;
    position: relative;
  }

  .offer-value {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    position: relative;
  }

  .value-label {
    font-size: 0.875rem;
    color: #dc2626;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .value-amount {
    font-size: 2.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, #dc2626, #fbbf24);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .ribbon-wrapper {
    margin-top: 1rem;
  }

  .ribbon {
    display: inline-block;
    background: linear-gradient(135deg, #dc2626, #991b1b);
    color: white;
    padding: 0.5rem 1.5rem;
    font-weight: 800;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    position: relative;
    box-shadow: 0 4px 8px rgba(220, 38, 38, 0.3);
  }

  .ribbon::before,
  .ribbon::after {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
  }

  .ribbon::before {
    left: -10px;
    border-width: 17px 10px 17px 0;
    border-color: transparent #dc2626 transparent transparent;
  }

  .ribbon::after {
    right: -10px;
    border-width: 17px 0 17px 10px;
    border-color: transparent transparent transparent #dc2626;
  }

  /* Benefits List */
  .benefits-list {
    background: linear-gradient(135deg, #fef3f3 0%, #ffffff 100%);
    border: 2px dashed #dc2626;
    border-radius: 12px;
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .benefit-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #374151;
    font-size: 0.95rem;
  }

  .benefit-check {
    font-size: 1.25rem;
    flex-shrink: 0;
  }

  /* Urgency Note */
  .urgency-note {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    border: 2px solid #dc2626;
    border-radius: 12px;
    padding: 1rem 1.25rem;
    display: flex;
    gap: 0.875rem;
    margin-bottom: 1.5rem;
    animation: pulse-border 2s infinite;
  }

  @keyframes pulse-border {
    0%, 100% { border-color: #dc2626; }
    50% { border-color: #ef4444; }
  }

  .urgency-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .urgency-note p {
    color: #7f1d1d;
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
  }

  .urgency-note strong {
    color: #991b1b;
    font-weight: 700;
  }

  /* Details */
  .popup-details {
    background: linear-gradient(135deg, #fef3f3 0%, #ffffff 100%);
    border: 2px solid #e5e7eb;
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
    flex-direction: column;
    gap: 0.75rem;
    padding: 0 2rem 2rem;
  }

  .popup-actions .btn {
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
    background: linear-gradient(135deg, #dc2626 0%, #16a34a 100%);
    color: white;
    box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
    position: relative;
    overflow: hidden;
  }

  .pulse-button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: pulse-sweep 2s infinite;
  }
  
  .btn-primary:hover {
    background: linear-gradient(135deg, #b91c1c 0%, #15803d 100%);
    box-shadow: 0 8px 25px rgba(220, 38, 38, 0.5);
    transform: translateY(-2px);
  }

  .btn-arrow {
    font-size: 1.25rem;
    transition: transform 0.2s ease;
  }

  .btn-primary:hover .btn-arrow {
    transform: translateX(4px);
  }
  
  .btn-outline {
    background: white;
    border: 2px solid #d1d5db;
    color: #6b7280;
  }
  
  .btn-outline:hover {
    border-color: #dc2626;
    color: #dc2626;
    background: #fef3f3;
  }

  /* Mobile Responsiveness */
  @media (max-width: 640px) {
    .popup-backdrop {
      padding: 0.5rem;
    }

    .popup-content {
      border-radius: 16px;
    }

    .urgent-banner {
      font-size: 0.75rem;
      padding: 0.625rem;
      border-radius: 16px 16px 0 0;
    }

    .popup-header {
      padding: 1.5rem 1.5rem 1.25rem;
    }

    .popup-header h2 {
      font-size: 1.5rem;
    }
    
    .popup-subtitle {
      font-size: 1rem;
    }

    .countdown-section {
      padding: 1.25rem;
    }

    .countdown-unit {
      min-width: 60px;
      padding: 0.625rem 0.375rem;
    }

    .countdown-number {
      font-size: 1.5rem;
    }

    .countdown-text {
      font-size: 0.65rem;
    }

    .countdown-separator {
      font-size: 1.25rem;
    }

    .popup-body {
      padding: 1.5rem;
    }

    .offer-title {
      font-size: 1.5rem;
    }

    .value-amount {
      font-size: 2rem;
    }

    .popup-actions {
      padding: 0 1.5rem 1.5rem;
    }

    .popup-actions .btn {
      padding: 0.875rem 1.25rem;
      font-size: 0.95rem;
    }

    .snowflake {
      font-size: 1.2rem;
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
    .popup-actions .btn:hover {
      transform: none !important;
    }

    .snowflakes {
      display: none;
    }
  }

  /* Custom scrollbar */
  .popup-content::-webkit-scrollbar {
    width: 8px;
  }
  
  .popup-content::-webkit-scrollbar-track {
    background: #f3f4f6;
  }
  
  .popup-content::-webkit-scrollbar-thumb {
    background: #dc2626;
    border-radius: 4px;
  }
  
  .popup-content::-webkit-scrollbar-thumb:hover {
    background: #991b1b;
  }
</style>