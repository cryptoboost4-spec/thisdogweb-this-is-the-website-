import React from 'react';
import { Icon } from './common/Icon';
import { FEATURES_DATA } from '../constants';
import type { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="bg-surface-light rounded-2xl p-5 sm:p-6 shadow-soft hover:shadow-soft-hover backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 border border-white h-full group">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-accent to-secondary/20 text-primary shadow-inner-soft group-hover:scale-110 transition-transform duration-200">
                <Icon name={feature.icon} className="text-2xl sm:text-3xl" />
            </div>
            <h4 className="font-display text-lg sm:text-xl text-text-primary">{feature.title}</h4>
        </div>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-text-secondary font-medium leading-relaxed">{feature.description}</p>
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