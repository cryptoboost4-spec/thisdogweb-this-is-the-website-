import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-b from-secondary/5 to-primary/5">
            <div className="max-w-6xl mx-auto">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-center text-text-primary mb-3 sm:mb-4">
                    What <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Besties</span> Are Saying
                </h3>
                <p className="text-center text-base sm:text-lg text-text-secondary font-semibold mb-8 sm:mb-12 px-4">
                    Real stories from real people staying safe together 💕
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-surface-light rounded-2xl p-5 sm:p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-2 border-2 border-accent/20 relative overflow-hidden group"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            {/* Quote decoration with gradient */}
                            <div className="absolute top-2 left-3 text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-primary/20 to-secondary/20 font-display leading-none group-hover:scale-110 transition-transform duration-300">
                                "
                            </div>
                            <div className="relative z-10">
                                <p className="text-sm sm:text-base text-text-primary font-medium leading-relaxed mb-4 italic pt-4">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display text-sm sm:text-base shadow-soft group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <p className="font-display text-sm sm:text-base text-primary">
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