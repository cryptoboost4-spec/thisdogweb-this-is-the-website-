import React from 'react';
import { Icon } from './common/Icon';
import { FEATURES_DATA } from '../constants';
import type { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-soft-dreamy hover:shadow-soft-dreamy-hover transition-all duration-300 hover:-translate-y-1 border border-gray-200 h-full group">
        <div className="relative z-10">
            <div className="flex items-start gap-2 mb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary shadow-soft-dreamy group-hover:scale-105 transition-all duration-300 flex-shrink-0">
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
            {/* Dreamy background blurs */}
            <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" />
            <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-secondary/15 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-3xl opacity-40" />

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