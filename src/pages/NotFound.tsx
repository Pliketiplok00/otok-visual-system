import { useNavigate } from 'react-router-dom';
import ColorBlock from '@/components/layout/ColorBlock';
import VisButton from '@/components/ui/VisButton';
import { MapPin, Home } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <ColorBlock color="blue" className="flex-1 flex items-center justify-center py-12">
        <div className="text-center animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-card border-2 border-foreground flex items-center justify-center">
            <MapPin className="w-10 h-10 text-vis-blue" strokeWidth={2.5} />
          </div>
          <h1 className="text-6xl font-extrabold mb-2">404</h1>
          <p className="text-xl opacity-90 mb-8">Stranica nije pronađena</p>
          <VisButton variant="outline" onClick={() => navigate('/home')}>
            <Home className="w-5 h-5" />
            Povratak na početnu
          </VisButton>
        </div>
      </ColorBlock>
      <ColorBlock color="yellow" noPadding className="h-3" />
    </div>
  );
};

export default NotFound;
