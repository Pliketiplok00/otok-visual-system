import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorBlock from '@/components/layout/ColorBlock';
import VisButton from '@/components/ui/VisButton';
import VisCard from '@/components/ui/VisCard';
import { Check } from 'lucide-react';

type Channel = 'vis' | 'komiza' | 'both' | 'emergency';

const NotificationChannels = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Channel | null>(null);

  const handleContinue = () => {
    if (selected) {
      navigate('/home');
    }
  };

  const options: { id: Channel; label: string; description: string }[] = [
    { id: 'vis', label: 'Vis', description: 'Obavijesti za grad Vis' },
    { id: 'komiza', label: 'Komiža', description: 'Obavijesti za Komižu' },
    { id: 'both', label: 'Oboje', description: 'Sve obavijesti za cijeli otok' },
    { id: 'emergency', label: 'Samo hitne', description: 'Samo hitne i opće obavijesti' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ColorBlock color="cyan" className="py-8">
        <h1 className="text-2xl font-bold mb-1">Dobrodošli!</h1>
        <p className="text-lg opacity-90">Odaberite koje obavijesti želite primati</p>
      </ColorBlock>

      <ColorBlock color="white" className="flex-1 py-6">
        <div className="space-y-3 animate-slide-up">
          {options.map((option) => (
            <VisCard
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`flex items-center gap-4 ${selected === option.id ? 'ring-2 ring-primary ring-offset-2' : ''}`}
            >
              <div className={`w-6 h-6 rounded-md border-2 border-foreground flex items-center justify-center shrink-0 ${selected === option.id ? 'bg-vis-blue' : 'bg-card'}`}>
                {selected === option.id && <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{option.label}</p>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
            </VisCard>
          ))}
        </div>
      </ColorBlock>

      <ColorBlock color="yellow" className="py-5">
        <VisButton
          variant="primary"
          size="lg"
          className="w-full"
          onClick={handleContinue}
          disabled={!selected}
        >
          Nastavi
        </VisButton>
        <p className="text-center text-sm mt-3 opacity-80">
          Ovu postavku možete promijeniti u bilo kojem trenutku
        </p>
      </ColorBlock>
    </div>
  );
};

export default NotificationChannels;
