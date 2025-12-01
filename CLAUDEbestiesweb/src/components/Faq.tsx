import React from 'react';
import { FAQ_DATA } from '../constants';

const Faq: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4 relative overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-secondary/8 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '15%', left: '8%', animationDelay: '0s' }}>❓</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '20%', right: '10%', animationDelay: '2s' }}>💡</div>

            <div className="relative z-10">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-center mb-8 sm:mb-10">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">FAQ</span> ✨
                </h3>
                <div className="max-w-3xl mx-auto space-y-3">
                    {FAQ_DATA.map(item => (
                        <div
                            key={item.question}
                            className="bg-white p-4 rounded-xl hover:shadow-lg backdrop-blur-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <h4 className="font-semibold text-sm text-gray-900 mb-1">{item.question}</h4>
                            <p className="text-xs text-gray-700 leading-snug">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;