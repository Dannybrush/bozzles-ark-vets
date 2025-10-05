<script lang="ts">
    import { page } from '$app/state';
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Service Not Found | Bozzles Ark Vets</title>
</svelte:head>

<div class="error-page" in:fade={{ duration: 400 }}>
  <div class="container">
    <div class="error-content">
      <div class="error-icon">🔍</div>
      <h1>Service Not Found</h1>
      <h1>{page.status}: {page.error?.message}</h1>

      <p class="error-message">
        We couldn't find the service you're looking for. It may have been moved or removed.
      </p>
      <div class="error-actions">
        <a href="/services" class="btn btn-primary">View All Services</a>
        <a href="/" class="btn btn-outline">Return Home</a>
      </div>
    </div>
  </div>
</div>

<style>
  .error-page {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    background: linear-gradient(135deg, #f7fafc 0%, #e6f2ff 100%);
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
  }

  .error-content {
    text-align: center;
    background-color: white;
    padding: 3rem 2rem;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .error-icon {
    font-size: 5rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 2.5rem;
    color: #1a3c6e;
    margin-bottom: 1rem;
  }

  .error-message {
    font-size: 1.125rem;
    color: #4a5568;
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  .error-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-block;
    padding: 0.875rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1rem;
  }

  .btn-primary {
    background-color: #3182ce;
    color: white;
    box-shadow: 0 4px 6px rgba(49, 130, 206, 0.25);
  }

  .btn-primary:hover {
    background-color: #2c5282;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(49, 130, 206, 0.3);
  }

  .btn-outline {
    background-color: transparent;
    color: #3182ce;
    border: 2px solid #3182ce;
  }

  .btn-outline:hover {
    background-color: #3182ce;
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    .error-icon {
      font-size: 4rem;
    }

    .error-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .btn {
      width: 100%;
    }
  }
</style>