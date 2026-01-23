import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Sun, Droplets, Flower, Info, ShieldAlert } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import dalmatianIrisImg from "@/assets/dalmatian-iris.jpg";

const FloraDetailDalmatinskiIris = () => {
  const navigate = useNavigate();

  const images = [
    { src: dalmatianIrisImg, alt: "Dalmatinska perunika - Dalmatian Iris" },
    { src: dalmatianIrisImg, alt: "Dalmatinska perunika - Flower detail" },
    { src: dalmatianIrisImg, alt: "Dalmatinska perunika - Habitat" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b-3 border-foreground">
        <div className="flex items-center p-4">
          <button
            onClick={() => navigate("/geopark/flora")}
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
          <h1 className="text-3xl font-black uppercase tracking-tight">Dalmatinska Perunika</h1>
          <p className="text-lg font-mono text-muted-foreground italic">Iris pallida</p>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-3 gap-3">
          <div 
            className="bg-vis-coral border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Sun className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Puno Sunce</span>
          </div>
          <div 
            className="bg-vis-blue border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Droplets className="w-6 h-6 mx-auto mb-1 text-primary-foreground" />
            <span className="text-xs font-bold uppercase text-primary-foreground">Malo Vode</span>
          </div>
          <div 
            className="bg-vis-green border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Flower className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Cvjeta V-VI</span>
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
            Dalmatinska perunika (Iris pallida) jedna je od najljepših mediteranskih biljaka. 
            Poznata je po svojim velikim, ljubičasto-plavim cvjetovima koji cvjetaju tijekom 
            svibnja i lipnja.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Korijen ove biljke (rhizoma iridis) koristi se u parfumeriji kao fiksator mirisa. 
            Poznata je kao "oris root" i ima karakterističan miris na ljubičice.
          </p>
        </div>

        {/* Habitat */}
        <div 
          className="bg-vis-coral border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Stanište na Visu
          </h2>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Raste na stijenama i kamenitim terenima</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Preferira suha, dobro drenirana tla</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Često uz stare suhozide i terase</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Nadmorska visina: 0-400m</span>
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
          <div className="flex items-center gap-3">
            <span 
              className="bg-background border-3 border-foreground px-3 py-1 font-bold uppercase text-sm"
              style={{ boxShadow: '2px 2px 0 hsl(var(--foreground))' }}
            >
              Strogo zaštićena
            </span>
            <span className="text-sm">Natura 2000 ciljna vrsta</span>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/geopark/flora")}
          className="w-full bg-foreground text-background border-3 border-foreground p-4 font-bold uppercase tracking-wide"
          style={{ boxShadow: '4px 4px 0 hsl(var(--muted-foreground))' }}
        >
          ← Povratak na listu flore
        </button>
      </div>

      {/* Decorative footer */}
      <div className="flex gap-2 p-4 justify-center">
        <div className="w-4 h-4 bg-vis-coral border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-blue border-2 border-foreground" />
      </div>
    </div>
  );
};

export default FloraDetailDalmatinskiIris;
