import { useNavigate } from 'react-router-dom';
import { MapPin, Home } from 'lucide-react';

const NotFoundV3 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-vis-blue">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-primary-foreground">
        {/* Illustrated 404 */}
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-card border-[3px] border-foreground flex items-center justify-center rotate-3" style={{ boxShadow: '8px 8px 0 hsl(var(--vis-yellow))' }}>
            <MapPin className="w-16 h-16 text-vis-blue" strokeWidth={2} />
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-vis-cyan border-[3px] border-foreground flex items-center justify-center text-sm font-bold text-foreground">
            ?
          </div>
        </div>

        <h1 className="text-7xl font-extrabold mb-2">
          <span className="text-vis-yellow">4</span>
          <span className="text-vis-cyan">0</span>
          <span className="text-vis-green">4</span>
        </h1>
        
        <p className="text-xl opacity-90 text-center mb-2 uppercase">Stranica nije pronađena</p>
        <p className="text-sm opacity-70 text-center mb-8 max-w-xs">
          Izgubili ste se na otoku? Nema problema, vraćamo vas na sigurno!
        </p>

        <button
          onClick={() => navigate('/home-v3')}
          className="px-8 py-4 border-[3px] border-foreground bg-card text-foreground font-bold text-lg flex items-center gap-3 hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase"
          style={{ boxShadow: '5px 5px 0 hsl(var(--vis-cyan))' }}
        >
          <Home className="w-5 h-5" />
          Povratak na početnu
        </button>

        {/* Decorative blocks */}
        <div className="flex gap-2 mt-12">
          <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-cyan border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-green border-2 border-foreground" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundV3;