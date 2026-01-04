<script lang="ts">
  /**
   * Contact Page
   * Full-featured contact page with form, map, and business info
   */
  
  import { Phone, Mail, MapPin, Clock, Send } from 'lucide-svelte';
  
  // Form state
  let name = $state<string>('');
  let email = $state<string>('');
  let phone = $state<string>('');
  let subject = $state<string>('general');
  let message = $state<string>('');
  let isSubmitting = $state<boolean>(false);
  let submitStatus = $state<'idle' | 'success' | 'error'>('idle');
  let submitMessage = $state<string>('');
  
  // Form validation
  let errors = $state<Record<string, string>>({});
  
  // Contact information
  const contactInfo = {
    phone: {
      display: '01455 710 796',
      href: '+441455710796'
    },
    email: 'care@bozzlesarkvets.co.uk',
    address: {
      street: '39 Jersey Way',
      city: 'Barwell',
      postcode: 'LE9 8HR',
      fullAddress: '39 Jersey Way, Barwell, LE9 8HR'
    },
    hours: {
      weekday: 'Mon-Fri: 9:00am - 7:00pm',
      saturday: 'Saturday: 10:00am - 5:00pm',
      sunday: 'Sunday: 10:00am - 2:00pm',
      emergency: '24/7 Emergency Services'
    }
  };
  
  // Subject options for dropdown
  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'appointment', label: 'Appointment Request' },
    { value: 'emergency', label: 'Emergency' },
    { value: 'billing', label: 'Billing Question' },
    { value: 'prescription', label: 'Prescription Refill' },
    { value: 'feedback', label: 'Feedback or Complaint' },
    { value: 'other', label: 'Other' }
  ];
  
  // Background orbs (fixed positions to avoid CLS)
  const orbs = [
    { size: 250, left: 10, top: 20, color: '#1a3c6e', duration: 15 },
    { size: 180, left: 80, top: 60, color: '#5FC3BF', duration: 17 },
    { size: 200, left: 30, top: 70, color: '#a6e3ff', duration: 19 },
    { size: 220, left: 70, top: 15, color: '#1a3c6e', duration: 21 },
    { size: 160, left: 50, top: 85, color: '#5FC3BF', duration: 23 },
    { size: 190, left: 90, top: 40, color: '#a6e3ff', duration: 25 }
  ];
  
  /**
   * Validate form
   */
  function validateForm(): boolean {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }
  
  /**
   * Handle form submission
   */
  async function handleSubmit(e: SubmitEvent): Promise<void> {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    isSubmitting = true;
    submitStatus = 'idle';
    submitMessage = '';
    
    try {
      // TODO: Implement actual form submission to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, phone, subject, message })
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      submitStatus = 'success';
      submitMessage = 'Thank you for your message! We\'ll get back to you within 24 hours.';
      
      // Reset form
      name = '';
      email = '';
      phone = '';
      subject = 'general';
      message = '';
      errors = {};
    } catch (error) {
      submitStatus = 'error';
      submitMessage = 'Sorry, something went wrong. Please try calling us directly.';
      console.error('Form submission error:', error);
    } finally {
      isSubmitting = false;
    }
  }
  
  // Structured data for SEO
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": "Bozzles Ark Vets",
    "telephone": contactInfo.phone.href,
    "email": contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactInfo.address.street,
      "addressLocality": contactInfo.address.city,
      "postalCode": contactInfo.address.postcode,
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.5631,
      "longitude": -1.3435
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ]
  };
</script>

<svelte:head>
  <title>Contact Us | Bozzles Ark Vets - Get In Touch</title>
  <meta 
    name="description" 
    content="Contact Bozzles Ark Vets in Barwell. Call 01455 710 796, email us, or visit our practice. We're here to help with all your pet care needs." 
  />
  <meta name="keywords" content="contact, veterinary clinic, Barwell, pet care, emergency vet" />
  {@html `<script type="application/ld+json">${JSON.stringify(contactSchema)}<\/script>`}
</svelte:head>

