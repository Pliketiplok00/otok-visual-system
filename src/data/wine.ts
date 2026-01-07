/**
 * WINE ROUTES DATA
 * Wine tourism content
 */

export interface WineRoute {
  id: number;
  name: string;
  description: string;
  duration: string;
  stops: number;
  highlight: string;
  // Note: Images should be imported separately
  // import wineVineyardPhoto from '@/assets/wine-vineyard.jpg';
}

export const wineRoutes: WineRoute[] = [
  {
    id: 1,
    name: 'VUGAVA TRAIL',
    description: 'Otkrijte tajne autohtone viške sorte Vugava kroz posjete obiteljskim vinarijama.',
    duration: '3-4 sata',
    stops: 4,
    highlight: 'Degustacija 6 vina',
  },
  {
    id: 2,
    name: 'PLAVAC PUT',
    description: 'Istražite tradiciju proizvodnje crvenih vina na sunčanim padinama otoka.',
    duration: '2-3 sata',
    stops: 3,
    highlight: 'Pogled na more',
  },
  {
    id: 3,
    name: 'KONOBA EXPERIENCE',
    description: 'Autentični doživljaj viških konoba s tradicionalnom hranom i lokalnim vinima.',
    duration: '4-5 sati',
    stops: 5,
    highlight: 'Večera uključena',
  },
];

export interface Winery {
  name: string;
  location: string;
  wines: string[];
  description: string;
}

export const wineries: Winery[] = [
  {
    name: 'Vinarija Lipanović',
    location: 'Plisko Polje',
    wines: ['Vugava', 'Plavac Mali'],
    description: 'Obiteljska vinarija s tradicijom od 1920. godine.',
  },
  {
    name: 'Podrum Roki\'s',
    location: 'Vis',
    wines: ['Vugava', 'Plavac', 'Prošek'],
    description: 'Poznati viški proizvođač s pogledom na more.',
  },
  {
    name: 'Vinarija Stiniva',
    location: 'Milna',
    wines: ['Vugava Grand Cru', 'Opol'],
    description: 'Mala butik vinarija s ograničenom proizvodnjom.',
  },
];

export const wineIntroText = `
Otok Vis je dom autohtonih sorti Vugava i Plavac. 
Posjetite lokalne vinarije i uživajte u degustacijama s pogledom na Jadran.
`;

export const wineGrapeVarieties = [
  {
    name: 'Vugava',
    type: 'Bijelo grožđe',
    description: 'Autohtona sorta otoka Visa, daje suha bijela vina s karakterom.',
    taste: 'Cvjetni, voćni, mineralni',
  },
  {
    name: 'Plavac Mali',
    type: 'Crno grožđe',
    description: 'Najpoznatija hrvatska crvena sorta, snažna i bogata.',
    taste: 'Tamno voće, začini, tanini',
  },
];
