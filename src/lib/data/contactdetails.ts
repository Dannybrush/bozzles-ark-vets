
export interface Address {
  line1: string;
  line2?: string;
  city: string;
  postcode: string;
}

export interface ContactDetail {

  name: string; 
  landline: string;
  emergencyLandline: string;
  email: string;
  companyNumber: string;
  gmaps: string;
  google: string;
  facebook: string;
  instagram: string;
  address: Address;
  website: string;
  linkedin: string;
}

export const contactData : ContactDetail= 
  {
    name: "Bozzles Ark Veterinary Practice",
    landline: "01455 710 796", 
    emergencyLandline: "01455 710 796",
    email: "Care@BozzlesArkVets.co.uk",
    companyNumber: "#16434819",
    gmaps: 'https://maps.google.com/?q=39+Jersey+Way+Barwell+LE9+8HR',
    google: 'https://share.google/Hf6KzhfneVcj0jTrx',
    facebook: 'https://www.facebook.com/BozzlesArkVets',
    instagram: 'https://www.instagram.com/bozzlesarkvets/',
    address: { line1: "39 Jersey Way", line2: "Barwell", city: "Leicestershire", postcode: "LE9 8HR"}, 
    website: "https://www.BozzlesArkVets.co.uk",
    linkedin: 'https://www.linkedin.com/company/bozzles-ark-vets'}  // Doesnt exist yet
;


 export const openingHours = [
    { day: 'Monday', hours: '9:00am - 7:00pm' },
    { day: 'Tuesday', hours: '9:00am - 7:00pm' },
    { day: 'Wednesday', hours: '9:00am - 7:00pm' },
    { day: 'Thursday', hours: '9:00am - 7:00pm' },
    { day: 'Friday', hours: '9:00am - 7:00pm' },
    { day: 'Saturday', hours: '10:00am - 5:00pm' },
    { day: 'Sunday', hours: '10:00am - 2:00pm)' },
    { day: 'Mon-Fri', hours: '9:00am - 7:00pm' },
    { day: 'Bank Holidays', hours: 'Emergency Only' },
    { day: 'Emergency Services', hours: '24/7 Emergency Service Available' }

  ];
