import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, LINKS, IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-mahjongBlack/95 backdrop-blur-md py-2 border-b border-black/5 dark:border-white/10 shadow-sm dark:shadow-none' 
          : 'bg-transparent py-6 border-b border-transparent shadow-none'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-2xl font-serif font-bold tracking-tighter text-mahjongBlack dark:text-offWhite flex items-center gap-3 transition-colors"
        >
          {/* Logo from constants */}
          <img 
            src={IMAGES.logo} 
            alt="Mahjong Club Logo" 
            className="h-10 w-10 object-contain rounded-md"
          />
          <span>THE <span className="text-mahjongRed">MAHJONG</span> CLUB</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-mahjongBlack/80 dark:text-offWhite/80 hover:text-mahjongRed dark:hover:text-mahjongGold transition-colors uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={LINKS.signup}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mahjongRed text-white px-5 py-2 rounded-none font-bold text-sm tracking-widest transition-colors hover:bg-mahjongBlack hover:text-white dark:hover:bg-white dark:hover:text-mahjongBlack"
          >
            JOIN US
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-mahjongBlack dark:text-offWhite transition-colors outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-mahjongBlack border-b border-black/10 dark:border-white/10 py-6 px-6 flex flex-col gap-4 shadow-xl"
          >
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg font-medium text-mahjongBlack dark:text-offWhite hover:text-mahjongRed dark:hover:text-mahjongGold"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={LINKS.signup}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mahjongRed text-white px-5 py-3 text-center font-bold tracking-widest mt-2 hover:bg-mahjongBlack hover:text-white dark:hover:bg-white dark:hover:text-mahjongBlack transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              JOIN US
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;