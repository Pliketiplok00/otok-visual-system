import { useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import ColorBlock from '@/components/layout/ColorBlock';
import VisCard from '@/components/ui/VisCard';
import { Ship, Bus, ChevronRight, AlertTriangle } from 'lucide-react';

const Schedules = () => {
  const navigate = useNavigate();

  const hasScheduleChange = true;

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <AppHeader />

      <ColorBlock color="blue" className="py-5">
        <h1 className="text-2xl font-bold">Vozni redovi</h1>
        <p className="opacity-90 mt-1">Odaberite vrstu prijevoza</p>
      </ColorBlock>

      {hasScheduleChange && (
        <div className="bg-vis-yellow border-b-2 border-foreground px-4 py-3 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 shrink-0" strokeWidth={2.5} />
          <span className="text-sm font-medium">Promjena voznog reda od 01.07.</span>
        </div>
      )}

      <ColorBlock color="white" className="flex-1 py-5">
        <div className="space-y-4">
          <VisCard onClick={() => navigate('/schedules/sea')}>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl border-2 border-foreground bg-vis-blue flex items-center justify-center shrink-0">
                <Ship className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-lg">Pomorski promet</h2>
                <p className="text-sm text-muted-foreground">Trajekti, katamarani, brodske linije</p>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground" />
            </div>
          </VisCard>

          <VisCard onClick={() => navigate('/schedules/land')}>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl border-2 border-foreground bg-vis-green flex items-center justify-center shrink-0">
                <Bus className="w-8 h-8" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-lg">Cestovni promet</h2>
                <p className="text-sm text-muted-foreground">Autobusi na otoku</p>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground" />
            </div>
          </VisCard>
        </div>
      </ColorBlock>

      <ColorBlock color="cyan" noPadding className="h-2" />
    </div>
  );
};

export default Schedules;
