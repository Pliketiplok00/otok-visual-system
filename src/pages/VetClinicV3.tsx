import ImageHeader from '@/components/layout/ImageHeader';
import { Heart, MapPin, Clock, Phone, AlertTriangle } from 'lucide-react';

interface VetClinic {
  name: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  shadowColor: string;
}

const vetClinics: VetClinic[] = [
  {
    name: 'Veterinarska stanica Vis',
    address: 'Put Mula 3, Vis',
    phone: '021 711 150',
    hours: 'Pon-Pet: 08:00 - 14:00',
    services: ['Pregledi', 'Cijepljenje', 'Hitni slučajevi'],
    shadowColor: 'hsl(var(--vis-terracotta))',
  },
];

const emergencyInfo = {
  title: 'Hitni veterinarski slučajevi',
  description: 'Za hitne slučajeve izvan radnog vremena, kontaktirajte veterinarsku stanicu na dežurni broj ili veterinarske službe u Splitu.',
  splitVet: '021 345 678',
};

const VetClinicV3 = () => {
  const vetImageUrl = "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&h=400&fit=crop";

  return (
    <div className="min-h-screen bg-vis-terracotta">
      <ImageHeader
        image={vetImageUrl}
        title="Veterinarska"
        subtitle="Veterinarske usluge na otoku"
        icon={<Heart className="w-6 h-6 text-vis-terracotta" strokeWidth={2.5} />}
        iconBg="bg-card"
        iconShadow="hsl(var(--vis-yellow))"
        backPath="/visitor-info"
      />

      {/* Content card */}
      <div className="bg-card border-x-[3px] border-foreground min-h-[calc(100vh-240px)] px-4 pt-6 pb-8">
        
        {/* Vet Clinics */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Heart className="w-5 h-5 text-vis-terracotta" />
            Veterinarske stanice
          </h2>
          <div className="space-y-4">
            {vetClinics.map((clinic, i) => (
              <div 
                key={i}
                className="p-4 border-[3px] border-foreground bg-card"
                style={{ boxShadow: `4px 4px 0 ${clinic.shadowColor}` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-vis-terracotta border-[3px] border-foreground flex items-center justify-center shrink-0">
                    <span className="text-2xl">🐾</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold uppercase">{clinic.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{clinic.address}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <Clock className="w-4 h-4 text-vis-blue" />
                    <span>{clinic.hours}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {clinic.services.map((service, j) => (
                    <span 
                      key={j}
                      className="px-2 py-1 text-xs font-medium bg-muted border-2 border-foreground"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <a 
                  href={`tel:${clinic.phone.replace(/\s/g, '')}`}
                  className="mt-3 flex items-center gap-2 p-2 bg-vis-green border-[3px] border-foreground hover:translate-x-[2px] hover:translate-y-[2px] transition-transform w-fit"
                  style={{ boxShadow: '2px 2px 0 hsl(var(--foreground))' }}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-bold font-mono">{clinic.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Pet tips */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            🐕 Savjeti za vlasnike kućnih ljubimaca
          </h2>
          <div 
            className="p-4 border-[3px] border-foreground"
            style={{ backgroundColor: 'hsl(var(--vis-cyan) / 0.1)', boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
          >
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>🌡️</span>
                <span>Pazite na vrućine - izbjegavajte šetnje sredinom dana</span>
              </li>
              <li className="flex items-start gap-2">
                <span>💧</span>
                <span>Uvijek nosite dovoljno vode za ljubimca</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🏖️</span>
                <span>Neke plaže dopuštaju pse - raspitajte se lokalno</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📋</span>
                <span>Ponesite dokumentaciju o cijepljenju</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Emergency */}
        <div 
          className="p-4 border-[3px] border-foreground"
          style={{ backgroundColor: 'hsl(var(--vis-yellow) / 0.2)', boxShadow: '4px 4px 0 hsl(var(--vis-terracotta))' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-vis-terracotta" />
            <p className="font-bold uppercase">{emergencyInfo.title}</p>
          </div>
          <p className="text-sm mb-3">
            {emergencyInfo.description}
          </p>
          <a 
            href={`tel:${emergencyInfo.splitVet.replace(/\s/g, '')}`}
            className="flex items-center gap-2 p-2 bg-vis-terracotta border-[3px] border-foreground hover:translate-x-[2px] hover:translate-y-[2px] transition-transform w-fit"
            style={{ boxShadow: '2px 2px 0 hsl(var(--foreground))' }}
          >
            <Phone className="w-4 h-4" />
            <span className="font-bold font-mono">Veterinar Split: {emergencyInfo.splitVet}</span>
          </a>
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

export default VetClinicV3;
