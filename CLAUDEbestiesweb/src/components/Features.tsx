import React from 'react';
import { Icon } from './common/Icon';
import { FEATURES_DATA } from '../constants';
import type { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="relative bg-surface-light rounded-2xl p-5 sm:p-6 shadow-soft hover:shadow-soft-hover backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 border-2 border-accent/20 h-full group overflow-hidden">
        {/* Gradient glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-primary shadow-inner-soft group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon name={feature.icon} className="text-2xl sm:text-3xl" />
                </div>
                <h4 className="font-display text-lg sm:text-xl text-text-primary group-hover:text-primary transition-colors duration-300">{feature.title}</h4>
            </div>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-text-secondary font-medium leading-relaxed">{feature.description}</p>
        </div>
    </div>
);

const Features: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4">
            {FEATURES_DATA.map((category, index) => (
                <div key={category.title} className={index > 0 ? "mt-12 sm:mt-16" : ""}>
                    <h3 className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 font-display text-2xl sm:text-3xl md:text-4xl text-center text-text-primary mb-8 sm:mb-12 px-4">
                       <span className="text-3xl sm:text-4xl">{category.emoji}</span>
                       <span>{category.title}</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {category.items.map(feature => (
                            <FeatureCard key={feature.title} feature={feature} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Features;