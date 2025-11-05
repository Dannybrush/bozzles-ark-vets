<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  
  // Optional prop to customize the section ID
  interface Props {
    sectionId?: string;
  }
  
  let { sectionId = 'BookAppointment' }: Props = $props();
</script>

<section id={sectionId} class="appointment-cta">
  <div class="container">
    <div class="cta-content" in:fade={{ duration: 800 }}>
      <div class="cta-header">
        <h2>Ready to Give Your Pet the Best Care?</h2>
        <p>Book an appointment with our expert veterinary team today</p>
      </div>
      
      <div class="cta-cards">
        <div 
          class="cta-card new-patient"
          in:scale={{ delay: 200, duration: 600, easing: quintOut }}
        >
          <div class="card-icon">🐾</div>
          <h3>New Patient</h3>
          <p>Register your pet and book your first visit</p>
          <ul class="benefits-list">
            <li>
              <span class="check-icon">✓</span>
              <span>Complete health assessment</span>
            </li>
            <li>
              <span class="check-icon">✓</span>
              <span>Personalized care plan</span>
            </li>
            <li>
              <span class="check-icon">✓</span>
              <span>Welcome package included</span>
            </li>
          </ul>
          <a href="/appointments#top" class="btn btn-primary">
            Register & Book
          </a>
        </div>
        
        <div 
          class="cta-card existing-patient"
          in:scale={{ delay: 300, duration: 600, easing: quintOut }}
        >
          <div class="card-icon">📅</div>
          <h3>Existing Patient</h3>
          <p>Quick and easy appointment booking</p>
          <ul class="benefits-list">
            <li>
              <span class="check-icon">✓</span>
              <span>Same-day appointments available</span>
            </li>
            <li>
              <span class="check-icon">✓</span>
              <span>Access your pet's records</span>
            </li>
            <li>
              <span class="check-icon">✓</span>
              <span>Flexible scheduling options</span>
            </li>
          </ul>
          <a href="/appointments#header-section" class="btn btn-secondary">
            Book Now
          </a>
        </div>
      </div>
      
      <div class="cta-footer" in:fade={{ delay: 500, duration: 800 }}>
        <div class="emergency-notice">
          <span class="emergency-icon">🚑</span>
          <span class="emergency-text">
            <strong>Emergency?</strong> Call us immediately at 
            <a href="tel:01455710796" class="phone-link">01455 710796</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .appointment-cta {
    padding: 4rem 1rem;
    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
    position: relative;
    overflow: hidden;
  }
  
  .appointment-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a3c6e' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  
  .cta-content {
    text-align: center;
  }
  
  /* Header */
  .cta-header {
    margin-bottom: 3rem;
  }
  
  .cta-header h2 {
    font-size: 2.5rem;
    color: #1a3c6e;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  .cta-header p {
    font-size: 1.25rem;
    color: #4a5568;
    max-width: 600px;
    margin: 0 auto;
  }
  
  /* Cards Container */
  .cta-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .cta-card {
    background: white;
    border-radius: 16px;
    padding: 2.5rem 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 2px solid transparent;
  }
  
  .cta-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
  
  .cta-card.new-patient:hover {
    border-color: #3182ce;
  }
  
  .cta-card.existing-patient:hover {
    border-color: #e53e3e;
  }
  
  .card-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #a6e3ff 0%, #5FC3BF 100%);
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  
  .cta-card h3 {
    font-size: 1.75rem;
    color: #1a3c6e;
    margin-bottom: 0.75rem;
    font-weight: 700;
  }
  
  .cta-card > p {
    font-size: 1rem;
    color: #4a5568;
    margin-bottom: 1.5rem;
  }
  
  /* Benefits List */
  .benefits-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
    text-align: left;
    width: 100%;
  }
  
  .benefits-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    color: #4a5568;
  }
  
  .check-icon {
    color: #4ade80;
    font-weight: bold;
    flex-shrink: 0;
    font-size: 1.1rem;
  }
  
  /* Buttons */
  .btn {
    display: inline-block;
    padding: 0.875rem 2.5rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 1.05rem;
    width: 100%;
    max-width: 250px;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3);
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(49, 130, 206, 0.4);
  }
  
  .btn-secondary {
    background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3);
  }
  
  .btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(229, 62, 62, 0.4);
  }
  
  /* Footer / Emergency Notice */
  .cta-footer {
    margin-top: 2rem;
  }
  
  .emergency-notice {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: white;
    padding: 1.25rem 2rem;
    border-radius: 50px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    border: 2px solid #fbbf24;
  }
  
  .emergency-icon {
    font-size: 1.75rem;
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  
  .emergency-text {
    font-size: 1rem;
    color: #4a5568;
  }
  
  .emergency-text strong {
    color: #1a3c6e;
    font-weight: 700;
  }
  
  .phone-link {
    color: #e53e3e;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }
  
  .phone-link:hover {
    text-decoration: underline;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .appointment-cta {
      padding: 3rem 1rem;
    }
    
    .cta-header h2 {
      font-size: 2rem;
    }
    
    .cta-header p {
      font-size: 1.05rem;
    }
    
    .cta-cards {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .cta-card {
      padding: 2rem 1.5rem;
    }
    
    .card-icon {
      width: 70px;
      height: 70px;
      font-size: 2.5rem;
    }
    
    .cta-card h3 {
      font-size: 1.5rem;
    }
    
    .emergency-notice {
      flex-direction: column;
      gap: 0.75rem;
      text-align: center;
      padding: 1rem 1.5rem;
    }
    
    .emergency-text {
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 480px) {
    .cta-header h2 {
      font-size: 1.75rem;
    }
    
    .cta-header p {
      font-size: 1rem;
    }
    
    .benefits-list li {
      font-size: 0.9rem;
    }
    
    .btn {
      padding: 0.75rem 2rem;
      font-size: 1rem;
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
  
  .btn:focus-visible,
  .phone-link:focus-visible {
    outline: 3px solid #1a3c6e;
    outline-offset: 3px;
  }
</style>