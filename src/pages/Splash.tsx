import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorBlock from '@/components/layout/ColorBlock';
import VisButton from '@/components/ui/VisButton';
import { Waves } from 'lucide-react';

const Splash = () => {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState<'hr' | 'en' | null>(null);

  const handleContinue = (lang: 'hr' | 'en') => {
    setSelectedLang(lang);
    // In a real app, we'd store this preference
    setTimeout(() => navigate('/login'), 150);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo Section */}
      <ColorBlock color="blue" className="flex-1 flex items-center justify-center py-20">
        <div className="text-center animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-card border-2 border-foreground flex items-center justify-center">
            <Waves className="w-12 h-12 text-vis-blue" strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">OTOK VIS</h1>
          <p className="text-lg opacity-90 font-medium">Službena aplikacija</p>
        </div>
      </ColorBlock>

      {/* Language Selection */}
      <ColorBlock color="yellow" className="py-8">
        <div className="space-y-4 animate-slide-up">
          <p className="text-center font-semibold text-lg mb-6">Odaberite jezik / Choose language</p>
          <div className="flex gap-4">
            <VisButton
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={() => handleContinue('hr')}
            >
              🇭🇷 Hrvatski
            </VisButton>
            <VisButton
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={() => handleContinue('en')}
            >
              🇬🇧 English
            </VisButton>
          </div>
        </div>
      </ColorBlock>

      {/* Footer accent */}
      <ColorBlock color="cyan" noPadding className="h-3" />
    </div>
  );
};

export default Splash;
