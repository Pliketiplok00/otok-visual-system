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
        
        {/* Water Quality Section */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <ThermometerSun className="w-5 h-5 text-vis-blue" />
            Kvaliteta vode
          </h2>
          <div 
            className="p-4 border-[3px] border-foreground bg-vis-cyan/10"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-vis-green border-[3px] border-foreground flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <div>
                <p className="font-bold uppercase">Voda je pitka</p>
                <p className="text-sm text-muted-foreground font-mono">Zadnja provjera: danas</p>
              </div>
            </div>
            <p className="text-sm">
              Voda na otoku Visu dolazi iz prirodnih izvora i redovito se kontrolira. 
              Sigurna je za piće iz slavine u cijelom mjestu.
            </p>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 uppercase">💡 Savjeti za uštedu</h2>
          <div className="space-y-3">
            {[
              { emoji: '🚿', tip: 'Tuširajte se kraće - svaka minuta štedi 10L vode' },
              { emoji: '🚰', tip: 'Zatvarajte slavinu dok perete zube' },
              { emoji: '🌿', tip: 'Zalijevajte vrt ujutro ili navečer' },
              { emoji: '🔧', tip: 'Prijavite curenje - jedna kap = 20L dnevno' },
            ].map((item, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 p-3 border-[3px] border-foreground bg-card"
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
