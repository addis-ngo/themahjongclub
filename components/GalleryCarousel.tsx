import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryCarouselProps {
  images: GalleryItem[];
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // 1 item on mobile, 2 on tablet, 3 on desktop
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 640) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, images.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const trackWidthPercent = (images.length / itemsPerPage) * 100;
  const itemWidthPercent = 100 / images.length;
  const xPosition = -(currentIndex * itemWidthPercent);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 md:px-12">
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-mahjongRed hover:border-mahjongRed hover:text-white text-mahjongBlack dark:text-white transition-all rounded-full z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-mahjongRed hover:border-mahjongRed hover:text-white text-mahjongBlack dark:text-white transition-all rounded-full z-10"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Viewport */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex"
          style={{ width: `${trackWidthPercent}%` }}
          animate={{ x: `${xPosition}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="px-2 md:px-3"
              style={{ width: `${itemWidthPercent}%` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-mahjongRed' : 'w-1.5 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;