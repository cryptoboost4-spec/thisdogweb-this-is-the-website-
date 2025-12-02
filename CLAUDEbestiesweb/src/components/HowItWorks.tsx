import React from 'react';
import { HOW_IT_WORKS_DATA } from '../constants';
import type { Step } from '../types';

const StepIcon: React.FC<{ index: number }> = ({ index }) => {
    const gradientId = `step-icon-${index}`;

    const icons = [
        // Timer icon for step 1
        <svg key={index} className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
            <circle cx="12" cy="13" r="9" stroke={`url(#${gradientId})`} strokeWidth="2" fill="white" />
            <path d="M12 8v5l3 3" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
        </svg>,
        // People icon for step 2
        <svg key={index} className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
            <circle cx="9" cy="7" r="3" stroke={`url(#${gradientId})`} strokeWidth="2" fill="white" />
            <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M19 8v6m3-3h-6" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
        </svg>,
        // Heart icon for step 3
        <svg key={index} className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={`url(#${gradientId})`} />
        </svg>,
        // Checkmark icon for step 4
        <svg key={index} className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
            <circle cx="12" cy="12" r="10" stroke={`url(#${gradientId})`} strokeWidth="2" fill="white" />
            <path d="M8 12l3 3 5-6" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        // Alert icon for step 5
        <svg key={index} className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke={`url(#${gradientId})`} strokeWidth="2" fill="white" />
            <path d="M13 17v3M11 17v3" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
        </svg>
    ];

    return icons[index] || icons[0];
};

const emphasizeStepText = (text: string): React.ReactNode => {
    const keyPhrases = ["check-in", "friends", "Safe", "besties", "alerted", "Automatic"];

    for (const phrase of keyPhrases) {
        if (text.includes(phrase)) {
            const parts = text.split(phrase);
            return parts.map((part, i) => (
                <React.Fragment key={i}>
                    {part}
                    {i < parts.length - 1 && (
                        <span className="font-semibold text-primary">{phrase}</span>
                    )}
                </React.Fragment>
            ));
        }
    }

    return text;
};

const StepCard: React.FC<{ step: Step; index: number }> = ({ step, index }) => {
    const bgColors = [
        'bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200',
        'bg-gradient-to-br from-purple-50 to-fuchsia-50 border-purple-200',
        'bg-gradient-to-br from-fuchsia-50 to-pink-50 border-fuchsia-200',
        'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200',
        'bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200'
    ];

    return (
        <div className={`flex items-start gap-3 text-left rounded-xl p-4 shadow-soft-dreamy hover:shadow-soft-dreamy-hover transition-all duration-300 hover:-translate-y-1 border-2 ${bgColors[index]} group`}>
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-soft group-hover:scale-105 transition-all duration-300">
                <StepIcon index={index} />
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="font-display text-sm font-bold text-gray-900 mb-1">{step.title}</h4>
                <p className="text-xs text-gray-700 leading-snug">{emphasizeStepText(step.description)}</p>
            </div>
        </div>
    );
};

const HowItWorks: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4 relative overflow-hidden">
            {/* Dreamy background blurs */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none" />
            <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-accent/15 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" />
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl opacity-40" style={{ animationDelay: '2s' }} />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '20%', right: '8%', animationDelay: '0s' }}>🎯</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '25%', left: '10%', animationDelay: '2s' }}>📍</div>

            <div className="relative z-10">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-center mb-6 sm:mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">How Besties Works</span> ✨
                </h3>
                <div className="relative max-w-3xl mx-auto">
                    <div className="space-y-2.5">
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