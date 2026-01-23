import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Sun, Droplets, Utensils, Info, Leaf } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import wildRosemaryImg from "@/assets/wild-rosemary.jpg";

const FloraDetailDivljiRuzmarin = () => {
  const navigate = useNavigate();

  const images = [
    { src: wildRosemaryImg, alt: "Divlji ruzmarin - Wild Rosemary" },
    { src: wildRosemaryImg, alt: "Divlji ruzmarin - Flowers" },
    { src: wildRosemaryImg, alt: "Divlji ruzmarin - Bush" },
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
        badgeColor="#6398A9"
      />

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Title Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tight">Divlji Ruzmarin</h1>
          <p className="text-lg font-mono text-muted-foreground italic">Rosmarinus officinalis</p>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-3 gap-3">
          <div 
            className="bg-vis-blue border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Sun className="w-6 h-6 mx-auto mb-1 text-primary-foreground" />
            <span className="text-xs font-bold uppercase text-primary-foreground">Puno Sunce</span>
          </div>
          <div 
            className="bg-vis-yellow border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Droplets className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Suša OK</span>
          </div>
          <div 
            className="bg-vis-green border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Utensils className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Kulinarstvo</span>
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
            Ruzmarin (Rosmarinus officinalis) je aromatični mediteranski grm poznat po 
            karakterističnim iglastim listovima i plavičastim cvjetovima. Ime potječe od 
            latinskog "ros marinus" što znači "morska rosa".
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Na Visu divlji ruzmarin raste spontano u makiji i na kamenitim padinama. 
            Koristi se u kuhinji, medicini i kao pčelinja paša koja daje aromatični med.
          </p>
        </div>

        {/* Uses */}
        <div 
          className="bg-vis-blue border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2 text-primary-foreground">
            <Leaf className="w-5 h-5" />
            Primjena
          </h2>
          <ul className="space-y-2 text-primary-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Začin za meso, ribu i povrće</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Eterično ulje za masažu i kupke</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Tradicionalna medicina (cirkulacija, pamćenje)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Pčelinja paša za aromatični med</span>
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
              <span>Makija i garig</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Suhi kamenjari uz obalu</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Rubovi suhozida i putova</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Cvjeta od veljače do svibnja</span>
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
            <span className="text-sm">Uobičajena mediteranska vrsta</span>
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
        <div className="w-4 h-4 bg-vis-blue border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-green border-2 border-foreground" />
      </div>
    </div>
  );
};

export default FloraDetailDivljiRuzmarin;
