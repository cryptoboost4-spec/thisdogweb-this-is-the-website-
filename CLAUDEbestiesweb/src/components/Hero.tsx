import React from 'react';
import { Button } from './common/Button';
import { EmailForm } from './common/EmailForm';

interface HeroProps {
    onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    return (
        <section className="relative text-center py-12 sm:py-20 md:py-32 px-4">
            {/* Floating Hearts - More visible on desktop, fewer on mobile */}
            <div className="hidden sm:block floating-heart" style={{ top: '10%', left: '10%', fontSize: '20px', animationDelay: '0s', animationDuration: '8s' }}>💕</div>
            <div className="floating-heart" style={{ top: '20%', right: '15%', fontSize: '20px', animationDelay: '1s', animationDuration: '10s' }}>💖</div>
            <div className="hidden md:block floating-heart" style={{ bottom: '30%', left: '20%', fontSize: '18px', animationDelay: '2s', animationDuration: '9s' }}>💗</div>
            <div className="hidden sm:block floating-heart" style={{ top: '40%', right: '25%', fontSize: '22px', animationDelay: '1.5s', animationDuration: '11s' }}>💓</div>
            <div className="floating-heart" style={{ bottom: '20%', right: '10%', fontSize: '18px', animationDelay: '0.5s', animationDuration: '10s' }}>💕</div>
            <div className="hidden md:block floating-heart" style={{ top: '60%', left: '15%', fontSize: '16px', animationDelay: '2.5s', animationDuration: '12s' }}>💖</div>

            {/* Mobile-first heading sizes */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary tracking-wider animate-bounce-gentle">
                BESTIES
            </h1>
            <h2 className="mt-3 sm:mt-4 font-display text-xl sm:text-2xl md:text-3xl text-primary px-4">
                Your best friends. Your automatic safety net.
            </h2>
            <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg text-text-secondary font-semibold px-4">
                Go out, meet people, live life — Besties checks in for you and lets your friends know if something's wrong.
            </p>

            {/* Mobile-first button layout */}
            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:gap-6">
                 <div className="flex flex-col w-full max-w-md sm:max-w-none sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4">
                    <Button variant="disabled" iconLeft="lock" className="w-full sm:w-auto">
                        Enter Site
                    </Button>
                    <Button variant="secondary" iconLeft="how_to_vote" onClick={onNavigate} className="w-full sm:w-auto">
                        Vote for the Besties Logo
                    </Button>
                </div>
                <div className="w-full max-w-md px-4">
                   <EmailForm />
                </div>
            </div>
        </section>
    );
};

export default Hero;