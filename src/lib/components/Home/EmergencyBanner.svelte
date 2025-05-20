<script>
    import { onMount } from 'svelte';
    
    // Emergency contact info
    const emergencyPhone = "555-PET-911";
    const normalHours = "8am - 6pm Mon-Fri, 9am - 4pm Sat";
    
    // Check if it's currently outside normal hours
    let isAfterHours = false;
    
    onMount(() => {
      // Function to determine if current time is after hours
      function checkAfterHours() {
        const now = new Date();
        const day = now.getDay(); // 0 = Sunday, 6 = Saturday
        const hour = now.getHours();
        
        // After hours if:
        // - Sunday (day 0)
        // - Saturday after 4pm (day 6, hour >= 16)
        // - Weekday before 8am or after 6pm (hour < 8 || hour >= 18)
        
        if (day === 0) {
          isAfterHours = true;
        } else if (day === 6 && (hour < 9 || hour >= 16)) {
          isAfterHours = true;
        } else if (day >= 1 && day <= 5 && (hour < 8 || hour >= 18)) {
          isAfterHours = true;
        } else {
          isAfterHours = false;
        }
      }
      
      // Check initially
      checkAfterHours();
      
      // Set up an interval to check every minute
      const intervalId = setInterval(checkAfterHours, 60000);
      
      // Clean up on component unmount
      return () => {
        clearInterval(intervalId);
      };
    });
  </script>
  
  <div class="emergency-banner" class:after-hours={isAfterHours}>
    <div class="container">
      <div class="banner-content">
        <div class="emergency-icon">⚠️</div>
        <div class="emergency-info">
          <p class="emergency-title">
            {#if isAfterHours}
              After-Hours Emergency Services Available
            {:else}
              Emergency Services Available 24/7
            {/if}
          </p>
          <p class="emergency-contact">Call: <a href="tel:{emergencyPhone}">{emergencyPhone}</a></p>
        </div>
        <div class="hours-info">
          <p>Regular Hours: {normalHours}</p>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    .emergency-banner {
      background-color: #4299e1;
      color: white;
      padding: 0.5rem 1rem;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .emergency-banner.after-hours {
      background-color: #e53e3e;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .banner-content {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .emergency-icon {
      font-size: 1.25rem;
    }
    
    .emergency-info {
      flex: 1;
    }
    
    .emergency-title {
      font-weight: bold;
      margin: 0;
      font-size: 0.875rem;
    }
    
    .emergency-contact {
      margin: 0;
      font-size: 0.875rem;
    }
    
    .emergency-contact a {
      color: white;
      text-decoration: underline;
      font-weight: bold;
    }
    
    .hours-info {
      font-size: 0.75rem;
      opacity: 0.9;
    }
    
    .hours-info p {
      margin: 0;
    }
    
    @media (max-width: 768px) {
      .banner-content {
        flex-direction: column;
        align-items: flex-start;
        padding: 0.5rem 0;
        gap: 0.25rem;
      }
      
      .hours-info {
        width: 100%;
        margin-top: 0.25rem;
      }
    }
  </style>