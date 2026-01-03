import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Sun, Droplets, Flower2, Info, Sparkles } from "lucide-react";
import viskaKaduljaImage from "@/assets/viska-kadulja.jpg";

const FloraDetailViskaKadulja = () => {
  const navigate = useNavigate();

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

      {/* Hero Image */}
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden border-b-3 border-foreground">
          <img 
            src={viskaKaduljaImage} 
            alt="Viška kadulja - Vis Sage"
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className="absolute bottom-4 left-4 bg-[#D7897F] border-3 border-foreground px-4 py-2"
          style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
        >
          <span className="text-xs font-bold uppercase tracking-wide">Endemic to Vis</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Title Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tight">Viška Kadulja</h1>
          <p className="text-lg font-mono text-muted-foreground italic">Salvia officinalis var. vissiana</p>
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
            <span className="text-xs font-bold uppercase">Low Water</span>
          </div>
          <div 
            className="bg-[#96C7B3] border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Flower2 className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">30-60cm</span>
          </div>
        </div>

        {/* Special Badge */}
        <div 
          className="bg-[#F9B95C] border-3 border-foreground p-4 flex items-center gap-3"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <Sparkles className="w-8 h-8" />
          <div>
            <h3 className="font-bold uppercase">Unique to Vis Island</h3>
            <p className="text-sm">This variety of sage is found nowhere else in the world</p>
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
            Viška kadulja (Salvia officinalis var. vissiana) is a unique variety of common sage 
            that has evolved exclusively on the island of Vis. This aromatic herb has been 
            cultivated and wild-harvested by islanders for centuries.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Distinguished by its silvery-green leaves with a slightly more compact growth 
            habit than mainland varieties, Viška kadulja is prized for its exceptionally 
            strong aroma and medicinal properties. The plant produces beautiful purple-blue 
            flowers in late spring.
          </p>
        </div>

        {/* Traditional Uses */}
        <div 
          className="bg-[#6398A9] border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3">Traditional Uses</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Herbal tea for digestive health</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Culinary seasoning for fish and lamb</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Natural remedy for sore throats</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Essential oil production</span>
            </li>
          </ul>
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
              <span>Rocky limestone slopes and terraces</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Dry Mediterranean scrubland (garrigue)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Traditional herb gardens and stone walls</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Elevation: 50-300m above sea level</span>
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
              Protected
            </span>
            <span className="text-sm">Endemic species under Geopark protection</span>
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
        <div className="w-4 h-4 bg-[#D7897F] border-2 border-foreground" />
        <div className="w-4 h-4 bg-[#F9B95C] border-2 border-foreground" />
        <div className="w-4 h-4 bg-[#96C7B3] border-2 border-foreground" />
      </div>
    </div>
  );
};

export default FloraDetailViskaKadulja;
