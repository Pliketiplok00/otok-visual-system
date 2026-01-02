import { useNavigate } from 'react-router-dom';
import { Waves } from 'lucide-react';

const SplashV3 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top section - stark black with content */}
      <div className="flex-1 bg-foreground text-background flex flex-col items-center justify-center px-6 py-12 relative">
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Logo */}
        <div className="relative z-10 mb-8">
          <div className="w-32 h-32 bg-vis-yellow border-[4px] border-background flex items-center justify-center shadow-brutal-sm">
            <Waves className="w-16 h-16 text-foreground" strokeWidth={2.5} />
          </div>
        </div>

        {/* Title - brutal typography */}
        <h1 className="relative z-10 text-center mb-6">
          <span className="block text-2xl font-bold tracking-wide mb-2">DOBRODOŠLI NA</span>
          <span className="block text-6xl font-bold tracking-tighter">
            OTOK VIS
          </span>
        </h1>

        <p className="relative z-10 text-center text-lg font-mono opacity-80 max-w-xs">
          SLUŽBENA APLIKACIJA ZA STANOVNIKE I POSJETITELJE
        </p>
      </div>

      {/* Bottom section - language selection */}
      <div className="bg-background px-6 py-8 border-t-[4px] border-foreground">
        <p className="text-center text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">
          Odaberite jezik / Choose language
        </p>
        
        <div className="space-y-4">
          <button
            onClick={() => navigate('/login')}
            className="neo-btn w-full flex items-center justify-center gap-3"
          >
            <span className="text-2xl">🇭🇷</span>
            <span>HRVATSKI</span>
          </button>
          
          <button
            onClick={() => navigate('/login')}
            className="w-full border-[3px] border-foreground bg-background px-6 py-3 font-bold uppercase tracking-wide flex items-center justify-center gap-3 hover:bg-muted transition-colors"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
          >
            <span className="text-2xl">🇬🇧</span>
            <span>ENGLISH</span>
          </button>
        </div>

        {/* Decorative blocks */}
        <div className="flex justify-center gap-3 mt-8">
          <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-blue border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-cyan border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-green border-2 border-foreground" />
        </div>
      </div>
    </div>
  );
};

export default SplashV3;
