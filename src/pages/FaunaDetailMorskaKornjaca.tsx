import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Waves, Binoculars, Info, ShieldAlert, Ruler } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import eleonorasFalconCliffImg from "@/assets/eleonoras-falcon-cliff.jpg";

const FaunaDetailMorskaKornjaca = () => {
  const navigate = useNavigate();

  // Using cliff image as placeholder until we have a turtle image
  const images = [
    { src: eleonorasFalconCliffImg, alt: "Glavata želva - Loggerhead Sea Turtle" },
    { src: eleonorasFalconCliffImg, alt: "Glavata želva - Swimming" },
    { src: eleonorasFalconCliffImg, alt: "Glavata želva - Beach" },
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
        badgeColor="#96C7B3"
      />

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Title Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tight">Glavata Želva</h1>
          <p className="text-lg font-mono text-muted-foreground italic">Caretta caretta</p>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-3 gap-3">
          <div 
            className="bg-vis-green border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Ruler className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">70-100 cm</span>
          </div>
          <div 
            className="bg-vis-cyan border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Waves className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Do 135 kg</span>
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
            Glavata želva (Caretta caretta) je ugrožena morska kornjača koja 
            povremeno posjećuje viške vode. Ime je dobila po velikoj glavi s 
            snažnim čeljustima kojima drobi školjke i rakove.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Može doživjeti i preko 60 godina. Gnijezdi na pješčanim plažama 
            istočnog Mediterana, a Jadran koristi kao područje hranjenja. 
            Viđenja oko Visa su rijetka ali značajna.
          </p>
        </div>

        {/* Habitat */}
        <div 
          className="bg-vis-green border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Prisutnost na Jadranu
          </h2>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Povremeno viđena u vodama oko Visa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Jadran služi kao područje hranjenja</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Češća u južnom Jadranu</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Aktivna od proljeća do jeseni</span>
            </li>
          </ul>
        </div>

        {/* What to do if you see one */}
        <div 
          className="bg-vis-cyan border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2">
            <Binoculars className="w-5 h-5" />
            Ako ugledaš kornjaču
          </h2>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Držite odstojanje od najmanje 10 metara</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Ne hranite i ne dirajte životinju</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Fotografirajte iz daljine ako je moguće</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Ozlijeđenu kornjaču prijavite na 112</span>
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
            <span className="text-sm">IUCN: Ranjiva vrsta</span>
          </div>
          <p className="text-sm mt-3">
            Glavne prijetnje su ribolovni alati (zapletanje), plastika u moru, 
            gubitak gnijezdilišta i klimatske promjene.
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
        <div className="w-4 h-4 bg-vis-green border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-cyan border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
      </div>
    </div>
  );
};

export default FaunaDetailMorskaKornjaca;
