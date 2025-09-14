<!-- src/routes/blog/[id]/+page.svelte -->
<script>
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    
    // This would typically come from your page data loader
    // For demo purposes, using the same data structure as the blog listing
    let blogPosts = [
      {
        id: 1,
        title: "Winter Pet Care: Keeping Your Furry Friends Safe in Cold Weather",
        excerpt: "As temperatures drop, it's important to take extra care of our pets. Learn essential tips for winter pet safety and comfort.",
        content: `
          <p>Winter can be challenging for pets, especially those not accustomed to cold temperatures. As responsible pet owners, it's crucial to understand how to keep our furry friends safe, comfortable, and healthy during the colder months.</p>
  
          <h2>Understanding Cold Weather Risks</h2>
          <p>Just like humans, pets can suffer from hypothermia and frostbite. Smaller pets, elderly animals, and those with health conditions are particularly vulnerable to cold weather. Signs that your pet is too cold include:</p>
          <ul>
            <li>Shivering or trembling</li>
            <li>Lifting paws frequently</li>
            <li>Reluctance to go outside</li>
            <li>Seeking warm places to hide</li>
            <li>Whining or showing signs of distress</li>
          </ul>
  
          <h2>Essential Winter Care Tips</h2>
          <h3>1. Proper Clothing and Protection</h3>
          <p>Consider investing in a quality pet jacket or sweater, especially for short-haired breeds, small dogs, and cats that go outdoors. Ensure the clothing fits properly and doesn't restrict movement.</p>
  
          <h3>2. Paw Protection</h3>
          <p>Salt and ice-melting chemicals can be harsh on pet paws. Consider using pet-safe ice melt products and always wipe your pet's paws after walks. Pet booties can provide additional protection.</p>
  
          <h3>3. Indoor Comfort</h3>
          <p>Provide warm, comfortable sleeping areas away from drafts. Heated pet beds can be beneficial for older pets or those with arthritis.</p>
  
          <h3>4. Nutrition and Hydration</h3>
          <p>Pets may need more calories in winter to maintain body heat, especially if they spend time outdoors. Ensure fresh, unfrozen water is always available.</p>
  
          <h2>When to Seek Veterinary Care</h2>
          <p>Contact us immediately if you notice signs of frostbite (pale or gray skin, ice crystals on fur) or hypothermia (severe shivering, lethargy, difficulty walking). Quick action can prevent serious complications.</p>
  
          <p>Remember, if it's too cold for you, it's probably too cold for your pet. When in doubt, keep them indoors and warm. Your pets depend on you for their safety and comfort during winter months.</p>
        `,
        author: "Dr. Sarah Johnson",
        authorBio: "Dr. Johnson has been practicing veterinary medicine for over 15 years, specializing in preventative care and emergency medicine.",
        authorImage: "/images/team/dr-johnson.jpg",
        publishDate: "2024-12-15",
        lastUpdated: "2024-12-15",
        category: "Seasonal Care",
        tags: ["winter", "safety", "cold weather", "pets"],
        image: "/images/blog/winter-pet-care.jpg",
        readTime: "5 min read",
        featured: true
      },
      // Add other posts here...
    ];
  
    let currentPost = $state(null);
    let relatedPosts = $state([]);
    let mounted = $state(false);
    let postId = $derived($page.params.id);
  
    // Simulate loading post data
    $effect(() => {
      if (postId) {
        const post = blogPosts.find(p => p.id.toString() === postId);
        currentPost = post || null;
        
        // Get related posts (same category, excluding current post)
        if (post) {
          relatedPosts = blogPosts
            .filter(p => p.id !== post.id && p.category === post.category)
            .slice(0, 3);
        }
      }
    });
  
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
  
    function shareArticle(platform) {
      const url = window.location.href;
      const title = currentPost?.title || '';
      
      let shareUrl = '';
      switch(platform) {
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
          break;
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
          break;
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
          break;
      }
      
      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    }
  </script>
  
  <svelte:head>
    {#if currentPost}
      <title>{currentPost.title} - Bozzles Ark Vets Blog</title>
      <meta name="description" content={currentPost.excerpt} />
      <meta property="og:title" content={currentPost.title} />
      <meta property="og:description" content={currentPost.excerpt} />
      <meta property="og:image" content={currentPost.image} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
    {:else}
      <title>Blog Post - Bozzles Ark Vets</title>
    {/if}
  </svelte:head>
  
  <main class="main-content">
    {#if currentPost}
      <!-- Breadcrumb -->
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <div class="container">
          <ol class="breadcrumb-list">
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li aria-current="page">{currentPost.title}</li>
          </ol>
        </div>
      </nav>
  
      <!-- Article Header -->
      <article class="article">
        <header class="article-header">
          <div class="container">
            {#if mounted}
              <div class="article-meta" in:fade={{ duration: 600, delay: 100 }}>
                <span class="article-category badge badge-primary">{currentPost.category}</span>
                <span class="article-date">{formatDate(currentPost.publishDate)}</span>
                <span class="article-read-time">{currentPost.readTime}</span>
              </div>
              
              <h1 class="article-title" in:fly={{ y: 30, duration: 600, delay: 200 }}>
                {currentPost.title}
              </h1>
              
              <p class="article-excerpt" in:fade={{ duration: 600, delay: 300 }}>
                {currentPost.excerpt}
              </p>
  
              <div class="article-author" in:fade={{ duration: 600, delay: 400 }}>
                <img src={currentPost.authorImage} alt={currentPost.author} class="author-avatar" />
                <div class="author-info">
                  <h3 class="author-name">{currentPost.author}</h3>
                  <p class="author-bio">{currentPost.authorBio}</p>
                </div>
              </div>
  
              <div class="article-share" in:fade={{ duration: 600, delay: 500 }}>
                <span class="share-label">Share this article:</span>
                <div class="share-buttons">
                  <button class="share-btn facebook" onclick={() => shareArticle('facebook')}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button class="share-btn twitter" onclick={() => shareArticle('twitter')}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button class="share-btn linkedin" onclick={() => shareArticle('linkedin')}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
            {/if}
          </div>
        </header>
  
        <!-- Article Image -->
        <div class="article-image">
          <div class="container">
            <img src={currentPost.image} alt={currentPost.title} loading="lazy" />
          </div>
        </div>
  
        <!-- Article Content -->
        <div class="article-content">
          <div class="container">
            <div class="content-wrapper">
              <div class="article-body">
                {@html currentPost.content}
              </div>
  
              <!-- Article Tags -->
              <div class="article-tags">
                <h4>Tags:</h4>
                <div class="tags-list">
                  {#each currentPost.tags as tag}
                    <a href="/blog?tag={tag}" class="tag">#{tag}</a>
                  {/each}
                </div>
              </div>
  
              <!-- Article Footer -->
              <footer class="article-footer">
                <div class="article-dates">
                  <p><strong>Published:</strong> {formatDate(currentPost.publishDate)}</p>
                  {#if currentPost.lastUpdated !== currentPost.publishDate}
                    <p><strong>Last Updated:</strong> {formatDate(currentPost.lastUpdated)}</p>
                  {/if}
                </div>
                
                <div class="author-card">
                  <img src={currentPost.authorImage} alt={currentPost.author} class="author-avatar-large" />
                  <div class="author-details">
                    <h4 class="author-name">{currentPost.author}</h4>
                    <p class="author-bio-extended">{currentPost.authorBio}</p>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </article>
  
      <!-- Related Articles -->
      {#if relatedPosts.length > 0}
        <section class="related-articles section bg-gray-50">
          <div class="container">
            <h2 class="section-title text-center mb-4">Related Articles</h2>
            <div class="related-posts-grid">
              {#each relatedPosts as post, index (post.id)}
                <article class="related-post-card card" in:fade={{ duration: 600, delay: index * 100 }}>
                  <div class="card-image">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <div class="card-badge badge badge-secondary">{post.category}</div>
                  </div>
                  <div class="card-body">
                    <div class="post-meta">
                      <span class="post-date">{formatDate(post.publishDate)}</span>
                      <span class="post-read-time">{post.readTime}</span>
                    </div>
                    <h3 class="post-title">
                      <a href="/blog/{post.id}" class="post-link">{post.title}</a>
                    </h3>
                    <p class="post-excerpt">{post.excerpt}</p>
                    <a href="/blog/{post.id}" class="btn btn-outline btn-sm">Read More</a>
                  </div>
                </article>
              {/each}
            </div>
          </div>
        </section>
      {/if}
  
      <!-- Call to Action -->
      <section class="section bg-primary text-white">
        <div class="container text-center">
          <h2 class="section-title text-white mb-2">Need Professional Pet Care?</h2>
          <p class="section-subtitle text-white mb-6">
            Our experienced veterinary team is here to help keep your pets healthy and happy
          </p>
          <div class="cta-buttons">
            <a href="/appointments" class="btn btn-secondary btn-lg">Book Appointment</a>
            <a href="/contact" class="btn btn-outline btn-lg btn-white">Contact Us</a>
          </div>
        </div>
      </section>
  
    {:else}
      <!-- Loading or Not Found State -->
      <div class="container py-8 text-center">
        <h1>Article Not Found</h1>
        <p class="mb-4">The article you're looking for doesn't exist or has been moved.</p>
        <a href="/blog" class="btn btn-primary">Back to Blog</a>
      </div>
    {/if}
  </main>
  
  <style>
    /* Breadcrumb */
    .breadcrumb {
      background: var(--gray-50);
      padding: 1rem 0;
      border-bottom: 1px solid var(--border);
    }
  
    .breadcrumb-list {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 0.875rem;
    }
  
    .breadcrumb-list li {
      display: flex;
      align-items: center;
    }
  
    .breadcrumb-list li:not(:last-child)::after {
      content: '/';
      margin-left: 0.5rem;
      color: var(--text-light);
    }
  
    .breadcrumb-list a {
      color: var(--primary);
      text-decoration: none;
    }
  
    .breadcrumb-list a:hover {
      text-decoration: underline;
    }
  
    .breadcrumb-list li[aria-current="page"] {
      color: var(--text-light);
      font-weight: 500;
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  
    /* Article Header */
    .article-header {
      padding: 3rem 0;
      background: linear-gradient(135deg, var(--gray-50) 0%, white 100%);
    }
  
    .article-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
    }
  
    .article-category {
      font-size: 0.75rem;
      font-weight: 600;
    }
  
    .article-date,
    .article-read-time {
      color: var(--text-light);
    }
  
    .article-title {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      color: var(--text);
    }
  
    .article-excerpt {
      font-size: 1.25rem;
      line-height: 1.6;
      color: var(--text-light);
      margin-bottom: 2rem;
      max-width: 800px;
    }
  
    .article-author {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid var(--border);
    }
  
    .author-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }
  
    .author-name {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
  
    .author-bio {
      font-size: 0.875rem;
      color: var(--text-light);
      line-height: 1.5;
    }
  
    .article-share {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
  
    .share-label {
      font-weight: 500;
      color: var(--text-light);
    }
  
    .share-buttons {
      display: flex;
      gap: 0.5rem;
    }
  
    .share-btn {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }
  
    .share-btn svg {
      width: 18px;
      height: 18px;
    }
  
    .share-btn.facebook {
      background: #1877f2;
      color: white;
    }
  
    .share-btn.facebook:hover {
      background: #166fe5;
    }
  
    .share-btn.twitter {
      background: #1da1f2;
      color: white;
    }
  
    .share-btn.twitter:hover {
      background: #1991db;
    }
  
    .share-btn.linkedin {
      background: #0a66c2;
      color: white;
    }
  
    .share-btn.linkedin:hover {
      background: #095bb0;
    }
  
    /* Article Image */
    .article-image {
      margin-bottom: 3rem;
    }
  
    .article-image img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 12px;
    }
  
    /* Article Content */
    .article-content {
      margin-bottom: 3rem;
    }
  
    .content-wrapper {
      max-width: 800px;
      margin: 0 auto;
    }
  
    .article-body {
      font-size: 1.125rem;
      line-height: 1.8;
      color: var(--text);
    }
  
    .article-body h2 {
      font-size: 1.875rem;
      font-weight: 600;
      margin: 2.5rem 0 1rem 0;
      color: var(--primary);
    }
  
    .article-body h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 2rem 0 0.75rem 0;
      color: var(--text);
    }
  
    .article-body p {
      margin-bottom: 1.5rem;
    }
  
    .article-body ul,
    .article-body ol {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
    }
  
    .article-body li {
      margin-bottom: 0.5rem;
    }
  
    .article-body blockquote {
      border-left: 4px solid var(--primary);
      padding-left: 1.5rem;
      margin: 2rem 0;
      font-style: italic;
      color: var(--text-light);
    }
  
    /* Article Tags */
    .article-tags {
      margin: 3rem 0;
      padding: 2rem 0;
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }
  
    .article-tags h4 {
      margin-bottom: 1rem;
      font-size: 1.125rem;
      font-weight: 600;
    }
  
    .tags-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  
    .tag {
      font-size: 0.875rem;
      color: var(--primary);
      background: rgba(26, 60, 110, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.2s ease;
    }
  
    .tag:hover {
      background: var(--primary);
      color: white;
    }
  
    /* Article Footer */
    .article-footer {
      margin-top: 3rem;
    }
  
    .article-dates {
      margin-bottom: 2rem;
      font-size: 0.875rem;
      color: var(--text-light);
    }
  
    .article-dates p {
      margin-bottom: 0.5rem;
    }
  
    .author-card {
      display: flex;
      gap: 1.5rem;
      padding: 2rem;
      background: var(--gray-50);
      border-radius: 12px;
    }
  
    .author-avatar-large {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
    }
  
    .author-details h4 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
  
    .author-bio-extended {
      color: var(--text-light);
      line-height: 1.6;
    }
  
    /* Related Articles */
    .related-posts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
  
    .related-post-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  
    .related-post-card .card-body {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  
    .related-post-card .btn {
      margin-top: auto;
      width: fit-content;
    }
  
    /* CTA Buttons */
    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
  
    .btn-white {
      border-color: white;
      color: white;
    }
  
    .btn-white:hover {
      background: white;
      color: var(--primary);
    }
  
    /* Responsive Design */
    @media (max-width: 768px) {
      .article-title {
        font-size: 2rem;
      }
  
      .article-excerpt {
        font-size: 1.125rem;
      }
  
      .article-author {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }
  
      .article-share {
        justify-content: center;
      }
  
      .article-image img {
        height: 250px;
      }
  
      .article-body {
        font-size: 1rem;
      }
  
      .article-body h2 {
        font-size: 1.5rem;
      }
  
      .article-body h3 {
        font-size: 1.25rem;
      }
  
      .author-card {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }
  
      .author-avatar-large {
        margin: 0 auto;
      }
  
      .related-posts-grid {
        grid-template-columns: 1fr;
      }
  
      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }
  
      .breadcrumb-list li[aria-current="page"] {
        max-width: 200px;
      }
    }
  
    @media (max-width: 480px) {
      .article-header {
        padding: 2rem 0;
      }
  
      .article-title {
        font-size: 1.75rem;
      }
  
      .article-excerpt {
        font-size: 1rem;
      }
  
      .article-meta {
        justify-content: center;
      }
  
      .article-image img {
        height: 200px;
        border-radius: 8px;
      }
  
      .author-card {
        padding: 1.5rem;
      }
    }
  </style>