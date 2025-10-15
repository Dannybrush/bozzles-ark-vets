
export type PriceListItem = {
    name: string;
    price: string;
    duration: string;
    note: string;
}

export type PriceListCategory = {
    title: string;
    icon: string;
    items: PriceListItem[];
}

export type PriceListData = Record<string, PriceListCategory>;  


export const PriceListData: PriceListData = {
    consultations: {
        title: "Consultations",
        icon: "🩺",
        items: [
            { name: "Standard Consultation", price: "£50", duration: "20 mins", note: "" },
            { name: "Follow-up Consultation", price: "£40", duration: "20 mins", note: "" },
            { name: "Extended Consultation", price: "£75", duration: "40 mins", note: "" },
            { name: "Emergency Consultation", price: "£100", duration: "30 mins", note: "Normal Business Hours" }
        ]
    },
    vaccinations: {
        title: "Vaccinations",
        icon: "💉",
        items: [
            { name: "Dog Primary Course (2 visits)", price: "£75", duration: "20 mins", note: "Covers 2 injections of DHP + Lepto" },
            { name: "Dog Annual Booster", price: "£55", duration: "20 mins", note: "L4 +/- DHP" },
            { name: "Kennel Cough", price: "£45", duration: "20 mins", note: "" },
            { name: "Rabies Vaccination", price: "£95", duration: "20 mins", note: "Needed for Travelling abroad" },
            { name: "Cat Primary Course (2 visits)", price: "£80", duration: "20 mins", note: "Covers 2 injections of Cat Flu & FeLV" },
            { name: "Cat Annual Booster", price: "£60", duration: "20 mins", note: "RCP +/- FeLV" },
            { name: "Rabbit Vaccination Myxo-RHD Plus", price: "£80", duration: "20 mins", note: "Covers Myxomatosis, RHD 1 and RHD 2" },
            { name: "Rabbit Vaccination Yurvac Vaccine", price: "£55", duration: "20 mins", note: "RHD2 new virulent variant" },
            { name: "Ferret Primary course (2 visits)", price: "£80", duration: "20 mins", note: "Includes Chlorphenamine" },
            { name: "Ferret Annual Booster", price: "£60", duration: "20 mins", note: "Includes Chlorphenamine" }
        ]
    },
    healthPlans: {
        title: "Health Plans",
        icon: "📋",
        items: [
            { name: "Large Dog Bozzle Plan (20kg+)", price: "£25/month", duration: "", note: "Annual vaccinations, flea & worm treatment, Discounts on neutering/ imaging/ bloods and dental" },
            { name: "Small Dog Bozzle Plan (0-20kg)", price: "£20/month", duration: "", note: "Annual vaccinations, flea & worm treatment, Discounts on neutering/ imaging/ bloods and dental" },
            { name: "Cat Bozzle Plan", price: "£17.50/month", duration: "", note: "Annual vaccinations, flea & worm treatment, Discounts on neutering/ imaging/ bloods and dental" },
            { name: "Rabbit Bozzle Plan", price: "£15/month", duration: "", note: "Annual vaccinations, flea & worm treatment, Discounts on neutering/ imaging/ bloods and dental" },
            { name: "Bird Bozzle Plan", price: "£15/month", duration: "", note: "Health checks, Discounts on neutering/ imaging/ bloods" },
            { name: "Reptile Bozzle Plan", price: "£12.50/month", duration: "", note: "Health checks, Discounts on neutering/ imaging/ bloods" },
            { name: "Exotic Mammal Care Plan", price: "£12.50/month", duration: "", note: "Health checks, Discounts on neutering/ imaging/ bloods and dental" }
        ]
    },
    surgery: {
        title: "Surgery",
        icon: "⚕️",
        items: [
            { name: "Dog Castrate (Small)", price: "£200", duration: "", note: "Under 10kg" },
            { name: "Dog Castrate (Medium)", price: "£225", duration: "", note: "10-20kg" },
            { name: "Dog Castrate (Large)", price: "£250", duration: "", note: "20-40kg" },
            { name: "Dog Castrate (X-Large)", price: "£275", duration: "", note: "40kg+" },
            { name: "Dog Spay (Small)", price: "£260", duration: "", note: "Under 10kg" },
            { name: "Dog Spay (Medium)", price: "£300", duration: "", note: "10-20kg" },
            { name: "Dog Spay (Large)", price: "£340", duration: "", note: "20-40kg" },
            { name: "Dog Spay (X-Large)", price: "£390", duration: "", note: "40kg+" },
            { name: "Cat Castrate", price: "£80", duration: "", note: "" },
            { name: "Cat Spaying", price: "£120", duration: "", note: "" },
            { name: "Rabbit Castrate", price: "£120", duration: "", note: "" },
            { name: "Rabbit Spaying", price: "£140", duration: "", note: "" },
            { name: "Guinea pig/ Rat Castrate", price: "£130", duration: "", note: "" },
            { name: "Guinea pig/ Rat Spay", price: "£150", duration: "", note: "" },
            { name: "Dental Scale & Polish", price: "From £350", duration: "", note: "Price depends on severity" },
            { name: "Lump Removal", price: "From £600", duration: "", note: "Price varies by complexity" }
        ]
    },
    diagnostics: {
        title: "Diagnostic Services",
        icon: "🩸",
        items: [
            { name: "In-house Blood Test", price: "From £60", duration: "", note: "Results same day" },
            { name: "External Laboratory Tests", price: "From £50", duration: "", note: "Results 2-3 days" },
            { name: "X-ray (Complete Series)", price: "£300", duration: "", note: "" },
            { name: "X-ray (Additional Body area/series)", price: "£225", duration: "", note: "" },
            { name: "Ultrasound Scan", price: "From £100", duration: "", note: "" },
            { name: "CT Scan", price: "From £800", duration: "", note: "Referral basis" },
            { name: "In-house Urinalysis", price: "£50", duration: "", note: "" },
            { name: "In-house Faecal Analysis", price: "£35", duration: "", note: "" }
        ]
    },
    dental: {
        title: "Dental Care",
        icon: "🦷",
        items: [
            { name: "Dental Examination", price: "Included in consultation", duration: "", note: "" },
            { name: "Dental Scale & Polish", price: "From £350", duration: "", note: "Includes general anaesthetic and S+P ONLY (Does NOT include pre-op bloods/ fluids or extractions)" },
            { name: "Tooth Extraction (Simple)", price: "From £12", duration: "", note: "Per tooth, additional to dental" },
            { name: "Tooth Extraction (Surgical)", price: "From £85", duration: "", note: "Per tooth, additional to dental" }
        ]
    },
    preventativeCare: {
        title: "Preventative Care",
        icon: "🐛",
        items: [
            { name: "Microchipping", price: "£25", duration: "", note: "Includes registration" },
            { name: "Anal Gland Expression", price: "£20", duration: "", note: "" },
            { name: "Nail Clipping", price: "£15", duration: "", note: "" }
        ]
    },
    hospitalisation: {
        title: "Hospitalisation",
        icon: "🏥",
        items: [ /*
            { name: "Day Hospitalisation", price: "£55", duration: "Per day", note: "" },
            { name: "Overnight Hospitalisation", price: "£95", duration: "Per night", note: "Includes monitoring" },
            { name: "Intensive Care", price: "£145", duration: "Per 24 hours", note: "24/7 monitoring" },
            { name: "IV Fluid Therapy", price: "From £65", duration: "Per day", note: "Additional to hospitalisation" } */
            { name: "Hospitalisation", price: "From £190", duration: "Per 12 hours", note: "Includes monitoring and IV fluids if needed" }
        ]
    },
    exoticPets: {
        title: "Exotic Pet Care",
        icon: "🦜",
        items: [
            { name: "Exotic Referral Consultation", price: "£85", duration: "40 mins", note: "" },
            { name: "Bird Nail Clip", price: "£25", duration: "", note: "" },
            { name: "Beak Trim", price: "£145", duration: "", note: "Includes sedation/ General anaesthetic and beak trim" }
        ]
    },
    additional: {
        title: "Additional Services",
        icon: "📝",
        items: [
            { name: "Animal Health Certificate", price: "£250", duration: "", note: "Includes documentation, EU countries ONLY" },
            { name: "Direct Insurance Claim Form", price: "£10", duration: "", note: "Per form" },
            { name: "Written Prescription", price: "£20", duration: "", note: "Valid for up to maximum of 6 months dependent on medication. Controlled medications only legally valid for 28 days" },
            { name: "Euthanasia", price: "From £50", duration: "", note: "At practice" },
            { name: "Euthanasia (Home Visit)", price: "From £175", duration: "", note: "Within 5 miles" },
            { name: "Cremation (Individual)", price: "From £150", duration: "", note: "Ashes returned" },
            { name: "Cremation (Communal)", price: "From £50", duration: "", note: "Ashes not returned" }
        ]
    }

} as const; // as const assertion to make the object deeply readonly



