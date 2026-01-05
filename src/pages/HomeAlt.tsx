import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import VisCard from '@/components/ui/VisCard';
import VisBadge from '@/components/ui/VisBadge';
import { Calendar, Ship, Camera, MessageSquare, Droplets, ChevronRight, MapPin, Clock, Leaf, Trash2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface QuickAction {
  icon: LucideIcon;
  label: string;
  path: string;
  color: string;
  bgColor: string;
}

const HomeAlt = () => {
  const navigate = useNavigate();

  const todayEvent = {
    id: 1,
    title: 'Ljetna fešta u Visu',
    time: '20:00',
    location: 'Trg sv. Jurja',
    category: 'vis' as const,
  };

  const quickActions: QuickAction[] = [
    { icon: Ship, label: 'Vozni redovi', path: '/schedules', color: 'text-primary-foreground', bgColor: 'bg-vis-blue' },
    { icon: Camera, label: 'Prijavi problem', path: '/report', color: 'text-foreground', bgColor: 'bg-vis-green' },
    { icon: Droplets, label: 'Voda', path: '/water', color: 'text-foreground', bgColor: 'bg-vis-cyan' },
    { icon: Trash2, label: 'Otpad', path: '/waste', color: 'text-foreground', bgColor: 'bg-vis-yellow' },
    { icon: Leaf, label: 'Geopark', path: '/geopark', color: 'text-foreground', bgColor: 'bg-vis-green' },
    { icon: MessageSquare, label: 'Povratne info', path: '/feedback', color: 'text-foreground', bgColor: 'bg-vis-cyan' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-vis-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-24 right-0 w-32 h-32 bg-vis-cyan/20 rounded-full blur-2xl" />
      <div className="absolute top-48 left-0 w-24 h-24 bg-vis-yellow/20 rounded-full blur-xl -translate-x-1/2" />

      <AppHeader />

      {/* Emergency banner with blob style */}
      <div className="mx-4 mt-4 relative">
        <div className="bg-vis-emergency text-primary-foreground px-5 py-4 rounded-2xl border-2 border-foreground flex items-center gap-3 shadow-[4px_4px_0_hsl(var(--foreground))]">
          <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center shrink-0">
            <span className="text-xl">⚠️</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm">Prekid vodoopskrbe</p>
            <p className="text-xs opacity-90">Vis, danas 10-14h</p>
          </div>
          <ChevronRight className="w-5 h-5 opacity-70" />
        </div>
      </div>

      {/* Welcome section */}
      <div className="px-6 pt-8 pb-6 text-primary-foreground">
        <h1 className="text-3xl font-extrabold mb-1">
          Dobro <span className="text-vis-yellow">došli</span>
        </h1>
        <p className="opacity-90">Što vas zanima danas?</p>
      </div>

      {/* Main content card */}
      <div className="flex-1 bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground px-5 pt-6 pb-8 relative">
        {/* Today's event */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-vis-blue flex items-center justify-center">
              <Calendar className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <h2 className="font-bold text-lg">Danas na otoku</h2>
          </div>
          
          <VisCard 
            onClick={() => navigate(`/events/${todayEvent.id}`)}
            className="relative overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-vis-yellow/10 rounded-bl-[3rem]" />
            
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-vis-yellow border-2 border-foreground flex items-center justify-center shrink-0">
                <span className="text-2xl">🎉</span>
              </div>
              <div className="flex-1 min-w-0">
                <VisBadge variant={todayEvent.category} className="mb-2">
                  {todayEvent.category}
                </VisBadge>
                <h3 className="font-bold text-lg mb-2">{todayEvent.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {todayEvent.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {todayEvent.location}
                  </span>
                </div>
              </div>
            </div>
          </VisCard>
        </div>

        {/* Quick Actions - circular icons style */}
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-4">Brzi pristup</h2>
          <div className="grid grid-cols-3 gap-4">
            {quickActions.map((action) => (
              <button
                key={action.path}
                onClick={() => navigate(action.path)}
                className="flex flex-col items-center gap-2 group"
              >
                <div className={`w-16 h-16 rounded-2xl border-2 border-foreground ${action.bgColor} ${action.color} flex items-center justify-center transition-all group-hover:scale-105 group-hover:shadow-[3px_3px_0_hsl(var(--foreground))]`}>
                  <action.icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold text-center">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stats bar - inspired by progress bar in reference */}
        <div className="bg-muted rounded-2xl border-2 border-foreground p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold">Aktivne prijave</span>
            <span className="text-sm text-muted-foreground">3 / 5 riješeno</span>
          </div>
          <div className="h-3 bg-card rounded-full border border-foreground overflow-hidden flex">
            <div className="h-full bg-vis-cyan" style={{ width: '40%' }} />
            <div className="h-full bg-vis-blue" style={{ width: '20%' }} />
          </div>
          <div className="flex gap-4 mt-3 text-xs">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-vis-cyan" />
              U obradi
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-vis-blue" />
              Završeno
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAlt;
