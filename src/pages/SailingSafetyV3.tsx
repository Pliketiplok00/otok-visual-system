import ImageHeader from '@/components/layout/ImageHeader';
import { Anchor, AlertTriangle, Phone, Wind, Compass, Waves } from 'lucide-react';

const windTypes = [
  { 
    name: 'Bura', 
    direction: 'NE', 
    description: 'Jak, hladan vjetar s kopna. Može biti opasan, stvara kratke oštre valove.',
    danger: 'high',
    tip: 'Izbjegavajte plovidbu, posebno u kanalima'
  },
  { 
    name: 'Jugo', 
    direction: 'SE', 
    description: 'Topao, vlažan vjetar s mora. Donosi kišu i velike valove.',
    danger: 'medium',
    tip: 'Pratite prognozu, može trajati danima'
  },
  { 
    name: 'Maestral', 
    direction: 'NW', 
    description: 'Ljetni popodnevni vjetar. Ugodan za jedrenje.',
    danger: 'low',
    tip: 'Idealan za rekreativno jedrenje'
  },
  { 
    name: 'Tramontana', 
    direction: 'N', 
    description: 'Sjeverac, hladan i suh. Može biti jak.',
    danger: 'medium',
    tip: 'Oprez pri plovidbi otvorenim morem'
  },
];

const safetyEquipment = [
  '🦺 Prsluk za spašavanje za svakog putnika',
  '📻 VHF radio (kanal 16 za hitne slučajeve)',
  '🔥 Signalne rakete i dimne signale',
  '⚓ Rezervno sidro i uže',
  '🔦 Vodootporna svjetiljka',
  '🧰 Komplet prve pomoći',
  '📱 Vodootporna torbica za mobitel',
];

const emergencyContacts = [
  { label: 'Lučka kapetanija Split', number: '021 362 692', color: 'bg-vis-blue' },
  { label: 'MRCC Rijeka (SAR)', number: '195', color: 'bg-destructive' },
  { label: 'VHF kanal 16', number: 'Hitni poziv', color: 'bg-vis-cyan' },
  { label: 'Policija', number: '192', color: 'bg-vis-green' },
];

const marinas = [
  { name: 'ACI Marina Vis', vhf: 'Kanal 17', capacity: '85 vezova' },
  { name: 'Luka Komiža', vhf: 'Kanal 17', capacity: 'Sidrište + vez' },
];

const SailingSafetyV3 = () => {
  const sailingImageUrl = "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=800&h=400&fit=crop";

  return (
    <div className="min-h-screen bg-vis-blue">
      <ImageHeader
        image={sailingImageUrl}
        title="Plovidba"
        subtitle="Sigurnost na moru i vjetrovi"
        icon={<Anchor className="w-6 h-6 text-vis-blue" strokeWidth={2.5} />}
        iconBg="bg-card"
        iconShadow="hsl(var(--vis-cyan))"
        backPath="/visitor-info"
      />

      {/* Content card */}
      <div className="bg-card border-x-[3px] border-foreground min-h-[calc(100vh-240px)] px-4 pt-6 pb-8">
        
        {/* Wind Overview */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Wind className="w-5 h-5 text-vis-blue" />
            Vjetrovi Jadrana
          </h2>
          <div className="space-y-3">
            {windTypes.map((wind, i) => (
              <div 
                key={i}
                className="p-3 border-[3px] border-foreground bg-card"
                style={{ boxShadow: `3px 3px 0 ${
                  wind.danger === 'high' ? 'hsl(var(--destructive))' : 
                  wind.danger === 'medium' ? 'hsl(var(--vis-yellow))' : 'hsl(var(--vis-green))'
                }` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 border-[3px] border-foreground flex items-center justify-center ${
                      wind.danger === 'high' ? 'bg-destructive text-primary-foreground' : 
                      wind.danger === 'medium' ? 'bg-vis-yellow' : 'bg-vis-green'
                    }`}>
                      <Compass className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold uppercase">{wind.name}</h3>
                  </div>
                  <span className="font-mono font-bold text-sm">{wind.direction}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{wind.description}</p>
                <p className="text-xs font-medium mt-1 text-vis-blue">💡 {wind.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Marinas */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Anchor className="w-5 h-5 text-vis-cyan" />
            Marine i luke
          </h2>
          <div className="space-y-2">
            {marinas.map((marina, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 p-3 border-[3px] border-foreground bg-card"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
              >
                <div className="w-10 h-10 bg-vis-cyan border-[3px] border-foreground flex items-center justify-center shrink-0">
                  <Waves className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm uppercase">{marina.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{marina.vhf} • {marina.capacity}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Equipment */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <AlertTriangle className="w-5 h-5 text-vis-yellow" />
            Obvezna oprema
          </h2>
          <div 
            className="p-4 border-[3px] border-foreground"
            style={{ backgroundColor: 'hsl(var(--vis-yellow) / 0.1)', boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
          >
            <ul className="space-y-2">
              {safetyEquipment.map((item, i) => (
                <li key={i} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section>
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Phone className="w-5 h-5 text-destructive" />
            Hitni kontakti
          </h2>
          <div className="space-y-2">
            {emergencyContacts.map((contact, i) => (
              <a 
                key={i}
                href={contact.number.length <= 3 ? `tel:${contact.number}` : `tel:${contact.number.replace(/\s/g, '')}`}
                className={`flex items-center justify-between p-3 border-[3px] border-foreground ${contact.color} hover:translate-x-[2px] hover:translate-y-[2px] transition-transform ${contact.color === 'bg-destructive' || contact.color === 'bg-vis-blue' ? 'text-primary-foreground' : 'text-foreground'}`}
                style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
              >
                <span className="font-bold text-sm uppercase">{contact.label}</span>
                <span className="font-mono font-bold">{contact.number}</span>
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

export default SailingSafetyV3;
