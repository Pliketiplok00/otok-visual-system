import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import VisBadge from '@/components/ui/VisBadge';
import { Calendar, Ship, Camera, Droplets, ChevronRight, MapPin, Clock, Leaf, MessageSquare, AlertTriangle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface QuickAction {
  icon: LucideIcon;
  label: string;
  path: string;
  bgColor: string;
  shadowColor: string;
}

const HomeV3 = () => {
  const navigate = useNavigate();

  const todayEvent = {
    id: 1,
    title: 'Ljetna fešta u Visu',
    time: '20:00',
    location: 'Trg sv. Jurja',
    category: 'vis' as const,
  };

  const quickActions: QuickAction[] = [
    { icon: Ship, label: 'Trajekti', path: '/schedules', bgColor: 'bg-vis-blue', shadowColor: 'shadow-[4px_4px_0_hsl(var(--vis-cyan))]' },
    { icon: Camera, label: 'Prijavi', path: '/report', bgColor: 'bg-vis-green', shadowColor: 'shadow-[4px_4px_0_hsl(var(--vis-yellow))]' },
    { icon: Droplets, label: 'Voda', path: '/water', bgColor: 'bg-vis-cyan', shadowColor: 'shadow-[4px_4px_0_hsl(var(--vis-blue))]' },
    { icon: Leaf, label: 'Geopark', path: '/geopark', bgColor: 'bg-vis-yellow', shadowColor: 'shadow-[4px_4px_0_hsl(var(--vis-green))]' },
  ];

  return (
    <div className="min-h-screen bg-muted relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-vis-blue/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-20 left-0 w-40 h-40 bg-vis-green/5 rounded-full -translate-x-1/2" />

      <AppHeader />

      {/* Emergency banner - pill style */}
      <div className="px-4 pt-4">
        <button 
          onClick={() => navigate('/inbox')}
          className="w-full bg-vis-emergency text-primary-foreground px-4 py-3 rounded-2xl flex items-center gap-3 border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] hover:shadow-[2px_2px_0_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="flex-1 text-left">
            <p className="font-bold text-sm">Prekid vodoopskrbe</p>
            <p className="text-xs opacity-80">Vis · Danas 10-14h</p>
          </div>
          <ChevronRight className="w-5 h-5 opacity-70" />
        </button>
      </div>

      {/* Welcome */}
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-3xl font-extrabold">
          Bok! <span className="inline-block animate-pulse">👋</span>
        </h1>
        <p className="text-muted-foreground mt-1">Sve informacije za danas</p>
      </div>

      {/* Quick Actions Grid - Illustrated style */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.path}
              onClick={() => navigate(action.path)}
              className={`${action.bgColor} ${action.shadowColor} p-5 rounded-2xl border-2 border-foreground flex flex-col items-start gap-3 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_hsl(var(--foreground))] transition-all`}
            >
              <div className="w-12 h-12 rounded-xl bg-card/90 border-2 border-foreground flex items-center justify-center">
                <action.icon className="w-6 h-6 text-foreground" strokeWidth={2} />
              </div>
              <span className="font-bold text-lg text-foreground">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Today's Event - Card with illustration style */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 mb-3 px-1">
          <div className="w-7 h-7 rounded-lg bg-vis-blue flex items-center justify-center">
            <Calendar className="w-4 h-4 text-primary-foreground" />
          </div>
          <h2 className="font-bold">Danas na otoku</h2>
        </div>
        
        <button
          onClick={() => navigate(`/events/${todayEvent.id}`)}
          className="w-full bg-card p-5 rounded-2xl border-2 border-foreground shadow-[4px_4px_0_hsl(var(--vis-yellow))] hover:shadow-[2px_2px_0_hsl(var(--vis-yellow))] hover:translate-x-[2px] hover:translate-y-[2px] transition-all relative overflow-hidden text-left"
        >
          {/* Decorative blob */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-vis-yellow/20 rounded-full" />
          
          <div className="relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-vis-yellow border-2 border-foreground flex items-center justify-center shrink-0 text-2xl">
                🎉
              </div>
              <div className="flex-1 min-w-0">
                <VisBadge variant={todayEvent.category} className="mb-2">
                  {todayEvent.category}
                </VisBadge>
                <h3 className="font-bold text-lg leading-tight mb-2">{todayEvent.title}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
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
          </div>
        </button>
      </div>

      {/* Bottom action */}
      <div className="px-4 pb-8">
        <button
          onClick={() => navigate('/feedback')}
          className="w-full bg-vis-cyan/20 border-2 border-vis-cyan text-foreground px-5 py-4 rounded-2xl flex items-center gap-3 hover:bg-vis-cyan/30 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-vis-cyan border-2 border-foreground flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="flex-1 text-left">
            <p className="font-bold">Imate prijedlog?</p>
            <p className="text-sm text-muted-foreground">Javite nam svoje ideje</p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default HomeV3;
