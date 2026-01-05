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
  Home,
  Wine
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
  accent?: boolean;
}

const menuItems: MenuItem[] = [
  { icon: Home, label: 'POČETNA', path: '/home', accent: true },
  { icon: Calendar, label: 'KALENDAR DOGAĐANJA', path: '/events' },
  { icon: Ship, label: 'VOZNI REDOVI', path: '/schedules' },
  { icon: Wine, label: 'VINSKE CESTE', path: '/wine-routes' },
  { icon: Leaf, label: 'FLORA & FAUNA', path: '/geopark' },
  { icon: Droplets, label: 'VODA OTOKA VISA', path: '/water' },
  { icon: Trash2, label: 'SMEĆE I RECIKLAŽA', path: '/waste' },
  { icon: Info, label: 'VISITOR INFO', path: '/visitor-info' },
  { icon: Phone, label: 'IMENIK / KONTAKTI', path: '/directory' },
  { icon: Camera, label: 'SLIKAJ & POPRAVI', path: '/report' },
  { icon: MessageSquare, label: 'IMATE PRIJEDLOG / UKLJUČI SE', path: '/feedback' },
  { icon: Settings, label: 'POSTAVKE', path: '/settings' },
];

const MenuV3 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-foreground">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-6 text-background">
        <h1 className="text-4xl font-bold tracking-tighter">
          IZBORNIK
        </h1>
        <p className="font-mono opacity-80 mt-1 uppercase tracking-wide text-sm">
          Sve na jednom mjestu
        </p>
      </div>

      {/* Menu items */}
      <div className="bg-background border-t-[4px] border-foreground min-h-[calc(100vh-160px)] px-4 pt-6 pb-8">
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 p-4 border-[3px] border-foreground hover:translate-x-[2px] hover:translate-y-[2px] transition-all group ${
                item.accent ? 'bg-vis-blue' : 'bg-background'
              }`}
              style={{
                boxShadow: index % 6 === 0 ? '4px 4px 0 hsl(var(--vis-yellow))' :
                          index % 6 === 1 ? '4px 4px 0 hsl(var(--vis-blue))' :
                          index % 6 === 2 ? '4px 4px 0 hsl(var(--vis-violet))' :
                          index % 6 === 3 ? '4px 4px 0 hsl(var(--vis-orange))' :
                          index % 6 === 4 ? '4px 4px 0 hsl(var(--vis-purple))' :
                          '4px 4px 0 hsl(var(--vis-deep-blue))'
              }}
            >
              <item.icon className="w-6 h-6" strokeWidth={2.5} />
              <span className="flex-1 text-left font-bold tracking-tight">{item.label}</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </button>
          ))}
        </div>

        {/* Decorative blocks at bottom */}
        <div className="flex justify-center gap-3 mt-8">
          <div className="w-4 h-4 bg-vis-blue border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-violet border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-orange border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-purple border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-deep-blue border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
        </div>
      </div>
    </div>
  );
};

export default MenuV3;
