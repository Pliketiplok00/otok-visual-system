import { useNavigate } from "react-router-dom";
import { Leaf, Bird, ChevronRight, Mountain, ShieldCheck } from "lucide-react";
import ImageHeader from "@/components/layout/ImageHeader";
import alepskiBorImg from "@/assets/alepski-bor.jpg";

const GeoparkV3 = () => {
  const navigate = useNavigate();

  const categories = [
    {
      icon: Leaf,
      title: "FLORA",
      subtitle: "Biljne vrste",
      description: "Endemske i zaštićene biljke otoka Visa",
      path: "/geopark/flora",
      bgColor: "bg-vis-green",
      shadowColor: "hsl(var(--foreground))"
    },
    {
      icon: Bird,
      title: "FAUNA",
      subtitle: "Životinjske vrste",
      description: "Ptice, gmazovi i morski sisavci",
      path: "/geopark/fauna",
      bgColor: "bg-vis-cyan",
      shadowColor: "hsl(var(--foreground))"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ImageHeader
        image={alepskiBorImg}
        title="Geopark"
        subtitle="NATURA 2000"
        icon={<Mountain className="w-6 h-6" strokeWidth={2.5} />}
        iconBg="bg-vis-yellow"
        iconShadow="hsl(var(--foreground))"
        backPath="/menu"
      />

      <main className="p-4 pb-8">
        {/* Intro */}
        <div 
          className="border-3 border-foreground bg-vis-yellow p-6 mb-6"
          style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5" strokeWidth={2.5} />
            <span className="font-mono text-sm uppercase font-bold">Zaštićeno područje</span>
          </div>
          <p className="text-sm leading-relaxed">
            Otok Vis dio je ekološke mreže Natura 2000, europske mreže zaštićenih područja. 
            Ovdje obitavaju brojne endemske i rijetke vrste flore i faune.
          </p>
        </div>

        {/* Categories */}
        <h2 className="font-mono text-lg uppercase font-bold mb-4 flex items-center gap-2">
          <span className="w-3 h-3 bg-foreground"></span>
          Istraži
        </h2>

        <div className="space-y-4">
          {categories.map((cat) => (
            <button
              key={cat.path}
              onClick={() => navigate(cat.path)}
              className={`w-full ${cat.bgColor} border-3 border-foreground p-5 text-left hover:translate-x-[2px] hover:translate-y-[2px] transition-all`}
              style={{ boxShadow: `4px 4px 0 ${cat.shadowColor}` }}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-14 h-14 bg-background border-3 border-foreground flex items-center justify-center"
                  style={{ boxShadow: "2px 2px 0 hsl(var(--foreground))" }}
                >
                  <cat.icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs uppercase tracking-wide text-foreground/70 mb-1">
                    {cat.subtitle}
                  </div>
                  <h3 className="font-bold text-xl tracking-tight">{cat.title}</h3>
                  <p className="text-sm mt-1 text-foreground/80">{cat.description}</p>
                </div>
                <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
              </div>
            </button>
          ))}
        </div>

        {/* Info box */}
        <div 
          className="mt-6 border-3 border-foreground bg-muted p-4"
          style={{ boxShadow: "3px 3px 0 hsl(var(--vis-green))" }}
        >
          <p className="text-sm font-mono">
            <strong>Napomena:</strong> Zabranjeno je branje, uništavanje ili uznemiravenje zaštićenih vrsta. 
            Kazne mogu iznositi do 50.000 EUR.
          </p>
        </div>
      </main>
    </div>
  );
};

export default GeoparkV3;
