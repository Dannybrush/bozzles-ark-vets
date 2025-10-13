<script>
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  // Price list data object
  const priceListData = {
    consultations: {
      title: "Consultations",
      icon: "🩺",
      items: [
        { name: "Standard Consultation", price: "£50", duration: "20 mins", note: "Mon-Fri : 09:00 - 18:30, Sat : 10:00 - 16:30" },
        { name: "Follow-up Consultation", price: "£40", duration: "20 mins", note: "" },
        { name: "Extended Consultation", price: "£75", duration: "40 mins", note: "" },
        { name: "Emergency Consultation", price: "£100", duration: "30 mins", note: "Normal Business Hours" },
      ]
    },
    vaccinations: {
      title: "Vaccinations",
      icon: "💉",
      items: [
        { name: "Dog Primary Course (2 visits)", price: "£85", duration: "", note: "Covers DHP, Lepto & Kennel Cough" },
        { name: "Dog Annual Booster", price: "£52", duration: "", note: "" },
        { name: "Cat Primary Course (2 visits)", price: "£78", duration: "", note: "Covers Cat Flu & FeLV" },
        { name: "Cat Annual Booster", price: "£48", duration: "", note: "" },
        { name: "Rabbit Vaccination", price: "£62", duration: "", note: "Covers Myxomatosis & VHD" },
        { name: "Rabies Vaccination", price: "£55", duration: "", note: "For travel" }
      ]
    },
    healthPlans: {
      title: "Health Plans",
      icon: "📋",
      items: [
        { name: "Dog Essential Plan", price: "£18/month", duration: "", note: "Annual vaccinations, flea & worm treatment" },
        { name: "Dog Complete Plan", price: "£28/month", duration: "", note: "Essential + dental care & health checks" },
        { name: "Cat Essential Plan", price: "£15/month", duration: "", note: "Annual vaccinations, flea & worm treatment" },
        { name: "Cat Complete Plan", price: "£24/month", duration: "", note: "Essential + dental care & health checks" },
        { name: "Rabbit Care Plan", price: "£16/month", duration: "", note: "Vaccinations, nail clipping & health checks" }
      ]
    },
    surgery: {
      title: "Surgery",
      icon: "⚕️",
      items: [
        { name: "Dog Neutering (Small)", price: "£195", duration: "", note: "Under 10kg" },
        { name: "Dog Neutering (Medium)", price: "£245", duration: "", note: "10-25kg" },
        { name: "Dog Neutering (Large)", price: "£295", duration: "", note: "Over 25kg" },
        { name: "Dog Spaying (Small)", price: "£285", duration: "", note: "Under 10kg" },
        { name: "Dog Spaying (Medium)", price: "£335", duration: "", note: "10-25kg" },
        { name: "Dog Spaying (Large)", price: "£385", duration: "", note: "Over 25kg" },
        { name: "Cat Neutering", price: "£75", duration: "", note: "" },
        { name: "Cat Spaying", price: "£95", duration: "", note: "" },
        { name: "Rabbit Neutering", price: "£145", duration: "", note: "" },
        { name: "Rabbit Spaying", price: "£165", duration: "", note: "" },
        { name: "Dental Scale & Polish", price: "From £195", duration: "", note: "Price depends on severity" },
        { name: "Lump Removal", price: "From £250", duration: "", note: "Price varies by complexity" }
      ]
    },
    diagnostics: {
      title: "Diagnostic Services",
      icon: "🩸",
      items: [
        { name: "In-house Blood Test", price: "£65", duration: "Results same day", note: "" },
        { name: "External Laboratory Tests", price: "From £45", duration: "Results 2-3 days", note: "" },
        { name: "X-ray (Single View)", price: "£95", duration: "", note: "" },
        { name: "X-ray (Two Views)", price: "£145", duration: "", note: "" },
        { name: "Ultrasound Scan", price: "£185", duration: "", note: "" },
        { name: "CT Scan", price: "From £495", duration: "", note: "Referral basis" },
        { name: "Urinalysis", price: "£35", duration: "", note: "" },
        { name: "Faecal Analysis", price: "£28", duration: "", note: "" }
      ]
    },
    dental: {
      title: "Dental Care",
      icon: "🦷",
      items: [
        { name: "Dental Examination", price: "Included in consultation", duration: "", note: "" },
        { name: "Dental Scale & Polish", price: "From £195", duration: "", note: "Under general anaesthetic" },
        { name: "Tooth Extraction (Simple)", price: "£45", duration: "", note: "Per tooth, additional to dental" },
        { name: "Tooth Extraction (Surgical)", price: "£85", duration: "", note: "Per tooth, additional to dental" },
        { name: "Dental Radiograph", price: "£55", duration: "", note: "Per image" }
      ]
    },
    preventativeCare: {
      title: "Preventative Care",
      icon: "🐛",
      items: [
        { name: "Flea Treatment (Small)", price: "£12", duration: "", note: "Per dose" },
        { name: "Flea Treatment (Medium)", price: "£15", duration: "", note: "Per dose" },
        { name: "Flea Treatment (Large)", price: "£18", duration: "", note: "Per dose" },
        { name: "Worming Treatment", price: "From £8", duration: "", note: "Based on weight" },
        { name: "Microchipping", price: "£25", duration: "", note: "Includes registration" },
        { name: "Nail Clipping", price: "£15", duration: "", note: "" },
        { name: "Anal Gland Expression", price: "£18", duration: "", note: "" }
      ]
    },
    hospitalisation: {
      title: "Hospitalisation",
      icon: "🏥",
      items: [
        { name: "Day Hospitalisation", price: "£55", duration: "Per day", note: "" },
        { name: "Overnight Hospitalisation", price: "£95", duration: "Per night", note: "Includes monitoring" },
        { name: "Intensive Care", price: "£145", duration: "Per 24 hours", note: "24/7 monitoring" },
        { name: "IV Fluid Therapy", price: "From £65", duration: "Per day", note: "Additional to hospitalisation" }
      ]
    },
    exoticPets: {
      title: "Exotic Pet Care",
      icon: "🦜",
      items: [
        { name: "Exotic Consultation", price: "£55", duration: "30 mins", note: "" },
        { name: "Bird Wing/Nail Clip", price: "£25", duration: "", note: "" },
        { name: "Beak Trim", price: "£30", duration: "", note: "" },
        { name: "Small Mammal Health Check", price: "£42", duration: "", note: "" },
        { name: "Reptile Health Check", price: "£48", duration: "", note: "" }
      ]
    },
    additional: {
      title: "Additional Services",
      icon: "📝",
      items: [
        { name: "Pet Passport", price: "£75", duration: "", note: "Includes documentation" },
        { name: "Insurance Claim Form", price: "£25", duration: "", note: "Per form" },
        { name: "Prescription (Repeat)", price: "£18", duration: "", note: "Valid 6 months" },
        { name: "Euthanasia", price: "£95", duration: "", note: "At practice" },
        { name: "Euthanasia (Home Visit)", price: "£175", duration: "", note: "Within 5 miles" },
        { name: "Cremation (Individual)", price: "From £145", duration: "", note: "Ashes returned" },
        { name: "Cremation (Communal)", price: "From £65", duration: "", note: "Ashes not returned" }
      ]
    },
    outofhours: {
      title: "Out of Hours Services",
      icon: "🌙",
      items: [
        { name: "Emergency Consultation", price: "£120", duration: "30 mins", note: "" },
        { name: "Emergency Surgery", price: "From £300", duration: "", note: "Price varies by procedure" },
        { name: "After Hours Hospitalisation", price: "£120", duration: "Per night", note: "" },
        { name: "Emergency Consultation", price: "£100", duration: "30 mins", note: "Out of hours" }
      ]
    }

  };

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