import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Globe, Bell, MapPin, LogOut, Check, Settings } from 'lucide-react';

type Channel = 'vis' | 'komiza' | 'both' | 'emergency';

const SettingsV3 = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'hr' | 'en'>('hr');
  const [pushEnabled, setPushEnabled] = useState(true);
  const [selectedChannel, setSelectedChannel] = useState<Channel>('both');

  const handleLogout = () => {
    navigate('/v3');
  };

  const channelOptions = [
    { id: 'vis' as Channel, label: 'Samo Vis', emoji: '🏝️' },
    { id: 'komiza' as Channel, label: 'Samo Komiža', emoji: '⛵' },
    { id: 'both' as Channel, label: 'Vis i Komiža', emoji: '🌊' },
    { id: 'emergency' as Channel, label: 'Samo hitne', emoji: '🚨' },
  ];

  return (
    <div className="min-h-screen bg-vis-yellow">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center" style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}>
            <Settings className="w-6 h-6" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold uppercase">Postavke</h1>
            <p className="text-sm opacity-80">Prilagodite aplikaciju</p>
          </div>
        </div>
      </div>

      {/* Content card */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-200px)] px-5 pt-6 pb-8">
        <div className="space-y-6">
          {/* Language */}
          <div className="p-4 border-[3px] border-foreground bg-vis-blue/5" style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-vis-blue border-[3px] border-foreground flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
              </div>
              <h2 className="font-bold text-lg uppercase">Jezik / Language</h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setLanguage('hr')}
                className={`flex-1 py-3 px-4 border-[3px] border-foreground font-semibold transition-all flex items-center justify-center gap-2 ${
                  language === 'hr' 
                    ? 'bg-vis-blue text-primary-foreground' 
                    : 'bg-card hover:bg-muted'
                }`}
                style={{ boxShadow: language === 'hr' ? '2px 2px 0 hsl(var(--foreground))' : 'none' }}
              >
                <span className="text-lg">🇭🇷</span> Hrvatski
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 py-3 px-4 border-[3px] border-foreground font-semibold transition-all flex items-center justify-center gap-2 ${
                  language === 'en' 
                    ? 'bg-vis-blue text-primary-foreground' 
                    : 'bg-card hover:bg-muted'
                }`}
                style={{ boxShadow: language === 'en' ? '2px 2px 0 hsl(var(--foreground))' : 'none' }}
              >
                <span className="text-lg">🇬🇧</span> English
              </button>
            </div>
          </div>

          {/* Notifications toggle */}
          <div className="p-4 border-[3px] border-foreground bg-vis-green/5" style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-vis-green border-[3px] border-foreground flex items-center justify-center">
                  <Bell className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="font-bold uppercase">Push obavijesti</h2>
                  <p className="text-sm text-muted-foreground">Primaj obavijesti na mobitel</p>
                </div>
              </div>
              <button
                onClick={() => setPushEnabled(!pushEnabled)}
                className={`w-14 h-8 border-[3px] border-foreground transition-colors relative ${
                  pushEnabled ? 'bg-vis-green' : 'bg-muted'
                }`}
              >
                <div className={`absolute top-0.5 w-5 h-5 bg-card border-2 border-foreground transition-all ${
                  pushEnabled ? 'left-6' : 'left-0.5'
                }`} />
              </button>
            </div>
          </div>

          {/* Channel selection */}
          <div className="p-4 border-[3px] border-foreground bg-vis-cyan/5" style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-vis-cyan border-[3px] border-foreground flex items-center justify-center">
                <MapPin className="w-5 h-5" strokeWidth={2} />
              </div>
              <h2 className="font-bold text-lg uppercase">Područje obavijesti</h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {channelOptions.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannel(channel.id)}
                  className={`p-3 border-[3px] border-foreground flex items-center gap-2 transition-all ${
                    selectedChannel === channel.id
                      ? 'bg-vis-cyan'
                      : 'bg-card hover:bg-muted'
                  }`}
                  style={{ boxShadow: selectedChannel === channel.id ? '2px 2px 0 hsl(var(--foreground))' : 'none' }}
                >
                  <span className="text-lg">{channel.emoji}</span>
                  <span className="text-sm font-semibold">{channel.label}</span>
                  {selectedChannel === channel.id && (
                    <Check className="w-4 h-4 ml-auto" strokeWidth={3} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full p-4 border-[3px] border-foreground bg-card flex items-center justify-center gap-3 hover:bg-vis-emergency/10 hover:border-vis-emergency transition-colors"
          >
            <LogOut className="w-5 h-5" strokeWidth={2} />
            <span className="font-semibold uppercase">Odjavi se</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsV3;