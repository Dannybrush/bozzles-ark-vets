<!-- src/routes/contact/+page.svelte -->
<script>
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    
    // State for the contact form
    let name = $state('');
    let email = $state('');
    let phone = $state('');
    let subject = $state('');
    let message = $state('');
    let formSubmitted = $state(false);
    let formError = $state(false);
    
    // Opening hours data
    const openingHours = [
      { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
      { day: 'Sunday', hours: 'Closed (Emergency Services Only)' }
    ];
    
    // Form submission handler
    function handleSubmit() {
      // In a real app, you would send the form data to a server
      // This is just a mockup for demonstration
      if (name && email && message) {
        formSubmitted = true;
        formError = false;
        
        // Reset form after submission
        name = '';
        email = '';
        phone = '';
        subject = '';
        message = '';
      } else {
        formError = true;
      }
    }
    
    // For Google Maps integration
    let mapElement;
    
    onMount(() => {
      // In a real implementation, you would load the Google Maps API
      // and initialize the map here
      // This is a placeholder for demonstration purposes
    });
  </script>
  
  <svelte:head>
    <title>Contact Us | Bozzles Ark Vets</title>
    <meta name="description" content="Contact Bozzles Ark Vets for appointments, emergencies, or general inquiries. We're here to help with all your pet care needs." />
  </svelte:head>
  
  <section class="hero contact-hero">
    <div class="container">
      <div class="hero-content" in:fade={{ duration: 800 }}>
        <h1>Contact Us</h1>
        <p>We're here for you and your pets. Reach out to us with any questions.</p>
      </div>
    </div>
    
    <div class="wave-divider">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
        <path fill="#ffffff" fill-opacity="1" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
      </svg>
    </div>
  </section>
  
  <section class="contact-section section">
    <div class="container">
      <div class="contact-grid">
        <!-- Contact Information -->
        <div class="contact-info" in:fly={{ y: 20, duration: 800, delay: 300 }}>
          <div class="info-card">
            <h2>Get In Touch</h2>
            
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div class="info-content">
                <h3>Our Address</h3>
                <p>39 Jersey Way<br>Barwell, LE9 8HR</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div class="info-content">
                <h3>Phone Numbers</h3>
                <p>General: <a href="tel:01455850231">01455 850 231</a></p>
                <p class="emergency">Emergency: <a href="tel:01455850999">01455 850 999</a></p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="info-content">
                <h3>Email</h3>
                <p><a href="mailto:info@bozzlesarkvets.co.uk">info@bozzlesarkvets.co.uk</a></p>
              </div>
            </div>
          </div>
          
          <!-- Opening Hours -->
          <div class="hours-card" in:fly={{ y: 20, duration: 800, delay: 400 }}>
            <h2>Opening Hours</h2>
            <div class="hours-list">
              {#each openingHours as { day, hours }}
                <div class="hours-item">
                  <span class="day">{day}</span>
                  <span class="hours">{hours}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="contact-form-container" in:fly={{ y: 20, duration: 800, delay: 500 }}>
          <div class="form-card">
            <h2>Send Us a Message</h2>
            
            {#if formSubmitted}
              <div class="alert alert-success">
                <p>Thank you for your message! We'll get back to you as soon as possible.</p>
              </div>
            {/if}
            
            {#if formError}
              <div class="alert alert-error">
                <p>Please fill in all required fields.</p>
              </div>
            {/if}
            
            <form on:submit|preventDefault={handleSubmit} class="contact-form">
              <div class="form-group">
                <label for="name" class="form-label">Your Name *</label>
                <input 
                  id="name"
                  type="text" 
                  class="form-input" 
                  placeholder="John Doe"
                  bind:value={name}
                  required
                />
              </div>
              
              <div class="form-grid">
                <div class="form-group">
                  <label for="email" class="form-label">Email Address *</label>
                  <input 
                    id="email"
                    type="email" 
                    class="form-input" 
                    placeholder="john@example.com"
                    bind:value={email}
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label for="phone" class="form-label">Phone Number</label>
                  <input 
                    id="phone"
                    type="tel" 
                    class="form-input" 
                    placeholder="01234 567890"
                    bind:value={phone}
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input 
                  id="subject"
                  type="text" 
                  class="form-input" 
                  placeholder="Appointment inquiry"
                  bind:value={subject}
                />
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">Message *</label>
                <textarea 
                  id="message"
                  class="form-textarea" 
                  placeholder="How can we help you and your pet?"
                  bind:value={message}
                  required
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="map-section section-sm">
    <div class="container">
      <h2 class="section-title text-center">Find Us</h2>
      
      <div class="map-container" in:fade={{ duration: 800, delay: 300 }}>
        <!-- Google Maps Embed -->
        <!-- Note: You'll need to replace with your actual Google Maps API integration -->
        <div class="google-map" bind:this={mapElement}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.9378966249784!2d-1.370215!3d52.5675259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877612af9fa01d7%3A0x2f3d2dd73f2abc6d!2s39%20Jersey%20Way%2C%20Barwell%2C%20Leicester%20LE9%208HR!5e0!3m2!1sen!2suk!4v1621452882996!5m2!1sen!2suk" 
            width="100%" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
            title="Bozzles Ark Vets Location"
          ></iframe>
        </div>
      </div>
      
      <div class="directions-container" in:fly={{ y: 20, duration: 800, delay: 400 }}>
        <div class="directions-grid">
          <div class="directions-card">
            <h3>Directions</h3>
            <p>We are located on Jersey Way in Barwell, close to the town center. Our clinic is easily accessible from Leicester, Hinckley, and Earl Shilton.</p>
            <ul class="directions-list">
              <li>From Leicester: Take the A47 towards Hinckley, then follow signs for Barwell.</li>
              <li>From Hinckley: Head east on the A47, then take the B4667 to Barwell.</li>
              <li>From Earl Shilton: Take the B4667 directly to Barwell.</li>
            </ul>
          </div>
          
          <div class="parking-card">
            <h3>Parking Information</h3>
            <p>Free parking is available directly outside our practice for our clients. Additional street parking can be found on Jersey Way and surrounding streets.</p>
            <p>There is also a public car park located 200 meters from our practice on High Street that offers up to 3 hours of free parking.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .contact-hero {
      background: linear-gradient(135deg, #a6e3ff 0%, #68c5ff 100%);
      padding: 3rem 1rem 6rem;
      text-align: center;
      position: relative;
    }
    
    .contact-hero h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: var(--color-primary);
    }
    
    .contact-hero p {
      font-size: 1.25rem;
      max-width: 600px;
      margin: 0 auto;
      color: var(--color-primary-dark);
    }
    
    .wave-divider {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--spacing-8);
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-8);
    }
    
    .info-card, .hours-card, .form-card {
      background-color: var(--color-white);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      padding: var(--spacing-6);
      height: 100%;
    }
    
    .info-item {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-4);
      margin-bottom: var(--spacing-6);
    }
    
    .info-icon {
      color: var(--color-primary);
      background-color: rgba(26, 60, 110, 0.1);
      padding: var(--spacing-3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .info-content h3 {
      font-size: var(--font-size-lg);
      margin-bottom: var(--spacing-2);
      color: var(--color-primary);
    }
    
    .info-content p {
      color: var(--color-text-light);
      margin-bottom: var(--spacing-1);
    }
    
    .info-content a {
      color: var(--color-primary);
      font-weight: 500;
      transition: color var(--transition-fast) ease;
    }
    
    .info-content a:hover {
      color: var(--color-primary-light);
      text-decoration: underline;
    }
    
    .emergency {
      color: var(--color-secondary) !important;
      font-weight: 600;
    }
    
    .hours-card h2 {
      margin-bottom: var(--spacing-4);
    }
    
    .hours-list {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2);
    }
    
    .hours-item {
      display: flex;
      justify-content: space-between;
      padding: var(--spacing-2) 0;
      border-bottom: 1px solid var(--color-gray-200);
    }
    
    .hours-item:last-child {
      border-bottom: none;
    }
    
    .day {
      font-weight: 600;
      color: var(--color-primary);
    }
    
    .hours {
      color: var(--color-text-light);
    }
    
    .contact-form-container {
      display: flex;
      flex-direction: column;
    }
    
    .form-card h2 {
      margin-bottom: var(--spacing-6);
    }
    
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-4);
    }
    
    .form-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--spacing-4);
    }
    
    .alert {
      margin-bottom: var(--spacing-4);
    }
    
    .map-container {
      margin-bottom: var(--spacing-8);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-md);
    }
    
    .google-map {
      width: 100%;
      height: 450px;
    }
    
    .google-map iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }
    
    .section-title {
      margin-bottom: var(--spacing-8);
      color: var(--color-primary);
    }
    
    .directions-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--spacing-6);
    }
    
    .directions-card, .parking-card {
      background-color: var(--color-white);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      padding: var(--spacing-6);
    }
    
    .directions-card h3, .parking-card h3 {
      color: var(--color-primary);
      margin-bottom: var(--spacing-4);
    }
    
    .directions-list {
      list-style-type: disc;
      padding-left: var(--spacing-6);
      margin-top: var(--spacing-4);
    }
    
    .directions-list li {
      margin-bottom: var(--spacing-2);
      color: var(--color-text-light);
    }
    
    /* Responsive styles */
    @media (min-width: 768px) {
      .contact-hero h1 {
        font-size: 3rem;
      }
      
      .contact-grid {
        grid-template-columns: 1fr 1fr;
      }
      
      .form-grid {
        grid-template-columns: 1fr 1fr;
      }
      
      .directions-grid {
        grid-template-columns: 3fr 2fr;
      }
    }
    
    @media (min-width: 1024px) {
      .contact-grid {
        grid-template-columns: 2fr 3fr;
      }
    }
  </style>