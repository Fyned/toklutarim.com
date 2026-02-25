import React, { useState, useEffect, useCallback, useContext } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AppContext } from '@/context/AppContext';
import { cn } from '@/lib/utils';
import { images } from '@/assets/images';

const slides = [
  {
    image: images.heroSlider1,
    alt: 'Gün batımında tarlada duran Toklu Tarım yem karma makinesi',
    title: 'Yem Karma Makinesi Üretiminde Güç ve Kalite',
    description: 'Çiftliğinizin verimini artırmak için tasarlanmış, en zorlu koşullara dayanıklı, yüksek performanslı ve ekonomik Toklu Tarım yem karma makineleri.',
    cta: 'Modelleri İncele',
    link: '/urunler'
  },
  {
    image: images.heroSlider2,
    alt: 'Modern bir çiftlikte hayvan ağırlığını ölçen hassas Toklu Tarım baskülü',
    title: 'Hassas Tartım, Güvenilir Sonuçlar',
    description: 'Hayvanlarınızın ağırlık takibini hatasız yapmanızı sağlayan, sağlam ve dijital baskül sistemlerimizle işletmenizin kontrolünü elinize alın.',
    cta: 'Teklif Alın',
    link: 'quote'
  },
  {
    image: images.heroSlider3,
    alt: 'Bir ineğin keyifle kullandığı otomatik hayvan kaşıma fırçası',
    title: 'Hayvan Refahında Devrim: Otomatik Kaşağı',
    description: 'Otomatik hayvan kaşıma fırçalarımızla hayvanlarınızın konforunu artırın, stresi azaltın ve süt verimini doğal yollarla destekleyin.',
    cta: 'Daha Fazla Bilgi',
    link: '/urunler/otomatik-kasagi'
  }
];

const HeroSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 8000, stopOnInteraction: false }),
    ]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const { openQuoteModal } = useContext(AppContext);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const togglePlay = useCallback(() => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;
        if (autoplay.isPlaying()) {
            autoplay.stop();
        } else {
            autoplay.play();
        }
        setIsPlaying(!autoplay.isPlaying());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => {
            setActiveIndex(emblaApi.selectedScrollSnap());
        };
        emblaApi.on('select', onSelect);
        onSelect();
        return () => emblaApi.off('select', onSelect);
    }, [emblaApi]);

    const handleCtaClick = (link) => {
        if (link === 'quote') {
            openQuoteModal();
        }
    };

    return (
        <div className="relative h-screen min-h-[700px] w-full overflow-hidden" ref={emblaRef}>
            <div className="flex h-full">
                {slides.map((slide, index) => (
                    <div key={index} className="relative flex-[0_0_100%] h-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-10" />
                        <img alt={slide.alt} className="absolute inset-0 w-full h-full object-cover" src={slide.image} />
                        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-4">
                            <AnimatePresence>
                                {index === activeIndex && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                                        className="max-w-4xl"
                                    >
                                        <motion.h2
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                            className="text-4xl md:text-7xl font-bold font-heading mb-4 text-white slider-text-shadow"
                                        >
                                            {slide.title}
                                        </motion.h2>
                                        <motion.p
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                            className="text-lg md:text-2xl font-body max-w-2xl mx-auto mb-8 text-gray-200 slider-text-shadow"
                                        >
                                            {slide.description}
                                        </motion.p>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                        >
                                            <Button size="lg" className="bg-gradient-to-r from-toklu-blue to-toklu-blue-dark text-white" onClick={() => handleCtaClick(slide.link)} asChild={slide.link !== 'quote'}>
                                                {slide.link !== 'quote' ? <a href={slide.link}>{slide.cta}</a> : <span>{slide.cta}</span>}
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute z-30 left-4 md:left-8 top-1/2 -translate-y-1/2">
                <Button size="icon" variant="ghost" className="rounded-full bg-white/10 hover:bg-white/20 text-white" onClick={scrollPrev} aria-label="Önceki slayt">
                    <ArrowLeft className="w-6 h-6" />
                </Button>
            </div>
            <div className="absolute z-30 right-4 md:right-8 top-1/2 -translate-y-1/2">
                <Button size="icon" variant="ghost" className="rounded-full bg-white/10 hover:bg-white/20 text-white" onClick={scrollNext} aria-label="Sonraki slayt">
                    <ArrowRight className="w-6 h-6" />
                </Button>
            </div>

            <div className="absolute z-30 bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <Button size="icon" variant="ghost" className="rounded-full bg-white/10 hover:bg-white/20 text-white w-8 h-8" onClick={togglePlay} aria-label={isPlaying ? 'Otomatik kaydırmayı durdur' : 'Otomatik kaydırmayı başlat'}>
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <div className="flex gap-2">
                    {slides.map((_, index) => (
                        <button key={index} onClick={() => scrollTo(index)} aria-label={`Slayt ${index + 1}`} className={cn('w-8 h-1 rounded-full transition-all duration-500', index === activeIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50')} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;