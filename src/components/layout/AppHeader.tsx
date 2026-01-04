import { Menu, Inbox, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AppHeaderProps {
  unreadCount?: number;
}

const AppHeader = ({ unreadCount = 0 }: AppHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b-[3px] border-foreground px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-md mx-auto">
        <button
          onClick={() => navigate('/menu')}
          className="min-w-touch min-h-touch flex items-center justify-center border-[3px] border-foreground bg-card hover:bg-muted transition-colors"
          style={{ boxShadow: '3px 3px 0 hsl(var(--vis-yellow))' }}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" strokeWidth={2.5} />
        </button>

        <h1 className="font-bold text-lg tracking-tight uppercase">MOJ VIS</h1>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => navigate('/inbox')}
            className="relative min-w-touch min-h-touch flex items-center justify-center border-[3px] border-foreground bg-card hover:bg-muted transition-colors"
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-blue))' }}
            aria-label="Open inbox"
          >
            <Inbox className="w-6 h-6" strokeWidth={2.5} />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold bg-vis-emergency text-primary-foreground border-2 border-foreground">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </button>
          <button
            onClick={() => navigate('/settings')}
            className="min-w-touch min-h-touch flex items-center justify-center border-[3px] border-foreground bg-card hover:bg-muted transition-colors"
            style={{ boxShadow: '3px 3px 0 hsl(var(--vis-green))' }}
            aria-label="Open settings"
          >
            <Settings className="w-6 h-6" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;