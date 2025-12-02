import React from 'react';

interface CustomIconProps {
  type: 'sparkle' | 'heart' | 'star' | 'paw' | 'bone';
  className?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  type,
  className = ''
}) => {
  const icons = {
    sparkle: (
      <svg
        className={`w-6 h-6 ${className} animate-sparkle`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF69B4" />
            <stop offset="100%" stopColor="#9370DB" />
          </linearGradient>
        </defs>
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="url(#sparkleGradient)"
        />
      </svg>
    ),
    heart: (
      <svg
        className={`w-6 h-6 ${className} animate-pulse-slow`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF69B4" />
            <stop offset="100%" stopColor="#9370DB" />
          </linearGradient>
        </defs>
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="url(#heartGradient)"
        />
      </svg>
    ),
    star: (
      <svg
        className={`w-6 h-6 ${className} animate-glow-pulse`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF69B4" />
            <stop offset="100%" stopColor="#9370DB" />
          </linearGradient>
        </defs>
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="url(#starGradient)"
        />
      </svg>
    ),
    paw: (
      <svg
        className={`w-6 h-6 ${className} animate-bounce-gentle`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF69B4" />
            <stop offset="100%" stopColor="#9370DB" />
          </linearGradient>
        </defs>
        <g fill="url(#pawGradient)">
          <ellipse cx="8" cy="6" rx="2" ry="3" />
          <ellipse cx="16" cy="6" rx="2" ry="3" />
          <ellipse cx="6" cy="11" rx="2" ry="3" />
          <ellipse cx="18" cy="11" rx="2" ry="3" />
          <path d="M12 10c-2.5 0-4 2-4 4.5S10 20 12 20s4-3 4-5.5-1.5-4.5-4-4.5z" />
        </g>
      </svg>
    ),
    bone: (
      <svg
        className={`w-6 h-6 ${className} animate-wiggle`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="boneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF69B4" />
            <stop offset="100%" stopColor="#9370DB" />
          </linearGradient>
        </defs>
        <path
          d="M5 7a3 3 0 1 0 0 6 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1 3 3 0 1 0 0 6c1.6 0 3-1.3 3-3v-2c0-.5.4-1 1-1h6a1 1 0 0 1 1 1v2c0 1.7 1.4 3 3 3a3 3 0 1 0 0-6 1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1 3 3 0 1 0 0-6c-1.6 0-3 1.3-3 3v2c0 .5-.4 1-1 1H9a1 1 0 0 1-1-1V7c0-1.7-1.4-3-3-3z"
          fill="url(#boneGradient)"
        />
      </svg>
    )
  };

  return icons[type] || icons.sparkle;
};

export default CustomIcon;
