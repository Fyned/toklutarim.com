import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ProductImageSlider = ({ images, alts }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="relative flex-[0_0_100%] aspect-w-16 aspect-h-10" key={index}>
              <img 
                alt={alts[index]}
                className="w-full h-full object-cover"
               src={image} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-2 -translate-y-1/2">
        <Button size="icon" variant="ghost" className="rounded-full bg-black/30 hover:bg-black/50 text-white" onClick={scrollPrev}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-2 -translate-y-1/2">
        <Button size="icon" variant="ghost" className="rounded-full bg-black/30 hover:bg-black/50 text-white" onClick={scrollNext}>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              index === selectedIndex ? 'bg-primary scale-125' : 'bg-white/50'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;