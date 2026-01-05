import { Link } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Info, Phone, Cross, Car, ExternalLink, Mountain, Anchor } from 'lucide-react';

interface InfoCard {
  emoji: string;
  title: string;
  description: string;
  link: string;
}

const essentialInfo: InfoCard[] = [
  { emoji: '📮', title: 'Pošta & Internet', description: 'Poštanski uredi i WiFi', link: '/posta' },
  { emoji: '🐾', title: 'Veterinarska', description: 'Veterinarske usluge', link: '/vet' },
  { emoji: '🏦', title: 'Banke', description: 'Vis centar, Komiža centar', link: '/banks' },
  { emoji: '🏥', title: 'Dom zdravlja', description: 'Zdravstvo i ljekarne', link: '/pharmacy' },
];

const safetyInfo: InfoCard[] = [
  { emoji: '🥾', title: 'Planinarenje', description: 'Staze i sigurnost', link: '/hiking' },
  { emoji: '⛵', title: 'Plovidba', description: 'More i vjetrovi', link: '/sailing' },
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
    <div className="min-h-screen bg-vis-cyan">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <h1 className="text-3xl font-extrabold uppercase">
          Visitor <span className="text-vis-yellow">info</span> 🌴
        </h1>
        <p className="opacity-80 mt-1">Dobrodošli na otok Vis!</p>
      </div>

      {/* Content card */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-180px)] px-4 pt-6 pb-8">
        
        {/* Welcome */}
        <section className="mb-6">
          <div 
            className="p-4 border-[3px] border-foreground"
            style={{ backgroundColor: 'hsl(var(--vis-yellow) / 0.1)', boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
          >
            <p className="text-lg font-bold mb-2 uppercase">🌊 Dobrodošli!</p>
            <p className="text-sm">
              Vis je najudaljeniji nastanjeni hrvatski otok, poznat po kristalno čistom moru, 
              netaknutoj prirodi i bogatoj povijesti. Ovdje ćete pronaći mir, autentičnu 
              mediteransku atmosferu i nezaboravne trenutke.
            </p>
          </div>
        </section>

        {/* Essential Info Grid */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Info className="w-5 h-5 text-vis-blue" />
            Korisne informacije
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {essentialInfo.map((item, i) => (
              <Link 
                key={i}
                to={item.link}
                className="p-3 border-[3px] border-foreground bg-card hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
              >
                <span className="text-2xl">{item.emoji}</span>
                <p className="font-bold text-sm mt-1 uppercase">{item.title}</p>
                <p className="text-xs text-muted-foreground font-mono">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Safety Section */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Mountain className="w-5 h-5 text-vis-green" />
            Aktivnosti i sigurnost
          </h2>
          <div className="flex gap-3">
            <Link 
              to="/hiking"
              className="flex-1 p-4 border-[3px] border-foreground bg-vis-yellow hover:translate-x-[2px] hover:translate-y-[2px] transition-transform flex flex-col items-center text-center"
              style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
            >
              <div className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center mb-2">
                <Mountain className="w-6 h-6 text-vis-green" />
              </div>
              <p className="font-bold text-sm uppercase">Planinarenje</p>
              <p className="text-xs opacity-80 font-mono mt-1">Staze i sigurnost</p>
            </Link>
            <Link 
              to="/sailing"
              className="flex-1 p-4 border-[3px] border-foreground bg-vis-blue text-primary-foreground hover:translate-x-[2px] hover:translate-y-[2px] transition-transform flex flex-col items-center text-center"
              style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
            >
              <div className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center mb-2">
                <Anchor className="w-6 h-6 text-vis-blue" />
              </div>
              <p className="font-bold text-sm uppercase">Plovidba</p>
              <p className="text-xs opacity-80 font-mono mt-1">More i vjetrovi</p>
            </Link>
          </div>
        </section>

        {/* Getting Around */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Car className="w-5 h-5 text-vis-green" />
            Prijevoz na otoku
          </h2>
          <div className="space-y-3">
            <div 
              className="flex items-center gap-3 p-3 border-[3px] border-foreground bg-card"
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
            >
              <div className="w-10 h-10 bg-vis-green border-[3px] border-foreground flex items-center justify-center">
                <span className="text-xl">🚌</span>
              </div>
              <div>
                <p className="font-bold text-sm uppercase">Autobus Vis - Komiža</p>
                <p className="text-xs text-muted-foreground font-mono">Redovne linije, vidi raspored</p>
              </div>
            </div>
            <div 
              className="flex items-center gap-3 p-3 border-[3px] border-foreground bg-card"
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
            >
              <div className="w-10 h-10 bg-vis-cyan border-[3px] border-foreground flex items-center justify-center">
                <span className="text-xl">🚗</span>
              </div>
              <div>
                <p className="font-bold text-sm uppercase">Rent-a-car</p>
                <p className="text-xs text-muted-foreground font-mono">Navigator, Rent Marko, Vis Rent</p>
              </div>
            </div>
            <div 
              className="flex items-center gap-3 p-3 border-[3px] border-foreground bg-card"
              style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
            >
              <div className="w-10 h-10 bg-vis-blue border-[3px] border-foreground flex items-center justify-center text-primary-foreground">
                <span className="text-xl">🛵</span>
              </div>
              <div>
                <p className="font-bold text-sm uppercase">Skuteri i bicikli</p>
                <p className="text-xs text-muted-foreground font-mono">Dostupni za najam u oba mjesta</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Numbers */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Phone className="w-5 h-5 text-destructive" />
            Hitni brojevi
          </h2>
          <div className="flex gap-3">
            {emergencyNumbers.map((item, i) => (
              <a 
                key={i}
                href={`tel:${item.number}`}
                className={`flex-1 p-3 border-[3px] border-foreground ${item.color} text-center hover:translate-y-[2px] transition-transform ${item.color === 'bg-vis-blue' || item.color === 'bg-destructive' ? 'text-primary-foreground' : 'text-foreground'}`}
                style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
              >
                <div className="flex justify-center mb-1">{item.icon}</div>
                <p className="text-xs font-medium uppercase">{item.label}</p>
                <p className="font-bold font-mono">{item.number}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Useful Links */}
        <section>
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
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
                className="flex items-center justify-between p-3 border-[3px] border-foreground bg-card hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
              >
                <span className="font-medium text-sm uppercase">{link.label}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}
          </div>
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

export default VisitorInfoV3;