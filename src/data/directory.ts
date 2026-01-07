/**
 * DIRECTORY & CONTACTS DATA
 * Contact information, emergency numbers, health, banks, etc.
 */

// ============= GENERAL CONTACTS =============

export type ContactCategory = 'municipality' | 'emergency' | 'health' | 'utilities' | 'tourism';

export interface Contact {
  name: string;
  category: ContactCategory;
  phone: string;
  email?: string;
  web?: string;
}

export const contacts: Contact[] = [
  { name: 'Grad Vis - Gradska uprava', category: 'municipality', phone: '021 711 025', email: 'grad.vis@vis.hr', web: 'www.vis.hr' },
  { name: 'Općina Komiža', category: 'municipality', phone: '021 713 022', email: 'opcina@komiza.hr', web: 'www.komiza.hr' },
  { name: 'Policijska postaja Vis', category: 'emergency', phone: '021 711 107' },
  { name: 'Hitna medicinska pomoć', category: 'emergency', phone: '194' },
  { name: 'Vatrogasci Vis', category: 'emergency', phone: '021 711 393' },
  { name: 'Dom zdravlja Vis', category: 'health', phone: '021 711 033' },
  { name: 'Ljekarna Vis', category: 'health', phone: '021 711 080' },
  { name: 'Dom zdravlja Komiža', category: 'health', phone: '021 713 004' },
  { name: 'Vodovod Vis', category: 'utilities', phone: '021 711 000' },
  { name: 'Čistoća Vis', category: 'utilities', phone: '021 711 100' },
  { name: 'HEP - Elektra Split', category: 'utilities', phone: '0800 300 400' },
  { name: 'TZ Grada Visa', category: 'tourism', phone: '021 717 017', email: 'info@tz-vis.hr', web: 'www.tz-vis.hr' },
  { name: 'TZ Komiža', category: 'tourism', phone: '021 713 455', email: 'info@tz-komiza.hr', web: 'www.tz-komiza.hr' },
  { name: 'Lučka kapetanija Vis', category: 'municipality', phone: '021 711 013' },
];

export const contactCategories = [
  { id: 'all' as const, label: 'Sve', color: 'bg-muted' },
  { id: 'municipality' as const, label: 'Općina', color: 'bg-vis-blue' },
  { id: 'emergency' as const, label: 'Hitno', color: 'bg-destructive' },
  { id: 'health' as const, label: 'Zdravlje', color: 'bg-vis-green' },
  { id: 'utilities' as const, label: 'Komunalno', color: 'bg-vis-cyan' },
  { id: 'tourism' as const, label: 'Turizam', color: 'bg-vis-yellow' },
];

// ============= EMERGENCY NUMBERS =============

export const emergencyNumbers = [
  { label: 'Hitna pomoć', phone: '194', color: 'bg-destructive' },
  { label: 'Policija', phone: '192', color: 'bg-vis-blue' },
  { label: 'Vatrogasci', phone: '193', color: 'bg-vis-orange' },
  { label: 'Traganje i spašavanje na moru', phone: '195', color: 'bg-vis-cyan' },
  { label: 'Lučka kapetanija Vis', phone: '021 711 013', color: 'bg-vis-green' },
];

// ============= HEALTH & PHARMACIES =============

export interface Pharmacy {
  name: string;
  address: string;
  phone: string;
  hours: string;
  dutyHours?: string;
  shadowColor: string;
}

export const pharmacies: Pharmacy[] = [
  {
    name: 'Ljekarna Vis',
    address: 'Šetalište stare Isse 2, Vis',
    phone: '021 711 080',
    hours: 'Pon-Pet: 07:30 - 20:00, Sub: 08:00 - 12:00',
    dutyHours: 'Dežurstvo po potrebi',
    shadowColor: 'hsl(var(--vis-green))',
  },
  {
    name: 'Ljekarna Komiža',
    address: 'Riva sv. Mikule 6, Komiža',
    phone: '021 713 088',
    hours: 'Pon-Pet: 08:00 - 14:00',
    shadowColor: 'hsl(var(--vis-cyan))',
  },
];

export const healthCenter = {
  name: 'Dom zdravlja Vis',
  address: 'Vladimira Nazora 3, Vis',
  phone: '021 711 010',
  hours: 'Pon-Pet: 07:00 - 20:00',
  services: 'Opća medicina, hitna pomoć, laboratorij',
};

// ============= BANKS & ATMS =============

export interface Bank {
  name: string;
  address: string;
  hours: string;
  atm: boolean;
  shadowColor: string;
}

export const banks: Bank[] = [
  {
    name: 'OTP Banka',
    address: 'Obala sv. Jurja 5, Vis',
    hours: 'Pon-Pet: 08:00 - 14:00',
    atm: true,
    shadowColor: 'hsl(var(--vis-green))',
  },
  {
    name: 'Hrvatska poštanska banka',
    address: 'Riva 12, Vis',
    hours: 'Pon-Pet: 08:00 - 12:00',
    atm: true,
    shadowColor: 'hsl(var(--vis-blue))',
  },
  {
    name: 'OTP Banka - Komiža',
    address: 'Riva sv. Mikule 8, Komiža',
    hours: 'Pon-Pet: 08:00 - 13:00',
    atm: true,
    shadowColor: 'hsl(var(--vis-cyan))',
  },
];

export const atmLocations = [
  { location: 'Vis centar - kod trajektne luke', bank: 'OTP' },
  { location: 'Vis - Riva', bank: 'HPB' },
  { location: 'Komiža centar - Riva', bank: 'OTP' },
];

// ============= POST OFFICES =============

export interface PostOffice {
  name: string;
  address: string;
  phone: string;
  hours: string;
  shadowColor: string;
}

export const postOffices: PostOffice[] = [
  {
    name: 'HP Vis',
    address: 'Obala sv. Jurja 25, Vis',
    phone: '021 711 016',
    hours: 'Pon-Pet: 08:00 - 15:00, Sub: 08:00 - 12:00',
    shadowColor: 'hsl(var(--vis-yellow))',
  },
  {
    name: 'HP Komiža',
    address: 'Riva sv. Mikule 2, Komiža',
    phone: '021 713 010',
    hours: 'Pon-Pet: 08:00 - 14:00',
    shadowColor: 'hsl(var(--vis-cyan))',
  },
];

export interface Paketomat {
  provider: string;
  address: string;
  color: string;
}

export const paketomati: Paketomat[] = [
  {
    provider: 'DPD Paketomat',
    address: 'Trgovački centar Vis, Vis',
    color: 'hsl(var(--vis-green))',
  },
  {
    provider: 'GLS Paketshop',
    address: 'Konzum Vis',
    color: 'hsl(var(--vis-blue))',
  },
  {
    provider: 'Overseas Express',
    address: 'Luka Vis',
    color: 'hsl(var(--vis-cyan))',
  },
];
