import React from 'react';
import { Icon } from './common/Icon';
import { TRUST_BADGES_DATA } from '../constants';

const TrustBadges: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-transparent via-secondary/10 to-transparent relative overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-primary/8 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-secondary/8 to-transparent blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

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
                    {TRUST_BADGES_DATA.map((badge, index) => {
                        const colors = [
                            { bg: 'from-pink-100 to-purple-100', border: 'border-pink-200', iconBg: 'from-pink-400 to-pink-600' },
                            { bg: 'from-purple-100 to-fuchsia-100', border: 'border-purple-200', iconBg: 'from-purple-400 to-purple-600' },
                            { bg: 'from-fuchsia-100 to-pink-100', border: 'border-fuchsia-200', iconBg: 'from-fuchsia-400 to-fuchsia-600' }
                        ];
                        const color = colors[index % colors.length];

                        return (
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${color.bg} rounded-xl p-4 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border ${color.border} relative overflow-hidden`}
                        >
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="flex items-center justify-center mb-3">
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color.iconBg} flex items-center justify-center shadow-sm group-hover:scale-105 transition-all duration-300`}>
                                        <Icon name={badge.icon} className="text-white text-xl" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h4 className="font-semibold text-sm text-gray-900 mb-2">
                                    {badge.title}
                                </h4>

                                {/* Description */}
                                <p className="text-xs text-gray-700 leading-snug">
                                    {badge.description}
                                </p>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
