<script lang="ts">
    import { page } from '$app/stores';
</script>


<div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#CAF0F8] to-[#90E0EF] text-center px-6">
  <h1 class="text-6xl font-bold text-[#03045E] mb-4">
    {$page.status}
  </h1>

  <h2 class="text-2xl font-semibold text-[#0077B6] mb-6">
    {$page.status === 404 
      ? 'Page Not Found' 
      : 'Something went wrong'}
  </h2>

  <p class="text-lg text-gray-700 max-w-xl mb-8">
    {$page.status === 404 
      ? 'This page is still under construction, or the link you followed doesn’t exist yet.'
      : $page.error?.message || 'We’re working on it — check back soon!'}
  </p>

  <a
    href="/"
    class="px-6 py-3 bg-[#00B4D8] text-black font-medium rounded-2xl shadow-md hover:bg-[#0077B6] transition"
  >
    Return to Homepage
  </a>

  <p class="mt-8 text-sm text-gray-500">
    🚧 Coming soon — we’re building out this part of the site.
  </p>
</div>

<!--<h1>{$page.status}: {$page.error?.message}</h1> --> 