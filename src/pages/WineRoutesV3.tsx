import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { ArrowLeft, MapPin, Clock, Wine, Grape, ChevronRight } from 'lucide-react';
import wineVineyardPhoto from '@/assets/wine-vineyard.jpg';
import wineTastingPhoto from '@/assets/wine-tasting.jpg';
import wineCellarPhoto from '@/assets/wine-cellar.jpg';

interface WineRoute {
  id: number;
  name: string;
  description: string;
  duration: string;
  stops: number;
  image: string;
  highlight: string;
}

const wineRoutes: WineRoute[] = [
  {
    id: 1,
    name: 'VUGAVA TRAIL',
    description: 'Otkrijte tajne autohtone viške sorte Vugava kroz posjete obiteljskim vinarijama.',
    duration: '3-4 sata',
    stops: 4,
    image: wineVineyardPhoto,
    highlight: 'Degustacija 6 vina'
  },
  {
    id: 2,
    name: 'PLAVAC PUT',
    description: 'Istražite tradiciju proizvodnje crvenih vina na sunčanim padinama otoka.',
    duration: '2-3 sata',
    stops: 3,
    image: wineTastingPhoto,
    highlight: 'Pogled na more'
  },
  {
    id: 3,
    name: 'KONOBA EXPERIENCE',
    description: 'Autentični doživljaj viških konoba s tradicionalnom hranom i lokalnim vinima.',
    duration: '4-5 sati',
    stops: 5,
    image: wineCellarPhoto,
    highlight: 'Večera uključena'
  },
];

const WineRoutesV3 = () => {
  const navigate = useNavigate();

  const handleRouteClick = (routeId: number) => {
    navigate(`/wine-routes/${routeId}`);
  };

  return (
    <div className="min-h-screen bg-vis-green">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-foreground mb-4 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
          <span className="font-bold uppercase text-sm">Natrag</span>
        </button>
        
        <div className="flex items-center gap-3 mb-2">
          <Wine className="w-8 h-8 text-foreground" strokeWidth={2} />
          <h1 className="text-3xl font-extrabold uppercase text-foreground">
            Vinske Ceste
          </h1>
        </div>
        <p className="text-foreground/80">Upoznajte viške vinarije i autohtone sorte</p>
      </div>

      {/* Content */}
      <div className="bg-card border-t-[3px] border-foreground min-h-[calc(100vh-200px)] px-4 pt-5 pb-8">
        
        {/* Intro */}
        <div 
          className="p-4 border-[3px] border-foreground bg-vis-yellow mb-6"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <div className="flex items-start gap-3">
            <Grape className="w-6 h-6 shrink-0 mt-1" strokeWidth={2} />
            <div>
              <h2 className="font-bold uppercase mb-1">Viška vinska tradicija</h2>
              <p className="text-sm">
                Otok Vis je dom autohtonih sorti Vugava i Plavac. Posjetite lokalne vinarije i uživajte u degustacijama s pogledom na Jadran.
              </p>
            </div>
          </div>
        </div>

        {/* Wine Routes */}
        <div className="space-y-4">
          {wineRoutes.map((route, index) => (
            <button
              key={route.id}
              onClick={() => handleRouteClick(route.id)}
              className="w-full text-left border-[3px] border-foreground bg-card overflow-hidden hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              style={{ 
                boxShadow: index % 3 === 0 
                  ? '4px 4px 0 hsl(var(--vis-violet))' 
                  : index % 3 === 1 
                  ? '4px 4px 0 hsl(var(--vis-deep-blue))' 
                  : '4px 4px 0 hsl(var(--vis-cyan))'
              }}
            >
              {/* Image */}
              <div className="h-32 overflow-hidden border-b-[3px] border-foreground">
                <img 
                  src={route.image} 
                  alt={route.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{route.name}</h3>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{route.description}</p>
                
                <div className="flex flex-wrap gap-3 text-xs font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {route.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {route.stops} postaja
                  </span>
                </div>
                
                <div className="mt-3 inline-block bg-vis-green text-foreground px-2 py-1 text-xs font-bold uppercase border-2 border-foreground">
                  {route.highlight}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Decorative blocks */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 bg-vis-green border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-violet border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-deep-blue border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-yellow border-2 border-foreground" />
        </div>
      </div>
    </div>
  );
};

export default WineRoutesV3;
