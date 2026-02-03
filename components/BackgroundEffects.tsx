import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Sparkle {
  id: number;
  top: string;
  left: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

const BackgroundEffects: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      // Create distinct sets of sparkles for better distribution
      const count = 35;
      const colors = ['#D4AF37', '#D60000', '#FFFFFF', '#D4AF37']; 
      
      return Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1, // 1-4px
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 4 + 3, // 3-7s
        delay: Math.random() * 5
      }));
    };

    setSparkles(generateSparkles());
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            boxShadow: `0 0 ${s.size * 2}px ${s.color}`
          }}
          animate={{
            y: [0, -30, -60],
            opacity: [0, 0.7, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffects;