import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import VisBadge from '@/components/ui/VisBadge';
import { ChevronRight, Bell, Info, Settings, X } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

type Filter = 'all' | 'vis' | 'komiza' | 'kultura' | 'hitno' | 'opcenito';

interface Notification {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: 'vis' | 'komiza' | 'kultura' | 'hitno' | 'opcenito';
  unread: boolean;
  emoji: string;
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    title: 'Prekid vodoopskrbe u Visu',
    excerpt: 'Zbog planiranih radova na vodovodnoj mreži, doći će do prekida vodoopskrbe...',
    date: 'Danas',
    category: 'hitno',
    unread: true,
    emoji: '🚨',
  },
  {
    id: 2,
    title: 'Nova trajektna linija Split-Vis',
    excerpt: 'Od 15. lipnja uvodi se dodatna trajektna linija na relaciji Split-Vis...',
    date: 'Jučer',
    category: 'vis',
    unread: true,
    emoji: '⛴️',
  },
  {
    id: 3,
    title: 'Ljetni raspored odvoza otpada',
    excerpt: 'Obavještavamo građane da od 1. lipnja vrijedi ljetni raspored odvoza...',
    date: '2 dana',
    category: 'opcenito',
    unread: false,
    emoji: '♻️',
  },
  {
    id: 4,
    title: 'Koncert na Trgu Komiže',
    excerpt: 'U subotu 20. lipnja održat će se tradicionalni ljetni koncert...',
    date: '3 dana',
    category: 'komiza',
    unread: false,
    emoji: '🎵',
  },
  {
    id: 5,
    title: 'Izložba "More i otok" u galeriji',
    excerpt: 'Pozivamo vas na otvorenje izložbe "More i otok" u Gradskoj galeriji Vis...',
    date: '4 dana',
    category: 'kultura',
    unread: false,
    emoji: '🎨',
  },
];

const filters: { id: Filter; label: string; color: string }[] = [
  { id: 'all', label: 'Sve', color: 'bg-foreground text-background' },
  { id: 'vis', label: 'Vis', color: 'bg-vis-blue text-primary-foreground' },
  { id: 'komiza', label: 'Komiža', color: 'bg-vis-green text-foreground' },
  { id: 'kultura', label: 'Kultura', color: 'bg-vis-yellow text-foreground' },
  { id: 'hitno', label: 'Hitno', color: 'bg-vis-emergency text-primary-foreground' },
  { id: 'opcenito', label: 'Općenito', color: 'bg-vis-cyan text-foreground' },
];

const InboxV3 = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState({
    vis: true,
    komiza: true,
    kultura: true,
    hitno: true,
    opcenito: true,
  });

  const toggleSubscription = (key: keyof typeof subscriptions) => {
    setSubscriptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const subscriptionOptions = [
    { id: 'vis' as const, label: 'Vis', color: 'bg-vis-blue' },
    { id: 'komiza' as const, label: 'Komiža', color: 'bg-vis-green' },
    { id: 'kultura' as const, label: 'Kultura', color: 'bg-vis-yellow' },
    { id: 'hitno' as const, label: 'Hitno', color: 'bg-vis-emergency' },
    { id: 'opcenito' as const, label: 'Općenito', color: 'bg-vis-cyan' },
  ];

  const filteredNotifications = activeFilter === 'all' 
    ? mockNotifications 
    : mockNotifications.filter(n => n.category === activeFilter);

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'hitno': return { shadow: 'hsl(var(--vis-emergency))', bg: 'bg-vis-emergency/5' };
      case 'vis': return { shadow: 'hsl(var(--vis-blue))', bg: 'bg-vis-blue/5' };
      case 'komiza': return { shadow: 'hsl(var(--vis-green))', bg: 'bg-vis-green/5' };
      case 'kultura': return { shadow: 'hsl(var(--vis-yellow))', bg: 'bg-vis-yellow/5' };
      default: return { shadow: 'hsl(var(--vis-cyan))', bg: 'bg-vis-cyan/5' };
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'hitno': return 'Hitno';
      case 'vis': return 'Vis';
      case 'komiza': return 'Komiža';
      case 'kultura': return 'Kultura';
      case 'opcenito': return 'Općenito';
      default: return category;
    }
  };

  return (
    <div className="min-h-screen bg-vis-cyan">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center" style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}>
              <Bell className="w-6 h-6" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold uppercase">Obavijesti</h1>
              <p className="text-sm opacity-80">{mockNotifications.filter(n => n.unread).length} nepročitanih</p>
            </div>
          </div>
          <button
            onClick={() => setSettingsOpen(true)}
            className="w-10 h-10 bg-card border-[3px] border-foreground flex items-center justify-center hover:bg-muted transition-colors"
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
            aria-label="Postavke"
          >
            <Settings className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 border-[3px] border-foreground font-semibold text-sm whitespace-nowrap transition-all ${
                activeFilter === filter.id 
                  ? `${filter.color}` 
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
              style={{ boxShadow: activeFilter === filter.id ? '2px 2px 0 hsl(var(--foreground))' : 'none' }}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content card */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-280px)] px-4 pt-5 pb-8">
        <div className="space-y-3">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => {
              const styles = getCategoryStyles(notification.category);
              return (
                <button
                  key={notification.id}
                  onClick={() => navigate(`/notification/${notification.id}`)}
                  className={`w-full text-left p-4 border-[3px] border-foreground ${styles.bg} hover:translate-x-[2px] hover:translate-y-[2px] transition-all relative overflow-hidden`}
                  style={{ boxShadow: `4px 4px 0 ${styles.shadow}` }}
                >
                  {/* Unread indicator */}
                  {notification.unread && (
                    <div className="absolute top-3 right-3 w-3 h-3 bg-vis-emergency border-2 border-foreground" />
                  )}
                  
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{notification.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <VisBadge variant={notification.category}>
                          {getCategoryLabel(notification.category)}
                        </VisBadge>
                        <span className="text-xs text-muted-foreground font-mono">{notification.date}</span>
                      </div>
                      <h3 className="font-bold mb-1">{notification.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{notification.excerpt}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                  </div>
                </button>
              );
            })
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-muted border-[3px] border-foreground flex items-center justify-center">
                <Info className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">Nema obavijesti u ovoj kategoriji</p>
            </div>
          )}
        </div>
      </div>

      {/* Subscription Settings Dialog */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="border-[3px] border-foreground bg-card p-0 max-w-sm" style={{ boxShadow: '6px 6px 0 hsl(var(--foreground))' }}>
          <DialogHeader className="p-4 border-b-[3px] border-foreground bg-vis-cyan">
            <DialogTitle className="text-lg font-extrabold uppercase">Pretplati se na:</DialogTitle>
          </DialogHeader>
          <div className="p-4 space-y-3">
            {subscriptionOptions.map((option) => {
              const isHitno = option.id === 'hitno';
              return (
                <label
                  key={option.id}
                  className={`flex items-center gap-3 p-3 border-[3px] border-foreground bg-card transition-colors ${isHitno ? 'opacity-70' : 'hover:bg-muted cursor-pointer'}`}
                  style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
                >
                  <Checkbox
                    checked={subscriptions[option.id]}
                    onCheckedChange={() => !isHitno && toggleSubscription(option.id)}
                    disabled={isHitno}
                    className="w-6 h-6 border-[2px] border-foreground data-[state=checked]:bg-foreground"
                  />
                  <div className={`w-4 h-4 ${option.color} border-2 border-foreground`} />
                  <span className="font-bold">{option.label}</span>
                  {isHitno && <span className="text-xs text-muted-foreground ml-auto">(obavezno)</span>}
                </label>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InboxV3;