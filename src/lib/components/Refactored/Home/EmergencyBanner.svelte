<script lang="ts">
  /**
   * Emergency Banner Component
   * Displays emergency contact info and changes appearance after hours
   * Refactored for Svelte 5 with TypeScript and enhanced accessibility
   */
  
  import { AlertTriangle, Clock } from 'lucide-svelte';
  
  // Props interface
  interface Props {
    sticky?: boolean;
    dismissible?: boolean;
  }
  
  let { sticky = false, dismissible = false }: Props = $props();
  
  // State
  let isAfterHours = $state<boolean>(false);
  let isDismissed = $state<boolean>(false);
  
  // Configuration
  interface OpeningHours {
    open: number;  // minutes from midnight
    close: number; // minutes from midnight
  }
  
  interface Schedule {
    sunday: OpeningHours;
    saturday: OpeningHours;
    weekday: OpeningHours;
  }
  
  const schedule: Schedule = {
    sunday: { open: 10 * 60, close: 14 * 60 },      // 10am - 2pm
    saturday: { open: 10 * 60, close: 17 * 60 },    // 10am - 5pm
    weekday: { open: 9 * 60, close: 19 * 60 }       // 9am - 7pm
  };
  
  const emergencyPhone = {
    display: '01455 710 796',
    href: '+441455710796'
  };
  
  const normalHours = 'Mon-Fri 9am-7pm, Sat 10am-5pm, Sun 10am-2pm';
  
  /**
   * Check if current time is outside opening hours
   * Uses UK timezone to ensure accuracy regardless of user location
   */
  function checkAfterHours(): boolean {
    try {
      const now = new Date();
      
      // Get UK time (handles BST/GMT automatically)
      const ukTimeString = now.toLocaleString('en-GB', { 
        timeZone: 'Europe/London',
        hour12: false
      });
      
      // Parse the UK time string
      const ukTime = new Date(ukTimeString);
      const day = ukTime.getDay(); // 0 = Sunday, 6 = Saturday
      const hours = ukTime.getHours();
      const minutes = ukTime.getMinutes();
      const timeInMinutes = hours * 60 + minutes;
      
      // Get the appropriate schedule for the day
      let currentSchedule: OpeningHours;
      if (day === 0) {
        currentSchedule = schedule.sunday;
      } else if (day === 6) {
        currentSchedule = schedule.saturday;
      } else {
        currentSchedule = schedule.weekday;
      }
      
      // Check if current time is outside opening hours
      return timeInMinutes < currentSchedule.open || timeInMinutes >= currentSchedule.close;
    } catch (error) {
      console.error('Error checking after hours status:', error);
      // Default to showing as after hours if error
      return true;
    }
  }
  
  /**
   * Dismiss the banner (if dismissible)
   */
  function dismissBanner(): void {
    isDismissed = true;
    // Store dismissal in sessionStorage
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('emergencyBannerDismissed', 'true');
    }
  }
  
  /**
   * Effect to check after-hours status and update periodically
   */
  $effect(() => {
    // Check if banner was previously dismissed this session
    if (typeof window !== 'undefined' && dismissible) {
      const wasDismissed = sessionStorage.getItem('emergencyBannerDismissed');
      if (wasDismissed === 'true') {
        isDismissed = true;
      }
    }
    
    // Check initially
    isAfterHours = checkAfterHours();
    
    // Set up an interval to check every minute
    const intervalId = setInterval(() => {
      isAfterHours = checkAfterHours();
    }, 60000);
    
    // Clean up on component unmount
    return () => {
      clearInterval(intervalId);
    };
  });
</script>

