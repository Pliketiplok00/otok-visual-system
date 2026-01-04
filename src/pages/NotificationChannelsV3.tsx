import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

type Channel = 'vis' | 'komiza' | 'both';

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
  ];

  return (
    <div className="min-h-screen flex flex-col bg-vis-cyan">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 text-foreground">
        <h1 className="text-3xl font-extrabold mb-1 uppercase">
          Dobrodošli! <span className="text-vis-blue">👋</span>
        </h1>
        <p className="text-lg opacity-80">Odaberite koje obavijesti želite primati</p>
      </div>

      {/* Options card */}
      <div className="flex-1 bg-card border-t-[3px] border-x-[3px] border-foreground px-5 pt-6 pb-8">
        <div className="space-y-3 mb-6">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`w-full text-left p-4 border-[3px] border-foreground ${option.color} hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-4`}
              style={{ 
                boxShadow: selected === option.id ? `4px 4px 0 ${option.shadow}` : '4px 4px 0 transparent',
              }}
            >
              <div className="text-3xl">{option.emoji}</div>
              <div className="flex-1">
                <p className="font-bold text-lg uppercase">{option.label}</p>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
              <div className={`w-7 h-7 border-[3px] border-foreground flex items-center justify-center shrink-0 ${
                selected === option.id ? 'bg-vis-blue' : 'bg-card'
              }`}>
                {selected === option.id && <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />}
              </div>
            </button>
          ))}

          {/* Emergency option - always selected, disabled appearance */}
          <div
            className="w-full text-left p-4 border-[3px] border-foreground bg-vis-yellow/10 opacity-60 flex items-center gap-4"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-yellow))' }}
          >
            <div className="text-3xl">🚨</div>
            <div className="flex-1">
              <p className="font-bold text-lg uppercase">Hitne i servisne</p>
              <p className="text-sm text-muted-foreground">Uvijek uključeno</p>
            </div>
            <div className="w-7 h-7 border-[3px] border-foreground flex items-center justify-center shrink-0 bg-vis-blue">
              <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          disabled={!selected}
          className="w-full py-4 border-[3px] border-foreground bg-vis-cyan text-foreground font-bold text-lg hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:pointer-events-none uppercase"
          style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
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