<script>
    import { fade, fly } from 'svelte/transition';
    
    let logo = 'new-logo.jpg'//'/logo.jpg'; // Path to the logo you shared
  </script>
  
  <section class="hero">
    <div class="hero-content">
      <div class="logo-container" in:fade={{ duration: 1000, delay: 300 }}>
        <img src={logo} alt="Bozzles Ark Vets Logo" class="logo">
      </div>
      
      <div class="hero-text" in:fly={{ y: 20, duration: 800, delay: 600 }}>
        <h1>Welcome to Bozzles Ark Vets</h1>
        <p>Compassionate care for all creatures great and small</p>
        
        <div class="hero-buttons">
          <a href=#PreRegistration class="btn btn-primary"> Pre-Register Now</a>
          <a href=#Services class="btn btn-secondary">Our Services</a>
        </div>
      </div>
    </div>
    
    <div class="wave-divider">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
        <path fill="#ffffff" fill-opacity="1" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
      </svg>
    </div>
  </section>
  
  <style>
    .hero {
      position: relative;
      background: linear-gradient(135deg, #a6e3ff 0%, #5FC3BF 100%); /* Soft blue gradient #68c5ff */
      padding: 2rem 1rem 6rem;
      text-align: center;
      overflow: hidden;
    }
    
    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      position: relative;
      z-index: 2;
    }
    
    .logo-container {
      width: 100%;
      max-width: 400px;
      border-radius: 45% 45% 25% 25%;
      
      overflow: hidden;
    }
    
    .logo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    
    }
    
    .hero-text {
      color: #333;
      max-width: 600px;
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: #1a3c6e;
      font-weight: bold;
    }
    
    p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      color: #2c5282;
    }
    
    .hero-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      font-weight: bold;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 1rem;
    }
    
    .btn-primary {
      background-color: #e53e3e;
      color: white;
      box-shadow: 0 4px 6px rgba(229, 62, 62, 0.25);
    }
    
    .btn-primary:hover {
      background-color: #c53030;
      transform: translateY(-2px);
      box-shadow: 0 6px 8px rgba(229, 62, 62, 0.3);
    }
    
    .btn-secondary {
      background-color: white;
      color: #2c5282;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .btn-secondary:hover {
      background-color: #f7fafc;
      transform: translateY(-2px);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }
    
    .wave-divider {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
    }
    
    /* Responsive styles */
    @media (min-width: 768px) {
      .hero {
        padding: 4rem 2rem 8rem;
      }
      
      .hero-content {
        flex-direction: row;
        text-align: left;
        justify-content: space-between;
      }
      
      .hero-text {
        flex: 1;
      }
      
      .hero-buttons {
        justify-content: flex-start;
      }
      
      h1 {
        font-size: 3rem;
      }
    }
  </style>