'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CardSlider = ({ cards }: { cards: any[] }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => prevOffset + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (offset >= cards.length) {
      setOffset(0);
    }
  }, [offset, cards.length]);

  return (
    <div className="relative overflow-hidden w-full hidden md:block">
      <motion.div
        className="flex gap-4 sm:gap-6"
        initial={{ x: 0 }}
        animate={{ x: -offset * 240 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-row items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-20 rounded-lg shadow-lg border px-4 bg-white/30 backdrop-blur-md border-white/20">
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 relative">
              <Image src={card.icon} fill alt={card.text} className="object-contain" />
            </div>
            <p className="flex-grow text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-100 ml-4">
              {card.text}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardSlider;
