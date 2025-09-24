<script>
  </script>
  
  <section class="hero">
    <div class="hero-content">ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨    ــــــــــﮩ٨ـ
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
      width: 50%;
      margin: auto;
    }
    .hero-content {
      max-width: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      position: relative;
      z-index: 2;
      height: 200px;
      width: 0px;
      
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
    }
  </style>