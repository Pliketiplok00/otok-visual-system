import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Calendar, Ship, Camera, ChevronRight, MapPin, Clock, Leaf, MessageSquare, Droplet, Users, Info } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import summerFestivalPhoto from '@/assets/summer-festival.jpg';
interface QuickAction {
  icon: LucideIcon;
  label: string;
  path: string;
  bgColor: string;
}
const HomeV3 = () => {
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
    bgColor: 'bg-vis-green'
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
  }];
  return <div className="min-h-screen bg-background">
      <AppHeader />

      {/* Emergency banners - brutal style */}
      <div className="px-4 pt-4 space-y-2">
        <button onClick={() => navigate('/inbox')} className="w-full bg-vis-emergency text-background px-4 py-3 flex items-center gap-3 border-[3px] border-foreground shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
          <Droplet className="w-6 h-6" strokeWidth={2.5} />
          <div className="flex-1 text-left">
            <p className="font-bold uppercase tracking-wide">PREKID VODOOPSKRBE</p>
            <p className="text-sm font-mono opacity-80">VIS · DANAS 10-14H</p>
          </div>
          <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
        </button>

        <button onClick={() => navigate('/inbox')} className="w-full bg-vis-notice text-background px-4 py-3 flex items-center gap-3 border-[3px] border-foreground shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
          <Users className="w-6 h-6" strokeWidth={2.5} />
          <div className="flex-1 text-left">
            <p className="font-bold uppercase tracking-wide">KOMIŽA: POZIV NA SUDJELOVANJE</p>
            <p className="text-sm font-mono opacity-80">JAVNA RASPRAVA</p>
          </div>
          <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
        </button>
      </div>

      {/* Welcome - brutal typography */}
      <div className="px-5 pt-8 pb-4">
        <h1 className="text-5xl font-bold tracking-tighter">
          ​Pomalo
        </h1>
        <p className="text-muted-foreground font-mono mt-1 uppercase tracking-wide">​POZDRAV S VISA</p>
      </div>

      {/* Quick Actions Grid - Brutalist cards */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action, index) => <button key={action.path} onClick={() => navigate(action.path)} className={`${action.bgColor} p-5 border-[3px] border-foreground flex flex-col items-center gap-3 hover:translate-x-[2px] hover:translate-y-[2px] transition-all ${action.bgColor === 'bg-vis-blue' ? 'text-background' : 'text-foreground'}`} style={{
          boxShadow: index === 0 ? '6px 6px 0 hsl(var(--vis-orange))' : 
                     index === 1 ? '6px 6px 0 hsl(var(--vis-purple))' : 
                     index === 2 ? '6px 6px 0 hsl(var(--vis-violet))' : 
                     '6px 6px 0 hsl(var(--vis-deep-blue))'
        }}>
              <action.icon className="w-10 h-10" strokeWidth={2} />
              <span className="font-bold text-xl tracking-tight">{action.label}</span>
            </button>)}
        </div>
      </div>

      {/* Today's Event - Brutal card */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5" strokeWidth={2.5} />
          <h2 className="font-bold uppercase tracking-wide">DANAS NA OTOKU</h2>
        </div>
        
        <button onClick={() => navigate(`/events/${todayEvent.id}`)} className="w-full bg-vis-purple p-5 border-[3px] border-foreground shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm transition-all text-left">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 border-[3px] border-foreground overflow-hidden shrink-0" style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}>
              <img src={summerFestivalPhoto} alt="Ljetna fešta" className="w-full h-full object-cover" />
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
        <button onClick={() => navigate('/feedback')} className="w-full bg-background border-[3px] border-foreground px-5 py-4 flex items-center gap-3 hover:bg-muted transition-colors" style={{
        boxShadow: '6px 6px 0 hsl(var(--vis-violet))'
      }}>
          <MessageSquare className="w-8 h-8" strokeWidth={2} />
          <div className="flex-1 text-left">
            <p className="font-bold uppercase tracking-wide">IMATE PRIJEDLOG?</p>
            <p className="text-sm font-mono text-muted-foreground">Javite nam svoje ideje</p>
          </div>
          <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
        </button>
      </div>
    </div>;
};
export default HomeV3;