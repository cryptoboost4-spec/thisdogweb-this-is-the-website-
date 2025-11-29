import React from 'react';

const SubHero: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 text-center px-4">
            <div className="max-w-3xl mx-auto">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-text-primary leading-tight px-4">
                    Your besties always say "text me when you get home"...
                </h3>
                <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-text-secondary font-semibold px-4">
                    Now they don't have to rely on you remembering.
                </p>
                <div className="mt-6 sm:mt-8 p-6 sm:p-8 bg-surface-light rounded-2xl shadow-soft hover:shadow-soft-hover backdrop-blur-sm space-y-3 sm:space-y-4 border-2 border-accent/20 transition-all duration-300">
                    <p className="text-base sm:text-lg text-text-primary font-bold leading-relaxed">You set a check-in. If you forget to tap "I'm Safe", Besties automatically alerts your chosen friends through Messenger or WhatsApp.</p>
                    <p className="font-display text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-bounce-gentle">
                        No fear. No stress. Just besties looking after besties.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SubHero;