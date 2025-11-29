import React from 'react';
import { FAQ_DATA } from '../constants';

const Faq: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4">
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-center text-text-primary mb-8 sm:mb-12">
                FAQ
            </h3>
            <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
                {FAQ_DATA.map(item => (
                    <div
                        key={item.question}
                        className="bg-surface-light p-5 sm:p-6 rounded-2xl shadow-soft hover:shadow-soft-hover backdrop-blur-sm border border-white transition-all duration-300 hover:-translate-y-1"
                    >
                        <h4 className="font-display text-lg sm:text-xl text-text-primary">{item.question}</h4>
                        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-text-secondary font-medium leading-relaxed">{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;