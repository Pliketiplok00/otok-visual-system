import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Bird, Binoculars, Info, ShieldAlert, Calendar } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import eleonorasFalconImg from "@/assets/eleonoras-falcon.jpg";
import eleonorasFalconCliffImg from "@/assets/eleonoras-falcon-cliff.jpg";

const FaunaDetailSokolEleonore = () => {
  const navigate = useNavigate();

  const images = [
    { src: eleonorasFalconImg, alt: "Sokol Eleonore - Eleonora's Falcon" },
    { src: eleonorasFalconCliffImg, alt: "Sokol Eleonore - Cliff habitat" },
    { src: eleonorasFalconImg, alt: "Sokol Eleonore - In flight" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b-3 border-foreground">
        <div className="flex items-center p-4">
          <button
            onClick={() => navigate("/geopark/fauna")}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
            <span className="font-bold uppercase text-sm">Natrag</span>
          </button>
        </div>
      </header>

      {/* Hero Image Carousel */}
      <ImageCarousel
        images={images}
        badgeText="Strogo zaštićena"
        badgeColor="#D7897F"
      />

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Title Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tight">Sokol Eleonore</h1>
          <p className="text-lg font-mono text-muted-foreground italic">Falco eleonorae</p>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-3 gap-3">
          <div 
            className="bg-vis-coral border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Bird className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">36-42 cm</span>
          </div>
          <div 
            className="bg-vis-cyan border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Calendar className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Ljeto</span>
          </div>
          <div 
            className="bg-vis-yellow border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Binoculars className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Rijetka</span>
          </div>
        </div>

        {/* Description */}
        <div 
          className="bg-card border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" />
            O vrsti
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sokol Eleonore (Falco eleonorae) je rijetka grabljivica srednje veličine 
            koja gnijezdi isključivo na strmim morskim liticama mediteranskih otoka. 
            Ime je dobila po sardinjskoj sutkinjici Eleonori d'Arborea iz 14. stoljeća.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Jedinstvena je po kasnom gnijezdenju (kolovoz-rujan) koje se podudara s 
            jesenskom migracijom ptica pjevica kojima se hrani. Lovi u letu, hvatajući 
            male ptice iznad mora.
          </p>
        </div>

        {/* Habitat */}
        <div 
          className="bg-vis-coral border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Stanište na viškom arhipelagu
          </h2>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Strme morske litice otočića</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Biševo i okolne hridi</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Gnijezdi u pukotinama stijena</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Prisutna od travnja do listopada</span>
            </li>
          </ul>
        </div>

        {/* Observation Tips */}
        <div 
          className="bg-vis-cyan border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2">
            <Binoculars className="w-5 h-5" />
            Promatranje
          </h2>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Najbolje vidjeti s brodova oko litica</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Aktivna u sumrak i zoru</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Prepoznatljiva po dugim krilima i brzom letu</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Ne približavati se gnijezdilištima!</span>
            </li>
          </ul>
        </div>

        {/* Conservation Status */}
        <div 
          className="bg-vis-yellow border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-2 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5" />
            Status zaštite
          </h2>
          <div className="flex items-center gap-3 flex-wrap">
            <span 
              className="bg-background border-3 border-foreground px-3 py-1 font-bold uppercase text-sm"
              style={{ boxShadow: '2px 2px 0 hsl(var(--foreground))' }}
            >
              Strogo zaštićena
            </span>
            <span className="text-sm">Natura 2000 ciljna vrsta</span>
          </div>
          <p className="text-sm mt-3">
            Populacija u Hrvatskoj broji oko 150-200 parova. Viški arhipelag 
            je jedno od najvažnijih gnijezdilišta na Jadranu.
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/geopark/fauna")}
          className="w-full bg-foreground text-background border-3 border-foreground p-4 font-bold uppercase tracking-wide"
          style={{ boxShadow: '4px 4px 0 hsl(var(--muted-foreground))' }}
        >
          ← Povratak na listu faune
        </button>
      </div>

      {/* Decorative footer */}
      <div className="flex gap-2 p-4 justify-center">
        <div className="w-4 h-4 bg-vis-coral border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-cyan border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
      </div>
    </div>
  );
};

export default FaunaDetailSokolEleonore;
