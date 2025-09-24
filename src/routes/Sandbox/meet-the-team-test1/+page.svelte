<!-- src/routes/team/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import TeamMemberCard from './mttcard.svelte';
  import { page } from '$app/stores';

  // Team data - in real app, this would come from +page.js or API
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Principal Veterinary Surgeon",
      category: "veterinary-surgeons",
      qualifications: "BVSc, MRCVS",
      image: "/JJB.jpg",
      bio: "Dr. Mitchell graduated from the Royal Veterinary College in 2015 and has been passionate about small animal surgery and internal medicine ever since. She founded Bozzles Ark Vets with a vision to provide compassionate, modern veterinary care to the local community.",
      specialties: ["Surgery", "Internal Medicine", "Emergency Care"],
      personalNote: "Sarah shares her home with two rescue cats, Muffin and Biscuit, and enjoys hiking in the Peak District on weekends.",
      yearsExperience: 8
    },
    {
      id: 2,
      name: "Dr. James Thompson",
      role: "Senior Veterinary Surgeon",
      category: "veterinary-surgeons",
      qualifications: "BVSc, MRCVS, CertSAM",
      image: "/Sergio_Rodriguez.webp",
      bio: "With over 12 years of experience, Dr. Thompson specializes in dermatology and exotic animal care. He joined our team in 2020 and has been instrumental in developing our specialized services for rabbits, birds, and reptiles.",
      specialties: ["Dermatology", "Exotic Animals", "Diagnostic Imaging"],
      personalNote: "James is the proud owner of a bearded dragon named Spike and volunteers at local wildlife rescue centers.",
      yearsExperience: 12
    },
    {
      id: 3,
      name: "Dr. Emily Carter",
      role: "Associate Veterinary Surgeon",
      category: "veterinary-surgeons",
      qualifications: "BVSc, MRCVS",
      image: "/images/team/dr-emily-carter.jpg",
      bio: "Dr. Carter is our newest team member, having graduated from Liverpool University in 2021. She brings fresh perspectives and a particular interest in preventive care and client education.",
      specialties: ["Preventive Care", "Vaccinations", "Puppy & Kitten Health"],
      personalNote: "Emily has a golden retriever called Buddy and loves baking homemade dog treats for the practice patients.",
      yearsExperience: 2
    },
    {
      id: 4,
      name: "Lisa Williams",
      role: "Head Veterinary Nurse",
      category: "veterinary-nurses",
      qualifications: "RVN, VTS (Anesthesia)",
      image: "/Sergio_Rodriguez.webp",
      bio: "Lisa has been with us since 2018 and leads our nursing team with expertise in anesthesia and surgical nursing. She's passionate about pain management and post-operative care.",
      specialties: ["Anesthesia", "Surgical Nursing", "Pain Management"],
      personalNote: "Lisa has three dogs and two cats at home and is training for her first marathon this year.",
      yearsExperience: 10
    },
    {
      id: 5,
      name: "Michael Davies",
      role: "Senior Veterinary Nurse",
      category: "veterinary-nurses",
      qualifications: "RVN, Cert IV (Veterinary Nursing)",
      image: "/images/team/michael-davies.jpg",
      bio: "Michael joined our team in 2019 and specializes in emergency and critical care. He's known for his calm demeanor during stressful situations and excellent client communication skills.",
      specialties: ["Emergency Care", "Critical Care", "Client Education"],
      personalNote: "Michael is an amateur photographer who loves capturing wildlife and donates prints to raise funds for animal charities.",
      yearsExperience: 7
    },
    {
      id: 6,
      name: "Rachel Green",
      role: "Veterinary Nurse",
      category: "veterinary-nurses",
      qualifications: "RVN",
      image: "/images/team/rachel-green.jpg",
      bio: "Rachel graduated from Hartpury College in 2020 and has quickly become an integral part of our team. She has a special interest in dental care and laboratory work.",
      specialties: ["Dental Care", "Laboratory Work", "Wound Management"],
      personalNote: "Rachel has a passion for horse riding and volunteers at a local equine sanctuary on weekends.",
      yearsExperience: 3
    },
    {
      id: 7,
      name: "Amanda Foster",
      role: "Practice Manager",
      category: "support-staff",
      qualifications: "NEBOSH, Cert PM",
      image: "/images/team/amanda-foster.jpg",
      bio: "Amanda has been managing veterinary practices for over 15 years and joined Bozzles Ark Vets in 2019. She ensures everything runs smoothly and oversees our client care standards.",
      specialties: ["Practice Management", "Client Relations", "Team Development"],
      personalNote: "Amanda is a keen gardener and brings fresh flowers from her garden to brighten up the reception area.",
      yearsExperience: 15
    },
    {
      id: 8,
      name: "Tom Richards",
      role: "Senior Receptionist",
      category: "support-staff",
      qualifications: "Customer Service Excellence",
      image: "/images/team/tom-richards.jpg",
      bio: "Tom is often the first friendly face you'll meet at Bozzles Ark Vets. He's been with us since 2020 and is expert at scheduling appointments and helping clients with their queries.",
      specialties: ["Client Care", "Appointment Scheduling", "Insurance Claims"],
      personalNote: "Tom is a local football coach and has a rescue dog named Chester who sometimes visits the practice.",
      yearsExperience: 5
    }
  ];

  // State management using Svelte 5 runes
  let selectedCategory = $state('all');
  let searchQuery = $state('');
  let isLoading = $state(true);

  // Derived state for filtered team members
  let filteredMembers = $derived(() => {
    let filtered = teamMembers;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(member => member.category === selectedCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(member => 
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.specialties.some(specialty => specialty.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  });

  // Categories for filtering
  const categories = [
    { value: 'all', label: 'All Team Members' },
    { value: 'veterinary-surgeons', label: 'Veterinary Surgeons' },
    { value: 'veterinary-nurses', label: 'Veterinary Nurses' },
    { value: 'support-staff', label: 'Support Staff' }
  ];

  // Leadership team (featured members)
  const leadership = teamMembers.filter(member => 
    member.role.includes('Principal') || member.role.includes('Head') || member.role.includes('Manager')
  );

  onMount(() => {
    // Simulate loading delay for smooth transition
    setTimeout(() => {
      isLoading = false;
    }, 300);
  });

  function handleCategoryChange(category) {
    selectedCategory = category;
  }

  function clearSearch() {
    searchQuery = '';
  }
</script>

<svelte:head>
  <title>Meet Our Caring Team | Bozzles Ark Vets - Barwell</title>
  <meta name="description" content="Get to know the friendly, qualified veterinary surgeons, nurses, and support staff at Bozzles Ark Vets. Compassionate care for all creatures great and small." />
  <meta name="keywords" content="veterinary team, qualified vets, veterinary nurses, Barwell vets, animal care professionals" />
  
  <!-- Schema.org structured data -->
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Bozzles Ark Vets",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "39 Jersey Way",
        "addressLocality": "Barwell",
        "postalCode": "LE9 8HR",
        "addressCountry": "GB"
      },
      "employee": teamMembers.map(member => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.role,
        "image": `https://bozzlesarkvets.com${member.image}`,
        "description": member.bio,
        "worksFor": {
          "@type": "Organization",
          "name": "Bozzles Ark Vets"
        }
      }))
    })}
  </script>
