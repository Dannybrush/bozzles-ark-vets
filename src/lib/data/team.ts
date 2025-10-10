// src/lib/data/team.ts

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string; // path in static/ or remote URL
    socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
    category?: string;
    qualifications?: string;
    credentials?: string;
    specialties?: string[];
    personalNote?: string;
    yearsExperience?: number;
    quote?: string;
}

export const TeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Jasmine Broomhead",
    role: "Head Veterinarian",
    bio: "Specialises in small animal surgery and preventative care with over 10 years of experience.",
    image: "static/JJB.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/sarahjohnson"
    }
  },
  {
    id: 2,
    name: "Sergio  ",
    role: "Practice Manager",
    bio: "Oversees day-to-day operations and ensures the best client experience.",
    image: "/images/team/james.jpg",
    socials: {
      twitter: "https://twitter.com/jamessmith"
    }
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Veterinary Nurse",
    bio: "Passionate about animal welfare and community outreach.",
    image: "/images/team/emily.jpg"
  }
];
