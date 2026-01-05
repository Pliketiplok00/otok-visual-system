import ImageHeader from '@/components/layout/ImageHeader';
import { Recycle, Package, Leaf, MapPin, Calendar, Clock, Phone } from 'lucide-react';

interface WasteCategory {
  icon: React.ReactNode;
  label: string;
  color: string;
  shadowColor: string;
  items: string[];
}

const wasteCategories: WasteCategory[] = [
  {
    icon: <Package className="w-6 h-6" />,
    label: 'Papir i karton',
    color: 'bg-vis-blue',
    shadowColor: 'hsl(var(--vis-cyan))',
    items: ['Novine', 'Kartonske kutije', 'Uredski papir'],
  },
  {
    icon: <span className="text-2xl">🧴</span>,
    label: 'Plastika',
    color: 'bg-vis-yellow',
    shadowColor: 'hsl(var(--vis-green))',
    items: ['PET boce', 'Plastične vrećice', 'Ambalaža'],
  },
  {
    icon: <span className="text-2xl">🍾</span>,
    label: 'Staklo',
    color: 'bg-vis-terracotta',
    shadowColor: 'hsl(var(--vis-yellow))',
    items: ['Boce', 'Staklenke', 'Staklena ambalaža'],
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    label: 'Biootpad',
    color: 'bg-vis-cyan',
    shadowColor: 'hsl(var(--vis-blue))',
    items: ['Ostaci hrane', 'Vrtni otpad', 'Ljuske jaja'],
  },
];

const collectionSchedule = [
  { area: 'Vis - centar', days: 'Pon, Sri, Pet', time: '06:00 - 10:00' },
  { area: 'Vis - okolica', days: 'Uto, Čet', time: '07:00 - 12:00' },
  { area: 'Komiža', days: 'Pon, Sri, Pet', time: '06:00 - 11:00' },
];

const WasteRecyclingV3 = () => {
  // Using a placeholder - ideally would have a recycling-themed image
  const wasteImageUrl = "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=400&fit=crop";

  return (
    <div className="min-h-screen bg-vis-green">
      <ImageHeader
        image={wasteImageUrl}
        title="Smeće i reciklaža"
        subtitle="Sortiranje, raspored i lokacije"
        icon={<Recycle className="w-6 h-6 text-vis-green" strokeWidth={2.5} />}
        iconBg="bg-card"
        iconShadow="hsl(var(--vis-yellow))"
      />

      {/* Content card */}
      <div className="bg-card border-x-[3px] border-foreground min-h-[calc(100vh-240px)] px-4 pt-6 pb-8">
        
        {/* Waste Categories */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Recycle className="w-5 h-5 text-vis-green" />
            Kako sortirati?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {wasteCategories.map((cat, i) => (
              <div 
                key={i}
                className="p-3 border-[3px] border-foreground bg-card"
                style={{ boxShadow: `4px 4px 0 ${cat.shadowColor}` }}
              >
                <div className={`w-10 h-10 ${cat.color} border-[3px] border-foreground flex items-center justify-center mb-2 ${cat.color === 'bg-vis-blue' ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {cat.icon}
                </div>
                <p className="font-bold text-sm uppercase">{cat.label}</p>
                <ul className="text-xs text-muted-foreground mt-1 space-y-0.5 font-mono">
                  {cat.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Collection Schedule */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Calendar className="w-5 h-5 text-vis-blue" />
            Raspored odvoza
          </h2>
          <div className="space-y-3">
            {collectionSchedule.map((item, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 p-3 border-[3px] border-foreground bg-card"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
              >
                <div className="w-10 h-10 bg-vis-cyan border-[3px] border-foreground flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm uppercase">{item.area}</p>
                  <p className="text-xs text-muted-foreground font-mono">{item.days}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recycling Center */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <MapPin className="w-5 h-5 text-vis-yellow" />
            Reciklažno dvorište
          </h2>
          <div className="space-y-3">
            <div 
              className="p-4 border-[3px] border-foreground"
              style={{ backgroundColor: 'hsl(var(--vis-yellow) / 0.1)', boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
            >
              <p className="font-bold uppercase">Reciklažno dvorište Vis</p>
              <p className="text-sm text-muted-foreground mt-1">
                Put Mula 1, 21480 Vis
              </p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1 font-mono">
                <Clock className="w-4 h-4" />
                <span>Pon-Pet: 07:00 - 15:00, Sub: 08:00 - 12:00</span>
              </div>
              <p className="text-sm mt-3">
                Ovdje možete besplatno odložiti: glomazni otpad, elektronički otpad, 
                baterije, ulja, boje i lakove.
              </p>
            </div>
            <div 
              className="p-4 border-[3px] border-foreground"
              style={{ backgroundColor: 'hsl(var(--vis-cyan) / 0.1)', boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
            >
              <p className="font-bold uppercase">Reciklažno dvorište Komiža</p>
              <p className="text-sm text-muted-foreground mt-1">
                Ribarska ulica bb, 21485 Komiža
              </p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1 font-mono">
                <Clock className="w-4 h-4" />
                <span>Pon-Pet: 08:00 - 14:00, Sub: 08:00 - 12:00</span>
              </div>
              <p className="text-sm mt-3">
                Ovdje možete besplatno odložiti: glomazni otpad, elektronički otpad, 
                baterije, ulja, boje i lakove.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Phone className="w-5 h-5 text-vis-blue" />
            Kontakt
          </h2>
          <a 
            href="tel:+385021711100"
            className="flex items-center gap-4 p-4 border-[3px] border-foreground bg-card hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
          >
            <div className="w-12 h-12 bg-vis-green border-[3px] border-foreground flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold uppercase">Čistoća Vis</p>
              <p className="text-vis-green font-semibold font-mono">021 711 100</p>
            </div>
          </a>
        </section>

        {/* Decorative blocks */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 bg-vis-blue border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-cyan border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-green border-2 border-foreground" />
          <div className="w-3 h-3 bg-vis-yellow border-2 border-foreground" />
        </div>
      </div>
    </div>
  );
};

export default WasteRecyclingV3;
