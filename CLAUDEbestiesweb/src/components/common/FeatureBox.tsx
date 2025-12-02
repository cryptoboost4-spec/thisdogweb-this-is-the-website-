import React from 'react';

interface FeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorScheme?: 'pink' | 'purple' | 'fuchsia' | 'rose';
}

const FeatureBox: React.FC<FeatureBoxProps> = ({
  icon,
  title,
  description,
  colorScheme = 'pink'
}) => {
  const colorClasses = {
    pink: 'bg-pink-100 text-pink-800',
    purple: 'bg-purple-100 text-purple-800',
    fuchsia: 'bg-fuchsia-100 text-fuchsia-800',
    rose: 'bg-rose-100 text-rose-800'
  };

  return (
    <div
      className={`
        ${colorClasses[colorScheme]}
        rounded-xl
        p-4
        flex
        flex-col
        gap-2
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-soft
      `}
    >
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-sm font-bold font-display">
          {title}
        </h3>
      </div>
      <p className="text-xs font-body opacity-80">
        {description}
      </p>
    </div>
  );
};

export default FeatureBox;
