 export interface PlanComponent {
    name: string;
    largeDog: string | boolean;
    smallDog: string | boolean;
    cat: string | boolean;
    rabbit: string | boolean;
    ferret: string | boolean;
    birds: string | boolean;
    reptile: string | boolean;
    exoticMammal: string | boolean;
  }

    export interface Categories {
    id: string;
    name: string;
    icon: string;

  }

  export interface Plan {
    id: string;
    name: string;
    icon: string;
    price: number;
    color: string;
    gradient: string;
    category: string;
    popular?: boolean;
  }



  export const plans: Plan[] = [
    {
      id: 'large-dog',
      name: 'Large Dog',
      icon: '🐕',
      price: 25,
      color: '#3182ce',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: 'dogs',
      popular: true
    },
    {
      id: 'small-dog',
      name: 'Small Dog',
      icon: '🐶',
      price: 20,
      color: '#2b6cb0',
      gradient: 'linear-gradient(135deg, #5b8fd6 0%, #6366f1 100%)',
      category: 'dogs'
    },
    {
      id: 'cat',
      name: 'Cat',
      icon: '🐈',
      price: 17.50,
      color: '#e53e3e',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      category: 'cats',
      popular: true
    },
    {
      id: 'rabbit',
      name: 'Rabbit',
      icon: '🐰',
      price: 15,
      color: '#d69e2e',
      gradient: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
      category: 'small-mammals',
      popular: true
    },
    {
      id: 'ferret',
      name: 'Ferret',
      icon: '🦦',
      price: 15,
      color: '#805ad5',
      gradient: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
      category: 'small-mammals'
    },
    {
      id: 'birds',
      name: 'Birds',
      icon: '🦜',
      price: 15,
      color: '#38a169',
      gradient: 'linear-gradient(135deg, #55efc4 0%, #00b894 100%)',
      category: 'exotics'
    },
    {
      id: 'reptile',
      name: 'Reptile',
      icon: '🦎',
      price: 12.50,
      color: '#319795',
      gradient: 'linear-gradient(135deg, #81ecec 0%, #00cec9 100%)',
      category: 'exotics'
    },
    {
      id: 'exotic-mammal',
      name: 'Exotic Mammal',
      icon: '🦔',
      price: 12.50,
      color: '#dd6b20',
      gradient: 'linear-gradient(135deg, #fab1a0 0%, #e17055 100%)',
      category: 'exotics'
    }
  ];

  export const components: PlanComponent[] = [
    {
      name: 'Annual Vaccination',
      largeDog: 'DHP+L4+KC',
      smallDog: 'DHP+L4+KC',
      cat: 'Leucofeligen',
      rabbit: 'Myxo-RHD + Yuravac',
      ferret: 'DHP (Includes Antihistamine injection)',
      birds: false,
      reptile: false,
      exoticMammal: false
    },
    {
      name: 'Flea & Worm Treatment',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: false,
      ferret: true,
      birds: false,
      reptile: false,
      exoticMammal: false
    },
    {
      name: '2 Vet Consultations',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    },
    {
      name: '10% Off Further Consult Fees',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    },
    {
      name: 'Nail Clips',
      largeDog: '3 per year',
      smallDog: '3 per year',
      cat: '3 per year',
      rabbit: '3 per year',
      ferret: '3 per year',
      birds: '3 per year',
      reptile: false,
      exoticMammal: '3 per year'
    },
    {
      name: 'Anal Gland Expression',
      largeDog: '3 per year',
      smallDog: '3 per year',
      cat: false,
      rabbit: false,
      ferret: false,
      birds: false,
      reptile: false,
      exoticMammal: false
    },
    {
      name: '2x In-House Urine/Faecal Tests',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    },
    {
      name: '10% Off Neutering',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: '10% off Suprelorin implant',
      reptile: true,
      exoticMammal: true
    },
    {
      name: '10% Off Blood Tests',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    },
    {
      name: '10% Off Diagnostic Imaging',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    },
    {
      name: '20% Off Dental Treatments',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: false,
      reptile: false,
      exoticMammal: true
    },
    {
      name: '10% Off Food',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    },
    {
      name: '£10 Microchipping',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: true,
      ferret: true,
      birds: true,
      reptile: true,
      exoticMammal: true
    },
    {
      name: '£20 Primary Course Vaccinations',
      largeDog: true,
      smallDog: true,
      cat: true,
      rabbit: false,
      ferret: false,
      birds: false,
      reptile: false,
      exoticMammal: false
    }
  ];




    export const categories : Categories[] = [
    { id: 'all', name: 'All Plans', icon: '🐾' },
    { id: 'dogs', name: 'Dogs', icon: '🐕' },
    { id: 'cats', name: 'Cats', icon: '🐈' },
    { id: 'small-mammals', name: 'Small Mammals', icon: '🐰' },
    { id: 'exotics', name: 'Exotics', icon: '🦜' },
    { id: 'popular', name: 'Popular Choices', icon: '⭐' }
  ];