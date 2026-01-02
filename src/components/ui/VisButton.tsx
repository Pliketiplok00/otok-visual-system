import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'emergency';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

interface VisButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-vis-blue text-primary-foreground hover:bg-vis-blue/90 border-foreground',
  secondary: 'bg-vis-green text-foreground hover:bg-vis-green/90 border-foreground',
  outline: 'bg-card text-foreground hover:bg-muted border-foreground',
  ghost: 'bg-transparent text-foreground hover:bg-muted border-transparent hover:border-foreground',
  emergency: 'bg-vis-emergency text-primary-foreground hover:bg-vis-emergency/90 border-foreground',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-11 px-4 py-2 text-base',
  sm: 'h-9 px-3 text-sm',
  lg: 'h-14 px-6 text-lg',
  icon: 'h-11 w-11 p-0',
};

const VisButton = forwardRef<HTMLButtonElement, VisButtonProps>(
  ({ variant = 'primary', size = 'default', children, className, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-semibold border-[3px]',
          'transition-all duration-150',
          'hover:translate-x-[2px] hover:translate-y-[2px]',
          'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
          'disabled:opacity-50 disabled:pointer-events-none',
          'min-h-touch',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        style={{ boxShadow: '4px 4px 0 hsl(var(--foreground))' }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

VisButton.displayName = 'VisButton';

export default VisButton;