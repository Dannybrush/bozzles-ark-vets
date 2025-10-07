<script lang="ts">
  import { scale, fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  // Type definitions
  type EventCategory = 'grand-opening' | 'community' | 'educational' | 'fundraiser' | 'wellness' | 'seasonal';
  type EventStatus = 'upcoming' | 'registration-open' | 'fully-booked' | 'past';

  interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    category: EventCategory;
    status: EventStatus;
    description: string;
    location: string;
    icon: string;
    imageUrl?: string;
    capacity?: number;
    registered?: number;
    isPinned?: boolean;
    ctaText?: string;
    ctaLink?: string;
  }

  interface Announcement {
    id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'urgent';
    date: string;
    icon: string;
  }

  // State management with Svelte 5 runes
  let selectedCategory = $state<EventCategory | 'all'>('all');
  let showPastEvents = $state(false);
  let searchQuery = $state('');

  // Announcements data
  const announcements: Announcement[] = [
    {
      id: 'ann-1',
      title: 'Grand Opening - Now Open!',
      message: 'Bozzles Ark Vets is now officially open! We\'re excited to welcome you and your beloved pets to our state-of-the-art facility.',
      type: 'success',
      date: '2025-10-01',
      icon: '🎉'
    },
    {
      id: 'ann-2',
      title: 'New Emergency Hotline',
      message: '24/7 Emergency care is now available. Call us anytime at 01455-EMERGENCY for urgent veterinary assistance.',
      type: 'urgent',
      date: '2025-10-05',
      icon: '🚨'
    },
    {
      id: 'ann-3',
      title: 'Winter Wellness Checks',
      message: 'Book your pet\'s winter wellness check now and receive 15% off preventative care packages through December.',
      type: 'info',
      date: '2025-10-03',
      icon: '❄️'
    }
  ];

  // Events data
  const events: Event[] = [
    // Main opening events
    {
      id: 'event-1',
      title: 'Grand Opening Ceremony',
      date: '2025-10-15',
      time: '10:00 AM - 12:00 PM',
      category: 'grand-opening',
      status: 'upcoming',
      description: 'Join us for the official ribbon-cutting ceremony of Bozzles Ark Vets! Meet our dedicated team, tour our cutting-edge facilities, and enjoy refreshments. Special gift bags for the first 50 attendees!',
      location: 'Bozzles Ark Vets, 39 Jersey Way, Barwell, LE9 8HR',
      icon: '🎊',
      isPinned: true,
      capacity: 100,
      registered: 67,
      ctaText: 'RSVP Now',
      ctaLink: '/events/grand-opening-rsvp'
    },
    {
      id: 'event-2',
      title: 'Client Welcome Party',
      date: '2025-10-20',
      time: '6:00 PM - 9:00 PM',
      category: 'grand-opening',
      status: 'registration-open',
      description: 'An exclusive evening event for our clients and community! Meet our veterinary team in a relaxed atmosphere, enjoy catering, live music, and special presentations about our services. Bring your pets for complimentary mini health checks!',
      location: 'Bozzles Ark Vets Practice',
      icon: '🥳',
      isPinned: true,
      capacity: 80,
      registered: 42,
      ctaText: 'Register Today',
      ctaLink: '/events/welcome-party-rsvp'
    },
    {
      id: 'event-3',
      title: 'Behind-the-Scenes Open Day',
      date: '2025-10-27',
      time: '11:00 AM - 4:00 PM',
      category: 'grand-opening',
      status: 'registration-open',
      description: 'Ever wondered what happens behind the scenes at a vet practice? Join us for guided tours of our surgical suites, diagnostic imaging rooms, hospitalisation ward, and more! Q&A sessions with our vets throughout the day.',
      location: 'Bozzles Ark Vets - Full Facility Tour',
      icon: '🔍',
      isPinned: true,
      capacity: 120,
      registered: 58,
      ctaText: 'Book Your Spot',
      ctaLink: '/events/open-day-rsvp'
    },
    // Additional suggested events
    {
      id: 'event-4',
      title: 'Pet First Aid Workshop',
      date: '2025-11-10',
      time: '2:00 PM - 4:00 PM',
      category: 'educational',
      status: 'registration-open',
      description: 'Learn essential first aid skills for pets! Our experienced veterinary nurses will teach you how to handle common emergencies, perform CPR, and recognize warning signs. Take-home first aid kit included.',
      location: 'Bozzles Ark Vets Training Room',
      icon: '🩹',
      capacity: 30,
      registered: 18,
      ctaText: 'Enroll Now',
      ctaLink: '/events/first-aid-workshop'
    },
    {
      id: 'event-5',
      title: 'Puppy Socialisation Class',
      date: '2025-11-16',
      time: '10:00 AM - 11:30 AM',
      category: 'educational',
      status: 'registration-open',
      description: 'Help your puppy develop good social skills! Led by our certified animal behaviourist. For puppies aged 8-16 weeks. Learn about training, nutrition, and preventive care. Refreshments for humans, treats for pups!',
      location: 'Bozzles Ark Vets Garden Area',
      icon: '🐕',
      capacity: 12,
      registered: 9,
      ctaText: 'Sign Up',
      ctaLink: '/events/puppy-class'
    },
    {
      id: 'event-6',
      title: 'Senior Pet Care Seminar',
      date: '2025-11-23',
      time: '3:00 PM - 5:00 PM',
      category: 'educational',
      status: 'upcoming',
      description: 'Discover how to keep your senior pet comfortable and healthy. Topics include arthritis management, dietary needs, cognitive health, and quality of life assessments. Free senior pet health screenings available.',
      location: 'Bozzles Ark Vets Conference Room',
      icon: '🐾',
      capacity: 40,
      registered: 12,
      ctaText: 'Reserve Seat',
      ctaLink: '/events/senior-pet-seminar'
    },
    {
      id: 'event-7',
      title: 'Exotic Pet Care Day',
      date: '2025-12-02',
      time: '12:00 PM - 5:00 PM',
      category: 'community',
      status: 'upcoming',
      description: 'Special day dedicated to our exotic pet patients! Bring your rabbits, guinea pigs, birds, reptiles, and small mammals for discounted health checks. Expert advice on diet, habitat, and enrichment. Meet other exotic pet owners!',
      location: 'Bozzles Ark Vets',
      icon: '🦎',
      capacity: 50,
      registered: 8,
      ctaText: 'Book Check-up',
      ctaLink: '/events/exotic-pet-day'
    },
    {
      id: 'event-8',
      title: 'Christmas Pet Photo Sessions',
      date: '2025-12-14',
      time: '10:00 AM - 6:00 PM',
      category: 'seasonal',
      status: 'registration-open',
      description: 'Get the perfect holiday photo with your pet! Professional photographer on-site with festive backdrops. All proceeds support local animal rescue. Digital photos included, printed copies available.',
      location: 'Bozzles Ark Vets Reception Area',
      icon: '🎄',
      capacity: 60,
      registered: 35,
      ctaText: 'Book Session',
      ctaLink: '/events/photo-session'
    },
    {
      id: 'event-9',
      title: 'New Year Wellness Day',
      date: '2026-01-11',
      time: '9:00 AM - 3:00 PM',
      category: 'wellness',
      status: 'upcoming',
      description: 'Start the year right for your pets! Discounted wellness exams, vaccination clinics, dental checks, and nutrition consultations. Health plan sign-ups with exclusive New Year bonuses.',
      location: 'Bozzles Ark Vets',
      icon: '✨',
      capacity: 80,
      registered: 15,
      ctaText: 'Schedule Check-up',
      ctaLink: '/events/wellness-day'
    },
    {
      id: 'event-10',
      title: 'Charity Fun Run & Walk',
      date: '2026-02-15',
      time: '9:00 AM - 1:00 PM',
      category: 'fundraiser',
      status: 'upcoming',
      description: 'Walk or run with your furry friend to support local animal shelters! 5K route through beautiful countryside. Registration includes event t-shirt, refreshments, and a doggy goody bag. All fitness levels welcome!',
      location: 'Starting from Bozzles Ark Vets',
      icon: '🏃',
      capacity: 200,
      registered: 43,
      ctaText: 'Register',
      ctaLink: '/events/charity-run'
    },
    {
      id: 'event-11',
      title: 'Dental Health Awareness Day',
      date: '2026-02-28',
      time: '10:00 AM - 4:00 PM',
      category: 'wellness',
      status: 'upcoming',
      description: 'February is Pet Dental Health Month! Free dental screenings, demonstrations on home dental care, and special offers on professional cleanings. Learn why dental health is crucial for your pet\'s overall wellbeing.',
      location: 'Bozzles Ark Vets',
      icon: '🦷',
      capacity: 70,
      registered: 0,
      ctaText: 'Book Screening',
      ctaLink: '/events/dental-day'
    },
    {
      id: 'event-12',
      title: 'Easter Pet Parade',
      date: '2026-04-05',
      time: '11:00 AM - 2:00 PM',
      category: 'community',
      status: 'upcoming',
      description: 'Celebrate Easter with your pets! Dress up your furry friends for our costume parade. Prizes for best dressed, egg hunt for dogs, raffles, and family fun activities. Refreshments and pet-safe treats available.',
      location: 'Bozzles Ark Vets & Local Park',
      icon: '🐰',
      capacity: 150,
      ctaText: 'Join Parade',
      ctaLink: '/events/easter-parade'
    }
  ];

  // Derived state for filtered events
  let filteredEvents = $derived(() => {
    let filtered = events;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query)
      );
    }

    // Filter by past/upcoming
    if (!showPastEvents) {
      filtered = filtered.filter(event => event.status !== 'past');
    }

    return filtered;
  });

  // Derived state for pinned events
  let pinnedEvents = $derived(events.filter(event => event.isPinned));

  // Category badges
  const categoryConfig = {
    'grand-opening': { label: 'Grand Opening', color: '#e53e3e' },
    'community': { label: 'Community', color: '#3182ce' },
    'educational': { label: 'Educational', color: '#805ad5' },
    'fundraiser': { label: 'Fundraiser', color: '#38a169' },
    'wellness': { label: 'Wellness', color: '#dd6b20' },
    'seasonal': { label: 'Seasonal', color: '#d53f8c' }
  };

  // Status badges
  const statusConfig = {
    'upcoming': { label: 'Upcoming', color: '#3182ce' },
    'registration-open': { label: 'Open for Registration', color: '#38a169' },
    'fully-booked': { label: 'Fully Booked', color: '#e53e3e' },
    'past': { label: 'Past Event', color: '#718096' }
  };

  // Helper function to format date
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  // Helper function to calculate spots remaining
  function getSpotsRemaining(event: Event): string {
    if (!event.capacity || !event.registered) return '';
    const remaining = event.capacity - event.registered;
    if (remaining <= 0) return 'Fully booked';
    if (remaining <= 10) return `Only ${remaining} spots left!`;
    return `${remaining} spots available`;
  }
