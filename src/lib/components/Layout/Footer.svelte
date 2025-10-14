<script>
    // Import any necessary Svelte functions
    import { onMount } from 'svelte';
    
    // Year for copyright
    let currentYear = new Date().getFullYear();
    
    // For newsletter subscription
    let email = '';
    let subscribeStatus = '';
    
    // Handle form submission
    function handleSubscribe(e) {
      e.preventDefault();
      // In a real implementation, this would connect to an API
      if (email) {
        subscribeStatus = 'Thanks for subscribing!';
        email = '';
        // Reset message after 3 seconds
        setTimeout(() => {
          subscribeStatus = '';
        }, 3000);
      }
    }
    
    // Scroll to top function
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  </script>
  
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <!-- Practice Information -->
          <div class="footer-section">
            <h3 class="footer-title">Bozzles Ark Vets</h3>
            <address class="footer-address">
              <p>39 Jersey Way</p>
              <p>Barwell, LE9 8HR</p>
              <p class="footer-phone"><i class="icon-phone"></i> 01455 710 796</p>
              <p class="footer-email"><i class="icon-email"></i> care@bozzlesarkvets.co.uk</p>
            </address>
            <div class="cert-logos">
              <img src="/rcvs.jpg" alt="RCVS Accredited" class="cert-logo" />
              <!--<img src="/cfc.jpg" alt="Cat Friendly Clinic" class="cert-logo" /> -->
            </div>
          </div>
          
          <!-- Opening Hours -->
          <div class="footer-section">
            <h3 class="footer-title">Opening Hours</h3>
            <ul class="hours-list">
              <li><span>Monday - Friday:</span> 9:00am - 7:00pm</li>
              <li><span>Saturday:</span> 10:00am - 5:00pm</li>
              <li><span>Sunday:</span> 10:00am - 2:00pm</li>
              <li class="emergency-hours"><span>Emergency Care:</span> 24/7</li>
            </ul>
            <a href="/contact" class="footer-link">Find Us <i class="icon-arrow-right"></i></a>
          </div>
          
          <!-- Quick Links -->
          <div class="footer-section">
            <h3 class="footer-title">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="/appointments" class="footer-link">Book Appointment</a></li>
              <li><a href="/services" class="footer-link">Our Services</a></li>
              <li><a href="/pet-portal" class="footer-link">Pet Portal</a></li>
              <li><a href="/resources/pet-care" class="footer-link">Pet Care Guides</a></li>
              <li><a href="/about-us/team" class="footer-link">Meet Our Team</a></li>
              <li><a href="/careers" class="footer-link">Join Our Team</a></li>
            </ul>
          </div>
          
          <!-- Newsletter -->
          <div class="footer-section">
            <h3 class="footer-title">Stay Updated</h3>
            <p class="newsletter-text">Subscribe for pet health tips, practice news and special offers.</p>
            <form class="newsletter-form" on:submit={handleSubscribe}>
              <div class="form-group">
                <input 
                  disabled={true}   
                  type="email" 
                  placeholder="Coming Soon!" 
                  class="newsletter-input"
                  bind:value={email}
                  required
                />
                <button disabled type="submit" class="newsletter-button">Subscribe</button>
              </div>
              {#if subscribeStatus}
                <p class="subscribe-message">{subscribeStatus}</p>
              {/if}
            </form>
            <div class="social-links">
              <a href="https://facebook.com/bozzlesarkvets" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">
                <i class="icon-facebook"></i>
              </a>
              <a href="https://instagram.com/bozzlesarkvets" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
                <i class="icon-instagram"></i>
              </a>
              <a href="https://twitter.com/bozzlesarkvets" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Twitter">
                <i class="icon-twitter"></i>
              </a>
              <a href="https://youtube.com/bozzlesarkvets" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="YouTube">
                <i class="icon-youtube"></i>
              </a>
             <a href="https://www.bozzlesarkvets.co.uk/meet-the-developer" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Daniel Broomhead — Web Developer"><img src="/DB-Monogram.png" alt="Daniel Broomhead Logo" class="dev-logo">
</a>

            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p class="copyright">© {currentYear} Bozzles Ark Vets. All rights reserved. Company Number #16434819</p>
          <ul class="legal-links">
            <li><a href="/privacy-policy" class="legal-link">Privacy Policy</a></li>
            <li><a href="/terms-of-service" class="legal-link">Terms of Service</a></li>
            <li><a href="/accessibility" class="legal-link">Accessibility</a></li>
          </ul>
          <button class="scroll-top" on:click={scrollToTop} aria-label="Scroll to top">
            <i class="icon-arrow-up"></i>
          </button>
        </div>
        <p class="provet-notice">Practice Management powered by <a href="https://provet.cloud" target="_blank" rel="noopener noreferrer">ProVet Cloud</a></p>
      </div>
    </div>
  </footer>
  
  <style>
    /* Footer Styles */
    .footer {
      background-color: #1a3c6e;
      color: #ffffff;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .footer-top {
      padding: 3rem 0;
      background-color: #1a3c6e;
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
    
    .footer-section {
      display: flex;
      flex-direction: column;
    }
    
    .footer-title {
      color: #ffffff;
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1.25rem;
      position: relative;
      padding-bottom: 0.75rem;
    }
    
    .footer-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 3px;
      background-color: #e53e3e;
    }
    
    .footer-address {
      font-style: normal;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .footer-phone, .footer-email {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
    
    .icon-phone, .icon-email, .icon-arrow-right, .icon-arrow-up {
      display: inline-block;
      width: 1em;
      height: 1em;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    
    .cert-logos {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .cert-logo {
      height: 40px;
      width: auto;
    }
    
    .hours-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .hours-list li {
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: space-between;
    }
    
    .hours-list span {
      font-weight: 500;
      min-width: 120px;
    }
    
    .emergency-hours {
      color: #e53e3e;
      font-weight: 600;
      margin-top: 0.5rem;
    }
    
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-links li {
      margin-bottom: 0.75rem;
    }
    
    .footer-link {
      color: #e2e8f0;
      text-decoration: none;
      transition: color 0.2s ease, transform 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .footer-link:hover {
      color: #ffffff;
      transform: translateX(5px);
    }
    
    .newsletter-text {
      margin-bottom: 1rem;
      line-height: 1.6;

    }
    
    .newsletter-form {
      margin-bottom: 1.5rem;
      
    }
    
    .form-group {
      display: flex;
      gap: 0.5rem;
      color: white;
    }
    
    .newsletter-input {
      flex: 1;
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      font-size: 0.875rem;
      color:white
    }
    
    .newsletter-button {
      background-color: #e53e3e;
      color: white;
      border: none;
      padding: 0.75rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
      transition: background-color 0.2s ease;
      
    }
    
    .newsletter-button:hover {
      background-color: #c53030;
    }
    
    .subscribe-message {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: #4ade80;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: #ffffff;
      transition: all 0.3s ease;
    }
    
    .social-link:hover {
      background-color: #e53e3e;
      transform: translateY(-3px);
    }
    
    .icon-facebook, .icon-instagram, .icon-twitter, .icon-youtube {
      font-size: 1.2rem;
    }
    
    .footer-bottom {
      background-color: #15325a;
      padding: 1.5rem 0;
    }
    
    .footer-bottom-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .copyright {
      font-size: 0.875rem;
      margin: 0;
    }
    
    .legal-links {
      display: flex;
      list-style: none;
      gap: 1.5rem;
      padding: 0;
      margin: 0;
    }
    
    .legal-link {
      color: #cbd5e0;
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.2s ease;
    }
    
    .legal-link:hover {
      color: #ffffff;
    }
    
    .scroll-top {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: #e53e3e;
      border: none;
      border-radius: 50%;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .scroll-top:hover {
      background-color: #c53030;
      transform: translateY(-3px);
    }
    
    .provet-notice {
      text-align: center;
      font-size: 0.75rem;
      color: #a0aec0;
      margin-top: 1.5rem;
      margin-bottom: 0;
    }
    
    .provet-notice a {
      color: #cbd5e0;
      text-decoration: none;
    }
    
    .provet-notice a:hover {
      color: #ffffff;
      text-decoration: underline;
    }
    
    /* Icon styles - if using an icon library like FontAwesome, 
       these could be replaced with proper font icons */
    .icon-phone {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM21 6h-7'/%3E%3C/svg%3E");
    }
    
    .icon-email {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3C/svg%3E");
    }
    
    .icon-arrow-right {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z'/%3E%3C/svg%3E");
    }
    
    .icon-arrow-up {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/%3E%3C/svg%3E");
    }
    
    .icon-facebook {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M20 2H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-5 7c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v7h-2v-3h-1v3h-2v-3h-1v3H9v-7zm5-5c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1z'/%3E%3C/svg%3E");
    }
    
    .icon-instagram {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4 1.3-.1 1.6-.1 4.9-.1M12 0C8.7 0 8.3 0 7.1.1c-1.3.1-2.2.2-3 .5C3.4.8 2.7 1.1 2 1.9c-.7.7-1.1 1.5-1.4 2.1-.3.8-.5 1.7-.5 3C0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.2 2.2.5 3 .3.8.6 1.5 1.4 2.1.7.7 1.3 1.1 2.1 1.4.8.3 1.7.5 3 .5 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.2-.2 3-.5.8-.3 1.5-.7 2.1-1.4.7-.7 1.1-1.3 1.4-2.1.3-.8.5-1.7.5-3 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.2-2.2-.5-3-.3-.8-.7-1.5-1.4-2.1-.7-.7-1.3-1.1-2.1-1.4-.8-.3-1.7-.5-3-.5C15.7 0 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.8c-.8 0-1.4.6-1.4 1.4S17.6 7 18.4 7s1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z'/%3E%3C/svg%3E");
    }
    
    .icon-twitter {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'/%3E%3C/svg%3E");
    }
    
    .icon-youtube {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z'/%3E%3C/svg%3E");
    }
    
    /* Media Queries for Responsive Design */
    @media (max-width: 1024px) {
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .footer-bottom-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      
      .legal-links {
        margin: 1rem 0;
      }
    }
    
    @media (max-width: 640px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }
      
      .footer-section {
        padding-bottom: 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 1.5rem;
      }
      
      .footer-section:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }
      
      .form-group {
        flex-direction: column;
      }
      
      .newsletter-button {
        width: 100%;
        margin-top: 0.5rem;
      }
      
      .legal-links {
        flex-direction: column;
        gap: 0.75rem;
      }
    }
  </style>