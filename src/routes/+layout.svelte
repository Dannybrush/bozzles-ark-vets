<script>
  import Header from '$lib/components/Layout/Header.svelte';
  import Footer from '$lib/components/Layout/Footer.svelte';
  import '$lib//styles/global.css';
  //import DevBanner from '$lib/components/Layout/DevBanner.svelte';
  import Popup from '$lib/components/Layout/Popup.svelte';
</script>

<svelte:head>
  <title>Bozzles Ark Vets</title>
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<Popup />

<!--<DevBanner />--> 
<div class="app">
  <Header />
  
  <div class="content">
    <slot />
  </div>
  
  <Footer />
</div>

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