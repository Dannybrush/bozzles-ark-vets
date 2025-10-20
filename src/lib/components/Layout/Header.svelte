<script>
    import { onMount } from 'svelte';
    
    let scrollY;
    let isMenuOpen = false;
    let isScrolled = false;
    let miniLogo = '/images/new-bw-logo.jpg'; // A smaller version of the logo
    
    // Toggle mobile menu
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    }
    
    // Close menu when clicking outside
    function closeMenu() {
      isMenuOpen = false;
    }
    
    onMount(() => {
      // Handle scroll for sticky header effect
      const handleScroll = () => {
        isScrolled = window.scrollY > 50;
      };
      
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  </script>
  
  <svelte:window bind:scrollY />
  
  <header class="header" class:scrolled={isScrolled}>
    <div class="container">
      <div class="header-content">
        <a href="/" class="logo-link">
          <img src={miniLogo} alt="Bozzles Ark Vets" class="header-logo" />
          <span class="site-name">Bozzles Ark Vets</span>
        </a>
        
        <nav class="main-nav" class:active={isMenuOpen}>
          <ul class="nav-list">
            <li><a href="/" class="nav-link">Home</a></li>
            <li><a href="/services" class="nav-link">Services</a></li>
            <li><a href="/services/pricelist" class="nav-link">Price List</a></li>
            <li><a href="/bozzle-plans" class="nav-link">Bozzle Health Plans</a></li>

            <!--<li><a href="/about-us" class="nav-link">About Us</a></li>
            <li><a href="/new-clients" class="nav-link">New Clients</a></li>
            <li><a href="/resources" class="nav-link">Pet Resources</a></li> --> 
            <li><a href="/contact" class="nav-link">Contact</a></li>
            <li><a href="/pre-registration" class="nav-link">Pre-Register! </a></li>
          </ul>
        </nav>
        
        <div class="header-actions">
          <a href="/pet-portal" class="portal-link">Pet Portal</a>
          <a href="/appointments" class="book-btn">Book Appointment</a>
          <button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
            <span class="menu-icon"></span>
          </button>
        </div>
      </div>
    </div>
    
    {#if isMenuOpen}
      <div class="menu-backdrop" on:click={closeMenu}></div>
    {/if}
  </header>
  
  <style>
    .header {
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1rem 0;
      position: relative;
      z-index: 50;
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
    
    .logo-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      color: #1a3c6e;
      font-weight: bold;
      font-size: 1.25rem;
    }
    
    .header-logo {
      height: 40px;
      width: auto;
      border-radius: 50%;
    }
    
    .main-nav {
      display: flex;
      align-items: center;
      z-index: 110;
    }
    
    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 1.5rem;
    }
    
    .nav-link {
      color: #4a5568;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
      padding: 0.5rem 0;
      position: relative;
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
    
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      width: 30px;
      height: 24px;
      position: relative;
      z-index: 100;
    }
    
    .menu-icon {
      display: block;
      width: 100%;
      height: 2px;
      background-color: #4a5568;
      position: relative;
      transition: background-color 0.3s ease;
    }
    
    .menu-icon::before,
    .menu-icon::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #4a5568;
      transition: all 0.3s ease;
    }
    
    .menu-icon::before {
      top: -8px;
    }
    
    .menu-icon::after {
      bottom: -8px;
    }
    
    .menu-backdrop {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 40;
    }
    
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
        z-index: 50;
      }
      
      .main-nav.active {
        transform: translateX(0);
      }
      
      .nav-list {
        flex-direction: column;
        gap: 1rem;
      }
      
      .nav-link {
        display: block;
        padding: 0.75rem 0;
        font-size: 1.25rem;
      }
      
      .menu-toggle {
        display: block;
      }
      
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
    }
  </style>