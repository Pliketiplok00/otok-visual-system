import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Home, Anchor, MapPin } from 'lucide-react';

type UserType = 'visitor' | 'local' | null;
type LocalArea = 'komiza' | 'vis' | null;

const LoginV3 = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>(null);
  const [localArea, setLocalArea] = useState<LocalArea>(null);

  const handleVisitor = () => {
    // Visitor doesn't receive municipal notifications
    // Could store this preference in localStorage or context
    localStorage.setItem('visUserType', 'visitor');
    localStorage.removeItem('visLocalArea');
    navigate('/home-v3');
  };

  const handleLocalSelect = () => {
    setUserType('local');
  };

  const handleAreaSelect = (area: LocalArea) => {
    setLocalArea(area);
    // Store user preference
    localStorage.setItem('visUserType', 'local');
    localStorage.setItem('visLocalArea', area || '');
    navigate('/home-v3');
  };

  return (
    <div className="min-h-screen flex flex-col bg-vis-blue">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 text-primary-foreground">
        <h1 className="text-3xl font-extrabold mb-1 uppercase">
          {userType === 'local' ? (
            <>Odaberite <span className="text-vis-cyan">općinu</span></>
          ) : (
            <>Dobrodošli na <span className="text-vis-yellow">Vis</span></>
          )}
        </h1>
        <p className="opacity-80">
          {userType === 'local' 
            ? 'Za koju općinu želite primati obavijesti?'
            : 'Kako ćete koristiti aplikaciju?'
          }
        </p>
      </div>

      {/* Selection card */}
      <div className="flex-1 bg-card border-t-[3px] border-x-[3px] border-foreground px-5 pt-8 pb-8">
        {userType === 'local' ? (
          /* Local area selection */
          <div className="space-y-4">
            <button
              onClick={() => handleAreaSelect('komiza')}
              className="w-full text-left p-5 border-[3px] border-foreground bg-vis-cyan/10 hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-4"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-cyan))' }}
            >
              <div className="w-14 h-14 border-[3px] border-foreground bg-vis-cyan flex items-center justify-center shrink-0">
                <Anchor className="w-7 h-7 text-foreground" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xl uppercase">Komiža</p>
                <p className="text-sm text-muted-foreground">Obavijesti za Komižu i okolicu</p>
              </div>
            </button>

            <button
              onClick={() => handleAreaSelect('vis')}
              className="w-full text-left p-5 border-[3px] border-foreground bg-vis-green/10 hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-4"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-green))' }}
            >
              <div className="w-14 h-14 border-[3px] border-foreground bg-vis-green flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-foreground" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xl uppercase">Vis</p>
                <p className="text-sm text-muted-foreground">Obavijesti za grad Vis i okolicu</p>
              </div>
            </button>

            <button
              onClick={() => setUserType(null)}
              className="w-full text-center text-sm text-muted-foreground hover:text-foreground mt-4 py-2"
            >
              ← Natrag
            </button>
          </div>
        ) : (
          /* Initial user type selection */
          <div className="space-y-4">
            <button
              onClick={handleVisitor}
              className="w-full text-left p-5 border-[3px] border-foreground bg-vis-yellow/10 hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-4"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-yellow))' }}
            >
              <div className="w-14 h-14 border-[3px] border-foreground bg-vis-yellow flex items-center justify-center shrink-0">
                <User className="w-7 h-7 text-foreground" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xl uppercase">Posjetitelj</p>
                <p className="text-sm text-muted-foreground">Turističke informacije, događanja, raspored trajekta</p>
              </div>
            </button>

            <button
              onClick={handleLocalSelect}
              className="w-full text-left p-5 border-[3px] border-foreground bg-vis-blue/10 hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-4"
              style={{ boxShadow: '4px 4px 0 hsl(var(--vis-blue))' }}
            >
              <div className="w-14 h-14 border-[3px] border-foreground bg-vis-blue flex items-center justify-center shrink-0">
                <Home className="w-7 h-7 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xl uppercase">Mještanin</p>
                <p className="text-sm text-muted-foreground">Sve informacije + općinske obavijesti</p>
              </div>
            </button>

            <p className="text-center text-sm text-muted-foreground mt-6 px-4">
              Ovu postavku možete promijeniti u bilo kojem trenutku u postavkama
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginV3;
