import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import VisBadge from '@/components/ui/VisBadge';
import { ChevronLeft, ChevronRight, MapPin, Clock, Calendar } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  time: string;
  location: string;
  category: 'vis' | 'komiza' | 'general';
  emoji: string;
}

const mockEvents: Record<number, Event[]> = {
  15: [
    { id: 1, title: 'Ljetna fešta u Visu', time: '20:00', location: 'Trg sv. Jurja', category: 'vis', emoji: '🎉' },
  ],
  18: [
    { id: 2, title: 'Koncert klape Komiža', time: '21:00', location: 'Riva Komiža', category: 'komiza', emoji: '🎵' },
  ],
  20: [
    { id: 3, title: 'Ribarska večer', time: '19:00', location: 'Luka Vis', category: 'vis', emoji: '🐟' },
    { id: 4, title: 'Izložba fotografija', time: '18:00', location: 'Galerija Vis', category: 'general', emoji: '📸' },
  ],
  25: [
    { id: 5, title: 'Festival vina', time: '17:00', location: 'Stari Grad', category: 'vis', emoji: '🍷' },
  ],
};

const EventsCalendarV3 = () => {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const monthNames = ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'];
  const dayNames = ['N', 'P', 'U', 'S', 'Č', 'P', 'S'];

  const eventsForDay = selectedDay ? mockEvents[selectedDay] || [] : [];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'vis': return 'hsl(var(--vis-blue))';
      case 'komiza': return 'hsl(var(--vis-green))';
      default: return 'hsl(var(--vis-cyan))';
    }
  };

  return (
    <div className="min-h-screen bg-vis-blue">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-primary-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center" style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}>
            <Calendar className="w-6 h-6 text-vis-blue" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold uppercase">Događanja</h1>
            <p className="text-sm opacity-80">Što se zbiva na otoku</p>
          </div>
        </div>
      </div>

      {/* Calendar card */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-200px)] px-4 pt-5 pb-8">
        {/* Month navigation */}
        <div className="flex items-center justify-between mb-5 px-1">
          <button
            onClick={() => { setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)); setSelectedDay(null); }}
            className="w-10 h-10 flex items-center justify-center border-[3px] border-foreground hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="font-bold text-lg uppercase">
            {monthNames[currentMonth.getMonth()]} <span className="text-vis-blue">{currentMonth.getFullYear()}</span>
          </h2>
          <button
            onClick={() => { setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)); setSelectedDay(null); }}
            className="w-10 h-10 flex items-center justify-center border-[3px] border-foreground hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Calendar grid */}
        <div className="p-4 border-[3px] border-foreground bg-muted/30 mb-5" style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}>
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day, i) => (
              <div key={i} className="text-center text-sm font-semibold text-muted-foreground py-2 font-mono">
                {day}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const hasEvents = mockEvents[day]?.length > 0;
              const isSelected = selectedDay === day;
              
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`aspect-square flex flex-col items-center justify-center border-[3px] transition-all ${
                    isSelected 
                      ? 'border-foreground bg-vis-blue text-primary-foreground' 
                      : hasEvents
                      ? 'border-foreground bg-vis-yellow/80 text-foreground'
                      : 'border-transparent hover:border-muted-foreground hover:bg-muted'
                  }`}
                  style={{ boxShadow: isSelected ? '2px 2px 0 hsl(var(--foreground))' : 'none' }}
                >
                  <span className="font-semibold text-sm">{day}</span>
                  {hasEvents && !isSelected && (
                    <div className="flex gap-0.5 mt-0.5">
                      {mockEvents[day]?.slice(0, 2).map((e, i) => (
                        <div key={i} className="w-1 h-1 bg-vis-blue" />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Events list */}
        <h3 className="font-bold text-lg mb-3 px-1 uppercase">
          {selectedDay 
            ? `${selectedDay}. ${monthNames[currentMonth.getMonth()].toLowerCase()}`
            : 'Odaberite dan'
          }
        </h3>
        
        {selectedDay && eventsForDay.length > 0 ? (
          <div className="space-y-3">
            {eventsForDay.map((event) => (
              <button
                key={event.id}
                onClick={() => navigate(`/events/${event.id}`)}
                className="w-full text-left p-4 border-[3px] border-foreground bg-card hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                style={{ boxShadow: `4px 4px 0 ${getCategoryColor(event.category)}` }}
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{event.emoji}</div>
                  <div className="flex-1">
                    <VisBadge variant={event.category} className="mb-2">{event.category}</VisBadge>
                    <h4 className="font-bold mb-2">{event.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{event.time}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{event.location}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground mt-1" />
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="p-6 border-[3px] border-dashed border-muted-foreground/30 text-center">
            <p className="text-muted-foreground">
              {selectedDay ? 'Nema događanja ovaj dan' : 'Kliknite na dan za pregled'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsCalendarV3;