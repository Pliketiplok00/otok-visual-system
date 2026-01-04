import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import ColorBlock from '@/components/layout/ColorBlock';
import VisCard from '@/components/ui/VisCard';
import VisBadge from '@/components/ui/VisBadge';
import EmergencyBanner from '@/components/EmergencyBanner';
import { Calendar, Ship, Camera, MessageSquare, Droplets, ChevronRight, Droplet, Users } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  // Mock data - in a real app this would come from an API
  const hasEmergency = true;
  const todayEvent = {
    id: 1,
    title: 'Ljetna fešta u Visu',
    time: '20:00',
    location: 'Trg sv. Jurja',
    category: 'vis' as const,
  };

  const quickActions = [
    { icon: Ship, label: 'Vozni redovi', path: '/schedules', color: 'blue' as const },
    { icon: Camera, label: 'Slikaj & popravi', path: '/report', color: 'green' as const },
    { icon: MessageSquare, label: 'Uključi se', path: '/feedback', color: 'cyan' as const },
    { icon: Droplets, label: 'Sve o vodi', path: '/water', color: 'yellow' as const },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <AppHeader unreadCount={3} />

      {hasEmergency && (
        <>
          <EmergencyBanner 
            message="Prekid vodoopskrbe u Visu danas 10-14h"
            onClick={() => navigate('/inbox')}
            icon={Droplet}
          />
          <EmergencyBanner 
            message="KOMIŽA: poziv na sudjelovanje u raspravi"
            onClick={() => navigate('/inbox')}
            icon={Users}
          />
        </>
      )}

      {/* Today's Event */}
      <ColorBlock color="blue" className="py-5">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5" strokeWidth={2.5} />
          <h2 className="font-bold text-lg">Danas na Visu</h2>
        </div>
        {todayEvent ? (
          <VisCard onClick={() => navigate(`/events/${todayEvent.id}`)}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <VisBadge variant={todayEvent.category} className="mb-2">
                  {todayEvent.category}
                </VisBadge>
                <h3 className="font-bold text-lg mb-1">{todayEvent.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {todayEvent.time} · {todayEvent.location}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
            </div>
          </VisCard>
        ) : (
          <VisCard>
            <p className="text-muted-foreground text-center py-4">Nema događanja danas</p>
          </VisCard>
        )}
      </ColorBlock>

      {/* Quick Actions */}
      <ColorBlock color="white" className="py-5 flex-1">
        <h2 className="font-bold text-lg mb-4">Brze akcije</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <VisCard
              key={action.path}
              onClick={() => navigate(action.path)}
              className="flex flex-col items-center justify-center py-6 text-center"
            >
              <div className={`w-14 h-14 rounded-xl border-2 border-foreground flex items-center justify-center mb-3 ${
                action.color === 'blue' ? 'bg-vis-blue text-primary-foreground' :
                action.color === 'green' ? 'bg-vis-green' :
                action.color === 'cyan' ? 'bg-vis-cyan' :
                'bg-vis-yellow'
              }`}>
                <action.icon className="w-7 h-7" strokeWidth={2} />
              </div>
              <span className="font-semibold text-sm">{action.label}</span>
            </VisCard>
          ))}
        </div>
      </ColorBlock>

      {/* Accent footer */}
      <ColorBlock color="green" noPadding className="h-2" />
    </div>
  );
};

export default Home;
