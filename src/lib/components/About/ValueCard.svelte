
<script>
    const { title = '', icon = '', description = '' } = $props();

    console.log('ValueCard props:', { title, icon, description });
    
    // Map of icon names to SVG paths
    const iconPaths = {
      heart: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
      award: 'M12 15c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
      'message-circle': 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
      users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm12 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 0v1m0 0a4 4 0 0 0-4 4v2h8v-2a4 4 0 0 0-4-4z',
      shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
      'trending-up': 'M23 6l-9.5 9.5-5-5L1 18',
      clipboard: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 0v4m4-4v4M9 3h6v4H9V3z'
    };
    
    // Default to heart icon if specified icon doesn't exist
    const iconPath = $derived(iconPaths[icon] || iconPaths.heart);
    console.log('Icon path:', iconPath);
  </script>
  
  <div class="card h-full bg-white hover:shadow-md transition-shadow duration-300">
    <div class="card-body">
      <div class="flex flex-col items-center text-center">
        <div class="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d={iconPath}></path>
          </svg>
        </div>
        
        <h3 class="text-xl font-bold text-primary mb-2">{title}</h3>
        
        <p class="text-text-light">
          {description}
        </p>
      </div>
    </div>
  </div>