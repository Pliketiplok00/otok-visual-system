import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import ColorBlock from '@/components/layout/ColorBlock';
import VisCard from '@/components/ui/VisCard';
import VisBadge from '@/components/ui/VisBadge';
import { ChevronLeft, ChevronRight, MapPin, Clock } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  time: string;
  location: string;
  category: 'vis' | 'komiza' | 'general';
}

const mockEvents: Record<number, Event[]> = {
  15: [
    { id: 1, title: 'Ljetna fešta u Visu', time: '20:00', location: 'Trg sv. Jurja', category: 'vis' },
  ],
  18: [
    { id: 2, title: 'Koncert klape Komiža', time: '21:00', location: 'Riva Komiža', category: 'komiza' },
  ],
  20: [
    { id: 3, title: 'Ribarska večer', time: '19:00', location: 'Luka Vis', category: 'vis' },
    { id: 4, title: 'Izložba fotografija', time: '18:00', location: 'Galerija Vis', category: 'general' },
  ],
  25: [
    { id: 5, title: 'Festival vina', time: '17:00', location: 'Stari Grad', category: 'vis' },
  ],
};

const EventsCalendar = () => {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj',
    'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'
  ];

  const dayNames = ['N', 'P', 'U', 'S', 'Č', 'P', 'S'];

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    setSelectedDay(null);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    setSelectedDay(null);
  };

  const eventsForDay = selectedDay ? mockEvents[selectedDay] || [] : [];

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <AppHeader />

      <ColorBlock color="blue" className="py-5">
        <h1 className="text-2xl font-bold">Kalendar događanja</h1>
      </ColorBlock>

      {/* Calendar */}
      <ColorBlock color="white" className="py-4">
        {/* Month navigation */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-foreground hover:bg-muted"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="font-bold text-lg">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
          <button
            onClick={nextMonth}
            className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-foreground hover:bg-muted"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((day, i) => (
            <div key={i} className="text-center text-sm font-semibold text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before the first of the month */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}
          
          {/* Days of the month */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const hasEvents = mockEvents[day]?.length > 0;
            const isSelected = selectedDay === day;
            
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`aspect-square flex flex-col items-center justify-center rounded-lg border-2 transition-all ${
                  isSelected 
                    ? 'border-foreground bg-vis-blue text-primary-foreground' 
                    : hasEvents
                    ? 'border-foreground bg-vis-yellow'
                    : 'border-transparent hover:border-muted-foreground'
                }`}
              >
                <span className="font-semibold">{day}</span>
                {hasEvents && !isSelected && (
                  <div className="w-1.5 h-1.5 rounded-full bg-vis-blue mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </ColorBlock>

      {/* Events for selected day */}
      <ColorBlock color="cyan" className="flex-1 py-4">
        <h3 className="font-bold mb-3">
          {selectedDay 
            ? `Događanja ${selectedDay}. ${monthNames[currentMonth.getMonth()].toLowerCase()}`
            : 'Odaberite dan'
          }
        </h3>
        {selectedDay && eventsForDay.length > 0 ? (
          <div className="space-y-3">
            {eventsForDay.map((event) => (
              <VisCard key={event.id} onClick={() => navigate(`/events/${event.id}`)}>
                <VisBadge variant={event.category} className="mb-2">
                  {event.category}
                </VisBadge>
                <h4 className="font-bold mb-2">{event.title}</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </span>
                </div>
              </VisCard>
            ))}
          </div>
        ) : selectedDay ? (
          <VisCard>
            <p className="text-muted-foreground text-center py-4">Nema događanja ovaj dan</p>
          </VisCard>
        ) : (
          <VisCard>
            <p className="text-muted-foreground text-center py-4">Kliknite na dan za pregled događanja</p>
          </VisCard>
        )}
      </ColorBlock>

      <ColorBlock color="green" noPadding className="h-2" />
    </div>
  );
};

export default EventsCalendar;
