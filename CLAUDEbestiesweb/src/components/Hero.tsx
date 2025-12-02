import React from 'react';

interface HeroProps {
    onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    return (
        <section className="relative text-center py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/3 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

            {/* Minimal floating hearts */}
            <div className="hidden lg:block floating-heart" style={{ top: '15%', right: '12%', fontSize: '24px', animationDelay: '0s', animationDuration: '10s' }}>💕</div>
            <div className="hidden lg:block floating-heart" style={{ bottom: '25%', left: '10%', fontSize: '22px', animationDelay: '1.5s', animationDuration: '11s' }}>💜</div>
            <div className="hidden lg:block floating-heart" style={{ top: '35%', left: '15%', fontSize: '20px', animationDelay: '2.5s', animationDuration: '12s' }}>✨</div>

            <div className="relative z-10">
                {/* Heading - cleaner and more compact */}
                <div className="text-5xl sm:text-6xl mb-4">💜</div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient-shift mb-4">
                    BESTIES
                </h1>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-4 mb-6 max-w-3xl mx-auto">
                    Your Safety Network. Always There When You Need It. ✨
                </h2>
                <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-secondary px-4 leading-relaxed">
                    <span className="font-semibold text-primary">First dates. Late nights. New places.</span> Your besties know you're safe — and get <span className="font-semibold text-primary">automatic alerts</span> if you're not. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">No awkward texts, no forgotten check-ins.</span> Just <span className="font-semibold text-primary">real friends looking out for each other.</span> 💕
                </p>
            </div>

            {/* Clean CTA */}
            <div className="relative mt-10 sm:mt-12 flex flex-col items-center justify-center gap-4">
                <a href="https://app.bestiesapp.xyz" target="_blank" rel="noopener noreferrer" className="group relative px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-display text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden inline-block">
                    <span className="relative z-10 flex items-center gap-2">
                        <span>Enter App</span>
                        <span className="text-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">✨</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                </a>
                <p className="text-text-secondary text-sm">
                    <span className="font-semibold text-primary">Start protecting your besties</span> today! 🎉
                </p>
            </div>
        </section>
    );
};

export default Hero;