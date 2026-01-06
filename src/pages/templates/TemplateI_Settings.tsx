/**
 * ============================================
 * TEMPLATE I: SETTINGS / CONFIGURATION PAGE
 * ============================================
 * 
 * USE FOR:
 * - App settings
 * - User preferences
 * - Configuration screens
 * - Profile settings
 * 
 * STRUCTURE:
 * 1. Colored header with icon and title
 * 2. Settings sections with distinct backgrounds
 * 3. Various input types (toggle, buttons, grid selection)
 * 4. Danger action at bottom (logout, delete, etc.)
 * 
 * KEY PATTERNS:
 * - Each section has unique background tint and shadow color
 * - Icon boxes with section-specific colors
 * - Custom toggle switch styling
 * - Grid selection for multiple choices
 * - Danger button at bottom
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Globe, Bell, MapPin, LogOut, Check, Settings, Moon, Volume2 } from 'lucide-react';

// Selection type for multi-choice options
type NotificationLevel = 'all' | 'important' | 'urgent' | 'none';

const TemplateI_Settings = () => {
  const navigate = useNavigate();
  
  // State for various settings
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [pushEnabled, setPushEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationLevel, setNotificationLevel] = useState<NotificationLevel>('all');

  const handleLogout = () => {
    navigate('/templates');
  };

  // Notification level options
  const notificationOptions = [
    { id: 'all' as NotificationLevel, label: 'All', emoji: '📬' },
    { id: 'important' as NotificationLevel, label: 'Important', emoji: '⭐' },
    { id: 'urgent' as NotificationLevel, label: 'Urgent Only', emoji: '🚨' },
    { id: 'none' as NotificationLevel, label: 'None', emoji: '🔕' },
  ];

  return (
    <div className="min-h-screen bg-vis-yellow">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div 
            className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center" 
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
          >
            <Settings className="w-6 h-6" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold uppercase">Settings</h1>
            <p className="text-sm opacity-80">Customize your experience</p>
          </div>
        </div>
      </div>

      {/* Content card */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-200px)] px-5 pt-6 pb-8">
        <div className="space-y-6">
          
          {/* Section 1: Language Selection (Button Group) */}
          <div 
            className="p-4 border-[3px] border-foreground" 
            style={{ 
              backgroundColor: 'hsl(var(--vis-blue) / 0.05)', 
              boxShadow: '4px 4px 0 hsl(var(--vis-blue))' 
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-vis-blue border-[3px] border-foreground flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
              </div>
              <h2 className="font-bold text-lg uppercase">Language</h2>
            </div>
            <div className="flex gap-3">
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
              <button
                onClick={() => setLanguage('es')}
                className={`flex-1 py-3 px-4 border-[3px] border-foreground font-semibold transition-all flex items-center justify-center gap-2 ${
                  language === 'es' 
                    ? 'bg-vis-blue text-primary-foreground' 
                    : 'bg-card hover:bg-muted'
                }`}
                style={{ boxShadow: language === 'es' ? '2px 2px 0 hsl(var(--foreground))' : 'none' }}
              >
                <span className="text-lg">🇪🇸</span> Español
              </button>
            </div>
          </div>

          {/* Section 2: Toggle - Push Notifications */}
          <div 
            className="p-4 border-[3px] border-foreground" 
            style={{ 
              backgroundColor: 'hsl(var(--vis-green) / 0.05)', 
              boxShadow: '4px 4px 0 hsl(var(--vis-green))' 
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-vis-green border-[3px] border-foreground flex items-center justify-center">
                  <Bell className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="font-bold uppercase">Push Notifications</h2>
                  <p className="text-sm text-muted-foreground">Receive alerts on your device</p>
                </div>
              </div>
              {/* Custom Toggle Switch */}
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

          {/* Section 3: Toggle - Dark Mode */}
          <div 
            className="p-4 border-[3px] border-foreground" 
            style={{ 
              backgroundColor: 'hsl(var(--vis-purple) / 0.05)', 
              boxShadow: '4px 4px 0 hsl(var(--vis-purple))' 
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-vis-purple border-[3px] border-foreground flex items-center justify-center">
                  <Moon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="font-bold uppercase">Dark Mode</h2>
                  <p className="text-sm text-muted-foreground">Use dark theme</p>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-14 h-8 border-[3px] border-foreground transition-colors relative ${
                  darkMode ? 'bg-vis-purple' : 'bg-muted'
                }`}
              >
                <div className={`absolute top-0.5 w-5 h-5 bg-card border-2 border-foreground transition-all ${
                  darkMode ? 'left-6' : 'left-0.5'
                }`} />
              </button>
            </div>
          </div>

          {/* Section 4: Toggle - Sound */}
          <div 
            className="p-4 border-[3px] border-foreground" 
            style={{ 
              backgroundColor: 'hsl(var(--vis-orange) / 0.05)', 
              boxShadow: '4px 4px 0 hsl(var(--vis-orange))' 
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-vis-orange border-[3px] border-foreground flex items-center justify-center">
                  <Volume2 className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="font-bold uppercase">Sound Effects</h2>
                  <p className="text-sm text-muted-foreground">Play sounds for actions</p>
                </div>
              </div>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`w-14 h-8 border-[3px] border-foreground transition-colors relative ${
                  soundEnabled ? 'bg-vis-orange' : 'bg-muted'
                }`}
              >
                <div className={`absolute top-0.5 w-5 h-5 bg-card border-2 border-foreground transition-all ${
                  soundEnabled ? 'left-6' : 'left-0.5'
                }`} />
              </button>
            </div>
          </div>

          {/* Section 5: Grid Selection - Notification Level */}
          <div 
            className="p-4 border-[3px] border-foreground" 
            style={{ 
              backgroundColor: 'hsl(var(--vis-cyan) / 0.05)', 
              boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' 
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-vis-cyan border-[3px] border-foreground flex items-center justify-center">
                <MapPin className="w-5 h-5" strokeWidth={2} />
              </div>
              <h2 className="font-bold text-lg uppercase">Notification Level</h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {notificationOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setNotificationLevel(option.id)}
                  className={`p-3 border-[3px] border-foreground flex items-center gap-2 transition-all ${
                    notificationLevel === option.id
                      ? 'bg-vis-cyan'
                      : 'bg-card hover:bg-muted'
                  }`}
                  style={{ 
                    boxShadow: notificationLevel === option.id 
                      ? '2px 2px 0 hsl(var(--foreground))' 
                      : 'none' 
                  }}
                >
                  <span className="text-lg">{option.emoji}</span>
                  <span className="text-sm font-semibold">{option.label}</span>
                  {notificationLevel === option.id && (
                    <Check className="w-4 h-4 ml-auto" strokeWidth={3} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Danger Action - Logout */}
          <button
            onClick={handleLogout}
            className="w-full p-4 border-[3px] border-foreground bg-card flex items-center justify-center gap-3 hover:bg-vis-emergency/10 hover:border-vis-emergency transition-colors"
          >
            <LogOut className="w-5 h-5" strokeWidth={2} />
            <span className="font-semibold uppercase">Log Out</span>
          </button>

          {/* Back to Templates */}
          <button
            onClick={() => navigate('/templates')}
            className="w-full p-3 border-[3px] border-foreground bg-muted text-center font-bold hover:bg-foreground hover:text-background transition-colors"
          >
            ← BACK TO TEMPLATES
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateI_Settings;
