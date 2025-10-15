<script lang="ts">
  import { scale, fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  // Form state using Svelte 5 runes
  let name = $state('');
  let email = $state('');
  let phone = $state('');
  let subject = $state('');
  let petName = $state('');
  let message = $state('');
  let isSubmitting = $state(false);
  let submitSuccess = $state(false);
  let errors = $state<Record<string, string>>({});

  // Derived state for form validation
  let isValid = $derived(
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    phone.trim().length > 0 &&
    subject.length > 0 &&
    message.trim().length > 0 &&
    /\S+@\S+\.\S+/.test(email)
  );

  function validateForm() {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (!subject) newErrors.subject = 'Please select a subject';
    if (!message.trim()) newErrors.message = 'Message is required';
    
    errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event: Event) {
    event.preventDefault();
    
    if (!validateForm()) return;
    
    isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      isSubmitting = false;
      submitSuccess = true;
      
      // Reset form
      name = '';
      email = '';
      phone = '';
      subject = '';
      petName = '';
      message = '';
      errors = {};
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        submitSuccess = false;
      }, 5000);
    }, 1500);
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      content: '39 Jersey Way, Barwell, LE9 8HR',
      link: 'https://maps.google.com/?q=39+Jersey+Way+Barwell+LE9+8HR'
    },
    {
      icon: '📞',
      title: 'Call Us',
      content: '01455 710 796',
      link: 'tel:01455710796'
    },
    {
      icon: '📧',
      title: 'Email Us',
      content: 'info@bozzlesarkvets.co.uk',
      link: 'mailto:info@bozzlesarkvets.co.uk'
    },
    {
      icon: '🚨',
      title: 'Emergency',
      content: '01455 710 796 (24/7)',
      link: 'tel:01455710796'
    }
  ];

  const openingHours = [
    { day: 'Monday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed (Emergency only)' }
  ];
</script>

<!-- Hero Section -->
<section class="contact-hero">
  <div class="container">
    <div class="hero-content" in:fly={{y: 30, duration: 800, easing: quintOut}}>
      <h1>Get In Touch</h1>
      <p>We're here to help you and your pets. Contact us today!</p>
    </div>
  </div>
</section>

<!-- Emergency Banner -->
<div class="emergency-banner">
  <div class="container">
    <div class="emergency-content">
      <span class="emergency-icon">🚨</span>
      <div>
        <strong>24/7 Emergency Care Available</strong>
        <p>If your pet needs urgent care, call us immediately: <a href="tel:01455710796">01455 710 796</a></p>
      </div>
    </div>
  </div>
</div>

