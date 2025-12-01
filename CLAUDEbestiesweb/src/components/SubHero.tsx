import React from 'react';

const SubHero: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 text-center px-4 relative overflow-hidden">
            {/* Dreamy Background blurs */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-primary/10 to-secondary/10 pointer-events-none" />
            <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" />
            <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/15 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-3xl opacity-40" />

            {/* Floating emojis */}
            <div className="hidden lg:block floating-emoji" style={{ top: '15%', left: '10%', animationDelay: '0s' }}>💬</div>
            <div className="hidden lg:block floating-emoji" style={{ top: '20%', right: '12%', animationDelay: '1.5s' }}>📱</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '25%', left: '8%', animationDelay: '2s' }}>🏠</div>

            <div className="max-w-4xl mx-auto relative z-10">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-text-primary px-4 mb-4">
                    Your besties always say <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">"text me when you get home"</span>...
                </h3>
                <p className="text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold px-4 mb-8">
                    Now they don't have to rely on you remembering. ✨
                </p>
                <div className="relative p-4 sm:p-6 bg-gradient-to-br from-orange-50/70 to-red-50/70 backdrop-blur-sm rounded-2xl border-2 border-orange-200 space-y-3 sm:space-y-4 overflow-hidden group shadow-soft-dreamy hover:shadow-soft-dreamy-hover transition-all duration-300 hover:-translate-y-1">

                    <div className="relative z-10">
                        <p className="text-sm sm:text-base text-gray-800 leading-snug">
                            You set a check-in. If you forget to tap <span className="text-primary font-semibold">"I'm Safe"</span>, Besties automatically alerts your chosen friends through <span className="text-secondary font-semibold">Messenger</span> or <span className="text-secondary font-semibold">WhatsApp</span>.
                        </p>
                        <div className="mt-4 pt-4 border-t-2 border-orange-200">
                            <p className="font-display text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                                No fear. No stress. Just besties looking after besties. 💕✨
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubHero;