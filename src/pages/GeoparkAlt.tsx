import { useNavigate } from 'react-router-dom';
import ImageHeader from '@/components/layout/ImageHeader';
import VisCard from '@/components/ui/VisCard';
import { Leaf, ChevronRight, ShieldAlert } from 'lucide-react';
import viskaKaduljaPhoto from '@/assets/viska-kadulja.jpg';
import dalmatianIrisImg from '@/assets/dalmatian-iris.jpg';
import eleonorasFalconImg from '@/assets/eleonoras-falcon.jpg';
import bottlenoseDolphinImg from '@/assets/bottlenose-dolphin.jpg';
import mediterraneanBatImg from '@/assets/mediterranean-bat.jpg';

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

        {/* Category cards - side by side */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {categories.map(cat => (
            <div 
              key={cat.path} 
              onClick={() => navigate(cat.path)} 
              className="border-[3px] border-foreground bg-card cursor-pointer hover:translate-x-[2px] hover:-translate-y-[2px] transition-transform overflow-hidden"
              style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
            >
              <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold text-lg uppercase mb-1">{cat.title}</h3>
                <p className="text-xs text-muted-foreground">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Strictly Protected Species Header */}
        <div className="flex items-center gap-2 mb-3">
          <ShieldAlert className="w-5 h-5" strokeWidth={2.5} />
          <h3 className="font-bold uppercase">Strogo zaštićene vrste</h3>
        </div>

        {/* Protected Species Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div 
            className="border-[3px] border-foreground bg-card overflow-hidden"
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground">
              <img src={eleonorasFalconImg} alt="Sokol Eleonore" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 bg-vis-coral">
              <h4 className="font-bold text-sm">Sokol Eleonore</h4>
              <p className="text-xs text-muted-foreground">Rijetka ptica grabljivica</p>
            </div>
          </div>

          <div 
            className="border-[3px] border-foreground bg-card overflow-hidden"
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground">
              <img src={bottlenoseDolphinImg} alt="Dobri dupin" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 bg-vis-cyan">
              <h4 className="font-bold text-sm">Dobri dupin</h4>
              <p className="text-xs text-muted-foreground">Zaštićen Natura 2000</p>
            </div>
          </div>

          <div 
            className="border-[3px] border-foreground bg-card overflow-hidden"
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground">
              <img src={dalmatianIrisImg} alt="Dalmatinska perunika" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 bg-vis-green">
              <h4 className="font-bold text-sm">Dalmatinska perunika</h4>
              <p className="text-xs text-muted-foreground">Endemska biljka</p>
            </div>
          </div>

          <div 
            className="border-[3px] border-foreground bg-card overflow-hidden"
            style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
          >
            <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-foreground">
              <img src={mediterraneanBatImg} alt="Šišmiši" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 bg-vis-yellow">
              <h4 className="font-bold text-sm">Šišmiši</h4>
              <p className="text-xs text-muted-foreground">Obitavaju u špiljama</p>
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
