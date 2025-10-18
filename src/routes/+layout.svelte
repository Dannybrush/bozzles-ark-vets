<script>
  import Header from '$lib/components/Layout/Header.svelte';
  import Footer from '$lib/components/Layout/Footer.svelte';
  import '$lib//styles/global.css';
  //import DevBanner from '$lib/components/Layout/DevBanner.svelte';
  import Popup from '$lib/components/Layout/Popup.svelte';
    import OpeningSoonBanner from '$lib/components/Layout/OpeningSoonBanner.svelte';
    import OsBanner2 from '$lib/components/Layout/OS_banner2.svelte';
    import CookieBanner from '$lib/components/CookieBanner.svelte';  
     import { cookiePreferences} from '$lib/stores/cookieStore'; 
    import { onMount } from 'svelte';

     onMount(() => {
       cookiePreferences.load() } );

</script>

<svelte:head>
  <title>Bozzles Ark Vets</title>
  <link rel="icon" type="image/jpeg" href="/images/new-bw-logo.jpg" />
  <link rel="icon" href="/favicon.ico" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <meta property="og:site_name" content="Bozzles Ark Vets">
  <meta property="og:title" content="Bozzles Ark Vets">
  <meta property="og:description" content="Comprehensive veterinary care for all your beloved companions">
  <meta property="og:url" content="https://www.bozzlesarkvets.co.uk">
  <meta property="og:image" content="https://www.bozzlesarkvets.co.uk/images/new-bw-logo.jpg ">

   <!-- ✅ Optional JSON-LD (helps Google link your branding) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://www.bozzlesarkvets.co.uk",
    "logo": "https://www.bozzlesarkvets.co.uk/favicon-512.png"
  }
  </script>

</svelte:head>

<Popup />
<!--<OpeningSoonBanner /> --> 
<OsBanner2 />



<!--<DevBanner />--> 
<div class="app">
  <Header />
  
  <div class="content">
    <slot />
  </div>
  
  <Footer />
</div>
<CookieBanner />
<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content {
    flex: 1;
  }
</style>