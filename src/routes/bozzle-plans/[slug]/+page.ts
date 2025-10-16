import type { PageLoad } from './$types';
import { allPlans } from '$lib/data/bozzleplansslugs';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
  const planId = params.slug;
  
    
  // ADD THESE DEBUG LOGS
  console.log('🔍 Looking for plan:', planId);
  console.log('📚 Available plans:', Object.keys(allPlans));
  
  const currentPlan = allPlans[planId];
  

    
  console.log('✅ Found plan:', currentPlan);
  // Handle plan not found
  if (!currentPlan) {
    throw error(404, 'Plan not found');
  }
  
  // Get related plans
  const relatedPlans = Object.values(allPlans)
    .filter(p => p.id !== currentPlan.id && p.category === currentPlan.category)
    .slice(0, 2)
    .map(p => ({ id: p.id, name: p.name, icon: p.icon, price: p.price }));
  
  return {
    currentPlan,
    relatedPlans
  };
};