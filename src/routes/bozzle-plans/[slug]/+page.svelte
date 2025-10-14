<script lang="ts">
  import { page } from '$app/stores';
  import { fly, scale, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  interface PlanComponent {
    name: string;
    value: string | boolean;
    description?: string;
  }

  interface Plan {
    id: string;
    name: string;
    icon: string;
    price: number;
    color: string;
    gradient: string;
    category: string;
    description: string;
    longDescription: string;
    components: PlanComponent[];
  }

  interface RelatedPlan {
    id: string;
    name: string;
    icon: string;
    price: number;
  }

  const allPlans: Record<string, Plan> = {
    'large-dog': {
      id: 'large-dog',
      name: 'Large Dog Plan',
      icon: '🐕',
      price: 25,
      color: '#3182ce',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: 'dogs',
      description: 'Comprehensive care designed specifically for large breed dogs',
      longDescription: 'Our Large Dog Plan is tailored to meet the unique healthcare needs of larger breeds. With comprehensive coverage including vaccinations, parasite prevention, and regular health checks, we ensure your canine companion stays healthy and happy throughout the year.',
      components: [
        { name: 'Annual Vaccination', value: 'DHP+L4+KC', description: 'Complete protection including Distemper, Hepatitis, Parvovirus, Leptospirosis (4 strains) and Kennel Cough' },
        { name: 'Year-Round Flea & Worm Treatment', value: true, description: 'Vet-prescribed parasite prevention tailored to your dog' },
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments to discuss health or concerns' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail trimming to keep paws healthy' },
        { name: 'Anal Gland Expression', value: '3 per year', description: 'Professional anal gland care' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on spay/neuter procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays, ultrasounds, and CT scans' },
        { name: '20% Off Dental Treatments', value: true, description: 'Significant savings on dental care and procedures' },
        { name: '10% Off Dog Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'small-dog': {
      id: 'small-dog',
      name: 'Small Dog Plan',
      icon: '🐶',
      price: 20,
      color: '#2b6cb0',
      gradient: 'linear-gradient(135deg, #5b8fd6 0%, #6366f1 100%)',
      category: 'dogs',
      description: 'Complete healthcare coverage for small breed dogs',
      longDescription: 'Perfect for small breeds, this plan provides all the essential care your compact companion needs. From vaccinations to preventative treatments and regular check-ups, we keep your small dog in excellent health.',
      components: [
        { name: 'Annual Vaccination', value: 'DHP+L4+KC', description: 'Complete protection including Distemper, Hepatitis, Parvovirus, Leptospirosis (4 strains) and Kennel Cough' },
        { name: 'Year-Round Flea & Worm Treatment', value: true, description: 'Vet-prescribed parasite prevention tailored to your dog' },
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments to discuss health or concerns' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail trimming to keep paws healthy' },
        { name: 'Anal Gland Expression', value: '3 per year', description: 'Professional anal gland care' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on spay/neuter procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays, ultrasounds, and CT scans' },
        { name: '20% Off Dental Treatments', value: true, description: 'Significant savings on dental care and procedures' },
        { name: '10% Off Dog Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'cat': {
      id: 'cat',
      name: 'Cat Plan',
      icon: '🐈',
      price: 17.50,
      color: '#e53e3e',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      category: 'cats',
      description: 'Essential care tailored for your feline friend',
      longDescription: 'Our Cat Plan provides comprehensive healthcare designed specifically for cats. With specialist feline vaccinations, parasite control, and regular wellness checks, we ensure your cat enjoys optimal health and wellbeing.',
      components: [
        { name: 'Annual Vaccination', value: 'Leucofeligen', description: 'Feline-specific protection against common diseases' },
        { name: 'Year-Round Flea & Worm Treatment', value: true, description: 'Vet-prescribed parasite prevention tailored to your cat' },
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments to discuss health or concerns' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail trimming for indoor cats' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on spay/neuter procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays, ultrasounds, and CT scans' },
        { name: '20% Off Dental Treatments', value: true, description: 'Significant savings on dental care and procedures' },
        { name: '10% Off Cat Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'rabbit': {
      id: 'rabbit',
      name: 'Rabbit Plan',
      icon: '🐰',
      price: 15,
      color: '#d69e2e',
      gradient: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
      category: 'small-mammals',
      description: 'Specialized care for your rabbit',
      longDescription: 'Rabbits require specific veterinary care, and our Rabbit Plan covers all the essentials. From myxomatosis and RHD protection to regular health monitoring, we provide expert care for your bunny.',
      components: [
        { name: 'Annual Vaccination', value: 'Myxo-RHD + Yuravac', description: 'Protection against Myxomatosis and Rabbit Haemorrhagic Disease' },
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments with exotic pet specialists' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail trimming for comfort and health' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on spay/neuter procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays and ultrasounds' },
        { name: '20% Off Dental Treatments', value: true, description: 'Significant savings on dental care' },
        { name: '10% Off Rabbit Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'ferret': {
      id: 'ferret',
      name: 'Ferret Plan',
      icon: '🦦',
      price: 15,
      color: '#805ad5',
      gradient: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
      category: 'small-mammals',
      description: 'Comprehensive healthcare for ferrets',
      longDescription: 'Ferrets are unique pets with specific health needs. Our Ferret Plan includes specialist vaccinations with antihistamine protection, parasite control, and access to our experienced exotic pet team.',
      components: [
        { name: 'Annual Vaccination', value: 'DHP (Includes Antihistamine)', description: 'Canine Distemper vaccination with antihistamine injection to reduce reaction risk' },
        { name: 'Year-Round Flea & Worm Treatment', value: true, description: 'Ferret-specific parasite prevention' },
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments with exotic pet specialists' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail trimming for comfort' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on spay/neuter procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays and ultrasounds' },
        { name: '20% Off Dental Treatments', value: true, description: 'Significant savings on dental care' },
        { name: '10% Off Ferret Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'birds': {
      id: 'birds',
      name: 'Birds Plan',
      icon: '🦜',
      price: 15,
      color: '#38a169',
      gradient: 'linear-gradient(135deg, #55efc4 0%, #00b894 100%)',
      category: 'exotics',
      description: 'Expert care for your avian companions',
      longDescription: 'Birds require specialized veterinary knowledge. Our Birds Plan provides access to avian health experts, regular wellness checks, and specialist services including Suprelorin implant options for breeding control.',
      components: [
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments with avian specialists' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail and beak maintenance' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: 'Suprelorin implant', description: 'Discount on hormone implants for breeding control' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays and specialist imaging' },
        { name: '10% Off Bird Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'reptile': {
      id: 'reptile',
      name: 'Reptile Plan',
      icon: '🦎',
      price: 12.50,
      color: '#319795',
      gradient: 'linear-gradient(135deg, #81ecec 0%, #00cec9 100%)',
      category: 'exotics',
      description: 'Specialist care for reptiles',
      longDescription: 'Reptiles need specialized veterinary expertise. Our Reptile Plan provides access to our experienced exotic vets, health monitoring, and discounted diagnostics to keep your scaled companion thriving.',
      components: [
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments with reptile specialists' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on surgical procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays and specialist imaging' },
        { name: '10% Off Reptile Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'exotic-mammal': {
      id: 'exotic-mammal',
      name: 'Exotic Mammal Plan',
      icon: '🦔',
      price: 12.50,
      color: '#dd6b20',
      gradient: 'linear-gradient(135deg, #fab1a0 0%, #e17055 100%)',
      category: 'exotics',
      description: 'Dedicated care for exotic mammals',
      longDescription: 'For guinea pigs, hamsters, chinchillas, and other small exotic mammals, our plan provides comprehensive care from specialists who understand their unique needs.',
      components: [
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments with exotic pet specialists' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail trimming for comfort' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on spay/neuter procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays and ultrasounds' },
        { name: '20% Off Dental Treatments', value: true, description: 'Significant savings on dental care' },
        { name: '10% Off Exotic Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' }
      ]
    }
  };

  // Get current plan from URL parameter
  const planId = $page.params.slug;
  const currentPlan = allPlans[planId];

  // Get related plans (same category or similar price)
  let relatedPlans = $derived.by(() => {
    if (!currentPlan) return [];
    
    return Object.values(allPlans)
      .filter(p => p.id !== currentPlan.id && p.category === currentPlan.category)
      .slice(0, 2)
      .map(p => ({ id: p.id, name: p.name, icon: p.icon, price: p.price }));
  });

  let showAllComponents = $state(false);
  let displayedComponents = $derived(
    showAllComponents ? currentPlan?.components : currentPlan?.components.slice(0, 6)
  );
</script>

<svelte:head>
  <title>{currentPlan?.name || 'Plan'} - Bozzle Plans | Bozzles Ark Vets</title>
  <meta name="description" content={currentPlan?.description || 'Pet care plan details'} />
</svelte:head>

{#if !currentPlan}
  <div class="not-found">
    <div class="container">
      <h1>Plan Not Found</h1>
      <p>Sorry, we couldn't find the plan you're looking for.</p>
      <a href="/bozzle-plans" class="btn-primary">View All Plans</a>
    </div>
  </div>
{:else}
  <div class="plan-detail-page">
    <!-- Hero Section -->
    <section 
      class="hero"
      style="--plan-color: {currentPlan.color}; --plan-gradient: {currentPlan.gradient};"
    >
      <div class="container">
        <a href="/bozzle-plans" class="back-link" in:fly={{ x: -20, duration: 400 }}>
          ← Back to All Plans
        </a>
        
        <div class="hero-content">
          <div class="hero-left" in:fly={{ x: -30, duration: 600, delay: 100 }}>
            <div class="plan-icon">{currentPlan.icon}</div>
            <h1>{currentPlan.name}</h1>
            <p class="plan-description">{currentPlan.description}</p>
            <div class="price-box">
              <span class="price-amount">£{currentPlan.price.toFixed(2)}</span>
              <span class="price-period">per month</span>
            </div>
            <div class="hero-buttons">
              <a href="/contact?plan={currentPlan.id}" class="btn-primary">Sign Up Now</a>
              <a href="#components" class="btn-secondary">View Details</a>
            </div>
          </div>
          
          <div class="hero-right" in:scale={{ duration: 600, delay: 200 }}>
            <div class="feature-highlight">
              <div class="highlight-item">
                <span class="highlight-icon">💰</span>
                <span class="highlight-text">Budget-Friendly</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">🏥</span>
                <span class="highlight-text">Preventative Care</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">📅</span>
                <span class="highlight-text">Year-Round Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plan Overview -->
    <section class="overview">
      <div class="container">
        <div class="overview-content">
          <h2>About This Plan</h2>
          <p>{currentPlan.longDescription}</p>
          
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">{currentPlan.components.length}</div>
              <div class="stat-label">Included Benefits</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">£{currentPlan.price}</div>
              <div class="stat-label">Monthly Cost</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">£{(currentPlan.price * 12).toFixed(0)}</div>
              <div class="stat-label">Annual Total</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Components Section -->
    <section id="components" class="components">
      <div class="container">
        <h2>What's Included</h2>
        <p class="section-subtitle">Everything your pet needs for optimal health</p>
        
        <div class="components-grid">
          {#each displayedComponents as component, i}
            <div 
              class="component-card"
              in:scale={{ delay: 50 * i, duration: 400, easing: quintOut }}
            >
              <div class="component-header">
                <svg class="component-check" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <h3>{component.name}</h3>
              </div>
              {#if typeof component.value === 'string'}
                <div class="component-value">{component.value}</div>
              {/if}
              {#if component.description}
                <p class="component-description">{component.description}</p>
              {/if}
            </div>
          {/each}
        </div>

        {#if currentPlan.components.length > 6 && !showAllComponents}
          <div class="show-more">
            <button 
              class="btn-show-more"
              onclick={() => showAllComponents = true}
            >
              Show All {currentPlan.components.length} Benefits
            </button>
          </div>
        {/if}
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        
        <div class="faq-grid">
          <div class="faq-item">
            <h3>How do I sign up?</h3>
            <p>Simply contact us by phone or visit our practice. Our team will help you enroll and answer any questions you have.</p>
          </div>
          
          <div class="faq-item">
            <h3>Can I cancel anytime?</h3>
            <p>Yes, you can cancel your plan with 30 days' notice. We believe in flexibility and no long-term commitments.</p>
          </div>
          
          <div class="faq-item">
            <h3>When does coverage start?</h3>
            <p>Your coverage begins immediately upon enrollment, giving you peace of mind from day one.</p>
          </div>
          
          <div class="faq-item">
            <h3>Are there any hidden fees?</h3>
            <p>No hidden fees! The monthly price includes all listed benefits. Additional services receive the stated discounts.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Plans -->
    {#if relatedPlans.length > 0}
      <section class="related-plans">
        <div class="container">
          <h2>Other Plans You Might Like</h2>
          
          <div class="related-grid">
            {#each relatedPlans as plan}
              <a href="/bozzle-plans/{plan.id}" class="related-card">
                <div class="related-icon">{plan.icon}</div>
                <h3>{plan.name}</h3>
                <div class="related-price">£{plan.price.toFixed(2)}/month</div>
                <span class="related-link">View Plan →</span>
              </a>
            {/each}
          </div>
        </div>
      </section>
    {/if}

    <!-- CTA Section -->
    <section class="cta" style="--plan-gradient: {currentPlan.gradient};">
      <div class="container">
        <h2>Ready to Get Started?</h2>
        <p>Give your {currentPlan.name.toLowerCase().replace(' plan', '')} the care they deserve</p>
        <div class="cta-buttons">
          <a href="/contact?plan={currentPlan.id}" class="btn-cta-primary">Sign Up for {currentPlan.name}</a>
          <a href="/contact" class="btn-cta-secondary">Ask a Question</a>
        </div>
        <p class="contact-info">
          Call us at <strong>01455 XXX XXX</strong> or visit us at 39 Jersey Way, Barwell, LE9 8HR
        </p>
      </div>
    </section>
  </div>
{/if}

<style>
  .plan-detail-page {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Not Found */
  .not-found {
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 1rem;
  }

  .not-found h1 {
    font-size: 2.5rem;
    color: #1a3c6e;
    margin-bottom: 1rem;
  }

  .not-found p {
    font-size: 1.25rem;
    color: #4a5568;
    margin-bottom: 2rem;
  }

  /* Hero Section */
  .hero {
    background: var(--plan-gradient);
    color: white;
    padding: 3rem 1rem 4rem;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
    pointer-events: none;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    color: white;
    text-decoration: none;
    font-weight: 600;
    margin-bottom: 2rem;
    opacity: 0.9;
    transition: opacity 0.3s ease;
  }

  .back-link:hover {
    opacity: 1;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .plan-icon {
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  .hero h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .plan-description {
    font-size: 1.25rem;
    opacity: 0.95;
    margin-bottom: 2rem;
  }

  .price-box {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 1.5rem;
    border-radius: 16px;
    display: inline-block;
    margin-bottom: 2rem;
  }

  .price-amount {
    font-size: 2.5rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .price-period {
    font-size: 1.125rem;
    opacity: 0.9;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn-primary, .btn-secondary {
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1.125rem;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .btn-primary {
    background-color: white;
    color: var(--plan-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }

  .btn-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }

  .btn-secondary:hover {
    background-color: white;
    color: var(--plan-color);
    transform: translateY(-2px);
  }

  .feature-highlight {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .highlight-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
  }

  .highlight-item:last-child {
    margin-bottom: 0;
  }

  .highlight-icon {
    font-size: 2rem;
  }

  .highlight-text {
    font-size: 1.125rem;
    font-weight: 600;
  }

  /* Overview Section */
  .overview {
    padding: 4rem 1rem;
    background-color: white;
  }

  .overview-content h2 {
    font-size: 2.25rem;
    color: #1a3c6e;
    margin-bottom: 1rem;
  }

  .overview-content p {
    font-size: 1.125rem;
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 3rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .stat-card {
    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1a3c6e;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 1rem;
    color: #718096;
    font-weight: 600;
  }

  /* Components Section */
  .components {
    padding: 4rem 1rem;
    background-color: #f7fafc;
  }

  .components h2 {
    font-size: 2.25rem;
    color: #1a3c6e;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .section-subtitle {
    text-align: center;
    color: #4a5568;
    font-size: 1.125rem;
    margin-bottom: 3rem;
  }

  .components-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .component-card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border-left: 4px solid #38a169;
    transition: all 0.3s ease;
  }

  .component-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }

  .component-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .component-check {
    width: 24px;
    height: 24px;
    color: #38a169;
    flex-shrink: 0;
  }

  .component-card h3 {
    font-size: 1.125rem;
    color: #2d3748;
    font-weight: 600;
    margin: 0;
  }

  .component-value {
    background: linear-gradient(135deg, #ebf8ff 0%, #e6f7ff 100%);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.95rem;
    color: #2c5282;
    font-weight: 600;
    margin-bottom: 0.75rem;
    display: inline-block;
  }

  .component-description {
    color: #718096;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
  }

  .show-more {
    text-align: center;
    margin-top: 2rem;
  }

  .btn-show-more {
    background-color: #1a3c6e;
    color: white;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    border: none;
    font-size: 1.125rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(26, 60, 110, 0.3);
  }

  .btn-show-more:hover {
    background-color: #15325a;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(26, 60, 110, 0.4);
  }

  /* FAQ Section */
  .faq {
    padding: 4rem 1rem;
    background-color: white;
  }

  .faq h2 {
    font-size: 2.25rem;
    color: #1a3c6e;
    text-align: center;
    margin-bottom: 3rem;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .faq-item {
    padding: 1.5rem;
    background-color: #f7fafc;
    border-radius: 12px;
    border-top: 3px solid #1a3c6e;
  }

  .faq-item h3 {
    font-size: 1.125rem;
    color: #2c5282;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  .faq-item p {
    color: #4a5568;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
  }

  /* Related Plans */
  .related-plans {
    padding: 4rem 1rem;
    background-color: #f7fafc;
  }

  .related-plans h2 {
    font-size: 2.25rem;
    color: #1a3c6e;
    text-align: center;
    margin-bottom: 3rem;
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .related-card {
    background-color: white;
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .related-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    border-color: #1a3c6e;
  }

  .related-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .related-card h3 {
    font-size: 1.25rem;
    color: #1a3c6e;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  .related-price {
    font-size: 1.5rem;
    color: #2c5282;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .related-link {
    color: #3182ce;
    font-weight: 600;
    font-size: 0.95rem;
  }

  /* CTA Section */
  .cta {
    padding: 4rem 1rem;
    background: var(--plan-gradient);
    color: white;
    text-align: center;
  }

  .cta h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .cta > .container > p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.95;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .btn-cta-primary, .btn-cta-secondary {
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-size: 1.125rem;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .btn-cta-primary {
    background-color: white;
    color: #1a3c6e;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .btn-cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }

  .btn-cta-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }

  .btn-cta-secondary:hover {
    background-color: white;
    color: #1a3c6e;
    transform: translateY(-2px);
  }

  .contact-info {
    margin-top: 2rem;
    font-size: 1rem;
    opacity: 0.9;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .hero h1 {
      font-size: 2rem;
    }

    .plan-description {
      font-size: 1.125rem;
    }

    .plan-icon {
      font-size: 4rem;
    }

    .price-amount {
      font-size: 2rem;
    }

    .hero-buttons {
      flex-direction: column;
    }

    .btn-primary, .btn-secondary {
      width: 100%;
      text-align: center;
    }

    .overview-content h2,
    .components h2,
    .faq h2,
    .related-plans h2 {
      font-size: 1.75rem;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .components-grid {
      grid-template-columns: 1fr;
    }

    .faq-grid {
      grid-template-columns: 1fr;
    }

    .related-grid {
      grid-template-columns: 1fr;
    }

    .cta h2 {
      font-size: 1.75rem;
    }

    .cta-buttons {
      flex-direction: column;
    }

    .btn-cta-primary, .btn-cta-secondary {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .hero {
      padding: 2rem 1rem 3rem;
    }

    .hero h1 {
      font-size: 1.75rem;
    }

    .plan-icon {
      font-size: 3rem;
    }

    .price-box {
      padding: 1rem;
    }

    .price-amount {
      font-size: 1.75rem;
    }

    .overview {
      padding: 3rem 1rem;
    }

    .components {
      padding: 3rem 1rem;
    }

    .faq {
      padding: 3rem 1rem;
    }

    .related-plans {
      padding: 3rem 1rem;
    }

    .cta {
      padding: 3rem 1rem;
    }
  }
</style>