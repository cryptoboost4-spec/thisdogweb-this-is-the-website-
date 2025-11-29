import React from 'react';
import { HOW_IT_WORKS_DATA } from '../constants';
import type { Step } from '../types';

const StepCard: React.FC<{ step: Step; index: number }> = ({ step, index }) => (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left bg-surface-light rounded-2xl p-5 sm:p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1">
        <div className="flex-shrink-0 font-display text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
            {index + 1}
        </div>
        <div className="flex-1">
            <h4 className="font-display text-xl sm:text-2xl text-text-primary">{step.title}</h4>
            <p className="mt-2 text-sm sm:text-base text-text-secondary font-medium">{step.description}</p>
        </div>
    </div>
);

const HowItWorks: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4">
             <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-center text-text-primary mb-10 sm:mb-16">
                How Besties Works
            </h3>
            <div className="relative max-w-3xl mx-auto">
                <div className="space-y-6 sm:space-y-8">
                    {HOW_IT_WORKS_DATA.map((step, index) => (
                        <StepCard key={step.title} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;