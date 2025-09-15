<script>
  import { onMount } from 'svelte';
  
  let mounted = $state(false);
  let pawPrints = $state([]);
  
  onMount(() => {
    mounted = true;
    
    // Generate random paw print positions for floating animation
    pawPrints = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: Math.random() * 80 + 10, // 10-90% from left
      delay: Math.random() * 2, // 0-2s delay
      duration: 3 + Math.random() * 2 // 3-5s duration
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
        <div class="service-text">Premium Veterinary Care</div>
      </div>
      
      <!-- Opening Announcement -->
      <div class="announcement">
        <div class="announcement-badge">
          <div class="countdown-wrapper">
            <span class="sparkle explosive">🎉</span>
            <span class="announcement-text">OPENING OCTOBER 2025</span>
            <span class="sparkle explosive">🎉</span>
          </div>
          <div class="sub-announcement">Get Ready for Something Special!</div>
        </div>
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
    min-height: 200px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
      rgba(102, 126, 234, 0.8),
      rgba(118, 75, 162, 0.8),
      rgba(255, 154, 158, 0.6),
      rgba(250, 208, 196, 0.6)
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
  
  .practice-name {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 900;
    margin: 0 0 1rem 0;
    line-height: 1.1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.02em;
  }
  
  .main-announcement {
    margin-bottom: 1.5rem;
  }
  
  .announcement-line {
    font-size: clamp(2.2rem, 7vw, 4rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  }
  
  .announcement-line.secondary {
    font-size: clamp(1.8rem, 5vw, 3rem);
    margin-bottom: 0.5rem;
  }
  
  .announcement-line.tertiary {
    font-size: clamp(2rem, 6vw, 3.5rem);
    margin-bottom: 1rem;
  }
  
  .exciting-text {
    display: inline-block;
    background: linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gentleBounceIn 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards, textShine 3s ease-in-out infinite 1.5s;
    animation-delay: 0.2s;
    position: relative;
    opacity: 0;
    transform: translateY(30px) scale(0.8);
  }
  
  .exciting-text::after {
    content: '✨';
    position: absolute;
    top: -0.5rem;
    right: -2rem;
    font-size: 2rem;
    animation: sparkleRotate 2s ease-in-out infinite 1.5s;
  }
  
  .amazing-text {
    display: inline-block;
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gentleBounceIn 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards, textPulse 2s ease-in-out infinite 2s;
    animation-delay: 0.5s;
    margin-left: 0.5rem;
    position: relative;
    opacity: 0;
    transform: translateY(30px) scale(0.8);
  }
  
  .amazing-text::before {
    content: '⭐';
    position: absolute;
    top: -0.5rem;
    left: -2rem;
    font-size: 1.5rem;
    animation: bounce 2s ease-in-out infinite 2s;
  }
  
  @keyframes gentleBounceIn {
    0% { 
      opacity: 0;
      transform: translateY(30px) scale(0.8);
    }
    60% {
      opacity: 1;
      transform: translateY(-5px) scale(1.02);
    }
    80% {
      transform: translateY(2px) scale(0.99);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  .coming-text {
    display: inline-block;
    color: rgba(255, 255, 255, 0.95);
    opacity: 0;
    animation: smoothFadeIn 2s ease-out 1s forwards;
  }
  
  .location-highlight {
    display: inline-block;
    background: linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B, #FFD700);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 0;
    position: relative;
    animation: smoothFadeIn 2s ease-out 1.2s forwards, shimmerText 3s ease-in-out infinite 3s, textBounce 4s ease-in-out infinite 4s;
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.5));
  }
  

  
  @keyframes textShine {
    0%, 100% { 
      background: linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B);
      -webkit-background-clip: text;
      background-clip: text;
    }
    50% { 
      background: linear-gradient(45deg, #FFA500, #FF6B6B, #FFD700);
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
  
  @keyframes textPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @keyframes sparkleRotate {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.2); }
    100% { transform: rotate(360deg) scale(1); }
  }
  
  .name-part {
    display: inline-block;
    animation: bounceIn 1s ease-out forwards;
  }
  
  .name-part:nth-child(1) { animation-delay: 0.2s; }
  .name-part:nth-child(2) { animation-delay: 0.4s; }
  .name-part:nth-child(3) { animation-delay: 0.6s; }
  
  .ark {
    color: #FFD700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
  }
  
  .ark::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #FFD700, transparent);
    border-radius: 2px;
    animation: glow 2s ease-in-out infinite alternate;
  }
  
  @keyframes bounceIn {
    0% { 
      opacity: 0;
      transform: scale(0.3) translateY(-30px);
    }
    50% {
      opacity: 1;
      transform: scale(1.05) translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  @keyframes glow {
    0% { opacity: 0.5; transform: translateX(-50%) scaleX(0.8); }
    100% { opacity: 1; transform: translateX(-50%) scaleX(1.2); }
  }
  
  .services-hint {
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: slideInLeft 1s ease-out 0.8s forwards;
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
    color: rgba(255, 255, 255, 0.9);
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
    margin-bottom: 2rem;
    opacity: 0;
    animation: slideInRight 1s ease-out 1s forwards;
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
  
  @keyframes smoothFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes shimmerText {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  
  @keyframes textBounce {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  .announcement-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 215, 0, 0.6);
    border-radius: 50px;
    padding: 1.5rem 2.5rem;
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.2),
      0 0 40px rgba(255, 215, 0, 0.3);
    animation: floating 3s ease-in-out infinite, borderGlow 2s ease-in-out infinite alternate;
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shimmer 3s ease-in-out infinite;
  }
  
  .countdown-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .announcement-text {
    font-size: clamp(1.2rem, 3.5vw, 1.6rem);
    font-weight: 900;
    letter-spacing: 0.1em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .sub-announcement {
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    font-weight: 600;
    opacity: 0.9;
    font-style: italic;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  @keyframes borderGlow {
    0% { 
      border-color: rgba(255, 215, 0, 0.6);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.2),
        0 0 40px rgba(255, 215, 0, 0.3);
    }
    100% { 
      border-color: rgba(255, 215, 0, 1);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.2),
        0 0 60px rgba(255, 215, 0, 0.6);
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
    animation: sparkle 1.5s ease-in-out infinite alternate;
  }
  
  .sparkle.explosive {
    font-size: 1.5em;
    animation: explode 2s ease-in-out infinite;
  }
  
  .sparkle:last-child {
    animation-delay: 0.75s;
  }
  
  @keyframes sparkle {
    0% { transform: scale(1) rotate(0deg); }
    100% { transform: scale(1.2) rotate(180deg); }
  }
  
  @keyframes explode {
    0%, 100% { 
      transform: scale(1) rotate(0deg);
      filter: hue-rotate(0deg);
    }
    25% { 
      transform: scale(1.3) /*rotate(90deg)*/;
      filter: hue-rotate(90deg);
    }
    50% { 
      transform: scale(1.1) /*rotate(180deg)*/;
      filter: hue-rotate(180deg);
    }
    75% { 
      transform: scale(1.4) /*rotate(270deg)*/;
      filter: hue-rotate(270deg);
    }
  }
  
  .animals {
    display: flex;
    justify-content: center;
    gap: 2rem;
    opacity: 0;
    animation: fadeInUp 1s ease-out 1.2s forwards;
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
      min-height: 180px;
      padding: 1.5rem 1rem;
    }
    
    .main-announcement {
      margin-bottom: 1.25rem;
    }
    
    .announcement-line {
      margin-bottom: 0.25rem;
    }
    
    .services-hint {
      margin-bottom: 1.25rem;
    }
    
    .service-icons {
      gap: 0.75rem;
    }
    
    .announcement {
      margin-bottom: 1.5rem;
    }
    
    .announcement-badge {
      padding: 1.25rem 2rem;
      gap: 0.75rem;
    }
    
    .countdown-wrapper {
      flex-direction: column;
      gap: 0.5rem;
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
      min-height: 160px;
      padding: 1rem 0.75rem;
    }
    
    .paw-print {
      font-size: 1.2rem;
    }
    
    .animals {
      gap: 1rem;
    }
  }
</style>