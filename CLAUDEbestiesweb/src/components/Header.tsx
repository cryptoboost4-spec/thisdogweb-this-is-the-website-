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
                <div className="w-10 sm:w-12" />
            </div>
        </header>
    );
};

export default Header;