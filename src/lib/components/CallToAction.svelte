
<script>
    import { fly } from 'svelte/transition';
  </script>
  
  <section class="cta">
    <div class="container">
      <div class="cta-content" in:fly={{ y: 20, duration: 800 }}>
        <h2>New to Bozzles Ark Vets?</h2>
        <p>We'd love to welcome you and your pets to our family. First-time visits include a comprehensive wellness check and personalized care plan.</p>
        
        <div class="cta-features">
          <div class="feature">
            <div class="feature-icon">📝</div>
            <div class="feature-text">
              <h3>Easy Registration</h3>
              <p>Complete your forms online before your visit</p>
            </div>
          </div>
          
          <div class="feature">
            <div class="feature-icon">🔍</div>
            <div class="feature-text">
              <h3>Thorough First Visit</h3>
              <p>Comprehensive exam and health assessment</p>
            </div>
          </div>
          
          <div class="feature">
            <div class="feature-icon">💻</div>
            <div class="feature-text">
              <h3>Digital Records</h3>
              <p>Access your pet's health info anytime with ProVet Cloud</p>
            </div>
          </div>
        </div>
        
        <div class="cta-buttons">
          <a href="/new-clients" class="btn-primary">New Client Guide</a>
          <a href="/appointments" class="btn-secondary">Book First Visit</a>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .cta {
      padding: 5rem 1rem;
      background-color: #ebf8ff;
      position: relative;
      overflow: hidden;
    }
    
    .cta::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      background: linear-gradient(to bottom right, rgba(99, 179, 237, 0.1) 0%, rgba(99, 179, 237, 0.2) 100%);
      clip-path: polygon(0 50%, 100% 0, 100% 100%, 0% 100%);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    
    .cta-content {
      background-color: white;
      border-radius: 16px;
      padding: 3rem 2rem;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
      text-align: center;
    }
    
    h2 {
      font-size: 2.25rem;
      color: #1a3c6e;
      margin-bottom: 1rem;
    }
    
    .cta-content > p {
      font-size: 1.125rem;
      color: #4a5568;
      margin-bottom: 2.5rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .cta-features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2.5rem;
    }
    
    .feature {
      display: flex;
      align-items: flex-start;
      text-align: left;
      gap: 1rem;
    }
    
    .feature-icon {
      font-size: 1.75rem;
      background-color: #ebf8ff;
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .feature-text h3 {
      font-size: 1.125rem;
      color: #2c5282;
      margin: 0 0 0.5rem 0;
    }
    
    .feature-text p {
      color: #4a5568;
      font-size: 0.875rem;
      margin: 0;
    }
    
    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 1rem;
    }
    
    .btn-primary {
      display: inline-block;
      background-color: #e53e3e;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      font-weight: bold;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(229, 62, 62, 0.25);
    }
    
    .btn-primary:hover {
      background-color: #c53030;
      transform: translateY(-2px);
      box-shadow: 0 6px 8px rgba(229, 62, 62, 0.3);
    }
    
    .btn-secondary {
      display: inline-block;
      background-color: transparent;
      border: 2px solid #3182ce;
      color: #3182ce;
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      font-weight: bold;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .btn-secondary:hover {
      background-color: #ebf8ff;
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    
    @media (max-width: 768px) {
      .cta {
        padding: 3rem 1rem;
      }
      
      .cta-content {
        padding: 2rem 1.5rem;
      }
      
      .feature {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  </style>