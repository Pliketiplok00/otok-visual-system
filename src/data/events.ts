/**
 * EVENTS DATA
 * Calendar events and event details
 */

export type EventCategory = 'vis' | 'komiza' | 'general';

export interface CalendarEvent {
  id: number;
  title: string;
  time: string;
  location: string;
  category: EventCategory;
  image?: string; // Path to imported image
}

// Note: When using this data, import the actual images:
// import summerFestivalPhoto from '@/assets/summer-festival.jpg';
// import wineTastingPhoto from '@/assets/wine-tasting.jpg';
// import wineVineyardPhoto from '@/assets/wine-vineyard.jpg';

export const calendarEvents: Record<number, CalendarEvent[]> = {
  15: [
    { id: 1, title: 'Ljetna fešta u Visu', time: '20:00', location: 'Trg sv. Jurja', category: 'vis' },
  ],
  18: [
    { id: 2, title: 'Koncert klape Komiža', time: '21:00', location: 'Riva Komiža', category: 'komiza' },
  ],
  20: [
    { id: 3, title: 'Ribarska večer', time: '19:00', location: 'Luka Vis', category: 'vis' },
    { id: 4, title: 'Izložba fotografija', time: '18:00', location: 'Galerija Vis', category: 'general' },
  ],
  25: [
    { id: 5, title: 'Festival vina', time: '17:00', location: 'Stari Grad', category: 'vis' },
  ],
};

export interface EventDetail {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  organizer: string;
  price?: string;
  photos?: string[]; // Paths to imported images
}

export const eventDetails: Record<number, EventDetail> = {
  1: {
    id: 1,
    title: 'Ljetna fešta u Visu',
    description: 'Tradicionalna ljetna fešta na glavnom trgu grada Visa. Glazba, ples, lokalna hrana i vino. Dobrodošli svi!',
    date: '15. lipnja 2026.',
    time: '20:00 - 02:00',
    location: 'Trg sv. Jurja, Vis',
    category: 'vis',
    organizer: 'Turistička zajednica Vis',
    price: 'Besplatno',
  },
  2: {
    id: 2,
    title: 'Koncert klape Komiža',
    description: 'Večer dalmatinske glazbe uz nastup poznate klape Komiža.',
    date: '18. lipnja 2026.',
    time: '21:00',
    location: 'Riva Komiža',
    category: 'komiza',
    organizer: 'Kulturno društvo Komiža',
    price: 'Besplatno',
  },
  3: {
    id: 3,
    title: 'Ribarska večer',
    description: 'Degustacija svježe ulovljene ribe pripremljene na tradicionalan način.',
    date: '20. lipnja 2026.',
    time: '19:00',
    location: 'Luka Vis',
    category: 'vis',
    organizer: 'Ribarska zadruga Vis',
    price: '50 kn',
  },
  4: {
    id: 4,
    title: 'Izložba fotografija',
    description: 'Izložba fotografija "Vis kroz sezonu" lokalnih fotografa.',
    date: '20. lipnja 2026.',
    time: '18:00',
    location: 'Galerija Vis',
    category: 'general',
    organizer: 'Gradska galerija Vis',
    price: 'Besplatno',
  },
  5: {
    id: 5,
    title: 'Festival vina',
    description: 'Degustacija autohtonih viških vina uz lokalnu gastronomiju.',
    date: '25. lipnja 2026.',
    time: '17:00 - 23:00',
    location: 'Stari Grad',
    category: 'vis',
    organizer: 'Viška vinska cesta',
    price: '100 kn',
  },
};

export const todayEvent = {
  id: 1,
  title: 'LJETNA FEŠTA U VISU',
  time: '20:00',
  location: 'Trg sv. Jurja',
};

export const croatianMonthNames = [
  'Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj',
  'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'
];

export const croatianDayNames = ['N', 'P', 'U', 'S', 'Č', 'P', 'S'];
