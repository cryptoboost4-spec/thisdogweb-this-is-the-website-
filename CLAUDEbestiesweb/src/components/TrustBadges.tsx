import React from 'react';
import { Icon } from './common/Icon';
import { TRUST_BADGES_DATA } from '../constants';

const TrustBadges: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-transparent via-secondary/10 to-transparent relative overflow-hidden">
            {/* Dreamy background blurs */}
            <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" />
            <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-3xl opacity-40" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-8 sm:mb-10">
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-text-primary mb-3">
                        Why Girls <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">Love</span> Besties ✨
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
                        Safety shouldn't cost money, track you, or be complicated. We built it the right way. 💕
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {TRUST_BADGES_DATA.map((badge, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-soft-dreamy hover:shadow-soft-dreamy-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 space-y-3 group"
                        >
                            {/* Icon with gradient */}
                            <Icon
                                name={badge.icon}
                                className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:scale-110 transition-all duration-300"
                            />

                            {/* Title */}
                            <h4 className="font-display text-sm font-semibold text-gray-900">
                                {badge.title}
                            </h4>

                            {/* Description */}
                            <p className="text-xs text-gray-700 leading-snug text-center">
                                {badge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
