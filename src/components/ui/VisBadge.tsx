import { cn } from '@/lib/utils';

type BadgeVariant = 'vis' | 'komiza' | 'kultura' | 'hitno' | 'opcenito' | 'general' | 'emergency' | 'default';

interface VisBadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  vis: 'bg-vis-blue text-primary-foreground',
  komiza: 'bg-vis-green text-foreground',
  kultura: 'bg-vis-yellow text-foreground',
  hitno: 'bg-vis-emergency text-primary-foreground',
  opcenito: 'bg-vis-purple text-foreground',
  general: 'bg-vis-purple text-foreground',
  emergency: 'bg-vis-emergency text-primary-foreground',
  default: 'bg-vis-yellow text-foreground',
};

const VisBadge = ({ variant = 'default', children, className }: VisBadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 text-xs font-semibold uppercase tracking-wide border-2 border-foreground',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default VisBadge;