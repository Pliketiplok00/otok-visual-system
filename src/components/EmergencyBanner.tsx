import { LucideIcon, AlertTriangle } from 'lucide-react';

interface EmergencyBannerProps {
  message: string;
  onClick?: () => void;
  icon?: LucideIcon;
}

const EmergencyBanner = ({ message, onClick, icon: Icon = AlertTriangle }: EmergencyBannerProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-vis-emergency text-primary-foreground px-4 py-3 flex items-center gap-3 border-b-2 border-foreground"
    >
      <Icon className="w-5 h-5 shrink-0" strokeWidth={2.5} />
      <span className="font-semibold text-sm text-left flex-1">{message}</span>
    </button>
  );
};

export default EmergencyBanner;
