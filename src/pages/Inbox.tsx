import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import ColorBlock from '@/components/layout/ColorBlock';
import VisCard from '@/components/ui/VisCard';
import VisBadge from '@/components/ui/VisBadge';
import { ChevronRight } from 'lucide-react';

type Filter = 'all' | 'vis' | 'komiza' | 'general' | 'emergency';

interface Notification {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: 'vis' | 'komiza' | 'general' | 'emergency';
  unread: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    title: 'Prekid vodoopskrbe u Visu',
    excerpt: 'Zbog planiranih radova na vodovodnoj mreži, doći će do prekida vodoopskrbe...',
    date: 'Danas',
    category: 'emergency',
    unread: true,
  },
  {
    id: 2,
    title: 'Nova trajektna linija Split-Vis',
    excerpt: 'Od 15. lipnja uvodi se dodatna trajektna linija na relaciji Split-Vis...',
    date: 'Jučer',
    category: 'vis',
    unread: true,
  },
  {
    id: 3,
    title: 'Ljetni raspored odvoza otpada',
    excerpt: 'Obavještavamo građane da od 1. lipnja vrijedi ljetni raspored odvoza...',
    date: '2 dana',
    category: 'general',
    unread: false,
  },
  {
    id: 4,
    title: 'Koncert na Trgu Komiže',
    excerpt: 'U subotu 20. lipnja održat će se tradicionalni ljetni koncert...',
    date: '3 dana',
    category: 'komiza',
    unread: false,
  },
];

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Sve' },
  { id: 'vis', label: 'Vis' },
  { id: 'komiza', label: 'Komiža' },
  { id: 'general', label: 'Općenito' },
  { id: 'emergency', label: 'Hitno' },
];

const Inbox = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filteredNotifications = activeFilter === 'all' 
    ? mockNotifications 
    : mockNotifications.filter(n => n.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <AppHeader />

      <ColorBlock color="cyan" className="py-4">
        <h1 className="text-2xl font-bold mb-4">Obavijesti</h1>
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full border-2 border-foreground font-semibold text-sm whitespace-nowrap transition-all ${
                activeFilter === filter.id 
                  ? 'bg-foreground text-background' 
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </ColorBlock>

      <ColorBlock color="white" className="flex-1 py-4">
        <div className="space-y-3">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <VisCard
                key={notification.id}
                onClick={() => navigate(`/notification/${notification.id}`)}
                className={notification.unread ? 'border-l-4 border-l-vis-blue' : ''}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <VisBadge variant={notification.category}>
                        {notification.category === 'emergency' ? 'Hitno' : notification.category}
                      </VisBadge>
                      <span className="text-xs text-muted-foreground">{notification.date}</span>
                    </div>
                    <h3 className={`font-semibold mb-1 ${notification.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {notification.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {notification.excerpt}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                </div>
              </VisCard>
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p>Nema obavijesti u ovoj kategoriji</p>
            </div>
          )}
        </div>
      </ColorBlock>

      <ColorBlock color="green" noPadding className="h-2" />
    </div>
  );
};

export default Inbox;
