import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-secondary/10 to-primary/10 relative overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary/8 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

            {/* Floating decorative elements */}
            <div className="hidden lg:block floating-emoji" style={{ top: '10%', left: '8%', animationDelay: '0s' }}>💬</div>
            <div className="hidden lg:block floating-emoji" style={{ bottom: '15%', right: '10%', animationDelay: '2s' }}>⭐</div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-center mb-3">
                    What <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">Besties</span> Are Saying ✨
                </h3>
                <p className="text-center text-sm sm:text-base text-text-secondary mb-8 sm:mb-10 px-4">
                    Real stories from real people staying safe together 💕
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-soft-dreamy hover:shadow-soft-dreamy-hover transition-all duration-300 hover:-translate-y-1 border border-gray-200 relative group"
                        >

                            {/* Quote decoration */}
                            <div className="absolute top-1.5 left-2 text-4xl text-primary/20 font-display leading-none">
                                "
                            </div>
                            <div className="relative z-10">
                                <p className="text-xs sm:text-sm text-gray-800 font-medium leading-snug mb-3 italic pt-3">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display text-xs sm:text-sm shadow-sm">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <p className="font-display text-xs sm:text-sm text-primary">
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