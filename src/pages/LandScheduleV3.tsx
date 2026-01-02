import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Bus, MapPin, Clock, Phone, ChevronLeft, ArrowRight } from 'lucide-react';
import { format, addDays, startOfToday } from 'date-fns';
import { hr } from 'date-fns/locale';

interface Departure {
  time: string;
  stops: string[];
  note?: string;
}

const visToKomiza: Departure[] = [
  { time: '06:30', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'] },
  { time: '08:00', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'], note: 'Školski dani' },
  { time: '11:30', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'] },
  { time: '14:30', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'] },
  { time: '17:00', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'] },
  { time: '19:30', stops: ['Vis', 'Podselje', 'Podstražje', 'Komiža'], note: 'Samo Pon-Sub' },
];

const komizaToVis: Departure[] = [
  { time: '07:00', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'] },
  { time: '08:30', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'], note: 'Školski dani' },
  { time: '12:00', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'] },
  { time: '15:00', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'] },
  { time: '17:30', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'] },
  { time: '20:00', stops: ['Komiža', 'Podstražje', 'Podselje', 'Vis'], note: 'Samo Pon-Sub' },
];

const LandScheduleV3 = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(startOfToday());
  const [direction, setDirection] = useState<'toKomiza' | 'toVis'>('toKomiza');

  const dates = Array.from({ length: 7 }, (_, i) => addDays(startOfToday(), i));
  const departures = direction === 'toKomiza' ? visToKomiza : komizaToVis;

  return (
    <div className="min-h-screen bg-vis-green relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-vis-yellow/30 rounded-full blur-3xl" />
      <div className="absolute top-40 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Floating icons */}
      <Bus className="absolute top-24 right-8 w-6 h-6 text-vis-yellow/50 rotate-12" />
      <MapPin className="absolute top-36 right-20 w-5 h-5 text-foreground/30 -rotate-6" />
      
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <button 
          onClick={() => navigate('/schedules')}
          className="flex items-center gap-1 text-sm opacity-80 mb-2 hover:opacity-100"
        >
          <ChevronLeft className="w-4 h-4" />
          Natrag
        </button>
        <h1 className="text-3xl font-extrabold">
          <span className="text-vis-yellow">Cestovni</span> promet 🚌
        </h1>
        <p className="opacity-80 mt-1">Autobus Vis - Komiža</p>
      </div>

      {/* Content card */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-200px)] px-4 pt-5 pb-8">
        
        {/* Date Picker */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-4 px-4 scrollbar-hide">
          {dates.map((date) => {
            const isSelected = format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
            return (
              <button
                key={date.toISOString()}
                onClick={() => setSelectedDate(date)}
                className={`flex flex-col items-center px-4 py-2 rounded-xl border-2 border-foreground min-w-[60px] transition-all ${
                  isSelected ? 'bg-vis-green' : 'bg-card'
                }`}
                style={{ boxShadow: isSelected ? '2px 2px 0 hsl(var(--vis-yellow))' : 'none' }}
              >
                <span className="text-xs uppercase">{format(date, 'EEE', { locale: hr })}</span>
                <span className="text-lg font-bold">{format(date, 'd')}</span>
              </button>
            );
          })}
        </div>

        {/* Direction Toggle */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setDirection('toKomiza')}
            className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-foreground transition-all ${
              direction === 'toKomiza' ? 'bg-vis-green' : 'bg-card'
            }`}
            style={{ boxShadow: direction === 'toKomiza' ? '2px 2px 0 hsl(var(--vis-yellow))' : 'none' }}
          >
            <ArrowRight className="w-4 h-4" />
            <span className="font-medium text-sm">Vis → Komiža</span>
          </button>
          <button
            onClick={() => setDirection('toVis')}
            className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-foreground transition-all ${
              direction === 'toVis' ? 'bg-vis-green' : 'bg-card'
            }`}
            style={{ boxShadow: direction === 'toVis' ? '2px 2px 0 hsl(var(--vis-yellow))' : 'none' }}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span className="font-medium text-sm">Komiža → Vis</span>
          </button>
        </div>

        {/* Route Info */}
        <div 
          className="p-4 rounded-2xl border-2 border-foreground bg-vis-yellow/10 mb-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-vis-yellow border-2 border-foreground flex items-center justify-center">
              <Bus className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm">Linija: {direction === 'toKomiza' ? 'Vis - Komiža' : 'Komiža - Vis'}</p>
              <p className="text-xs text-muted-foreground">Trajanje: ~25 minuta</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            {(direction === 'toKomiza' ? visToKomiza[0] : komizaToVis[0]).stops.map((stop, i, arr) => (
              <div key={stop} className="flex items-center gap-1">
                <span className="text-xs font-medium">{stop}</span>
                {i < arr.length - 1 && <ArrowRight className="w-3 h-3 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </div>

        {/* Departures */}
        <section className="mb-6">
          <h2 className="font-bold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
            Polasci - {format(selectedDate, 'd. MMMM', { locale: hr })}
          </h2>
          <div className="space-y-3">
            {departures.map((dep, i) => (
              <div 
                key={i}
                className="flex items-center gap-4 p-4 rounded-2xl border-2 border-foreground bg-card"
                style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
              >
                <div className="w-14 h-14 rounded-xl bg-vis-green border-2 border-foreground flex flex-col items-center justify-center">
                  <span className="text-xl font-bold">{dep.time.split(':')[0]}</span>
                  <span className="text-sm">:{dep.time.split(':')[1]}</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold">{dep.stops[0]} → {dep.stops[dep.stops.length - 1]}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    ~25 min
                  </div>
                  {dep.note && (
                    <p className="text-xs text-vis-yellow mt-1 font-medium">{dep.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="font-bold text-sm mb-3 text-muted-foreground uppercase tracking-wide">Kontakt</h2>
          <a 
            href="tel:+385021711060"
            className="flex items-center gap-4 p-4 rounded-2xl border-2 border-foreground bg-card hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
          >
            <div className="w-12 h-12 rounded-xl bg-vis-blue border-2 border-foreground flex items-center justify-center text-primary-foreground">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold">Autobusni prijevoz Vis</p>
              <p className="text-vis-blue font-semibold">021 711 060</p>
            </div>
          </a>
        </section>

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-vis-blue" />
          <div className="w-2 h-2 rounded-full bg-vis-cyan" />
          <div className="w-2 h-2 rounded-full bg-vis-green" />
          <div className="w-2 h-2 rounded-full bg-vis-yellow" />
        </div>
      </div>
    </div>
  );
};

export default LandScheduleV3;
