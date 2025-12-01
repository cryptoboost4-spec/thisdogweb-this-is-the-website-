import React from 'react';
import { USE_CASES_DATA } from '../constants';

const UseCases: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-transparent via-primary/10 to-transparent relative overflow-hidden">
            {/* Dreamy background blurs */}
            <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-secondary/15 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl opacity-40" style={{ animationDelay: '1s' }} />

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
                    {USE_CASES_DATA.map((useCase, index) => (
                        <div
                            key={index}
                            className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft-dreamy hover:shadow-soft-dreamy-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
                        >
                            {/* Emoji header */}
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-4xl group-hover:scale-110 transition-all duration-300">{useCase.emoji}</span>
                                <h4 className="font-display text-base font-semibold text-gray-900 flex-1">
                                    {useCase.title}
                                </h4>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                                {useCase.description}
                            </p>

                            {/* Examples */}
                            <ul className="space-y-2">
                                {useCase.examples.map((example, exampleIndex) => (
                                    <li key={exampleIndex} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-secondary mt-2 flex-shrink-0"></div>
                                        <span className="text-xs text-gray-700 leading-relaxed">
                                            {example}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
