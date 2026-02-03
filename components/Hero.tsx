import React from 'react';
import { motion } from 'framer-motion';
import { LINKS } from '../constants';
import { Instagram } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundEffects />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-mahjongRed/5 rounded-[40%]"
         />
         <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-[50%] h-[50%] bg-mahjongGold/5 rounded-full"
         />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif font-black text-mahjongBlack dark:text-offWhite mb-4 leading-tight transition-colors duration-300">
            THE <span className="text-mahjongRed">MAHJONG</span> CLUB
          </h1>
          <span className="inline-block py-1 px-3 bg-mahjongGold/10 text-mahjongGold text-xs font-bold tracking-[0.2em] mb-8 uppercase">
            Est. 2026
          </span>
          <p className="text-lg md:text-2xl text-mahjongBlack/70 dark:text-offWhite/70 mb-10 max-w-2xl mx-auto font-light transition-colors duration-300">
            You must be pretty cool if you're here. <br/>
            Scroll down to see what this legendary club is all about.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href={LINKS.signup}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mahjongRed text-offWhite min-w-[200px] py-4 px-8 font-bold text-lg tracking-widest hover:bg-mahjongBlack hover:text-white dark:hover:bg-white dark:hover:text-mahjongBlack transition-colors duration-300 no-underline"
            >
              INTERESTED?
            </a>
            <div className="flex gap-4 items-center">
              <a 
                href={LINKS.instagram} 
                className="relative h-[54px] w-[54px] flex items-center justify-center border border-black/10 dark:border-white/20 text-mahjongBlack/70 dark:text-white/70 transition-all duration-500 group overflow-hidden hover:border-transparent hover:text-white"
              >
                {/* Gradient Overlay: starts purple at top-right (bl) */}
                <div className="absolute inset-0 bg-gradient-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                <Instagram size={20} className="relative z-10" />
              </a>
              <a 
                href={LINKS.discord} 
                className="h-[54px] px-6 flex items-center border border-black/10 dark:border-white/20 text-mahjongBlack/70 dark:text-white/70 transition-all duration-300 text-sm font-bold tracking-widest uppercase no-underline hover:bg-[#5865F2] hover:text-white hover:border-transparent"
              >
                Discord
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;