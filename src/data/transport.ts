/**
 * TRANSPORT DATA
 * Ferry, catamaran, and bus schedules
 */

// ============= SEA TRANSPORT =============

export interface SeaDeparture {
  time: string;
  vessel: string;
  duration: string;
  note?: string;
}

export interface SeaRoute {
  id: string;
  name: string;
  from: string;
  to: string;
  type: 'trajekt' | 'katamaran' | '';
  iconBg: string;
  iconText: string;
  departures: SeaDeparture[];
  returnDepartures: SeaDeparture[];
}

export const seaRoutes: SeaRoute[] = [
  {
    id: 'split-vis-ferry',
    name: 'Vis-Split-Vis',
    from: 'Vis',
    to: 'Split',
    type: 'trajekt',
    iconBg: 'bg-vis-blue',
    iconText: 'text-primary-foreground',
    departures: [
      { time: '05:30', vessel: 'Trajektna linija 602', duration: '2h 20min' },
      { time: '15:30', vessel: 'Trajektna linija 602', duration: '2h 20min' },
      { time: '07:00', vessel: 'Katamaranska linija 9602', duration: '1h 15min' },
    ],
    returnDepartures: [
      { time: '09:00', vessel: 'Trajektna linija 602', duration: '2h 20min' },
      { time: '17:30', vessel: 'Trajektna linija 602', duration: '2h 20min' },
      { time: '16:00', vessel: 'Katamaranska linija 9602', duration: '1h 15min' },
    ],
  },
  {
    id: 'split-vis-catamaran',
    name: 'Vis-Split-Vis',
    from: 'Vis',
    to: 'Split',
    type: 'katamaran',
    iconBg: 'bg-vis-green',
    iconText: 'text-foreground',
    departures: [
      { time: '06:15', vessel: 'Linija 9602', duration: '1h 15min' },
      { time: '14:30', vessel: 'Linija 9602', duration: '1h 15min' },
    ],
    returnDepartures: [
      { time: '08:00', vessel: 'Linija 9602', duration: '1h 15min' },
      { time: '16:00', vessel: 'Linija 9602', duration: '1h 15min' },
    ],
  },
  {
    id: 'komiza-bisevo',
    name: 'Komiža-Biševo-Komiža',
    from: 'Komiža',
    to: 'Biševo',
    type: '',
    iconBg: 'bg-vis-yellow',
    iconText: 'text-foreground',
    departures: [
      { time: '09:00', vessel: 'Biševo Line', duration: '20min' },
      { time: '11:00', vessel: 'Biševo Line', duration: '20min' },
    ],
    returnDepartures: [
      { time: '10:00', vessel: 'Biševo Line', duration: '20min' },
      { time: '16:00', vessel: 'Biševo Line', duration: '20min' },
    ],
  },
];

// ============= LAND TRANSPORT =============

export interface BusDeparture {
  time: string;
  stops: string[];
  note?: string;
}

export interface BusRoute {
  id: string;
  name: string;
  iconBg: string;
  iconText: string;
  duration: string;
}

export const busRoutes: BusRoute[] = [
  {
    id: 'vis-komiza',
    name: 'Vis-Komiža-Vis',
    iconBg: 'bg-vis-green',
    iconText: 'text-foreground',
    duration: '~25 min',
  },
  {
    id: 'komiza-podspile',
    name: 'Komiža-Podšpilje-Žena Glava-M.Zemlje-Vis',
    iconBg: 'bg-vis-blue',
    iconText: 'text-primary-foreground',
    duration: '~40 min',
  },
  {
    id: 'komiza-rukavac',
    name: 'Komiža-Rukavac-Vis',
    iconBg: 'bg-vis-yellow',
    iconText: 'text-foreground',
    duration: '~30 min',
  },
];

export const busVisToKomiza: BusDeparture[] = [
  { time: '06:30', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'] },
  { time: '11:30', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'] },
  { time: '14:30', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'] },
  { time: '17:00', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'] },
];

export const busKomizaToVis: BusDeparture[] = [
  { time: '07:00', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'] },
  { time: '12:00', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'] },
  { time: '15:00', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'] },
  { time: '17:30', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'] },
];

export const busPodspiljeDeparture: BusDeparture = {
  time: '08:00',
  stops: ['Komiža', 'Podšpilje', 'Žena Glava', 'M.Zemlje', 'Vis'],
};

export const busRukavacDeparture: BusDeparture = {
  time: '09:30',
  stops: ['Komiža', 'Rukavac', 'Vis'],
};

export const transportContacts = {
  nauticCenterKomiza: {
    name: 'Nautički centar Komiža',
    phone: '021 711 060',
  },
  jadrolinija: {
    name: 'Jadrolinija',
    website: 'https://www.jadrolinija.hr',
  },
  krilo: {
    name: 'Krilo',
    website: 'https://www.krilo.hr',
  },
};
