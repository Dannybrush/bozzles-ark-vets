<script lang="ts">
  import { scale, fly, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  interface Plan {
    id: string;
    name: string;
    icon: string;
    price: number;
    color: string;
    gradient: string;
    popular: boolean;
    description: string;
    features: string[];
  }

  interface Benefit {
    icon: string;
    title: string;
    description: string;
  }

  let selectedPlan = $state<string | null>(null);

  const plans: Plan[] = [
    {
      id: 'dog',
      name: 'Dog Plan',
      icon: '🐕',
      price: 25,
      color: '#3182ce',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      popular: true,
      description: 'Comprehensive care for your canine companion',
      features: [
        'Unlimited access to our 24/7 vet helpline for everyday advice and personalised support',
        'Year-round, vet-prescribed protection against fleas, ticks and worms, tailored to your dog',
        'Annual vaccinations and annual health check. Includes initial vaccination course for unvaccinated dogs',
        '2 face-to-face consultations with your vet to discuss your dog\'s health or if unwell',
        '3 nurse checks including free weight monitoring and nail clips',
        'Microchipping for your dog if required',
        '1 annual health and wellness blood screen for just £45',
        'Handy reminders for vaccinations and flea, tick, or worm treatments'
      ]
    },
    {
      id: 'cat',
      name: 'Cat Plan',
      icon: '🐈',
      price: 20,
      color: '#e53e3e',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      popular: false,
      description: 'Essential care for your feline friend',
      features: [
        'Unlimited access to our 24/7 vet helpline for everyday advice and personalised support',
        'Year-round, vet-prescribed protection against fleas, ticks and worms, tailored to your cat',
        'Annual vaccinations and annual health check. Includes initial vaccination course for unvaccinated cats',
        '2 face-to-face consultations with your vet to discuss your cat\'s health or if unwell',
        '3 nurse checks including free weight monitoring and nail clips',
        'Microchipping for your cat if required',
        '1 annual health and wellness blood screen for just £45',
        'Handy reminders for vaccinations and flea, tick, or worm treatments'
      ]
    },
    {
      id: 'exotic',
      name: 'Exotic Plan',
      icon: '🦜',
      price: 15,
      color: '#38a169',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      popular: false,
      description: 'Specialized care for rabbits, birds, reptiles & small mammals',
      features: [
        'Unlimited access to our 24/7 vet helpline for specialist exotic pet advice',
        'Year-round parasite prevention tailored to your exotic pet\'s specific needs',
        'Annual health check with our exotic pet specialists',
        '2 face-to-face consultations with your vet for health concerns',
        '3 nurse checks including weight monitoring and wellness assessments',
        'Microchipping for rabbits if required',
        '1 annual health and wellness check for just £35',
        'Handy reminders for health checks and preventative treatments'
      ]
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: '📞',
      title: '24/7 Vet Helpline',
      description: 'Round-the-clock expert advice whenever you need it'
    },
    {
      icon: '🛡️',
      title: 'Preventative Care',
      description: 'Stay ahead of health issues with regular check-ups'
    },
    {
      icon: '📅',
      title: 'Smart Reminders',
      description: 'Never miss a vaccination or treatment date'
    },
    {
      icon: '🏆',
      title: 'Expert Team',
      description: 'Access to our qualified veterinary professionals'
    }
  ];

  function selectPlan(planId: string) {
    selectedPlan = planId;
  }
</script>

<svelte:head>
  <title>Bozzle Plans - Care Plans | Bozzles Ark Vets</title>
  <meta name="description" content="Comprehensive pet care plans for dogs, cats, and exotic pets. Spread the cost with our flexible monthly payment plans." />
</svelte:head>

<div class="bozzle-plans-page">
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1 in:fly={{ y: -30, duration: 600, delay: 100 }}>Bozzle Plans</h1>
      <p class="hero-subtitle" in:fly={{ y: -30, duration: 600, delay: 200 }}>
        Complete Care for Your Beloved Companions
      </p>
      <p class="hero-description" in:fly={{ y: -30, duration: 600, delay: 300 }}>
        Spread the cost of essential healthcare with our flexible monthly payment plans. 
        Give your pet the care they deserve without the worry.
      </p>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="benefits">
    <div class="container">
      <h2>Why Choose a Bozzle Plan?</h2>
      <div class="benefits-grid">
        {#each benefits as benefit, i}
          <div 
            class="benefit-card" 
            in:scale={{ delay: 100 * i, duration: 500, easing: quintOut }}
          >
            <div class="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Plans Section -->
  <section class="plans">
    <div class="container">
      <h2>Choose Your Perfect Plan</h2>
      <p class="plans-subtitle">
        All plans include comprehensive preventative care and unlimited support
      </p>

      <div class="plans-grid">
        {#each plans as plan, i}
          <div 
            class="plan-card {selectedPlan === plan.id ? 'selected' : ''}"
            style="--plan-color: {plan.color}; --plan-gradient: {plan.gradient};"
            in:fly={{ y: 30, duration: 600, delay: 100 * i, easing: quintOut }}
            onclick={() => selectPlan(plan.id)}
            role="button"
            tabindex="0"
            onkeydown={(e) => e.key === 'Enter' && selectPlan(plan.id)}
          >
            {#if plan.popular}
              <div class="popular-badge">Most Popular</div>
            {/if}

            <div class="plan-header">
              <div class="plan-icon">{plan.icon}</div>
              <h3>{plan.name}</h3>
              <p class="plan-description">{plan.description}</p>
              <div class="plan-price">
                <span class="price-amount">£{plan.price}</span>
                <span class="price-period">/ month</span>
              </div>
            </div>

            <div class="plan-features">
              {#each plan.features as feature}
                <div class="feature-item">
                  <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </div>
              {/each}
            </div>

            <button class="plan-cta">Get Started</button>
          </div>
        {/each}
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
        <a href="/appointments" class="btn-primary">Book a Consultation</a>
        <a href="/contact" class="btn-secondary">Contact Us</a>
      </div>
      <p class="contact-info">
        Questions? Call us at <strong>01455 XXX XXX</strong> or visit us at 39 Jersey Way, Barwell, LE9 8HR
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

  /* Benefits Section */
  .benefits {
    padding: 3rem 1rem;
    background-color: white;
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
    text-align: center;
    padding: 1.5rem;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }

  .benefit-card:hover {
    transform: translateY(-5px);
  }

  .benefit-icon {
    background: linear-gradient(135deg, #ebf8ff 0%, #e6f7ff 100%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-size: 2rem;
  }

  .benefit-card h3 {
    font-size: 1.25rem;
    color: #2c5282;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .benefit-card p {
    color: #4a5568;
    font-size: 0.95rem;
  }

  /* Plans Section */
  .plans {
    padding: 4rem 1rem;
    background-color: #f7fafc;
  }

  .plans h2 {
    text-align: center;
    font-size: 2rem;
    color: #1a3c6e;
    margin-bottom: 1rem;
  }

  .plans-subtitle {
    text-align: center;
    color: #4a5568;
    margin-bottom: 3rem;
    font-size: 1.125rem;
  }

  .plans-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    align-items: stretch;
  }

  .plan-card {
    background-color: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 3px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
  }

  .plan-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(49, 130, 206, 0.2);
  }

  .plan-card.selected {
    border-color: var(--plan-color);
    transform: scale(1.02);
    box-shadow: 0 20px 40px rgba(49, 130, 206, 0.25);
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
  }

  .plan-icon {
    font-size: 4rem;
    margin-bottom: 0.5rem;
  }

  .plan-header h3 {
    font-size: 1.75rem;
    color: #1a3c6e;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .plan-description {
    color: #4a5568;
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  .plan-price {
    margin-bottom: 1rem;
  }

  .price-amount {
    font-size: 3rem;
    font-weight: bold;
    color: var(--plan-color);
  }

  .price-period {
    font-size: 1rem;
    color: #718096;
    margin-left: 0.5rem;
  }

  .plan-features {
    margin-bottom: 1.5rem;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 0.75rem;
  }

  .check-icon {
    width: 20px;
    height: 20px;
    color: var(--plan-color);
    flex-shrink: 0;
    margin-top: 2px;
  }

  .feature-item span {
    color: #4a5568;
    font-size: 0.95rem;
    line-height: 1.5;
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
  }

  .plan-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(49, 130, 206, 0.4);
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

    .plans-grid {
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
</style>