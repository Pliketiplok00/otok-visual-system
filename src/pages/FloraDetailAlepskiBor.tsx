import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Sun, Droplets, TreePine, Info } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import alepskiBorImage from "@/assets/alepski-bor.jpg";

const FloraDetailAlepskiBor = () => {
  const navigate = useNavigate();

  const images = [
    { src: alepskiBorImage, alt: "Alepski bor - Aleppo Pine" },
    { src: alepskiBorImage, alt: "Alepski bor - Bark detail" },
    { src: alepskiBorImage, alt: "Alepski bor - Pine cones" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b-3 border-foreground">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => navigate("/geopark/flora")}
            className="w-11 h-11 flex items-center justify-center border-3 border-foreground bg-background"
            style={{ boxShadow: '2px 2px 0 hsl(var(--foreground))' }}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold uppercase tracking-wide">Flora Detail</h1>
          <div className="w-11" />
        </div>
      </header>

      {/* Hero Image Carousel */}
      <ImageCarousel
        images={images}
        badgeText="Endemic Species"
        badgeColor="#96C7B3"
      />

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Title Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tight">Alepski Bor</h1>
          <p className="text-lg font-mono text-muted-foreground italic">Pinus halepensis</p>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-3 gap-3">
          <div 
            className="bg-[#F9B95C] border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Sun className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Full Sun</span>
          </div>
          <div 
            className="bg-[#6398A9] border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Droplets className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Drought Tolerant</span>
          </div>
          <div 
            className="bg-[#96C7B3] border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <TreePine className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">15-25m Tall</span>
          </div>
        </div>

        {/* Description */}
        <div 
          className="bg-card border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" />
            About
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The Aleppo Pine (Pinus halepensis) is a Mediterranean pine species native to the 
            coastal regions of the Mediterranean Basin, including the island of Vis. It is one of 
            the most characteristic trees of the Mediterranean landscape.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            This resilient conifer is well-adapted to the hot, dry summers and mild winters 
            typical of the Mediterranean climate. Its light gray-green needles grow in pairs 
            and can reach 6-10 cm in length.
          </p>
        </div>

        {/* Habitat */}
        <div 
          className="bg-[#D7897F] border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Habitat on Vis
          </h2>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Found across coastal hillsides and rocky terrain</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Common in mixed Mediterranean scrubland</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Elevation range: sea level to 500m</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Often found near ancient stone walls and terraces</span>
            </li>
          </ul>
        </div>

        {/* Conservation Status */}
        <div 
          className="bg-[#96C7B3] border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-2">Conservation Status</h2>
          <div className="flex items-center gap-3">
            <span 
              className="bg-background border-3 border-foreground px-3 py-1 font-bold uppercase text-sm"
              style={{ boxShadow: '2px 2px 0 hsl(var(--foreground))' }}
            >
              Least Concern
            </span>
            <span className="text-sm">Protected under Geopark guidelines</span>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/geopark/flora")}
          className="w-full bg-foreground text-background border-3 border-foreground p-4 font-bold uppercase tracking-wide"
          style={{ boxShadow: '4px 4px 0 hsl(var(--muted-foreground))' }}
        >
          ← Back to Flora List
        </button>
      </div>

      {/* Decorative footer */}
      <div className="flex gap-2 p-4 justify-center">
        <div className="w-4 h-4 bg-[#96C7B3] border-2 border-foreground" />
        <div className="w-4 h-4 bg-[#F9B95C] border-2 border-foreground" />
        <div className="w-4 h-4 bg-[#6398A9] border-2 border-foreground" />
      </div>
    </div>
  );
};

export default FloraDetailAlepskiBor;
