/**
 * ============================================
 * TEMPLATE H: INBOX / NOTIFICATION LIST
 * ============================================
 * 
 * USE FOR:
 * - Notification centers
 * - Message lists
 * - Activity feeds
 * - News feeds with categories
 * 
 * STRUCTURE:
 * 1. Colored header with icon box + title + settings button
 * 2. Horizontal scrolling filter chips
 * 3. Notification cards with category colors
 * 4. Settings dialog for subscriptions
 * 
 * KEY PATTERNS:
 * - Unread indicator dot
 * - Category-based shadow and tint colors
 * - Emoji icons for visual scanning
 * - Filter chips with active state
 * - Modal dialog for settings
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { ChevronRight, Bell, Info, Settings, X } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// Filter type - customize categories as needed
type Filter = 'all' | 'urgent' | 'general' | 'events' | 'updates';

// Notification interface
interface Notification {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: Exclude<Filter, 'all'>;
  unread: boolean;
  emoji: string;
}

// Sample notifications - replace with your data
const mockNotifications: Notification[] = [
  {
    id: 1,
    title: 'Urgent System Alert',
    excerpt: 'There is an important system update that requires your attention...',
    date: 'Today',
    category: 'urgent',
    unread: true,
    emoji: '🚨',
  },
  {
    id: 2,
    title: 'New Feature Released',
    excerpt: 'We have just released a new feature that you might find useful...',
    date: 'Yesterday',
    category: 'updates',
    unread: true,
    emoji: '✨',
  },
  {
    id: 3,
    title: 'Weekly Newsletter',
    excerpt: 'Here is your weekly summary of activities and updates...',
    date: '2 days ago',
    category: 'general',
    unread: false,
    emoji: '📰',
  },
  {
    id: 4,
    title: 'Upcoming Event: Community Meetup',
    excerpt: 'Join us this Saturday for our monthly community meetup...',
    date: '3 days ago',
    category: 'events',
    unread: false,
    emoji: '🎉',
  },
  {
    id: 5,
    title: 'Maintenance Scheduled',
    excerpt: 'The system will be undergoing maintenance this weekend...',
    date: '4 days ago',
    category: 'general',
    unread: false,
    emoji: '🔧',
  },
];

// Filter configuration with colors
const filters: { id: Filter; label: string; color: string }[] = [
  { id: 'all', label: 'All', color: 'bg-foreground text-background' },
  { id: 'urgent', label: 'Urgent', color: 'bg-vis-emergency text-primary-foreground' },
  { id: 'events', label: 'Events', color: 'bg-vis-yellow text-foreground' },
  { id: 'updates', label: 'Updates', color: 'bg-vis-blue text-primary-foreground' },
  { id: 'general', label: 'General', color: 'bg-vis-purple text-foreground' },
];

// Get category-specific styles
const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'urgent': return { shadow: 'hsl(var(--vis-emergency))', bg: 'bg-vis-emergency/5' };
    case 'events': return { shadow: 'hsl(var(--vis-yellow))', bg: 'bg-vis-yellow/5' };
    case 'updates': return { shadow: 'hsl(var(--vis-blue))', bg: 'bg-vis-blue/5' };
    default: return { shadow: 'hsl(var(--vis-purple))', bg: 'bg-vis-purple/5' };
  }
};

const TemplateH_Inbox = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [subscriptions, setSubscriptions] = useState({
    urgent: true,
    events: true,
    updates: true,
    general: true,
  });

  const toggleSubscription = (key: keyof typeof subscriptions) => {
    if (key === 'urgent') return; // Can't unsubscribe from urgent
    setSubscriptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredNotifications = activeFilter === 'all' 
    ? mockNotifications 
    : mockNotifications.filter(n => n.category === activeFilter);

  const unreadCount = mockNotifications.filter(n => n.unread).length;

  return (
    <div className="min-h-screen bg-vis-cyan">
      <AppHeader />

      {/* Header with icon box and settings button */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Icon box */}
            <div 
              className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center" 
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
            >
              <Bell className="w-6 h-6" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold uppercase">Inbox</h1>
              <p className="text-sm opacity-80">{unreadCount} unread</p>
            </div>
          </div>
          
          {/* Settings button */}
          <button
            onClick={() => setSettingsOpen(true)}
            className="w-10 h-10 bg-card border-[3px] border-foreground flex items-center justify-center hover:bg-muted transition-colors"
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
            aria-label="Settings"
          >
            <Settings className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Filter Chips - Horizontal Scroll */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 border-[3px] border-foreground font-semibold text-sm whitespace-nowrap transition-all ${
                activeFilter === filter.id 
                  ? filter.color 
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
              style={{ 
                boxShadow: activeFilter === filter.id 
                  ? '2px 2px 0 hsl(var(--foreground))' 
                  : 'none' 
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Notification List */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-280px)] px-4 pt-5 pb-8">
        <div className="space-y-3">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => {
              const styles = getCategoryStyles(notification.category);
              return (
                <button
                  key={notification.id}
                  onClick={() => navigate('/templates/detail')}
                  className={`w-full text-left p-4 border-[3px] border-foreground ${styles.bg} hover:translate-x-[2px] hover:translate-y-[2px] transition-all relative overflow-hidden`}
                  style={{ boxShadow: `4px 4px 0 ${styles.shadow}` }}
                >
                  {/* Unread indicator */}
                  {notification.unread && (
                    <div className="absolute top-3 right-3 w-3 h-3 bg-vis-emergency border-2 border-foreground" />
                  )}
                  
                  <div className="flex items-start gap-3">
                    {/* Emoji */}
                    <div className="text-2xl">{notification.emoji}</div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase px-2 py-0.5 border border-foreground">
                          {notification.category}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {notification.date}
                        </span>
                      </div>
                      <h3 className="font-bold mb-1">{notification.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {notification.excerpt}
                      </p>
                    </div>
                    
                    {/* Chevron */}
                    <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                  </div>
                </button>
              );
            })
          ) : (
            /* Empty state */
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-muted border-[3px] border-foreground flex items-center justify-center">
                <Info className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">No notifications in this category</p>
            </div>
          )}
        </div>

        {/* Back to Templates */}
        <button
          onClick={() => navigate('/templates')}
          className="w-full mt-6 p-3 border-[3px] border-foreground bg-muted text-center font-bold hover:bg-foreground hover:text-background transition-colors"
        >
          ← BACK TO TEMPLATES
        </button>
      </div>

      {/* Subscription Settings Dialog */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent 
          className="border-[3px] border-foreground bg-card p-0 max-w-sm" 
          style={{ boxShadow: '6px 6px 0 hsl(var(--foreground))' }}
        >
          <DialogHeader className="p-4 border-b-[3px] border-foreground bg-vis-cyan">
            <DialogTitle className="text-lg font-extrabold uppercase">
              Subscribe to:
            </DialogTitle>
          </DialogHeader>
          <div className="p-4 space-y-3">
            {[
              { id: 'urgent' as const, label: 'Urgent', color: 'bg-vis-emergency' },
              { id: 'events' as const, label: 'Events', color: 'bg-vis-yellow' },
              { id: 'updates' as const, label: 'Updates', color: 'bg-vis-blue' },
              { id: 'general' as const, label: 'General', color: 'bg-vis-purple' },
            ].map((option) => {
              const isRequired = option.id === 'urgent';
              return (
                <label
                  key={option.id}
                  className={`flex items-center gap-3 p-3 border-[3px] border-foreground bg-card transition-colors ${
                    isRequired ? 'opacity-70' : 'hover:bg-muted cursor-pointer'
                  }`}
                  style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
                >
                  <Checkbox
                    checked={subscriptions[option.id]}
                    onCheckedChange={() => toggleSubscription(option.id)}
                    disabled={isRequired}
                    className="w-6 h-6 border-[2px] border-foreground data-[state=checked]:bg-foreground"
                  />
                  <div className={`w-4 h-4 ${option.color} border-2 border-foreground`} />
                  <span className="font-bold">{option.label}</span>
                  {isRequired && (
                    <span className="text-xs text-muted-foreground ml-auto">(required)</span>
                  )}
                </label>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TemplateH_Inbox;