</svelte:head>

<main class="team-page">
  <!-- Page Header -->
  <section class="page-header bg-gradient-primary text-white">
    <div class="container">
      <div class="page-header-content">
        <h1 class="page-title" in:fly={{ y: 30, duration: 600, delay: 100 }}>
          Meet Our Caring Team
        </h1>
        <p class="page-subtitle" in:fly={{ y: 30, duration: 600, delay: 200 }}>
          Get to know the passionate professionals who provide compassionate care for all creatures great and small
        </p>
        <div class="page-header-actions" in:fly={{ y: 30, duration: 600, delay: 300 }}>
          <a href="/book" class="btn btn-secondary">Book an Appointment</a>
          <a href="/register" class="btn btn-outline-white">Register Your Pet</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Introduction Section -->
  <section class="team-intro">
    <div class="container">
      <div class="intro-content">
        <h2>Our Commitment to Excellence</h2>
        <p>
          At Bozzles Ark Vets, our team is united by a shared passion for animal welfare and a commitment 
          to providing the highest standard of veterinary care. Each member brings unique expertise and 
          experience, ensuring your beloved pets receive comprehensive, compassionate treatment.
        </p>
      </div>
    </div>
  </section>

  <!-- Leadership Spotlight -->
  {#if leadership.length > 0}
    <section class="leadership-section" in:fade={{ duration: 600 }}>
      <div class="container">
        <h2 class="section-title">Practice Leadership</h2>
        <div class="leadership-grid">
          {#each leadership as leader (leader.id)}
            <div class="leadership-card" in:fly={{ y: 30, duration: 600 }}>
              <TeamMemberCard member={leader} featured={true} />
            </div>
          {/each}
        </div>
      </div>
    </section>
  {/if}

  <!-- Team Filters and Search -->
  <section class="team-filters">
    <div class="container">
      <div class="filters-container">
        <!-- Category Filters -->
        <div class="filter-tabs">
          {#each categories as category (category.value)}
            <button 
              class="filter-tab"
              class:active={selectedCategory === category.value}
              onclick={() => handleCategoryChange(category.value)}
            >
              {category.label}
            </button>
          {/each}
        </div>

        <!-- Search Bar -->
        <div class="search-container">
          <input 
            type="text" 
            placeholder="Search team members..." 
            class="search-input"
            bind:value={searchQuery}
          />
          {#if searchQuery}
            <button class="search-clear" onclick={clearSearch}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          {/if}
        </div>
      </div>
    </div>
  </section>

  <!-- Team Members Grid -->
  <section class="team-members">
    <div class="container">
      {#if isLoading}
        <div class="loading-grid">
          {#each Array(6) as _, i}
            <div class="loading-card" in:fade={{ duration: 300, delay: i * 100 }}></div>
          {/each}
        </div>
      {:else if filteredMembers.length === 0}
        <div class="no-results" in:fade={{ duration: 400 }}>
          <p>No team members found matching your search criteria.</p>
          <button class="btn btn-outline-primary" onclick={() => { searchQuery = ''; selectedCategory = 'all'; }}>
            Show All Team Members
          </button>
        </div>
      {:else}
        <div class="team-grid">
          {#each filteredMembers as member, index (member.id)}
            <div class="team-member-wrapper" in:fly={{ y: 30, duration: 600, delay: index * 100 }}>
              <TeamMemberCard {member} />
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </section>

  <!-- Call to Action -->
  <section class="team-cta bg-gray-50">
    <div class="container">
      <div class="cta-content text-center">
        <h2>Ready to Meet Our Team?</h2>
        <p>Book an appointment today and experience the caring, professional service that sets Bozzles Ark Vets apart.</p>
        <div class="cta-actions">
          <a href="/book" class="btn btn-primary">Book an Appointment</a>
          <a href="/contact" class="btn btn-outline-primary">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .team-page {
    min-height: 100vh;
  }

  /* Page Header */
  .page-header {
    padding: 80px 0;
    position: relative;
    overflow: hidden;
  }

  .page-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    opacity: 0.9;
  }

  .page-header-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .page-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .page-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
    line-height: 1.6;
  }

  .page-header-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* Introduction Section */
  .team-intro {
    padding: 80px 0;
    background: white;
  }

  .intro-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .intro-content h2 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 2rem;
  }

  .intro-content p {
    font-size: 1.125rem;
    color: var(--text-light);
    line-height: 1.8;
  }

  /* Leadership Section */
  .leadership-section {
    padding: 60px 0;
    background: var(--gray-50);
  }

  .section-title {
    text-align: center;
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 3rem;
  }

  .leadership-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Filters Section */
  .team-filters {
    padding: 40px 0;
    background: white;
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .filters-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .filter-tabs {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .filter-tab {
    padding: 0.75rem 1.5rem;
    border: 2px solid var(--border);
    background: white;
    color: var(--text-light);
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .filter-tab:hover {
    border-color: var(--primary-light);
    color: var(--primary);
  }

  .filter-tab.active {
    background: var(--primary);
    border-color: var(--primary);
    color: white;
  }

  .search-container {
    position: relative;
    min-width: 300px;
  }

  .search-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid var(--border);
    border-radius: 25px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  .search-input:focus {
    outline: none;
    border-color: var(--primary);
  }

  .search-clear {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-light);
    cursor: pointer;
    padding: 0.25rem;
  }

  .search-clear:hover {
    color: var(--text);
  }

  /* Team Members Grid */
  .team-members {
    padding: 60px 0;
    background: white;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .loading-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .loading-card {
    height: 400px;
    background: linear-gradient(90deg, var(--gray-200) 25%, var(--gray-100) 50%, var(--gray-200) 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 12px;
  }

  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .no-results {
    text-align: center;
    padding: 4rem 0;
  }

  .no-results p {
    font-size: 1.125rem;
    color: var(--text-light);
    margin-bottom: 2rem;
  }

  /* Call to Action */
  .team-cta {
    padding: 80px 0;
  }

  .cta-content h2 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
  }

  .cta-content p {
    font-size: 1.125rem;
    color: var(--text-light);
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .page-title {
      font-size: 2.5rem;
    }

    .page-subtitle {
      font-size: 1.125rem;
    }

    .page-header-actions {
      flex-direction: column;
      align-items: center;
    }

    .filters-container {
      flex-direction: column;
      align-items: stretch;
    }

    .filter-tabs {
      justify-content: center;
    }

    .search-container {
      min-width: auto;
    }

    .team-grid,
    .loading-grid {
      grid-template-columns: 1fr;
    }

    .leadership-grid {
      grid-template-columns: 1fr;
    }

    .intro-content h2,
    .section-title,
    .cta-content h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .page-title {
      font-size: 2rem;
    }

    .filter-tab {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }

    .team-grid,
    .loading-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>