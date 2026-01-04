import { ReactNode } from 'react';
import AppHeader from '@/components/layout/AppHeader';

interface ImageHeaderProps {
  image: string;
  title: string;
  subtitle: string;
  icon?: ReactNode;
  iconBg?: string;
  iconShadow?: string;
}

const ImageHeader = ({ 
  image, 
  title, 
  subtitle, 
  icon,
  iconBg = 'bg-card',
  iconShadow = 'hsl(var(--vis-yellow))'
}: ImageHeaderProps) => {
  return (
    <>
      <AppHeader />
      <div className="relative h-48 overflow-hidden border-b-[3px] border-foreground">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 text-primary-foreground">
          <div className="flex items-center gap-3">
            {icon && (
              <div 
                className={`w-12 h-12 ${iconBg} border-[3px] border-foreground flex items-center justify-center shrink-0`}
                style={{ boxShadow: `4px 4px 0 ${iconShadow}` }}
              >
                {icon}
              </div>
            )}
            <div>
              <h1 className="text-2xl font-extrabold uppercase tracking-tight">{title}</h1>
              <p className="text-sm opacity-90">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageHeader;
