import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Bus, Clock, Phone, ArrowLeft, ChevronRight } from 'lucide-react';

interface Departure {
  time: string;
  stops: string[];
  note?: string;
}

interface Route {
  id: string;
  name: string;
  iconBg: string;
  iconText: string;
  duration: string;
}

const routes: Route[] = [
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

const visToKomiza: Departure[] = [
  { time: '06:30', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'] },
  { time: '11:30', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'] },
  { time: '14:30', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'] },
  { time: '17:00', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'] },
];

const komizaToVis: Departure[] = [
  { time: '07:00', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'] },
  { time: '12:00', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'] },
  { time: '15:00', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'] },
  { time: '17:30', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'] },
];

const podspiljeDeparture: Departure = {
  time: '08:00', stops: ['Komiža', 'Podšpilje', 'Žena Glava', 'M.Zemlje', 'Vis']
};

const rukavacDeparture: Departure = {
  time: '09:30', stops: ['Komiža', 'Rukavac', 'Vis']
};

const LandScheduleV3 = () => {
  const navigate = useNavigate();
  const [direction, setDirection] = useState<'toKomiza' | 'toVis'>('toKomiza');

  const departures = direction === 'toKomiza' ? visToKomiza : komizaToVis;

  return (
    <div className="min-h-screen bg-vis-green">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <button 
          onClick={() => navigate('/schedules')}
          className="flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity mb-2"
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
          <span className="font-bold uppercase text-sm">Natrag</span>
        </button>
        <h1 className="text-3xl font-extrabold uppercase">
          <span className="text-vis-yellow">Cestovni</span> promet 🚌
        </h1>
        <p className="opacity-80 mt-1">Autobus Vis - Komiža</p>
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
                onClick={() => navigate(`/schedules/land/${route.id}`)}
                className="w-full flex items-center gap-3 p-3 border-[3px] border-foreground transition-all bg-card hover:opacity-90"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--vis-green) / 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
              >
                <div className={`w-10 h-10 border-[3px] border-foreground flex items-center justify-center ${route.iconBg} ${route.iconText}`}>
                  <Bus className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-bold text-sm uppercase">{route.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{route.duration}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </section>

        {/* Departures */}
        <section className="mb-6">
          <h2 className="font-bold text-sm mb-3 text-muted-foreground uppercase tracking-wide font-mono">
            Današnji polasci
          </h2>
          <div className="space-y-3">
            {departures.map((dep, i) => (
              <div 
                key={i}
                className="flex items-center gap-4 p-4 border-[3px] border-foreground bg-card"
                style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
              >
                <div className="w-16 h-16 bg-vis-green border-[3px] border-foreground flex flex-col items-center justify-center text-foreground">
                  <span className="text-xl font-bold">{dep.time.split(':')[0]}</span>
                  <span className="text-sm font-mono">:{dep.time.split(':')[1]}</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold uppercase">{dep.stops[0]} → {dep.stops[dep.stops.length - 1]}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground font-mono">
                    <Clock className="w-3 h-3" />
                    ~25 min
                  </div>
                  {dep.note && (
                    <p className="text-xs text-vis-yellow mt-1 font-medium uppercase">{dep.note}</p>
                  )}
                </div>
              </div>
            ))}
            
            {/* Podšpilje route departure */}
            <div 
              className="flex items-center gap-4 p-4 border-[3px] border-foreground bg-card"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
            >
              <div className="w-16 h-16 bg-vis-blue border-[3px] border-foreground flex flex-col items-center justify-center text-primary-foreground">
                <span className="text-xl font-bold">{podspiljeDeparture.time.split(':')[0]}</span>
                <span className="text-sm font-mono">:{podspiljeDeparture.time.split(':')[1]}</span>
              </div>
              <div className="flex-1">
                <p className="font-bold uppercase">{podspiljeDeparture.stops[0]} → {podspiljeDeparture.stops[podspiljeDeparture.stops.length - 1]}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground font-mono">
                  <Clock className="w-3 h-3" />
                  ~40 min
                </div>
              </div>
            </div>
            
            {/* Rukavac route departure */}
            <div 
              className="flex items-center gap-4 p-4 border-[3px] border-foreground bg-card"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
            >
              <div className="w-16 h-16 bg-vis-yellow border-[3px] border-foreground flex flex-col items-center justify-center text-foreground">
                <span className="text-xl font-bold">{rukavacDeparture.time.split(':')[0]}</span>
                <span className="text-sm font-mono">:{rukavacDeparture.time.split(':')[1]}</span>
              </div>
              <div className="flex-1">
                <p className="font-bold uppercase">{rukavacDeparture.stops[0]} → {rukavacDeparture.stops[rukavacDeparture.stops.length - 1]}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground font-mono">
                  <Clock className="w-3 h-3" />
                  ~30 min
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="font-bold text-sm mb-3 text-muted-foreground uppercase tracking-wide font-mono">Kontakt</h2>
          <a 
            href="tel:+385021711060"
            className="flex items-center gap-4 p-4 border-[3px] border-foreground bg-card hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
          >
            <div className="w-12 h-12 bg-vis-blue border-[3px] border-foreground flex items-center justify-center text-primary-foreground">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold uppercase">Nautički centar Komiža</p>
              <p className="text-vis-blue font-semibold font-mono">021 711 060</p>
            </div>
          </a>
        </section>

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

export default LandScheduleV3;
