<script lang="ts">
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { PriceListData } from '$lib/data/pricelist';
    import { onMount } from 'svelte';

  // Price list data object
    const priceListData = PriceListData;
    console.log(priceListData);

  
  // State using Svelte 5 runes
  let expandedSections = $state({});

  function toggleSection(section) {
    expandedSections[section] = !expandedSections[section];
  }

  function expandAll() {
    const allSections = {};
    Object.keys(priceListData).forEach(key => {
      allSections[key] = true;
    });
    expandedSections = allSections;
  }

  function collapseAll() {
    expandedSections = {};
  }
</script>

<div class="price-list-page">
  <!-- Header -->
  <div class="page-header">
    <div class="container">
      <h1>Our Price List</h1>
      <p class="subtitle">Transparent pricing for quality veterinary care</p>
      <p class="address">39 Jersey Way, Barwell, LE9 8HR</p>
    </div>
  </div>

  <!-- Important Notice -->
  <div class="container">
    <div class="info-banner">
      <div class="info-icon">ℹ️</div>
      <div>
        <h3>Important Information</h3>
        <p>
          All prices are correct as of January 2025 and include VAT where applicable. 
          Prices may vary depending on the complexity of treatment required. We recommend 
          contacting us for a more accurate quote for your pet's specific needs. Payment 
          is required at the time of treatment.
        </p>
      </div>
    </div>
  </div>

  <!-- Expand/Collapse Controls -->
  <div class="container controls">
    <button class="btn-expand" onclick={expandAll}>Expand All</button>
    <button class="btn-collapse" onclick={collapseAll}>Collapse All</button>
  </div>

  <!-- Price List Sections -->
  <div class="container price-sections">
    {#each Object.entries(priceListData) as [key, section]}
      <div class="price-section">
        <!-- Section Header -->
        <button class="section-header" onclick={() => toggleSection(key)}>
          <div class="section-title">
            <span class="section-icon">{section.icon}</span>
            <h2>{section.title}</h2>
          </div>
          <span class="chevron">{expandedSections[key] ? '▲' : '▼'}</span>
        </button>

        <!-- Section Content -->
        {#if expandedSections[key]}
          <div class="section-content" transition:slide={{ duration: 300, easing: quintOut }}>
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th class="price-col">Price</th>
                </tr>
              </thead>
              <tbody>
                {#each section.items as item, index}
                  <tr class:last={index === section.items.length - 1}>
                    <td>
                      <div class="service-name">{item.name}</div>
                      {#if item.duration || item.note}
                        <div class="service-details">
                          {#if item.duration}<span>{item.duration}</span>{/if}
                          {#if item.duration && item.note}<span> • </span>{/if}
                          {#if item.note}<span>{item.note}</span>{/if}
                        </div>
                      {/if}
                    </td>
                    <td class="price-col">{item.price}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Bottom CTA -->
  <div class="cta-section">
    <div class="container">
      <h2>Questions About Our Pricing?</h2>
      <p>
        We're here to help. Contact us for more information or to discuss your pet's specific needs.
      </p>
      <div class="cta-buttons">
        <a href="/contact" class="btn-primary">Contact Us</a>
        <a href="/appointments" class="btn-secondary">Book Appointment</a>
      </div>
    </div>
  </div>
</div>

<style>
  .price-list-page {
    min-height: 100vh;
    background-color: var(--color-background);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Header */
  .page-header {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    color: white;
    padding: 4rem 1rem;
    text-align: center;
  }

  .page-header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
  }

  .address {
    font-size: 1rem;
    margin-top: 1rem;
    opacity: 0.8;
  }

  /* Info Banner */
  .info-banner {
    background-color: #ebf8ff;
    border: 2px solid #3182ce;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 2rem 0;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .info-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .info-banner h3 {
    color: #2c5282;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .info-banner p {
    color: var(--color-text);
    line-height: 1.6;
    margin: 0;
  }

  /* Controls */
  .controls {
    text-align: right;
    margin: 1rem auto;
  }

  .btn-expand,
  .btn-collapse {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    transition: all 0.2s;
  }

  .btn-expand {
    background-color: #3182ce;
    color: white;
    margin-right: 0.5rem;
  }

  .btn-expand:hover {
    background-color: #2c5490;
  }

  .btn-collapse {
    background-color: var(--color-border);
    color: var(--color-text);
  }

  .btn-collapse:hover {
    background-color: var(--color-gray-300);
  }

  /* Price Sections */
  .price-sections {
    margin: 2rem auto;
    padding-bottom: 4rem;
  }

  .price-section {
    background-color: white;
    border-radius: 12px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .section-header {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    background-color: white;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .section-header:hover {
    background-color: var(--color-background);
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .section-icon {
    font-size: 2rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
    color: var(--color-primary);
    font-weight: bold;
    margin: 0;
  }

  .chevron {
    color: var(--color-text-light);
    font-size: 1rem;
  }

  /* Section Content */
  .section-content {
    padding: 0 1.5rem 1.5rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead tr {
    border-bottom: 2px solid var(--color-border);
  }

  th {
    padding: 0.75rem;
    text-align: left;
    color: var(--color-text-light);
    font-weight: 600;
  }

  th.price-col {
    text-align: right;
  }

  tbody tr {
    border-bottom: 1px solid var(--color-border);
  }

  tbody tr.last {
    border-bottom: none;
  }

  td {
    padding: 1rem 0.75rem;
  }

  .service-name {
    color: var(--color-text);
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .service-details {
    font-size: 0.875rem;
    color: var(--color-text-lighter);
  }

  .price-col {
    text-align: right;
    color: var(--color-primary);
    font-weight: bold;
    font-size: 1.125rem;
  }

  /* CTA Section */
  .cta-section {
    background-color: var(--color-primary);
    color: white;
    padding: 3rem 1rem;
    text-align: center;
  }

  .cta-section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .cta-section p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-primary,
  .btn-secondary {
    display: inline-block;
    padding: 0.875rem 2rem;
    border-radius: 50px;
    font-weight: bold;
    text-decoration: none;
    transition: transform 0.2s;
  }

  .btn-primary {
    background-color: white;
    color: var(--color-primary);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
  }

  .btn-secondary {
    background-color: var(--color-secondary);
    color: white;
  }

  .btn-secondary:hover {
    transform: translateY(-2px);
    background-color: var(--color-secondary-dark);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .page-header h1 {
      font-size: 2rem;
    }

    .section-header h2 {
      font-size: 1.25rem;
    }

    .controls {
      text-align: center;
    }

    table {
      font-size: 0.875rem;
    }

    .price-col {
      font-size: 1rem;
    }
  }
</style>