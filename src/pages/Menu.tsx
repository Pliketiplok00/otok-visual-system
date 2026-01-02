import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import ColorBlock from '@/components/layout/ColorBlock';
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
  ChevronRight
} from 'lucide-react';

interface MenuItem {
  icon: React.ElementType;
  label: string;
  path: string;
  color?: 'blue' | 'green' | 'cyan' | 'yellow';
}

const menuItems: MenuItem[] = [
  { icon: Calendar, label: 'Kalendar događanja', path: '/events', color: 'blue' },
  { icon: Ship, label: 'Vozni redovi', path: '/schedules', color: 'cyan' },
  { icon: Leaf, label: 'Geopark', path: '/geopark', color: 'green' },
  { icon: Droplets, label: 'Sve o vodi', path: '/water', color: 'blue' },
  { icon: Trash2, label: 'Smeće i reciklaža', path: '/waste', color: 'green' },
  { icon: Info, label: 'Visitor info', path: '/visitor-info', color: 'cyan' },
  { icon: Phone, label: 'Imenik / kontakti', path: '/directory', color: 'yellow' },
  { icon: Camera, label: 'Slikaj & popravi', path: '/report', color: 'green' },
  { icon: MessageSquare, label: 'Uključi se', path: '/feedback', color: 'cyan' },
  { icon: Settings, label: 'Postavke', path: '/settings' },
];

const colorClasses = {
  blue: 'bg-vis-blue text-primary-foreground',
  green: 'bg-vis-green text-foreground',
  cyan: 'bg-vis-cyan text-foreground',
  yellow: 'bg-vis-yellow text-foreground',
};

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppHeader />

      <ColorBlock color="blue" className="py-4">
        <h1 className="text-2xl font-bold">Izbornik</h1>
      </ColorBlock>

      <div className="flex-1">
        {menuItems.map((item, index) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="w-full flex items-center gap-4 px-4 py-4 border-b-2 border-foreground bg-card hover:bg-muted transition-colors"
          >
            <div className={`w-11 h-11 rounded-lg border-2 border-foreground flex items-center justify-center shrink-0 ${item.color ? colorClasses[item.color] : 'bg-muted'}`}>
              <item.icon className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <span className="flex-1 text-left font-semibold">{item.label}</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        ))}
      </div>

      <ColorBlock color="yellow" noPadding className="h-2" />
    </div>
  );
};

export default Menu;
