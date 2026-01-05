import ImageHeader from '@/components/layout/ImageHeader';
import { Mail, MapPin, Clock, Phone, Package } from 'lucide-react';

interface PostOffice {
  name: string;
  address: string;
  phone: string;
  hours: string;
  shadowColor: string;
}

const postOffices: PostOffice[] = [
  {
    name: 'HP Vis',
    address: 'Obala sv. Jurja 25, Vis',
    phone: '021 711 005',
    hours: 'Pon-Pet: 08:00 - 15:00, Sub: 08:00 - 12:00',
    shadowColor: 'hsl(var(--vis-yellow))',
  },
  {
    name: 'HP Komiža',
    address: 'Riva sv. Mikule 2, Komiža',
    phone: '021 713 005',
    hours: 'Pon-Pet: 08:00 - 14:00',
    shadowColor: 'hsl(var(--vis-cyan))',
  },
];

interface Paketomat {
  provider: string;
  address: string;
  color: string;
}

const paketomati: Paketomat[] = [
  {
    provider: 'HP Paketomat',
    address: 'Obala sv. Jurja 25, Vis (ispred pošte)',
    color: 'hsl(var(--vis-yellow))',
  },
  {
    provider: 'GLS Paketomat',
    address: 'Ul. Vladimira Nazora 3, Vis',
    color: 'hsl(var(--vis-cyan))',
  },
  {
    provider: 'BOXNOW',
    address: 'Trg 30. svibnja 1992., Komiža',
    color: 'hsl(var(--vis-green))',
  },
];

const PostaInternetV3 = () => {
  const postImageUrl = "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=800&h=400&fit=crop";

  return (
    <div className="min-h-screen bg-vis-yellow">
      <ImageHeader
        image={postImageUrl}
        title="Pošta"
        subtitle="Poštanske i kurirske usluge na otoku"
        icon={<Mail className="w-6 h-6 text-vis-yellow" strokeWidth={2.5} />}
        iconBg="bg-card"
        iconShadow="hsl(var(--vis-green))"
        backPath="/visitor-info"
      />

      {/* Content card */}
      <div className="bg-card border-x-[3px] border-foreground min-h-[calc(100vh-240px)] px-4 pt-6 pb-8">
        
        {/* Post Offices */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Mail className="w-5 h-5 text-vis-yellow" />
            Poštanski uredi
          </h2>
          <div className="space-y-4">
            {postOffices.map((office, i) => (
              <div 
                key={i}
                className="p-4 border-[3px] border-foreground bg-card"
                style={{ boxShadow: `4px 4px 0 ${office.shadowColor}` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-vis-yellow border-[3px] border-foreground flex items-center justify-center shrink-0">
                    <span className="text-2xl">📮</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold uppercase">{office.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{office.address}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <Clock className="w-4 h-4 text-vis-blue" />
                    <span>{office.hours}</span>
                  </div>
                </div>

                <a 
                  href={`tel:${office.phone.replace(/\s/g, '')}`}
                  className="mt-3 flex items-center gap-2 p-2 bg-vis-cyan border-[3px] border-foreground hover:translate-x-[2px] hover:translate-y-[2px] transition-transform w-fit"
                  style={{ boxShadow: '2px 2px 0 hsl(var(--foreground))' }}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-bold font-mono">{office.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Courier Services & Parcel Lockers */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Package className="w-5 h-5 text-vis-blue" />
            Kurirske dostave i paketomati
          </h2>
          
          <div 
            className="p-4 border-[3px] border-foreground bg-card mb-4"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
          >
            <p className="text-sm leading-relaxed">
              Na otoku Visu rade sve standardne kurirske službe (DPD, GLS, Overseas Express, DHL, HP Express). 
              Dostava na adresu je dostupna u svim naseljima. Za preuzimanje paketa izvan radnog vremena 
              možete koristiti paketomata na sljedećim lokacijama:
            </p>
          </div>

          <div className="space-y-2">
            {paketomati.map((paketomat, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 p-3 border-[3px] border-foreground bg-card"
                style={{ boxShadow: `3px 3px 0 ${paketomat.color}` }}
              >
                <div className="w-10 h-10 bg-vis-blue border-[3px] border-foreground flex items-center justify-center shrink-0 text-primary-foreground">
                  <Package className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm uppercase">{paketomat.provider}</p>
                  <p className="text-xs text-muted-foreground font-mono">{paketomat.address}</p>
                </div>
              </div>
            ))}
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

export default PostaInternetV3;
