// components/ClientWrapper.tsx
'use client';

import React, { useState } from 'react';
import SplashScreen from './SplashScreen';
import Header from './organisms/Header';
import Footer from './organisms/Footer';

interface ClientWrapperProps {
  children: React.ReactNode;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <SplashScreen onFinish={handleFinishLoading} />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default ClientWrapper;
