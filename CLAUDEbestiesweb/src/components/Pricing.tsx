import React from 'react';
import { Icon } from './common/Icon';
import { PRICING_DATA } from '../constants';

const Pricing: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4 relative overflow-hidden">
            {/* Dreamy background blurs */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />
            <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-secondary/15 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-3xl opacity-40" />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '15%', left: '10%', animationDelay: '0s' }}>💰</div>
            <div className="hidden lg:block floating-emoji" style={{ top: '20%', right: '12%', animationDelay: '1.5s' }}>💎</div>

            <div className="relative z-10">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-center mb-3">
                    Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">Pricing</span> ✨
                </h3>
                <p className="text-center text-sm sm:text-base text-text-secondary mb-8 sm:mb-10 px-4">
                    Start free, upgrade when you're ready 💕
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    {PRICING_DATA.map(tier => (
                        <div
                            key={tier.title}
                            className={`relative rounded-2xl p-4 backdrop-blur-sm border-2 shadow-soft-dreamy hover:shadow-soft-dreamy-hover transition-all duration-300 hover:-translate-y-1 group ${
                                tier.highlight
                                    ? 'bg-gradient-to-br from-purple-50/70 to-fuchsia-50/70 border-purple-300'
                                    : 'bg-white/70 border-gray-200'
                            }`}
                        >
                            <div className="relative z-10">
                                <h4 className={`font-semibold text-base sm:text-lg ${tier.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary' : 'text-gray-900'}`}>
                                    {tier.title}
                                </h4>
                                <p className="text-xs text-gray-600 mt-1">{tier.subtitle}</p>
                                <ul className="mt-4 space-y-2">
                                    {tier.features.map(feature => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <Icon
                                                name={tier.icon}
                                                className={`${tier.highlight ? 'text-primary' : 'text-success'} text-base flex-shrink-0 mt-0.5`}
                                            />
                                            <span className="text-xs text-gray-800">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-4 text-xs text-gray-600 font-semibold">{tier.footer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;