/**
 * ============================================
 * TEMPLATE G: MENU / NAVIGATION PAGE
 * ============================================
 * 
 * USE FOR:
 * - Main navigation menus
 * - Category selection screens
 * - Index/hub pages with multiple destinations
 * 
 * STRUCTURE:
 * 1. Dark header section with title
 * 2. Menu item list with rotating accent shadows
 * 3. Decorative color blocks footer
 * 
 * KEY PATTERNS:
 * - Inverted color scheme (dark background header)
 * - Each menu item has cycling colored shadow
 * - Hover effects with translate
 * - ChevronRight indicator on each item
 */

import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { 
  Calendar, 
  Ship, 
  Leaf, 
  Droplets, 
  Settings,
  ChevronRight,
  Home,
  Phone,
  Info,
  MessageSquare
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Define menu item interface
interface MenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
  accent?: boolean; // Optional accent styling for priority items
}

// Sample menu items - replace with your own navigation
const menuItems: MenuItem[] = [
  { icon: Home, label: 'HOME', path: '/templates', accent: true },
  { icon: Calendar, label: 'EVENTS CALENDAR', path: '/templates/detail' },
  { icon: Ship, label: 'SCHEDULES', path: '/templates/list' },
  { icon: Leaf, label: 'FLORA & FAUNA', path: '/templates/image' },
  { icon: Droplets, label: 'WATER INFO', path: '/templates/simple' },
  { icon: Info, label: 'VISITOR INFO', path: '/templates/simple' },
  { icon: Phone, label: 'DIRECTORY', path: '/templates/list' },
  { icon: MessageSquare, label: 'FEEDBACK', path: '/templates/form' },
  { icon: Settings, label: 'SETTINGS', path: '/templates' },
];

// Shadow color rotation based on index
const getShadowColor = (index: number): string => {
  const colors = [
    'hsl(var(--vis-deep-blue))',
    'hsl(var(--vis-blue))',
    'hsl(var(--vis-violet))',
    'hsl(var(--vis-orange))',
    'hsl(var(--vis-purple))',
    'hsl(var(--vis-yellow))',
  ];
  return colors[index % colors.length];
};

const TemplateG_Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-foreground">
      <AppHeader />

      {/* Dark Header Section */}
      <div className="px-5 pt-6 pb-6 text-background">
        <h1 className="text-4xl font-bold tracking-tighter">
          MENU TITLE
        </h1>
        <p className="font-mono opacity-80 mt-1 uppercase tracking-wide text-sm">
          Subtitle or description text
        </p>
      </div>

      {/* Menu Items Container */}
      <div className="bg-background border-t-[4px] border-foreground min-h-[calc(100vh-160px)] px-4 pt-6 pb-8">
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <button
              key={item.path + index}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 p-4 border-[3px] border-foreground hover:translate-x-[2px] hover:translate-y-[2px] transition-all group ${
                item.accent ? 'bg-vis-blue' : 'bg-background'
              }`}
              style={{ boxShadow: `4px 4px 0 ${getShadowColor(index)}` }}
            >
              {/* Icon */}
              <item.icon className="w-6 h-6" strokeWidth={2.5} />
              
              {/* Label */}
              <span className="flex-1 text-left font-bold tracking-tight">
                {item.label}
              </span>
              
              {/* Chevron with hover animation */}
              <ChevronRight 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                strokeWidth={2.5} 
              />
            </button>
          ))}
        </div>

        {/* Back to Templates */}
        <button
          onClick={() => navigate('/templates')}
          className="w-full mt-6 p-3 border-[3px] border-foreground bg-muted text-center font-bold hover:bg-foreground hover:text-background transition-colors"
        >
          ← BACK TO TEMPLATES
        </button>

        {/* Decorative Color Blocks Footer */}
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

export default TemplateG_Menu;
