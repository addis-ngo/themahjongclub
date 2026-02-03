import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TeamMember } from '../types';

interface TeamCarouselProps {
  members: TeamMember[];
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({ members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1; // Always showing 1 large block

  const maxIndex = Math.max(0, members.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  // Calculate track width and item movement percentages
  const trackWidthPercent = members.length * 100;
  const itemWidthPercent = 100 / members.length;
  const xPosition = -(currentIndex * itemWidthPercent);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 md:px-12">
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-mahjongRed/80 hover:bg-mahjongRed text-white transition-all rounded-full z-20 backdrop-blur-sm -ml-2 md:-ml-8 shadow-lg border border-white/10"
        aria-label="Previous member"
      >
        <ChevronLeft size={28} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-mahjongRed/80 hover:bg-mahjongRed text-white transition-all rounded-full z-20 backdrop-blur-sm -mr-2 md:-mr-8 shadow-lg border border-white/10"
        aria-label="Next member"
      >
        <ChevronRight size={28} />
      </button>

      {/* Carousel Viewport */}
      <div className="overflow-hidden w-full rounded-2xl shadow-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-sm transition-colors duration-300">
        <motion.div
          className="flex h-full"
          style={{ width: `${trackWidthPercent}%` }}
          animate={{ x: `${xPosition}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {members.map((member) => (
            <div 
              key={member.id} 
              className="h-full relative"
              style={{ width: `${itemWidthPercent}%` }}
            >
              {/* Large Block Content - Now with padding and constrained image */}
              <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-10 gap-8 md:gap-12 h-full min-h-[400px]">
                
                {/* Image Side - Constrained Square */}
                <div className="shrink-0 relative group">
                   
                   <div className="relative w-52 h-52 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl bg-neutral-900">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                   </div>
                </div>
                
                {/* Content Side */}
                <div className="flex flex-col text-center md:text-left max-w-lg">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-mahjongBlack bg-mahjongGold rounded-sm uppercase">
                            {member.role}
                        </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-mahjongBlack dark:text-white mb-4 md:mb-6 transition-colors duration-300">
                        {member.name}
                    </h3>
                    
                    <p className="text-lg md:text-xl text-mahjongBlack/80 dark:text-offWhite/80 leading-relaxed pl-0 md:pl-6 border-l-0 md:border-l-4 border-mahjongRed/50 transition-colors duration-300">
                        {member.about}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-6">
        {members.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-mahjongRed' : 'w-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;