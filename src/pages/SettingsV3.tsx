import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Globe, Bell, MapPin, LogOut, Check, Settings, Moon, Sun } from 'lucide-react';

type Channel = 'vis' | 'komiza' | 'both' | 'emergency';

const SettingsV3 = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'hr' | 'en'>('hr');
  const [pushEnabled, setPushEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
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
    <div className="min-h-screen bg-vis-yellow relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-24 right-0 w-32 h-32 bg-vis-green/20 rounded-full blur-2xl" />
      <div className="absolute bottom-60 left-0 w-24 h-24 bg-vis-blue/20 rounded-full blur-xl -translate-x-1/2" />

      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-card border-2 border-foreground flex items-center justify-center shadow-[3px_3px_0_hsl(var(--vis-green))]">
            <Settings className="w-6 h-6" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Postavke</h1>
            <p className="text-sm opacity-80">Prilagodite aplikaciju</p>
          </div>
        </div>
      </div>

      {/* Content card */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-200px)] px-5 pt-6 pb-8">
        <div className="space-y-6">
          {/* Language */}
          <div className="p-4 rounded-2xl border-2 border-foreground bg-vis-blue/5" style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-vis-blue border-2 border-foreground flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
              </div>
              <h2 className="font-bold text-lg">Jezik / Language</h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setLanguage('hr')}
                className={`flex-1 py-3 px-4 rounded-xl border-2 border-foreground font-semibold transition-all flex items-center justify-center gap-2 ${
                  language === 'hr' 
                    ? 'bg-vis-blue text-primary-foreground shadow-[2px_2px_0_hsl(var(--foreground))]' 
                    : 'bg-card hover:bg-muted'
                }`}
              >
                <span className="text-lg">🇭🇷</span> Hrvatski
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 py-3 px-4 rounded-xl border-2 border-foreground font-semibold transition-all flex items-center justify-center gap-2 ${
                  language === 'en' 
                    ? 'bg-vis-blue text-primary-foreground shadow-[2px_2px_0_hsl(var(--foreground))]' 
                    : 'bg-card hover:bg-muted'
                }`}
              >
                <span className="text-lg">🇬🇧</span> English
              </button>
            </div>
          </div>

          {/* Notifications toggle */}
          <div className="p-4 rounded-2xl border-2 border-foreground bg-vis-green/5" style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-vis-green border-2 border-foreground flex items-center justify-center">
                  <Bell className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="font-bold">Push obavijesti</h2>
                  <p className="text-sm text-muted-foreground">Primaj obavijesti na mobitel</p>
                </div>
              </div>
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
            </div>
          </div>

          {/* Channel selection */}
          <div className="p-4 rounded-2xl border-2 border-foreground bg-vis-cyan/5" style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-vis-cyan border-2 border-foreground flex items-center justify-center">
                <MapPin className="w-5 h-5" strokeWidth={2} />
              </div>
              <h2 className="font-bold text-lg">Područje obavijesti</h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {channelOptions.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannel(channel.id)}
                  className={`p-3 rounded-xl border-2 border-foreground flex items-center gap-2 transition-all ${
                    selectedChannel === channel.id
                      ? 'bg-vis-cyan shadow-[2px_2px_0_hsl(var(--foreground))]'
                      : 'bg-card hover:bg-muted'
                  }`}
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
            className="w-full p-4 rounded-2xl border-2 border-foreground bg-card flex items-center justify-center gap-3 hover:bg-vis-emergency/10 hover:border-vis-emergency transition-colors"
          >
            <LogOut className="w-5 h-5" strokeWidth={2} />
            <span className="font-semibold">Odjavi se</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsV3;
