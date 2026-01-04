import { ArrowLeft, Bird, Fish, Bug, Rabbit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LucideIcon } from "lucide-react";

import eleonorasFalconImg from "@/assets/eleonoras-falcon.jpg";
import bottlenoseDolphinImg from "@/assets/bottlenose-dolphin.jpg";
import hermannsTortoiseImg from "@/assets/hermanns-tortoise.jpg";

interface AnimalData {
  name: string;
  latinName: string;
  description: string;
  habitat: string;
  icon: LucideIcon;
  color: string;
  image?: string;
}

const endemicAnimals: AnimalData[] = [
  {
    name: "Vis Wall Lizard",
    latinName: "Podarcis siculus visensis",
    description: "Endemic subspecies of Italian wall lizard found only on Vis and surrounding islets.",
    habitat: "Rocky walls",
    icon: Bug,
    color: "bg-vis-green"
  },
  {
    name: "Eleonora's Falcon",
    latinName: "Falco eleonorae",
    description: "Migratory raptor nesting on coastal cliffs, feeds on smaller birds during migration.",
    habitat: "Sea cliffs",
    icon: Bird,
    color: "bg-vis-blue",
    image: eleonorasFalconImg
  },
  {
    name: "Mediterranean Monk Seal",
    latinName: "Monachus monachus",
    description: "Critically endangered seal occasionally spotted in remote sea caves around the island.",
    habitat: "Sea caves",
    icon: Fish,
    color: "bg-vis-terracotta"
  },
  {
    name: "Adriatic Sturgeon",
    latinName: "Acipenser naccarii",
    description: "Ancient fish species found in deeper waters surrounding the island.",
    habitat: "Deep waters",
    icon: Fish,
    color: "bg-vis-yellow"
  },
  {
    name: "Shag",
    latinName: "Gulosus aristotelis",
    description: "Coastal diving bird with distinctive crest, common on rocky shorelines.",
    habitat: "Rocky coast",
    icon: Bird,
    color: "bg-vis-green"
  },
  {
    name: "Hermann's Tortoise",
    latinName: "Testudo hermanni",
    description: "Small land tortoise found in maquis shrubland and olive groves.",
    habitat: "Shrubland",
    icon: Bug,
    color: "bg-vis-blue",
    image: hermannsTortoiseImg
  },
  {
    name: "Mouflon",
    latinName: "Ovis gmelini musimon",
    description: "Wild sheep introduced centuries ago, now roaming the island's interior hills.",
    habitat: "Hill terrain",
    icon: Rabbit,
    color: "bg-vis-terracotta"
  },
  {
    name: "Bottlenose Dolphin",
    latinName: "Tursiops truncatus",
    description: "Playful marine mammal frequently seen in waters around Vis archipelago.",
    habitat: "Open sea",
    icon: Fish,
    color: "bg-vis-yellow",
    image: bottlenoseDolphinImg
  },
  {
    name: "Eurasian Eagle-Owl",
    latinName: "Bubo bubo",
    description: "Large nocturnal predator nesting in remote cliffs and abandoned military sites.",
    habitat: "Cliffs & ruins",
    icon: Bird,
    color: "bg-vis-green"
  }
];

const GeoparkFaunaV3 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b-3 border-foreground">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => navigate("/geopark")}
            className="w-11 h-11 border-3 border-foreground bg-background flex items-center justify-center"
            style={{ boxShadow: "3px 3px 0 hsl(var(--foreground))" }}
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <h1 className="font-mono text-lg uppercase tracking-wider font-bold">Fauna</h1>
          <div className="w-11 h-11" />
        </div>
      </header>

      <main className="p-4 pb-8">
        {/* Hero Section */}
        <div 
          className="border-3 border-foreground bg-vis-terracotta p-6 mb-6"
          style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 border-3 border-foreground bg-background flex items-center justify-center">
              <Bird className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="font-mono text-xl uppercase font-bold">Endemic Wildlife</h2>
              <p className="font-mono text-sm opacity-80">VIS ISLAND GEOPARK</p>
            </div>
          </div>
          <p className="font-sans text-sm leading-relaxed">
            Explore the diverse wildlife inhabiting Vis Island's varied ecosystems, 
            from coastal cliffs to interior shrublands and surrounding waters.
          </p>
        </div>

        {/* Animal Count */}
        <div 
          className="border-3 border-foreground bg-vis-blue p-4 mb-6 flex items-center justify-between"
          style={{ boxShadow: "3px 3px 0 hsl(var(--foreground))" }}
        >
          <span className="font-mono uppercase font-bold">Species Listed</span>
          <span className="font-mono text-2xl font-bold">{endemicAnimals.length}</span>
        </div>

        {/* Animals List */}
        <div className="space-y-4">
          {endemicAnimals.map((animal, index) => {
            const IconComponent = animal.icon;
            return (
              <div
                key={index}
                className="border-3 border-foreground bg-card"
                style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
              >
                {/* Image */}
                {animal.image && (
                  <div className="aspect-[16/9] overflow-hidden border-b-3 border-foreground">
                    <img 
                      src={animal.image} 
                      alt={animal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className={`${animal.color} p-3 border-b-3 border-foreground flex items-center gap-3`}>
                  <div className="w-10 h-10 border-2 border-foreground bg-background flex items-center justify-center">
                    <IconComponent className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-mono uppercase font-bold text-sm">{animal.name}</h3>
                    <p className="font-mono text-xs italic opacity-70">{animal.latinName}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-sans text-sm mb-3">{animal.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase bg-muted px-2 py-1 border-2 border-foreground">
                      {animal.habitat}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer decoration */}
        <div className="flex gap-2 mt-8 justify-center">
          <div className="w-4 h-4 bg-vis-terracotta border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-blue border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-green border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
        </div>
      </main>
    </div>
  );
};

export default GeoparkFaunaV3;