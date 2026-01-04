import ImageHeader from '@/components/layout/ImageHeader';
import { ThermometerSun, AlertTriangle, Phone, Clock, MapPin, Droplets } from 'lucide-react';

const WaterInfoV3 = () => {
  // Using a placeholder - ideally would have a water-themed image
  const waterImageUrl = "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=400&fit=crop";

  return (
    <div className="min-h-screen bg-vis-blue">
      <ImageHeader
        image={waterImageUrl}
        title="Sve o vodi"
        subtitle="Kvaliteta, dostupnost i savjeti"
        icon={<Droplets className="w-6 h-6 text-vis-blue" strokeWidth={2.5} />}
        iconBg="bg-card"
        iconShadow="hsl(var(--vis-cyan))"
      />

      {/* Content card */}
      <div className="bg-card border-x-[3px] border-foreground min-h-[calc(100vh-240px)] px-4 pt-6 pb-8">
        
        {/* Water Rights Section */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <AlertTriangle className="w-5 h-5 text-vis-yellow" />
            Aktualno
          </h2>
          <div 
            className="p-4 border-[3px] border-foreground bg-vis-yellow/20"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-orange))' }}
          >
            <p className="font-bold uppercase mb-2">Borba za samostalno vodouslužno područje</p>
            <p className="text-sm">
              Voda je dio identiteta Visa još od antike. U novije vrijeme, pitanje upravljanja vodom postalo je i političko pitanje: nacionalne reforme koje spajaju male vodovode u veće sustave potaknule su otpor na Visu. Lokalna kampanja "Plan 42" traži da Vis ostane samostalno vodouslužno područje, uz argument da otok ima specifične uvjete, vlastite izvore i potrebu za brzom lokalnom reakcijom u krizama (suše, havarije).
            </p>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 uppercase">💡 Savjeti za uštedu</h2>
          <div className="space-y-3">
            {[
              { emoji: '🚿', tip: 'Tuširajte se kraće - svaka minuta štedi 10L vode', bg: 'bg-vis-cyan/15' },
              { emoji: '🚰', tip: 'Zatvarajte slavinu dok perete zube', bg: 'bg-vis-green/15' },
              { emoji: '🌿', tip: 'Zalijevajte vrt ujutro ili navečer', bg: 'bg-vis-yellow/15' },
              { emoji: '🔧', tip: 'Prijavite curenje - jedna kap = 20L dnevno', bg: 'bg-vis-blue/15' },
            ].map((item, i) => (
              <div 
                key={i}
                className={`flex items-center gap-3 p-3 border-[3px] border-foreground ${item.bg}`}
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
              >
                <span className="text-xl">{item.emoji}</span>
                <p className="text-sm font-medium">{item.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule Section */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Clock className="w-5 h-5 text-vis-yellow" />
            Planirani radovi
          </h2>
          <div 
            className="p-4 border-[3px] border-foreground bg-vis-yellow/10"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
          >
            <p className="font-bold uppercase">Nema planiranih radova</p>
            <p className="text-sm text-muted-foreground mt-1">
              Trenutno nema najavljenih prekida u opskrbi vodom.
            </p>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            Hitni kontakt
          </h2>
          <a 
            href="tel:+385021711000"
            className="flex items-center gap-4 p-4 border-[3px] border-foreground bg-card hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
          >
            <div className="w-12 h-12 bg-vis-blue border-[3px] border-foreground flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-bold uppercase">Vodovod Vis</p>
              <p className="text-vis-blue font-semibold font-mono">021 711 000</p>
            </div>
          </a>
        </section>

        {/* Location */}
        <section>
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <MapPin className="w-5 h-5 text-vis-green" />
            Lokacija ureda
          </h2>
          <div 
            className="p-4 border-[3px] border-foreground bg-vis-green/10"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-yellow))' }}
          >
            <p className="font-bold uppercase">Komunalno poduzeće Vis</p>
            <p className="text-sm text-muted-foreground mt-1">
              Obala sv. Jurja 36, 21480 Vis
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              Radno vrijeme: Pon-Pet 07:00 - 15:00
            </p>
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

export default WaterInfoV3;
