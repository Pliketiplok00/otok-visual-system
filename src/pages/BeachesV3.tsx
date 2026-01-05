import ImageHeader from '@/components/layout/ImageHeader';
import { Waves, MapPin, Car, Clock } from 'lucide-react';

interface Beach {
  name: string;
  location: string;
  type: string;
  access: string;
  features: string[];
  shadowColor: string;
  image: string;
}

const beaches: Beach[] = [
  {
    name: 'Stiniva',
    location: 'Južna strana otoka',
    type: 'Šljunčana',
    access: 'Pješice (20 min) ili brodom',
    features: ['Spektakularna uvala', 'Restoran', 'Najljepša plaža Europe 2016'],
    shadowColor: 'hsl(var(--vis-blue))',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
  },
  {
    name: 'Srebrna',
    location: 'Blizu grada Visa',
    type: 'Šljunčana',
    access: 'Lako pristupačna autom',
    features: ['Parking', 'Restoran', 'Plitko more'],
    shadowColor: 'hsl(var(--vis-cyan))',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=300&fit=crop',
  },
  {
    name: 'Zaglav',
    location: 'Između Visa i Milne',
    type: 'Pijesak i šljunak',
    access: 'Autom ili biciklom',
    features: ['Prirodni hlad', 'Mirno more', 'Manje gužve'],
    shadowColor: 'hsl(var(--vis-green))',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=400&h=300&fit=crop',
  },
  {
    name: 'Smokova',
    location: 'Blizu Komiže',
    type: 'Šljunčana',
    access: 'Pješice od Komiže',
    features: ['Divlja priroda', 'Nudistička', 'Čisto more'],
    shadowColor: 'hsl(var(--vis-yellow))',
    image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400&h=300&fit=crop',
  },
  {
    name: 'Grandovac',
    location: 'Grad Vis',
    type: 'Betonska/kamena',
    access: 'Šetnjom iz centra',
    features: ['Blizina grada', 'Kafići', 'Zalazak sunca'],
    shadowColor: 'hsl(var(--vis-terracotta))',
    image: 'https://images.unsplash.com/photo-1504681869696-d977211a5f4c?w=400&h=300&fit=crop',
  },
  {
    name: 'Milna',
    location: 'Sjeverna strana',
    type: 'Pijesak',
    access: 'Autom, ima parking',
    features: ['Pješčana', 'Za obitelji', 'Restoran'],
    shadowColor: 'hsl(var(--vis-blue))',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400&h=300&fit=crop',
  },
];

const BeachesV3 = () => {
  const beachImageUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop";

  return (
    <div className="min-h-screen bg-vis-cyan">
      <ImageHeader
        image={beachImageUrl}
        title="Plaže"
        subtitle="Najljepše plaže otoka Visa"
        icon={<Waves className="w-6 h-6 text-vis-cyan" strokeWidth={2.5} />}
        iconBg="bg-card"
        iconShadow="hsl(var(--vis-blue))"
      />

      {/* Content card */}
      <div className="bg-card border-x-[3px] border-foreground min-h-[calc(100vh-240px)] px-4 pt-6 pb-8">
        
        {/* Beach List */}
        <div className="space-y-4">
          {beaches.map((beach, i) => (
            <div 
              key={i}
              className="p-4 border-[3px] border-foreground bg-card"
              style={{ boxShadow: `4px 4px 0 ${beach.shadowColor}` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 border-[3px] border-foreground shrink-0 overflow-hidden">
                  <img 
                    src={beach.image} 
                    alt={beach.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg uppercase">{beach.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{beach.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Waves className="w-4 h-4 text-vis-blue" />
                  <span className="font-mono">{beach.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Car className="w-4 h-4 text-vis-green" />
                  <span className="font-mono">{beach.access}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {beach.features.map((feature, j) => (
                  <span 
                    key={j}
                    className="px-2 py-1 text-xs font-medium bg-muted border-2 border-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

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

export default BeachesV3;
