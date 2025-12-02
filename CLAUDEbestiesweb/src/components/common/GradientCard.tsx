import React from 'react';

interface GradientCardProps {
  variant?: 'pink-purple' | 'purple-pink' | 'orange-red';
  children: React.ReactNode;
  className?: string;
}

const GradientCard: React.FC<GradientCardProps> = ({
  variant = 'pink-purple',
  children,
  className = ''
}) => {
  const gradientClasses = {
    'pink-purple': 'bg-gradient-pink-purple',
    'purple-pink': 'bg-gradient-purple-pink',
    'orange-red': 'bg-gradient-to-br from-orange-400 to-red-500'
  };

  return (
    <div
      className={`
        ${gradientClasses[variant]}
        rounded-2xl
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GradientCard;