</script>

<div class="events-page">
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1 in:fly={{ y: 30, duration: 800, easing: quintOut }}>
        Events & Announcements
      </h1>
      <p in:fly={{ y: 30, duration: 800, delay: 200, easing: quintOut }}>
        Join us for exciting events, workshops, and community gatherings at Bozzles Ark Vets
      </p>
    </div>
  </section>

  <div class="container">
    <!-- Announcements Section -->
    {#if announcements.length > 0}
      <section class="announcements-section">
        <h2>Latest Announcements</h2>
        <div class="announcements-grid">
          {#each announcements as announcement, i}
            <div 
              class="announcement-card announcement-{announcement.type}"
              in:scale={{ delay: 100 * i, duration: 500, easing: quintOut }}
            >
              <div class="announcement-icon">{announcement.icon}</div>
              <div class="announcement-content">
                <h3>{announcement.title}</h3>
                <p>{announcement.message}</p>
                <span class="announcement-date">{formatDate(announcement.date)}</span>
              </div>
            </div>
          {/each}
        </div>
      </section>
    {/if}

    <!-- Pinned Events Section -->
    {#if pinnedEvents.length > 0}
      <section class="pinned-events-section">
        <h2>📌 Featured Events</h2>
        <div class="pinned-events-grid">
          {#each pinnedEvents as event, i}
            <div 
              class="pinned-event-card"
              in:scale={{ delay: 150 * i, duration: 600, easing: quintOut }}
            >
              <div class="event-header">
                <span class="event-icon">{event.icon}</span>
                <div class="event-badges">
                  <span 
                    class="badge" 
                    style="background-color: {categoryConfig[event.category].color}"
                  >
                    {categoryConfig[event.category].label}
                  </span>
                </div>
              </div>
              <h3>{event.title}</h3>
              <div class="event-meta">
                <div class="meta-item">
                  <span class="meta-icon">📅</span>
                  <span>{formatDate(event.date)}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-icon">🕐</span>
                  <span>{event.time}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-icon">📍</span>
                  <span>{event.location}</span>
                </div>
              </div>
              <p class="event-description">{event.description}</p>
              {#if event.capacity && event.registered !== undefined}
                <div class="event-capacity">
                  <div class="capacity-bar">
                    <div 
                      class="capacity-fill" 
                      style="width: {(event.registered / event.capacity) * 100}%"
                    ></div>
                  </div>
                  <span class="capacity-text">{getSpotsRemaining(event)}</span>
                </div>
              {/if}
              {#if event.ctaLink}
                <a href={event.ctaLink} class="btn-primary-event">
                  {event.ctaText || 'Register Now'}
                </a>
              {/if}
            </div>
          {/each}
        </div>
      </section>
    {/if}

    <!-- All Events Section -->
    <section class="all-events-section">
      <h2>All Events</h2>
      
      <!-- Filters -->
      <div class="filters">
        <div class="filter-group">
          <input 
            type="text" 
            placeholder="Search events..." 
            bind:value={searchQuery}
            class="search-input"
          />
        </div>
        
        <div class="filter-group">
          <label>
            <input 
              type="checkbox" 
              bind:checked={showPastEvents}
            />
            Show past events
          </label>
        </div>

        <div class="category-filters">
          <button 
            class="filter-btn {selectedCategory === 'all' ? 'active' : ''}"
            onclick={() => selectedCategory = 'all'}
          >
            All
          </button>
          {#each Object.entries(categoryConfig) as [key, config]}
            <button 
              class="filter-btn {selectedCategory === key ? 'active' : ''}"
              onclick={() => selectedCategory = key as EventCategory}
              style="--filter-color: {config.color}"
            >
              {config.label}
            </button>
          {/each}
        </div>
      </div>

      <!-- Events List -->
      <div class="events-list">
        {#if filteredEvents().length === 0}
          <div class="no-events" in:fade>
            <p>No events found matching your criteria.</p>
          </div>
        {:else}
          {#each filteredEvents() as event, i}
            <div 
              class="event-card"
              in:scale={{ delay: 50 * i, duration: 400, easing: quintOut }}
            >
              <div class="event-card-header">
                <span class="event-icon-large">{event.icon}</span>
                <div class="event-info">
                  <h3>{event.title}</h3>
                  <div class="event-badges-inline">
                    <span 
                      class="badge-small" 
                      style="background-color: {categoryConfig[event.category].color}"
                    >
                      {categoryConfig[event.category].label}
                    </span>
                    <span 
                      class="badge-small status-badge" 
                      style="background-color: {statusConfig[event.status].color}"
                    >
                      {statusConfig[event.status].label}
                    </span>
                  </div>
                </div>
              </div>
              
              <div class="event-card-body">
                <div class="event-details">
                  <div class="detail-row">
                    <span class="detail-icon">📅</span>
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-icon">🕐</span>
                    <span>{event.time}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-icon">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p class="event-desc">{event.description}</p>
                
                {#if event.capacity && event.registered !== undefined}
                  <div class="event-capacity-small">
                    <span class="capacity-text-small">{getSpotsRemaining(event)}</span>
                    <div class="capacity-bar-small">
                      <div 
                        class="capacity-fill-small" 
                        style="width: {(event.registered / event.capacity) * 100}%"
                      ></div>
                    </div>
                  </div>
                {/if}
              </div>
              
              {#if event.ctaLink && event.status !== 'past' && event.status !== 'fully-booked'}
                <div class="event-card-footer">
                  <a href={event.ctaLink} class="btn-outline-event">
                    {event.ctaText || 'Learn More'}
                  </a>
                </div>
              {/if}
            </div>
          {/each}
        {/if}
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="newsletter-section">
      <div class="newsletter-card">
        <h2>Never Miss an Event</h2>
        <p>Subscribe to our newsletter for updates on upcoming events, special offers, and pet care tips.</p>
        <form class="newsletter-form">
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit" class="btn-primary-newsletter">Subscribe</button>
        </form>
      </div>
    </section>
  </div>
</div>

<style>
  .events-page {
    min-height: 100vh;
    background-color: #f7fafc;
  }

  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, #1a3c6e 0%, #2c5490 100%);
    color: white;
    padding: 4rem 1rem;
    text-align: center;
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .hero p {
    font-size: 1.25rem;
    opacity: 0.95;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  /* Announcements Section */
  .announcements-section {
    margin-bottom: 4rem;
  }

  .announcements-section h2 {
    font-size: 2rem;
    color: #1a3c6e;
    margin-bottom: 2rem;
  }

  .announcements-grid {
    display: grid;
    gap: 1.5rem;
  }

  .announcement-card {
    display: flex;
    gap: 1.5rem;
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 4px solid;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    background: white;
  }

  .announcement-info {
    border-color: #3182ce;
  }

  .announcement-success {
    border-color: #38a169;
  }

  .announcement-warning {
    border-color: #fbbf24;
  }

  .announcement-urgent {
    border-color: #e53e3e;
  }

  .announcement-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .announcement-content {
    flex: 1;
  }

  .announcement-content h3 {
    font-size: 1.25rem;
    color: #1a3c6e;
    margin-bottom: 0.5rem;
  }

  .announcement-content p {
    color: #4a5568;
    margin-bottom: 0.75rem;
    line-height: 1.6;
  }

  .announcement-date {
    font-size: 0.875rem;
    color: #718096;
  }

  /* Pinned Events Section */
  .pinned-events-section {
    margin-bottom: 4rem;
  }

  .pinned-events-section h2 {
    font-size: 2rem;
    color: #1a3c6e;
    margin-bottom: 2rem;
  }

  .pinned-events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .pinned-event-card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .pinned-event-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .event-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .event-icon {
    font-size: 2.5rem;
  }

  .event-badges {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .badge {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
  }

  .pinned-event-card h3 {
    font-size: 1.5rem;
    color: #1a3c6e;
    margin-bottom: 1rem;
  }

  .event-meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #4a5568;
    font-size: 0.95rem;
  }

  .meta-icon {
    font-size: 1rem;
  }

  .event-description {
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .event-capacity {
    margin-bottom: 1.5rem;
  }

  .capacity-bar {
    height: 8px;
    background-color: #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .capacity-fill {
    height: 100%;
    background: linear-gradient(90deg, #38a169 0%, #4ade80 100%);
    transition: width 0.5s ease;
  }

  .capacity-text {
    font-size: 0.875rem;
    color: #4a5568;
    font-weight: 600;
  }

  .btn-primary-event {
    display: block;
    width: 100%;
    text-align: center;
    background-color: #3182ce;
    color: white;
    padding: 0.875rem;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .btn-primary-event:hover {
    background-color: #2c5282;
  }

  /* All Events Section */
  .all-events-section h2 {
    font-size: 2rem;
    color: #1a3c6e;
    margin-bottom: 2rem;
  }

  /* Filters */
  .filters {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .filter-group {
    margin-bottom: 1rem;
  }

  .search-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  .search-input:focus {
    outline: none;
    border-color: #3182ce;
  }

  .filter-group label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #4a5568;
    cursor: pointer;
  }

  .category-filters {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    border: 2px solid #e2e8f0;
    background: white;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #4a5568;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .filter-btn:hover {
    border-color: #cbd5e0;
  }

  .filter-btn.active {
    background-color: var(--filter-color, #3182ce);
    border-color: var(--filter-color, #3182ce);
    color: white;
  }

  /* Events List */
  .events-list {
    display: grid;
    gap: 1.5rem;
  }

  .no-events {
    text-align: center;
    padding: 3rem;
    color: #718096;
    font-size: 1.125rem;
  }

  .event-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .event-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  .event-card-header {
    display: flex;
    gap: 1.5rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  }

  .event-icon-large {
    font-size: 3rem;
    flex-shrink: 0;
  }

  .event-info {
    flex: 1;
  }

  .event-info h3 {
    font-size: 1.5rem;
    color: #1a3c6e;
    margin-bottom: 0.5rem;
  }

  .event-badges-inline {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .badge-small {
    padding: 0.25rem 0.625rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
  }

  .status-badge {
    opacity: 0.9;
  }

  .event-card-body {
    padding: 1.5rem;
  }

  .event-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e2e8f0;
  }

  .detail-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #4a5568;
    font-size: 0.95rem;
  }

  .detail-icon {
    font-size: 1rem;
  }

  .event-desc {
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .event-capacity-small {
    margin-top: 1rem;
  }

  .capacity-text-small {
    display: block;
    font-size: 0.875rem;
    color: #4a5568;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .capacity-bar-small {
    height: 6px;
    background-color: #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
  }

  .capacity-fill-small {
    height: 100%;
    background: linear-gradient(90deg, #38a169 0%, #4ade80 100%);
    transition: width 0.5s ease;
  }

  .event-card-footer {
    padding: 1rem 1.5rem;
    background-color: #f7fafc;
    border-top: 1px solid #e2e8f0;
  }

  .btn-outline-event {
    display: block;
    width: 100%;
    text-align: center;
    background: transparent;
    color: #3182ce;
    padding: 0.75rem;
    border: 2px solid #3182ce;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .btn-outline-event:hover {
    background-color: #3182ce;
    color: white;
  }

  /* Newsletter Section */
  .newsletter-section {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  .newsletter-card {
    background: linear-gradient(135deg, #1a3c6e 0%, #2c5490 100%);
    color: white;
    padding: 3rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 8px 20px rgba(26, 60, 110, 0.3);
  }

  .newsletter-card h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .newsletter-card p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    opacity: 0.95;
  }

  .newsletter-form {
    display: flex;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .newsletter-form input {
    flex: 1;
    min-width: 250px;
    padding: 0.875rem 1.25rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transition: all 0.3s ease;
  }

  .newsletter-form input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  .newsletter-form input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }

  .btn-primary-newsletter {
    padding: 0.875rem 2rem;
    background-color: #e53e3e;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    white-space: nowrap;
  }

  .btn-primary-newsletter:hover {
    background-color: #c53030;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }

    .hero p {
      font-size: 1rem;
    }

    .pinned-events-grid {
      grid-template-columns: 1fr;
    }

    .announcements-section h2,
    .pinned-events-section h2,
    .all-events-section h2 {
      font-size: 1.5rem;
    }

    .category-filters {
      gap: 0.5rem;
    }

    .filter-btn {
      font-size: 0.85rem;
      padding: 0.4rem 0.8rem;
    }

    .event-card-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .event-info h3 {
      font-size: 1.25rem;
    }

    .newsletter-card {
      padding: 2rem 1.5rem;
    }

    .newsletter-card h2 {
      font-size: 1.5rem;
    }

    .newsletter-form {
      flex-direction: column;
    }

    .newsletter-form input {
      min-width: 100%;
    }

    .announcement-card {
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .hero {
      padding: 3rem 1rem;
    }

    .hero h1 {
      font-size: 1.75rem;
    }

    .event-icon-large {
      font-size: 2.5rem;
    }

    .pinned-event-card h3,
    .event-info h3 {
      font-size: 1.125rem;
    }
  }
</style>