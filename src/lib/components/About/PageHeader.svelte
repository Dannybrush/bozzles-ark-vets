<script>
    import { fade, fly } from 'svelte/transition';
    
    const { title = '', subtitle = '', backgroundImage = '', height = 'md' } = $props();
    
    const heightClasses = {
      sm: 'h-48',
      md: 'h-64',
      lg: 'h-80'
    };
    
    let heightClass = $derived(heightClasses[height] || heightClasses.md);
  </script>
  
  <div 
    class="relative overflow-hidden {heightClass} flex items-center justify-center"
    style="background-image: url('{backgroundImage}'); background-size: cover; background-position: center;"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-primary opacity-70"></div>
    
    <!-- Content -->
    <div class="relative z-10 text-center px-4" in:fade={{ duration: 800 }}>
      <h1 class="text-white text-4xl md:text-5xl font-bold mb-2" in:fly={{ y: 20, duration: 800 }}>
        {title}
      </h1>
      
      {#if subtitle}
        <p class="text-white text-xl opacity-90 max-w-2xl mx-auto" in:fly={{ y: 20, duration: 800, delay: 200 }}>
          {subtitle}
        </p>
      {/if}
    </div>
  </div>