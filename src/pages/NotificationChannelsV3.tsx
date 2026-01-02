import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, MapPin, Bell, PartyPopper } from 'lucide-react';

type Channel = 'vis' | 'komiza' | 'both' | 'emergency';

const NotificationChannelsV3 = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Channel | null>(null);

  const handleContinue = () => {
    if (selected) {
      navigate('/home-v3');
    }
  };

  const options: { id: Channel; label: string; description: string; emoji: string; color: string; shadow: string }[] = [
    { id: 'vis', label: 'Vis', description: 'Obavijesti za grad Vis', emoji: '🏝️', color: 'bg-vis-blue/10', shadow: 'hsl(var(--vis-blue))' },
    { id: 'komiza', label: 'Komiža', description: 'Obavijesti za Komižu', emoji: '⛵', color: 'bg-vis-green/10', shadow: 'hsl(var(--vis-green))' },
    { id: 'both', label: 'Oboje', description: 'Sve obavijesti za cijeli otok', emoji: '🌊', color: 'bg-vis-cyan/10', shadow: 'hsl(var(--vis-cyan))' },
    { id: 'emergency', label: 'Samo hitne', description: 'Samo hitne i opće obavijesti', emoji: '🚨', color: 'bg-vis-yellow/10', shadow: 'hsl(var(--vis-yellow))' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-vis-cyan relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-0 w-40 h-40 bg-vis-yellow/20 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-40 left-0 w-32 h-32 bg-vis-blue/20 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Floating icon */}
      <div className="absolute top-20 right-8 w-12 h-12 rounded-full bg-vis-yellow/60 flex items-center justify-center">
        <PartyPopper className="w-6 h-6 text-foreground" strokeWidth={2} />
      </div>

      {/* Header */}
      <div className="px-6 pt-12 pb-6 text-foreground">
        <h1 className="text-3xl font-extrabold mb-1">
          Dobrodošli! <span className="text-vis-blue">👋</span>
        </h1>
        <p className="text-lg opacity-80">Odaberite koje obavijesti želite primati</p>
      </div>

      {/* Options card */}
      <div className="flex-1 bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground px-5 pt-6 pb-8">
        <div className="space-y-3 mb-6">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`w-full text-left p-4 rounded-2xl border-2 border-foreground ${option.color} hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-4`}
              style={{ 
                boxShadow: selected === option.id ? `4px 4px 0 ${option.shadow}` : '4px 4px 0 transparent',
              }}
            >
              <div className="text-3xl">{option.emoji}</div>
              <div className="flex-1">
                <p className="font-bold text-lg">{option.label}</p>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
              <div className={`w-7 h-7 rounded-lg border-2 border-foreground flex items-center justify-center shrink-0 ${
                selected === option.id ? 'bg-vis-blue' : 'bg-card'
              }`}>
                {selected === option.id && <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />}
              </div>
            </button>
          ))}
        </div>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          disabled={!selected}
          className="w-full py-4 rounded-2xl border-2 border-foreground bg-vis-cyan text-foreground font-bold text-lg shadow-[4px_4px_0_hsl(var(--vis-blue))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_hsl(var(--vis-blue))] transition-all disabled:opacity-50 disabled:pointer-events-none"
        >
          Nastavi
        </button>
        
        <p className="text-center text-sm text-muted-foreground mt-4">
          Ovu postavku možete promijeniti u bilo kojem trenutku
        </p>
      </div>
    </div>
  );
};

export default NotificationChannelsV3;
