'use client';

import { useState } from 'react';
import ProfileCard from '../molecules/ProfileCard';

export default function ProfileCarousel({ profiles }: { profiles: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex = (currentIndex - 1 + profiles.length) % profiles.length;
  const nextIndex = (currentIndex + 1) % profiles.length;

  const handlePrev = () => {
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative flex justify-center items-center h-72 sm:h-80 md:h-96 overflow-hidden">
        <div
          className="absolute left-0 transform translate-x-[-120%] sm:translate-x-[-80%] scale-75 sm:scale-90 opacity-50 sm:opacity-70 z-10 cursor-pointer transition-all duration-500"
          onClick={handlePrev}>
          <ProfileCard {...profiles[prevIndex]} />
        </div>

        <div className="relative z-20 scale-90 sm:scale-100 opacity-100 transition-all duration-500">
          <ProfileCard {...profiles[currentIndex]} />
        </div>

        <div
          className="absolute right-0 transform translate-x-[120%] sm:translate-x-[80%] scale-75 sm:scale-90 opacity-50 sm:opacity-70 z-10 cursor-pointer transition-all duration-500"
          onClick={handleNext}>
          <ProfileCard {...profiles[nextIndex]} />
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-lg sm:text-2xl text-white bg-gray-800 rounded-full p-2 sm:p-3 z-30 hover:bg-gray-700">
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-lg sm:text-2xl text-white bg-gray-800 rounded-full p-2 sm:p-3 z-30 hover:bg-gray-700">
        ❯
      </button>
    </div>
  );
}
