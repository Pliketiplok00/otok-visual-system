import AppHeader from '@/components/layout/AppHeader';
import { MapPin, Sun, Camera, Info, Phone, CreditCard, Cross, Utensils, Waves, Car, ExternalLink } from 'lucide-react';

interface InfoCard {
  emoji: string;
  title: string;
  description: string;
  link?: string;
}

const essentialInfo: InfoCard[] = [
  { emoji: '🏖️', title: 'Plaže', description: 'Stiniva, Srebrna, Zaglav, Smokova' },
  { emoji: '🍽️', title: 'Restorani', description: '20+ lokalnih konoba i restorana' },
  { emoji: '🏧', title: 'Bankomati', description: 'Vis centar, Komiža centar' },
  { emoji: '💊', title: 'Ljekarna', description: 'Vis: 021 711 080' },
];

const emergencyNumbers = [
  { icon: <Cross className="w-5 h-5" />, label: 'Hitna pomoć', number: '194', color: 'bg-destructive' },
  { icon: <Phone className="w-5 h-5" />, label: 'Policija', number: '192', color: 'bg-vis-blue' },
  { icon: <span className="text-lg">🚒</span>, label: 'Vatrogasci', number: '193', color: 'bg-vis-yellow' },
];

const usefulLinks = [
  { label: 'TZ Grada Visa', url: 'https://www.tz-vis.hr' },
  { label: 'Jadrolinija - Trajekti', url: 'https://www.jadrolinija.hr' },
  { label: 'Vremenska prognoza', url: 'https://meteo.hr' },
];

const VisitorInfoV3 = () => {
  return (
    <div className="min-h-screen bg-vis-cyan relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-vis-yellow/30 rounded-full blur-3xl" />
      <div className="absolute top-40 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Floating icons */}
      <Sun className="absolute top-24 right-8 w-6 h-6 text-vis-yellow/60 rotate-12" />
      <Camera className="absolute top-36 right-20 w-5 h-5 text-primary-foreground/30 -rotate-6" />
      
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <h1 className="text-3xl font-extrabold">
          Visitor <span className="text-vis-yellow">info</span> 🌴
        </h1>
        <p className="opacity-80 mt-1">Dobrodošli na otok Vis!</p>
      </div>

      {/* Content card */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-180px)] px-4 pt-6 pb-8">
        
        {/* Welcome */}
        <section className="mb-6">
          <div 
            className="p-4 rounded-2xl border-2 border-foreground bg-vis-yellow/10"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
          >
            <p className="text-lg font-bold mb-2">🌊 Dobrodošli!</p>
            <p className="text-sm">
              Vis je najudaljeniji nastanjeni hrvatski otok, poznat po kristalno čistom moru, 
              netaknutoj prirodi i bogatoj povijesti. Ovdje ćete pronaći mir, autentičnu 
              mediteransku atmosferu i nezaboravne trenutke.
            </p>
          </div>
        </section>

        {/* Essential Info Grid */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-vis-blue" />
            Korisne informacije
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {essentialInfo.map((item, i) => (
              <div 
                key={i}
                className="p-3 rounded-2xl border-2 border-foreground bg-card"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
              >
                <span className="text-2xl">{item.emoji}</span>
                <p className="font-bold text-sm mt-1">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Around */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Car className="w-5 h-5 text-vis-green" />
            Prijevoz na otoku
          </h2>
          <div className="space-y-3">
            <div 
              className="flex items-center gap-3 p-3 rounded-xl border-2 border-foreground bg-card"
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
            >
              <div className="w-10 h-10 rounded-xl bg-vis-green border-2 border-foreground flex items-center justify-center">
                <span className="text-xl">🚌</span>
              </div>
              <div>
                <p className="font-bold text-sm">Autobus Vis - Komiža</p>
                <p className="text-xs text-muted-foreground">Redovne linije, vidi raspored</p>
              </div>
            </div>
            <div 
              className="flex items-center gap-3 p-3 rounded-xl border-2 border-foreground bg-card"
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
            >
              <div className="w-10 h-10 rounded-xl bg-vis-cyan border-2 border-foreground flex items-center justify-center">
                <span className="text-xl">🚗</span>
              </div>
              <div>
                <p className="font-bold text-sm">Rent-a-car</p>
                <p className="text-xs text-muted-foreground">Navigator, Rent Marko, Vis Rent</p>
              </div>
            </div>
            <div 
              className="flex items-center gap-3 p-3 rounded-xl border-2 border-foreground bg-card"
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
            >
              <div className="w-10 h-10 rounded-xl bg-vis-blue border-2 border-foreground flex items-center justify-center text-primary-foreground">
                <span className="text-xl">🛵</span>
              </div>
              <div>
                <p className="font-bold text-sm">Skuteri i bicikli</p>
                <p className="text-xs text-muted-foreground">Dostupni za najam u oba mjesta</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Numbers */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Phone className="w-5 h-5 text-destructive" />
            Hitni brojevi
          </h2>
          <div className="flex gap-3">
            {emergencyNumbers.map((item, i) => (
              <a 
                key={i}
                href={`tel:${item.number}`}
                className={`flex-1 p-3 rounded-xl border-2 border-foreground ${item.color} text-center hover:translate-y-[2px] transition-transform ${item.color === 'bg-vis-blue' || item.color === 'bg-destructive' ? 'text-primary-foreground' : 'text-foreground'}`}
                style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
              >
                <div className="flex justify-center mb-1">{item.icon}</div>
                <p className="text-xs font-medium">{item.label}</p>
                <p className="font-bold">{item.number}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Useful Links */}
        <section>
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-vis-cyan" />
            Korisni linkovi
          </h2>
          <div className="space-y-2">
            {usefulLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border-2 border-foreground bg-card hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
              >
                <span className="font-medium text-sm">{link.label}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}
          </div>
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

export default VisitorInfoV3;
