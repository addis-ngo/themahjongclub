import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import MahjongTile from './components/MahjongTile';
import FAQ from './components/FAQ';
import TeamCarousel from './components/TeamCarousel';
import GalleryCarousel from './components/GalleryCarousel';
import IdentityAccordion from './components/IdentityAccordion';
import { MAHJONG_NUMBERS, FAQS, LINKS, TEAM_MEMBERS, GALLERY_IMAGES, IMAGES, IDENTITY_CARDS } from './constants';
import { MapPin, Clock, ArrowRight, Sun, Moon } from 'lucide-react';

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // NEW: Automatically update favicon to match the logo in constants
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = IMAGES.logo;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = IMAGES.logo;
      document.head.appendChild(newLink);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-paper dark:bg-mahjongBlack text-mahjongBlack dark:text-offWhite font-sans selection:bg-mahjongRed selection:text-white relative min-h-screen transition-colors duration-300">
      <Navbar />
      
      <Hero />

      {/* About Mahjong Section */}
      <Section id="about" customPadding="py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-mahjongBlack dark:text-offWhite mb-8">
              What is <span className="text-mahjongRed">Mahjong?</span>
            </h2>
            <p className="text-lg text-mahjongBlack/70 dark:text-offWhite/70 mb-6 leading-relaxed">
              Mahjong (麻将) is a tile-based game that was developed in the 19th century in China and has spread throughout the world. It is commonly played by four players and is a game of skill, strategy, and calculation, involving a degree of chance.
            </p>
            <div className="p-6 bg-black/5 dark:bg-white/5 border border-mahjongGold/30 border-l-4 border-l-mahjongGold transition-colors duration-300">
              <h3 className="text-xl font-bold text-mahjongGold mb-2">Chinese vs. American</h3>
              <p className="text-sm text-mahjongBlack/60 dark:text-offWhite/60">
                Unlike American Mahjong, the traditional Chinese version focuses more on flexible hand building and doesn't use Joker tiles or annual cards. It's a fluid, fast-paced game of patterns and probabilities.
              </p>
            </div>
          </div>
          <div className="relative w-full aspect-square bg-neutral-900 overflow-hidden rounded-2xl shadow-2xl">
            {/* Image from constants */}
            <img 
              src={IMAGES.aboutSection}
              alt="Mahjong Tiles" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* What is Mahjong Club Section (Interactive) */}
      <Section id="club" className="relative" customPadding="py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-16">
             <span className="text-mahjongRed font-bold tracking-widest uppercase text-sm mb-4 block">Our Community</span>
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-mahjongBlack dark:text-offWhite">
                What is <span className="text-mahjongRed">Mahjong</span> <span className="text-mahjongBlack dark:text-white">Club?</span>
             </h2>
             <p className="mt-6 text-lg text-mahjongBlack/60 dark:text-offWhite/60 max-w-2xl mx-auto">
               The club is what you make of it. See what we have to offer!
             </p>
           </div>
           
           <IdentityAccordion cards={IDENTITY_CARDS} />
        </div>
      </Section>

      {/* Meet the Team Section */}
      <Section id="team" customPadding="py-10 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6">Meet the Team</h2>
        </div>
        <TeamCarousel members={TEAM_MEMBERS} />
      </Section>

      {/* Why Join / Benefits (Integrated above, emphasizing CTA here) */}
      <Section id="why-join" customPadding="py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-mahjongRed p-10 md:p-16 relative overflow-hidden isolate shadow-2xl">
           {/* Cool Fish Scale Pattern Background */}
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" width="100%" height="100%">
                  <defs>
                      <pattern id="fish-scale" x="0" y="0" width="80" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                          {/* Row 1 Scales */}
                          <path d="M0,0 Q40,48 80,0" fill="none" stroke="currentColor" strokeWidth="2" className="text-black" />
                          {/* Row 2 Scales (offset) */}
                          <path d="M-40,24 Q0,72 40,24 M40,24 Q80,72 120,24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black" />
                      </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#fish-scale)" />
              </svg>
           </div>
           
           {/* Large Decorative Character */}
           <div className="absolute -right-10 -bottom-20 opacity-10 transform rotate-12 pointer-events-none select-none">
              <span className="text-[15rem] leading-none font-serif text-black">🀄</span>
           </div>

           <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Ready to Play?</h2>
             <p className="text-white/80 text-lg max-w-xl">
               Join us for a semester of strategy, snacks, and good vibes. No experience required.
             </p>
           </div>
           <a 
              href={LINKS.signup}
              target="_blank"
              rel="noopener noreferrer" 
              className="relative z-10 bg-black text-white px-8 py-4 font-bold tracking-widest hover:bg-white hover:text-mahjongBlack transition-colors flex items-center gap-2"
            >
              SIGN UP <ArrowRight size={20} />
           </a>
        </div>
      </Section>

      {/* Meeting Info */}
      <Section id="schedule" customPadding="py-8 md:py-12">
        <div className="text-center mb-12">
           <span className="text-mahjongRed font-bold tracking-widest uppercase text-sm mb-2 block">Join Us</span>
           <h2 className="text-4xl font-serif font-bold">Weekly Schedule</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-black/5 dark:bg-white/5 p-8 border border-mahjongGold rounded-3xl flex flex-col items-center text-center transition-colors duration-300">
            <Clock size={48} className="text-mahjongGold mb-4" />
            <h3 className="text-2xl font-bold mb-2">Tuesdays</h3>
            <p className="text-mahjongBlack/60 dark:text-offWhite/60 text-xl">7:15 PM</p>
          </div>
          <div className="bg-black/5 dark:bg-white/5 p-8 border border-mahjongRed rounded-3xl flex flex-col items-center text-center transition-colors duration-300">
            <MapPin size={48} className="text-mahjongRed mb-4" />
            <h3 className="text-2xl font-bold mb-2">Johnson Center</h3>
            <p className="text-mahjongBlack/60 dark:text-offWhite/60 text-xl">Room 204 (Activity Room)</p>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery" customPadding="py-8 md:py-12">
        <div className="text-center mb-12">
          <span className="text-mahjongGold font-bold tracking-widest uppercase text-sm mb-2 block">Gallery</span>
          <h2 className="text-4xl font-serif font-bold">Club Moments</h2>
        </div>
        <GalleryCarousel images={GALLERY_IMAGES} />
      </Section>

      {/* Learn Numbers */}
      <Section id="learn" className="bg-black/5 dark:bg-white/5 transition-colors duration-300" customPadding="py-8 md:py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6">Learn the Numbers</h2>
          <p className="text-mahjongBlack/60 dark:text-offWhite/60 max-w-2xl mx-auto">
            New to Chinese characters? Click on any tile to flip it and reveal the Pinyin pronunciation.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-6 max-w-5xl mx-auto">
          {MAHJONG_NUMBERS.map((tile) => (
            <MahjongTile key={tile.number} data={tile} />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" customPadding="py-8 md:py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold">Frequently Asked Questions</h2>
        </div>
        <FAQ items={FAQS} />
      </Section>

      {/* Footer-like bottom area */}
      <div className="py-12 border-t border-mahjongBlack/10 dark:border-white/10 text-center text-mahjongBlack/30 dark:text-offWhite/30 text-sm relative z-10 transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} The Mahjong Club. All rights reserved.</p>
        <p className="mt-2 mb-6">Designed by Addis</p>
        
        <button 
          onClick={toggleTheme}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/10 transition-all text-mahjongBlack/50 dark:text-offWhite/50 hover:text-mahjongBlack dark:hover:text-offWhite border border-black/5 dark:border-white/10"
          aria-label="Toggle Dark Mode"
        >
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          <span className="text-[10px] font-bold tracking-widest uppercase">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;
