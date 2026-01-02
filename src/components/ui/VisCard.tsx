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
        'w-full bg-card text-card-foreground border-2 border-foreground rounded-lg p-4',
        'transition-all duration-150',
        onClick && 'hover:translate-y-[-2px] hover:shadow-[4px_4px_0_hsl(var(--foreground))] active:translate-y-0 active:shadow-none cursor-pointer',
        'text-left',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default VisCard;
