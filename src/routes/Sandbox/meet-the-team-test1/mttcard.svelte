<!-- src/lib/components/TeamMemberCard.svelte -->
<script>
  import { fly, scale } from 'svelte/transition';
  
  // Props
  let { member, featured = false } = $props();
  
  // State
  let isExpanded = $state(false);
  let isImageLoaded = $state(false);
  let showQuote = $state(false);
  
  // Fun quotes for hover effects
  const quotes = [
    "Every pet deserves the best care",
    "Compassion is at the heart of everything we do",
    "Making tails wag and hearts happy",
    "Your pet's health is our passion",
    "Caring for pets is more than a job, it's a calling"
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  function toggleExpanded() {
    isExpanded = !isExpanded;
  }
  
  function handleImageLoad() {
    isImageLoaded = true;
  }
  
  function handleMouseEnter() {
    showQuote = true;
  }
  
  function handleMouseLeave() {
    showQuote = false;
  }
  
  function handleBooking() {
    // In a real app, this would navigate to booking page with pre-selected staff
    window.location.href = `/book?staff=${member.id}`;
  }
</script>

<article 
  class="team-member-card"
  class:featured
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  role="article"
  aria-label={`${member.name}, ${member.role}`}
>
  <!-- Member Photo -->
  <div class="member-photo-container">
    <div class="member-photo">
      {#if !isImageLoaded}
        <div class="photo-skeleton" in:scale={{ duration: 300 }}>
          <div class="skeleton-avatar"></div>
        </div>
      {/if}
      
      <img 
        src={member.image} 
        alt={`${member.name} - ${member.role} at Bozzles Ark Vets`}
        class="member-image"
        class:loaded={isImageLoaded}
        onload={handleImageLoad}
        loading="lazy"
      />
      
      <!-- Hover Quote Overlay -->
      {#if showQuote}
        <div 
          class="quote-overlay" 
          in:fly={{ y: 20, duration: 300 }}
          out:fly={{ y: -20, duration: 200 }}
        >
          <p class="quote-text">"{randomQuote}"</p>
        </div>
      {/if}
      
      <!-- Experience Badge -->
      <div class="experience-badge">
        <span class="experience-years">{member.yearsExperience}</span>
        <span class="experience-label">Years</span>
      </div>
    </div>
  </div>
  
  <!-- Member Information -->
  <div class="member-info">
    <!-- Header -->
    <header class="member-header">
      <h3 class="member-name">{member.name}</h3>
      <p class="member-role">{member.role}</p>
      <p class="member-qualifications">{member.qualifications}</p>
    </header>
    
    <!-- Specialties -->
    <div class="member-specialties">
      <h4 class="specialties-title">Specialties</h4>
      <div class="specialties-list">
        {#each member.specialties as specialty}
          <span class="specialty-badge">{specialty}</span>
        {/each}
      </div>
    </div>
    
    <!-- Bio -->
    <div class="member-bio">
      <p class="bio-text">{member.bio}</p>
    </div>
    
    <!-- Expandable Personal Note -->
    <div class="personal-section">
      <button 
        class="personal-toggle"
        onclick={toggleExpanded}
        aria-expanded={isExpanded}
        aria-controls={`personal-note-${member.id}`}
      >
        <span>Personal Note</span>
        <svg 
          class="toggle-icon"
          class:expanded={isExpanded}
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      {#if isExpanded}
        <div 
          id={`personal-note-${member.id}`}
          class="personal-note" 
          in:fly={{ y: -10, duration: 300 }}
          out:fly={{ y: -10, duration: 200 }}
        >
          <p>{member.personalNote}</p>
        </div>
      {/if}
    </div>
    
    <!-- Actions -->
    <div class="member-actions">
      <button 
        class="btn btn-primary btn-sm"
        onclick={handleBooking}
      >
        Book with {member.name.split(' ')[0]}
      </button>
      
      {#if featured}
        <a href="/contact" class="btn btn-outline-primary btn-sm">
          Contact Practice
        </a>
      {/if}
    </div>
  </div>
</article>

<style>
  .team-member-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    transition: all 0.3s ease;
    height: fit-content;
    position: relative;
  }

  .team-member-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .team-member-card.featured {
    border: 2px solid var(--primary-light);
  }

  .team-member-card.featured::before {
    content: 'Leadership';
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--primary);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 2;
  }

  /* Photo Section */
  .member-photo-container {
    position: relative;
    height: 280px;
    overflow: hidden;
  }

  .member-photo {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .photo-skeleton {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gray-200);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .skeleton-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(90deg, var(--gray-300) 25%, var(--gray-200) 50%, var(--gray-300) 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .member-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
    opacity: 0;
  }

  .member-image.loaded {
    opacity: 1;
  }

  .team-member-card:hover .member-image {
    transform: scale(1.05);
  }

  /* Quote Overlay */
  .quote-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(26, 60, 110, 0.9));
    padding: 2rem 1.5rem 1.5rem;
    color: white;
  }

  .quote-text {
    font-style: italic;
    font-size: 0.9rem;
    margin: 0;
    text-align: center;
  }

  /* Experience Badge */
  .experience-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    padding: 0.5rem;
    text-align: center;
    min-width: 60px;
  }

  .experience-years {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary);
    line-height: 1;
  }

  .experience-label {
    display: block;
    font-size: 0.75rem;
    color: var(--text-light);
    font-weight: 500;
  }

  /* Member Information */
  .member-info {
    padding: 1.5rem;
  }

  .member-header {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .member-name {
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 0.5rem;
  }

  .member-role {
    font-size: 1rem;
    color: var(--secondary);
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .member-qualifications {
    font-size: 0.875rem;
    color: var(--text-light);
    font-weight: 500;
  }

  /* Specialties */
  .member-specialties {
    margin-bottom: 1.5rem;
  }

  .specialties-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.75rem;
  }

  .specialties-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .specialty-badge {
    background: var(--primary-light);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  /* Bio */
  .member-bio {
    margin-bottom: 1.5rem;
  }

  .bio-text {
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--text-light);
  }

  /* Personal Section */
  .personal-section {
    margin-bottom: 1.5rem;
  }

  .personal-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem;
    background: var(--gray-50);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--primary);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .personal-toggle:hover {
    background: var(--gray-100);
    border-color: var(--primary-light);
  }

  .toggle-icon {
    transition: transform 0.3s ease;
  }

  .toggle-icon.expanded {
    transform: rotate(180deg);
  }

  .personal-note {
    margin-top: 0.75rem;
    padding: 1rem;
    background: var(--gray-50);
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .personal-note p {
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--text-light);
    margin: 0;
    font-style: italic;
  }

  /* Actions */
  .member-actions {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .member-actions .btn {
    flex: 1;
    min-width: 120px;
  }

  /* Featured Card Modifications */
  .team-member-card.featured {
    background: linear-gradient(135deg, #fafbfc 0%, #f7fafc 100%);
  }

  .team-member-card.featured .member-photo-container {
    height: 320px;
  }

  .team-member-card.featured .member-name {
    font-size: 1.5rem;
  }

  .team-member-card.featured .member-role {
    font-size: 1.125rem;
  }

  .team-member-card.featured .specialty-badge {
    background: var(--secondary);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .member-photo-container {
      height: 240px;
    }

    .team-member-card.featured .member-photo-container {
      height: 280px;
    }

    .member-info {
      padding: 1.25rem;
    }

    .member-name {
      font-size: 1.25rem;
    }

    .team-member-card.featured .member-name {
      font-size: 1.375rem;
    }

    .member-actions {
      flex-direction: column;
    }

    .member-actions .btn {
      flex: none;
    }
  }

  @media (max-width: 480px) {
    .member-photo-container {
      height: 200px;
    }

    .team-member-card.featured .member-photo-container {
      height: 240px;
    }

    .member-info {
      padding: 1rem;
    }

    .experience-badge {
      top: 0.75rem;
      left: 0.75rem;
    }

    .specialties-list {
      justify-content: center;
    }

    .specialty-badge {
      font-size: 0.7rem;
      padding: 0.2rem 0.6rem;
    }
  }
</style>