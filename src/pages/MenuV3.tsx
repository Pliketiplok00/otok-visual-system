import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { 
  Calendar, 
  Ship, 
  Leaf, 
  Droplets, 
  Trash2, 
  Info, 
  Phone, 
  Camera, 
  MessageSquare, 
  Settings,
  ChevronRight,
  Home
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
  color: string;
  shadowColor: string;
}

const menuItems: MenuItem[] = [
  { icon: Home, label: 'Početna', path: '/home-v3', color: 'bg-vis-blue', shadowColor: 'bg-vis-cyan' },
  { icon: Calendar, label: 'Kalendar događanja', path: '/events', color: 'bg-vis-yellow', shadowColor: 'bg-vis-green' },
  { icon: Ship, label: 'Vozni redovi', path: '/schedules', color: 'bg-vis-cyan', shadowColor: 'bg-vis-blue' },
  { icon: Leaf, label: 'Geopark', path: '/geopark', color: 'bg-vis-green', shadowColor: 'bg-vis-yellow' },
  { icon: Droplets, label: 'Sve o vodi', path: '/water', color: 'bg-vis-blue', shadowColor: 'bg-vis-cyan' },
  { icon: Trash2, label: 'Smeće i reciklaža', path: '/waste', color: 'bg-vis-green', shadowColor: 'bg-vis-yellow' },
  { icon: Info, label: 'Visitor info', path: '/visitor-info', color: 'bg-vis-cyan', shadowColor: 'bg-vis-blue' },
  { icon: Phone, label: 'Imenik / kontakti', path: '/directory', color: 'bg-vis-yellow', shadowColor: 'bg-vis-green' },
  { icon: Camera, label: 'Slikaj & popravi', path: '/report', color: 'bg-vis-green', shadowColor: 'bg-vis-cyan' },
  { icon: MessageSquare, label: 'Uključi se', path: '/feedback', color: 'bg-vis-cyan', shadowColor: 'bg-vis-yellow' },
  { icon: Settings, label: 'Postavke', path: '/settings', color: 'bg-muted', shadowColor: 'bg-vis-blue' },
];

const MenuV3 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-vis-blue relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-vis-cyan/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-32 h-32 bg-vis-yellow/20 rounded-full blur-2xl -translate-x-1/2" />
      
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-primary-foreground">
        <h1 className="text-3xl font-extrabold">
          Izbornik <span className="text-vis-yellow">📋</span>
        </h1>
        <p className="opacity-80 mt-1">Sve na jednom mjestu</p>
      </div>

      {/* Menu items card */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-180px)] px-4 pt-5 pb-8">
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-4 p-3 rounded-2xl border-2 border-foreground bg-card hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              style={{
                boxShadow: `4px 4px 0 var(--shadow-color)`,
                // @ts-ignore
                '--shadow-color': item.shadowColor === 'bg-vis-cyan' ? 'hsl(var(--vis-cyan))' :
                                  item.shadowColor === 'bg-vis-yellow' ? 'hsl(var(--vis-yellow))' :
                                  item.shadowColor === 'bg-vis-green' ? 'hsl(var(--vis-green))' :
                                  'hsl(var(--vis-blue))'
              }}
            >
              <div className={`w-11 h-11 rounded-xl border-2 border-foreground ${item.color} flex items-center justify-center shrink-0 transition-transform group-hover:rotate-3`}>
                <item.icon className={`w-5 h-5 ${item.color === 'bg-vis-blue' ? 'text-primary-foreground' : 'text-foreground'}`} strokeWidth={2.5} />
              </div>
              <span className="flex-1 text-left font-semibold">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>

        {/* Decorative dots at bottom */}
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

export default MenuV3;
