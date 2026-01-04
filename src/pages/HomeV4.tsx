import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Calendar, Ship, Camera, ChevronRight, MapPin, Clock, Leaf, MessageSquare, Droplets, Info } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface QuickAction {
  icon: LucideIcon;
  label: string;
  path: string;
  bgColor: string;
}

const HomeV4 = () => {
  const navigate = useNavigate();

  const todayEvent = {
    id: 1,
    title: 'LJETNA FEŠTA U VISU',
    time: '20:00',
    location: 'Trg sv. Jurja'
  };

  const quickActions: QuickAction[] = [{
    icon: Ship,
    label: 'RED PLOVIDBE',
    path: '/schedules',
    bgColor: 'bg-vis-blue'
  }, {
    icon: Camera,
    label: 'CLICK&FIX',
    path: '/report',
    bgColor: 'bg-vis-terracotta'
  }, {
    icon: Leaf,
    label: 'ZAŠTIĆENE VRSTE',
    path: '/geopark',
    bgColor: 'bg-vis-yellow'
  }, {
    icon: Info,
    label: 'VISITOR INFO',
    path: '/visitor-info',
    bgColor: 'bg-vis-cyan'
  }, {
    icon: Calendar,
    label: 'KALENDAR DOGAĐANJA',
    path: '/events',
    bgColor: 'bg-vis-purple'
  }, {
    icon: Droplets,
    label: 'VODA',
    path: '/water',
    bgColor: 'bg-vis-amber'
  }];

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      {/* Welcome - brutal typography */}
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-5xl font-bold tracking-tighter">
          ​Pomalo
        </h1>
        <p className="text-muted-foreground font-mono mt-1 uppercase tracking-wide">​POZDRAV S VISA</p>
      </div>

      {/* Quick Actions Grid - 6 boxes */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={action.path}
              onClick={() => navigate(action.path)}
              className={`${action.bgColor} p-5 border-[3px] border-foreground flex flex-col items-center justify-center gap-3 aspect-square hover:translate-x-[2px] hover:translate-y-[2px] transition-all ${action.bgColor === 'bg-vis-blue' || action.bgColor === 'bg-vis-terracotta' ? 'text-background' : 'text-foreground'}`}
              style={{
                boxShadow: index === 0 ? '6px 6px 0 hsl(var(--vis-orange))' : 
                           index === 1 ? '6px 6px 0 hsl(var(--vis-purple))' : 
                           index === 2 ? '6px 6px 0 hsl(var(--vis-violet))' : 
                           index === 3 ? '6px 6px 0 hsl(var(--vis-deep-blue))' :
                           index === 4 ? '6px 6px 0 hsl(var(--vis-green))' :
                           '6px 6px 0 hsl(var(--vis-cyan))'
              }}
            >
              <action.icon className="w-10 h-10" strokeWidth={2} />
              <span className="font-bold text-lg tracking-tight text-center">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Today's Event - Brutal card */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5" strokeWidth={2.5} />
          <h2 className="font-bold uppercase tracking-wide">DANAS NA OTOKU</h2>
        </div>
        
        <button
          onClick={() => navigate(`/events/${todayEvent.id}`)}
          className="w-full bg-vis-purple p-5 border-[3px] border-foreground shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm transition-all text-left"
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center text-3xl border-[3px] border-foreground">
              🎉
            </div>
            <div className="flex-1 min-w-0">
              <span className="inline-block bg-foreground text-background px-2 py-0.5 text-xs font-bold uppercase tracking-wider mb-2">
                VIS
              </span>
              <h3 className="font-bold text-xl leading-tight mb-2">{todayEvent.title}</h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-sm">
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
        </button>
      </div>

      {/* Bottom action - Feedback */}
      <div className="px-4 pb-8">
        <button
          onClick={() => navigate('/feedback')}
          className="w-full bg-background border-[3px] border-foreground px-5 py-4 flex items-center gap-3 hover:bg-muted transition-colors"
          style={{ boxShadow: '6px 6px 0 hsl(var(--vis-violet))' }}
        >
          <MessageSquare className="w-8 h-8" strokeWidth={2} />
          <div className="flex-1 text-left">
            <p className="font-bold uppercase tracking-wide">IMATE PRIJEDLOG?</p>
            <p className="text-sm font-mono text-muted-foreground">Javite nam svoje ideje</p>
          </div>
          <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default HomeV4;
