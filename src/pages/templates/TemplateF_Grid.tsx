/**
 * TEMPLATE F: Grid Page
 * 
 * Use for: Home pages, selection screens, menus
 * 
 * Structure:
 * - Welcome/title section
 * - Grid of action cards
 * - Featured item card
 * - Bottom navigation/action
 */

import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Ship, Calendar, Camera, Leaf, MessageSquare, ChevronRight, Clock, MapPin, Settings, Info } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════
// TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════

interface QuickAction {
  icon: LucideIcon;
  label: string;
  path: string;
  bgColor: string;
  shadowColor: string;
}

const TemplateF_Grid = () => {
  const navigate = useNavigate();

  // ═════════════════════════════════════════════════════════════════════════
  // QUICK ACTIONS DATA
  // Define grid items with icon, label, path, colors
  // ═════════════════════════════════════════════════════════════════════════
  const quickActions: QuickAction[] = [
    {
      icon: Ship,
      label: 'Schedules',
      path: '/templates/list',
      bgColor: 'bg-vis-blue',
      shadowColor: 'hsl(var(--vis-orange))'
    },
    {
      icon: Camera,
      label: 'Report',
      path: '/templates/form',
      bgColor: 'bg-vis-green',
      shadowColor: 'hsl(var(--vis-purple))'
    },
    {
      icon: Leaf,
      label: 'Nature',
      path: '/templates/image',
      bgColor: 'bg-vis-yellow',
      shadowColor: 'hsl(var(--vis-violet))'
    },
    {
      icon: Calendar,
      label: 'Events',
      path: '/templates/detail',
      bgColor: 'bg-vis-cyan',
      shadowColor: 'hsl(var(--vis-deep-blue))'
    },
    {
      icon: Settings,
      label: 'Settings',
      path: '/templates/simple',
      bgColor: 'bg-vis-purple',
      shadowColor: 'hsl(var(--vis-green))'
    },
    {
      icon: Info,
      label: 'Info',
      path: '/templates',
      bgColor: 'bg-vis-amber',
      shadowColor: 'hsl(var(--vis-cyan))'
    },
  ];

  // Featured item data
  const featuredEvent = {
    id: 1,
    title: 'Summer Festival',
    time: '20:00',
    location: 'Main Square'
  };

  // Helper to determine text color based on background
  const getTextColor = (bgColor: string) => {
    return bgColor === 'bg-vis-blue' || bgColor === 'bg-vis-emergency' 
      ? 'text-background' 
      : 'text-foreground';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* APP HEADER                                                           */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <AppHeader />

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* WELCOME SECTION                                                      */}
      {/* Large title with subtitle - no icon box                              */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-5xl font-bold tracking-tighter">
          Pomalo
        </h1>
        <p className="text-muted-foreground font-mono mt-1 uppercase tracking-wide">
          Template Samples
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* QUICK ACTIONS GRID                                                   */}
      {/* - grid-cols-2 for 2-column layout                                    */}
      {/* - gap-4 for spacing between cards                                    */}
      {/* - aspect-square makes cards square                                   */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.path + action.label}
              onClick={() => navigate(action.path)}
              className={`
                ${action.bgColor} ${getTextColor(action.bgColor)}
                p-5 border-[3px] border-foreground 
                flex flex-col items-center justify-center gap-3 
                aspect-square
                hover:translate-x-[2px] hover:translate-y-[2px] 
                transition-all
              `}
              style={{ boxShadow: `6px 6px 0 ${action.shadowColor}` }}
            >
              <action.icon className="w-10 h-10" strokeWidth={2} />
              <span className="font-bold text-lg tracking-tight text-center uppercase">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* FEATURED ITEM SECTION                                                */}
      {/* Section header with icon + featured card                             */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="px-4 mb-6">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5" strokeWidth={2.5} />
          <h2 className="font-bold uppercase tracking-wide">Featured Event</h2>
        </div>
        
        {/* Featured card */}
        <button
          onClick={() => navigate('/templates/detail')}
          className="
            w-full bg-vis-purple p-5 
            border-[3px] border-foreground 
            shadow-brutal
            hover:translate-x-[2px] hover:translate-y-[2px] 
            hover:shadow-brutal-sm 
            transition-all text-left
          "
        >
          <div className="flex items-start gap-4">
            {/* Emoji box */}
            <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center text-3xl border-[3px] border-foreground">
              🎉
            </div>
            <div className="flex-1 min-w-0">
              {/* Badge */}
              <span className="inline-block bg-foreground text-background px-2 py-0.5 text-xs font-bold uppercase tracking-wider mb-2">
                Event
              </span>
              {/* Title */}
              <h3 className="font-bold text-xl leading-tight mb-2">{featuredEvent.title}</h3>
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-sm">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredEvent.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {featuredEvent.location}
                </span>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* BOTTOM ACTION CARD                                                   */}
      {/* Full-width card with icon, text, and chevron                         */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="px-4 pb-8">
        <button
          onClick={() => navigate('/templates/form')}
          className="
            w-full bg-background 
            border-[3px] border-foreground 
            px-5 py-4 
            flex items-center gap-3 
            hover:bg-muted transition-colors
          "
          style={{ boxShadow: '6px 6px 0 hsl(var(--vis-violet))' }}
        >
          <MessageSquare className="w-8 h-8" strokeWidth={2} />
          <div className="flex-1 text-left">
            <p className="font-bold uppercase tracking-wide">Have a Suggestion?</p>
            <p className="text-sm font-mono text-muted-foreground">Share your ideas with us</p>
          </div>
          <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default TemplateF_Grid;
