<script lang="ts">
    import type {NavigationConfig} from '$lib/types/navigation';

const navConfig: NavigationConfig = {
  mainLinks: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/services/pricelist', label: 'Price List' },
    { href: '/bozzle-plans', label: 'Bozzle Health Plans' },
    { href: '/contact', label: 'Contact' },
    // { href: '/pre-registration', label: 'Pre-Register!' }
    { href: '/appointments', label: 'Appointments' }
  ],
  actionLinks: {
    portal: { href: '/pet-portal', label: 'Pet Portal' },
    booking: { href: '/appointments', label: 'Book Appointment' }
  }
};

  /**
   * Header Component for Bozzles Ark Vets
   * Refactored for Svelte 5 with TypeScript
   * WCAG 2.2 Level AA Compliant
   */
  
  // Reactive state using Svelte 5 runes
  let isMenuOpen = $state<boolean>(false);
  let isScrolled = $state<boolean>(false);
  let menuToggleButton = $state<HTMLButtonElement | null>(null);
  
  const miniLogo: string = '/images/new-bw-logo.jpg';
  
  /**
   * Toggle mobile menu open/closed
   */
  function toggleMenu(): void {
    isMenuOpen = !isMenuOpen;
  }
  
  /**
   * Close mobile menu and return focus to toggle button
   */
  function closeMenu(): void {
    if (isMenuOpen) {
      isMenuOpen = false;
      // Return focus for accessibility
      menuToggleButton?.focus();
    }
  }
  
  /**
   * Handle nav link clicks - close mobile menu
   */
  function handleNavClick(): void {
    if (isMenuOpen) {
      closeMenu();
    }
  }
  
  /**
   * Handle keyboard events (Escape to close menu)
   */
  function handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  }
  
  /**
   * Throttle function to limit event listener firing rate
   */
  function throttle<T extends (...args: any[]) => any>(
    func: T, 
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    
    return function(this: any, ...args: Parameters<T>) {
      if (timeout === null) {
        func.apply(this, args);
        timeout = setTimeout(() => {
          timeout = null;
        }, delay);
      }
    };
  }
  
  /**
   * Effect for scroll and keyboard event listeners
   */
  $effect(() => {
    const handleScroll = throttle(() => {
      isScrolled = window.scrollY > 50;
    }, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add keyboard listener when menu is open
    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeydown);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<header class="header" class:scrolled={isScrolled} role="banner">
  <div class="container">
    <div class="header-content">
      <!-- Logo -->
      <a href="/" class="logo-link" aria-label="Bozzles Ark Vets - Home">
        <img 
          src={miniLogo} 
          alt="Bozzles Ark Vets logo" 
          class="header-logo"
          width="40"
          height="40"
          loading="eager"
        />
        <span class="site-name">Bozzles Ark Vets</span>
      </a>
      
<nav 
  class="main-nav" 
  class:active={isMenuOpen}
  id="main-navigation"
  aria-label="Main navigation"
>
  <ul class="nav-list" role="list">
    {#each navConfig.mainLinks as link}
      <li>
        <a 
          href={link.href} 
          class="nav-link" 
          onclick={handleNavClick}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
        >
          {link.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
      
      <!-- Header Actions -->
<div class="header-actions">
  <a 
    href={navConfig.actionLinks.portal.href} 
    class="portal-link"
    target={navConfig.actionLinks.portal.external ? '_blank' : undefined}
    rel={navConfig.actionLinks.portal.external ? 'noopener noreferrer' : undefined}
  >
    {navConfig.actionLinks.portal.label}
  </a>
  <a 
    href={navConfig.actionLinks.booking.href} 
    class="book-btn"
  >
    {navConfig.actionLinks.booking.label}
  </a>
  
  <!-- Mobile Menu Toggle -->
  <button 
    bind:this={menuToggleButton}
    class="menu-toggle" 
    class:active={isMenuOpen}
    onclick={toggleMenu} 
    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isMenuOpen}
    aria-controls="main-navigation"
    type="button"
  >
    <span class="menu-icon" aria-hidden="true"></span>
  </button>
</div>
  
  <!-- Mobile Menu Backdrop -->
  {#if isMenuOpen}
    <div 
      class="menu-backdrop" 
      onclick={closeMenu}
      role="presentation"
    ></div>
  {/if}
</header>

<style>
  /* ===== BASE HEADER STYLES ===== */
  .header {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    position: relative;
    z-index: 1000;
    transition: all 0.3s ease;
  }
  
  .header.scrolled {
    padding: 0.5rem 0;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  /* ===== LOGO ===== */
  .logo-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: #1a3c6e;
    font-weight: bold;
    font-size: 1.25rem;
    transition: opacity 0.2s ease;
  }
  
  .logo-link:hover {
    opacity: 0.8;
  }
  
  .header-logo {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  /* ===== NAVIGATION ===== */
  .main-nav {
    display: flex;
    align-items: center;
    z-index: 1001;
  }
  
  .nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1.5rem;
  }
  
  .nav-link {
    color: #2d3748;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
    padding: 0.5rem 0;
    position: relative;
    display: block;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3182ce;
    transition: width 0.3s ease;
  }
  
  .nav-link:hover {
    color: #3182ce;
  }
  
  .nav-link:hover::after {
    width: 100%;
  }
  
  /* ===== FOCUS STYLES (WCAG 2.2 AA) ===== */
  .nav-link:focus-visible,
  .portal-link:focus-visible,
  .book-btn:focus-visible,
  .menu-toggle:focus-visible,
  .logo-link:focus-visible {
    outline: 3px solid #3182ce;
    outline-offset: 2px;
    border-radius: 4px;
  }
  
  /* Remove default focus for mouse users */
  .nav-link:focus:not(:focus-visible),
  .portal-link:focus:not(:focus-visible),
  .book-btn:focus:not(:focus-visible),
  .menu-toggle:focus:not(:focus-visible),
  .logo-link:focus:not(:focus-visible) {
    outline: none;
  }
  
  /* ===== HEADER ACTIONS ===== */
  .header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .portal-link {
    color: #3182ce;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }
  
  .portal-link:hover {
    background-color: #ebf8ff;
  }
  
  .portal-link:active {
    opacity: 0.8;
  }
  
  .book-btn {
    background-color: #e53e3e;
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    transition: all 0.3s ease;
    white-space: nowrap;
  }
  
  .book-btn:hover {
    background-color: #c53030;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(229, 62, 62, 0.25);
  }
  
  .book-btn:active {
    transform: translateY(0);
  }
  
  /* ===== MOBILE MENU TOGGLE ===== */
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    width: 30px;
    height: 24px;
    position: relative;
    z-index: 1002;
    padding: 0;
  }
  
  .menu-icon {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #2d3748;
    position: relative;
    transition: background-color 0.3s ease;
  }
  
  .menu-icon::before,
  .menu-icon::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #2d3748;
    transition: all 0.3s ease;
  }
  
  .menu-icon::before {
    top: -8px;
  }
  
  .menu-icon::after {
    bottom: -8px;
  }
  
  /* Menu toggle active state */
  .menu-toggle.active .menu-icon {
    background-color: transparent;
  }
  
  .menu-toggle.active .menu-icon::before {
    transform: rotate(45deg);
    top: 0;
  }
  
  .menu-toggle.active .menu-icon::after {
    transform: rotate(-45deg);
    bottom: 0;
  }
  
  /* ===== MENU BACKDROP ===== */
  .menu-backdrop {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  
  /* ===== RESPONSIVE DESIGN ===== */
  @media (max-width: 1024px) {
    .main-nav {
      position: fixed;
      top: 0;
      right: 0;
      width: 80%;
      max-width: 300px;
      height: 100vh;
      background-color: white;
      padding: 5rem 2rem 2rem;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
      overflow-y: auto;
    }
    
    .main-nav.active {
      transform: translateX(0);
    }
    
    .nav-list {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .nav-link {
      padding: 0.75rem 0;
      font-size: 1.125rem;
    }
    
    .menu-toggle {
      display: block;
    }
    
    .menu-backdrop {
      display: block;
    }
    
    .portal-link {
      display: none;
    }
  }
  
  @media (max-width: 640px) {
    .site-name {
      display: none;
    }
    
    .header-content {
      justify-content: space-between;
    }
    
    .book-btn {
      font-size: 0.875rem;
      padding: 0.5rem 0.75rem;
    }
  }
  
  /* ===== ACCESSIBILITY ===== */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  
  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .nav-link,
    .portal-link,
    .book-btn {
      border: 2px solid currentColor;
    }
  }
  
  /* Touch-friendly sizing */
  @media (hover: none) and (pointer: coarse) {
    .nav-link,
    .portal-link,
    .book-btn {
      min-height: 44px;
      min-width: 44px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>