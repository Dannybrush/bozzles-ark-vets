<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib//styles/global.css';
    import DevBanner from '$lib/components/DevBanner.svelte';
</script>

<svelte:head>
  <title>Bozzles Ark Vets</title>
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<DevBanner />
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