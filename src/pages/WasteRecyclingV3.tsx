import AppHeader from '@/components/layout/AppHeader';
import { Recycle, Trash2, Package, Leaf, MapPin, Calendar, Clock, Phone } from 'lucide-react';

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
    color: 'bg-vis-green',
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
  return (
    <div className="min-h-screen bg-vis-green relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-vis-yellow/30 rounded-full blur-3xl" />
      <div className="absolute top-40 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Floating icons */}
      <Recycle className="absolute top-24 right-8 w-6 h-6 text-vis-yellow/50 rotate-12" />
      <Trash2 className="absolute top-36 right-20 w-5 h-5 text-primary-foreground/30 -rotate-6" />
      
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <h1 className="text-3xl font-extrabold">
          Smeće i <span className="text-vis-yellow">reciklaža</span> ♻️
        </h1>
        <p className="opacity-80 mt-1">Sortiranje, raspored i lokacije</p>
      </div>

      {/* Content card */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-180px)] px-4 pt-6 pb-8">
        
        {/* Waste Categories */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Recycle className="w-5 h-5 text-vis-green" />
            Kako sortirati?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {wasteCategories.map((cat, i) => (
              <div 
                key={i}
                className="p-3 rounded-2xl border-2 border-foreground bg-card"
                style={{ boxShadow: `4px 4px 0 ${cat.shadowColor}` }}
              >
                <div className={`w-10 h-10 rounded-xl ${cat.color} border-2 border-foreground flex items-center justify-center mb-2 ${cat.color === 'bg-vis-blue' ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {cat.icon}
                </div>
                <p className="font-bold text-sm">{cat.label}</p>
                <ul className="text-xs text-muted-foreground mt-1 space-y-0.5">
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
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-vis-blue" />
            Raspored odvoza
          </h2>
          <div className="space-y-3">
            {collectionSchedule.map((item, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl border-2 border-foreground bg-card"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
              >
                <div className="w-10 h-10 rounded-xl bg-vis-cyan border-2 border-foreground flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm">{item.area}</p>
                  <p className="text-xs text-muted-foreground">{item.days}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
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
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-vis-yellow" />
            Reciklažno dvorište
          </h2>
          <div 
            className="p-4 rounded-2xl border-2 border-foreground bg-vis-yellow/10"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
          >
            <p className="font-bold">Reciklažno dvorište Vis</p>
            <p className="text-sm text-muted-foreground mt-1">
              Put Mula 1, 21480 Vis
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <Clock className="w-4 h-4" />
              <span>Pon-Pet: 07:00 - 15:00, Sub: 08:00 - 12:00</span>
            </div>
            <p className="text-sm mt-3">
              Ovdje možete besplatno odložiti: glomazni otpad, elektronički otpad, 
              baterije, ulja, boje i lakove.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Phone className="w-5 h-5 text-vis-blue" />
            Kontakt
          </h2>
          <a 
            href="tel:+385021711100"
            className="flex items-center gap-4 p-4 rounded-2xl border-2 border-foreground bg-card hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
          >
            <div className="w-12 h-12 rounded-xl bg-vis-green border-2 border-foreground flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold">Čistoća Vis</p>
              <p className="text-vis-green font-semibold">021 711 100</p>
            </div>
          </a>
        </section>

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-vis-blue" />
          <div className="w-2 h-2 rounded-full bg-vis-cyan" />
          <div className="w-2 h-2 rounded-full bg-vis-green" />
          <div className="w-2 h-2 rounded-full bg-vis-yellow" />
        </div>
      </div>
    </div>
  );
};

export default WasteRecyclingV3;
