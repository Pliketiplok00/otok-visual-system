import ImageHeader from '@/components/layout/ImageHeader';
import { ThermometerSun, AlertTriangle, Phone, Clock, MapPin, Droplets, ShowerHead, Droplet, Flower2, Wrench } from 'lucide-react';
import waterSpringImg from '@/assets/water-spring.jpg';

const WaterInfoV3 = () => {
  // Using a placeholder - ideally would have a water-themed image
  const waterImageUrl = "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=400&fit=crop";

  return (
    <div className="min-h-screen bg-vis-blue">
      <ImageHeader
        image={waterImageUrl}
        title="Voda otoka Visa"
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

        {/* Tips Section - 2x2 grid like home page */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 uppercase">💡 Savjeti za uštedu</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: ShowerHead, tip: 'Tuširajte se kraće', color: 'bg-vis-cyan', shadow: 'hsl(var(--vis-blue))' },
              { icon: Droplet, tip: 'Zatvarajte slavinu', color: 'bg-vis-green', shadow: 'hsl(var(--vis-yellow))' },
              { icon: Flower2, tip: 'Zalijevajte navečer', color: 'bg-vis-yellow', shadow: 'hsl(var(--vis-orange))' },
              { icon: Wrench, tip: 'Prijavite curenje', color: 'bg-vis-coral', shadow: 'hsl(var(--vis-violet))' },
            ].map((item, i) => (
              <div 
                key={i}
                className={`${item.color} flex flex-col items-center text-center gap-2 p-4 border-[3px] border-foreground`}
                style={{ boxShadow: `4px 4px 0 ${item.shadow}` }}
              >
                <item.icon className="w-8 h-8" strokeWidth={2} />
                <p className="text-sm font-bold uppercase">{item.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Water Sources Section */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Droplets className="w-5 h-5 text-vis-cyan" />
            Izvori i pitka voda
          </h2>
          <div 
            className="border-[3px] border-foreground bg-card overflow-hidden"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
          >
            <div className="aspect-[16/9] overflow-hidden border-b-[3px] border-foreground">
              <img 
                src={waterSpringImg} 
                alt="Izvor pitke vode"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="font-bold uppercase mb-2">Gdje je "život" otoka</p>
              <p className="text-sm">
                Vis je među rijetkim jadranskim otocima s vlastitim značajnijim podzemnim zalihama pitke vode. Voda dolazi iz krškog sustava i crpi se iz izvorišta i bušotina u unutrašnjosti otoka. Lokalna infrastruktura (vodovodna mreža) povezuje naselja, a kvaliteta se redovito kontrolira. Zbog ograničenih zaliha, štednja je važna posebno od lipnja do rujna.
              </p>
            </div>
          </div>
        </section>

        {/* Water Facts Section */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Droplets className="w-5 h-5 text-vis-green" />
            Vodene zanimljivosti Visa
          </h2>
          <div 
            className="p-4 border-[3px] border-foreground bg-vis-green/10"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
          >
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-lg">💧</span>
                <p className="text-sm"><span className="font-bold">Rijetkost u Jadranu:</span> Vis se često navodi kao otok s vlastitim sustavom pitke vode bez "pupčane vrpce" prema kopnu.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-lg">🏺</span>
                <p className="text-sm"><span className="font-bold">Štednja je dio kulture:</span> Gustirne i skupljanje kišnice nisu romantika — nego povijesna tehnologija preživljavanja.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-lg">⚖️</span>
                <p className="text-sm"><span className="font-bold">Voda = upravljanje:</span> Na otoku, voda nije samo komunalna usluga; ona je pitanje otpornosti i samoodređenja.</p>
              </div>
            </div>
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
