import ImageHeader from '@/components/layout/ImageHeader';
import { Mountain, AlertTriangle, Phone } from 'lucide-react';

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
        
        {/* About Hiking on Vis */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Mountain className="w-5 h-5 text-vis-green" />
            Staze i razgledavanje
          </h2>
          <div 
            className="p-4 border-[3px] border-foreground bg-card"
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}
          >
            <p className="text-sm leading-relaxed mb-3">
              Otok Vis obiluje markiranim planinarskim stazama koje vas vode kroz netaknutu sredozemnu prirodu. 
              Od vrha Hum s pogledom na cijeli arhipelag, preko povijesnih vojnih tunela i skrivenih uvala, 
              do slikovitih primorskih šetnica — svaki put nudi jedinstveni doživljaj.
            </p>
            <p className="text-sm leading-relaxed">
              Posjetite vidikovce iznad Komiže, istražite ostatke antičkih naselja, 
              ili se spustite do nekih od najljepših plaža Jadrana. Lokalne turističke karte 
              dostupne su u info centrima u Visu i Komiži.
            </p>
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

        {/* Important Notices */}
        <section className="mb-6">
          <div 
            className="p-4 border-[3px] border-foreground bg-vis-terracotta/20"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-terracotta))' }}
          >
            <h3 className="font-bold uppercase text-sm mb-2 flex items-center gap-2">
              📵 Mobilni signal
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Na mnogim dijelovima otoka nema mobilnog signala. Prije polaska obavezno preuzmite 
              offline karte i obavijestite nekoga o planiranoj ruti i očekivanom vremenu povratka.
            </p>
            
            <h3 className="font-bold uppercase text-sm mb-2 flex items-center gap-2">
              🌿 Poštujte prirodu
            </h3>
            <p className="text-sm leading-relaxed">
              Vis je dom rijetkim i zaštićenim biljnim vrstama. Molimo vas da ne berete biljke, 
              ne ostavljate otpad i držite se označenih staza. Pomozite nam očuvati ovaj dragocjeni ekosustav.
            </p>
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
