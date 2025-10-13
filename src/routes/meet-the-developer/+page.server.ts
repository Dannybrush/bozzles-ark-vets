import type { PageServerLoad } from './$types';

// This will be set once when the server starts
const serverStartTime = new Date();

export const load: PageServerLoad = () => {
  return {
    lastUpdated: serverStartTime.toISOString()
  };
};