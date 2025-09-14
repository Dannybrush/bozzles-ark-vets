<script lang="ts">
    import { page } from '$app/stores';
</script>


<div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#CAF0F8] via-[#90E0EF] to-white px-6 text-center relative overflow-hidden">

  <!-- Floating background shapes -->
  <div class="absolute -top-20 -left-20 w-72 h-72 bg-[#00B4D8]/20 rounded-full blur-3xl animate-pulse"></div>
  <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0077B6]/20 rounded-full blur-3xl animate-pulse"></div>

  <!-- Illustration / Icon -->
  <div class="relative mb-8">
    <div class="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center">
      <span class="text-6xl">🚧</span>
    </div>
    <div class="absolute inset-0 rounded-full border-4 border-dashed border-[#00B4D8] animate-spin-slow"></div>
  </div>

  <!-- $page.status Code -->
  <h1 class="text-7xl font-extrabold text-[#03045E] mb-4 tracking-tight drop-shadow-sm">
    {$page.status}
  </h1>

  <!-- Title -->
  <h2 class="text-3xl md:text-4xl font-semibold text-[#0077B6] mb-6">
    {$page.status === 404 ? 'This Page Is Under Construction' : 'Something Went Wrong'}
  </h2>

  <!-- Message -->
  <p class="text-lg text-gray-700 max-w-2xl mb-10 leading-relaxed">
    {$page.status === 404 
      ? 'We’re still working on this section. Please check back soon for updates and new content!'
      : $page.error?.message || 'We’re updating this page — it will be live shortly.'}
  </p>

  <!-- CTA -->
  <a
    href="/"
    class="px-10 py-4 bg-[#00B4D8] text-white font-medium rounded-full shadow-lg hover:bg-[#0077B6] hover:shadow-xl transition-all duration-300"
  >
    Back to Homepage
  </a>

  <!-- Coming Soon Footer -->
  <p class="mt-16 text-base text-gray-500 animate-pulse">
    ✨ New features and content are on their way — thank you for your patience ✨
  </p>
</div>

<style>
  .animate-spin-slow {
    animation: spin 8s linear infinite;
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>
