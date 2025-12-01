import React from 'react';
import { USE_CASES_DATA } from '../constants';

const UseCases: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-transparent via-primary/10 to-transparent relative overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-secondary/8 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

            {/* Minimal floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '12%', right: '10%', animationDelay: '0s' }}>🌙</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '20%', left: '8%', animationDelay: '1.5s' }}>🚗</div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-center mb-3">
                    When You Need Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">Besties</span> ✨
                </h3>
                <p className="text-center text-sm sm:text-base text-text-secondary mb-8 sm:mb-10 px-4 max-w-3xl mx-auto">
                    Life happens. Whether it's a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">first date</span>, a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">night out</span>, or just <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">walking home</span> — your besties have got your back. 💕
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {USE_CASES_DATA.map((useCase, index) => {
                        const colors = [
                            { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', iconBg: 'from-blue-100 to-indigo-100' },
                            { bg: 'from-rose-50 to-pink-50', border: 'border-rose-200', iconBg: 'from-rose-100 to-pink-100' },
                            { bg: 'from-purple-50 to-fuchsia-50', border: 'border-purple-200', iconBg: 'from-purple-100 to-fuchsia-100' },
                            { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', iconBg: 'from-amber-100 to-orange-100' }
                        ];
                        const color = colors[index % colors.length];

                        return (
                        <div
                            key={index}
                            className={`relative bg-gradient-to-br ${color.bg} rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border ${color.border} group`}
                        >
                            <div className="relative z-10">
                                {/* Emoji header */}
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color.iconBg} flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-sm flex-shrink-0`}>
                                        <span className="text-2xl">{useCase.emoji}</span>
                                    </div>
                                    <h4 className="font-semibold text-sm text-gray-900 flex-1">
                                        {useCase.title}
                                    </h4>
                                </div>

                                {/* Description */}
                                <p className="text-xs text-gray-700 mb-3 leading-snug">
                                    {useCase.description}
                                </p>

                                {/* Examples */}
                                <ul className="space-y-1.5">
                                    {useCase.examples.map((example, exampleIndex) => (
                                        <li key={exampleIndex} className="flex items-start gap-2">
                                            <div className="w-1 h-1 rounded-full bg-gradient-to-br from-primary to-secondary mt-1.5 flex-shrink-0"></div>
                                            <span className="text-xs text-gray-700 leading-snug">
                                                {example}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
