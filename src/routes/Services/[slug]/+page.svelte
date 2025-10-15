<script>
  import { fade, fly, slide, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  
  let { data } = $props();
  let { service, relatedServices } = data;
  
  let expandedFaq = $state(null);
  
  function toggleFaq(index) {
    expandedFaq = expandedFaq === index ? null : index;
  }
</script>

<svelte:head>
  <title>{service.title} | Bozzles Ark Vets</title>
  <meta name="description" content={service.shortDescription} />
</svelte:head>

<div class="service-detail-page">
  <!-- Hero Section -->
  <section class="service-hero">
    <div class="container">
      <div class="breadcrumb" in:fade={{ duration: 400 }}>
        <a href="/">Home</a>
        <span>/</span>
        <a href="/services">Services</a>
        <span>/</span>
        <span>{service.title}</span>
      </div>
      
      <div class="hero-content">
        <div class="hero-icon" in:scale={{ duration: 600, easing: quintOut }}>
          {service.icon}
        </div>
        <h1 in:fade={{ duration: 600, delay: 200 }}>{service.title}</h1>
        <p in:fade={{ duration: 600, delay: 300 }}>{service.shortDescription}</p>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section class="service-content">
    <div class="container">
      <div class="content-grid">
        <!-- Main Description -->
        <div class="main-content">
          <div class="content-section" in:fly={{ y: 20, duration: 600, delay: 100 }}>
            <h2>About This Service</h2>
            <p class="description">{service.fullDescription}</p>
          </div>

          <!-- Features -->
          {#if service.features && service.features.length > 0}
            <div class="content-section" in:fly={{ y: 20, duration: 600, delay: 200 }}>
              <h2>What's Included</h2>
              <ul class="features-list">
                {#each service.features as feature}
                  <li>{feature}</li>
                {/each}
              </ul>
            </div>
          {/if}

          <!-- FAQs -->
          {#if service.faqs && service.faqs.length > 0}
            <div class="content-section" in:fly={{ y: 20, duration: 600, delay: 300 }}>
              <h2>Frequently Asked Questions</h2>
              <div class="faq-list">
                {#each service.faqs as faq, index}
                  <div class="faq-item">
                    <button 
                      class="faq-question"
                      class:expanded={expandedFaq === index}
                      onclick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      <span class="faq-icon">{expandedFaq === index ? '−' : '+'}</span>
                    </button>
                    {#if expandedFaq === index}
                      <div class="faq-answer" transition:slide={{ duration: 300 }}>
                        {faq.answer}
                      </div>
                    {/if}
                  </div>
                {/each}
              </div>
            </div>
          {/if}
        </div>

        <!-- Sidebar -->
        <aside class="sidebar">
          <!-- Pricing Card -->
          <div class="info-card" in:fly={{ x: 20, duration: 600, delay: 100 }}>
            <h3>Pricing</h3>
            <p class="price">{service.pricing}</p>
            {#if service.emergencyNumber}
              <div class="emergency-info">
                <strong>Emergency Hotline</strong>
                <a href="tel:{service.emergencyNumber}" class="emergency-number">
                  {service.emergencyNumber}
                </a>
              </div>
            {/if}
          </div>

          <!-- Contact Card -->
          <div class="info-card" in:fly={{ x: 20, duration: 600, delay: 200 }}>
            <h3>Book This Service</h3>
            <p>Ready to schedule an appointment?</p>
            <a href="/appointments" class="btn btn-primary">Book Now</a>
            <a href="/contact" class="btn btn-outline">Contact Us</a>
          </div>

          <!-- Business Hours -->
          <div class="info-card" in:fly={{ x: 20, duration: 600, delay: 300 }}>
            <h3>Practice Hours</h3>
            <div class="hours">
              <div class="hour-row">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 7:00 PM</span>
              </div>
              <div class="hour-row">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div class="hour-row">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
              <p class="emergency-note">24/7 Emergency Care Available</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <!-- Related Services -->
  {#if relatedServices && relatedServices.length > 0}
    <section class="related-services">
      <div class="container">
        <h2>Related Services</h2>
        <div class="related-grid">
          {#each relatedServices as related}
            <a href="/services/{related.slug}" class="related-card">
              <div class="related-icon">{related.icon}</div>
              <h3>{related.title}</h3>
              <p>{related.shortDescription}</p>
            </a>
          {/each}
        </div>
      </div>
    </section>
  {/if}
</div>

<style>
  .service-detail-page {
    min-height: 100vh;
  }

  .service-hero {
    background: linear-gradient(135deg, #1a3c6e 0%, #2c5490 100%);
    color: white;
    padding: 2rem 1rem 4rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .breadcrumb {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 0.875rem;
    opacity: 0.9;
  }

  .breadcrumb a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s ease;
  }

  .breadcrumb a:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  .hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .hero-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    background: rgba(255, 255, 255, 0.15);
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
    backdrop-filter: blur(10px);
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .hero-content > p {
    font-size: 1.25rem;
    opacity: 0.95;
    line-height: 1.6;
  }

  .service-content {
    padding: 4rem 1rem;
    background-color: #ffffff;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 350px;
    gap: 3rem;
    align-items: start;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .content-section h2 {
    font-size: 1.875rem;
    color: #1a3c6e;
    margin-bottom: 1.5rem;
  }

  .description {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #4a5568;
  }

  .features-list {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1rem;
  }

  .features-list li {
    padding: 1rem 1.5rem;
    background-color: #f7fafc;
    border-radius: 8px;
    border-left: 4px solid #3182ce;
    font-size: 1rem;
    color: #2d3748;
    transition: all 0.3s ease;
  }

  .features-list li:hover {
    background-color: #edf2f7;
    transform: translateX(5px);
  }

  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .faq-item {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
  }

  .faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
    background-color: #f7fafc;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    color: #2c5282;
    text-align: left;
    transition: background-color 0.3s ease;
  }

  .faq-question:hover {
    background-color: #edf2f7;
  }

  .faq-question.expanded {
    background-color: #3182ce;
    color: white;
  }

  .faq-icon {
    font-size: 1.5rem;
    font-weight: 300;
    transition: transform 0.3s ease;
  }

  .faq-question.expanded .faq-icon {
    transform: rotate(180deg);
  }

  .faq-answer {
    padding: 1.5rem;
    background-color: white;
    color: #4a5568;
    line-height: 1.7;
    border-top: 1px solid #e2e8f0;
  }

  .sidebar {
    position: sticky;
    top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .info-card {
    background-color: #f7fafc;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .info-card h3 {
    font-size: 1.25rem;
    color: #1a3c6e;
    margin-bottom: 1rem;
  }

  .info-card p {
    color: #4a5568;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2c5282;
    margin-bottom: 1rem !important;
  }

  .emergency-info {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 2px solid #e2e8f0;
  }

  .emergency-info strong {
    display: block;
    color: #2c5282;
    margin-bottom: 0.5rem;
  }

  .emergency-number {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: #e53e3e;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .emergency-number:hover {
    color: #c53030;
  }

  .btn {
    display: block;
    width: 100%;
    padding: 0.875rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
    margin-bottom: 0.75rem;
  }

  .btn-primary {
    background-color: #3182ce;
    color: white;
    border: 2px solid #3182ce;
  }

  .btn-primary:hover {
    background-color: #2c5282;
    border-color: #2c5282;
    transform: translateY(-2px);
  }

  .btn-outline {
    background-color: transparent;
    color: #3182ce;
    border: 2px solid #3182ce;
  }

  .btn-outline:hover {
    background-color: #3182ce;
    color: white;
  }

  .hours {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .hour-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e2e8f0;
    font-size: 0.9rem;
  }

  .hour-row:last-of-type {
    border-bottom: none;
  }

  .hour-row span:first-child {
    color: #4a5568;
    font-weight: 600;
  }

  .hour-row span:last-child {
    color: #2d3748;
  }

  .emergency-note {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 2px solid #e2e8f0;
    color: #e53e3e;
    font-weight: 600;
    font-size: 0.9rem;
    text-align: center;
  }

  .related-services {
    padding: 4rem 1rem;
    background: linear-gradient(135deg, #f7fafc 0%, #e6f2ff 100%);
  }

  .related-services h2 {
    text-align: center;
    font-size: 2.25rem;
    color: #1a3c6e;
    margin-bottom: 3rem;
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .related-card {
    background-color: white;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .related-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    border-color: #3182ce;
  }

  .related-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #a6e3ff 0%, #5FC3BF 100%);
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto 1rem;
  }

  .related-card h3 {
    font-size: 1.25rem;
    color: #2c5282;
    margin-bottom: 0.75rem;
  }

  .related-card p {
    color: #4a5568;
    line-height: 1.6;
  }

  @media (max-width: 968px) {
    .content-grid {
      grid-template-columns: 1fr;
    }

    .sidebar {
      position: static;
    }

    h1 {
      font-size: 2rem;
    }

    .hero-icon {
      width: 100px;
      height: 100px;
      font-size: 3rem;
    }

    .related-grid {
      grid-template-columns: 1fr;
    }
  }
</style>