<script>
    import { onMount } from 'svelte';
    
    // Testimonial data
    const testimonials = [
      {
        name: "Sarah Johnson",
        pet: "Max (Labrador)",
        image: "/images/lab.jpg",
        quote: "Dr. Bozzle and the team have been incredible with Max. They always take the time to explain everything and make us both feel comfortable.",
        rating: 5
      },
      {
        name: "Liberty James",
        pet: "Daisy (Cat)",
        image: "/images/lib.jpg",
        quote: "I never thought I'd find a vet that Whiskers would tolerate, but the team at Bozzles somehow made the experience stress-free!",
        rating: 5
      },
      {
        name: "Emma Rodriguez",
        pet: "Sunny (Parrot)",
        image: "/images/parrot.jpg", 
        quote: "Finding quality care for exotic pets can be challenging. Bozzles Ark Vets has exceptional knowledge about birds and provides the best care for Sunny.",
        rating: 5
      },
      {
        name: "David Thompson",
        pet: "Sheldon (Tortoise)",
        image: "/images/tort.webp",
        quote: "The exotic pet specialists at Bozzles understand the unique needs of reptiles. Sheldon has been thriving under their care for years.",
        rating: 5
      }
    ];
    
    let currentIndex = 0;
    let intervalId;
    
    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
    }
    
    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    }
    
    function startAutoSlide() {
      intervalId = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    
    function resetTimer() {
      clearInterval(intervalId);
      startAutoSlide();
    }
    
    onMount(() => {
      startAutoSlide();
      return () => clearInterval(intervalId);
    });
  </script>
  
  <section class="testimonials">
    <div class="container">
      <div class="section-header">
        <h2>Happy Pets & Owners</h2>
        <p>See what our clients have to say about Bozzles Ark Vets</p>
      </div>
      
      <div class="testimonial-carousel">
        <button class="carousel-arrow prev" on:click={() => { prevTestimonial(); resetTimer(); }} aria-label="Previous testimonial">
          ‹
        </button>
        
        <div class="testimonial-wrapper">
          {#each testimonials as testimonial, i}
            {#if i === currentIndex}
              <div class="testimonial-card" in:fade={{ duration: 300 }}>
                <div class="quote-icon">"</div>
                <p class="quote">{testimonial.quote}</p>
                
                <div class="testimonial-rating">
                  {#each Array(5) as _, starIndex}
                    <span class="star" class:filled={starIndex < testimonial.rating}>★</span>
                  {/each}
                </div>
                
                <div class="testimonial-author">
                  <div class="author-info">
                    <p class="author-name">{testimonial.name}</p>
                    <p class="pet-name">Owner of {testimonial.pet}</p>
                  </div>
                    <img src={testimonial.image} alt={testimonial.pet} class="pet-image" />

                </div>
              </div>
            {/if}
          {/each}
        </div>
        
        <button class="carousel-arrow next" on:click={() => { nextTestimonial(); resetTimer(); }} aria-label="Next testimonial">
          ›
        </button>
      </div>
      
      <div class="testimonial-dots">
        {#each testimonials as _, i}
          <button 
            class="dot" 
            class:active={i === currentIndex}
            on:click={() => { currentIndex = i; resetTimer(); }}
            aria-label={`Go to testimonial ${i + 1}`}
          ></button>
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .testimonials {
      padding: 4rem 1rem;
      background-color: #f7fafc;
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
    
    .testimonial-carousel {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .testimonial-wrapper {
      flex: 1;
      max-width: 800px;
      position: relative;
      min-height: 250px;
    }
    
    .testimonial-card {
      background-color: white;
      border-radius: 12px;
      padding: 2.5rem 2rem 2rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
      position: relative;
    }
    
    .quote-icon {
      position: absolute;
      top: -15px;
      left: 30px;
      font-size: 6rem;
      color: rgba(66, 153, 225, 0.15);
      font-family: Georgia, serif;
      line-height: 1;
    }
    
    .quote {
      font-style: italic;
      color: #4a5568;
      margin-bottom: 1.5rem;
      position: relative;
      z-index: 1;
      font-size: 1.125rem;
      line-height: 1.6;
    }
    
    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: space-between;
    }
    
    .author-name {
      font-weight: bold;
      color: #2c5282;
      margin: 0;
    }
    
    .pet-name {
      color: #718096;
      font-size: 0.875rem;
      margin: 0;
    }
    
    .testimonial-rating {
      margin-bottom: 1rem;
    }
    
    .star {
      color: #cbd5e0;
      font-size: 1.25rem;
    }
    
    .star.filled {
      color: #f6ad55;
    }
    
    .carousel-arrow {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: white;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      font-size: 1.5rem;
      color: #4a5568;
      transition: all 0.2s ease;
    }
    
    .carousel-arrow:hover {
      background-color: #ebf8ff;
      color: #3182ce;
      transform: scale(1.1);
    }
    
    .testimonial-dots {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
    }
    
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #cbd5e0;
      border: none;
      padding: 0;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .dot.active {
      background-color: #3182ce;
      transform: scale(1.3);
    }
    .pet-image {
      width: 350px;
      height: 350px;
      border-radius: 30%;
      object-fit: cover;
    }
    
    /* Add the fade animation */
    /* Note: Svelte's built-in transitions will handle this via the in:fade directive */
  </style>