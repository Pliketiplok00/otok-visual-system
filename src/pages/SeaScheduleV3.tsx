import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Ship, ArrowRight, Clock, ExternalLink, ChevronLeft } from 'lucide-react';
import { format, addDays, startOfToday } from 'date-fns';
import { hr } from 'date-fns/locale';

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
    name: 'Split - Vis',
    from: 'Split',
    to: 'Vis',
    type: 'trajekt',
    departures: [
      { time: '06:00', vessel: 'Petar Hektorović', duration: '2h 20min' },
      { time: '14:30', vessel: 'Petar Hektorović', duration: '2h 20min' },
      { time: '17:30', vessel: 'Petar Hektorović', duration: '2h 20min', note: 'Samo Pon-Pet' },
    ],
    returnDepartures: [
      { time: '09:00', vessel: 'Petar Hektorović', duration: '2h 20min' },
      { time: '17:30', vessel: 'Petar Hektorović', duration: '2h 20min' },
      { time: '20:30', vessel: 'Petar Hektorović', duration: '2h 20min', note: 'Samo Pon-Pet' },
    ],
  },
  {
    id: 'split-vis-catamaran',
    name: 'Split - Vis',
    from: 'Split',
    to: 'Vis',
    type: 'katamaran',
    departures: [
      { time: '08:00', vessel: 'Judita', duration: '1h 15min' },
      { time: '16:00', vessel: 'Judita', duration: '1h 15min' },
    ],
    returnDepartures: [
      { time: '06:15', vessel: 'Judita', duration: '1h 15min' },
      { time: '14:30', vessel: 'Judita', duration: '1h 15min' },
    ],
  },
  {
    id: 'hvar-vis',
    name: 'Hvar - Vis',
    from: 'Hvar',
    to: 'Vis',
    type: 'katamaran',
    departures: [
      { time: '09:30', vessel: 'Judita', duration: '45min' },
    ],
    returnDepartures: [
      { time: '14:00', vessel: 'Judita', duration: '45min' },
    ],
  },
];

const SeaScheduleV3 = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(startOfToday());
  const [selectedRoute, setSelectedRoute] = useState(routes[0].id);
  const [direction, setDirection] = useState<'outbound' | 'return'>('outbound');

  const dates = Array.from({ length: 7 }, (_, i) => addDays(startOfToday(), i));
  const currentRoute = routes.find(r => r.id === selectedRoute)!;
  const departures = direction === 'outbound' ? currentRoute.departures : currentRoute.returnDepartures;

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
        
        {/* Date Picker */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-4 px-4 scrollbar-hide">
          {dates.map((date) => {
            const isSelected = format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
            return (
              <button
                key={date.toISOString()}
                onClick={() => setSelectedDate(date)}
                className={`flex flex-col items-center px-4 py-2 border-[3px] border-foreground min-w-[60px] transition-all ${
                  isSelected ? 'bg-vis-blue text-primary-foreground' : 'bg-card'
                }`}
                style={{ boxShadow: isSelected ? '2px 2px 0 hsl(var(--vis-cyan))' : 'none' }}
              >
                <span className="text-xs uppercase font-mono">{format(date, 'EEE', { locale: hr })}</span>
                <span className="text-lg font-bold">{format(date, 'd')}</span>
              </button>
            );
          })}
        </div>

        {/* Route Selector */}
        <section className="mb-4">
          <h2 className="font-bold text-sm mb-2 text-muted-foreground uppercase tracking-wide font-mono">Linija</h2>
          <div className="space-y-2">
            {routes.map((route) => (
              <button
                key={route.id}
                onClick={() => setSelectedRoute(route.id)}
                className={`w-full flex items-center gap-3 p-3 border-[3px] border-foreground transition-all ${
                  selectedRoute === route.id ? 'bg-vis-cyan/20' : 'bg-card'
                }`}
                style={{ boxShadow: selectedRoute === route.id ? '3px 3px 0 hsl(var(--vis-blue))' : 'none' }}
              >
                <div className={`w-10 h-10 border-[3px] border-foreground flex items-center justify-center ${route.type === 'trajekt' ? 'bg-vis-blue text-primary-foreground' : 'bg-vis-cyan'}`}>
                  <Ship className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-bold text-sm uppercase">{route.from} → {route.to}</p>
                  <p className="text-xs text-muted-foreground capitalize font-mono">{route.type}</p>
                </div>
                {selectedRoute === route.id && (
                  <div className="w-3 h-3 bg-vis-blue border-2 border-foreground" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Direction Toggle */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setDirection('outbound')}
            className={`flex-1 flex items-center justify-center gap-2 p-3 border-[3px] border-foreground transition-all ${
              direction === 'outbound' ? 'bg-vis-blue text-primary-foreground' : 'bg-card'
            }`}
            style={{ boxShadow: direction === 'outbound' ? '2px 2px 0 hsl(var(--vis-cyan))' : 'none' }}
          >
            <ArrowRight className="w-4 h-4" />
            <span className="font-medium text-sm uppercase">{currentRoute.from} → {currentRoute.to}</span>
          </button>
          <button
            onClick={() => setDirection('return')}
            className={`flex-1 flex items-center justify-center gap-2 p-3 border-[3px] border-foreground transition-all ${
              direction === 'return' ? 'bg-vis-blue text-primary-foreground' : 'bg-card'
            }`}
            style={{ boxShadow: direction === 'return' ? '2px 2px 0 hsl(var(--vis-cyan))' : 'none' }}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span className="font-medium text-sm uppercase">{currentRoute.to} → {currentRoute.from}</span>
          </button>
        </div>

        {/* Departures */}
        <section className="mb-6">
          <h2 className="font-bold text-sm mb-3 text-muted-foreground uppercase tracking-wide font-mono">
            Polasci - {format(selectedDate, 'd. MMMM', { locale: hr })}
          </h2>
          <div className="space-y-3">
            {departures.map((dep, i) => (
              <div 
                key={i}
                className="flex items-center gap-4 p-4 border-[3px] border-foreground bg-card"
                style={{ boxShadow: '4px 4px 0 hsl(var(--vis-yellow))' }}
              >
                <div className="w-16 h-16 bg-vis-blue border-[3px] border-foreground flex flex-col items-center justify-center text-primary-foreground">
                  <span className="text-xl font-bold">{dep.time.split(':')[0]}</span>
                  <span className="text-sm font-mono">:{dep.time.split(':')[1]}</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold uppercase">{dep.vessel}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground font-mono">
                    <Clock className="w-3 h-3" />
                    {dep.duration}
                  </div>
                  {dep.note && (
                    <p className="text-xs text-vis-yellow mt-1 font-medium uppercase">{dep.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* External Link */}
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