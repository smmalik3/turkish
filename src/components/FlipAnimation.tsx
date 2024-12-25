import React from 'react';

interface FlipAnimationProps {
  isFlipped: boolean;
  children: React.ReactNode;
}

const FlipAnimation: React.FC<FlipAnimationProps> = ({ isFlipped, children }) => {
  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        {children}
      </div>
    </div>
  );
};

export default FlipAnimation;