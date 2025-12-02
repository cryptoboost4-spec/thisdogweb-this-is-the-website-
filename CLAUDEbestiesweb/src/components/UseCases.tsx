import React from 'react';
import { USE_CASES_DATA } from '../constants';

const emphasizeText = (text: string): React.ReactNode => {
    const keyPhrases = ["first date", "night out", "walking home", "new", "safe", "peace of mind"];

    let parts = [text];
    let emphasized = false;

    for (const phrase of keyPhrases) {
        if (text.toLowerCase().includes(phrase)) {
            const regex = new RegExp(`(${phrase})`, 'gi');
            const matches = text.match(regex);
            if (matches && matches[0]) {
                parts = text.split(matches[0]);
                emphasized = true;
                return parts.map((part, i) => (
                    <React.Fragment key={i}>
                        {part}
                        {i < parts.length - 1 && (
                            <span className="font-semibold text-primary">{matches[0]}</span>
                        )}
                    </React.Fragment>
                ));
            }
        }
    }

    return text;
};

const UseCases: React.FC = () => {
    const borderColors = ['border-pink-200', 'border-purple-200', 'border-fuchsia-200', 'border-rose-200'];

    return (
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-transparent via-primary/10 to-transparent relative overflow-hidden">
            {/* Dreamy background blurs */}
            <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-secondary/15 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl opacity-40" style={{ animationDelay: '1s' }} />

            {/* Minimal floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '12%', right: '10%', animationDelay: '0s' }}>🌙</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '20%', left: '8%', animationDelay: '1.5s' }}>🚗</div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-center mb-2">
                    When You Need Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">Besties</span> ✨
                </h3>
                <p className="text-center text-sm text-text-secondary mb-6 sm:mb-8 px-4 max-w-3xl mx-auto">
                    Life happens. Whether it's a <span className="font-semibold text-primary">first date</span>, a <span className="font-semibold text-primary">night out</span>, or just <span className="font-semibold text-primary">walking home</span> — your besties have got your back. 💕
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {USE_CASES_DATA.map((useCase, index) => (
                        <div
                            key={index}
                            className={`relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 shadow-soft-dreamy hover:shadow-soft-dreamy-hover transition-all duration-300 hover:-translate-y-1 border-2 ${borderColors[index % borderColors.length]} group`}
                        >
                            {/* Emoji header */}
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-3xl group-hover:scale-110 transition-all duration-300">{useCase.emoji}</span>
                                <h4 className="font-display text-sm font-bold text-gray-900 flex-1">
                                    {useCase.title}
                                </h4>
                            </div>

                            {/* Description */}
                            <p className="text-xs text-gray-700 mb-3 leading-snug">
                                {emphasizeText(useCase.description)}
                            </p>

                            {/* Examples */}
                            <ul className="space-y-1.5">
                                {useCase.examples.map((example, exampleIndex) => (
                                    <li key={exampleIndex} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-secondary mt-1.5 flex-shrink-0"></div>
                                        <span className="text-xs text-gray-700 leading-snug">
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
