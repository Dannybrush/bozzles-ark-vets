<script>
    

    import Hero from '$lib/components/Hero.svelte';
    import Services from '$lib/components/Services.svelte';
    import Testimonials from '$lib/components/Testimonials.svelte';
    import CallToAction from '$lib/components/CallToAction.svelte';
    import TeamHighlight from '$lib/components/TeamHighlight.svelte';
    import EmergencyBanner from '$lib/components/EmergencyBanner.svelte';
  </script>
  
  <svelte:head>
    <title>Bozzles Ark Vets | Compassionate Care for All Animals</title>
    <meta name="description" content="Bozzles Ark Vets provides comprehensive veterinary care for cats, dogs, birds, reptiles, rabbits and small mammals in a warm, friendly environment.">
    <meta property="og:image" content="logo.jpg">
  
</svelte:head>

  <main>

    <!-- Emergency banner that's always visible -->
    <EmergencyBanner />
    
    <!-- Hero section with appointment booking -->
    <Hero />
    
    <!-- Main services overview -->
    <Services />
    
    <!-- Team introduction -->
    <TeamHighlight />
    
    <!-- Client testimonials -->
    <Testimonials />
    
    <!-- Call to action for new clients -->
    <CallToAction />
  </main>
  
  <style>
    main {
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
    }
  </style>