<div class="contact-page">
  <!-- Animated background -->
  <div class="background-orbs" aria-hidden="true">
    {#each orbs as orb, i}
      <div
        class="orb"
        style="
          width: {orb.size}px;
          height: {orb.size}px;
          left: {orb.left}%;
          top: {orb.top}%;
          background-color: {orb.color};
          animation-delay: {i * 0.5}s;
          animation-duration: {orb.duration}s;
        "
      ></div>
    {/each}
  </div>

  <div class="container">
    <!-- Page Header -->
    <header class="page-header">
      <h1>Get In Touch</h1>
      <p class="page-description">
        Have questions about your pet's health? Need to book an appointment? 
        We're here to help with all your veterinary needs.
      </p>
    </header>

    <div class="content-grid">
      <!-- Contact Form -->
      <section class="form-section" aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading" class="section-title">Send Us a Message</h2>
        
        <form class="contact-form" onsubmit={handleSubmit} novalidate>
          <!-- Name Field -->
          <div class="form-group">
            <label for="name" class="form-label">
              Your Name <span class="required">*</span>
            </label>
            <input
              id="name"
              type="text"
              class="form-input"
              class:error={errors.name}
              bind:value={name}
              placeholder="John Smith"
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {#if errors.name}
              <p id="name-error" class="error-message" role="alert">
                {errors.name}
              </p>
            {/if}
          </div>

          <!-- Email Field -->
          <div class="form-group">
            <label for="email" class="form-label">
              Email Address <span class="required">*</span>
            </label>
            <input
              id="email"
              type="email"
              class="form-input"
              class:error={errors.email}
              bind:value={email}
              placeholder="john@example.com"
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {#if errors.email}
              <p id="email-error" class="error-message" role="alert">
                {errors.email}
              </p>
            {/if}
          </div>

          <!-- Phone Field (Optional) -->
          <div class="form-group">
            <label for="phone" class="form-label">
              Phone Number <span class="optional">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              class="form-input"
              bind:value={phone}
              placeholder="01455 710 796"
              disabled={isSubmitting}
            />
          </div>

          <!-- Subject Field -->
          <div class="form-group">
            <label for="subject" class="form-label">
              Subject
            </label>
            <select
              id="subject"
              class="form-select"
              bind:value={subject}
              disabled={isSubmitting}
            >
              {#each subjectOptions as option}
                <option value={option.value}>{option.label}</option>
              {/each}
            </select>
          </div>

          <!-- Message Field -->
          <div class="form-group">
            <label for="message" class="form-label">
              Message <span class="required">*</span>
            </label>
            <textarea
              id="message"
              class="form-textarea"
              class:error={errors.message}
              bind:value={message}
              placeholder="Tell us how we can help you and your pet..."
              rows="6"
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            ></textarea>
            {#if errors.message}
              <p id="message-error" class="error-message" role="alert">
                {errors.message}
              </p>
            {/if}
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="submit-button"
            disabled={isSubmitting}
          >
            {#if isSubmitting}
              <span class="loading-spinner" aria-hidden="true"></span>
              Sending...
            {:else}
              <Send size={20} aria-hidden="true" />
              Send Message
            {/if}
          </button>

          <!-- Submit Status Messages -->
          {#if submitStatus === 'success'}
            <div class="status-message success" role="alert">
              <p>{submitMessage}</p>
            </div>
          {:else if submitStatus === 'error'}
            <div class="status-message error" role="alert">
              <p>{submitMessage}</p>
            </div>
          {/if}
        </form>
      </section>

      <!-- Contact Information -->
      <aside class="info-section" aria-labelledby="contact-info-heading">
        <h2 id="contact-info-heading" class="section-title">Contact Information</h2>
        
        <!-- Contact Cards -->
        <div class="info-cards">
          <!-- Phone Card -->
          <a 
            href="tel:{contactInfo.phone.href}"
            class="info-card"
            aria-label="Call us at {contactInfo.phone.display}"
          >
            <div class="info-icon phone-icon" aria-hidden="true">
              <Phone size={24} strokeWidth={2} />
            </div>
            <div class="info-content">
              <h3 class="info-title">Call Us</h3>
              <p class="info-detail">{contactInfo.phone.display}</p>
            </div>
          </a>

          <!-- Email Card -->
          <a 
            href="mailto:{contactInfo.email}"
            class="info-card"
            aria-label="Email us at {contactInfo.email}"
          >
            <div class="info-icon email-icon" aria-hidden="true">
              <Mail size={24} strokeWidth={2} />
            </div>
            <div class="info-content">
              <h3 class="info-title">Email Us</h3>
              <p class="info-detail email-text">{contactInfo.email}</p>
            </div>
          </a>

          <!-- Address Card -->
          <div class="info-card">
            <div class="info-icon address-icon" aria-hidden="true">
              <MapPin size={24} strokeWidth={2} />
            </div>
            <div class="info-content">
              <h3 class="info-title">Visit Us</h3>
              <address class="info-detail">
                {contactInfo.address.street}<br />
                {contactInfo.address.city}<br />
                {contactInfo.address.postcode}
              </address>
            </div>
          </div>

          <!-- Hours Card -->
          <div class="info-card hours-card">
            <div class="info-icon hours-icon" aria-hidden="true">
              <Clock size={24} strokeWidth={2} />
            </div>
            <div class="info-content">
              <h3 class="info-title">Opening Hours</h3>
              <div class="hours-list">
                <p>{contactInfo.hours.weekday}</p>
                <p>{contactInfo.hours.saturday}</p>
                <p>{contactInfo.hours.sunday}</p>
                <p class="emergency-hours">{contactInfo.hours.emergency}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Map Section -->
        <div class="map-section">
          <h3 class="map-title">Find Us</h3>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.123456789!2d-1.3435!3d52.5631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMzJzQ3LjIiTiAxwrAyMCczNi42Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="300"
              style="border:0; border-radius: 12px;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Bozzles Ark Vets location map"
            ></iframe>
          </div>
          <a 
            href="https://www.google.com/maps/dir//{contactInfo.address.fullAddress}"
            target="_blank"
            rel="noopener noreferrer"
            class="directions-link"
          >
            Get Directions
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M7 7h10v10"/>
              <path d="M7 17 17 7"/>
            </svg>
          </a>
        </div>
      </aside>
    </div>
  </div>
</div>

<style>
  /* ===== BASE STYLES ===== */
  .contact-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #ebf8ff 0%, #ffffff 50%, #e0f7fa 100%);
    padding: 2rem 0 4rem;
    position: relative;
    overflow: hidden;
  }

  /* ===== ANIMATED BACKGROUND ===== */
  .background-orbs {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    mix-blend-mode: multiply;
    filter: blur(60px);
    opacity: 0.15;
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -30px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }

  /* ===== CONTAINER ===== */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    position: relative;
    z-index: 1;
  }

  /* ===== PAGE HEADER ===== */
  .page-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .page-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a3c6e;
    margin-bottom: 1rem;
  }

  .page-description {
    font-size: 1.125rem;
    color: #4a5568;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* ===== CONTENT GRID ===== */
  .content-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    .content-grid {
      grid-template-columns: 1.5fr 1fr;
    }
  }

  /* ===== SECTION TITLES ===== */
  .section-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a3c6e;
    margin-bottom: 1.5rem;
  }

  /* ===== FORM SECTION ===== */
  .form-section {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  /* ===== FORM GROUPS ===== */
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-label {
    font-weight: 600;
    color: #2d3748;
    font-size: 0.875rem;
  }

  .required {
    color: #e53e3e;
  }

  .optional {
    font-weight: 400;
    color: #718096;
    font-size: 0.8125rem;
  }

  /* ===== FORM INPUTS ===== */
  .form-input,
  .form-select,
  .form-textarea {
    padding: 0.75rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.2s ease;
    font-family: inherit;
  }

  .form-input:focus,
  .form-select:focus,
  .form-textarea:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
  }

  .form-input:disabled,
  .form-select:disabled,
  .form-textarea:disabled {
    background-color: #f7fafc;
    cursor: not-allowed;
    opacity: 0.6;
  }

  .form-input.error,
  .form-textarea.error {
    border-color: #e53e3e;
  }

  .form-textarea {
    resize: vertical;
    min-height: 150px;
  }

  /* ===== ERROR MESSAGES ===== */
  .error-message {
    color: #e53e3e;
    font-size: 0.875rem;
    margin: 0;
  }

  /* ===== SUBMIT BUTTON ===== */
  .submit-button {
    background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3);
  }

  .submit-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(49, 130, 206, 0.4);
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .loading-spinner {
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* ===== STATUS MESSAGES ===== */
  .status-message {
    padding: 1rem;
    border-radius: 8px;
    font-size: 0.875rem;
  }

  .status-message.success {
    background-color: #c6f6d5;
    color: #22543d;
    border: 1px solid #9ae6b4;
  }

  .status-message.error {
    background-color: #fed7d7;
    color: #742a2a;
    border: 1px solid #fc8181;
  }

  .status-message p {
    margin: 0;
  }

  /* ===== INFO SECTION ===== */
  .info-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  /* ===== INFO CARDS ===== */
  .info-cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .info-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    text-decoration: none;
    color: inherit;
  }

  .info-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }

  a.info-card:nth-child(1):hover {
    border: 2px solid #3182ce;
  }

  a.info-card:nth-child(2):hover {
    border: 2px solid #5FC3BF;
  }

  .info-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: white;
  }

  .phone-icon {
    background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);
  }

  .email-icon {
    background: linear-gradient(135deg, #5FC3BF 0%, #0694a2 100%);
  }

  .address-icon {
    background: linear-gradient(135deg, #2c5282 0%, #1a3c6e 100%);
  }

  .hours-icon {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  }

  .info-content {
    flex: 1;
  }

  .info-title {
    font-size: 1rem;
    font-weight: 600;
    color: #1a3c6e;
    margin: 0 0 0.5rem 0;
  }

  .info-detail {
    font-size: 0.875rem;
    color: #4a5568;
    margin: 0;
    font-style: normal;
  }

  .email-text {
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  .hours-list {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .hours-list p {
    margin: 0;
    font-size: 0.875rem;
  }

  .emergency-hours {
    color: #e53e3e;
    font-weight: 600;
    margin-top: 0.25rem !important;
  }

  /* ===== MAP SECTION ===== */
  .map-section {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .map-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1a3c6e;
    margin: 0 0 1rem 0;
  }

  .map-container {
    margin-bottom: 1rem;
  }

  .map-container iframe {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    border: 0;
  }

  .directions-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #3182ce;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    transition: color 0.2s ease;
  }

  .directions-link:hover {
    color: #2c5282;
    text-decoration: underline;
  }

  /* ===== FOCUS STYLES (WCAG 2.2 AA) ===== */
  .form-input:focus-visible,
  .form-select:focus-visible,
  .form-textarea:focus-visible,
  .submit-button:focus-visible,
  .info-card:focus-visible,
  .directions-link:focus-visible {
    outline: 3px solid #3182ce;
    outline-offset: 2px;
  }

  /* Remove default focus for mouse users */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  /* ===== RESPONSIVE DESIGN ===== */
  @media (max-width: 1024px) {
    .page-header h1 {
      font-size: 2rem;
    }
    
    .page-description {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    .contact-page {
      padding: 1.5rem 0 3rem;
    }
    
    .form-section {
      padding: 1.5rem;
    }
    
    .page-header {
      margin-bottom: 2rem;
    }
    
    .page-header h1 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 480px) {
    .form-section {
      padding: 1.25rem;
    }
    
    .submit-button {
      padding: 0.875rem 1.5rem;
    }
    
    .info-card {
      padding: 1.25rem;
    }
  }

  /* ===== ACCESSIBILITY ===== */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .form-input,
    .form-select,
    .form-textarea,
    .info-card {
      border-width: 2px;
    }
    
    .submit-button {
      border: 2px solid white;
    }
  }

  /* Touch-friendly sizing */
  @media (hover: none) and (pointer: coarse) {
    .submit-button,
    .info-card,
    .directions-link {
      min-height: 44px;
    }
    
    .form-input,
    .form-select {
      min-height: 48px;
    }
  }

  /* Print styles */
  @media print {
    .background-orbs,
    .contact-form {
      display: none;
    }
    
    .contact-page {
      background: white;
    }
    
    .info-card {
      border: 1px solid #e2e8f0;
      page-break-inside: avoid;
    }
  }
</style>