{#if !isDismissed}
  <div 
    class="emergency-banner" 
    class:after-hours={isAfterHours}
    class:sticky={sticky}
    role="alert"
    aria-live="polite"
    aria-atomic="true"
    aria-label="Emergency contact information"
  >
    <div class="container">
      <div class="banner-content">
        <!-- Emergency Icon -->
        <div class="emergency-icon" aria-hidden="true">
          <AlertTriangle size={24} strokeWidth={2.5} />
        </div>
        
        <!-- Emergency Info -->
        <div class="emergency-info">
          <p class="emergency-title">
            {#if isAfterHours}
              After-Hours Emergency Services Available
            {:else}
              Emergency Services Available 24/7
            {/if}
          </p>
          <p class="emergency-contact">
            Call: 
            <a 
              href="tel:{emergencyPhone.href}"
              aria-label="Call emergency line: {emergencyPhone.display}"
              data-analytics="emergency-phone-click"
            >
              {emergencyPhone.display}
            </a>
          </p>
        </div>
        
        <!-- Hours Info -->
        <div class="hours-info">
          <Clock size={16} strokeWidth={2} aria-hidden="true" />
          <p>Regular Hours: {normalHours}</p>
        </div>
        
        <!-- Dismiss Button (if dismissible) -->
        {#if dismissible}
          <button 
            class="dismiss-button"
            onclick={dismissBanner}
            aria-label="Dismiss emergency banner"
            type="button"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round"
              aria-hidden="true"
            >
              <path d="M5 5l10 10M15 5l-10 10" />
            </svg>
          </button>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  /* ===== BASE STYLES ===== */
  .emergency-banner {
    background-color: #4299e1;
    color: white;
    padding: 0.75rem 1rem;
    position: relative;
    z-index: 1001;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.5s ease;
  }
  
  .emergency-banner.sticky {
    position: sticky;
    top: 0;
  }
  
  .emergency-banner.after-hours {
    background-color: #e53e3e;
    animation: pulse-bg 2s ease-in-out infinite;
  }
  
  @keyframes pulse-bg {
    0%, 100% {
      background-color: #e53e3e;
    }
    50% {
      background-color: #dc2626;
    }
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* ===== BANNER CONTENT ===== */
  .banner-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .emergency-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: white;
  }
  
  /* ===== EMERGENCY INFO ===== */
  .emergency-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .emergency-title {
    font-weight: 700;
    margin: 0;
    font-size: 1rem;
    line-height: 1.3;
  }
  
  .emergency-contact {
    margin: 0;
    font-size: 1rem;
    line-height: 1.3;
  }
  
  .emergency-contact a {
    color: white;
    text-decoration: underline;
    font-weight: 700;
    transition: opacity 0.2s ease;
  }
  
  .emergency-contact a:hover {
    opacity: 0.9;
    text-decoration-thickness: 2px;
  }
  
  /* ===== HOURS INFO ===== */
  .hours-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    white-space: nowrap;
  }
  
  .hours-info p {
    margin: 0;
  }
  
  /* ===== DISMISS BUTTON ===== */
  .dismiss-button {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: background-color 0.2s ease;
    flex-shrink: 0;
  }
  
  .dismiss-button:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .dismiss-button:active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  /* ===== FOCUS STYLES (WCAG 2.2 AA) ===== */
  .emergency-contact a:focus-visible,
  .dismiss-button:focus-visible {
    outline: 3px solid rgba(255, 255, 255, 0.8);
    outline-offset: 2px;
    border-radius: 2px;
  }
  
  /* Remove default focus for mouse users */
  .emergency-contact a:focus:not(:focus-visible),
  .dismiss-button:focus:not(:focus-visible) {
    outline: none;
  }
  
  /* ===== RESPONSIVE DESIGN ===== */
  @media (max-width: 1024px) {
    .hours-info {
      font-size: 0.8125rem;
    }
  }
  
  @media (max-width: 768px) {
    .emergency-banner {
      padding: 1rem;
    }
    
    .banner-content {
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    
    .emergency-info {
      flex: 1 1 100%;
      order: 2;
    }
    
    .hours-info {
      flex: 1 1 auto;
      order: 3;
      font-size: 0.75rem;
    }
    
    .dismiss-button {
      order: 4;
    }
  }
  
  @media (max-width: 480px) {
    .emergency-banner {
      padding: 0.875rem 1rem;
    }
    
    .banner-content {
      gap: 0.5rem;
    }
    
    .emergency-icon {
      align-self: flex-start;
      margin-top: 0.125rem;
    }
    
    .emergency-title {
      font-size: 0.9375rem;
    }
    
    .emergency-contact {
      font-size: 0.9375rem;
    }
    
    .emergency-contact a {
      font-size: 1.0625rem;
    }
    
    .hours-info {
      flex: 1 1 100%;
      gap: 0.375rem;
    }
    
    .hours-info p {
      font-size: 0.6875rem;
    }
  }
  
  /* ===== ACCESSIBILITY ===== */
  @media (prefers-reduced-motion: reduce) {
    .emergency-banner,
    .emergency-banner.after-hours {
      animation: none;
      transition: none;
    }
  }
  
  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .emergency-banner {
      border-bottom: 2px solid white;
    }
    
    .emergency-contact a {
      text-decoration-thickness: 2px;
    }
  }
  
  /* Touch-friendly sizing */
  @media (hover: none) and (pointer: coarse) {
    .emergency-contact a,
    .dismiss-button {
      min-height: 44px;
      min-width: 44px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
    }
  }
  
  /* Print styles */
  @media print {
    .emergency-banner {
      background-color: transparent !important;
      color: black !important;
      border: 2px solid black;
      animation: none;
    }
    
    .emergency-contact a {
      color: black !important;
    }
    
    .dismiss-button {
      display: none;
    }
  }
</style>