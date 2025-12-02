import React from 'react';
import { FEATURES_DATA } from '../constants';
import type { Feature } from '../types';

const CustomSVGIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
    const gradientId = `${iconName}-grad`;

    const iconMap: Record<string, JSX.Element> = {
        timer: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <circle cx="12" cy="13" r="9" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none" />
                <path d="M12 8v5l3 3" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
                <path d="M10 2h4" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        notifications_off: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke={`url(#${gradientId})`} strokeWidth="2" />
                <path d="M3 3l18 18" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        sms: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke={`url(#${gradientId})`} strokeWidth="2" />
                <path d="M3 8l9 6 9-6" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        paid: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <circle cx="12" cy="12" r="9" stroke={`url(#${gradientId})`} strokeWidth="2" />
                <path d="M12 6v12M9 9h4.5a2.5 2.5 0 0 1 0 5H9" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        cloud_off: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke={`url(#${gradientId})`} strokeWidth="2" />
                <path d="M3 3l18 18" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        group_add: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <circle cx="9" cy="7" r="3" stroke={`url(#${gradientId})`} strokeWidth="2" />
                <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M19 8v6m3-3h-6" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        event_note: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <rect x="3" y="4" width="18" height="18" rx="2" stroke={`url(#${gradientId})`} strokeWidth="2" />
                <path d="M16 2v4M8 2v4M3 10h18M8 14h4M8 18h6" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        touch_app: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <path d="M13 3v8m0 0a2 2 0 1 1-4 0V7a2 2 0 0 1 4 0v4zm0 0a2 2 0 0 1 2 2v5l-3 3-6-6 2-2 2 2V7a2 2 0 0 1 4 0v4z" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        favorite: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={`url(#${gradientId})`} />
            </svg>
        ),
        history: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <circle cx="12" cy="12" r="9" stroke={`url(#${gradientId})`} strokeWidth="2" />
                <path d="M12 7v5l3 3M3 12h3M5 5l2 2" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        dashboard: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <rect x="3" y="3" width="7" height="7" rx="1" stroke={`url(#${gradientId})`} strokeWidth="2" />
                <rect x="14" y="3" width="7" height="7" rx="1" stroke={`url(#${gradientId})`} strokeWidth="2" />
                <rect x="3" y="14" width="7" height="7" rx="1" stroke={`url(#${gradientId})`} strokeWidth="2" />
                <rect x="14" y="14" width="7" height="7" rx="1" stroke={`url(#${gradientId})`} strokeWidth="2" />
            </svg>
        ),
        celebration: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7z" fill={`url(#${gradientId})`} />
                <circle cx="18" cy="6" r="1" fill={`url(#${gradientId})`} />
                <circle cx="6" cy="18" r="1" fill={`url(#${gradientId})`} />
            </svg>
        ),
        directions_walk: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <circle cx="13" cy="4" r="2" fill={`url(#${gradientId})`} />
                <path d="M10 9l3-3 2 4 3 1M10 16l-2 6M13 20l3-6-2-4" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        location_on: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill={`url(#${gradientId})`} />
                <circle cx="12" cy="9" r="2.5" fill="white" />
            </svg>
        ),
        more_time: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <circle cx="12" cy="12" r="9" stroke={`url(#${gradientId})`} strokeWidth="2" />
                <path d="M12 7v5l3 3M17 3h4m-2-2v4" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        groups: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
                <circle cx="8" cy="7" r="2.5" stroke={`url(#${gradientId})`} strokeWidth="2" />
                <circle cx="16" cy="7" r="2.5" stroke={`url(#${gradientId})`} strokeWidth="2" />
                <path d="M2 19v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1M14 19v-1a4 4 0 0 1 4-4h4" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    };

    return iconMap[iconName] || (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <defs><linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FF69B4" /><stop offset="100%" stopColor="#9370DB" /></linearGradient></defs>
            <circle cx="12" cy="12" r="10" fill={`url(#${gradientId})`} opacity="0.2" />
            <path d="M12 8v8m-4-4h8" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
};

const emphasizeText = (text: string): React.ReactNode => {
    // Words/phrases to emphasize
    const keyPhrases = [
        "Only Alerts", "I'm Safe", "Free", "even if your phone", "cloud",
        "One-Tap", "automatically", "simple", "good", "Emergency", "only sent",
        "one tap", "everyone", "don't need the app"
    ];

    let result: React.ReactNode[] = [];
    let currentText = text;
    let key = 0;

    // Find and emphasize each phrase
    keyPhrases.forEach(phrase => {
        const parts = currentText.split(phrase);
        if (parts.length > 1) {
            result = [];
            for (let i = 0; i < parts.length - 1; i++) {
                if (parts[i]) result.push(<span key={`text-${key++}`}>{parts[i]}</span>);
                result.push(<span key={`emphasis-${key++}`} className="font-semibold text-primary">{phrase}</span>);
            }
            if (parts[parts.length - 1]) result.push(<span key={`text-${key++}`}>{parts[parts.length - 1]}</span>);
            currentText = parts.join(phrase);
            return;
        }
    });

    return result.length > 0 ? result : text;
};

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
    // Alternate border colors
    const borderColors = ['border-pink-200', 'border-purple-200', 'border-fuchsia-200'];
    const borderColor = borderColors[index % borderColors.length];

    return (
        <div className={`relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-3 shadow-soft-dreamy hover:shadow-soft-dreamy-hover transition-all duration-300 hover:-translate-y-1 border-2 ${borderColor} h-full group`}>
            <div className="relative z-10">
                <div className="flex items-start gap-2 mb-1.5">
                    <div className="flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                        <CustomSVGIcon iconName={feature.icon} />
                    </div>
                    <h4 className="font-bold text-sm text-gray-900 leading-tight pt-1">
                        {feature.title}
                    </h4>
                </div>
                <p className="text-xs text-gray-700 leading-snug pl-10">
                    {emphasizeText(feature.description)}
                </p>
            </div>
        </div>
    );
};

const Features: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4 relative overflow-hidden">
            {/* Dreamy background blurs */}
            <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" />
            <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-secondary/15 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-3xl opacity-40" />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '10%', right: '8%', animationDelay: '0s' }}>⚡</div>
            <div className="hidden lg:block floating-emoji" style={{ top: '40%', left: '5%', animationDelay: '1s' }}>🛡️</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '20%', right: '10%', animationDelay: '2s' }}>✨</div>

            <div className="relative z-10">
                {FEATURES_DATA.map((category, categoryIndex) => (
                    <div key={category.title} className={categoryIndex > 0 ? "mt-12" : ""}>
                        <h3 className="flex items-center justify-center gap-2 font-display text-xl sm:text-2xl text-center mb-6 sm:mb-8 px-4">
                           <span className="text-2xl">{category.emoji}</span>
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">{category.title}</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {category.items.map((feature, itemIndex) => (
                                <FeatureCard key={feature.title} feature={feature} index={itemIndex} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;