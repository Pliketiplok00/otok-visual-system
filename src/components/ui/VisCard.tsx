import { cn } from '@/lib/utils';

interface VisCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: 'div' | 'button';
}

const VisCard = ({ children, className, onClick, as = 'div' }: VisCardProps) => {
  const Component = as === 'button' || onClick ? 'button' : 'div';

  return (
    <Component
      onClick={onClick}
      className={cn(
        'w-full bg-card text-card-foreground border-[3px] border-foreground p-4',
        'transition-all duration-150',
        onClick && 'hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none cursor-pointer',
        'text-left',
        className
      )}
      style={{ boxShadow: onClick ? '4px 4px 0 hsl(var(--foreground))' : undefined }}
    >
      {children}
    </Component>
  );
};

export default VisCard;