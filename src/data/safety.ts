/**
 * SAFETY DATA
 * Hiking, sailing, and general safety information
 */

// ============= HIKING SAFETY =============

export const hikingSafetyTips = [
  { icon: '🥾', tip: 'Nosite prikladnu obuću za hodanje' },
  { icon: '💧', tip: 'Ponesite dovoljno vode (min. 1.5L)' },
  { icon: '🧴', tip: 'Koristite kremu za sunčanje' },
  { icon: '📱', tip: 'Napunite mobitel prije polaska' },
  { icon: '🗺️', tip: 'Preuzmite offline karte' },
  { icon: '👥', tip: 'Obavijestite nekoga o planu rute' },
];

export const hikingNatureRespect = `
Poštujte prirodu otoka Visa. Ne berite biljke, ne ostavljajte otpad 
i ostanite na označenim stazama. Mnoge biljke su zaštićene i endemske.
`;

export const hikingMobileNetwork = `
Napomena: Na nekim dijelovima otoka nema mobilnog signala. 
Prije polaska preuzmite offline karte i obavijestite nekoga o svojoj ruti.
`;

export const hikingTrailsInfo = `
Otok Vis nudi brojne pješačke staze koje vode kroz makiju, vinograde 
i do prekrasnih vidikovaca. Neke od najpopularnijih staza vode do 
Modre špilje, Stinive i vojnih tunela iz Drugog svjetskog rata.
`;

// ============= SAILING SAFETY =============

export interface WindType {
  name: string;
  direction: string;
  description: string;
  dangerLevel: 'low' | 'medium' | 'high';
  safetyTip: string;
}

export const windTypes: WindType[] = [
  {
    name: 'Bura',
    direction: 'NE',
    description: 'Jak, hladan vjetar s kopna. Može biti olujne jačine.',
    dangerLevel: 'high',
    safetyTip: 'Ne izlazite na more tijekom bure. Osigurajte plovilo.',
  },
  {
    name: 'Jugo',
    direction: 'SE',
    description: 'Topao, vlažan vjetar koji donosi oblake i kišu.',
    dangerLevel: 'medium',
    safetyTip: 'Prati prognozu. Jugo može pojačati i donijeti valove.',
  },
  {
    name: 'Maestral',
    direction: 'NW',
    description: 'Ljeti, dnevni vjetar. Okrepa od vrućine.',
    dangerLevel: 'low',
    safetyTip: 'Idealan za jedrenje. Puše popodne.',
  },
  {
    name: 'Levant',
    direction: 'E',
    description: 'Rijetko, donosi toplo i suho vrijeme.',
    dangerLevel: 'low',
    safetyTip: 'Ugodne uvjete za plovidbu.',
  },
];

export const sailingSafetyEquipment = [
  'Pojasevi za spašavanje',
  'Signalne rakete',
  'Vatrogasni aparat',
  'Sidro s dovoljno lanca',
  'VHF radio',
  'GPS uređaj',
  'Komplet prve pomoći',
  'Svjetla za navigaciju',
];

export interface Marina {
  name: string;
  vhfChannel: string;
  capacity: string;
}

export const marinas: Marina[] = [
  { name: 'ACI Marina Vis', vhfChannel: 'VHF 17', capacity: '120 vezova' },
  { name: 'Luka Komiža', vhfChannel: 'VHF 16', capacity: '80 vezova' },
];

// ============= EMERGENCY CONTACTS =============

export const sailingEmergencyContacts = [
  { label: 'MRCC Split - Traganje i spašavanje', phone: '195', color: 'bg-destructive' },
  { label: 'Lučka kapetanija Vis', phone: '021 711 013', color: 'bg-vis-blue' },
  { label: 'ACI Marina Vis', phone: '021 711 161', color: 'bg-vis-green' },
];

export const generalEmergencyContacts = [
  { label: 'Hitna pomoć', phone: '194', color: 'bg-destructive' },
  { label: 'Policija', phone: '192', color: 'bg-vis-blue' },
  { label: 'Vatrogasci', phone: '193', color: 'bg-vis-orange' },
  { label: 'MRCC - More', phone: '195', color: 'bg-vis-cyan' },
];
