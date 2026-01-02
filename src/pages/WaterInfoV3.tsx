import AppHeader from '@/components/layout/AppHeader';
import { Droplets, Clock, Phone, AlertTriangle, MapPin, Wrench } from 'lucide-react';

const WaterInfoV3 = () => {
  const schedules = [
    { area: 'Vis centar', time: '00:00 - 24:00', status: 'normal' },
    { area: 'Kut', time: '06:00 - 22:00', status: 'normal' },
    { area: 'Komiža', time: '00:00 - 24:00', status: 'normal' },
    { area: 'Podšpilje', time: '06:00 - 20:00', status: 'limited' },
  ];

  const tips = [
    { emoji: '💧', text: 'Štedite vodu - koristite tuš umjesto kade' },
    { emoji: '🚿', text: 'Zatvarajte slavinu dok perete zube' },
    { emoji: '🌱', text: 'Zalijevajte vrt navečer kada je hladnije' },
    { emoji: '🔧', text: 'Prijavite curenje vode odmah' },
  ];

  return (
    <div className="min-h-screen bg-vis-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-vis-cyan/20 rounded-full blur-3xl" />
      <div className="absolute bottom-60 left-0 w-32 h-32 bg-vis-green/20 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Floating droplet */}
      <div className="absolute top-32 right-6 w-10 h-10 rounded-full bg-vis-cyan/60 flex items-center justify-center animate-pulse">
        <Droplets className="w-5 h-5 text-foreground" strokeWidth={2} />
      </div>

      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-primary-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-card border-2 border-foreground flex items-center justify-center shadow-[3px_3px_0_hsl(var(--vis-cyan))]">
            <Droplets className="w-6 h-6 text-vis-blue" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Sve o vodi</h1>
            <p className="text-sm opacity-80">Vodoopskrba otoka Visa</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-200px)] px-5 pt-6 pb-8">
        {/* Alert */}
        <div className="mb-6 p-4 rounded-2xl border-2 border-vis-yellow bg-vis-yellow/10 flex items-start gap-3" style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}>
          <AlertTriangle className="w-5 h-5 text-vis-yellow shrink-0 mt-0.5" strokeWidth={2.5} />
          <div>
            <p className="font-bold text-sm">Planirani radovi</p>
            <p className="text-sm text-muted-foreground">Prekid opskrbe u Visu, 15.01. od 10-14h</p>
          </div>
        </div>

        {/* Supply schedule */}
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-vis-blue" />
            Raspored opskrbe
          </h2>
          <div className="space-y-2">
            {schedules.map((item, i) => (
              <div 
                key={i}
                className={`p-3 rounded-xl border-2 border-foreground flex items-center justify-between ${item.status === 'limited' ? 'bg-vis-yellow/10' : 'bg-vis-cyan/5'}`}
                style={{ boxShadow: `3px 3px 0 ${item.status === 'limited' ? 'hsl(var(--vis-yellow))' : 'hsl(var(--vis-cyan))'}` }}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold">{item.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{item.time}</span>
                  {item.status === 'limited' && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-vis-yellow text-foreground font-semibold">Ograničeno</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-3">Savjeti za štednju 💡</h2>
          <div className="grid grid-cols-2 gap-3">
            {tips.map((tip, i) => (
              <div key={i} className="p-3 rounded-xl border-2 border-foreground bg-vis-green/5" style={{ boxShadow: '2px 2px 0 hsl(var(--vis-green))' }}>
                <span className="text-2xl block mb-2">{tip.emoji}</span>
                <p className="text-sm">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="p-4 rounded-2xl border-2 border-foreground bg-vis-blue/5" style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-vis-blue border-2 border-foreground flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold">Prijava kvara</h3>
              <p className="text-sm text-muted-foreground">Vodovod Vis d.o.o.</p>
            </div>
          </div>
          <a href="tel:+38521711123" className="block w-full py-3 rounded-xl border-2 border-foreground bg-vis-cyan text-center font-bold hover:translate-x-[2px] hover:translate-y-[2px] transition-all" style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}>
            📞 021 711 123
          </a>
        </div>
      </div>
    </div>
  );
};

export default WaterInfoV3;
