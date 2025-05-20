<script>
    // Define the props using Svelte 5 rune syntax
    const { 
      name = '', 
      role = '', 
      image = '', 
      credentials = '', 
      specialty = '', 
      bio = '' 
    } = $props();
    
    
    let isExpanded = $state(false);
    
    function toggleBio() {
      isExpanded = !isExpanded;
    }
  </script>
  
  <div class="card h-full transition-all duration-300 hover:shadow-lg">
    <div class="card-header p-0">
      <img 
        src={image} 
        alt={`${name}, ${role}`} 
        class="w-full h-64 object-cover object-top rounded-t-lg"
        onerror={(e) => { e.currentTarget.src = '/images/team/placeholder.jpg'; }}
      />
    </div>
    <div class="card-body">
      <h3 class="font-bold text-xl text-primary">{name}</h3>
      <p class="text-secondary font-medium">{role}</p>
      <p class="text-text-light text-sm mb-2">{credentials} • {specialty}</p>
      
      {#if bio}
        <p class="text-text-light text-sm mb-3 transition-all duration-300" class:line-clamp-3={!isExpanded}>
          {bio}
        </p>
        <button 
          class="text-primary-light hover:text-primary text-sm font-medium flex items-center"
          onclick={toggleBio}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300" class:rotate-180={isExpanded} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      {/if}
    </div>
  </div>