import { Bird, Sparkles } from "lucide-react";

import ImageHeader from "@/components/layout/ImageHeader";
import eleonorasFalconImg from "@/assets/eleonoras-falcon.jpg";
import bottlenoseDolphinImg from "@/assets/bottlenose-dolphin.jpg";
import mediterraneanBatImg from "@/assets/mediterranean-bat.jpg";
import eleonorasFalconCliffImg from "@/assets/eleonoras-falcon-cliff.jpg";

const GeoparkFaunaV3 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Image Header */}
      <ImageHeader
        image={eleonorasFalconImg}
        title="Fauna"
        subtitle="NATURA 2000"
        icon={<Bird className="w-6 h-6" strokeWidth={2.5} />}
        iconBg="bg-vis-cyan"
        iconShadow="hsl(var(--foreground))"
      />

      <main className="p-4 pb-8">
        {/* Intro Section */}
        <div 
          className="border-3 border-foreground bg-vis-cyan p-6 mb-6"
          style={{ boxShadow: "4px 4px 0 hsl(var(--foreground))" }}
        >
          <h2 className="font-mono text-xl uppercase font-bold mb-3">Fauna Visa</h2>
          <p className="font-sans text-sm leading-relaxed">
            Fauna Visa obuhvaća rijetke ptice na liticama, šišmiše u špiljama i tunelima te bogat morski svijet s dupinima i kornjačama. Zabilježeno je oko 126 vrsta ptica, a cijeli arhipelag je dio Natura 2000 mreže. Posebno su važni morski sisavci i pučinske ptice koje gnijezde na otočićima.
          </p>
        </div>

        {/* Fun Facts Section - moved below intro */}
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
              <span className="text-lg">🐍</span>
              <p className="text-sm"><span className="font-bold">Bez otrovnica:</span> Na Visu nema otrovnih zmija, što je rijetka i turistima često draga informacija.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">🦅</span>
              <p className="text-sm"><span className="font-bold">Sokol Eleonore:</span> Jedna od najkarizmatičnijih ptica viškog arhipelaga; gnijezdi kasno u sezoni i lovi u letu.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">🐬</span>
              <p className="text-sm"><span className="font-bold">Dupini "stanari":</span> Viško more je poznato kao područje redovitih susreta s dobrim dupinom.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">🦭</span>
              <p className="text-sm"><span className="font-bold">Medvjeđa špilja na Biševu:</span> Špilja je dobila ime po sredozemnoj medvjedici; pristup i ponašanje posjetitelja bitni su za očuvanje staništa.</p>
            </div>
          </div>
        </div>

        {/* Birds Section */}
        <div 
          className="border-3 border-foreground bg-card mb-4"
          style={{ boxShadow: "4px 4px 0 hsl(var(--vis-blue))" }}
        >
          <div className="aspect-[16/9] overflow-hidden border-b-3 border-foreground">
            <img 
              src={eleonorasFalconCliffImg} 
              alt="Sokol Eleonore"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-vis-blue p-3 border-b-3 border-foreground">
            <h3 className="font-mono uppercase font-bold text-primary-foreground">Ptice – Vis kao "zračna stanica" Jadrana</h3>
          </div>
          <div className="p-4">
            <p className="font-sans text-sm leading-relaxed">
              Viški arhipelag je važno područje za ptice, posebno one koje se gnijezde na nepristupačnim stijenama i hridima. Među najznačajnijima je sokol Eleonore, rijetka vrsta koja gnijezdi na dalmatinskim otocima te je predmet zaštite u Natura 2000 kontekstu. Tu su i morske ptice poput cjevonosnica (npr. gregula i kaukal) koje koriste otočiće kao mirna gnijezdilišta.
            </p>
          </div>
        </div>

        {/* Bats Section - now with image */}
        <div 
          className="border-3 border-foreground bg-card mb-4"
          style={{ boxShadow: "4px 4px 0 hsl(var(--vis-green))" }}
        >
          <div className="aspect-[16/9] overflow-hidden border-b-3 border-foreground">
            <img 
              src={mediterraneanBatImg} 
              alt="Šišmiš"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-vis-green p-3 border-b-3 border-foreground">
            <h3 className="font-mono uppercase font-bold">Šišmiši i kopneni svijet</h3>
          </div>
          <div className="p-4">
            <p className="font-sans text-sm leading-relaxed">
              Zbog manjka velikih kopnenih sisavaca, šišmiši imaju veliku ulogu u ekosustavu (kontrola kukaca). Na Visu i u arhipelagu zabilježene su brojne vrste šišmiša, a pojedine su posebno zaštićene. Špilje, napušteni objekti i vojni tuneli važna su skloništa, pa je važno izbjegavati uznemiravanje.
            </p>
          </div>
        </div>

        {/* Marine Section */}
        <div 
          className="border-3 border-foreground bg-card mb-6"
          style={{ boxShadow: "4px 4px 0 hsl(var(--vis-cyan))" }}
        >
          <div className="aspect-[16/9] overflow-hidden border-b-3 border-foreground">
            <img 
              src={bottlenoseDolphinImg} 
              alt="Dobri dupin"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-vis-cyan p-3 border-b-3 border-foreground">
            <h3 className="font-mono uppercase font-bold">More – dupini, kornjače i podmorje</h3>
          </div>
          <div className="p-4">
            <p className="font-sans text-sm leading-relaxed">
              Morsko područje oko Visa je dio zaštitnih zona za dobrog dupina. Procjenjuje se da se u viškome moru redovito zadržava stabilna skupina dupina, što govori o kvaliteti staništa. Povijesno je važna i priča o sredozemnoj medvjedici (monk seal) povezanoj sa špiljama na Biševu. Iako je danas rijetka, zaštita špilja i mirnih zona dio je strategija očuvanja. Podmorje je bogato ribama, beskralješnjacima i posidonijom, što je ključno za zdravlje cijelog sustava.
            </p>
          </div>
        </div>

        {/* Footer decoration */}
        <div className="flex gap-2 mt-8 justify-center">
          <div className="w-4 h-4 bg-vis-cyan border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-blue border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-green border-2 border-foreground" />
          <div className="w-4 h-4 bg-vis-yellow border-2 border-foreground" />
        </div>
      </main>
    </div>
  );
};

export default GeoparkFaunaV3;
