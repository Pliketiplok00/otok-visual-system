import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Sun, Droplets, Sparkles, Info, Heart } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import immortelleImg from "@/assets/immortelle.jpg";

const FloraDetailSmilje = () => {
  const navigate = useNavigate();

  const images = [
    { src: immortelleImg, alt: "Smilje - Immortelle" },
    { src: immortelleImg, alt: "Smilje - Yellow flowers" },
    { src: immortelleImg, alt: "Smilje - Field" },
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
        badgeText="Aromatična biljka"
        badgeColor="#F9B95C"
      />

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Title Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tight">Smilje</h1>
          <p className="text-lg font-mono text-muted-foreground italic">Helichrysum italicum</p>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-3 gap-3">
          <div 
            className="bg-vis-yellow border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Sun className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Puno Sunce</span>
          </div>
          <div 
            className="bg-vis-coral border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Droplets className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Suša OK</span>
          </div>
          <div 
            className="bg-vis-green border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Sparkles className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Eterično ulje</span>
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
            Smilje ili besmrtka (Helichrysum italicum) je aromatična mediteranska biljka 
            poznata po svojim zlatno-žutim cvjetovima koji zadržavaju boju i nakon sušenja, 
            što joj je donijelo ime "immortelle" (besmrtna).
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Eterično ulje smilja iznimno je cijenjeno u kozmetici i aromaterapiji zbog 
            svojih regenerativnih svojstava za kožu. Hrvatska je jedan od vodećih proizvođača 
            ovog ulja u svijetu.
          </p>
        </div>

        {/* Uses */}
        <div 
          className="bg-vis-yellow border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Primjena
          </h2>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Eterično ulje za kozmetiku i aromaterapiju</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Tradicionalna medicina (rane, upale)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Suhi aranžmani i dekoracije</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Parfumerija (fiksator mirisa)</span>
            </li>
          </ul>
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
              <span>Suhi kamenjari i garig</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Rubovi makije</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Napuštena poljoprivredna zemljišta</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Cvjeta od lipnja do rujna</span>
            </li>
          </ul>
        </div>

        {/* Conservation Status */}
        <div 
          className="bg-vis-green border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-2">Status zaštite</h2>
          <div className="flex items-center gap-3">
            <span 
              className="bg-background border-3 border-foreground px-3 py-1 font-bold uppercase text-sm"
              style={{ boxShadow: '2px 2px 0 hsl(var(--foreground))' }}
            >
              Nije ugrožena
            </span>
            <span className="text-sm">Održivo branje regulirano</span>
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
        <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-coral border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-green border-2 border-foreground" />
      </div>
    </div>
  );
};

export default FloraDetailSmilje;
