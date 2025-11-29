import React from 'react';
import { Icon } from './common/Icon';
import { PRICING_DATA } from '../constants';

const Pricing: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4">
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-center text-text-primary mb-8 sm:mb-12">
                Pricing
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                {PRICING_DATA.map(tier => (
                    <div
                        key={tier.title}
                        className={`rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-soft-hover backdrop-blur-sm border-2 transition-all duration-300 hover:-translate-y-1 ${
                            tier.highlight
                                ? 'bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30'
                                : 'bg-surface-light border-white'
                        }`}
                    >
                        <h4 className="font-display text-2xl sm:text-3xl text-text-primary">{tier.title}</h4>
                        <p className="text-sm sm:text-base text-text-secondary font-semibold mt-2">{tier.subtitle}</p>
                        <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                            {tier.features.map(feature => (
                                <li key={feature} className="flex items-start gap-3">
                                    <Icon
                                        name={tier.icon}
                                        className={`${tier.highlight ? 'text-primary' : 'text-success'} text-xl sm:text-2xl flex-shrink-0`}
                                    />
                                    <span className="text-sm sm:text-base text-text-primary font-semibold">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-text-secondary font-bold">{tier.footer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;