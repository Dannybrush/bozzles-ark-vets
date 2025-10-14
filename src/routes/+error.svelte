<script lang="ts">
  import { page } from '$app/stores';
  
  let pawPosition = $state({ x: 0, y: 0 });
  let mounted = $state(false);

  $effect(() => {
    mounted = true;
  });

  function handleMouseMove(e: MouseEvent) {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.02;
    const moveY = (clientY - window.innerHeight / 2) * 0.02;
    pawPosition = { x: moveX, y: moveY };
  }
</script>

<svelte:head>
  <title>404 - Page Not Found | Bozzles Ark Vets</title>
  <meta name="description" content="This page doesn't exist yet, but we're here to help! Contact Bozzles Ark Vets for all your pet care needs." />
</svelte:head>

<div 
  class="error-container"
  onmousemove={handleMouseMove}
  role="main"
>
  <!-- Animated background elements -->
  <div class="background-orbs">
    {#each Array(6) as _, i}
      <div
        class="orb orb-{i}"
        style="
          width: {Math.random() * 300 + 100}px;
          height: {Math.random() * 300 + 100}px;
          left: {Math.random() * 100}%;
          top: {Math.random() * 100}%;
          animation-delay: {i * 0.5}s;
          animation-duration: {15 + i * 2}s;
        "
      ></div>
    {/each}
  </div>

  <div class="content">
    <div class="header-section">
      <!-- Animated 404 with paw prints -->
      <div class="error-code-wrapper">
        <h1 
          class="error-code"
          style="transform: translate({mounted ? pawPosition.x : 0}px, {mounted ? pawPosition.y : 0}px)"
        >
          4🐾4
        </h1>
        <div class="paw-print paw-1">🐾</div>
        <div class="paw-print paw-2">🐾</div>
      </div>

      <h2 class="error-title">
        Oops! This Page is Still in the Kennel
      </h2>
      
      <p class="error-description">
        As a brand new veterinary practice, we're still building our digital home. 
        This page will be wagging its tail here very soon!
      </p>
      
      <p class="error-subdescription">
        In the meantime, we're here and ready to help your furry, feathered, or scaly friends.
      </p>
    </div>

    <!-- Contact Cards -->
    <div class="contact-cards">
      <!-- Call Card -->
      <a 
        href="tel:01455710796"
        class="contact-card"
      >
        <div class="contact-icon phone-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <h3 class="contact-title">Call Us</h3>
        <p class="contact-subtitle">Speak to our team now</p>
        <p class="contact-detail phone-detail">01455 710796</p>
      </a>

      <!-- Email Card -->
      <a 
        href="mailto:vets@bozzlesarkvets.co.uk"
        class="contact-card"
      >
        <div class="contact-icon email-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </div>
        <h3 class="contact-title">Email Us</h3>
        <p class="contact-subtitle">Get in touch any time</p>
        <p class="contact-detail email-detail">vets@bozzlesarkvets.co.uk</p>
      </a>

      <!-- Visit Card -->
      <div class="contact-card">
        <div class="contact-icon visit-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <h3 class="contact-title">Visit Us</h3>
        <p class="contact-subtitle">Walk in and meet the team</p>
        <p class="contact-detail visit-detail">39 Jersey Way, Barwell<br />LE9 8HR</p>
      </div>
    </div>

    <!-- Home Button -->
    <div class="home-button-wrapper">
      <a href="/" class="home-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        Return to Home
      </a>
    </div>

    <!-- Cute animal illustration at bottom -->
    <div class="footer-animals">
      <div class="animal-icons">
        🐕🐈🐦🐇
      </div>
      <p class="tagline">
        Compassionate care for all creatures great and small
      </p>
    </div>
  </div>
</div>

<style>
  .error-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #ebf8ff 0%, #ffffff 50%, #e0f7fa 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    overflow: hidden;
    position: relative;
  }

  /* Animated background elements */
  .background-orbs {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    mix-blend-mode: multiply;
    filter: blur(40px);
    opacity: 0.2;
    animation: float 20s ease-in-out infinite;
  }

  .orb-0, .orb-3 { background: #1a3c6e; }
  .orb-1, .orb-4 { background: #5FC3BF; }
  .orb-2, .orb-5 { background: #a6e3ff; }

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(30px, -30px) rotate(120deg);
    }
    66% {
      transform: translate(-20px, 20px) rotate(240deg);
    }
  }

  .content {
    max-width: 1000px;
    width: 100%;
    position: relative;
    z-index: 10;
  }

  .header-section {
    text-align: center;
    margin-bottom: 3rem;
  }

  .error-code-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
  }

  .error-code {
    font-size: 140px;
    font-weight: bold;
    background: linear-gradient(135deg, #1a3c6e 0%, #2c5490 50%, #5FC3BF 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    line-height: 1;
    transition: transform 0.3s ease-out;
    margin: 0;
  }

  @media (min-width: 768px) {
    .error-code {
      font-size: 200px;
    }
  }

  .paw-print {
    position: absolute;
    font-size: 3rem;
    animation: bounce 2s ease-in-out infinite;
  }

  .paw-1 {
    top: -2rem;
    right: -2rem;
    animation-delay: 0.2s;
  }

  .paw-2 {
    bottom: -1rem;
    left: -1.5rem;
    font-size: 2.5rem;
    animation-delay: 0.5s;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .error-title {
    font-size: 1.875rem;
    font-weight: bold;
    color: #1a3c6e;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .error-title {
      font-size: 2.25rem;
    }
  }

  .error-description {
    font-size: 1.125rem;
    color: #2d3748;
    margin-bottom: 0.75rem;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    .error-description {
      font-size: 1.25rem;
    }
  }

  .error-subdescription {
    font-size: 1rem;
    color: #4a5568;
    margin-bottom: 2rem;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    .error-subdescription {
      font-size: 1.125rem;
    }
  }

  /* Contact Cards */
  .contact-cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .contact-cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .contact-card {
    background-color: white;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 2px solid transparent;
    text-decoration: none;
    display: block;
  }

  .contact-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
  }

  a.contact-card:nth-child(1):hover {
    border-color: #3182ce;
  }

  a.contact-card:nth-child(2):hover {
    border-color: #5FC3BF;
  }

  .contact-card:nth-child(3):hover {
    border-color: #1a3c6e;
  }

  .contact-icon {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
    color: white;
  }

  .contact-card:hover .contact-icon {
    transform: scale(1.1);
  }

  .phone-icon {
    background: linear-gradient(135deg, #3182ce 0%, #5FC3BF 100%);
  }

  .email-icon {
    background: linear-gradient(135deg, #5FC3BF 0%, #63b3ed 100%);
  }

  .visit-icon {
    background: linear-gradient(135deg, #2c5282 0%, #1a3c6e 100%);
  }

  .contact-title {
    font-size: 1.125rem;
    font-weight: bold;
    color: #1a3c6e;
    margin-bottom: 0.5rem;
  }

  .contact-subtitle {
    font-size: 0.875rem;
    color: #4a5568;
    margin-bottom: 0.5rem;
  }

  .contact-detail {
    font-weight: 600;
    font-size: 1.125rem;
  }

  .phone-detail {
    color: #2b6cb0;
  }

  .email-detail {
    color: #0694a2;
    font-size: 0.875rem;
    word-break: break-all;
  }

  .visit-detail {
    color: #1a3c6e;
    font-size: 0.875rem;
  }

  /* Home Button */
  .home-button-wrapper {
    text-align: center;
    margin-bottom: 3rem;
  }

  .home-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(90deg, #2c5282 0%, #0694a2 100%);
    color: white;
    padding: 1rem 2rem;
    border-radius: 9999px;
    font-weight: bold;
    font-size: 1.125rem;
    box-shadow: 0 10px 15px -3px rgba(44, 82, 130, 0.3);
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .home-button:hover {
    box-shadow: 0 20px 25px -5px rgba(44, 82, 130, 0.4);
    transform: scale(1.05);
  }

  /* Footer Animals */
  .footer-animals {
    text-align: center;
    opacity: 0.6;
    margin-top: 3rem;
  }

  .animal-icons {
    font-size: 3.75rem;
    animation: wiggle 2s ease-in-out infinite;
    display: inline-block;
  }

  @keyframes wiggle {
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(5deg);
    }
  }

  .tagline {
    font-size: 0.875rem;
    color: #718096;
    margin-top: 0.5rem;
    font-style: italic;
  }
</style>