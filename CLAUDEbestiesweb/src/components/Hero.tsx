import React from 'react';
import { Button } from './common/Button';
import { EmailForm } from './common/EmailForm';

interface HeroProps {
    onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    return (
        <section className="relative text-center py-20 sm:py-32">
            {/* Floating Hearts */}
            <div className="floating-heart" style={{ top: '10%', left: '10%', fontSize: '20px', animationDelay: '0s', animationDuration: '8s' }}>💕</div>
            <div className="floating-heart" style={{ top: '20%', right: '15%', fontSize: '24px', animationDelay: '1s', animationDuration: '10s' }}>💖</div>
            <div className="floating-heart" style={{ bottom: '30%', left: '20%', fontSize: '18px', animationDelay: '2s', animationDuration: '9s' }}>💗</div>
            <div className="floating-heart" style={{ top: '40%', right: '25%', fontSize: '22px', animationDelay: '1.5s', animationDuration: '11s' }}>💓</div>
            <div className="floating-heart" style={{ bottom: '20%', right: '10%', fontSize: '20px', animationDelay: '0.5s', animationDuration: '10s' }}>💕</div>
            <div className="floating-heart" style={{ top: '60%', left: '15%', fontSize: '16px', animationDelay: '2.5s', animationDuration: '12s' }}>💖</div>

            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-text-primary tracking-wider">
                BESTIES
            </h1>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl text-primary">
                Your best friends. Your automatic safety net.
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary font-semibold">
                Go out, meet people, live life — Besties checks in for you and lets your friends know if something's wrong.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-6">
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="disabled" iconLeft="lock">
                        Enter Site
                    </Button>
                    <Button variant="secondary" iconLeft="how_to_vote" onClick={onNavigate}>
                        Vote for the Besties Logo
                    </Button>
                </div>
                <div className="w-full max-w-md">
                   <EmailForm />
                </div>
            </div>
        </section>
    );
};

export default Hero;