/**
 * UTILITIES DATA
 * Water, waste, recycling, and other utility services
 */

// ============= WASTE & RECYCLING =============

export interface WasteCategory {
  id: string;
  label: string;
  color: string;
  bgColor: string;
  examples: string[];
}

export const wasteCategories: WasteCategory[] = [
  {
    id: 'paper',
    label: 'Papir',
    color: 'bg-vis-blue',
    bgColor: 'bg-vis-blue/10',
    examples: ['Novine', 'Karton', 'Časopisi', 'Papirnate vrećice'],
  },
  {
    id: 'plastic',
    label: 'Plastika',
    color: 'bg-vis-yellow',
    bgColor: 'bg-vis-yellow/10',
    examples: ['PET boce', 'Plastična ambalaža', 'Vrećice'],
  },
  {
    id: 'glass',
    label: 'Staklo',
    color: 'bg-vis-green',
    bgColor: 'bg-vis-green/10',
    examples: ['Boce', 'Staklenke', 'Staklo bez keramike'],
  },
  {
    id: 'bio',
    label: 'Bio-otpad',
    color: 'bg-vis-orange',
    bgColor: 'bg-vis-orange/10',
    examples: ['Ostaci hrane', 'Vrtni otpad', 'Ljuske jaja'],
  },
];

export interface CollectionSchedule {
  area: string;
  days: string;
  time: string;
}

export const collectionSchedule: CollectionSchedule[] = [
  { area: 'Vis - centar', days: 'Pon, Sri, Pet', time: '06:00 - 10:00' },
  { area: 'Vis - okolica', days: 'Uto, Čet', time: '07:00 - 12:00' },
  { area: 'Komiža', days: 'Pon, Sri, Pet', time: '06:00 - 10:00' },
  { area: 'Ostala naselja', days: 'Uto, Sub', time: '08:00 - 14:00' },
];

export const recyclingCenters = [
  {
    name: 'Reciklažno dvorište Vis',
    address: 'Industrijska zona, Vis',
    hours: 'Pon-Pet: 08:00 - 16:00, Sub: 08:00 - 12:00',
    accepts: ['Glomazni otpad', 'Električni uređaji', 'Stari namještaj', 'Građevinski otpad'],
  },
  {
    name: 'Reciklažno dvorište Komiža',
    address: 'Podšpilje bb, Komiža',
    hours: 'Pon-Pet: 08:00 - 14:00',
    accepts: ['Glomazni otpad', 'Električni uređaji', 'Metalni otpad'],
  },
];

export const wasteContact = {
  name: 'Čistoća Vis',
  phone: '021 711 100',
};

// ============= WATER =============

export const waterInfo = {
  provider: 'Vodovod Vis',
  address: 'Obala sv. Jurja 15, Vis',
  phone: '021 711 000',
  hours: 'Pon-Pet: 07:00 - 15:00',
  emergencyPhone: '021 711 000',
};

export const waterSavingTips = [
  { icon: '🚿', tip: 'Tuširaj se umjesto kupanja' },
  { icon: '🚰', tip: 'Zatvori vodu dok pereš zube' },
  { icon: '🌱', tip: 'Zalijevaj vrt ujutro ili navečer' },
  { icon: '🔧', tip: 'Popravi kapajuće slavine odmah' },
];

export const waterFacts = [
  'Vis ima ograničene izvore pitke vode',
  'Voda se transportira cisternama tijekom sušnih razdoblja',
  'Kišnica se tradicionalno skupljala u gustirnama',
];

// ============= VET & PET CARE =============

export interface VetClinic {
  name: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  shadowColor: string;
}

export const vetClinics: VetClinic[] = [
  {
    name: 'Veterinarska stanica Vis',
    address: 'Put Velog Šoja 5, Vis',
    phone: '021 711 200',
    hours: 'Pon-Pet: 08:00 - 14:00',
    services: ['Pregledi', 'Cijepljenje', 'Operacije', 'Hitne intervencije'],
    shadowColor: 'hsl(var(--vis-green))',
  },
];

export const vetEmergencyInfo = {
  title: 'Hitna veterinarska pomoć',
  description: 'Za hitne slučajeve izvan radnog vremena, kontaktirajte veterinarsku ambulantu u Splitu.',
  phone: '021 555 555',
};

export const petCareTips = [
  'Osigurajte dovoljno vode za ljubimce tijekom vrućina',
  'Ne ostavljajte životinje u zatvorenom automobilu',
  'Šetajte pse ujutro ili navečer kada je svježije',
  'Provjerite da li ima krpelja nakon šetnje u prirodi',
];
