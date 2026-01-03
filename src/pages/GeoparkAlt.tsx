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
  const categories: GeoparkItem[] = [{
    icon: Flower2,
    title: 'Flora',
    description: 'Endemske i zaštićene biljke otoka',
    count: 127,
    color: 'bg-vis-green',
    path: '/geopark/flora'
  }, {
    icon: Bird,
    title: 'Fauna',
    description: 'Životinjski svijet kopna i mora',
    count: 84,
    color: 'bg-vis-cyan',
    path: '/geopark/fauna'
  }];
  const featuredSpecies = [{
    icon: TreePine,
    name: 'Alepski bor',
    status: 'Zaštićena',
    color: 'bg-vis-green'
  }, {
    icon: Flower2,
    name: 'Viška kadulja',
    status: 'Endemska',
    color: 'bg-vis-yellow'
  }, {
    icon: Fish,
    name: 'Modra orada',
    status: 'Lokalna',
    color: 'bg-vis-cyan'
  }];
  return <div className="min-h-screen flex flex-col bg-vis-green relative overflow-hidden">
      {/* Decorative geometric elements - neobrutalist squares */}
      
      
      
      {/* Leaf pattern decoration */}
      

      <AppHeader />

      {/* Hero section */}
      <div className="px-6 pt-8 pb-6 text-foreground">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-card border-[3px] border-foreground flex items-center justify-center" style={{
          boxShadow: '4px 4px 0 hsl(var(--vis-yellow))'
        }}>
            <Leaf className="w-6 h-6 text-vis-green" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold uppercase tracking-tight">Geopark</h1>
            <p className="text-sm opacity-80 mono">Prirodna baština otoka Visa</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-card border-t-[3px] border-x-[3px] border-foreground px-5 pt-6 pb-8">
        {/* Category cards with illustrations */}
        <div className="space-y-4 mb-8">
          {categories.map(cat => <VisCard key={cat.path} onClick={() => navigate(cat.path)} className="relative overflow-hidden">
              {/* Decorative square - no rounded corners */}
              
              
              <div className="flex items-center gap-4 relative z-10">
                <div className={`w-16 h-16 ${cat.color} border-[3px] border-foreground flex items-center justify-center`} style={{
              boxShadow: '4px 4px 0 hsl(var(--foreground))'
            }}>
                  <cat.icon className="w-8 h-8" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1 uppercase">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                  <span className="text-xs font-bold text-vis-blue mt-1 inline-block mono uppercase">
                    {cat.count} vrsta
                  </span>
                </div>
                <ChevronRight className="w-6 h-6 text-foreground" strokeWidth={2.5} />
              </div>
            </VisCard>)}
        </div>

        {/* Featured species - square icons, neobrutalist */}
        <div>
          <h2 className="font-bold text-lg mb-4 uppercase">Istaknute vrste</h2>
          <div className="flex justify-between">
            {featuredSpecies.map((species, i) => <button key={i} className="flex flex-col items-center gap-2 group">
                <div className={`w-16 h-16 ${species.color} border-[3px] border-foreground flex items-center justify-center transition-all group-hover:translate-x-[2px] group-hover:translate-y-[2px]`} style={{
              boxShadow: '4px 4px 0 hsl(var(--foreground))'
            }}>
                  <species.icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <span className="text-xs font-bold text-center uppercase">{species.name}</span>
                <span className="text-[10px] text-muted-foreground mono uppercase">{species.status}</span>
              </button>)}
          </div>
        </div>

        {/* Illustrated info card - neobrutalist */}
        <div className="mt-8 bg-vis-blue/20 border-[3px] border-foreground p-4 relative overflow-hidden" style={{
        boxShadow: '6px 6px 0 hsl(var(--vis-blue))'
      }}>
          <div className="absolute -bottom-2 -right-2 opacity-20">
            <Leaf className="w-24 h-24" strokeWidth={1.5} />
          </div>
          <div className="relative z-10">
            <h3 className="font-bold text-foreground mb-2 uppercase">UNESCO Geopark kandidat</h3>
            <p className="text-sm text-muted-foreground">
              Otok Vis prepoznat je po iznimnoj geološkoj raznolikosti i endemskim vrstama.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default GeoparkAlt;