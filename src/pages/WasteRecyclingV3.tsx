import AppHeader from '@/components/layout/AppHeader';
import { Trash2, Recycle, Calendar, MapPin, Leaf, AlertCircle } from 'lucide-react';

const WasteRecyclingV3 = () => {
  const schedule = [
    { day: 'Ponedjeljak', type: 'Miješani otpad', emoji: '🗑️', color: 'bg-muted' },
    { day: 'Srijeda', type: 'Plastika i metal', emoji: '♻️', color: 'bg-vis-yellow' },
    { day: 'Petak', type: 'Papir i karton', emoji: '📦', color: 'bg-vis-blue' },
    { day: 'Subota', type: 'Staklo', emoji: '🫙', color: 'bg-vis-green' },
  ];

  const locations = [
    { name: 'Reciklažno dvorište Vis', address: 'Ul. Vladimira Nazora 12', hours: 'Pon-Pet 8-16h' },
    { name: 'Zeleni otok - Riva', address: 'Riva Vis', hours: '24/7' },
    { name: 'Zeleni otok - Komiža', address: 'Riva Komiža', hours: '24/7' },
  ];

  const tips = [
    { emoji: '🧴', title: 'Plastika', desc: 'Isperite ambalažu prije bacanja' },
    { emoji: '📰', title: 'Papir', desc: 'Složite kutije da zauzmu manje mjesta' },
    { emoji: '🍾', title: 'Staklo', desc: 'Uklonite čepove prije recikliranja' },
    { emoji: '🔋', title: 'Baterije', desc: 'Odnesite u posebne spremnike' },
  ];

  return (
    <div className="min-h-screen bg-vis-green relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-vis-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-32 h-32 bg-vis-cyan/20 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Floating recycle icon */}
      <div className="absolute top-32 right-6 w-10 h-10 rounded-full bg-vis-yellow/60 flex items-center justify-center">
        <Recycle className="w-5 h-5 text-foreground" strokeWidth={2} />
      </div>

      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-card border-2 border-foreground flex items-center justify-center shadow-[3px_3px_0_hsl(var(--vis-yellow))]">
            <Trash2 className="w-6 h-6 text-vis-green" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Otpad i reciklaža</h1>
            <p className="text-sm opacity-80">Čuvajmo naš otok čistim</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-200px)] px-5 pt-6 pb-8">
        {/* Schedule */}
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-vis-green" />
            Raspored odvoza
          </h2>
          <div className="space-y-2">
            {schedule.map((item, i) => (
              <div 
                key={i}
                className="p-3 rounded-xl border-2 border-foreground flex items-center justify-between bg-card"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${item.color} border-2 border-foreground flex items-center justify-center text-lg`}>
                    {item.emoji}
                  </div>
                  <div>
                    <p className="font-semibold">{item.day}</p>
                    <p className="text-sm text-muted-foreground">{item.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recycling tips */}
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Leaf className="w-5 h-5 text-vis-green" />
            Kako pravilno reciklirati
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {tips.map((tip, i) => (
              <div key={i} className="p-3 rounded-xl border-2 border-foreground bg-vis-cyan/5" style={{ boxShadow: '2px 2px 0 hsl(var(--vis-cyan))' }}>
                <span className="text-2xl block mb-2">{tip.emoji}</span>
                <p className="font-semibold text-sm">{tip.title}</p>
                <p className="text-xs text-muted-foreground">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div>
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-vis-green" />
            Lokacije za odlaganje
          </h2>
          <div className="space-y-3">
            {locations.map((loc, i) => (
              <div 
                key={i}
                className="p-4 rounded-xl border-2 border-foreground bg-vis-green/5"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
              >
                <h3 className="font-bold mb-1">{loc.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {loc.address}
                </p>
                <p className="text-sm text-muted-foreground">🕐 {loc.hours}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info note */}
        <div className="mt-6 p-4 rounded-2xl border-2 border-vis-blue bg-vis-blue/5 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-vis-blue shrink-0 mt-0.5" />
          <p className="text-sm">
            <span className="font-bold">Glomazni otpad?</span> Nazovite komunalnu službu za besplatno preuzimanje na <span className="font-semibold">021 711 456</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WasteRecyclingV3;
