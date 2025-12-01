import React from 'react';
import { Icon } from './common/Icon';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-background-light/80 p-3 sm:p-4 backdrop-blur-md shadow-soft">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex w-10 h-10 sm:w-12 sm:h-12 shrink-0 items-center justify-start text-primary animate-bounce-gentle">
                    <Icon name="favorite" className="text-3xl sm:text-4xl" />
                </div>
                <h1 className="flex-1 text-center font-display text-2xl sm:text-3xl tracking-wide text-text-primary">
                    Besties
                </h1>
                <a href="https://app.bestiesapp.xyz" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-body font-bold text-sm sm:text-base shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:scale-105 active:scale-95">
                    <span>Enter App</span>
                    <span className="text-lg">✨</span>
                </a>
                <div className="w-10 sm:hidden" />
            </div>
        </header>
    );
};

export default Header;