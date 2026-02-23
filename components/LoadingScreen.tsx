import React, { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const progressStep = 100 / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(currentStep * progressStep, 100);
      setProgress(Math.floor(newProgress));
      setFillHeight(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onLoadingComplete();
        }, 500); // Small delay before hiding
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center z-50">
      {/* Main TECH KELLY Text */}
      <div className="relative mb-8">
        <div className="relative overflow-hidden flex justify-center items-center">
          {/* Outline text */}
          <h1
            className="text-4xl sm:text-6xl md:text-9xl text-center font-black tracking-wider text-transparent leading-none pb-2"
            style={{
              WebkitTextStroke: "2px #10b981", // emerald-500
            }}
          >
            TECH KELLY
          </h1>

          {/* Fill overlay */}
          <div
            className="absolute inset-0 overflow-hidden pb-2"
            style={{
              clipPath: `inset(${100 - fillHeight}% 0 0 0)`,
            }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-9xl text-center font-black tracking-wider text-emerald-500 leading-none">
              TECH KELLY
            </h1>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="flex flex-col px-2 items-center space-y-4 w-80">
        {/* Progress Bar */}
        <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-100 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="text-emerald-500 text-xl font-bold tabular-nums">
          {progress}%
        </div>

        {/* Loading Text */}
        <div className="text-zinc-400 text-sm tracking-wide">LOADING...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
