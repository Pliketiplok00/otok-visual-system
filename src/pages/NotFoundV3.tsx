import { useNavigate } from 'react-router-dom';
import { MapPin, Home, Compass } from 'lucide-react';

const NotFoundV3 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-vis-blue relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-0 w-48 h-48 bg-vis-cyan/20 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-40 left-0 w-40 h-40 bg-vis-yellow/20 rounded-full blur-2xl -translate-x-1/2" />
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-vis-green/20 rounded-full blur-xl" />
      
      {/* Floating icons */}
      <div className="absolute top-24 right-12 w-10 h-10 rounded-full bg-vis-yellow/60 flex items-center justify-center animate-pulse">
        <Compass className="w-5 h-5 text-foreground" strokeWidth={2} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 text-primary-foreground">
        {/* Illustrated 404 */}
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-3xl bg-card border-2 border-foreground flex items-center justify-center rotate-3 shadow-[8px_8px_0_hsl(var(--vis-yellow))]">
            <MapPin className="w-16 h-16 text-vis-blue" strokeWidth={2} />
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-vis-cyan border-2 border-foreground flex items-center justify-center text-sm font-bold">
            ?
          </div>
        </div>

        <h1 className="text-7xl font-extrabold mb-2">
          <span className="text-vis-yellow">4</span>
          <span className="text-vis-cyan">0</span>
          <span className="text-vis-green">4</span>
        </h1>
        
        <p className="text-xl opacity-90 text-center mb-2">Stranica nije pronađena</p>
        <p className="text-sm opacity-70 text-center mb-8 max-w-xs">
          Izgubili ste se na otoku? Nema problema, vraćamo vas na sigurno!
        </p>

        <button
          onClick={() => navigate('/home-v3')}
          className="px-8 py-4 rounded-2xl border-2 border-foreground bg-card text-foreground font-bold text-lg flex items-center gap-3 shadow-[5px_5px_0_hsl(var(--vis-cyan))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_hsl(var(--vis-cyan))] transition-all"
        >
          <Home className="w-5 h-5" />
          Povratak na početnu
        </button>

        {/* Decorative dots */}
        <div className="flex gap-2 mt-12">
          <div className="w-3 h-3 rounded-full bg-vis-yellow" />
          <div className="w-3 h-3 rounded-full bg-vis-cyan" />
          <div className="w-3 h-3 rounded-full bg-vis-green" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundV3;
