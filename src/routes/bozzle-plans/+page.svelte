<script lang="ts">
  import { scale, fly, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  interface PlanComponent {
    name: string;
    largeDog: string | boolean;
    smallDog: string | boolean;
    cat: string | boolean;
    rabbit: string | boolean;
    ferret: string | boolean;
    birds: string | boolean;
    reptile: string | boolean;
    exoticMammal: string | boolean;
  }

  interface Plan {
    id: string;
    name: string;
    icon: string;
    price: number;
    color: string;
    gradient: string;
    category: string;
    popular?: boolean;
  }

  let selectedCategory = $state<string>('popular');
  let showComparison = $state<boolean>(false);

  const plans: Plan[] = [
    {
      id: 'large-dog',
      name: 'Large Dog',
      icon: '🐕',
      price: 25,
      color: '#3182ce',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: 'dogs',
      popular: true
    },
    {
      id: 'small-dog',
      name: 'Small Dog',
      icon: '🐶',
      price: 20,
      color: '#2b6cb0',
      gradient: 'linear-gradient(135deg, #5b8fd6 0%, #6366f1 100%)',
      category: 'dogs'
    },
    {
      id: 'cat',
      name: 'Cat',
      icon: '🐈',
      price: 17.50,
      color: '#e53e3e',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      category: 'cats',
      popular: true
    },
    {
      id: 'rabbit',
      name: 'Rabbit',
      icon: '🐰',
      price: 15,
      color: '#d69e2e',
      gradient: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
      category: 'small-mammals',
      popular: true
    },
    {
      id: 'ferret',
      name: 'Ferret',
      icon: '🦦',
      price: 15,
      color: '#805ad5',
      gradient: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
      category: 'small-mammals'
    },
    {
      id: 'birds',
      name: 'Birds',
      icon: '🦜',
      price: 15,
      color: '#38a169',
      gradient: 'linear-gradient(135deg, #55efc4 0%, #00b894 100%)',
      category: 'exotics'
    },
    {
      id: 'reptile',
      name: 'Reptile',
      icon: '🦎',
      price: 12.50,
      color: '#319795',
      gradient: 'linear-gradient(135deg, #81ecec 0%, #00cec9 100%)',
      category: 'exotics'
    },
    {
      id: 'exotic-mammal',
      name: 'Exotic Mammal',
      icon: '🦔',
      price: 12.50,
      color: '#dd6b20',
      gradient: 'linear-gradient(135deg, #fab1a0 0%, #e17055 100%)',
      category: 'exotics'
    }
  ];

  const components: PlanComponent[] = [
    {
      name: 'Annual Vaccination',
      largeDog: 'DHP+L4+KC',
      smallDog: 'DHP+L4+KC',
      cat: 'Leucofeligen',
      rabbit: 'Myxo-RHD + Yuravac',
      ferret: 'DHP (Includes Antihistamine injection)',
      birds: false,
      reptile: false,
      exoticMammal: false
    },
    {
      name: 'Flea & Worm Treatment',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: false,
      ferret: true,
      birds: false,
      reptile: false,
      exoticMammal: false
    },
    {
      name: '2 Vet Consultations',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    },
    {
      name: '10% Off Further Consult Fees',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    },
    {
      name: 'Nail Clips',
      largeDog: '3 per year',
      smallDog: '3 per year',
      cat: '3 per year',
      rabbit: '3 per year',
      ferret: '3 per year',
      birds: '3 per year',
      reptile: false,
      exoticMammal: '3 per year'
    },
    {
      name: 'Anal Gland Expression',
      largeDog: '3 per year',
      smallDog: '3 per year',
      cat: false,
      rabbit: false,
      ferret: false,
      birds: false,
      reptile: false,
      exoticMammal: false
    },
    {
      name: '2x In-House Urine/Faecal Tests',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    },
    {
      name: '10% Off Neutering',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: '10% off Suprelorin implant',
      reptile: true,
      exoticMammal: true
    },
    {
      name: '10% Off Blood Tests',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    },
    {
      name: '10% Off Diagnostic Imaging',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    },
    {
      name: '20% Off Dental Treatments',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: false,
      reptile: false,
      exoticMammal: true
    },
    {
      name: '10% Off Food',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    },
    {
      name: '£10 Microchipping',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Plans', icon: '🐾' },
    { id: 'dogs', name: 'Dogs', icon: '🐕' },
    { id: 'cats', name: 'Cats', icon: '🐈' },
    { id: 'small-mammals', name: 'Small Mammals', icon: '🐰' },
    { id: 'exotics', name: 'Exotics', icon: '🦜' },
    { id: 'popular', name: 'Popular Choices', icon: '⭐' }
  ];

  let filteredPlans = $derived(
  selectedCategory === 'all'
    ? plans
    : selectedCategory === 'popular'
      ? plans.filter(plan => plan.popular)
      : plans.filter(plan => plan.category === selectedCategory)
);

function getPlanComponent(component: PlanComponent, planId: string): string | boolean {
  // Convert "large-dog" → "largeDog"
  const key = planId.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()) as keyof Omit<PlanComponent, 'name'>;
  return component[key];
}
  function formatValue(value: string | boolean): string {
    if (value === true) return '✓';
    if (value === false) return '—';
    return value;
  }
</script>

<svelte:head>
  <title>Bozzle Plans - Pet Care Plans | Bozzles Ark Vets</title>
  <meta name="description" content="Comprehensive pet care plans for dogs, cats, rabbits, ferrets, birds, reptiles and exotic mammals. Affordable monthly plans with preventative care." />
</svelte:head>

<div class="bozzle-plans-page">
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1 in:fly={{ y: -30, duration: 600, delay: 100 }}>Bozzle Plans</h1>
      <p class="hero-subtitle" in:fly={{ y: -30, duration: 600, delay: 200 }}>
        Comprehensive Care for Every Companion
      </p>
      <p class="hero-description" in:fly={{ y: -30, duration: 600, delay: 300 }}>
        Spread the cost of essential healthcare with our flexible monthly payment plans. 
        From dogs to exotic pets, we've got a plan tailored to your companion's needs.
      </p>
    </div>
  </section>

  <!-- Category Filter -->
  <section class="category-filter">
    <div class="container">
      <div class="filter-buttons">
        {#each categories as category, i}
          <button
            class="filter-btn {selectedCategory === category.id ? 'active' : ''}"
            onclick={() => selectedCategory = category.id}
            in:scale={{ delay: 100 * i, duration: 400, easing: quintOut }}
          >
            <span class="filter-icon">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        {/each}
      </div>
    </div>
  </section>

  <!-- Plans Grid -->
  <section class="plans">
    <div class="container">
      <div class="plans-grid">
        {#each filteredPlans as plan, i (plan.id)}
          <div 
            class="plan-card"
            style="--plan-color: {plan.color}; --plan-gradient: {plan.gradient};"
            in:fly={{ y: 30, duration: 500, delay: 50 * i, easing: quintOut }}
          >
            {#if plan.popular}
              <div class="popular-badge">Popular Choice</div>
            {/if}

            <div class="plan-header">
              <div class="plan-icon">{plan.icon}</div>
              <h3>{plan.name}</h3>
              <div class="plan-price">
                <span class="price-amount">£{plan.price.toFixed(2)}</span>
                <span class="price-period">/ month</span>
              </div>
            </div>

            <div class="plan-features">
              {#each components as component}
                {@const value = getPlanComponent(component, plan.id)}
                {#if value !== false}
                  <div class="feature-item">
                    <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <div class="feature-content">
                      <span class="feature-name">{component.name}</span>
                      {#if typeof value === 'string'}
                        <span class="feature-detail">{value}</span>
                      {/if}
                    </div>
                  </div>
                {/if}
              {/each}
            </div>

            <a href="/bozzle-plans/{plan.id}" class="plan-cta">Get Started</a>
          </div>
        {/each}
      </div>

      <div class="comparison-toggle">
        <button 
          class="btn-comparison"
          onclick={() => showComparison = !showComparison}
        >
          {showComparison ? 'Hide' : 'View'} Full Comparison Table
        </button>
      </div>
    </div>
  </section>

  <!-- Comparison Table -->
  {#if showComparison}
    <section class="comparison-section" in:fade={{ duration: 300 }}>
      <div class="container-wide">
        <h2>Complete Plan Comparison</h2>
        <div class="table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th class="component-col">Component</th>
                {#each plans as plan}
                  <th class="plan-col">
                    <div class="table-plan-header">
                      <div class="table-plan-icon">{plan.icon}</div>
                      <div class="table-plan-name">{plan.name}</div>
                      <div class="table-plan-price">£{plan.price.toFixed(2)}/mo</div>
                    </div>
                  </th>
                {/each}
              </tr>
            </thead>
            <tbody>
              {#each components as component}
                <tr>
                  <td class="component-name">{component.name}</td>
                  {#each plans as plan}
                    {@const value = getPlanComponent(component, plan.id)}
                    <td class="plan-value {value === false ? 'not-included' : ''}">
                      {formatValue(value)}
                    </td>
                  {/each}
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  {/if}

  <!-- Benefits Section -->
  <section class="benefits">
    <div class="container">
      <h2>Why Choose a Bozzle Plan?</h2>
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">💰</div>
          <h3>Spread the Cost</h3>
          <p>Manageable monthly payments make budgeting for pet care easier</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">🛡️</div>
          <h3>Preventative Care</h3>
          <p>Regular check-ups and treatments keep your pet healthy year-round</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">💊</div>
          <h3>Exclusive Discounts</h3>
          <p>Save on treatments, diagnostics, food, and more throughout the year</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">📅</div>
          <h3>Never Miss a Date</h3>
          <p>We'll remind you when vaccinations and treatments are due</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta">
    <div class="container">
      <div class="heart-icon">❤️</div>
      <h2>Ready to Give Your Pet the Best Care?</h2>
      <p>
        Join hundreds of happy pet owners who trust Bozzle Plans for their companions' health
      </p>
      <div class="cta-buttons">
        <a href="/contact" class="btn-primary">Sign Up Today</a>
        <a href="/contact" class="btn-secondary">Have Questions?</a>
      </div>
      <p class="contact-info">
        Call us at <strong>01455 710 796</strong> or visit us at 39 Jersey Way, Barwell, LE9 8HR
      </p>
    </div>
  </section>
</div>

<style>
  .bozzle-plans-page {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f7fafc;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .container-wide {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, #1a3c6e 0%, #2c5490 100%);
    color: white;
    padding: 4rem 1rem;
    text-align: center;
  }

  .hero h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    opacity: 0.95;
  }

  .hero-description {
    font-size: 1.125rem;
    opacity: 0.9;
    max-width: 700px;
    margin: 0 auto;
  }

  /* Category Filter */
  .category-filter {
    background-color: white;
    padding: 2rem 1rem;
    border-bottom: 1px solid #e2e8f0;
  }

  .filter-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .filter-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border: 2px solid #e2e8f0;
    background-color: white;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
    font-weight: 600;
    color: #4a5568;
  }

  .filter-btn:hover {
    border-color: #1a3c6e;
    background-color: #f7fafc;
    transform: translateY(-2px);
  }

  .filter-btn.active {
    background: linear-gradient(135deg, #1a3c6e 0%, #2c5490 100%);
    color: white;
    border-color: #1a3c6e;
  }

  .filter-icon {
    font-size: 1.25rem;
  }

  /* Plans Section */
  .plans {
    padding: 4rem 1rem;
  }

  .plans-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .plan-card {
    background-color: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid #e2e8f0;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .plan-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    border-color: var(--plan-color);
  }

  .popular-badge {
    position: absolute;
    top: -12px;
    right: 20px;
    background: var(--plan-gradient);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .plan-header {
    text-align: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid #f7fafc;
  }

  .plan-icon {
    font-size: 3.5rem;
    margin-bottom: 0.75rem;
  }

  .plan-header h3 {
    font-size: 1.5rem;
    color: #1a3c6e;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .plan-price {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 0.25rem;
  }

  .price-amount {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--plan-color);
  }

  .price-period {
    font-size: 1rem;
    color: #718096;
  }

  .plan-features {
    flex: 1;
    margin-bottom: 1.5rem;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .check-icon {
    width: 18px;
    height: 18px;
    color: var(--plan-color);
    flex-shrink: 0;
    margin-top: 3px;
  }

  .feature-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .feature-name {
    color: #2d3748;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.4;
  }

  .feature-detail {
    color: #718096;
    font-size: 0.85rem;
    font-style: italic;
  }

  .plan-cta {
    width: 100%;
    background: var(--plan-gradient);
    color: white;
    padding: 1rem;
    border-radius: 50px;
    border: none;
    font-size: 1.125rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3);
    text-decoration: none;
    display: block;
    text-align: center;
  }

  .plan-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(49, 130, 206, 0.4);
  }

  /* Comparison Toggle */
  .comparison-toggle {
    text-align: center;
    margin-top: 2rem;
  }

  .btn-comparison {
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

  .btn-comparison:hover {
    background-color: #15325a;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(26, 60, 110, 0.4);
  }

  /* Comparison Table */
  .comparison-section {
    padding: 4rem 1rem;
    background-color: white;
  }

  .comparison-section h2 {
    text-align: center;
    font-size: 2rem;
    color: #1a3c6e;
    margin-bottom: 2rem;
  }

  .table-wrapper {
    overflow-x: auto;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .comparison-table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    min-width: 900px;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
  }

  .comparison-table thead {
    background: linear-gradient(135deg, #1a3c6e 0%, #2c5490 100%);
    color: white;
  }

  .comparison-table thead th {
    font-weight: 600;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .component-col {
    width: 200px;
    font-weight: 600;
  }

  .plan-col {
    text-align: center;
    min-width: 120px;
  }

  .table-plan-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  .table-plan-icon {
    font-size: 1.5rem;
  }

  .table-plan-name {
    font-weight: 600;
    font-size: 0.9rem;
  }

  .table-plan-price {
    font-size: 0.85rem;
    opacity: 0.9;
  }

  .comparison-table tbody tr:hover {
    background-color: #f7fafc;
  }

  .component-name {
    font-weight: 500;
    color: #2d3748;
  }

  .plan-value {
    text-align: center;
    color: #2d3748;
    font-size: 0.9rem;
  }

  .plan-value.not-included {
    color: #cbd5e0;
  }

  /* Benefits Section */
  .benefits {
    padding: 4rem 1rem;
    background-color: #f7fafc;
  }

  .benefits h2 {
    text-align: center;
    font-size: 2rem;
    color: #1a3c6e;
    margin-bottom: 3rem;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .benefit-card {
    background-color: white;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }

  .benefit-card:hover {
    transform: translateY(-5px);
  }

  .benefit-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .benefit-card h3 {
    font-size: 1.25rem;
    color: #2c5282;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  .benefit-card p {
    color: #4a5568;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  /* CTA Section */
  .cta {
    padding: 4rem 1rem;
    background: linear-gradient(135deg, #2c5490 0%, #1a3c6e 100%);
    color: white;
    text-align: center;
  }

  .cta .container {
    max-width: 800px;
  }

  .heart-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }

  .cta h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .cta > .container > p {
    font-size: 1.125rem;
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

  .btn-primary, .btn-secondary {
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-size: 1.125rem;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .btn-primary {
    background-color: white;
    color: #1a3c6e;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  .btn-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }

  .btn-secondary:hover {
    background-color: white;
    color: #1a3c6e;
    transform: translateY(-2px);
  }

  .contact-info {
    margin-top: 2rem;
    font-size: 0.95rem;
    opacity: 0.85;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1.25rem;
    }

    .hero-description {
      font-size: 1rem;
    }

    .filter-buttons {
      justify-content: flex-start;
      overflow-x: auto;
      flex-wrap: nowrap;
      padding-bottom: 0.5rem;
    }

    .filter-btn {
      flex-shrink: 0;
    }

    .plans-grid {
      grid-template-columns: 1fr;
    }

    .plan-icon {
      font-size: 3rem;
    }

    .price-amount {
      font-size: 2rem;
    }

    .comparison-section h2 {
      font-size: 1.5rem;
    }

    .table-wrapper {
      border-radius: 8px;
    }

    .comparison-table {
      font-size: 0.85rem;
    }

    .comparison-table th,
    .comparison-table td {
      padding: 0.75rem 0.5rem;
    }

    .component-col {
      width: 150px;
    }

    .plan-col {
      min-width: 100px;
    }

    .benefits-grid {
      grid-template-columns: 1fr;
    }

    .cta h2 {
      font-size: 1.5rem;
    }

    .cta-buttons {
      flex-direction: column;
    }

    .btn-primary, .btn-secondary {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .hero {
      padding: 3rem 1rem;
    }

    .hero h1 {
      font-size: 1.75rem;
    }

    .category-filter {
      padding: 1.5rem 1rem;
    }

    .filter-btn {
      padding: 0.6rem 1.2rem;
      font-size: 0.9rem;
    }

    .plans {
      padding: 3rem 1rem;
    }

    .plan-card {
      padding: 1.5rem;
    }

    .feature-name {
      font-size: 0.85rem;
    }

    .feature-detail {
      font-size: 0.8rem;
    }
  }
</style>