import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import ColorBlock from '@/components/layout/ColorBlock';
import VisCard from '@/components/ui/VisCard';
import VisButton from '@/components/ui/VisButton';
import { Globe, Bell, MapPin, LogOut, Check } from 'lucide-react';

type Channel = 'vis' | 'komiza' | 'both' | 'emergency';

const Settings = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'hr' | 'en'>('hr');
  const [pushEnabled, setPushEnabled] = useState(true);
  const [selectedChannel, setSelectedChannel] = useState<Channel>('both');

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <AppHeader />

      <ColorBlock color="blue" className="py-5">
        <h1 className="text-2xl font-bold">Postavke</h1>
      </ColorBlock>

      <ColorBlock color="white" className="flex-1 py-5">
        <div className="space-y-6">
          {/* Language */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-5 h-5" strokeWidth={2.5} />
              <h2 className="font-bold">Jezik / Language</h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setLanguage('hr')}
                className={`flex-1 py-3 px-4 rounded-lg border-2 border-foreground font-semibold transition-all ${
                  language === 'hr' ? 'bg-vis-blue text-primary-foreground' : 'bg-card hover:bg-muted'
                }`}
              >
                🇭🇷 Hrvatski
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 py-3 px-4 rounded-lg border-2 border-foreground font-semibold transition-all ${
                  language === 'en' ? 'bg-vis-blue text-primary-foreground' : 'bg-card hover:bg-muted'
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          {/* Push Notifications */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Bell className="w-5 h-5" strokeWidth={2.5} />
              <h2 className="font-bold">Push obavijesti</h2>
            </div>
            <VisCard className="flex items-center justify-between">
              <span className="font-medium">Primaj push obavijesti</span>
              <button
                onClick={() => setPushEnabled(!pushEnabled)}
                className={`w-14 h-8 rounded-full border-2 border-foreground transition-colors relative ${
                  pushEnabled ? 'bg-vis-green' : 'bg-muted'
                }`}
              >
                <div className={`absolute top-1 w-5 h-5 rounded-full bg-card border-2 border-foreground transition-all ${
                  pushEnabled ? 'left-7' : 'left-1'
                }`} />
              </button>
            </VisCard>
          </div>

          {/* Notification Channels */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5" strokeWidth={2.5} />
              <h2 className="font-bold">Područje obavijesti</h2>
            </div>
            <div className="space-y-2">
              {(['vis', 'komiza', 'both', 'emergency'] as Channel[]).map((channel) => (
                <VisCard
                  key={channel}
                  onClick={() => setSelectedChannel(channel)}
                  className="flex items-center gap-3"
                >
                  <div className={`w-6 h-6 rounded-md border-2 border-foreground flex items-center justify-center ${
                    selectedChannel === channel ? 'bg-vis-blue' : 'bg-card'
                  }`}>
                    {selectedChannel === channel && <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />}
                  </div>
                  <span className="font-medium">
                    {channel === 'vis' && 'Samo Vis'}
                    {channel === 'komiza' && 'Samo Komiža'}
                    {channel === 'both' && 'Vis i Komiža'}
                    {channel === 'emergency' && 'Samo hitne obavijesti'}
                  </span>
                </VisCard>
              ))}
            </div>
          </div>

          {/* Logout */}
          <div className="pt-4 border-t-2 border-muted">
            <VisButton
              variant="outline"
              className="w-full"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5" />
              Odjavi se
            </VisButton>
          </div>
        </div>
      </ColorBlock>

      <ColorBlock color="yellow" noPadding className="h-2" />
    </div>
  );
};

export default Settings;
