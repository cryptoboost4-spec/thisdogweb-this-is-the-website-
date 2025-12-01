import React from 'react';
import { HOW_IT_WORKS_DATA } from '../constants';
import type { Step } from '../types';

const StepCard: React.FC<{ step: Step; index: number }> = ({ step, index }) => {
    const colors = [
        { bg: 'from-purple-50 to-fuchsia-50', border: 'border-purple-200', numBg: 'from-purple-400 to-purple-600' },
        { bg: 'from-pink-50 to-rose-50', border: 'border-pink-200', numBg: 'from-pink-400 to-pink-600' },
        { bg: 'from-fuchsia-50 to-pink-50', border: 'border-fuchsia-200', numBg: 'from-fuchsia-400 to-fuchsia-600' },
        { bg: 'from-rose-50 to-pink-50', border: 'border-rose-200', numBg: 'from-rose-400 to-rose-600' }
    ];
    const color = colors[index % colors.length];

    return (
    <div className={`flex items-start gap-3 text-left bg-gradient-to-br ${color.bg} rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border ${color.border} group`}>
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${color.numBg} flex items-center justify-center shadow-sm group-hover:scale-105 transition-all duration-300`}>
            <span className="font-display text-xl text-white">{index + 1}</span>
        </div>
        <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm text-gray-900 mb-1">{step.title}</h4>
            <p className="text-xs text-gray-700 leading-snug">{step.description}</p>
        </div>
    </div>
    );
};

const HowItWorks: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4 relative overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-radial from-primary/8 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '20%', right: '8%', animationDelay: '0s' }}>🎯</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '25%', left: '10%', animationDelay: '2s' }}>📍</div>

            <div className="relative z-10">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-center mb-8 sm:mb-10">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">How Besties Works</span> ✨
                </h3>
                <div className="relative max-w-3xl mx-auto">
                    <div className="space-y-3">
                        {HOW_IT_WORKS_DATA.map((step, index) => (
                            <StepCard key={step.title} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;