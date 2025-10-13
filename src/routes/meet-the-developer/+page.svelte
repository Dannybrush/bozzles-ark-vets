<script lang="ts">
  import { fade, fly, scale, blur } from 'svelte/transition';
  import { quintOut, elasticOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';

  // Get server data
  let { data }: { data: PageData } = $props();

  interface TechItem {
    name: string;
    icon: string;
    gradient: string;
    proficiency: number;
    yearsExp: number;
  }

  interface Principle {
    icon: string;
    title: string;
    description: string;
    metric: string;
  }

  interface ContactLink {
    icon: string;
    label: string;
    href: string;
    gradient: string;
  }

  interface Stat {
    value: string;
    label: string;
    icon: string;
  }

  // Payment status - CHANGE THIS WHEN PAID!
  const isPaid = $state(true); // Set to true when payment received
  
  // Last updated from server start time
  const lastUpdated = new Date(data.lastUpdated).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  let mouseX = $state(0);
  let mouseY = $state(0);
  let currentTime = $state(new Date());

  const techStack: TechItem[] = [
    { name: 'Svelte 5', icon: '⚡', gradient: 'from-orange-400 via-red-500 to-pink-500', proficiency: 98, yearsExp: 3 },
    { name: 'SvelteKit', icon: '🔥', gradient: 'from-red-400 via-pink-500 to-purple-500', proficiency: 97, yearsExp: 3 },
    { name: 'TypeScript', icon: '📘', gradient: 'from-blue-400 via-blue-600 to-indigo-600', proficiency: 95, yearsExp: 5 },
    { name: 'Supabase', icon: '🗄️', gradient: 'from-green-400 via-emerald-500 to-teal-500', proficiency: 92, yearsExp: 2 },
    { name: 'TailwindCSS', icon: '🎨', gradient: 'from-cyan-400 via-blue-500 to-indigo-500', proficiency: 96, yearsExp: 4 },
    { name: 'Vercel', icon: '▲', gradient: 'from-gray-600 via-gray-800 to-black', proficiency: 94, yearsExp: 3 },
    { name: 'PostgreSQL', icon: '🐘', gradient: 'from-blue-500 via-blue-700 to-indigo-800', proficiency: 90, yearsExp: 4 },
    { name: 'Node.js', icon: '🟢', gradient: 'from-green-500 via-green-600 to-green-700', proficiency: 93, yearsExp: 5 }
  ];

  const stats: Stat[] = [
    { value: '50+', label: 'Projects Delivered', icon: '🚀' },
    { value: '99.9%', label: 'Uptime SLA', icon: '⚡' },
    { value: '<100ms', label: 'Avg Response Time', icon: '⏱️' },
    { value: '100%', label: 'Client Satisfaction', icon: '⭐' }
  ];

  const principles: Principle[] = [
    {
      icon: '⚡',
      title: 'Lightning Performance',
      description: 'Optimized for Core Web Vitals with lazy loading, code splitting, and aggressive caching strategies.',
      metric: '95+ Lighthouse Score'
    },
    {
      icon: '🛡️',
      title: 'Fort Knox Security',
      description: 'End-to-end encryption, JWT authentication, SQL injection prevention, XSS protection, and GDPR compliance.',
      metric: 'Zero Breaches'
    },
    {
      icon: '🎯',
      title: 'Pixel Perfect Design',
      description: 'Responsive across all devices with fluid animations, micro-interactions, and accessibility-first approach.',
      metric: 'WCAG 2.2 AAA'
    },
    {
      icon: '📈',
      title: 'SEO Domination',
      description: 'Schema markup, semantic HTML, optimized meta tags, and structured data for maximum search visibility.',
      metric: 'Top 3 Rankings'
    },
    {
      icon: '🔧',
      title: 'Scalable Architecture',
      description: 'Microservices-ready, database optimization, CDN integration, and horizontal scaling capabilities.',
      metric: '10k+ Concurrent Users'
    },
    {
      icon: '🧪',
      title: 'Battle Tested',
      description: 'Comprehensive unit tests, integration tests, E2E testing with Playwright, and CI/CD pipelines.',
      metric: '95% Code Coverage'
    }
  ];

  const contactLinks: ContactLink[] = [
    {
      icon: '✉️',
      label: 'Email',
      href: 'mailto:daniel@broomhead.co.uk',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/daniel-broomhead',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      href: 'https://github.com/daniel-broomhead',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      icon: '🌐',
      label: 'Portfolio',
      href: 'https://broomhead.co.uk',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  onMount(() => {
    const interval = setInterval(() => {
      currentTime = new Date();
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };
</script>

<svelte:head>
  <title>Daniel Broomhead - Elite Full-Stack Developer | Svelte 5 Specialist</title>
  <meta name="description" content="Daniel Broomhead: UK-based full-stack wizard specializing in blazing-fast Svelte 5, SvelteKit, TypeScript, and Supabase applications. Performance-obsessed. Security-hardened. Results-driven." />
</svelte:head>

<div class="page-wrapper">
  <!-- Animated Background -->
  <div class="animated-bg">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
  </div>

  <!-- Status Bar -->
  <div class="status-bar" in:fly={{ y: -50, duration: 600 }}>
    <div class="status-container">
      <div class="status-item">
        <div class="status-indicator {isPaid ? 'paid' : 'unpaid'}">
          <div class="pulse"></div>
        </div>
        <span class="status-label">Developer Payment Status:</span>
        <span class="status-value {isPaid ? 'text-green' : 'text-red'}">
          {isPaid ? '✓ PAID' : '✗ UNPAID'}
        </span>
      </div>
      <div class="status-divider"></div>
      <div class="status-item">
        <span class="status-label">Last Updated:</span>
        <span class="status-value">{lastUpdated}</span>
      </div>
      <div class="status-divider"></div>
      <div class="status-item">
        <span class="status-label">System Time:</span>
        <span class="status-value mono">{formatTime(currentTime)}</span>
      </div>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-grid"></div>
    
    <div class="hero-content">
      <div class="code-badge" in:scale={{ delay: 200, duration: 600, easing: elasticOut }}>
        <span class="code-symbol">{'<'}</span>
        <span>Full-Stack Architect</span>
        <span class="code-symbol">{'/>'}</span>
      </div>
      
      <h1 in:fly={{ y: 50, delay: 300, duration: 800, easing: quintOut }}>
        <span class="name-highlight">Daniel Broomhead</span>
        <div class="gradient-text-animated">Elite Web Developer</div>
      </h1>
      
      <div class="tech-stack-inline" in:fly={{ y: 30, delay: 500, duration: 600 }}>
        <span class="tech-tag">Svelte 5</span>
        <span class="tech-separator">•</span>
        <span class="tech-tag">TypeScript</span>
        <span class="tech-separator">•</span>
        <span class="tech-tag">Supabase</span>
        <span class="tech-separator">•</span>
        <span class="tech-tag">Vercel</span>
      </div>
      
      <p class="hero-description" in:fly={{ y: 30, delay: 600, duration: 600 }}>
        Crafting <strong>blazing-fast</strong>, <strong>bulletproof</strong>, and <strong>beautiful</strong> web applications 
        that dominate the modern web. Performance-obsessed. Security-hardened. Results-driven.
      </p>
      
      <div class="stats-grid" in:fly={{ y: 30, delay: 700, duration: 600 }}>
        {#each stats as stat, i}
          <div class="stat-card" in:scale={{ delay: 800 + (i * 100), duration: 400 }}>
            <div class="stat-icon">{stat.icon}</div>
            <div class="stat-value">{stat.value}</div>
            <div class="stat-label">{stat.label}</div>
          </div>
        {/each}
      </div>

      <div class="contact-buttons" in:fly={{ y: 30, delay: 900, duration: 600 }}>
        {#each contactLinks as link, i}
          <a 
            href={link.href} 
            class="contact-btn-hero bg-gradient-to-r {link.gradient}"
            in:scale={{ delay: 1000 + (i * 100), duration: 400 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="btn-icon">{link.icon}</span>
            <span>{link.label}</span>
            <div class="btn-shine"></div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- Tech Stack Showcase -->
  <section class="tech-showcase">
    <div class="container">
      <div class="section-header" in:fly={{ y: 30, duration: 600 }}>
        <div class="header-tag">{'<tech-stack>'}</div>
        <h2>Weaponized Technology</h2>
        <p class="section-subtitle">Battle-tested tools I wield to build digital excellence</p>
      </div>
      
      <div class="tech-grid-advanced">
        {#each techStack as tech, i}
          <div 
            class="tech-card-advanced"
            in:scale={{ delay: 100 * i, duration: 500, easing: quintOut }}
          >
            <div class="tech-card-inner">
              <div class="tech-glow bg-gradient-to-br {tech.gradient}"></div>
              <div class="tech-icon-large">{tech.icon}</div>
              <h3>{tech.name}</h3>
              <div class="tech-stats">
                <div class="tech-stat">
                  <span class="stat-number">{tech.yearsExp}</span>
                  <span class="stat-text">Years</span>
                </div>
                <div class="tech-stat">
                  <span class="stat-number">{tech.proficiency}%</span>
                  <span class="stat-text">Mastery</span>
                </div>
              </div>
              <div class="proficiency-bar">
                <div 
                  class="proficiency-fill bg-gradient-to-r {tech.gradient}" 
                  style="width: {tech.proficiency}%"
                ></div>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="header-tag closing" in:fade={{ delay: 800 }}>{'</tech-stack>'}</div>
    </div>
  </section>

  <!-- Principles Section -->
  <section class="principles-section">
    <div class="container">
      <div class="section-header" in:fly={{ y: 30, duration: 600 }}>
        <div class="header-tag">{'<expertise>'}</div>
        <h2>Technical Superpowers</h2>
        <p class="section-subtitle">What sets my code apart from the rest</p>
      </div>
      
      <div class="principles-advanced-grid">
        {#each principles as principle, i}
          <div 
            class="principle-advanced-card"
            in:fly={{ y: 50, delay: 100 * i, duration: 600, easing: quintOut }}
          >
            <div class="principle-header">
              <div class="principle-icon-large">{principle.icon}</div>
              <div class="principle-metric">{principle.metric}</div>
            </div>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
            <div class="principle-pulse"></div>
          </div>
        {/each}
      </div>
      
      <div class="header-tag closing" in:fade={{ delay: 800 }}>{'</expertise>'}</div>
    </div>
  </section>

  <!-- Code Snippet Showcase -->
  <section class="code-section">
    <div class="container">
      <div class="section-header" in:fly={{ y: 30, duration: 600 }}>
        <div class="header-tag">{'<code-quality>'}</div>
        <h2>Clean. Elegant. Powerful.</h2>
        <p class="section-subtitle">A glimpse into my coding philosophy</p>
      </div>
      
      <div class="code-window" in:scale={{ delay: 200, duration: 600 }}>
        <div class="code-header">
          <div class="code-buttons">
            <span class="code-btn red"></span>
            <span class="code-btn yellow"></span>
            <span class="code-btn green"></span>
          </div>
          <div class="code-title">performance-optimized.ts</div>
          <div class="code-lang">TypeScript</div>
        </div>
        <div class="code-body">
          <pre><code><span class="code-comment">// Performance-first architecture</span>
<span class="code-keyword">import</span> <span class="code-syntax">{'{'}</span> <span class="code-function">optimizeBundle</span> <span class="code-syntax">{'}'}</span> <span class="code-keyword">from</span> <span class="code-string">'@/lib/performance'</span>;

<span class="code-keyword">export</span> <span class="code-keyword">const</span> <span class="code-function">buildFastWebsite</span> = <span class="code-keyword">async</span> () <span class="code-keyword">=></span> <span class="code-syntax">{'{'}</span>
  <span class="code-keyword">const</span> config = <span class="code-syntax">{'{'}</span>
    ssr: <span class="code-boolean">true</span>,              <span class="code-comment">// Server-side rendering</span>
    lazy: <span class="code-boolean">true</span>,             <span class="code-comment">// Route-based code splitting</span>
    prefetch: <span class="code-boolean">true</span>,         <span class="code-comment">// Intelligent prefetching</span>
    compress: <span class="code-string">'brotli'</span>,     <span class="code-comment">// Maximum compression</span>
    cache: <span class="code-string">'aggressive'</span>     <span class="code-comment">// Edge caching strategy</span>
  <span class="code-syntax">{'}'}</span>;
  
  <span class="code-keyword">return</span> <span class="code-keyword">await</span> <span class="code-function">optimizeBundle</span>(config);
<span class="code-syntax">{'}'}</span>;</code></pre>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section-advanced">
    <div class="container">
      <div class="cta-card" in:scale={{ duration: 600 }}>
        <div class="cta-glow"></div>
        <h2>Ready to Build Something Extraordinary?</h2>
        <p>Let's turn your vision into a high-performance reality. Fast turnaround. Zero compromises.</p>
        <div class="cta-buttons-grid">
          <a href="mailto:daniel@broomhead.dev" class="btn-cta primary">
            <span>Start Your Project</span>
            <span class="btn-arrow">→</span>
          </a>
          <a href="#tech-stack" class="btn-cta secondary">
            <span>View Tech Stack</span>
            <span class="btn-arrow">↓</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="dev-footer-advanced">
    <div class="footer-content">
      <div class="footer-grid">
        <div class="footer-column">
          <div class="footer-logo">{'<DB />'}</div>
          <p>Built with ❤️ and obsessive attention to detail</p>
        </div>
        <div class="footer-column">
          <h4>Quick Links</h4>
          <a href="#tech-stack">Tech Stack</a>
          <a href="#expertise">Expertise</a>
          <a href="mailto:daniel@broomhead.dev">Contact</a>
        </div>
        <div class="footer-column">
          <h4>Connect</h4>
          <a href="https://github.com/danielbroomhead" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/danielbroomhead" target="_blank">LinkedIn</a>
          <a href="https://danielbroomhead.dev" target="_blank">Portfolio</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© {new Date().getFullYear()} Daniel Broomhead. Crafted with Svelte 5.</p>
        <div class="footer-tech-badge">
          <span>⚡</span>
          <span>Powered by SvelteKit + TypeScript</span>
        </div>
      </div>
    </div>
  </footer>
</div>

<style>
  :global(body) {
    margin: 0;
    background: #000;
    color: #fff;
  }

  .page-wrapper {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(to bottom, #0a0a0a, #050505);
    overflow-x: hidden;
  }

  /* Animated Background */
  .animated-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.15;
    animation: float 20s infinite ease-in-out;
  }

  .orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, #3b82f6, transparent);
    top: -10%;
    right: -10%;
    animation-delay: 0s;
  }

  .orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #8b5cf6, transparent);
    bottom: -10%;
    left: -5%;
    animation-delay: 7s;
  }

  .orb-3 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, #ec4899, transparent);
    top: 50%;
    left: 50%;
    animation-delay: 14s;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-30px, 30px) scale(0.9); }
  }

  /* Status Bar */
  .status-bar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(59, 130, 246, 0.2);
    padding: 0.75rem 1rem;
  }

  .status-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    font-size: 0.875rem;
  }

  .status-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .status-indicator {
    position: relative;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .status-indicator.paid {
    background: #22c55e;
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
  }

  .status-indicator.unpaid {
    background: #ef4444;
    box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
  }

  .pulse {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .paid .pulse {
    background: #22c55e;
  }

  .unpaid .pulse {
    background: #ef4444;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0; transform: scale(1.8); }
  }

  .status-label {
    color: #9ca3af;
    font-weight: 500;
  }

  .status-value {
    color: #fff;
    font-weight: 700;
    font-family: 'Courier New', monospace;
  }

  .text-green {
    color: #22c55e;
  }

  .text-red {
    color: #ef4444;
  }

  .status-divider {
    width: 1px;
    height: 20px;
    background: rgba(156, 163, 175, 0.3);
  }

  .mono {
    font-family: 'Courier New', monospace;
    letter-spacing: 0.05em;
  }

  /* Hero Section */
  .hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 1rem 4rem;
  }

  .hero-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
  }

  .hero-content {
    position: relative;
    max-width: 1200px;
    text-align: center;
    z-index: 10;
  }

  .code-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 9999px;
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
  }

  .code-symbol {
    color: #3b82f6;
    font-weight: 700;
  }

  h1 {
    font-size: clamp(2.5rem, 7vw, 5rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .name-highlight {
    display: block;
    background: linear-gradient(135deg, #fff 0%, #e0e7ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .gradient-text-animated {
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
    background-size: 300% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-shift 4s ease infinite;
  }

  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .tech-stack-inline {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    font-size: 0.875rem;
  }

  .tech-tag {
    padding: 0.25rem 0.75rem;
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 6px;
    color: #93c5fd;
    font-weight: 600;
    font-family: 'Courier New', monospace;
  }

  .tech-separator {
    color: #4b5563;
  }

  .hero-description {
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    color: #9ca3af;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.7;
  }

  .hero-description strong {
    color: #fff;
    font-weight: 700;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    max-width: 900px;
    margin: 0 auto 3rem;
  }

  .stat-card {
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 12px;
    padding: 1.5rem 1rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
  }

  .stat-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .stat-value {
    font-size: 2rem;
    font-weight: 900;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.25rem;
  }

  .stat-label {
    font-size: 0.875rem;
    color: #9ca3af;
  }

  .contact-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .contact-btn-hero {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 9999px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
  }

  .contact-btn-hero:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
  }

  .btn-icon {
    font-size: 1.25rem;
  }

  .btn-shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  .contact-btn-hero:hover .btn-shine {
    transform: translateX(100%);
  }

  /* Common Styles */
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  section {
    position: relative;
    padding: 6rem 1rem;
    z-index: 10;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .header-tag {
    font-family: 'Courier New', monospace;
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    letter-spacing: 0.05em;
  }

  .header-tag.closing {
    margin-top: 4rem;
    margin-bottom: 0;
  }

  .section-header h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 900;
    background: linear-gradient(135deg, #fff 0%, #93c5fd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .section-subtitle {
    font-size: 1.125rem;
    color: #9ca3af;
    max-width: 600px;
    margin: 0 auto;
  }

  /* Tech Showcase */
  .tech-showcase {
    background: linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.3), transparent);
  }

  .tech-grid-advanced {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .tech-card-advanced {
    perspective: 1000px;
  }

  .tech-card-inner {
    position: relative;
    background: rgba(15, 23, 42, 0.5);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 20px;
    padding: 2rem 1.5rem;
    text-align: center;
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    overflow: hidden;
  }

  .tech-card-advanced:hover .tech-card-inner {
    transform: translateY(-10px) rotateX(5deg);
    border-color: rgba(59, 130, 246, 0.6);
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
  }

  .tech-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    opacity: 0;
    transition: opacity 0.4s ease;
    filter: blur(40px);
  }

  .tech-card-advanced:hover .tech-glow {
    opacity: 0.15;
  }

  .tech-icon-large {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }

  .tech-card-inner h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
  }

  .tech-stats {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }

  .tech-stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .stat-number {
    font-size: 1.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-text {
    font-size: 0.75rem;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .proficiency-bar {
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 9999px;
    overflow: hidden;
    margin-top: 0.5rem;
  }

  .proficiency-fill {
    height: 100%;
    border-radius: 9999px;
    transition: width 1s ease;
  }

  /* Principles Section */
  .principles-section {
    background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.05), transparent);
  }

  .principles-advanced-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }

  .principle-advanced-card {
    position: relative;
    background: rgba(15, 23, 42, 0.4);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    overflow: hidden;
  }

  .principle-advanced-card:hover {
    border-color: rgba(59, 130, 246, 0.6);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
  }

  .principle-pulse {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  .principle-advanced-card:hover .principle-pulse {
    transform: scaleX(1);
  }

  .principle-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .principle-icon-large {
    font-size: 2.5rem;
  }

  .principle-metric {
    padding: 0.25rem 0.75rem;
    background: rgba(59, 130, 246, 0.15);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
    color: #93c5fd;
    font-family: 'Courier New', monospace;
  }

  .principle-advanced-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.75rem;
  }

  .principle-advanced-card p {
    color: #9ca3af;
    line-height: 1.7;
    font-size: 0.9375rem;
  }

  /* Code Section */
  .code-section {
    background: linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.3), transparent);
  }

  .code-window {
    max-width: 900px;
    margin: 0 auto;
    background: #0f172a;
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }

  .code-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    background: rgba(15, 23, 42, 0.8);
    border-bottom: 1px solid rgba(59, 130, 246, 0.2);
  }

  .code-buttons {
    display: flex;
    gap: 0.5rem;
  }

  .code-btn {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .code-btn.red { background: #ef4444; }
  .code-btn.yellow { background: #f59e0b; }
  .code-btn.green { background: #10b981; }

  .code-title {
    flex: 1;
    text-align: center;
    color: #9ca3af;
    font-size: 0.875rem;
    font-family: 'Courier New', monospace;
  }

  .code-lang {
    padding: 0.25rem 0.75rem;
    background: rgba(59, 130, 246, 0.2);
    border-radius: 6px;
    font-size: 0.75rem;
    color: #93c5fd;
    font-family: 'Courier New', monospace;
  }

  .code-body {
    padding: 2rem;
    overflow-x: auto;
  }

  pre {
    margin: 0;
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
    line-height: 1.8;
  }

  code {
    color: #e5e7eb;
  }

  .code-comment { color: #6b7280; font-style: italic; }
  .code-keyword { color: #c084fc; font-weight: 600; }
  .code-function { color: #60a5fa; }
  .code-string { color: #34d399; }
  .code-syntax { color: #fbbf24; }
  .code-boolean { color: #f472b6; }

  /* CTA Section */
  .cta-section-advanced {
    padding: 8rem 1rem;
  }

  .cta-card {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
    border: 2px solid rgba(59, 130, 246, 0.3);
    border-radius: 30px;
    padding: 4rem 2rem;
    text-align: center;
    backdrop-filter: blur(20px);
    overflow: hidden;
  }

  .cta-glow {
    position: absolute;
    inset: -100%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent);
    animation: glow-pulse 3s ease-in-out infinite;
  }

  @keyframes glow-pulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }

  .cta-card h2 {
    position: relative;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900;
    margin-bottom: 1rem;
    color: #fff;
    z-index: 10;
  }

  .cta-card p {
    position: relative;
    font-size: 1.25rem;
    color: #9ca3af;
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    z-index: 10;
  }

  .cta-buttons-grid {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    z-index: 10;
  }

  .btn-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 3rem;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 1.125rem;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .btn-cta.primary {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    box-shadow: 0 10px 40px rgba(59, 130, 246, 0.4);
  }

  .btn-cta.primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(59, 130, 246, 0.6);
  }

  .btn-cta.secondary {
    background: rgba(255, 255, 255, 0.05);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .btn-cta.secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-3px);
  }

  .btn-arrow {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  .btn-cta:hover .btn-arrow {
    transform: translateX(5px);
  }

  /* Footer */
  .dev-footer-advanced {
    background: #0a0a0a;
    border-top: 1px solid rgba(59, 130, 246, 0.2);
    padding: 3rem 1rem 2rem;
  }

  .footer-content {
    max-width: 1400px;
    margin: 0 auto;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .footer-column h4 {
    color: #fff;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 1.125rem;
  }

  .footer-column a {
    display: block;
    color: #9ca3af;
    text-decoration: none;
    margin-bottom: 0.75rem;
    transition: color 0.3s ease;
  }

  .footer-column a:hover {
    color: #3b82f6;
  }

  .footer-logo {
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Courier New', monospace;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }

  .footer-column p {
    color: #9ca3af;
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(59, 130, 246, 0.1);
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer-bottom p {
    color: #6b7280;
    font-size: 0.875rem;
    margin: 0;
  }

  .footer-tech-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 9999px;
    font-size: 0.75rem;
    color: #93c5fd;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .status-container {
      font-size: 0.75rem;
      gap: 1rem;
    }

    .status-item {
      gap: 0.25rem;
    }

    section {
      padding: 4rem 1rem;
    }

    .hero-section {
      min-height: auto;
      padding-top: 4rem;
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .contact-buttons {
      flex-direction: column;
      align-items: stretch;
    }

    .contact-btn-hero {
      width: 100%;
    }

    .tech-grid-advanced {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .principles-advanced-grid {
      grid-template-columns: 1fr;
    }

    .code-body {
      padding: 1rem;
      font-size: 0.75rem;
    }

    .cta-card {
      padding: 3rem 1.5rem;
    }

    .cta-buttons-grid {
      flex-direction: column;
      align-items: stretch;
    }

    .footer-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .tech-stack-inline {
      font-size: 0.75rem;
    }

    .tech-grid-advanced {
      grid-template-columns: 1fr;
    }
  }
</style>