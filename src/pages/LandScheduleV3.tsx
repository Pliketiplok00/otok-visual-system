import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Bus, ArrowLeft, Calendar, ArrowLeftRight, Clock, MapPin, AlertTriangle } from 'lucide-react';

interface BusStop {
  name: string;
  time: string;
}

interface BusRoute {
  id: number;
  departure: string;
  stops: BusStop[];
  note?: string;
}

const LandScheduleV3 = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [direction, setDirection] = useState<'vis-komiza' | 'komiza-vis'>('vis-komiza');

  const formatDate = (date: Date) => {
    const days = ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'];
    return `${days[date.getDay()]}, ${date.getDate()}.${date.getMonth() + 1}.`;
  };

  const routes: BusRoute[] = direction === 'vis-komiza' ? [
    { 
      id: 1, 
      departure: '06:30',
      stops: [
        { name: 'Vis - Autobusni kolodvor', time: '06:30' },
        { name: 'Podselje', time: '06:40' },
        { name: 'Podšpilje', time: '06:50' },
        { name: 'Komiža - Centar', time: '07:00' },
      ]
    },
    { 
      id: 2, 
      departure: '09:00',
      stops: [
        { name: 'Vis - Autobusni kolodvor', time: '09:00' },
        { name: 'Podselje', time: '09:10' },
        { name: 'Podšpilje', time: '09:20' },
        { name: 'Komiža - Centar', time: '09:30' },
      ]
    },
    { 
      id: 3, 
      departure: '13:00',
      stops: [
        { name: 'Vis - Autobusni kolodvor', time: '13:00' },
        { name: 'Podselje', time: '13:10' },
        { name: 'Podšpilje', time: '13:20' },
        { name: 'Komiža - Centar', time: '13:30' },
      ]
    },
    { 
      id: 4, 
      departure: '17:00',
      stops: [
        { name: 'Vis - Autobusni kolodvor', time: '17:00' },
        { name: 'Podselje', time: '17:10' },
        { name: 'Podšpilje', time: '17:20' },
        { name: 'Komiža - Centar', time: '17:30' },
      ],
      note: 'Samo radnim danima'
    },
  ] : [
    { 
      id: 1, 
      departure: '07:15',
      stops: [
        { name: 'Komiža - Centar', time: '07:15' },
        { name: 'Podšpilje', time: '07:25' },
        { name: 'Podselje', time: '07:35' },
        { name: 'Vis - Autobusni kolodvor', time: '07:45' },
      ]
    },
    { 
      id: 2, 
      departure: '10:00',
      stops: [
        { name: 'Komiža - Centar', time: '10:00' },
        { name: 'Podšpilje', time: '10:10' },
        { name: 'Podselje', time: '10:20' },
        { name: 'Vis - Autobusni kolodvor', time: '10:30' },
      ]
    },
    { 
      id: 3, 
      departure: '14:00',
      stops: [
        { name: 'Komiža - Centar', time: '14:00' },
        { name: 'Podšpilje', time: '14:10' },
        { name: 'Podselje', time: '14:20' },
        { name: 'Vis - Autobusni kolodvor', time: '14:30' },
      ]
    },
    { 
      id: 4, 
      departure: '18:00',
      stops: [
        { name: 'Komiža - Centar', time: '18:00' },
        { name: 'Podšpilje', time: '18:10' },
        { name: 'Podselje', time: '18:20' },
        { name: 'Vis - Autobusni kolodvor', time: '18:30' },
      ]
    },
  ];

  const [expandedRoute, setExpandedRoute] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-vis-green relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-vis-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-32 h-32 bg-vis-cyan/20 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Floating bus */}
      <div className="absolute top-32 right-6 w-10 h-10 rounded-full bg-vis-yellow/60 flex items-center justify-center">
        <Bus className="w-5 h-5 text-foreground" strokeWidth={2} />
      </div>

      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-4 pb-4 text-foreground">
        <button onClick={() => navigate('/schedules')} className="flex items-center gap-2 opacity-80 hover:opacity-100 mb-3">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Natrag</span>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-card border-2 border-foreground flex items-center justify-center shadow-[3px_3px_0_hsl(var(--vis-yellow))]">
            <Bus className="w-6 h-6 text-vis-green" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Cestovni promet</h1>
            <p className="text-sm opacity-80">Autobusne linije na otoku</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-240px)] px-5 pt-5 pb-8">
        {/* Date picker */}
        <div className="mb-4">
          <button className="w-full p-3 rounded-xl border-2 border-foreground bg-vis-green/5 flex items-center justify-center gap-2 font-semibold" style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}>
            <Calendar className="w-5 h-5 text-vis-green" />
            {formatDate(selectedDate)}
          </button>
        </div>

        {/* Direction toggle */}
        <div className="mb-5 p-1 rounded-xl border-2 border-foreground bg-muted/30 flex">
          <button
            onClick={() => setDirection('vis-komiza')}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold text-sm transition-all ${
              direction === 'vis-komiza' ? 'bg-vis-green text-foreground shadow-[2px_2px_0_hsl(var(--foreground))]' : ''
            }`}
          >
            🚌 Vis → Komiža
          </button>
          <button
            onClick={() => setDirection('komiza-vis')}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold text-sm transition-all ${
              direction === 'komiza-vis' ? 'bg-vis-green text-foreground shadow-[2px_2px_0_hsl(var(--foreground))]' : ''
            }`}
          >
            🚌 Komiža → Vis
          </button>
        </div>

        {/* Route info */}
        <div className="mb-4 p-3 rounded-xl border-2 border-foreground bg-vis-yellow/10 flex items-center gap-3" style={{ boxShadow: '2px 2px 0 hsl(var(--vis-yellow))' }}>
          <Clock className="w-5 h-5 text-vis-yellow" />
          <span className="text-sm">Trajanje vožnje: <span className="font-bold">~30 minuta</span></span>
        </div>

        {/* Departures */}
        <div className="space-y-3">
          {routes.map((route) => (
            <div
              key={route.id}
              className="rounded-2xl border-2 border-foreground bg-vis-green/5 overflow-hidden"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
            >
              <button
                onClick={() => setExpandedRoute(expandedRoute === route.id ? null : route.id)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold">{route.departure}</span>
                  <div>
                    <p className="font-semibold text-sm">
                      {direction === 'vis-komiza' ? 'Vis → Komiža' : 'Komiža → Vis'}
                    </p>
                    {route.note && (
                      <p className="text-xs text-vis-yellow font-medium">⚠️ {route.note}</p>
                    )}
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-lg border-2 border-foreground flex items-center justify-center bg-card transition-transform ${expandedRoute === route.id ? 'rotate-180' : ''}`}>
                  ▼
                </div>
              </button>

              {expandedRoute === route.id && (
                <div className="px-4 pb-4 border-t-2 border-foreground/20">
                  <div className="pt-3 space-y-2">
                    {route.stops.map((stop, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full border-2 border-foreground ${i === 0 ? 'bg-vis-green' : i === route.stops.length - 1 ? 'bg-vis-yellow' : 'bg-card'}`} />
                          {i !== route.stops.length - 1 && (
                            <div className="w-0.5 h-6 bg-foreground/30" />
                          )}
                        </div>
                        <div className="flex-1 flex items-center justify-between py-1">
                          <span className="text-sm">{stop.name}</span>
                          <span className="text-sm font-semibold">{stop.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Ticket info */}
        <div className="mt-6 p-4 rounded-2xl border-2 border-foreground bg-muted/30">
          <h3 className="font-bold mb-2">💰 Cijene karata</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Vis - Komiža (jednosmjerno)</span>
              <span className="font-semibold">25 kn</span>
            </div>
            <div className="flex justify-between">
              <span>Vis - Komiža (povratno)</span>
              <span className="font-semibold">40 kn</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Djeca do 7 godina</span>
              <span>besplatno</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandScheduleV3;
