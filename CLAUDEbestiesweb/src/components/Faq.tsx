import React from 'react';
import { FAQ_DATA } from '../constants';

const emphasizeFaqAnswer = (text: string): React.ReactNode => {
    const keyPhrases = [
        "100% free", "free forever", "never", "always", "don't", "No!",
        "Absolutely", "Yes!", "automatically", "cloud", "security"
    ];

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

const Faq: React.FC = () => {
    const borderColors = ['border-pink-100', 'border-purple-100', 'border-fuchsia-100', 'border-rose-100'];

    return (
        <section className="py-12 sm:py-16 px-4 relative overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-secondary/8 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '15%', left: '8%', animationDelay: '0s' }}>❓</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '20%', right: '10%', animationDelay: '2s' }}>💡</div>

            <div className="relative z-10">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-center mb-6 sm:mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">FAQ</span> ✨
                </h3>
                <div className="max-w-3xl mx-auto space-y-2.5">
                    {FAQ_DATA.map((item, index) => (
                        <div
                            key={item.question}
                            className={`bg-gradient-to-br from-pink-50/50 to-purple-50/50 p-4 rounded-xl backdrop-blur-sm border-2 ${borderColors[index % borderColors.length]} shadow-soft-dreamy hover:shadow-soft-dreamy-hover transition-all duration-300 hover:-translate-y-1 group`}
                        >
                            <h4 className="font-bold text-sm text-gray-900 mb-1.5">{item.question}</h4>
                            <p className="text-xs text-gray-700 leading-snug">{emphasizeFaqAnswer(item.answer)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;