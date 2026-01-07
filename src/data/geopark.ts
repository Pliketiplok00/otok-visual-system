/**
 * GEOPARK DATA
 * Flora, fauna, and nature content for Vis archipelago
 */

// ============= FLORA =============

export interface FloraSpecies {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  habitat: string;
  conservationStatus: string;
  // Note: Images should be imported separately
}

export const floraSpecies: FloraSpecies[] = [
  {
    id: 'viska-kadulja',
    name: 'Viška kadulja',
    scientificName: 'Salvia viridis',
    description: 'Endemska biljka otoka Visa, koristi se u tradicionalnoj medicini i kulinarstvu.',
    habitat: 'Suhe kamenite padine i makija',
    conservationStatus: 'Zaštićena vrsta',
  },
  {
    id: 'dalmatinski-iris',
    name: 'Dalmatinski iris',
    scientificName: 'Iris pallida',
    description: 'Prekrasna ljubičasta biljka koja raste na stijenama i kamenitim terenima.',
    habitat: 'Kamenjari i stijene',
    conservationStatus: 'Strogo zaštićena',
  },
  {
    id: 'smilje',
    name: 'Smilje (Immortelle)',
    scientificName: 'Helichrysum italicum',
    description: 'Aromatična mediteranska biljka poznata po eteričnom ulju.',
    habitat: 'Suhi kamenjari i makija',
    conservationStatus: 'Nije ugrožena',
  },
  {
    id: 'divlji-ruzmarin',
    name: 'Divlji ruzmarin',
    scientificName: 'Rosmarinus officinalis',
    description: 'Aromatična biljka tipična za mediteransku makiju.',
    habitat: 'Makija i garig',
    conservationStatus: 'Nije ugrožena',
  },
  {
    id: 'alepski-bor',
    name: 'Alepski bor',
    scientificName: 'Pinus halepensis',
    description: 'Mediteranski bor otporan na sušu i požar.',
    habitat: 'Obalne padine i šume',
    conservationStatus: 'Nije ugrožena',
  },
];

export const floraIntroText = `
Vis ima iznimno bogatu mediteransku floru s više od 870 zabilježenih biljnih vrsta. 
Dio je mreže Natura 2000 zbog jedinstvenih staništa i endemskih vrsta.
`;

export const floraFunFacts = [
  'Na Visu je zabilježeno više od 870 biljnih vrsta',
  'Nekoliko vrsta su endemi koje rastu samo na ovom arhipelagu',
  'Otok je dio mreže Natura 2000 zaštićenih područja',
];

// ============= FAUNA =============

export interface FaunaSpecies {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  habitat: string;
  conservationStatus: string;
}

export const faunaSpecies: FaunaSpecies[] = [
  {
    id: 'sokol-eleonore',
    name: 'Sokol Eleonore',
    scientificName: 'Falco eleonorae',
    description: 'Rijetka grabljivica koja gnijezdi na strmim liticama viških otoka.',
    habitat: 'Morske litice i otočići',
    conservationStatus: 'Strogo zaštićena',
  },
  {
    id: 'dobri-dupin',
    name: 'Dobri dupin',
    scientificName: 'Tursiops truncatus',
    description: 'Karizmatični morski sisavac često viđen u vodama oko Visa.',
    habitat: 'Otvoreno more i uvale',
    conservationStatus: 'Strogo zaštićena',
  },
  {
    id: 'sismis',
    name: 'Mediteranski šišmiš',
    scientificName: 'Pipistrellus kuhlii',
    description: 'Noćna životinja koja obitava u špiljama i tunelima otoka.',
    habitat: 'Špilje, tuneli, stare zgrade',
    conservationStatus: 'Zaštićena',
  },
  {
    id: 'morska-kornjaca',
    name: 'Glavata želva',
    scientificName: 'Caretta caretta',
    description: 'Ugrožena morska kornjača koja povremeno posjećuje viške vode.',
    habitat: 'More, obale',
    conservationStatus: 'Strogo zaštićena',
  },
];

export const faunaIntroText = `
Fauna Visa obuhvaća rijetke ptice na liticama, šišmiše u špiljama i tunelima 
te bogat morski svijet s dupinima i kornjačama.
`;

export const faunaFunFacts = [
  'Vis je važna "zračna stanica" za migracijske ptice na Jadranu',
  'U podmorju obitava više od 100 vrsta riba',
  'Biševo i okolni otočići su gnijezdilište rijetkog sokola Eleonore',
];

// ============= GEOPARK INFO =============

export const geoparkInfo = {
  title: 'Geopark viški arhipelag',
  description: `
Vis i okolni otočići čine UNESCO Global Geopark zbog iznimne geološke raznolikosti: 
vrlo starih stijena, krškog reljefa, morskih špilja i rijetkih vulkanskih otočića (Brusnik i Jabuka).
  `,
  highlights: [
    'Vulkanski otočići Brusnik i Jabuka',
    'Modra špilja na Biševu',
    'Stijene stare više od 200 milijuna godina',
    'Jedinstveni krški reljef',
  ],
};

export const biodiversityIntroText = `
Vis je mali otok s velikom bioraznolikošću: od mirisne makije i vinograda 
do ptica na liticama i bogatog podmorja. Na otoku je zabilježeno više od 870 biljnih vrsta.
`;
