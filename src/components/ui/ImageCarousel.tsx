import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  badgeText?: string;
  badgeColor?: string;
  className?: string;
}

const ImageCarousel = ({ images, badgeText, badgeColor = "#96C7B3", className }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      <div className="aspect-[4/3] overflow-hidden border-b-3 border-foreground relative">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background border-3 border-foreground"
              style={{ boxShadow: '2px 2px 0 hsl(var(--foreground))' }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background border-3 border-foreground"
              style={{ boxShadow: '2px 2px 0 hsl(var(--foreground))' }}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Badge */}
      {badgeText && (
        <div
          className="absolute bottom-4 left-4 border-3 border-foreground px-4 py-2"
          style={{ 
            boxShadow: '3px 3px 0 hsl(var(--foreground))',
            backgroundColor: badgeColor 
          }}
        >
          <span className="text-xs font-bold uppercase tracking-wide">{badgeText}</span>
        </div>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 border-2 border-foreground transition-colors",
                index === currentIndex ? "bg-foreground" : "bg-background"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { ImageCarousel };
