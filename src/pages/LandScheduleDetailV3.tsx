import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Bus, ArrowRight, Clock, Phone, ArrowLeft, CalendarIcon } from 'lucide-react';
import { format, startOfToday } from 'date-fns';
import { hr } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Departure {
  time: string;
  stops: string[];
  note?: string;
}

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

const LandScheduleDetailV3 = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday());
  const [direction, setDirection] = useState<'toKomiza' | 'toVis'>('toKomiza');

  const departures = direction === 'toKomiza' ? visToKomiza : komizaToVis;

  return (
    <div className="min-h-screen bg-vis-green">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <button 
          onClick={() => navigate('/schedules/land')}
          className="flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity mb-2"
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
          <span className="font-bold uppercase text-sm">Natrag</span>
        </button>
        <h1 className="text-3xl font-extrabold uppercase">
          <span className="text-vis-yellow">Vis-Komiža-Vis</span> 🚌
        </h1>
        <p className="opacity-80 mt-1">Autobus</p>
      </div>

      {/* Content card */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-200px)] px-4 pt-5 pb-8">
        
        {/* Date Picker */}
        <div className="mb-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-bold border-[3px] border-foreground h-12",
                  !selectedDate && "text-muted-foreground"
                )}
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
              >
                <CalendarIcon className="mr-2 h-5 w-5" />
                {selectedDate ? format(selectedDate, 'd. MMMM yyyy', { locale: hr }) : <span>Odaberi datum</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Direction Toggle */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setDirection('toKomiza')}
            className={`flex-1 flex items-center justify-center gap-2 p-3 border-[3px] border-foreground transition-all ${
              direction === 'toKomiza' ? 'bg-vis-yellow text-foreground' : 'bg-card'
            }`}
            style={{ boxShadow: direction === 'toKomiza' ? '2px 2px 0 hsl(var(--vis-orange))' : 'none' }}
          >
            <ArrowRight className="w-4 h-4" />
            <span className="font-medium text-sm uppercase">Vis → Komiža</span>
          </button>
          <button
            onClick={() => setDirection('toVis')}
            className={`flex-1 flex items-center justify-center gap-2 p-3 border-[3px] border-foreground transition-all ${
              direction === 'toVis' ? 'bg-vis-yellow text-foreground' : 'bg-card'
            }`}
            style={{ boxShadow: direction === 'toVis' ? '2px 2px 0 hsl(var(--vis-orange))' : 'none' }}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span className="font-medium text-sm uppercase">Komiža → Vis</span>
          </button>
        </div>

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

export default LandScheduleDetailV3;
