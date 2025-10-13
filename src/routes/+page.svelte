<script>
    

    import Hero from '$lib/components/Home/Hero.svelte';
    import Services from '$lib/components/Home/Services.svelte';
    import Testimonials from '$lib/components/Home/Testimonials.svelte';
    import CallToAction from '$lib/components/Home/CallToAction.svelte';
    import TeamHighlight from '$lib/components/Home/TeamHighlight.svelte';
    import EmergencyBanner from '$lib/components/Home/EmergencyBanner.svelte';
    import PreReg from '$lib/components/Home/PreReg.svelte';
 </script>
  
  <svelte:head>
    <title>Bozzles Ark Vets | Compassionate Care for All Animals</title>
    <meta name="description" content="Bozzles Ark Vets provides comprehensive veterinary care for cats, dogs, birds, reptiles, rabbits and small mammals in a warm, friendly environment.">
    <meta property="og:image" content="https://www.bozzlesarkvets.co.uk/new-logo.jpg" />
</svelte:head>

  <main>

    <!-- Emergency banner that's always visible -->
    <EmergencyBanner />
    
    <!-- Hero section with appointment booking -->
    <Hero />
    
    <!-- Main services overview -->
    <Services />
    
    <!-- Pre-registration form -->
    <PreReg />

    <!-- Team introduction -->
    <TeamHighlight />
    
    <!-- Client testimonials -->
    <!--<Testimonials /> --> <!-- Temporarily removed for redesign -->
    
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