import { useNavigate } from 'react-router-dom';
import ImageHeader from '@/components/layout/ImageHeader';
import VisCard from '@/components/ui/VisCard';
import { Leaf, ChevronRight, ShieldAlert } from 'lucide-react';
import viskaKaduljaPhoto from '@/assets/viska-kadulja.jpg';
import dalmatianIrisImg from '@/assets/dalmatian-iris.jpg';
import eleonorasFalconImg from '@/assets/eleonoras-falcon.jpg';

interface GeoparkItem {
  title: string;
  description: string;
  image: string;
  path: string;
}

const GeoparkAlt = () => {
  const navigate = useNavigate();
  
  const categories: GeoparkItem[] = [{
    title: 'Flora',
    description: 'Endemske i zaštićene biljke otoka',
    image: dalmatianIrisImg,
    path: '/geopark/flora'
  }, {
    title: 'Fauna',
    description: 'Životinjski svijet kopna i mora',
    image: eleonorasFalconImg,
    path: '/geopark/fauna'
  }];
  
  
  return (
    <div className="min-h-screen flex flex-col bg-vis-green relative overflow-hidden">
      <ImageHeader
        image={viskaKaduljaPhoto}
        title="Flora & Fauna"
        subtitle="Prirodna baština otoka Visa"
        icon={<Leaf className="w-6 h-6 text-vis-green" strokeWidth={2.5} />}
        iconBg="bg-card"
        iconShadow="hsl(var(--vis-yellow))"
      />

      {/* Main content */}
      <div className="flex-1 bg-card border-x-[3px] border-foreground px-5 pt-6 pb-8">
        
        {/* Intro */}
        <div 
          className="p-4 border-[3px] border-foreground bg-vis-yellow mb-6"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <p className="text-sm">
            Vis je mali otok s velikom bioraznolikošću: od mirisne makije i vinograda do ptica na liticama i bogatog podmorja. Posebno je zanimljivo da na Visu nema otrovnih zmija, pa je istraživanje staza opuštenije. A botanika je stvarno luda: na otoku je zabilježeno više od 870 biljnih vrsta, što ga čini jednim od najbogatijih botaničkih džepova Jadrana.
          </p>
        </div>

        {/* Category cards with illustrations */}
        <div className="space-y-4 mb-8">
          {categories.map(cat => (
            <VisCard key={cat.path} onClick={() => navigate(cat.path)} className="relative overflow-hidden">
              <div className="flex items-center gap-4 relative z-10">
                <div 
                  className="w-16 h-16 border-[3px] border-foreground overflow-hidden"
                  style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
                >
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1 uppercase">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-foreground" strokeWidth={2.5} />
              </div>
            </VisCard>
          ))}
        </div>

        {/* Strictly Protected Species */}
        <div 
          className="border-[3px] border-foreground bg-vis-coral p-4"
          style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="w-5 h-5" strokeWidth={2.5} />
            <h3 className="font-bold uppercase">Strogo zaštićene vrste</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-lg">🦅</span>
              <p className="text-sm"><span className="font-bold">Sokol Eleonore</span> – rijetka ptica grabljivica</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">🐬</span>
              <p className="text-sm"><span className="font-bold">Dobri dupin</span> – zaštićen Natura 2000</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">🌸</span>
              <p className="text-sm"><span className="font-bold">Dalmatinska perunika</span> – endemska biljka</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">🦇</span>
              <p className="text-sm"><span className="font-bold">Šišmiši</span> – obitavaju u špiljama i tunelima</p>
            </div>
          </div>
        </div>

        {/* Geopark info card */}
        <div className="mt-8 bg-vis-blue/20 border-[3px] border-foreground p-4 relative overflow-hidden" style={{
          boxShadow: '6px 6px 0 hsl(var(--vis-blue))'
        }}>
          <div className="absolute -bottom-2 -right-2 opacity-20">
            <Leaf className="w-24 h-24" strokeWidth={1.5} />
          </div>
          <div className="relative z-10">
            <h3 className="font-bold text-foreground mb-2 uppercase">Geopark viški arhipelag</h3>
            <p className="text-sm text-muted-foreground">
              Vis i okolni otočići čine UNESCO Global Geopark zbog iznimne geološke raznolikosti: vrlo starih stijena, krškog reljefa, morskih špilja i rijetkih vulkanskih otočića (Brusnik i Jabuka). Krajolik Visa je "učionica na otvorenom" — priča o nastanku Jadrana, pomicanju tla i oblikovanju obale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeoparkAlt;
