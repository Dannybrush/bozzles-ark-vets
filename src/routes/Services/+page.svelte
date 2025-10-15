<script>
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { getAllServices } from '$lib/data/services';
  
  // Get all services from the data store
  const services = getAllServices().map(service => ({
    title: service.title,
    description: service.shortDescription,
    icon: service.icon,
    link: `services/${service.slug}`
  }));
</script>

<section id="Services" class="services">
  <div class="container">
    <div class="section-header">
      <h2>Our Services</h2>
      <p>Comprehensive veterinary care for all your beloved companions</p>
    </div>
    
    <div class="service-grid">
      {#each services as service, i}
        <div 
          class="service-card" 
          in:scale={{delay: 100 * i, duration: 500, easing: quintOut}}
        >
          <div class="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <a href={service.link} class="service-link">Learn more</a>
        </div>
      {/each}
    </div>
    
    <div class="services-cta">
      <a href="/services" class="btn-services">View All Services</a>
    </div>
  </div>
</section>

<style>
  .services {
    padding: 4rem 1rem;
    background-color: #ffffff;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  h2 {
    font-size: 2.25rem;
    color: #1a3c6e;
    margin-bottom: 0.75rem;
  }
  
  .section-header p {
    font-size: 1.125rem;
    color: #4a5568;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .service-card {
    background-color: #f7fafc;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  .service-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #a6e3ff 0%, #5FC3BF 100%);
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  
  h3 {
    font-size: 1.25rem;
    color: #2c5282;
    margin-bottom: 0.75rem;
  }
  
  .service-card p {
    color: #4a5568;
    margin-bottom: 1.25rem;
    flex-grow: 1;
  }
  
  .service-link {
    color: #3182ce;
    font-weight: 600;
    text-decoration: none;
    position: relative;
    padding-bottom: 2px;
  }
  
  .service-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3182ce;
    transition: width 0.3s ease;
  }
  
  .service-link:hover::after {
    width: 100%;
  }
  
  .services-cta {
    text-align: center;
    margin-top: 1rem;
  }
  
  .btn-services {
    display: inline-block;
    background-color: #3182ce;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 50px;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(49, 130, 206, 0.25);
  }
  
  .btn-services:hover {
    background-color: #2b6cb0;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(49, 130, 206, 0.3);
  }
  
  @media (max-width: 768px) {
    .service-grid {
      grid-template-columns: 1fr;
    }
  }
</style>