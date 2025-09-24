// src/routes/blog/[id]/+page.js
import { error } from '@sveltejs/kit';

// In a real application, this would come from your CMS, database, or API
const blogPosts = [
  {
    id: 1,
    title: "Winter Pet Care: Keeping Your Furry Friends Safe in Cold Weather",
    excerpt: "As temperatures drop, it's important to take extra care of our pets. Learn essential tips for winter pet safety and comfort.",
    content: `
      <p>Winter can be challenging for pets, especially those not accustomed to cold temperatures. As responsible pet owners, it's crucial to understand how to keep our furry friends safe, comfortable, and healthy during the colder months.</p>

      <h2>Understanding Cold Weather Risks</h2>
      <p>Just like humans, pets can suffer from hypothermia and frostbite. Smaller pets, elderly animals, and those with health conditions are particularly vulnerable to cold weather. Signs that your pet is too cold include:</p>
      <ul>
        <li>Shivering or trembling</li>
        <li>Lifting paws frequently</li>
        <li>Reluctance to go outside</li>
        <li>Seeking warm places to hide</li>
        <li>Whining or showing signs of distress</li>
      </ul>

      <h2>Essential Winter Care Tips</h2>
      <h3>1. Proper Clothing and Protection</h3>
      <p>Consider investing in a quality pet jacket or sweater, especially for short-haired breeds, small dogs, and cats that go outdoors. Ensure the clothing fits properly and doesn't restrict movement.</p>

      <h3>2. Paw Protection</h3>
      <p>Salt and ice-melting chemicals can be harsh on pet paws. Consider using pet-safe ice melt products and always wipe your pet's paws after walks. Pet booties can provide additional protection.</p>

      <h3>3. Indoor Comfort</h3>
      <p>Provide warm, comfortable sleeping areas away from drafts. Heated pet beds can be beneficial for older pets or those with arthritis.</p>

      <h3>4. Nutrition and Hydration</h3>
      <p>Pets may need more calories in winter to maintain body heat, especially if they spend time outdoors. Ensure fresh, unfrozen water is always available.</p>

      <h2>When to Seek Veterinary Care</h2>
      <p>Contact us immediately if you notice signs of frostbite (pale or gray skin, ice crystals on fur) or hypothermia (severe shivering, lethargy, difficulty walking). Quick action can prevent serious complications.</p>

      <p>Remember, if it's too cold for you, it's probably too cold for your pet. When in doubt, keep them indoors and warm. Your pets depend on you for their safety and comfort during winter months.</p>
    `,
    author: "Dr. Sarah Johnson",
    authorBio: "Dr. Johnson has been practicing veterinary medicine for over 15 years, specializing in preventative care and emergency medicine.",
    authorImage: "/images/team/dr-johnson.jpg",
    publishDate: "2024-12-15",
    lastUpdated: "2024-12-15",
    category: "Seasonal Care",
    tags: ["winter", "safety", "cold weather", "pets"],
    image: "/images/blog/winter-pet-care.jpg",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "The Importance of Regular Dental Care for Dogs and Cats",
    excerpt: "Dental health is crucial for your pet's overall wellbeing. Discover why regular dental care should be part of your pet's routine.",
    content: `
      <p>Many pet owners overlook dental care, but it's essential for preventing serious health issues. Poor dental hygiene can lead to pain, infection, and even systemic health problems affecting the heart, liver, and kidneys.</p>

      <h2>Why Dental Care Matters</h2>
      <p>Just like humans, pets can develop plaque and tartar buildup, leading to gingivitis and periodontal disease. These conditions can cause:</p>
      <ul>
        <li>Bad breath (halitosis)</li>
        <li>Yellow or brown tartar buildup</li>
        <li>Red, swollen, or bleeding gums</li>
        <li>Difficulty eating or chewing</li>
        <li>Loose or missing teeth</li>
        <li>Behavioral changes due to pain</li>
      </ul>

      <h2>Signs Your Pet Needs Dental Attention</h2>
      <p>Watch for these warning signs that indicate your pet may need professional dental care:</p>
      <ul>
        <li>Persistent bad breath</li>
        <li>Difficulty picking up food or chewing</li>
        <li>Pawing at the face or mouth</li>
        <li>Excessive drooling</li>
        <li>Visible tartar buildup</li>
        <li>Red or inflamed gums</li>
      </ul>

      <h2>At-Home Dental Care</h2>
      <h3>Regular Brushing</h3>
      <p>Daily brushing is the gold standard for pet dental care. Use pet-specific toothpaste (never human toothpaste) and start slowly to help your pet adjust to the routine.</p>

      <h3>Dental Treats and Toys</h3>
      <p>Dental chews and toys can help reduce plaque buildup between professional cleanings. Look for products approved by veterinary dental organizations.</p>

      <h2>Professional Dental Cleanings</h2>
      <p>Regular professional cleanings under anesthesia allow for thorough examination and cleaning below the gum line, where most dental disease occurs. We recommend annual cleanings for most pets, though some may need more frequent care.</p>

      <p>Don't wait until dental problems become severe. Schedule a dental evaluation for your pet today to ensure their oral health supports their overall wellbeing.</p>
    `,
    author: "Dr. Michael Chen",
    authorBio: "Dr. Chen specializes in veterinary dentistry and has advanced training in oral surgery and dental care for companion animals.",
    authorImage: "/images/team/dr-chen.jpg",
    publishDate: "2024-12-10",
    lastUpdated: "2024-12-10",
    category: "Preventative Care",
    tags: ["dental", "dogs", "cats", "health"],
    image: "/images/blog/pet-dental-care.jpg",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 3,
    title: "Understanding Pet Insurance: What Every Owner Should Know",
    excerpt: "Pet insurance can help manage unexpected veterinary costs. Here's what you need to know to make an informed decision.",
    content: `
      <p>Pet insurance has become increasingly popular as veterinary care costs continue to rise. However, choosing the right policy can be confusing. This guide will help you understand the basics and make an informed decision for your pet's healthcare needs.</p>

      <h2>How Pet Insurance Works</h2>
      <p>Unlike human health insurance, most pet insurance operates on a reimbursement model. You pay for veterinary care upfront, then submit claims to your insurance company for reimbursement based on your policy terms.</p>

      <h2>Types of Coverage</h2>
      <h3>Accident-Only Plans</h3>
      <p>These basic plans cover injuries from accidents like broken bones, cuts, or ingesting foreign objects. They're typically the most affordable option but don't cover illnesses.</p>

      <h3>Accident and Illness Plans</h3>
      <p>These comprehensive plans cover both accidents and illnesses, including conditions like cancer, diabetes, and infections. This is the most popular type of pet insurance.</p>

      <h3>Wellness Plans</h3>
      <p>Some insurers offer wellness add-ons that cover routine care like vaccinations, dental cleanings, and annual checkups. These are typically optional additions to base plans.</p>

      <h2>Key Factors to Consider</h2>
      <h3>Deductibles</h3>
      <p>Choose between annual or per-incident deductibles. Annual deductibles typically offer better value for pets with chronic conditions.</p>

      <h3>Reimbursement Levels</h3>
      <p>Most plans offer 70%, 80%, or 90% reimbursement after your deductible is met. Higher reimbursement levels mean higher premiums.</p>

      <h3>Coverage Limits</h3>
      <p>Policies may have annual, per-incident, or lifetime coverage limits. Look for plans with high or unlimited annual limits for the best protection.</p>

      <h2>What's Typically Not Covered</h2>
      <ul>
        <li>Pre-existing conditions</li>
        <li>Routine preventive care (unless you add wellness coverage)</li>
        <li>Cosmetic procedures</li>
        <li>Breeding-related costs</li>
        <li>Behavioral training</li>
      </ul>

      <h2>Tips for Choosing a Policy</h2>
      <p>Research multiple companies, read policy details carefully, and consider enrolling your pet while they're young and healthy. Remember that waiting periods apply to new policies, so don't wait until your pet is sick to purchase coverage.</p>

      <p>Pet insurance can provide peace of mind and help you make healthcare decisions based on what's best for your pet rather than what you can afford. Contact us if you have questions about specific treatments or conditions when evaluating insurance options.</p>
    `,
    author: "Dr. Emma Thompson",
    authorBio: "Dr. Thompson has extensive experience in veterinary practice management and helps pet owners navigate healthcare decisions and insurance options.",
    authorImage: "/images/team/dr-thompson.jpg",
    publishDate: "2024-12-05", 
    lastUpdated: "2024-12-05",
    category: "Pet Ownership",
    tags: ["insurance", "costs", "planning", "health"],
    image: "/images/blog/pet-insurance.jpg",
    readTime: "6 min read",
    featured: false
  },
  // Add more posts as needed...
];

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const postId = parseInt(params.id);
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    throw error(404, 'Blog post not found');
  }
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);
  
  return {
    post,
    relatedPosts
  };
}