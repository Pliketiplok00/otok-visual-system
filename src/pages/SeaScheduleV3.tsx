import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Ship, Clock, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Departure {
  time: string;
  vessel: string;
  duration: string;
  note?: string;
}

interface Route {
  id: string;
  name: string;
  from: string;
  to: string;
  type: 'trajekt' | 'katamaran';
  departures: Departure[];
  returnDepartures: Departure[];
}

const routes: Route[] = [
  {
    id: 'split-vis-ferry',
    name: 'Vis-Split-Vis',
    from: 'Vis',
    to: 'Split',
    type: 'trajekt',
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
    type: 'katamaran',
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

const SeaScheduleV3 = () => {
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState(routes[0].id);

  const handleRouteSelect = (routeId: string) => {
    setSelectedRoute(routeId);
    // Navigate to detail page (to be created)
    navigate(`/schedules/sea/${routeId}`);
  };

  return (
    <div className="min-h-screen bg-vis-blue">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-primary-foreground">
        <button 
          onClick={() => navigate('/schedules')}
          className="flex items-center gap-1 text-sm opacity-80 mb-2 hover:opacity-100 uppercase"
        >
          <ChevronLeft className="w-4 h-4" />
          Natrag
        </button>
        <h1 className="text-3xl font-extrabold uppercase">
          <span className="text-vis-cyan">Pomorski</span> promet ⛴️
        </h1>
        <p className="opacity-80 mt-1">Trajekti i katamarani</p>
      </div>

      {/* Content card */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-200px)] px-4 pt-5 pb-8">

        {/* Route Selector */}
        <section className="mb-4">
          <h2 className="font-bold text-sm mb-2 text-muted-foreground uppercase tracking-wide font-mono">Linija</h2>
          <div className="space-y-2">
            {routes.map((route) => (
              <button
                key={route.id}
                onClick={() => handleRouteSelect(route.id)}
                className="w-full flex items-center gap-3 p-3 border-[3px] border-foreground transition-all bg-card hover:bg-vis-cyan/10"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
              >
                <div className={`w-10 h-10 border-[3px] border-foreground flex items-center justify-center ${route.type === 'trajekt' ? 'bg-vis-blue text-primary-foreground' : 'bg-vis-cyan'}`}>
                  <Ship className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-bold text-sm uppercase">{route.name}</p>
                  <p className="text-xs text-muted-foreground capitalize font-mono">{route.type}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </section>

        {/* External Links */}
        <div className="space-y-3 mt-8">
          <a
            href="https://www.jadrolinija.hr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-4 border-[3px] border-foreground bg-vis-cyan/10 hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
          >
            <ExternalLink className="w-5 h-5" />
            <span className="font-bold uppercase">Kupi kartu na Jadrolinija.hr</span>
          </a>
          <a
            href="https://www.krilo.hr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-4 border-[3px] border-foreground bg-vis-cyan/10 hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
          >
            <ExternalLink className="w-5 h-5" />
            <span className="font-bold uppercase">Kupi kartu na Krilo-line</span>
          </a>
        </div>

        {/* Decorative blocks */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 bg-vis-blue border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-cyan border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-green border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-yellow border-2 border-foreground" />
        </div>
      </div>
    </div>
  );
};

export default SeaScheduleV3;
