import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import { Ship, Bus, ChevronRight, AlertTriangle } from 'lucide-react';

const SchedulesV3 = () => {
  const navigate = useNavigate();
  const hasScheduleChange = true;

  return (
    <div className="min-h-screen bg-vis-blue">
      <AppHeader />

      {/* Header */}
      <div className="px-5 pt-6 pb-4 text-primary-foreground">
        <h1 className="text-3xl font-extrabold mb-1 uppercase">
          Vozni <span className="text-vis-yellow">redovi</span>
        </h1>
        <p className="opacity-80">Odaberite vrstu prijevoza</p>
      </div>

      {/* Schedule change alert */}
      {hasScheduleChange && (
        <div className="px-4 pb-4">
          <div className="bg-vis-yellow text-foreground px-4 py-3 border-[3px] border-foreground flex items-center gap-3" style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}>
            <AlertTriangle className="w-5 h-5 shrink-0" strokeWidth={2.5} />
            <span className="text-sm font-semibold uppercase">Promjena voznog reda od 01.07.</span>
          </div>
        </div>
      )}

      {/* Content card */}
      <div className="bg-card border-t-[3px] border-x-[3px] border-foreground min-h-[calc(100vh-280px)] px-5 pt-6 pb-8">
        <div className="space-y-4">
          {/* Sea transport */}
          <button
            onClick={() => navigate('/schedules/sea')}
            className="w-full text-left p-5 border-[3px] border-foreground bg-vis-blue/5 hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
            style={{ boxShadow: '5px 5px 0 hsl(var(--vis-cyan))' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 border-[3px] border-foreground bg-vis-blue flex items-center justify-center" style={{ boxShadow: '3px 3px 0 hsl(var(--vis-cyan))' }}>
                <Ship className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-xl mb-1 uppercase">Pomorski promet</h2>
                <p className="text-sm text-muted-foreground">Trajekti, katamarani, brodske linije</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs px-2 py-0.5 bg-vis-cyan/20 text-foreground font-semibold border border-foreground">Split-Vis</span>
                  <span className="text-xs px-2 py-0.5 bg-vis-cyan/20 text-foreground font-semibold border border-foreground">Hvar-Vis</span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Land transport */}
          <button
            onClick={() => navigate('/schedules/land')}
            className="w-full text-left p-5 border-[3px] border-foreground bg-vis-green/5 hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
            style={{ boxShadow: '5px 5px 0 hsl(var(--vis-green))' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 border-[3px] border-foreground bg-vis-green flex items-center justify-center" style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}>
                <Bus className="w-8 h-8 text-foreground" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-xl mb-1 uppercase">Cestovni promet</h2>
                <p className="text-sm text-muted-foreground">Autobusi na otoku</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs px-2 py-0.5 bg-vis-green/20 text-foreground font-semibold border border-foreground">Vis-Komiža</span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Info section */}
        <div className="mt-8 p-4 bg-muted border-[3px] border-muted-foreground/30">
          <p className="text-sm text-muted-foreground text-center">
            <span className="font-semibold">💡 Savjet:</span> Provjerite vozni red prije putovanja jer se može mijenjati ovisno o sezoni
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchedulesV3;