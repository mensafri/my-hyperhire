// components/SplashScreen.tsx
'use client';

import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '@/public/animations/loading.json'; // Pastikan path sesuai

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // Durasi splash screen dalam milidetik

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default SplashScreen;
