import { useState, useEffect } from 'react';

// Global variable to track if app has loaded in this session
let hasAppLoaded = false;

export const useInitialLoad = () => {
  const [isLoading, setIsLoading] = useState(!hasAppLoaded);

  useEffect(() => {
    // If app hasn't loaded in this session, show loading
    if (!hasAppLoaded) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    // Mark app as loaded in this session
    hasAppLoaded = true;
    setIsLoading(false);
  };

  return {
    isLoading,
    handleLoadingComplete
  };
};