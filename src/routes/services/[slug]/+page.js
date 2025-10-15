// src/routes/services/[slug]/+page.js
import { getServiceBySlug, getAllServices } from '$lib/data/services';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    throw error(404, {
      message: 'Service not found'
    });
  }

  // Get related services (up to 3, excluding current service)
  const allServices = getAllServices();
  const relatedServices = allServices
    .filter(s => s.slug !== params.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return {
    service,
    relatedServices
  };
}