import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MahjongTileData } from '../types';

interface MahjongTileProps {
  data: MahjongTileData;
}

const MahjongTile: React.FC<MahjongTileProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-24 h-32 md:w-32 md:h-44 cursor-pointer group mx-auto [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 70, 
          damping: 15,
          mass: 1 
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of Tile */}
        <div 
          className="absolute inset-0 bg-offWhite border-2 border-gray-200 rounded-lg shadow-xl flex flex-col items-center justify-center z-20"
          style={{ backfaceVisibility: 'hidden' }}
        >
            {/* Glossy highlight effect */}
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent opacity-60 rounded-t-lg pointer-events-none" />
            
            <span className="text-5xl md:text-6xl font-serif font-black text-mahjongBlack leading-none mb-1">
              {data.character}
            </span>
            
            {/* 3D depth illusion at bottom */}
            <div className="absolute bottom-0 w-full h-3 bg-gray-300 rounded-b-lg" />
        </div>

        {/* Back of Tile */}
        <div 
          className="absolute inset-0 bg-offWhite rounded-lg shadow-xl flex flex-col items-center justify-center border-2 border-gray-200"
          style={{ 
            transform: "rotateY(180deg)", 
            backfaceVisibility: 'hidden' 
          }}
        >
          {/* Glossy highlight effect */}
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent opacity-60 rounded-t-lg pointer-events-none" />

          {/* Back pattern or Info */}
          <div className="text-center p-2 flex flex-col items-center">
            <span className="text-6xl md:text-7xl font-bold text-mahjongBlack mb-1 leading-none">
              {data.number}
            </span>
            <span className="text-mahjongBlack/80 text-lg md:text-xl font-medium font-serif italic">
              {data.pinyin}
            </span>
          </div>
          {/* 3D depth illusion at bottom for back */}
          <div className="absolute bottom-0 w-full h-3 bg-gray-300 rounded-b-lg" />
        </div>
      </motion.div>
    </div>
  );
};

export default MahjongTile;