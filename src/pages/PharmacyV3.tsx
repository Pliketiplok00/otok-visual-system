import ImageHeader from '@/components/layout/ImageHeader';
import { Cross, MapPin, Clock, Phone } from 'lucide-react';

interface Pharmacy {
  name: string;
  address: string;
  phone: string;
  hours: string;
  dutyHours?: string;
  shadowColor: string;
}

const pharmacies: Pharmacy[] = [
  {
    name: 'Ljekarna Vis',
    address: 'Šetalište stare Isse 2, Vis',
    phone: '021 711 080',
    hours: 'Pon-Pet: 07:30 - 20:00, Sub: 08:00 - 12:00',
    dutyHours: 'Dežurstvo po potrebi',
    shadowColor: 'hsl(var(--vis-green))',
  },
  {
    name: 'Ljekarna Komiža',
    address: 'Riva sv. Mikule 6, Komiža',
    phone: '021 713 088',
    hours: 'Pon-Pet: 08:00 - 14:00',
    shadowColor: 'hsl(var(--vis-cyan))',
  },
];

const PharmacyV3 = () => {
  const pharmacyImageUrl = "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&h=400&fit=crop";

  return (
    <div className="min-h-screen bg-vis-green">
      <ImageHeader
        image={pharmacyImageUrl}
        title="Ljekarne"
        subtitle="Ljekarne na otoku Visu"
        icon={<Cross className="w-6 h-6 text-vis-green" strokeWidth={2.5} />}
        iconBg="bg-card"
        iconShadow="hsl(var(--vis-cyan))"
        backPath="/visitor-info"
      />

      {/* Content card */}
      <div className="bg-card border-x-[3px] border-foreground min-h-[calc(100vh-240px)] px-4 pt-6 pb-8">
        
        {/* Pharmacies */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Cross className="w-5 h-5 text-vis-green" />
            Ljekarne
          </h2>
          <div className="space-y-4">
            {pharmacies.map((pharmacy, i) => (
              <div 
                key={i}
                className="p-4 border-[3px] border-foreground bg-card"
                style={{ boxShadow: `4px 4px 0 ${pharmacy.shadowColor}` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-vis-green border-[3px] border-foreground flex items-center justify-center shrink-0">
                    <span className="text-2xl">💊</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold uppercase">{pharmacy.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{pharmacy.address}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <Clock className="w-4 h-4 text-vis-blue" />
                    <span>{pharmacy.hours}</span>
                  </div>
                  {pharmacy.dutyHours && (
                    <p className="text-sm text-vis-green font-medium">{pharmacy.dutyHours}</p>
                  )}
                </div>

                <a 
                  href={`tel:${pharmacy.phone.replace(/\s/g, '')}`}
                  className="mt-3 flex items-center gap-2 p-2 bg-vis-cyan border-[3px] border-foreground hover:translate-x-[2px] hover:translate-y-[2px] transition-transform w-fit"
                  style={{ boxShadow: '2px 2px 0 hsl(var(--foreground))' }}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-bold font-mono">{pharmacy.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency info */}
        <div 
          className="p-4 border-[3px] border-foreground"
          style={{ backgroundColor: 'hsl(var(--destructive) / 0.1)', boxShadow: '4px 4px 0 hsl(var(--destructive))' }}
        >
          <p className="font-bold uppercase mb-2">🚨 Hitna pomoć</p>
          <p className="text-sm mb-3">
            U slučaju hitne medicinske pomoći izvan radnog vremena ljekarne, 
            nazovite hitnu pomoć ili dom zdravlja.
          </p>
          <div className="flex gap-3">
            <a 
              href="tel:194"
              className="flex-1 p-3 bg-destructive text-primary-foreground border-[3px] border-foreground text-center font-bold"
              style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
            >
              <Cross className="w-5 h-5 mx-auto mb-1" />
              <span className="font-mono">194</span>
            </a>
            <a 
              href="tel:021711010"
              className="flex-1 p-3 bg-vis-blue text-primary-foreground border-[3px] border-foreground text-center font-bold"
              style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
            >
              <Phone className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs">Dom zdravlja</span>
            </a>
          </div>
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

export default PharmacyV3;
