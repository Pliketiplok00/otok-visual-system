import { useNavigate, useParams } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { ArrowLeft, MapPin, Clock, Wine, Grape, Phone, Navigation } from 'lucide-react';
import wineVineyardPhoto from '@/assets/wine-vineyard.jpg';

const WineRouteDetailV3 = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const route = {
    id: 1,
    name: 'VUGAVA TRAIL',
    description: 'Otkrijte tajne autohtone viške sorte Vugava kroz posjete obiteljskim vinarijama. Ova ruta vodi vas kroz najljepše vinograde otoka Visa.',
    duration: '3-4 sata',
    stops: 4,
    image: wineVineyardPhoto,
    highlight: 'Degustacija 6 vina',
    details: 'Vugava je autohtona viška sorta grožđa koja daje iznimno aromatična bijela vina. Na ovoj ruti posjetit ćete četiri obiteljske vinarije gdje ćete moći degustirati različite stilove Vugave - od svježih i mineralnih do bogatijih verzija odležanih u hrastovim bačvama.',
    wineries: [
      { name: 'Vinarija Lipanović', location: 'Podšpilje' },
      { name: 'Vinarija Roki\'s', location: 'Vis' },
      { name: 'Vinarija Pločica', location: 'Komiža' },
      { name: 'Vinarija Issa', location: 'Vis' },
    ]
  };

  return (
    <div className="min-h-screen bg-vis-green">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <button 
          onClick={() => navigate('/wine-routes')}
          className="flex items-center gap-2 text-foreground mb-4 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
          <span className="font-bold uppercase text-sm">Natrag</span>
        </button>
        
        <div className="flex items-center gap-3 mb-2">
          <Wine className="w-8 h-8 text-foreground" strokeWidth={2} />
          <h1 className="text-3xl font-extrabold uppercase text-foreground">
            {route.name}
          </h1>
        </div>
        <p className="text-foreground/80">{route.highlight}</p>
      </div>

      {/* Content */}
      <div className="bg-card border-t-[3px] border-foreground min-h-[calc(100vh-200px)] px-4 pt-5 pb-8">
        
        {/* Hero Image */}
        <div 
          className="h-48 overflow-hidden border-[3px] border-foreground mb-6"
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-violet))' }}
        >
          <img 
            src={route.image} 
            alt={route.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2 bg-vis-yellow px-3 py-2 border-[3px] border-foreground">
            <Clock className="w-4 h-4" />
            <span className="font-bold text-sm uppercase">{route.duration}</span>
          </div>
          <div className="flex items-center gap-2 bg-vis-cyan px-3 py-2 border-[3px] border-foreground">
            <MapPin className="w-4 h-4" />
            <span className="font-bold text-sm uppercase">{route.stops} postaja</span>
          </div>
        </div>

        {/* Description */}
        <div 
          className="p-4 border-[3px] border-foreground bg-card mb-6"
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
        >
          <div className="flex items-start gap-3">
            <Grape className="w-6 h-6 shrink-0 mt-1" strokeWidth={2} />
            <div>
              <h2 className="font-bold uppercase mb-2">O ruti</h2>
              <p className="text-sm text-muted-foreground">{route.details}</p>
            </div>
          </div>
        </div>

        {/* Wineries */}
        <section className="mb-6">
          <h2 className="font-bold text-sm mb-3 text-muted-foreground uppercase tracking-wide font-mono">
            Vinarije na ruti
          </h2>
          <div className="space-y-3">
            {route.wineries.map((winery, i) => (
              <div 
                key={i}
                className="flex items-center gap-4 p-4 border-[3px] border-foreground bg-card"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
              >
                <div className="w-12 h-12 bg-vis-green border-[3px] border-foreground flex items-center justify-center text-foreground">
                  <Wine className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-bold uppercase">{winery.name}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground font-mono">
                    <MapPin className="w-3 h-3" />
                    {winery.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notice */}
        <div className="p-4 bg-muted border-[3px] border-muted-foreground/30">
          <p className="text-sm text-muted-foreground text-center">
            <span className="font-semibold">💡 Napomena:</span> Savjetujemo provjeru radnih vremena vinarija prije posjeta, pogotovo van sezone.
          </p>
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

export default WineRouteDetailV3;
