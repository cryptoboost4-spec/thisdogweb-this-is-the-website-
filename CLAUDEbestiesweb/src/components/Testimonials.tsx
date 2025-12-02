import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const emphasizeQuote = (text: string): React.ReactNode => {
    const keyPhrases = ["literally", "way better", "has my back", "safe", "genius", "looking out"];

    for (const phrase of keyPhrases) {
        if (text.toLowerCase().includes(phrase.toLowerCase())) {
            const regex = new RegExp(`(${phrase})`, 'gi');
            const match = text.match(regex);
            if (match && match[0]) {
                const parts = text.split(match[0]);
                return parts.map((part, i) => (
                    <React.Fragment key={i}>
                        {part}
                        {i < parts.length - 1 && (
                            <span className="font-semibold text-primary">{match[0]}</span>
                        )}
                    </React.Fragment>
                ));
            }
        }
    }

    return text;
};

const Testimonials: React.FC = () => {
    const borderColors = ['border-pink-200', 'border-purple-200', 'border-fuchsia-200', 'border-rose-200', 'border-pink-300', 'border-purple-300'];

    return (
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-secondary/10 to-primary/10 relative overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary/8 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '10%', left: '8%', animationDelay: '0s' }}>💬</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '15%', right: '10%', animationDelay: '2s' }}>⭐</div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-center mb-2">
                    What <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">Besties</span> Are Saying ✨
                </h3>
                <p className="text-center text-sm text-text-secondary mb-6 sm:mb-8 px-4">
                    <span className="font-semibold text-primary">Real stories</span> from real people staying safe together 💕
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 shadow-soft-dreamy hover:shadow-soft-dreamy-hover transition-all duration-300 hover:-translate-y-1 border-2 ${borderColors[index % borderColors.length]} relative group`}
                        >
                            {/* Quote decoration */}
                            <div className="absolute top-1 left-2 text-3xl text-primary/20 font-display leading-none">
                                "
                            </div>
                            <div className="relative z-10">
                                <p className="text-xs text-gray-800 font-medium leading-snug mb-2.5 italic pt-2.5">
                                    "{emphasizeQuote(testimonial.quote)}"
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display text-xs shadow-sm">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <p className="font-display text-xs text-primary font-semibold">
                                        {testimonial.author}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;