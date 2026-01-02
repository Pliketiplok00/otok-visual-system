import { cn } from '@/lib/utils';

type BlockColor = 'blue' | 'yellow' | 'cyan' | 'green' | 'white';

interface ColorBlockProps {
  color: BlockColor;
  children?: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

const colorClasses: Record<BlockColor, string> = {
  blue: 'bg-vis-blue text-primary-foreground',
  yellow: 'bg-vis-yellow text-foreground',
  cyan: 'bg-vis-cyan text-foreground',
  green: 'bg-vis-green text-foreground',
  white: 'bg-vis-white text-foreground',
};

const ColorBlock = ({ color, children, className, noPadding = false }: ColorBlockProps) => {
  return (
    <section
      className={cn(
        'w-full',
        colorClasses[color],
        !noPadding && 'px-4 py-5',
        className
      )}
    >
      <div className="max-w-screen-md mx-auto">
        {children}
      </div>
    </section>
  );
};

export default ColorBlock;
