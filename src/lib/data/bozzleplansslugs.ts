
  export interface PlanComponent {
    name: string;
    value: string | boolean;
    description?: string;
  }

  export interface Plan {
    id: string;
    name: string;
    icon: string;
    price: number;
    color: string;
    gradient: string;
    category: string;
    description?: string;
    longDescription?: string;
    components: PlanComponent[];
    popular?: boolean;
  }

  export interface RelatedPlan {
    id: string;
    name: string;
    icon: string;
    price: number;
  }

  export const allPlans: Record<string, Plan> = {
    'large-dog': {
      id: 'large-dog',
      name: 'Large Dog Plan',
      icon: '🐕',
      price: 25,
      color: '#3182ce',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: 'dogs',
      description: 'Comprehensive care designed specifically for large breed dogs',
      longDescription: 'Our Large Dog Plan is tailored to meet the unique healthcare needs of larger breeds. With comprehensive coverage including vaccinations, parasite prevention, and regular health checks, we ensure your canine companion stays healthy and happy throughout the year.',
      components: [
        { name: 'Annual Vaccination', value: 'DHP+L4+KC', description: 'Complete protection including Distemper, Hepatitis, Parvovirus, Leptospirosis (4 strains) and Kennel Cough' },
        { name: 'Year-Round Flea & Worm Treatment', value: true, description: 'Vet-prescribed parasite prevention tailored to your dog' },
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments to discuss health or concerns' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail trimming to keep paws healthy' },
        { name: 'Anal Gland Expression', value: '3 per year', description: 'Professional anal gland care' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on spay/neuter procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays, ultrasounds, and CT scans' },
        { name: '20% Off Dental Treatments', value: true, description: 'Significant savings on dental care and procedures' },
        { name: '10% Off Dog Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' },
        { name: '£20 Primary Course Vaccinations', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'small-dog': {
      id: 'small-dog',
      name: 'Small Dog Plan',
      icon: '🐶',
      price: 20,
      color: '#2b6cb0',
      gradient: 'linear-gradient(135deg, #5b8fd6 0%, #6366f1 100%)',
      category: 'dogs',
      description: 'Complete healthcare coverage for small breed dogs',
      longDescription: 'Perfect for small breeds, this plan provides all the essential care your compact companion needs. From vaccinations to preventative treatments and regular check-ups, we keep your small dog in excellent health.',
      components: [
        { name: 'Annual Vaccination', value: 'DHP+L4+KC', description: 'Complete protection including Distemper, Hepatitis, Parvovirus, Leptospirosis (4 strains) and Kennel Cough' },
        { name: 'Year-Round Flea & Worm Treatment', value: true, description: 'Vet-prescribed parasite prevention tailored to your dog' },
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments to discuss health or concerns' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail trimming to keep paws healthy' },
        { name: 'Anal Gland Expression', value: '3 per year', description: 'Professional anal gland care' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on spay/neuter procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays, ultrasounds, and CT scans' },
        { name: '20% Off Dental Treatments', value: true, description: 'Significant savings on dental care and procedures' },
        { name: '10% Off Dog Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' },
        { name: '£20 Primary Course Vaccinations', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'cat': {
      id: 'cat',
      name: 'Cat Plan',
      icon: '🐈',
      price: 17.50,
      color: '#e53e3e',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      category: 'cats',
      description: 'Essential care tailored for your feline friend',
      longDescription: 'Our Cat Plan provides comprehensive healthcare designed specifically for cats. With specialist feline vaccinations, parasite control, and regular wellness checks, we ensure your cat enjoys optimal health and wellbeing.',
      components: [
        { name: 'Annual Vaccination', value: 'Leucofeligen', description: 'Feline-specific protection against common diseases' },
        { name: 'Year-Round Flea & Worm Treatment', value: true, description: 'Vet-prescribed parasite prevention tailored to your cat' },
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments to discuss health or concerns' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail trimming for indoor cats' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on spay/neuter procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays, ultrasounds, and CT scans' },
        { name: '20% Off Dental Treatments', value: true, description: 'Significant savings on dental care and procedures' },
        { name: '10% Off Cat Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' },
        { name: '£20 Primary Course Vaccinations', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'rabbit': {
      id: 'rabbit',
      name: 'Rabbit Plan',
      icon: '🐰',
      price: 15,
      color: '#d69e2e',
      gradient: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
      category: 'small-mammals',
      description: 'Specialized care for your rabbit',
      longDescription: 'Rabbits require specific veterinary care, and our Rabbit Plan covers all the essentials. From myxomatosis and RHD protection to regular health monitoring, we provide expert care for your bunny.',
      components: [
        { name: 'Annual Vaccination', value: 'Myxo-RHD + Yuravac', description: 'Protection against Myxomatosis and Rabbit Haemorrhagic Disease' },
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments with exotic pet specialists' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail trimming for comfort and health' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on spay/neuter procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays and ultrasounds' },
        { name: '20% Off Dental Treatments', value: true, description: 'Significant savings on dental care' },
        { name: '10% Off Rabbit Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'ferret': {
      id: 'ferret',
      name: 'Ferret Plan',
      icon: '🦦',
      price: 15,
      color: '#805ad5',
      gradient: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
      category: 'small-mammals',
      description: 'Comprehensive healthcare for ferrets',
      longDescription: 'Ferrets are unique pets with specific health needs. Our Ferret Plan includes specialist vaccinations with antihistamine protection, parasite control, and access to our experienced exotic pet team.',
      components: [
        { name: 'Annual Vaccination', value: 'DHP (Includes Antihistamine)', description: 'Canine Distemper vaccination with antihistamine injection to reduce reaction risk' },
        { name: 'Year-Round Flea & Worm Treatment', value: true, description: 'Ferret-specific parasite prevention' },
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments with exotic pet specialists' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail trimming for comfort' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on spay/neuter procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays and ultrasounds' },
        { name: '20% Off Dental Treatments', value: true, description: 'Significant savings on dental care' },
        { name: '10% Off Ferret Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'birds': {
      id: 'birds',
      name: 'Birds Plan',
      icon: '🦜',
      price: 15,
      color: '#38a169',
      gradient: 'linear-gradient(135deg, #55efc4 0%, #00b894 100%)',
      category: 'exotics',
      description: 'Expert care for your avian companions',
      longDescription: 'Birds require specialized veterinary knowledge. Our Birds Plan provides access to avian health experts, regular wellness checks, and specialist services including Suprelorin implant options for breeding control.',
      components: [
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments with avian specialists' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail and beak maintenance' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: 'Suprelorin implant', description: 'Discount on hormone implants for breeding control' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays and specialist imaging' },
        { name: '10% Off Bird Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'reptile': {
      id: 'reptile',
      name: 'Reptile Plan',
      icon: '🦎',
      price: 12.50,
      color: '#319795',
      gradient: 'linear-gradient(135deg, #81ecec 0%, #00cec9 100%)',
      category: 'exotics',
      description: 'Specialist care for reptiles',
      longDescription: 'Reptiles need specialized veterinary expertise. Our Reptile Plan provides access to our experienced exotic vets, health monitoring, and discounted diagnostics to keep your scaled companion thriving.',
      components: [
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments with reptile specialists' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on surgical procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays and specialist imaging' },
        { name: '10% Off Reptile Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' }
      ]
    },
    'exotic-mammal': {
      id: 'exotic-mammal',
      name: 'Exotic Mammal Plan',
      icon: '🦔',
      price: 12.50,
      color: '#dd6b20',
      gradient: 'linear-gradient(135deg, #fab1a0 0%, #e17055 100%)',
      category: 'exotics',
      description: 'Dedicated care for exotic mammals',
      longDescription: 'For guinea pigs, hamsters, chinchillas, and other small exotic mammals, our plan provides comprehensive care from specialists who understand their unique needs.',
      components: [
        { name: '2 Veterinary Consultations', value: true, description: 'Face-to-face appointments with exotic pet specialists' },
        { name: '10% Off Further Consultations', value: true, description: 'Discount on additional vet visit fees' },
        { name: 'Nail Clips', value: '3 per year', description: 'Regular nail trimming for comfort' },
        { name: '2x In-House Urine/Faecal Tests', value: true, description: 'Diagnostic screening for internal health' },
        { name: '10% Off Neutering', value: true, description: 'Discount on spay/neuter procedures' },
        { name: '10% Off Blood Tests', value: true, description: 'Reduced cost on diagnostic blood work' },
        { name: '10% Off Diagnostic Imaging', value: true, description: 'Savings on X-rays and ultrasounds' },
        { name: '20% Off Dental Treatments', value: true, description: 'Significant savings on dental care' },
        { name: '10% Off Exotic Food', value: true, description: 'Discount on veterinary recommended nutrition' },
        { name: '£10 Microchipping', value: true, description: 'Affordable permanent identification' }
      ]
    }
  };
