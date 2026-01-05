import ImageHeader from '@/components/layout/ImageHeader';
import { Landmark, MapPin, Clock, CreditCard } from 'lucide-react';

interface Bank {
  name: string;
  address: string;
  hours: string;
  atm: boolean;
  shadowColor: string;
}

const banks: Bank[] = [
  {
    name: 'OTP Banka',
    address: 'Obala sv. Jurja 5, Vis',
    hours: 'Pon-Pet: 08:00 - 14:00',
    atm: true,
    shadowColor: 'hsl(var(--vis-green))',
  },
  {
    name: 'Hrvatska poštanska banka',
    address: 'Riva 12, Vis',
    hours: 'Pon-Pet: 08:00 - 12:00',
    atm: true,
    shadowColor: 'hsl(var(--vis-blue))',
  },
  {
    name: 'OTP Banka - Komiža',
    address: 'Riva sv. Mikule 8, Komiža',
    hours: 'Pon-Pet: 08:00 - 13:00',
    atm: true,
    shadowColor: 'hsl(var(--vis-cyan))',
  },
];

const atmLocations = [
  { location: 'Vis centar - kod trajektne luke', bank: 'OTP' },
  { location: 'Vis - Riva', bank: 'HPB' },
  { location: 'Komiža centar - Riva', bank: 'OTP' },
];

const BanksV3 = () => {
  const bankImageUrl = "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&h=400&fit=crop";

  return (
    <div className="min-h-screen bg-vis-green">
      <ImageHeader
        image={bankImageUrl}
        title="Banke"
        subtitle="Banke i bankomati na otoku"
        icon={<Landmark className="w-6 h-6 text-vis-green" strokeWidth={2.5} />}
        iconBg="bg-card"
        iconShadow="hsl(var(--vis-yellow))"
      />

      {/* Content card */}
      <div className="bg-card border-x-[3px] border-foreground min-h-[calc(100vh-240px)] px-4 pt-6 pb-8">
        
        {/* Banks */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <Landmark className="w-5 h-5 text-vis-green" />
            Poslovnice banaka
          </h2>
          <div className="space-y-3">
            {banks.map((bank, i) => (
              <div 
                key={i}
                className="p-4 border-[3px] border-foreground bg-card"
                style={{ boxShadow: `4px 4px 0 ${bank.shadowColor}` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-vis-green border-[3px] border-foreground flex items-center justify-center shrink-0">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold uppercase">{bank.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{bank.address}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1 font-mono">
                      <Clock className="w-4 h-4" />
                      <span>{bank.hours}</span>
                    </div>
                    {bank.atm && (
                      <div className="flex items-center gap-1 text-sm text-vis-green mt-1">
                        <CreditCard className="w-4 h-4" />
                        <span className="font-medium">Bankomat dostupan 24/7</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ATM Locations */}
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3 flex items-center gap-2 uppercase">
            <CreditCard className="w-5 h-5 text-vis-blue" />
            Bankomati
          </h2>
          <div className="space-y-2">
            {atmLocations.map((atm, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 p-3 border-[3px] border-foreground bg-card"
                style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
              >
                <div className="w-10 h-10 bg-vis-yellow border-[3px] border-foreground flex items-center justify-center shrink-0">
                  <span className="text-xl">🏧</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm uppercase">{atm.location}</p>
                  <p className="text-xs text-muted-foreground font-mono">{atm.bank}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info box */}
        <div 
          className="p-4 border-[3px] border-foreground"
          style={{ backgroundColor: 'hsl(var(--vis-cyan) / 0.1)', boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
        >
          <p className="font-bold uppercase mb-2">💡 Savjet</p>
          <p className="text-sm">
            Na otoku se većina lokala i restorana prima kartice, ali preporučujemo 
            imati gotovinu za manje objekte i tržnice.
          </p>
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

export default BanksV3;
