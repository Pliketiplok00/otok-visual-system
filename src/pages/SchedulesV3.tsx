import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Ship, Bus, ChevronRight, AlertTriangle, Anchor, Waves } from 'lucide-react';

const SchedulesV3 = () => {
  const navigate = useNavigate();
  const hasScheduleChange = true;

  return (
    <div className="min-h-screen bg-vis-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-48 h-48 bg-vis-cyan/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-32 h-32 bg-vis-yellow/20 rounded-full blur-2xl -translate-x-1/2" />
      
      {/* Floating icons */}
      <div className="absolute top-32 right-8 w-10 h-10 rounded-full bg-vis-yellow/60 flex items-center justify-center">
        <Anchor className="w-5 h-5 text-foreground" strokeWidth={2} />
      </div>
      <div className="absolute top-56 left-6 w-8 h-8 rounded-full bg-vis-cyan/60 flex items-center justify-center">
        <Waves className="w-4 h-4 text-foreground" strokeWidth={2} />
      </div>

      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-primary-foreground">
        <h1 className="text-3xl font-extrabold mb-1">
          Vozni <span className="text-vis-cyan">redovi</span>
        </h1>
        <p className="opacity-80">Odaberite vrstu prijevoza</p>
      </div>

      {/* Schedule change alert */}
      {hasScheduleChange && (
        <div className="px-4 pb-4">
          <div className="bg-vis-yellow text-foreground px-4 py-3 rounded-2xl border-2 border-foreground flex items-center gap-3 shadow-[3px_3px_0_hsl(var(--foreground))]">
            <AlertTriangle className="w-5 h-5 shrink-0" strokeWidth={2.5} />
            <span className="text-sm font-semibold">Promjena voznog reda od 01.07.</span>
          </div>
        </div>
      )}

      {/* Content card */}
      <div className="bg-card rounded-t-[2rem] border-t-2 border-x-2 border-foreground min-h-[calc(100vh-280px)] px-5 pt-6 pb-8">
        <div className="space-y-4">
          {/* Sea transport */}
          <button
            onClick={() => navigate('/schedules/sea')}
            className="w-full text-left p-5 rounded-2xl border-2 border-foreground bg-vis-blue/5 hover:translate-x-[2px] hover:translate-y-[2px] transition-all relative overflow-hidden group"
            style={{ boxShadow: '5px 5px 0 hsl(var(--vis-cyan))' }}
          >
            {/* Decorative blob */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-vis-cyan/20 rounded-full transition-transform group-hover:scale-110" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-2xl border-2 border-foreground bg-vis-blue flex items-center justify-center shadow-[3px_3px_0_hsl(var(--vis-cyan))]">
                <Ship className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-xl mb-1">Pomorski promet</h2>
                <p className="text-sm text-muted-foreground">Trajekti, katamarani, brodske linije</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-vis-cyan/20 text-vis-blue font-semibold">Split-Vis</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-vis-cyan/20 text-vis-blue font-semibold">Hvar-Vis</span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Land transport */}
          <button
            onClick={() => navigate('/schedules/land')}
            className="w-full text-left p-5 rounded-2xl border-2 border-foreground bg-vis-green/5 hover:translate-x-[2px] hover:translate-y-[2px] transition-all relative overflow-hidden group"
            style={{ boxShadow: '5px 5px 0 hsl(var(--vis-green))' }}
          >
            {/* Decorative blob */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-vis-green/20 rounded-full transition-transform group-hover:scale-110" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-2xl border-2 border-foreground bg-vis-green flex items-center justify-center shadow-[3px_3px_0_hsl(var(--vis-yellow))]">
                <Bus className="w-8 h-8 text-foreground" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-xl mb-1">Cestovni promet</h2>
                <p className="text-sm text-muted-foreground">Autobusi na otoku</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-vis-green/20 text-foreground font-semibold">Vis-Komiža</span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Info section */}
        <div className="mt-8 p-4 rounded-2xl bg-muted border-2 border-muted-foreground/20">
          <p className="text-sm text-muted-foreground text-center">
            <span className="font-semibold">💡 Savjet:</span> Provjerite vozni red prije putovanja jer se može mijenjati ovisno o sezoni
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchedulesV3;
