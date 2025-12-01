import React from 'react';
import { Icon } from './common/Icon';
import { FEATURES_DATA } from '../constants';
import type { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="relative bg-white rounded-xl p-4 hover:shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 border border-gray-200 h-full group">
        <div className="relative z-10">
            <div className="flex items-start gap-2 mb-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary shadow-sm group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <Icon name={feature.icon} className="text-lg" />
                </div>
                <h4 className="font-semibold text-sm text-gray-900 pt-1">{feature.title}</h4>
            </div>
            <p className="text-xs text-gray-700 leading-snug">{feature.description}</p>
        </div>
    </div>
);

const Features: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4 relative overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-primary/6 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-secondary/6 to-transparent blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '10%', right: '8%', animationDelay: '0s' }}>⚡</div>
            <div className="hidden lg:block floating-emoji" style={{ top: '40%', left: '5%', animationDelay: '1s' }}>🛡️</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '20%', right: '10%', animationDelay: '2s' }}>✨</div>

            <div className="relative z-10">
                {FEATURES_DATA.map((category, index) => (
                    <div key={category.title} className={index > 0 ? "mt-12" : ""}>
                        <h3 className="flex items-center justify-center gap-2 font-display text-xl sm:text-2xl text-center mb-6 sm:mb-8 px-4">
                           <span className="text-2xl">{category.emoji}</span>
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">{category.title}</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {category.items.map(feature => (
                                <FeatureCard key={feature.title} feature={feature} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;