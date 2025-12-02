import React from 'react';
import { PRICING_DATA } from '../constants';

const SparkleIcon: React.FC<{ highlight?: boolean }> = ({ highlight }) => (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
        <defs>
            <linearGradient id="sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF69B4" />
                <stop offset="100%" stopColor="#9370DB" />
            </linearGradient>
        </defs>
        <path
            d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7z"
            fill={highlight ? "url(#sparkle-gradient)" : "#4CAF50"}
        />
        <circle cx="18" cy="6" r="1" fill={highlight ? "url(#sparkle-gradient)" : "#4CAF50"} />
        <circle cx="6" cy="18" r="1" fill={highlight ? "url(#sparkle-gradient)" : "#4CAF50"} />
    </svg>
);

const emphasizeFeature = (text: string): React.ReactNode => {
    const keyPhrases = [
        "Unlimited", "free", "Free", "alerts", "SMS", "Faster", "cancel anytime"
    ];

    let parts = [text];
    let emphasized = false;

    for (const phrase of keyPhrases) {
        if (text.includes(phrase)) {
            parts = text.split(phrase);
            emphasized = true;
            break;
        }
    }

    if (!emphasized) return text;

    const phrase = keyPhrases.find(p => text.includes(p)) || '';
    return parts.map((part, i) => (
        <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && (
                <span className="font-semibold text-primary">{phrase}</span>
            )}
        </React.Fragment>
    ));
};

const Pricing: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4 relative overflow-hidden">
            {/* Dreamy background blurs */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />
            <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-secondary/15 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-3xl opacity-40" />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '15%', left: '10%', animationDelay: '0s' }}>💰</div>
            <div className="hidden lg:block floating-emoji" style={{ top: '20%', right: '12%', animationDelay: '1.5s' }}>💎</div>

            <div className="relative z-10">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-center mb-2">
                    Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">Pricing</span> ✨
                </h3>
                <p className="text-center text-sm text-text-secondary mb-6 sm:mb-8 px-4">
                    <span className="font-semibold text-primary">Start free</span>, upgrade when you're ready 💕
                </p>

                {/* Horizontal scrolling container */}
                <div className="overflow-x-auto pb-4 -mx-4 px-4">
                    <div className="flex gap-4 min-w-max lg:justify-center">
                        {PRICING_DATA.map(tier => (
                            <div
                                key={tier.title}
                                className={`relative rounded-xl p-4 backdrop-blur-sm border-2 shadow-soft-dreamy hover:shadow-soft-dreamy-hover transition-all duration-300 hover:-translate-y-1 group w-80 flex-shrink-0 ${
                                    tier.highlight
                                        ? 'bg-gradient-to-br from-pink-50 to-purple-50 border-purple-200'
                                        : 'bg-gradient-to-br from-pink-50/50 to-purple-50/50 border-pink-200'
                                }`}
                            >
                                <div className="relative z-10">
                                    <h4 className={`font-bold text-sm ${tier.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary' : 'text-gray-900'}`}>
                                        {tier.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 mt-1 leading-tight">{tier.subtitle}</p>
                                    <ul className="mt-3 space-y-1.5">
                                        {tier.features.map(feature => (
                                            <li key={feature} className="flex items-start gap-2">
                                                <SparkleIcon highlight={tier.highlight} />
                                                <span className="text-xs text-gray-800 leading-snug">
                                                    {emphasizeFeature(feature)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-3 text-xs text-gray-600 font-semibold">{tier.footer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll hint for mobile */}
                <p className="text-center text-xs text-text-secondary mt-4 lg:hidden">
                    👈 Swipe to see all options 👉
                </p>
            </div>
        </section>
    );
};

export default Pricing;