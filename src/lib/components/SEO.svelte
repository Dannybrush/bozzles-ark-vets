<script lang="ts">
  interface BusinessSchemaProps {
    name?: string;
    telephone?: string;
    email?: string;
  }
  
  const props: BusinessSchemaProps = $props();
  
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": props.name || "Bozzles Ark Vets",
    "image": "https://bozzlesarkvets.co.uk/images/new-bw-logo.jpg",
    "url": "https://bozzlesarkvets.co.uk",
    "telephone": props.telephone || "+441455710796",
    "email": props.email || "care@bozzlesarkvets.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "39 Jersey Way",
      "addressLocality": "Barwell",
      "postalCode": "LE9 8HR",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.5631,
      "longitude": -1.3435
    },
    "priceRange": "££"
  };
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(businessSchema)}<\/script>`}
  <link rel="preload" href="/images/new-bw-logo.jpg" as="image" />
</svelte:head>