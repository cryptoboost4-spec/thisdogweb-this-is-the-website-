import React from 'react';

interface FooterProps {
    onNavigate: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="py-20 sm:py-28 md:py-36 text-center bg-gradient-to-b from-primary/5 to-secondary/5 mt-12 sm:mt-16 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-2xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-text-primary px-4 mb-5 sm:mb-6">
                    Your besties have your back —<br className="hidden sm:inline" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">make it automatic.</span>
                </h3>
                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary font-semibold px-4 mb-10 sm:mb-14">
                    Ready to feel safer? Click below to enter the app. 💕
                </p>

                {/* Epic Enter App Button */}
                <a href="https://app.bestiesapp.xyz" target="_blank" rel="noopener noreferrer" className="group relative px-12 sm:px-16 py-5 sm:py-7 rounded-full bg-gradient-to-r from-primary via-secondary to-primary text-white font-display text-2xl sm:text-3xl shadow-glow-pink hover:shadow-soft-hover transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden inline-block">
                    <span className="relative z-10 flex items-center gap-4">
                        <span>Enter App</span>
                        <span className="text-3xl group-hover:rotate-12 group-hover:scale-125 transition-all duration-300">✨</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-50 blur-xl group-hover:animate-pulse-slow" />
                </a>

                <p className="mt-16 sm:mt-20 text-sm sm:text-base text-text-secondary font-semibold">© {new Date().getFullYear()} Besties. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;