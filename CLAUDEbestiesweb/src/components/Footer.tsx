import React from 'react';

interface FooterProps {
    onNavigate: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="py-16 sm:py-20 text-center bg-gradient-to-b from-primary/5 to-secondary/5 mt-12 sm:mt-16 relative overflow-hidden">
            {/* Subtle decorative background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-2xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <h3 className="font-display text-2xl sm:text-3xl text-text-primary px-4 mb-4">
                    Your besties have your back — <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">make it automatic.</span>
                </h3>
                <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-secondary px-4 mb-8">
                    Ready to feel safer? Click below to enter the app. 💕
                </p>

                {/* Clean Enter App Button */}
                <a href="https://app.bestiesapp.xyz" target="_blank" rel="noopener noreferrer" className="group relative px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-display text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden inline-block">
                    <span className="relative z-10 flex items-center gap-2">
                        <span>Enter App</span>
                        <span className="text-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">✨</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                </a>

                <p className="mt-12 sm:mt-16 text-xs sm:text-sm text-text-secondary">© {new Date().getFullYear()} Besties. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;