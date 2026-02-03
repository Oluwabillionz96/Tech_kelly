import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundPatternProps {
  variant?: 'circuit' | 'dots' | 'grid' | 'tech' | 'hexagon' | 'animated-dots';
  opacity?: number;
  animated?: boolean;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ 
  variant = 'circuit', 
  opacity = 0.5,
  animated = false 
}) => {
  const getPatternClass = () => {
    switch (variant) {
      case 'dots':
        return 'bg-pattern-dots';
      case 'grid':
        return 'bg-pattern-grid';
      case 'tech':
        return 'bg-pattern-tech';
      case 'hexagon':
        return 'bg-pattern-hexagon';
      case 'animated-dots':
        return 'bg-pattern-animated-dots';
      default:
        return 'bg-pattern-circuit';
    }
  };

  if (animated) {
    return (
      <motion.div 
        className={`fixed inset-0 pointer-events-none ${getPatternClass()}`}
        style={{ opacity }}
        animate={{ 
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    );
  }

  return (
    <div 
      className={`fixed inset-0 pointer-events-none ${getPatternClass()}`}
      style={{ opacity }}
    />
  );
};

export default BackgroundPattern;