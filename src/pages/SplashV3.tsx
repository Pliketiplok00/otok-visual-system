import { useNavigate } from 'react-router-dom';
import VisButton from '@/components/ui/VisButton';
import { Waves, Anchor, Sun, Fish } from 'lucide-react';

const SplashV3 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Top illustrated section */}
      <div className="relative bg-vis-blue flex-1 pt-safe-top">
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large organic blob */}
          <svg className="absolute -top-20 -left-20 w-72 h-72" viewBox="0 0 200 200">
            <path 
              d="M40,100 Q60,20 120,40 Q180,60 160,120 Q140,180 80,160 Q20,140 40,100" 
              fill="hsl(var(--vis-cyan))"
              opacity="0.3"
            />
          </svg>
          
          {/* Yellow blob */}
          <svg className="absolute top-10 -right-10 w-48 h-48" viewBox="0 0 200 200">
            <ellipse cx="100" cy="100" rx="80" ry="70" fill="hsl(var(--vis-yellow))" opacity="0.25" />
          </svg>
          
          {/* Green blob */}
          <svg className="absolute bottom-20 left-10 w-32 h-32" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="hsl(var(--vis-green))" opacity="0.3" />
          </svg>
          
          {/* Wavy line */}
          <svg className="absolute top-1/3 left-0 w-full h-20" viewBox="0 0 400 40" preserveAspectRatio="none">
            <path 
              d="M0,20 Q50,5 100,20 T200,20 T300,20 T400,20" 
              fill="none" 
              stroke="hsl(var(--vis-white))"
              strokeWidth="1.5"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Floating icons */}
        <div className="absolute top-24 left-8 w-10 h-10 rounded-full bg-vis-yellow/80 flex items-center justify-center animate-pulse">
          <Sun className="w-5 h-5 text-foreground" strokeWidth={2} />
        </div>
        <div className="absolute top-40 right-12 w-8 h-8 rounded-full bg-vis-cyan/80 flex items-center justify-center">
          <Fish className="w-4 h-4 text-foreground" strokeWidth={2} />
        </div>
        <div className="absolute bottom-32 right-20 w-9 h-9 rounded-full bg-vis-green/80 flex items-center justify-center">
          <Anchor className="w-4 h-4 text-foreground" strokeWidth={2} />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 py-20 text-primary-foreground">
          {/* Illustrated logo */}
          <div className="relative mb-8">
            <div className="w-28 h-28 rounded-[2rem] bg-card border-2 border-foreground flex items-center justify-center rotate-3 shadow-[8px_8px_0_hsl(var(--vis-yellow))]">
              <Waves className="w-14 h-14 text-vis-blue" strokeWidth={2} />
            </div>
            {/* Small decorative circle */}
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-vis-cyan border-2 border-foreground" />
          </div>

          {/* Title - mixed emphasis like reference */}
          <h1 className="text-center mb-6">
            <span className="block text-4xl font-bold opacity-90 mb-1">Dobrodošli na</span>
            <span className="block">
              <span className="text-5xl font-extrabold text-vis-cyan">Otok </span>
              <span className="text-5xl font-extrabold text-vis-yellow">Vis</span>
            </span>
          </h1>

          <p className="text-center text-lg opacity-80 max-w-[280px] leading-relaxed">
            Službena aplikacija za <span className="font-semibold text-vis-green">stanovnike</span> i <span className="font-semibold text-vis-yellow">posjetitelje</span>
          </p>
        </div>
      </div>

      {/* Bottom section - like the reference card style */}
      <div className="bg-card relative">
        {/* Curved top edge */}
        <svg className="absolute -top-8 left-0 w-full h-10" viewBox="0 0 400 40" preserveAspectRatio="none">
          <path d="M0,40 Q200,0 400,40 L400,40 L0,40 Z" fill="hsl(var(--card))" />
        </svg>
        
        <div className="px-6 pt-6 pb-8 relative z-10">
          <p className="text-center text-sm font-medium text-muted-foreground mb-5">
            Odaberite jezik / Choose language
          </p>
          
          <div className="space-y-3">
            <VisButton
              variant="primary"
              size="lg"
              className="w-full rounded-2xl shadow-[5px_5px_0_hsl(var(--vis-cyan))] hover:shadow-[3px_3px_0_hsl(var(--vis-cyan))]"
              onClick={() => navigate('/login')}
            >
              <span className="text-xl mr-2">🇭🇷</span>
              Hrvatski
            </VisButton>
            <VisButton
              variant="outline"
              size="lg"
              className="w-full rounded-2xl bg-vis-yellow/20 border-vis-yellow hover:bg-vis-yellow/30"
              onClick={() => navigate('/login')}
            >
              <span className="text-xl mr-2">🇬🇧</span>
              English
            </VisButton>
          </div>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-vis-blue" />
            <div className="w-2 h-2 rounded-full bg-vis-cyan" />
            <div className="w-2 h-2 rounded-full bg-vis-green" />
            <div className="w-2 h-2 rounded-full bg-vis-yellow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashV3;
