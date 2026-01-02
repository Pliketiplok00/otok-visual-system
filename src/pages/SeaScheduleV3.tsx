import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Ship, ArrowLeft, Calendar, ArrowLeftRight, Clock, ExternalLink, AlertTriangle, Anchor } from 'lucide-react';

interface Departure {
  time: string;
  destination: string;
  duration: string;
  operator: string;
  type: 'ferry' | 'catamaran';
  note?: string;
}

const SeaScheduleV3 = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [direction, setDirection] = useState<'from' | 'to'>('from');

  const formatDate = (date: Date) => {
    const days = ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'];
    return `${days[date.getDay()]}, ${date.getDate()}.${date.getMonth() + 1}.`;
  };

  const departures: Departure[] = direction === 'from' ? [
    { time: '05:30', destination: 'Split', duration: '2h 20min', operator: 'Jadrolinija', type: 'ferry' },
    { time: '09:00', destination: 'Split', duration: '1h 30min', operator: 'Jadrolinija', type: 'catamaran' },
    { time: '14:30', destination: 'Split', duration: '2h 20min', operator: 'Jadrolinija', type: 'ferry' },
    { time: '17:00', destination: 'Hvar', duration: '1h', operator: 'Jadrolinija', type: 'catamaran', note: 'Samo ljeti' },
    { time: '19:00', destination: 'Split', duration: '1h 30min', operator: 'Jadrolinija', type: 'catamaran' },
  ] : [
    { time: '06:00', destination: 'Vis', duration: '2h 20min', operator: 'Jadrolinija', type: 'ferry' },
    { time: '10:00', destination: 'Vis', duration: '1h 30min', operator: 'Jadrolinija', type: 'catamaran' },
    { time: '15:00', destination: 'Vis', duration: '2h 20min', operator: 'Jadrolinija', type: 'ferry' },
    { time: '18:30', destination: 'Vis', duration: '1h 30min', operator: 'Jadrolinija', type: 'catamaran' },
  ];

  return (
    <div className="min-h-screen bg-vis-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-vis-cyan/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-32 h-32 bg-vis-yellow/20 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Floating anchor */}
      <div className="absolute top-32 right-6 w-10 h-10 rounded-full bg-vis-cyan/60 flex items-center justify-center">
        <Anchor className="w-5 h-5 text-foreground" strokeWidth={2} />
      </div>

      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-4 pb-4 text-primary-foreground">
        <button onClick={() => navigate('/schedules')} className="flex items-center gap-2 opacity-80 hover:opacity-100 mb-3">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Natrag</span>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-card border-2 border-foreground flex items-center justify-center shadow-[3px_3px_0_hsl(var(--vis-cyan))]">
            <Ship className="w-6 h-6 text-vis-blue" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Pomorski promet</h1>
            <p className="text-sm opacity-80">Trajekti i katamarani</p>
          </div>
        </div>
      </div>

      {/* Alert */}
      <div className="px-4 pb-3">
        <div className="bg-vis-yellow text-foreground px-4 py-3 rounded-2xl border-2 border-foreground flex items-center gap-3" style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}>
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span className="text-sm font-medium">Zimski vozni red do 31.03.</span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-280px)] px-5 pt-5 pb-8">
        {/* Date picker */}
        <div className="mb-4">
          <button className="w-full p-3 rounded-xl border-2 border-foreground bg-vis-blue/5 flex items-center justify-center gap-2 font-semibold" style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}>
            <Calendar className="w-5 h-5 text-vis-blue" />
            {formatDate(selectedDate)}
          </button>
        </div>

        {/* Direction toggle */}
        <div className="mb-5 p-1 rounded-xl border-2 border-foreground bg-muted/30 flex">
          <button
            onClick={() => setDirection('from')}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold text-sm transition-all ${
              direction === 'from' ? 'bg-vis-blue text-primary-foreground shadow-[2px_2px_0_hsl(var(--foreground))]' : ''
            }`}
          >
            🚢 Vis → Split
          </button>
          <button
            onClick={() => setDirection('to')}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold text-sm transition-all ${
              direction === 'to' ? 'bg-vis-blue text-primary-foreground shadow-[2px_2px_0_hsl(var(--foreground))]' : ''
            }`}
          >
            🚢 Split → Vis
          </button>
        </div>

        {/* Departures */}
        <div className="space-y-3">
          {departures.map((dep, i) => (
            <div
              key={i}
              className={`p-4 rounded-2xl border-2 border-foreground ${dep.type === 'catamaran' ? 'bg-vis-cyan/5' : 'bg-vis-blue/5'}`}
              style={{ boxShadow: `4px 4px 0 ${dep.type === 'catamaran' ? 'hsl(var(--vis-cyan))' : 'hsl(var(--vis-blue))'}` }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold">{dep.time}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border-2 border-foreground font-semibold ${
                    dep.type === 'catamaran' ? 'bg-vis-cyan' : 'bg-vis-blue text-primary-foreground'
                  }`}>
                    {dep.type === 'catamaran' ? '⚡ Katamaran' : '🚗 Trajekt'}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">→ {dep.destination}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {dep.duration} • {dep.operator}
                  </p>
                  {dep.note && (
                    <p className="text-xs text-vis-yellow font-medium mt-1">⚠️ {dep.note}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External link */}
        <a
          href="https://www.jadrolinija.hr"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-vis-blue text-vis-blue font-semibold hover:bg-vis-blue/5 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Službena stranica Jadrolinije
        </a>
      </div>
    </div>
  );
};

export default SeaScheduleV3;
