import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Ship, ArrowRight, Clock, ExternalLink, ChevronLeft, CalendarIcon } from 'lucide-react';
import { format, startOfToday } from 'date-fns';
import { hr } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Departure {
  time: string;
  vessel: string;
  duration: string;
  note?: string;
}

const trajektDepartures: Departure[] = [
  { time: '05:30', vessel: 'Trajektna linija 602', duration: '2h 20min' },
  { time: '15:30', vessel: 'Trajektna linija 602', duration: '2h 20min' },
];

const trajektReturnDepartures: Departure[] = [
  { time: '09:00', vessel: 'Trajektna linija 602', duration: '2h 20min' },
  { time: '17:30', vessel: 'Trajektna linija 602', duration: '2h 20min' },
];

const SeaScheduleDetailV3 = () => {
  const navigate = useNavigate();
  const { routeId } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday());
  const [direction, setDirection] = useState<'outbound' | 'return'>('outbound');

  const departures = direction === 'outbound' ? trajektDepartures : trajektReturnDepartures;

  return (
    <div className="min-h-screen bg-vis-blue">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-primary-foreground">
        <button 
          onClick={() => navigate('/schedules/sea')}
          className="flex items-center gap-1 text-sm opacity-80 mb-2 hover:opacity-100 uppercase"
        >
          <ChevronLeft className="w-4 h-4" />
          Natrag
        </button>
        <h1 className="text-3xl font-extrabold uppercase">
          <span className="text-vis-cyan">Vis-Split-Vis</span> ⛴️
        </h1>
        <p className="opacity-80 mt-1">Trajekt</p>
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
            onClick={() => setDirection('outbound')}
            className={`flex-1 flex items-center justify-center gap-2 p-3 border-[3px] border-foreground transition-all ${
              direction === 'outbound' ? 'bg-vis-orange text-foreground' : 'bg-card'
            }`}
            style={{ boxShadow: direction === 'outbound' ? '2px 2px 0 hsl(var(--vis-yellow))' : 'none' }}
          >
            <ArrowRight className="w-4 h-4" />
            <span className="font-medium text-sm uppercase">Vis → Split</span>
          </button>
          <button
            onClick={() => setDirection('return')}
            className={`flex-1 flex items-center justify-center gap-2 p-3 border-[3px] border-foreground transition-all ${
              direction === 'return' ? 'bg-vis-orange text-foreground' : 'bg-card'
            }`}
            style={{ boxShadow: direction === 'return' ? '2px 2px 0 hsl(var(--vis-yellow))' : 'none' }}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span className="font-medium text-sm uppercase">Split → Vis</span>
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

export default SeaScheduleDetailV3;
