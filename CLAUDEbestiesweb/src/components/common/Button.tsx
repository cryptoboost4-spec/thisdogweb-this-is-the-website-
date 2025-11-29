import React from 'react';
import { Icon } from './Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'disabled';
    iconLeft?: string;
    iconRight?: string;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', iconLeft, iconRight, children, className, ...props }) => {
    // Mobile-first: smaller padding on mobile, larger on desktop
    const baseClasses = 'font-display text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-soft transition-all duration-200 transform hover:scale-105 hover:shadow-soft-hover active:scale-95 flex items-center justify-center gap-2';

    const variantClasses = {
        primary: 'bg-gradient-to-r from-primary to-secondary text-white shadow-glow-pink',
        secondary: 'bg-surface-light text-primary border-2 border-primary hover:bg-accent',
        disabled: 'bg-text-secondary/30 text-text-primary/50 cursor-not-allowed shadow-none hover:scale-100',
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            disabled={variant === 'disabled'}
            {...props}
        >
            {iconLeft && <Icon name={iconLeft} className="text-xl sm:text-2xl" />}
            <span>{children}</span>
            {iconRight && <Icon name={iconRight} className="text-xl sm:text-2xl" />}
        </button>
    );
};