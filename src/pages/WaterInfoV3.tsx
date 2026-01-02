import AppHeader from '@/components/layout/AppHeader';
import { Droplets, Waves, ThermometerSun, AlertTriangle, Phone, Clock, MapPin } from 'lucide-react';

const WaterInfoV3 = () => {
  return (
    <div className="min-h-screen bg-vis-blue relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-vis-cyan/30 rounded-full blur-3xl" />
      <div className="absolute top-40 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Floating icons */}
      <Droplets className="absolute top-24 right-8 w-6 h-6 text-vis-cyan/40 rotate-12" />
      <Waves className="absolute top-36 right-20 w-5 h-5 text-primary-foreground/30 -rotate-6" />
      
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-primary-foreground">
        <h1 className="text-3xl font-extrabold">
          Sve o <span className="text-vis-cyan">vodi</span> 💧
        </h1>
        <p className="opacity-80 mt-1">Kvaliteta, dostupnost i savjeti</p>
      </div>

      {/* Content card */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-180px)] px-4 pt-6 pb-8">
        
        {/* Water Quality Section */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <ThermometerSun className="w-5 h-5 text-vis-blue" />
            Kvaliteta vode
          </h2>
          <div 
            className="p-4 rounded-2xl border-2 border-foreground bg-vis-cyan/10"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-vis-green border-2 border-foreground flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <div>
                <p className="font-bold">Voda je pitka</p>
                <p className="text-sm text-muted-foreground">Zadnja provjera: danas</p>
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
          <h2 className="font-bold text-lg mb-3">💡 Savjeti za uštedu</h2>
          <div className="space-y-3">
            {[
              { emoji: '🚿', tip: 'Tuširajte se kraće - svaka minuta štedi 10L vode' },
              { emoji: '🚰', tip: 'Zatvarajte slavinu dok perete zube' },
              { emoji: '🌿', tip: 'Zalijevajte vrt ujutro ili navečer' },
              { emoji: '🔧', tip: 'Prijavite curenje - jedna kap = 20L dnevno' },
            ].map((item, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl border-2 border-foreground bg-card"
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
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-vis-yellow" />
            Planirani radovi
          </h2>
          <div 
            className="p-4 rounded-2xl border-2 border-foreground bg-vis-yellow/10"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
          >
            <p className="font-bold">Nema planiranih radova</p>
            <p className="text-sm text-muted-foreground mt-1">
              Trenutno nema najavljenih prekida u opskrbi vodom.
            </p>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            Hitni kontakt
          </h2>
          <a 
            href="tel:+385021711000"
            className="flex items-center gap-4 p-4 rounded-2xl border-2 border-foreground bg-card hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
          >
            <div className="w-12 h-12 rounded-xl bg-vis-blue border-2 border-foreground flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-bold">Vodovod Vis</p>
              <p className="text-vis-blue font-semibold">021 711 000</p>
            </div>
          </a>
        </section>

        {/* Location */}
        <section>
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-vis-green" />
            Lokacija ureda
          </h2>
          <div 
            className="p-4 rounded-2xl border-2 border-foreground bg-vis-green/10"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-yellow))' }}
          >
            <p className="font-bold">Komunalno poduzeće Vis</p>
            <p className="text-sm text-muted-foreground mt-1">
              Obala sv. Jurja 36, 21480 Vis
            </p>
            <p className="text-sm text-muted-foreground">
              Radno vrijeme: Pon-Pet 07:00 - 15:00
            </p>
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

export default WaterInfoV3;
