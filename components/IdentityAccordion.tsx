import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IdentityCard } from '../types';

interface IdentityAccordionProps {
  cards: IdentityCard[];
}

const IdentityAccordion: React.FC<IdentityAccordionProps> = ({ cards }) => {
  const [activeId, setActiveId] = useState<string>(cards[0].id);

  return (
    <div className="w-full flex flex-col md:flex-row h-[600px] md:h-[500px] gap-4">
      {cards.map((card) => {
        const isActive = activeId === card.id;
        
        return (
          <motion.div
            key={card.id}
            layout
            onClick={() => setActiveId(card.id)}
            className={`relative rounded-3xl overflow-hidden cursor-pointer ${
              isActive ? 'flex-[3]' : 'flex-[1]'
            } ${card.color} transition-all duration-500 ease-in-out group`}
            initial={false}
          >
            {/* Overlay to darken inactive cards slightly */}
            <div className={`absolute inset-0 bg-black/20 transition-colors duration-300 ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-50'}`} />

            {/* Content Container */}
            <div className="relative h-full w-full p-6 md:p-8 overflow-hidden">
                <AnimatePresence mode="wait">
                    {isActive ? (
                        /* Active State: Content at Bottom */
                        <motion.div 
                            key="active"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col justify-end h-full relative z-10"
                        >
                             <motion.h3 
                                layout="position"
                                className="font-serif font-bold text-white mb-4 text-3xl md:text-5xl leading-none"
                             >
                               {card.title}
                             </motion.h3>
                             <motion.div
                               initial={{ opacity: 0, y: 20 }}
                               animate={{ opacity: 1, y: 0 }}
                               transition={{ delay: 0.1 }}
                             >
                               <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-lg">
                                 {card.description}
                               </p>
                             </motion.div>
                        </motion.div>
                    ) : (
                        /* Inactive State */
                        <motion.div 
                             key="inactive"
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             exit={{ opacity: 0 }}
                             transition={{ duration: 0.3 }}
                             className="absolute inset-0 flex items-center justify-center z-10"
                        >
                            {/* Mobile: Horizontal small title */}
                            <h3 className="md:hidden font-serif font-bold text-white text-xl text-center px-4">
                                {card.title}
                            </h3>

                            {/* Desktop: Vertical Large Title - Rotated to read bottom-to-top */}
                            <h3 className="hidden md:block font-serif font-bold text-white text-4xl tracking-widest whitespace-nowrap -rotate-90 origin-center opacity-80 group-hover:opacity-100 transition-opacity">
                                {card.title}
                            </h3>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default IdentityAccordion;