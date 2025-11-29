import React from 'react';
import { Icon } from './common/Icon';
import { PRICING_DATA } from '../constants';

const Pricing: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-center text-text-primary mb-3 sm:mb-4">
                    Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Pricing</span>
                </h3>
                <p className="text-center text-lg sm:text-xl text-text-secondary font-semibold mb-8 sm:mb-12 px-4">
                    Start free, upgrade when you're ready 💕
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {PRICING_DATA.map(tier => (
                        <div
                            key={tier.title}
                            className={`relative rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-soft-hover backdrop-blur-sm border-2 transition-all duration-300 hover:-translate-y-2 group overflow-hidden ${
                                tier.highlight
                                    ? 'bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30'
                                    : 'bg-surface-light border-accent/20'
                            }`}
                        >
                            {/* Gradient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="relative z-10">
                                <h4 className={`font-display text-2xl sm:text-3xl ${tier.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary' : 'text-text-primary group-hover:text-primary'} transition-colors duration-300`}>
                                    {tier.title}
                                </h4>
                                <p className="text-sm sm:text-base text-text-secondary font-semibold mt-2">{tier.subtitle}</p>
                                <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                                    {tier.features.map(feature => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <Icon
                                                name={tier.icon}
                                                className={`${tier.highlight ? 'text-primary' : 'text-success'} text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
                                            />
                                            <span className="text-sm sm:text-base text-text-primary font-semibold">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-text-secondary font-bold">{tier.footer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;