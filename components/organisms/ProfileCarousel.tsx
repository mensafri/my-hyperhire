'use client';

import { useEffect, useState } from 'react';
import ProfileCard from '../molecules/ProfileCard';
import { getProfiles } from '@/app/actions/getProfiles';

export default function ProfileCarousel() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<'next' | 'prev'>('next');

  // Fetch profiles from server
  useEffect(() => {
    async function fetchProfiles() {
      const data = await getProfiles();
      setProfiles(data);
    }
    fetchProfiles();
  }, []);

  // Calculate the index of previous and next cards
  const prevIndex = (currentIndex - 1 + profiles.length) % profiles.length;
  const nextIndex = (currentIndex + 1) % profiles.length;

  // Handle navigation
  const handlePrev = () => {
    setAnimationDirection('prev');
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    setAnimationDirection('next');
    setCurrentIndex(nextIndex);
  };

  // Handle card click
  const handleCardClick = (index: number) => {
    setAnimationDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  if (profiles.length === 0) return <p>Loading...</p>;

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Cards */}
      <div className="relative flex justify-center items-center h-96">
        {/* Previous Card */}
        <div
          className={`absolute left-0 transform scale-90 opacity-70 z-10 cursor-pointer transition-all duration-500 ${
            animationDirection === 'prev' ? 'animate-slideInFromLeft' : ''
          }`}
          onClick={() => handleCardClick(prevIndex)}>
          <ProfileCard {...profiles[prevIndex]} />
        </div>

        {/* Current Card */}
        <div
          className={`relative z-20 scale-100 opacity-100 transition-all duration-500 ${
            animationDirection === 'next' ? 'animate-slideInFromRight' : 'animate-slideInFromLeft'
          }`}>
          <ProfileCard {...profiles[currentIndex]} />
        </div>

        {/* Next Card */}
        <div
          className={`absolute right-0 transform scale-90 opacity-70 z-10 cursor-pointer transition-all duration-500 ${
            animationDirection === 'next' ? 'animate-slideInFromRight' : ''
          }`}
          onClick={() => handleCardClick(nextIndex)}>
          <ProfileCard {...profiles[nextIndex]} />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-4 z-30">
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-4 z-30">
        ❯
      </button>
    </div>
  );
}
