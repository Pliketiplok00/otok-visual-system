import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import VisCard from '@/components/ui/VisCard';
import { Leaf, Flower2, Bug, ChevronRight, TreePine, Bird, Fish } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface GeoparkItem {
  icon: LucideIcon;
  title: string;
  description: string;
  count: number;
  color: string;
  path: string;
}

const GeoparkAlt = () => {
  const navigate = useNavigate();

  const categories: GeoparkItem[] = [
    {
      icon: Flower2,
      title: 'Flora',
      description: 'Endemske i zaštićene biljke otoka',
      count: 127,
      color: 'bg-vis-green',
      path: '/geopark/flora',
    },
    {
      icon: Bird,
      title: 'Fauna',
      description: 'Životinjski svijet kopna i mora',
      count: 84,
      color: 'bg-vis-cyan',
      path: '/geopark/fauna',
    },
  ];

  const featuredSpecies = [
    { icon: TreePine, name: 'Alepski bor', status: 'Zaštićena', color: 'bg-vis-green' },
    { icon: Flower2, name: 'Viška kadulja', status: 'Endemska', color: 'bg-vis-yellow' },
    { icon: Fish, name: 'Modra orada', status: 'Lokalna', color: 'bg-vis-cyan' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-vis-green relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-40 h-40 bg-vis-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-32 h-32 bg-vis-cyan/20 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Leaf pattern decoration */}
      <svg className="absolute top-32 right-4 w-24 h-24 opacity-20" viewBox="0 0 100 100">
        <ellipse cx="50" cy="50" rx="30" ry="45" fill="currentColor" className="text-foreground" transform="rotate(-30 50 50)" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2" className="text-foreground" />
      </svg>

      <AppHeader />

      {/* Hero section */}
      <div className="px-6 pt-8 pb-6 text-foreground">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-card border-2 border-foreground flex items-center justify-center shadow-[3px_3px_0_hsl(var(--vis-yellow))]">
            <Leaf className="w-6 h-6 text-vis-green" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Geopark</h1>
            <p className="text-sm opacity-80">Prirodna baština otoka Visa</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground px-5 pt-6 pb-8">
        {/* Category cards with illustrations */}
        <div className="space-y-4 mb-8">
          {categories.map((cat) => (
            <VisCard
              key={cat.path}
              onClick={() => navigate(cat.path)}
              className="relative overflow-hidden"
            >
              {/* Decorative blob */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 ${cat.color} opacity-20 rounded-full`} />
              
              <div className="flex items-center gap-4 relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${cat.color} border-2 border-foreground flex items-center justify-center shadow-[3px_3px_0_hsl(var(--foreground))]`}>
                  <cat.icon className="w-8 h-8" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                  <span className="text-xs font-semibold text-vis-blue mt-1 inline-block">
                    {cat.count} vrsta
                  </span>
                </div>
                <ChevronRight className="w-6 h-6 text-muted-foreground" />
              </div>
            </VisCard>
          ))}
        </div>

        {/* Featured species - circular icons like reference */}
        <div>
          <h2 className="font-bold text-lg mb-4">Istaknute vrste</h2>
          <div className="flex justify-between">
            {featuredSpecies.map((species, i) => (
              <button
                key={i}
                className="flex flex-col items-center gap-2 group"
              >
                <div className={`w-16 h-16 rounded-full ${species.color} border-2 border-foreground flex items-center justify-center transition-all group-hover:scale-105 group-hover:shadow-[2px_2px_0_hsl(var(--foreground))]`}>
                  <species.icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold text-center">{species.name}</span>
                <span className="text-[10px] text-muted-foreground">{species.status}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Illustrated info card */}
        <div className="mt-8 bg-vis-blue/10 rounded-2xl border-2 border-vis-blue p-4 relative overflow-hidden">
          <div className="absolute -bottom-2 -right-2 opacity-10">
            <Leaf className="w-24 h-24" />
          </div>
          <div className="relative z-10">
            <h3 className="font-bold text-vis-blue mb-2">UNESCO Geopark kandidat</h3>
            <p className="text-sm text-muted-foreground">
              Otok Vis prepoznat je po iznimnoj geološkoj raznolikosti i endemskim vrstama.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeoparkAlt;
