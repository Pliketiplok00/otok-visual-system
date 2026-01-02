import AppHeader from '@/components/layout/AppHeader';
import { Info, MapPin, Compass, UtensilsCrossed, Bed, Camera, Anchor, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface InfoSection {
  icon: LucideIcon;
  title: string;
  items: string[];
  color: string;
  shadowColor: string;
}

const VisitorInfoV3 = () => {
  const highlights = [
    { emoji: '🏖️', title: 'Stiniva', desc: 'Najljepša plaža na svijetu' },
    { emoji: '🏰', title: 'Tvrđava Host', desc: 'Britanska utvrda iz 1811.' },
    { emoji: '🍷', title: 'Vugava', desc: 'Autohtono viško vino' },
    { emoji: '🐟', title: 'Riba', desc: 'Svježa lokalna kuhinja' },
  ];

  const sections: InfoSection[] = [
    {
      icon: Bed,
      title: 'Smještaj',
      items: ['Hoteli i hosteli', 'Apartmani i sobe', 'Kampovi'],
      color: 'bg-vis-blue/10',
      shadowColor: 'hsl(var(--vis-blue))',
    },
    {
      icon: UtensilsCrossed,
      title: 'Restorani',
      items: ['Tradicionalne konobe', 'Pizzerije', 'Kafići i barovi'],
      color: 'bg-vis-green/10',
      shadowColor: 'hsl(var(--vis-green))',
    },
    {
      icon: Camera,
      title: 'Znamenitosti',
      items: ['Plava špilja', 'Zelena špilja', 'Arheološki muzej'],
      color: 'bg-vis-cyan/10',
      shadowColor: 'hsl(var(--vis-cyan))',
    },
    {
      icon: Anchor,
      title: 'Aktivnosti',
      items: ['Ronjenje', 'Kayaking', 'Planinarenje'],
      color: 'bg-vis-yellow/10',
      shadowColor: 'hsl(var(--vis-yellow))',
    },
  ];

  const usefulInfo = [
    { label: 'Turistička zajednica', value: '021 717 017' },
    { label: 'Hitna pomoć', value: '112' },
    { label: 'Lučka kapetanija', value: '021 711 185' },
  ];

  return (
    <div className="min-h-screen bg-vis-cyan relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-vis-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-32 h-32 bg-vis-blue/20 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Floating compass */}
      <div className="absolute top-32 right-6 w-10 h-10 rounded-full bg-vis-yellow/60 flex items-center justify-center">
        <Compass className="w-5 h-5 text-foreground" strokeWidth={2} />
      </div>

      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-foreground">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-card border-2 border-foreground flex items-center justify-center shadow-[3px_3px_0_hsl(var(--vis-yellow))]">
            <Info className="w-6 h-6 text-vis-cyan" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Visitor Info</h1>
            <p className="text-sm opacity-80">Dobrodošli na otok Vis!</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-200px)] px-5 pt-6 pb-8">
        {/* Welcome message */}
        <div className="mb-6 p-4 rounded-2xl border-2 border-foreground bg-vis-blue text-primary-foreground" style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}>
          <h2 className="font-bold text-lg mb-2">🌊 Otkrijte čarobni Vis</h2>
          <p className="text-sm opacity-90">
            Najudaljeniji nastanjeni hrvatski otok nudi netaknutu prirodu, kristalno more i bogatstvo povijesti.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-3">Ne propustite</h2>
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item, i) => (
              <div key={i} className="p-3 rounded-xl border-2 border-foreground bg-vis-yellow/10" style={{ boxShadow: '2px 2px 0 hsl(var(--vis-yellow))' }}>
                <span className="text-2xl block mb-2">{item.emoji}</span>
                <p className="font-bold text-sm">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info sections */}
        <div className="mb-6 space-y-3">
          {sections.map((section, i) => (
            <button
              key={i}
              className={`w-full text-left p-4 rounded-xl border-2 border-foreground ${section.color} hover:translate-x-[2px] hover:translate-y-[2px] transition-all`}
              style={{ boxShadow: `3px 3px 0 ${section.shadowColor}` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-card border-2 border-foreground flex items-center justify-center">
                  <section.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">{section.title}</h3>
                  <p className="text-xs text-muted-foreground">{section.items.join(' • ')}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </button>
          ))}
        </div>

        {/* Useful contacts */}
        <div>
          <h2 className="font-bold text-lg mb-3">Korisni kontakti</h2>
          <div className="p-4 rounded-2xl border-2 border-foreground bg-muted/30" style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}>
            {usefulInfo.map((info, i) => (
              <div key={i} className={`flex items-center justify-between py-2 ${i !== usefulInfo.length - 1 ? 'border-b border-muted' : ''}`}>
                <span className="text-sm">{info.label}</span>
                <a href={`tel:${info.value.replace(/\s/g, '')}`} className="font-bold text-vis-blue">{info.value}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorInfoV3;
