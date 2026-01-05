import ImageHeader from '@/components/layout/ImageHeader';
import { Mountain, AlertTriangle, Phone } from 'lucide-react';

const hikingTrails = [
  { name: 'Hum (587m)', difficulty: 'Srednje', duration: '2-3 sata', description: 'Najviši vrh otoka, spektakularan pogled' },
  { name: 'Tito\'s Cave', difficulty: 'Lagano', duration: '1 sat', description: 'Povijesna špilja iz II. sv. rata' },
  { name: 'Stiniva uvala', difficulty: 'Srednje', duration: '30 min', description: 'Strmi spust do plaže' },
  { name: 'Komiža - Vis', difficulty: 'Teže', duration: '4-5 sati', description: 'Priobalna staza preko brda' },
];

const safetyTips = [
  { icon: '💧', tip: 'Nosite najmanje 2L vode po osobi' },
  { icon: '🧢', tip: 'Zaštitite se od sunca - kapa i krema' },
  { icon: '👟', tip: 'Nosite čvrstu planinsku obuću' },
  { icon: '📱', tip: 'Napunite mobitel i spremite offline karte' },
  { icon: '🕐', tip: 'Krenite rano ujutro, izbjegavajte podnevnu vrućinu' },
  { icon: '👥', tip: 'Ne idite sami - obavijestite nekoga o ruti' },
];

const emergencyContacts = [
  { label: 'GSS - Gorska služba spašavanja', number: '112', color: 'bg-destructive' },
  { label: 'Hitna pomoć', number: '194', color: 'bg-vis-blue' },
  { label: 'Policija', number: '192', color: 'bg-vis-cyan' },
];

const HikingSafetyV3 = () => {
  const hikingImageUrl = "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=400&fit=crop";

  return (
    <div className="min-h-screen bg-vis-green">
      <ImageHeader
        image={hikingImageUrl}
        title="Planinarenje"
        subtitle="Staze i sigurnost na otoku"
        icon={<Mountain className="w-6 h-6 text-vis-green" strokeWidth={2.5} />}
        iconBg="bg-card"
        iconShadow="hsl(var(--vis-yellow))"
        backPath="/visitor-info"
      />

      {/* Content card */}
      <div className="bg-card border-x-[3px] border-foreground min-h-[calc(100vh-240px)] px-4 pt-6 pb-8">
        
        {/* Hiking Trails */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Mountain className="w-5 h-5 text-vis-green" />
            Planinarske staze
          </h2>
          <div className="space-y-3">
            {hikingTrails.map((trail, i) => (
              <div 
                key={i}
                className="p-3 border-[3px] border-foreground bg-card"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold uppercase">{trail.name}</h3>
                  <span className={`px-2 py-0.5 text-xs font-bold border-2 border-foreground ${
                    trail.difficulty === 'Lagano' ? 'bg-vis-green' : 
                    trail.difficulty === 'Srednje' ? 'bg-vis-yellow' : 'bg-vis-terracotta'
                  }`}>
                    {trail.difficulty}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{trail.description}</p>
                <p className="text-xs font-mono mt-1">🕐 {trail.duration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Tips */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <AlertTriangle className="w-5 h-5 text-vis-yellow" />
            Sigurnosni savjeti
          </h2>
          <div 
            className="p-4 border-[3px] border-foreground"
            style={{ backgroundColor: 'hsl(var(--vis-yellow) / 0.1)', boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
          >
            <ul className="space-y-2">
              {safetyTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span>{tip.icon}</span>
                  <span>{tip.tip}</span>
                </li>
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
                href={`tel:${contact.number}`}
                className={`flex items-center justify-between p-3 border-[3px] border-foreground ${contact.color} hover:translate-x-[2px] hover:translate-y-[2px] transition-transform ${contact.color === 'bg-destructive' || contact.color === 'bg-vis-blue' ? 'text-primary-foreground' : 'text-foreground'}`}
                style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
              >
                <span className="font-bold text-sm uppercase">{contact.label}</span>
                <span className="font-mono font-bold text-lg">{contact.number}</span>
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

export default HikingSafetyV3;
