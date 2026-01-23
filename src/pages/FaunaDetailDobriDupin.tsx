import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Waves, Binoculars, Info, ShieldAlert, Users } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import bottlenoseDolphinImg from "@/assets/bottlenose-dolphin.jpg";

const FaunaDetailDobriDupin = () => {
  const navigate = useNavigate();

  const images = [
    { src: bottlenoseDolphinImg, alt: "Dobri dupin - Bottlenose Dolphin" },
    { src: bottlenoseDolphinImg, alt: "Dobri dupin - Pod" },
    { src: bottlenoseDolphinImg, alt: "Dobri dupin - Jumping" },
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
        badgeColor="#58B6C0"
      />

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Title Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tight">Dobri Dupin</h1>
          <p className="text-lg font-mono text-muted-foreground italic">Tursiops truncatus</p>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-3 gap-3">
          <div 
            className="bg-vis-cyan border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Waves className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">2-4 m</span>
          </div>
          <div 
            className="bg-vis-blue border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Users className="w-6 h-6 mx-auto mb-1 text-primary-foreground" />
            <span className="text-xs font-bold uppercase text-primary-foreground">Društvena</span>
          </div>
          <div 
            className="bg-vis-yellow border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Binoculars className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Česta</span>
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
            Dobri dupin (Tursiops truncatus) je karizmatični morski sisavac i jedina 
            vrsta dupina koja stalno obitava u Jadranu. Prepoznatljiv je po sivoj boji, 
            zaobljenoj glavi i "osmijehu" na njušci.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Žive u grupama od 5-20 jedinki, izrazito su inteligentni i društveni. 
            Mogu doživjeti i do 50 godina. Viško more je jedno od njihovih 
            najvažnijih staništa na Jadranu.
          </p>
        </div>

        {/* Habitat */}
        <div 
          className="bg-vis-cyan border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Stanište oko Visa
          </h2>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Otvoreno more oko arhipelaga</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Dublje uvale i kanali između otoka</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Procjenjena lokalna populacija: 30-50 jedinki</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Prisutni cijele godine</span>
            </li>
          </ul>
        </div>

        {/* Observation Tips */}
        <div 
          className="bg-vis-blue border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2 text-primary-foreground">
            <Binoculars className="w-5 h-5" />
            Promatranje
          </h2>
          <ul className="space-y-2 text-primary-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Često viđeni s trajekta ili brodica</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Aktivni tijekom jutra i predvečer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Prate brodove i skaču iz vode</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Ne hraniti i ne uznemiravati!</span>
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
            Jadransku populaciju čini oko 220 jedinki. Glavne prijetnje su 
            onečišćenje, ribolovni alati i uznemiravanje.
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
        <div className="w-4 h-4 bg-vis-cyan border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-blue border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
      </div>
    </div>
  );
};

export default FaunaDetailDobriDupin;