<!-- Main Contact Section -->
<section class="contact-main">
  <div class="container">
    <div class="contact-grid">
      
      <!-- Contact Information Cards -->
      <div class="contact-info-section">
        <h2>Contact Information</h2>
        <div class="info-cards">
          {#each contactInfo as info, i}
            <div class="info-card" in:scale={{delay: 100 * i, duration: 500, easing: quintOut}}>
              <div class="info-icon">{info.icon}</div>
              <h3>{info.title}</h3>
              <a href={info.link} class="info-link">{info.content}</a>
            </div>
          {/each}
        </div>

        <!-- Opening Hours -->
        <div class="opening-hours" in:scale={{delay: 400, duration: 500, easing: quintOut}}>
          <h3>Opening Hours</h3>
          <div class="hours-list">
            {#each openingHours as schedule}
              <div class="hour-item">
                <span class="day">{schedule.day}</span>
                <span class="hours">{schedule.hours}</span>
              </div>
            {/each}
          </div>
        </div>

        <!-- Directions -->
        <div class="directions" in:scale={{delay: 500, duration: 500, easing: quintOut}}>
          <h3>Directions</h3>
          <p><strong>By Car:</strong> Free parking available on-site. Enter via Jersey Way.</p>
          <p><strong>By Bus:</strong> Stop on Hinckley Road, 5-minute walk to practice.</p>
          <p><strong>Accessibility:</strong> Wheelchair accessible entrance and facilities.</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form-section">
        <div class="form-container" in:fly={{x: 30, delay: 200, duration: 800, easing: quintOut}}>
          <h2>Send Us A Message</h2>
          <p class="form-description">Have a question? Fill out the form below and we'll get back to you as soon as possible.</p>

          {#if submitSuccess}
            <div class="alert-success" transition:fade>
              <span class="success-icon">✓</span>
              <div>
                <strong>Message Sent Successfully!</strong>
                <p>Thank you for contacting us. We'll respond within 24 hours.</p>
              </div>
            </div>
          {/if}

          <form onsubmit={handleSubmit}>
            <div class="form-row">
              <div class="form-group">
                <label for="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  bind:value={name}
                  class:error={errors.name}
                  placeholder="John Smith"
                />
                {#if errors.name}
                  <span class="error-message">{errors.name}</span>
                {/if}
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  bind:value={email}
                  class:error={errors.email}
                  placeholder="john@example.com"
                />
                {#if errors.email}
                  <span class="error-message">{errors.email}</span>
                {/if}
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  bind:value={phone}
                  class:error={errors.phone}
                  placeholder="07123 456789"
                />
                {#if errors.phone}
                  <span class="error-message">{errors.phone}</span>
                {/if}
              </div>

              <div class="form-group">
                <label for="petName">Pet's Name (Optional)</label>
                <input
                  type="text"
                  id="petName"
                  bind:value={petName}
                  placeholder="Max"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="subject">Subject *</label>
              <select id="subject" bind:value={subject} class:error={errors.subject}>
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="appointment">Book an Appointment</option>
                <option value="emergency">Emergency Consultation</option>
                <option value="prescription">Prescription Refill</option>
                <option value="results">Test Results</option>
                <option value="billing">Billing Question</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
              {#if errors.subject}
                <span class="error-message">{errors.subject}</span>
              {/if}
            </div>

            <div class="form-group">
              <label for="message">Message *</label>
              <textarea
                id="message"
                bind:value={message}
                class:error={errors.message}
                rows="6"
                placeholder="Tell us how we can help you and your pet..."
              ></textarea>
              {#if errors.message}
                <span class="error-message">{errors.message}</span>
              {/if}
            </div>

            <button 
              type="submit" 
              class="btn-submit"
              disabled={isSubmitting}
            >
              {#if isSubmitting}
                Sending...
              {:else}
                Send Message
              {/if}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Map Section -->
<section class="map-section">
  <div class="container">
    <h2>Find Us</h2>
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2416.8!2d-1.3445!3d52.5675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDM0JzAzLjAiTiAxwrAyMCczOS44Ilc!5e0!3m2!1sen!2suk!4v1234567890"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Bozzles Ark Vets Location"
      ></iframe>
    </div>
  </div>
</section>

<style>
  /* Hero Section */
  .contact-hero {
    background: linear-gradient(135deg, #1a3c6e 0%, #2c5490 100%);
    color: white;
    padding: 4rem 1rem 3rem;
    text-align: center;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .hero-content h1 {
    font-size: 2.75rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .hero-content p {
    font-size: 1.25rem;
    opacity: 0.95;
  }

  /* Emergency Banner */
  .emergency-banner {
    background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
    color: white;
    padding: 1.25rem 1rem;
  }

  .emergency-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .emergency-icon {
    font-size: 2rem;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }

  .emergency-content strong {
    display: block;
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
  }

  .emergency-content p {
    margin: 0;
    font-size: 0.95rem;
  }

  .emergency-content a {
    color: white;
    font-weight: 600;
    text-decoration: underline;
  }

  /* Main Contact Section */
  .contact-main {
    padding: 4rem 1rem;
    background-color: #f7fafc;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .contact-info-section h2,
  .contact-form-section h2 {
    font-size: 2rem;
    color: #1a3c6e;
    margin-bottom: 1.5rem;
  }

  /* Info Cards */
  .info-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .info-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  .info-icon {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }

  .info-card h3 {
    font-size: 1.125rem;
    color: #2c5282;
    margin-bottom: 0.5rem;
  }

  .info-link {
    color: #3182ce;
    text-decoration: none;
    font-weight: 500;
    word-break: break-word;
  }

  .info-link:hover {
    text-decoration: underline;
  }

  /* Opening Hours */
  .opening-hours {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    margin-bottom: 2rem;
  }

  .opening-hours h3 {
    font-size: 1.375rem;
    color: #1a3c6e;
    margin-bottom: 1rem;
  }

  .hours-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .hour-item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e2e8f0;
  }

  .hour-item:last-child {
    border-bottom: none;
  }

  .day {
    font-weight: 600;
    color: #2d3748;
  }

  .hours {
    color: #4a5568;
  }

  /* Directions */
  .directions {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .directions h3 {
    font-size: 1.375rem;
    color: #1a3c6e;
    margin-bottom: 1rem;
  }

  .directions p {
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }

  .directions p:last-child {
    margin-bottom: 0;
  }

  /* Contact Form */
  .form-container {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .form-description {
    color: #4a5568;
    margin-bottom: 2rem;
  }

  .alert-success {
    background: #f0fdf4;
    border: 1px solid #86efac;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .success-icon {
    background: #4ade80;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-weight: bold;
  }

  .alert-success strong {
    color: #166534;
    display: block;
    margin-bottom: 0.25rem;
  }

  .alert-success p {
    color: #15803d;
    margin: 0;
    font-size: 0.9rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.5rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    font-family: inherit;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
  }

  .form-group input.error,
  .form-group select.error,
  .form-group textarea.error {
    border-color: #ef4444;
  }

  .error-message {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: block;
  }

  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }

  .btn-submit {
    width: 100%;
    background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .btn-submit:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(49, 130, 206, 0.3);
  }

  .btn-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Map Section */
  .map-section {
    padding: 4rem 1rem;
    background: white;
  }

  .map-section h2 {
    font-size: 2rem;
    color: #1a3c6e;
    text-align: center;
    margin-bottom: 2rem;
  }

  .map-container {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  /* Responsive Design */
  @media (max-width: 968px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }

    .info-cards {
      grid-template-columns: 1fr;
    }

    .form-row {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .hero-content h1 {
      font-size: 2rem;
    }

    .hero-content p {
      font-size: 1rem;
    }

    .emergency-content {
      flex-direction: column;
      text-align: center;
    }

    .form-container {
      padding: 1.5rem;
    }
  }
</style>