import { useState, useEffect } from 'react';

interface ScreenSize {
  width: number;
  height: number;
  isMobile: boolean;
  isDesktop: boolean;
}

export default function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width,
      height,
      isMobile: width < 768,
      isDesktop: width >= 768,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({
        width,
        height,
        isMobile: width < 768,
        isDesktop: width >= 768,
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}