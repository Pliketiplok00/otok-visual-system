import { ArrowLeft, Leaf, Flower2, TreeDeciduous, Shrub } from "lucide-react";
import { useNavigate } from "react-router-dom";

const endemicPlants = [
  {
    name: "Dalmatian Iris",
    latinName: "Iris pallida",
    description: "Purple flowering plant endemic to the Dalmatian coast, blooms in late spring.",
    habitat: "Rocky slopes",
    icon: Flower2,
    color: "bg-vis-blue"
  },
  {
    name: "Croatian Bellflower",
    latinName: "Campanula portenschlagiana",
    description: "Small purple bellflower growing in rock crevices and stone walls.",
    habitat: "Limestone walls",
    icon: Flower2,
    color: "bg-vis-terracotta"
  },
  {
    name: "Adriatic Sage",
    latinName: "Salvia officinalis",
    description: "Aromatic herb with grey-green leaves, used in traditional medicine.",
    habitat: "Dry meadows",
    icon: Leaf,
    color: "bg-vis-green"
  },
  {
    name: "Holm Oak",
    latinName: "Quercus ilex",
    description: "Evergreen oak tree characteristic of Mediterranean forests.",
    habitat: "Coastal forests",
    icon: TreeDeciduous,
    color: "bg-vis-yellow"
  },
  {
    name: "Wild Rosemary",
    latinName: "Rosmarinus officinalis",
    description: "Fragrant evergreen shrub with needle-like leaves and blue flowers.",
    habitat: "Rocky terrain",
    icon: Shrub,
    color: "bg-vis-blue"
  },
  {
    name: "Strawberry Tree",
    latinName: "Arbutus unedo",
    description: "Evergreen shrub producing red edible fruits in autumn.",
    habitat: "Maquis shrubland",
    icon: TreeDeciduous,
    color: "bg-vis-terracotta"
  },
  {
    name: "Immortelle",
    latinName: "Helichrysum italicum",
    description: "Yellow flowering plant known for its essential oil and medicinal properties.",
    habitat: "Dry grasslands",
    icon: Flower2,
    color: "bg-vis-yellow"
  },
  {
    name: "Croatian Knapweed",
    latinName: "Centaurea ragusina",
    description: "Silver-leaved plant with yellow flowers, endemic to Dalmatian islands.",
    habitat: "Coastal cliffs",
    icon: Leaf,
    color: "bg-vis-green"
  }
];

const GeoparkFloraV3 = () => {
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
          <h1 className="font-mono text-lg uppercase tracking-wider font-bold">Flora</h1>
          <div className="w-11 h-11" />
        </div>
      </header>

      <main className="p-4 pb-8">
        {/* Hero Section */}
        <div 
          className="border-3 border-foreground bg-vis-green p-6 mb-6"
          style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 border-3 border-foreground bg-background flex items-center justify-center">
              <Leaf className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="font-mono text-xl uppercase font-bold">Endemic Plants</h2>
              <p className="font-mono text-sm opacity-80">VIS ISLAND GEOPARK</p>
            </div>
          </div>
          <p className="font-sans text-sm leading-relaxed">
            Discover the unique plant species that thrive on Vis Island's limestone terrain, 
            Mediterranean climate, and isolated ecosystem.
          </p>
        </div>

        {/* Plant Count */}
        <div 
          className="border-3 border-foreground bg-vis-yellow p-4 mb-6 flex items-center justify-between"
          style={{ boxShadow: "3px 3px 0 hsl(var(--foreground))" }}
        >
          <span className="font-mono uppercase font-bold">Species Listed</span>
          <span className="font-mono text-2xl font-bold">{endemicPlants.length}</span>
        </div>

        {/* Plants List */}
        <div className="space-y-4">
          {endemicPlants.map((plant, index) => {
            const IconComponent = plant.icon;
            return (
              <div
                key={index}
                className="border-3 border-foreground bg-card"
                style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
              >
                <div className={`${plant.color} p-3 border-b-3 border-foreground flex items-center gap-3`}>
                  <div className="w-10 h-10 border-2 border-foreground bg-background flex items-center justify-center">
                    <IconComponent className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-mono uppercase font-bold text-sm">{plant.name}</h3>
                    <p className="font-mono text-xs italic opacity-70">{plant.latinName}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-sans text-sm mb-3">{plant.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase bg-muted px-2 py-1 border-2 border-foreground">
                      {plant.habitat}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer decoration */}
        <div className="flex gap-2 mt-8 justify-center">
          <div className="w-4 h-4 bg-vis-green border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-blue border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-terracotta border-2 border-foreground" />
        </div>
      </main>
    </div>
  );
};

export default GeoparkFloraV3;
