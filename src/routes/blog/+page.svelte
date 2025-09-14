<!-- src/routes/blog/+page.svelte -->
<script>
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    
    // Sample blog posts data - in real implementation this would come from a CMS or API
    let blogPosts = $state([
      {
        id: 1,
        title: "Winter Pet Care: Keeping Your Furry Friends Safe in Cold Weather",
        excerpt: "As temperatures drop, it's important to take extra care of our pets. Learn essential tips for winter pet safety and comfort.",
        content: "Winter can be challenging for pets, especially those not accustomed to cold temperatures...",
        author: "Dr. Sarah Johnson",
        publishDate: "2024-12-15",
        category: "Seasonal Care",
        tags: ["winter", "safety", "cold weather", "pets"],
        image: "/images/blog/winter-pet-care.jpg",
        readTime: "5 min read",
        featured: true
      },
      {
        id: 2,
        title: "The Importance of Regular Dental Care for Dogs and Cats",
        excerpt: "Dental health is crucial for your pet's overall wellbeing. Discover why regular dental care should be part of your pet's routine.",
        content: "Many pet owners overlook dental care, but it's essential for preventing serious health issues...",
        author: "Dr. Michael Chen",
        publishDate: "2024-12-10",
        category: "Preventative Care",
        tags: ["dental", "dogs", "cats", "health"],
        image: "/images/blog/pet-dental-care.jpg",
        readTime: "7 min read",
        featured: false
      },
      {
        id: 3,
        title: "Understanding Pet Insurance: What Every Owner Should Know",
        excerpt: "Pet insurance can help manage unexpected veterinary costs. Here's what you need to know to make an informed decision.",
        content: "Pet insurance has become increasingly popular, but choosing the right policy can be confusing...",
        author: "Dr. Emma Thompson",
        publishDate: "2024-12-05",
        category: "Pet Ownership",
        tags: ["insurance", "costs", "planning", "health"],
        image: "/images/blog/pet-insurance.jpg",
        readTime: "6 min read",
        featured: false
      },
      {
        id: 4,
        title: "Signs Your Pet May Need Emergency Care",
        excerpt: "Knowing when your pet needs immediate veterinary attention can be life-saving. Learn the warning signs to watch for.",
        content: "Pet emergencies can happen at any time, and quick action can make all the difference...",
        author: "Dr. James Wilson",
        publishDate: "2024-11-28",
        category: "Emergency Care",
        tags: ["emergency", "symptoms", "urgent care", "health"],
        image: "/images/blog/pet-emergency.jpg",
        readTime: "8 min read",
        featured: false
      },
      {
        id: 5,
        title: "Introducing a New Pet to Your Home",
        excerpt: "Bringing home a new pet is exciting, but proper preparation is key to a smooth transition for everyone involved.",
        content: "Whether you're adopting your first pet or adding to your family, preparation is essential...",
        author: "Dr. Lisa Rodriguez",
        publishDate: "2024-11-20",
        category: "Pet Ownership",
        tags: ["new pet", "adoption", "preparation", "family"],
        image: "/images/blog/new-pet.jpg",
        readTime: "6 min read",
        featured: false
      },
      {
        id: 6,
        title: "Nutrition Essentials: Feeding Your Pet for Optimal Health",
        excerpt: "Proper nutrition is the foundation of good health. Learn how to choose the right food for your pet's specific needs.",
        content: "With so many pet food options available, choosing the right nutrition can feel overwhelming...",
        author: "Dr. Sarah Johnson",
        publishDate: "2024-11-15",
        category: "Nutrition",
        tags: ["nutrition", "food", "health", "diet"],
        image: "/images/blog/pet-nutrition.jpg",
        readTime: "9 min read",
        featured: true
      }
    ]);
  
    let categories = $state([
      "All Posts",
      "Preventative Care", 
      "Seasonal Care",
      "Pet Ownership",
      "Emergency Care",
      "Nutrition"
    ]);
  
    let selectedCategory = $state("All Posts");
    let searchQuery = $state("");
    let filteredPosts = $derived(() => {
      let posts = blogPosts;
      
      // Filter by category
      if (selectedCategory !== "All Posts") {
        posts = posts.filter(post => post.category === selectedCategory);
      }
      
      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        posts = posts.filter(post => 
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
      
      return posts;
    });
  
    let featuredPosts = $derived(() => blogPosts.filter(post => post.featured));
    let mounted = $state(false);
  
    onMount(() => {
      mounted = true;
    });
  
    function formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  
    function handleCategoryChange(category) {
      selectedCategory = category;
    }
  </script>
  
  <svelte:head>
    <title>Pet Care Blog - Bozzles Ark Vets</title>
    <meta name="description" content="Expert pet care advice, tips, and insights from the veterinary professionals at Bozzles Ark Vets. Keep your pets healthy and happy." />
  </svelte:head>
  
  <main class="main-content">
    <!-- Hero Section -->
    <section class="hero hero-small bg-primary">
      <div class="container">
        <div class="hero-content text-center">
          {#if mounted}
            <h1 class="hero-title text-white" in:fly={{ y: 30, duration: 600, delay: 100 }}>
              Pet Care Blog
            </h1>
            <p class="hero-subtitle text-white" in:fly={{ y: 30, duration: 600, delay: 200 }}>
              Expert advice and tips for keeping your pets healthy and happy
            </p>
          {/if}
        </div>
      </div>
    </section>
  
    <!-- Featured Posts -->
    {#if featuredPosts.length > 0}
      <section class="section">
        <div class="container">
          <h2 class="section-title text-center mb-4">Featured Articles</h2>
          <div class="featured-posts-grid">
            {#each featuredPosts as post, index (post.id)}
              <article class="featured-post-card card" in:fade={{ duration: 600, delay: index * 100 }}>
                <div class="card-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <div class="card-badge badge badge-primary">{post.category}</div>
                </div>
                <div class="card-body">
                  <div class="post-meta">
                    <span class="post-author">By {post.author}</span>
                    <span class="post-date">{formatDate(post.publishDate)}</span>
                    <span class="post-read-time">{post.readTime}</span>
                  </div>
                  <h3 class="post-title">
                    <a href="/blog/{post.id}" class="post-link">{post.title}</a>
                  </h3>
                  <p class="post-excerpt">{post.excerpt}</p>
                  <div class="post-tags">
                    {#each post.tags as tag}
                      <span class="tag">#{tag}</span>
                    {/each}
                  </div>
                  <a href="/blog/{post.id}" class="btn btn-outline btn-sm">Read More</a>
                </div>
              </article>
            {/each}
          </div>
        </div>
      </section>
    {/if}
  
    <!-- Search and Filter -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="blog-filters">
          <div class="search-box">
            <input
              type="text"
              placeholder="Search articles..."
              bind:value={searchQuery}
              class="form-input"
            />
            <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
            </svg>
          </div>
          
          <div class="category-filters">
            {#each categories as category}
              <button
                class="category-btn {selectedCategory === category ? 'active' : ''}"
                onclick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            {/each}
          </div>
        </div>
      </div>
    </section>
  
    <!-- Blog Posts Grid -->
    <section class="section">
      <div class="container">
        {#if filteredPosts.length > 0}
          <div class="blog-posts-grid">
            {#each filteredPosts as post, index (post.id)}
              <article class="blog-post-card card" in:fade={{ duration: 600, delay: index * 50 }}>
                <div class="card-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <div class="card-badge badge badge-secondary">{post.category}</div>
                </div>
                <div class="card-body">
                  <div class="post-meta">
                    <span class="post-author">By {post.author}</span>
                    <span class="post-date">{formatDate(post.publishDate)}</span>
                    <span class="post-read-time">{post.readTime}</span>
                  </div>
                  <h3 class="post-title">
                    <a href="/blog/{post.id}" class="post-link">{post.title}</a>
                  </h3>
                  <p class="post-excerpt">{post.excerpt}</p>
                  <div class="post-tags">
                    {#each post.tags as tag}
                      <span class="tag">#{tag}</span>
                    {/each}
                  </div>
                  <a href="/blog/{post.id}" class="btn btn-outline btn-sm">Read More</a>
                </div>
              </article>
            {/each}
          </div>
        {:else}
          <div class="no-results text-center py-8">
            <svg class="mx-auto mb-4 w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.007-5.824-2.709A7.962 7.962 0 016 9.5C6 5.91 8.686 3 12 3s6 2.91 6 6.5a7.963 7.963 0 01-.176 1.791z" />
            </svg>
            <h3 class="text-xl font-semibold mb-2">No articles found</h3>
            <p class="text-text-light">Try adjusting your search or filter criteria.</p>
          </div>
        {/if}
      </div>
    </section>
  
    <!-- Newsletter Signup -->
    <section class="section bg-primary text-white">
      <div class="container text-center">
        <h2 class="section-title text-white mb-2">Stay Updated</h2>
        <p class="section-subtitle text-white mb-6">
          Subscribe to our newsletter for the latest pet care tips and practice updates
        </p>
        <form class="newsletter-form">
          <div class="form-group-inline">
            <input
              type="email"
              placeholder="Enter your email address"
              class="form-input"
              required
            />
            <button type="submit" class="btn btn-secondary">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  </main>
  
  <style>
    /* Hero adjustments for blog */
    .hero-small {
      padding: 4rem 0;
    }
  
    /* Featured posts */
    .featured-posts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
  
    .featured-post-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      align-items: center;
      min-height: 300px;
    }
  
    .featured-post-card:nth-child(even) {
      direction: rtl;
    }
  
    .featured-post-card:nth-child(even) .card-body {
      direction: ltr;
    }
  
    /* Blog filters */
    .blog-filters {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      margin-bottom: 3rem;
    }
  
    .search-box {
      position: relative;
      margin-bottom: 1.5rem;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
  
    .search-icon {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      color: var(--text-lighter);
    }
  
    .category-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
    }
  
    .category-btn {
      padding: 0.5rem 1rem;
      border: 2px solid var(--border);
      background: white;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }
  
    .category-btn:hover {
      border-color: var(--primary);
      color: var(--primary);
    }
  
    .category-btn.active {
      background: var(--primary);
      border-color: var(--primary);
      color: white;
    }
  
    /* Blog posts grid */
    .blog-posts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }
  
    .blog-post-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  
    .blog-post-card .card-body {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  
    .blog-post-card .btn {
      margin-top: auto;
      width: fit-content;
    }
  
    /* Card image */
    .card-image {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      aspect-ratio: 16/9;
    }
  
    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  
    .card:hover .card-image img {
      transform: scale(1.05);
    }
  
    .card-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      font-size: 0.75rem;
      font-weight: 600;
    }
  
    /* Post meta */
    .post-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      font-size: 0.875rem;
      color: var(--text-light);
      margin-bottom: 1rem;
    }
  
    .post-meta span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
  
    /* Post title */
    .post-title {
      margin-bottom: 1rem;
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.4;
    }
  
    .post-link {
      color: var(--text);
      text-decoration: none;
      transition: color 0.2s ease;
    }
  
    .post-link:hover {
      color: var(--primary);
    }
  
    /* Post excerpt */
    .post-excerpt {
      color: var(--text-light);
      line-height: 1.6;
      margin-bottom: 1rem;
      flex: 1;
    }
  
    /* Tags */
    .post-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
  
    .tag {
      font-size: 0.75rem;
      color: var(--primary);
      background: rgba(26, 60, 110, 0.1);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-weight: 500;
    }
  
    /* Newsletter form */
    .newsletter-form {
      max-width: 500px;
      margin: 0 auto;
    }
  
    .form-group-inline {
      display: flex;
      gap: 1rem;
    }
  
    .form-group-inline .form-input {
      flex: 1;
    }
  
    /* No results */
    .no-results {
      padding: 4rem 0;
    }
  
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .featured-posts-grid {
        grid-template-columns: 1fr;
      }
  
      .featured-post-card {
        grid-template-columns: 1fr;
        text-align: center;
      }
  
      .featured-post-card:nth-child(even) {
        direction: ltr;
      }
  
      .blog-posts-grid {
        grid-template-columns: 1fr;
      }
  
      .category-filters {
        justify-content: flex-start;
      }
  
      .form-group-inline {
        flex-direction: column;
        gap: 1rem;
      }
  
      .blog-filters {
        padding: 1.5rem;
      }
    }
  
    @media (max-width: 480px) {
      .hero-small {
        padding: 3rem 0;
      }
  
      .featured-posts-grid {
        gap: 1.5rem;
      }
  
      .blog-posts-grid {
        gap: 1.5rem;
      }
    }
  </style>