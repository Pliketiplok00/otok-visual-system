import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Moon, Home, Info, ShieldAlert, AlertTriangle } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import mediterraneanBatImg from "@/assets/mediterranean-bat.jpg";

const FaunaDetailSismis = () => {
  const navigate = useNavigate();

  const images = [
    { src: mediterraneanBatImg, alt: "Mediteranski šišmiš" },
    { src: mediterraneanBatImg, alt: "Šišmiš u špilji" },
    { src: mediterraneanBatImg, alt: "Šišmiš u letu" },
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
        badgeText="Zaštićena vrsta"
        badgeColor="#F9B95C"
      />

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Title Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tight">Mediteranski Šišmiš</h1>
          <p className="text-lg font-mono text-muted-foreground italic">Pipistrellus kuhlii i druge vrste</p>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-3 gap-3">
          <div 
            className="bg-vis-yellow border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Moon className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Noćni</span>
          </div>
          <div 
            className="bg-vis-coral border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <Home className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Špilje</span>
          </div>
          <div 
            className="bg-vis-green border-3 border-foreground p-3 text-center"
            style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
          >
            <AlertTriangle className="w-6 h-6 mx-auto mb-1" />
            <span className="text-xs font-bold uppercase">Osjetljivi</span>
          </div>
        </div>

        {/* Description */}
        <div 
          className="bg-card border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" />
            O skupini
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Na Visu i okolnim otočićima zabilježeno je više vrsta šišmiša, uključujući 
            sredozemnog šišmiša (Pipistrellus kuhlii), velikouhovog šišmiša i druge. 
            Šišmiši su jedini sisavci koji aktivno lete.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Izuzetno su korisni jer noću love velike količine kukaca - jedan šišmiš 
            može pojesti i do 3000 komaraca u jednoj noći! Time kontroliraju populacije 
            štetnika i prenose pelud.
          </p>
        </div>

        {/* Habitat */}
        <div 
          className="bg-vis-yellow border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Staništa na Visu
          </h2>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Prirodne špilje i pukotine u stijenama</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Napušteni vojni tuneli i bunkeri</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Stare zgrade, tavani i podrumi</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Aktivni od sumraka do zore</span>
            </li>
          </ul>
        </div>

        {/* Important Notice */}
        <div 
          className="bg-vis-coral border-3 border-foreground p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <h2 className="text-lg font-bold uppercase mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Važno upozorenje
          </h2>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Ne ulazite u špilje bez dozvole</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Izbjegavajte buku i jaka svjetla u blizini skloništa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Zimsko uznemiravanje može biti kobno</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Ne dirati šišmiše - mogu nositi bolesti</span>
            </li>
          </ul>
        </div>

        {/* Conservation Status */}
        <div 
          className="bg-vis-green border-3 border-foreground p-4"
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
              Zaštićene vrste
            </span>
            <span className="text-sm">EU Direktiva o staništima</span>
          </div>
          <p className="text-sm mt-3">
            Sve vrste šišmiša u Hrvatskoj su zaštićene. Uništavanje skloništa 
            i uznemiravanje strogo je zabranjeno.
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
        <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-coral border-2 border-foreground" />
        <div className="w-4 h-4 bg-vis-green border-2 border-foreground" />
      </div>
    </div>
  );
};

export default FaunaDetailSismis;
