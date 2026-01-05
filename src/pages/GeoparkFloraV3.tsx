import { Leaf, Sparkles, ShieldAlert } from "lucide-react";

import ImageHeader from "@/components/layout/ImageHeader";
import dalmatianIrisImg from "@/assets/dalmatian-iris.jpg";
import wildRosemaryImg from "@/assets/wild-rosemary.jpg";
import immortelleImg from "@/assets/immortelle.jpg";
import viskaKaduljaImg from "@/assets/viska-kadulja.jpg";

const GeoparkFloraV3 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Image Header */}
      <ImageHeader
        image={dalmatianIrisImg}
        title="Flora"
        subtitle="NATURA 2000"
        icon={<Leaf className="w-6 h-6" strokeWidth={2.5} />}
        iconBg="bg-vis-green"
        iconShadow="hsl(var(--foreground))"
        backPath="/geopark"
      />

      <main className="p-4 pb-8">
        {/* Intro Section */}
        <div 
          className="border-3 border-foreground bg-vis-green p-6 mb-6"
          style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
        >
          <h2 className="font-mono text-xl uppercase font-bold mb-3">Flora otoka Visa</h2>
          <p className="font-sans text-sm leading-relaxed">
            Vis ima iznimno bogatu mediteransku floru s više od 870 zabilježenih biljnih vrsta. Zbog izolacije i raznolikih staništa, vegetacija se kreće od šuma crnike i makije do vinograda i maslinika. Dio vrsta i staništa je pod zaštitom u sklopu mreže Natura 2000, pa je Vis važan botanički "džep" bioraznolikosti.
          </p>
        </div>

        {/* Fun Facts Section */}
        <div 
          className="border-3 border-foreground bg-vis-yellow p-4 mb-6"
          style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5" strokeWidth={2.5} />
            <h3 className="font-mono uppercase font-bold">Zanimljivosti</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-lg">🌿</span>
              <p className="text-sm"><span className="font-bold">Botanički "rekorder":</span> Na Visu je zabilježeno 872 biljnih vrsta, što je iznimno za otok te veličine.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">🛡️</span>
              <p className="text-sm"><span className="font-bold">Zaštićene vrste i staništa:</span> Viški arhipelag je dio Natura 2000 mreže, s naglaskom na očuvanje rijetkih staništa i ciljnih vrsta.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">🍇</span>
              <p className="text-sm"><span className="font-bold">Vugava kao lokalni potpis:</span> Vugava se smatra jednom od najpoznatijih autohtonih sorti otoka Visa, s vrlo dugom tradicijom uzgoja.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">🌳</span>
              <p className="text-sm"><span className="font-bold">Rogač – stara "energetska pločica":</span> Rogač je stoljećima bio važna hrana i "rezerva" na otoku; danas je i simbol održivosti jer traži malo vode.</p>
            </div>
          </div>
        </div>

        {/* Endangered Species Section */}
        <div className="flex items-center gap-2 mb-3">
          <ShieldAlert className="w-5 h-5" strokeWidth={2.5} />
          <h3 className="font-mono uppercase font-bold">Zaštićene biljne vrste</h3>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div 
            className="border-3 border-foreground bg-card overflow-hidden"
            style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
          >
            <div className="aspect-[4/3] overflow-hidden border-b-3 border-foreground">
              <img src={dalmatianIrisImg} alt="Dalmatinska perunika" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 bg-vis-coral">
              <h4 className="font-mono font-bold text-sm">Dalmatinska perunika</h4>
              <p className="text-xs text-muted-foreground">Zaštićena vrsta s ljubičastim cvjetovima</p>
            </div>
          </div>

          <div 
            className="border-3 border-foreground bg-card overflow-hidden"
            style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
          >
            <div className="aspect-[4/3] overflow-hidden border-b-3 border-foreground">
              <img src={viskaKaduljaImg} alt="Viška kadulja" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 bg-vis-green">
              <h4 className="font-mono font-bold text-sm">Viška kadulja</h4>
              <p className="text-xs text-muted-foreground">Endemska podvrsta kadulje</p>
            </div>
          </div>

          <div 
            className="border-3 border-foreground bg-card overflow-hidden"
            style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
          >
            <div className="aspect-[4/3] overflow-hidden border-b-3 border-foreground">
              <img src={immortelleImg} alt="Smilje" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 bg-vis-yellow">
              <h4 className="font-mono font-bold text-sm">Smilje</h4>
              <p className="text-xs text-muted-foreground">Cijenjenog eteričnog ulja</p>
            </div>
          </div>

          <div 
            className="border-3 border-foreground bg-card overflow-hidden"
            style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
          >
            <div className="aspect-[4/3] overflow-hidden border-b-3 border-foreground">
              <img src={wildRosemaryImg} alt="Divlji ružmarin" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 bg-vis-blue">
              <h4 className="font-mono font-bold text-sm text-primary-foreground">Divlji ružmarin</h4>
              <p className="text-xs text-primary-foreground/70">Aromatična mediteranska biljka</p>
            </div>
          </div>
        </div>

        {/* Mediterranean Vegetation Section */}
        <div 
          className="border-3 border-foreground bg-card mb-4"
          style={{ boxShadow: "4px 4px 0 hsl(var(--vis-green))" }}
        >
          <div className="aspect-[16/9] overflow-hidden border-b-3 border-foreground">
            <img 
              src={wildRosemaryImg} 
              alt="Divlji ružmarin"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-vis-green p-3 border-b-3 border-foreground">
            <h3 className="font-mono uppercase font-bold">Mediteranska vegetacija i rijetke vrste</h3>
          </div>
          <div className="p-4">
            <p className="font-sans text-sm leading-relaxed">
              Vis je tipičan mediteranski otok, ali s iznadprosječnom raznolikošću biljaka. Prirodnu vegetaciju čine šume i šumarci crnike (Quercus ilex), guste makije (mirta, planika, lentiska) te borove šume u obnovi. Na kamenjaru dominiraju aromatične biljke poput ružmarina, kadulje i smilja, a u proljeće su polja i suhozidi puni samoniklog bilja.
            </p>
          </div>
        </div>

        {/* Islands and Endemic Section */}
        <div 
          className="border-3 border-foreground bg-card mb-4"
          style={{ boxShadow: "4px 4px 0 hsl(var(--vis-blue))" }}
        >
          <div className="aspect-[16/9] overflow-hidden border-b-3 border-foreground">
            <img 
              src={dalmatianIrisImg} 
              alt="Dalmatinska perunika"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-vis-blue p-3 border-b-3 border-foreground">
            <h3 className="font-mono uppercase font-bold text-primary-foreground">Otoci, hridi i endemi</h3>
          </div>
          <div className="p-4">
            <p className="font-sans text-sm leading-relaxed">
              Zanimljiv dio flore vezan je uz okolne otočiće i hridi gdje se, zbog izolacije, javljaju specifične kombinacije biljaka i mikro-staništa. Mreža Natura 2000 na području viškog arhipelaga usmjerena je na očuvanje vrijednih staništa i ciljnih vrsta, uključujući i određeni broj biljaka koje se posebno prate i štite.
            </p>
          </div>
        </div>

        {/* Culture and Agriculture Section */}
        <div 
          className="border-3 border-foreground bg-card mb-6"
          style={{ boxShadow: "4px 4px 0 hsl(var(--vis-yellow))" }}
        >
          <div className="aspect-[16/9] overflow-hidden border-b-3 border-foreground">
            <img 
              src={immortelleImg} 
              alt="Smilje"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-vis-yellow p-3 border-b-3 border-foreground">
            <h3 className="font-mono uppercase font-bold">Kultura uzgoja – vinova loza i rogač</h3>
          </div>
          <div className="p-4">
            <p className="font-sans text-sm leading-relaxed">
              Uz divlju floru, Vis oblikuje i poljoprivredni krajolik: vinogradi, maslinici i rogači. Posebno se ističe autohtona sorta grožđa vugava, povezana s dugom poviješću vinogradarstva na otoku. Na zapadnom dijelu otoka (oko Komiže) tradicija rogača je snažna, a lokalne sorte su dio identiteta krajolika. Očuvanje tradicionalne poljoprivrede pomaže i očuvanju biološke raznolikosti jer mozaik polja, putova i suhozida stvara mnogo rubnih staništa.
            </p>
          </div>
        </div>

        {/* Footer decoration */}
        <div className="flex gap-2 mt-8 justify-center">
          <div className="w-4 h-4 bg-vis-green border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-blue border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-coral border-2 border-foreground" />
        </div>
      </main>
    </div>
  );
};

export default GeoparkFloraV3;
