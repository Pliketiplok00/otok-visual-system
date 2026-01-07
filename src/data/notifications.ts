/**
 * NOTIFICATIONS DATA
 * All notification/inbox related mock data
 */

export type NotificationCategory = 'vis' | 'komiza' | 'kultura' | 'hitno' | 'opcenito';
export type NotificationSender = 'Općina Vis' | 'Općina Komiža' | 'Mjesni odbor Rukavac';

export interface NotificationPreview {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: NotificationCategory;
  unread: boolean;
  emoji: string;
}

export interface NotificationDetail {
  id: number;
  title: string;
  content: string;
  date: string;
  category: NotificationCategory;
  emoji: string;
  location?: string;
  validFrom: string;
  validTo: string;
  sender: NotificationSender;
}

export const notificationPreviews: NotificationPreview[] = [
  {
    id: 1,
    title: 'Prekid vodoopskrbe u Visu',
    excerpt: 'Zbog planiranih radova na vodovodnoj mreži, doći će do prekida vodoopskrbe...',
    date: 'Danas',
    category: 'hitno',
    unread: true,
    emoji: '🚨',
  },
  {
    id: 2,
    title: 'Nova trajektna linija Split-Vis',
    excerpt: 'Od 15. lipnja uvodi se dodatna trajektna linija na relaciji Split-Vis...',
    date: 'Jučer',
    category: 'vis',
    unread: true,
    emoji: '⛴️',
  },
  {
    id: 3,
    title: 'Ljetni raspored odvoza otpada',
    excerpt: 'Obavještavamo građane da od 1. lipnja vrijedi ljetni raspored odvoza...',
    date: '2 dana',
    category: 'opcenito',
    unread: false,
    emoji: '♻️',
  },
  {
    id: 4,
    title: 'Koncert na Trgu Komiže',
    excerpt: 'U subotu 20. lipnja održat će se tradicionalni ljetni koncert...',
    date: '3 dana',
    category: 'komiza',
    unread: false,
    emoji: '🎵',
  },
  {
    id: 5,
    title: 'Izložba "More i otok" u galeriji',
    excerpt: 'Pozivamo vas na otvorenje izložbe "More i otok" u Gradskoj galeriji Vis...',
    date: '4 dana',
    category: 'kultura',
    unread: false,
    emoji: '🎨',
  },
];

export const notificationDetails: Record<number, NotificationDetail> = {
  1: {
    id: 1,
    title: 'Prekid vodoopskrbe u Visu',
    content: 'Zbog planiranih radova na vodovodnoj mreži, doći će do prekida vodoopskrbe u gradu Visu u srijedu, 15. siječnja od 8:00 do 14:00 sati. Molimo građane da se pripreme i osiguraju zalihe vode za navedeno razdoblje. Radovi se izvode radi poboljšanja kvalitete vodoopskrbnog sustava.',
    date: '4. siječnja 2026.',
    category: 'hitno',
    emoji: '🚨',
    location: 'Grad Vis',
    validFrom: '15. siječnja 2026.',
    validTo: '15. siječnja 2026.',
    sender: 'Općina Vis',
  },
  2: {
    id: 2,
    title: 'Nova trajektna linija Split-Vis',
    content: 'Od 15. lipnja uvodi se dodatna trajektna linija na relaciji Split-Vis. Nova linija prometovat će svakodnevno s polaskom iz Splita u 14:00 i povratkom iz Visa u 18:00. Ova dodatna linija uvedena je zbog povećanog broja putnika tijekom ljetne sezone.',
    date: '3. siječnja 2026.',
    category: 'vis',
    emoji: '⛴️',
    location: 'Luka Vis',
    validFrom: '15. lipnja 2026.',
    validTo: '15. rujna 2026.',
    sender: 'Općina Vis',
  },
  3: {
    id: 3,
    title: 'Ljetni raspored odvoza otpada',
    content: 'Obavještavamo građane da od 1. lipnja vrijedi ljetni raspored odvoza komunalnog otpada. Miješani komunalni otpad odvozit će se ponedjeljkom, srijedom i petkom, dok će se reciklabilni otpad odvoziti utorkom i četvrtkom. Molimo građane da poštuju raspored i pravilno razvrstavaju otpad.',
    date: '2. siječnja 2026.',
    category: 'opcenito',
    emoji: '♻️',
    validFrom: '1. lipnja 2026.',
    validTo: '30. rujna 2026.',
    sender: 'Mjesni odbor Rukavac',
  },
  4: {
    id: 4,
    title: 'Koncert na Trgu Komiže',
    content: 'U subotu 20. lipnja održat će se tradicionalni ljetni koncert na glavnom trgu u Komiži. Nastupaju lokalni glazbenici i gosti iznenađenja. Početak koncerta je u 21:00 sat. Ulaz je slobodan za sve posjetitelje. Pozivamo sve građane i turiste da nam se pridruže!',
    date: '1. siječnja 2026.',
    category: 'komiza',
    emoji: '🎵',
    location: 'Trg Komiže',
    validFrom: '20. lipnja 2026.',
    validTo: '20. lipnja 2026.',
    sender: 'Općina Komiža',
  },
  5: {
    id: 5,
    title: 'Izložba "More i otok" u galeriji',
    content: 'Pozivamo vas na otvorenje izložbe "More i otok" u Gradskoj galeriji Vis. Izložba predstavlja radove lokalnih umjetnika inspiriranih ljepotama otoka Visa. Otvorenje je u petak, 10. siječnja u 19:00 sati. Izložba će biti otvorena do kraja mjeseca.',
    date: '31. prosinca 2025.',
    category: 'kultura',
    emoji: '🎨',
    location: 'Gradska galerija Vis',
    validFrom: '10. siječnja 2026.',
    validTo: '31. siječnja 2026.',
    sender: 'Općina Vis',
  },
};

export const notificationFilters = [
  { id: 'all' as const, label: 'Sve', color: 'bg-foreground text-background' },
  { id: 'vis' as const, label: 'Vis', color: 'bg-vis-blue text-primary-foreground' },
  { id: 'komiza' as const, label: 'Komiža', color: 'bg-vis-green text-foreground' },
  { id: 'kultura' as const, label: 'Kultura', color: 'bg-vis-yellow text-foreground' },
  { id: 'hitno' as const, label: 'Hitno', color: 'bg-vis-emergency text-primary-foreground' },
  { id: 'opcenito' as const, label: 'Općenito', color: 'bg-vis-purple text-foreground' },
];
