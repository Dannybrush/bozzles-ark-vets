<script lang="ts">
  import { onMount } from 'svelte';
  
  let mounted = $state(false);
  let pawPrints = $state<Array<{id: number, left: number, delay: number, duration: number}>>([]);
  
  onMount(() => {
    mounted = true;
    
    // Generate random paw print positions for floating animation
    pawPrints = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: Math.random() * 80 + 10,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2
    }));
  });
</script>

<div class="banner-container">
  <!-- Animated Background Gradient -->
  <div class="gradient-bg"></div>
  
  <!-- Floating Paw Prints -->
  {#each pawPrints as paw}
    <div 
      class="paw-print" 
      style="left: {paw.left}%; animation-delay: {paw.delay}s; animation-duration: {paw.duration}s;"
    >
      🐾
    </div>
  {/each}
  
  <!-- Main Content -->
  <div class="content-wrapper">
    <div class="main-content" class:animate={mounted}>      
      <!-- Veterinary Services Hint -->
      <div class="services-hint">
        <div class="service-icons">
          <span class="service-icon">🏥</span>
          <span class="service-icon">💉</span>
          <span class="service-icon">🩺</span>
          <span class="service-icon">❤️</span>
        </div>
        <div class="service-text">Compassionate Care for All Creatures</div>
      </div>
      
      <!-- NOW OPEN Announcement -->
      <div class="announcement">
        <div class="announcement-badge">
          <div class="now-open-wrapper">
            <span class="sparkle explosive">✨</span>
            <span class="announcement-text">NOW OPEN</span>
            <span class="sparkle explosive">✨</span>
          </div>
          <div class="sub-announcement">Welcoming New Patients Today</div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="cta-section">
        <a href="/appointments" class="cta-button secondary">
          <span class="cta-icon">📅</span>
          Book Your Appointment
        </a>
        <a href="/contact" class="cta-button primary">
          <span class="cta-icon">📞</span>
          Call Us Now
        </a>
      </div>
      
      <!-- Decorative Animals -->
      <div class="animals">
        <span class="animal dog">🐕</span>
        <span class="animal cat">🐱</span>
        <span class="animal bird">🐦</span>
      </div>
    </div>
  </div>
</div>

<style>
  .banner-container {
    position: relative;
    min-height: 220px;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
  }
  
  .gradient-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(16, 185, 129, 0.9),
      rgba(5, 150, 105, 0.9),
      rgba(52, 211, 153, 0.7),
      rgba(110, 231, 183, 0.6)
    );
    background-size: 400% 400%;
    animation: gradientShift 8s ease infinite;
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .paw-print {
    position: absolute;
    font-size: 1.5rem;
    opacity: 0.3;
    animation: float 4s ease-in-out infinite;
    pointer-events: none;
  }
  
  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg);
      opacity: 0.3;
    }
    50% { 
      transform: translateY(-20px) rotate(5deg);
      opacity: 0.6;
    }
  }
  
  .content-wrapper {
    position: relative;
    z-index: 10;
    max-width: 1200px;
    width: 100%;
  }
  
  .main-content {
    text-align: center;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s ease-out;
  }
  
  .main-content.animate {
    opacity: 1;
    transform: translateY(0);
  }
  
  .services-hint {
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: slideInLeft 1s ease-out 0.3s forwards;
  }
  
  .service-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .service-icon {
    font-size: 1.8rem;
    animation: bounce 2s ease-in-out infinite;
    transition: transform 0.3s ease;
  }
  
  .service-icon:nth-child(1) { animation-delay: 0s; }
  .service-icon:nth-child(2) { animation-delay: 0.2s; }
  .service-icon:nth-child(3) { animation-delay: 0.4s; }
  .service-icon:nth-child(4) { animation-delay: 0.6s; }
  
  .service-icon:hover {
    transform: scale(1.3);
  }
  
  .service-text {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 600;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .announcement {
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: slideInRight 1s ease-out 0.5s forwards;
  }
  
  @keyframes slideInRight {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .announcement-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 3px solid rgba(255, 215, 0, 0.8);
    border-radius: 50px;
    padding: 1.25rem 2.5rem;
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.2),
      0 0 50px rgba(255, 215, 0, 0.4);
    animation: floating 3s ease-in-out infinite, borderPulse 2s ease-in-out infinite;
    position: relative;
    overflow: hidden;
  }
  
  .announcement-badge::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s ease-in-out infinite;
  }
  
  .now-open-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .announcement-text {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 900;
    letter-spacing: 0.15em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    background: linear-gradient(45deg, #ffffff, #FFD700, #ffffff);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: textShine 3s ease-in-out infinite;
  }
  
  @keyframes textShine {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  .sub-announcement {
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    font-weight: 600;
    opacity: 0.95;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  @keyframes borderPulse {
    0%, 100% { 
      border-color: rgba(255, 215, 0, 0.8);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.2),
        0 0 50px rgba(255, 215, 0, 0.4);
    }
    50% { 
      border-color: rgba(255, 215, 0, 1);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.2),
        0 0 70px rgba(255, 215, 0, 0.6);
    }
  }
  
  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  
  @keyframes floating {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  
  .sparkle {
    animation: sparkleRotate 1.5s ease-in-out infinite;
  }
  
  .sparkle.explosive {
    font-size: 1.5em;
    animation: sparkleRotate 2s ease-in-out infinite, scalePulse 2s ease-in-out infinite;
  }
  
  .sparkle:last-child {
    animation-delay: 1s;
  }
  
  @keyframes sparkleRotate {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
  }
  
  @keyframes scalePulse {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(180deg); }
  }
  
  /* Call to Action Section */
  .cta-section {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeInUp 1s ease-out 0.8s forwards;
    flex-wrap: wrap;
  }
  
  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.75rem;
    border-radius: 50px;
    font-weight: 700;
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
  
  .cta-button.primary {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
  
  .cta-button.primary:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
  }
  
  .cta-button.secondary {
    background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
    color: #059669;
    border: 2px solid rgba(5, 150, 105, 0.3);
  }
  
  .cta-button.secondary:hover {
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(5, 150, 105, 0.3);
  }
  
  .cta-icon {
    font-size: 1.2em;
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animals {
    display: flex;
    justify-content: center;
    gap: 2rem;
    opacity: 0;
    animation: fadeInUp 1s ease-out 1s forwards;
  }
  
  .animal {
    font-size: 2rem;
    animation: bounce 2s ease-in-out infinite;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .animal:hover {
    transform: scale(1.2);
  }
  
  .animal:nth-child(1) { animation-delay: 0s; }
  .animal:nth-child(2) { animation-delay: 0.3s; }
  .animal:nth-child(3) { animation-delay: 0.6s; }
  
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
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .banner-container {
      min-height: 200px;
      padding: 1.5rem 1rem;
    }
    
    .services-hint {
      margin-bottom: 1.25rem;
    }
    
    .service-icons {
      gap: 0.75rem;
    }
    
    .announcement {
      margin-bottom: 1.25rem;
    }
    
    .announcement-badge {
      padding: 1rem 2rem;
    }
    
    .now-open-wrapper {
      gap: 0.75rem;
    }
    
    .cta-section {
      gap: 0.75rem;
      margin-bottom: 1.25rem;
    }
    
    .cta-button {
      padding: 0.65rem 1.5rem;
    }
    
    .animals {
      gap: 1.5rem;
    }
    
    .animal {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .banner-container {
      min-height: 180px;
      padding: 1rem 0.75rem;
    }
    
    .paw-print {
      font-size: 1.2rem;
    }
    
    .cta-section {
      flex-direction: column;
      align-items: stretch;
    }
    
    .cta-button {
      justify-content: center;
    }
    
    .animals {
      gap: 1rem;
    }
  }
  
  /* Reduced motion accessibility */
  @media (prefers-reduced-motion: reduce) {
    .gradient-bg,
    .paw-print,
    .service-icon,
    .announcement-badge,
    .sparkle,
    .animal,
    .main-content,
    .services-hint,
    .announcement,
    .cta-section,
    .animals {
      animation: none !important;
    }
    
    .main-content.animate {
      opacity: 1;
      transform: none;
    }
    
    .cta-button:hover {
      transform: none;
    }
  }
</style>