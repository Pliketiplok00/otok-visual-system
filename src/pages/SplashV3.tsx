import { useNavigate } from "react-router-dom";
import { Anchor, Sun } from "lucide-react";

const SplashV3 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top section - muted teal with island vibe */}
      <div className="flex-1 bg-vis-blue text-background flex flex-col items-center justify-center px-6 py-12 relative">
        {/* Wave pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.3' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />

        {/* Logo - Island anchor with sun */}
        <div className="relative z-10 mb-8">
          <div
            className="w-36 h-36 bg-vis-yellow border-[4px] border-foreground flex items-center justify-center"
            style={{ boxShadow: "6px 6px 0 hsl(var(--foreground))" }}
          >
            <div className="relative">
              <Anchor className="w-16 h-16 text-foreground" strokeWidth={2.5} />
              <Sun className="w-8 h-8 text-vis-coral absolute -top-2 -right-4" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Title - brutal typography */}
        <h1 className="relative z-10 text-center mb-6">
          <span className="block text-xl font-bold tracking-widest mb-2 text-vis-yellow">DOBRODOŠLI NA</span>
          <span className="block text-5xl sm:text-6xl font-bold tracking-tighter text-background">MOJ VIS</span>
        </h1>

        <p className="relative z-10 text-center text-base font-mono opacity-90 max-w-xs text-background/80">
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
            onClick={() => navigate("/login")}
            className="w-full border-[3px] border-foreground bg-vis-yellow px-6 py-4 font-bold uppercase tracking-wide flex items-center justify-center gap-3 hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
            style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
          >
            <span className="text-2xl">🇭🇷</span>
            <span className="text-foreground">HRVATSKI</span>
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full border-[3px] border-foreground bg-vis-cyan px-6 py-4 font-bold uppercase tracking-wide flex items-center justify-center gap-3 hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
            style={{ boxShadow: "4px 4px 0 hsl(var(--vis-blue))" }}
          >
            <span className="text-2xl">🇬🇧</span>
            <span className="text-foreground">ENGLISH</span>
          </button>
        </div>

        {/* Decorative blocks - island colors */}
        <div className="flex justify-center gap-3 mt-8">
          <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-blue border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-cyan border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-green border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-coral border-2 border-foreground" />
        </div>
      </div>
    </div>
  );
};

export default SplashV3;
