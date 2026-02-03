import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div 
            key={index} 
            className="border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 overflow-hidden transition-colors duration-300"
          >
            <button
              onClick={() => setActiveIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-mahjongRed dark:text-mahjongGold' : 'text-mahjongBlack dark:text-offWhite'}`}>
                {item.question}
              </span>
              <span className="text-mahjongBlack/50 dark:text-offWhite/50">
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 text-mahjongBlack/70 dark:text-offWhite/70 leading-relaxed border-t border-black/5 dark:border-white/5">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;