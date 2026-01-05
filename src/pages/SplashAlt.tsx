import { useNavigate } from 'react-router-dom';
import VisButton from '@/components/ui/VisButton';
import { Waves } from 'lucide-react';

const SplashAlt = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-vis-blue">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-vis-cyan/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-32 left-0 w-80 h-80 bg-vis-green/20 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-vis-yellow/20 rounded-full blur-2xl translate-x-1/4" />
      
      {/* Wave SVG decoration */}
      <svg className="absolute top-20 left-0 w-full opacity-20" viewBox="0 0 400 100" preserveAspectRatio="none">
        <path 
          d="M0,50 Q100,20 200,50 T400,50" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className="text-primary-foreground"
        />
        <path 
          d="M0,70 Q100,40 200,70 T400,70" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          className="text-primary-foreground"
        />
      </svg>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10 text-primary-foreground">
        {/* Logo */}
        <div className="w-28 h-28 mb-8 rounded-3xl bg-card border-2 border-foreground flex items-center justify-center shadow-[6px_6px_0_hsl(var(--vis-yellow))] animate-fade-in">
          <Waves className="w-14 h-14 text-vis-blue" strokeWidth={2} />
        </div>

        {/* Title with highlighted words */}
        <h1 className="text-center mb-6 animate-fade-in">
          <span className="block text-5xl font-extrabold tracking-tight mb-1">Otkrijte</span>
          <span className="block text-5xl font-extrabold tracking-tight">
            <span className="text-vis-cyan">otok</span>{' '}
            <span className="text-vis-yellow">Vis</span>
          </span>
        </h1>

        <p className="text-lg opacity-90 text-center max-w-xs mb-12 animate-slide-up">
          Sve informacije za život i posjet najljepšem hrvatskom otoku.
        </p>

        {/* Decorative circles */}
        <div className="flex gap-3 mb-12 animate-slide-up">
          <div className="w-3 h-3 rounded-full bg-vis-yellow" />
          <div className="w-3 h-3 rounded-full bg-vis-cyan" />
          <div className="w-3 h-3 rounded-full bg-vis-green" />
        </div>
      </div>

      {/* Bottom card section */}
      <div className="relative z-10 mx-4 mb-8 p-6 bg-card rounded-3xl border-2 border-foreground shadow-[0_-4px_20px_rgba(0,0,0,0.1)] animate-slide-up">
        <p className="text-center font-semibold text-foreground mb-5">
          Odaberite jezik / Choose language
        </p>
        <div className="flex gap-3">
          <VisButton
            variant="primary"
            size="lg"
            className="flex-1 rounded-xl shadow-[4px_4px_0_hsl(var(--vis-yellow))]"
            onClick={() => navigate('/login')}
          >
            🇭🇷 Hrvatski
          </VisButton>
          <VisButton
            variant="outline"
            size="lg"
            className="flex-1 rounded-xl"
            onClick={() => navigate('/login')}
          >
            🇬🇧 English
          </VisButton>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 400 60" preserveAspectRatio="none">
        <path 
          d="M0,30 Q100,0 200,30 T400,30 L400,60 L0,60 Z" 
          fill="hsl(var(--vis-cyan))"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default SplashAlt;
