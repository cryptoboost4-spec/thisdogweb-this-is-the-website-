import React from 'react';
import { Button } from './common/Button';
import { EmailForm } from './common/EmailForm';

interface FooterProps {
    onNavigate: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="py-16 sm:py-20 md:py-32 text-center bg-gradient-to-b from-primary/5 to-secondary/5 mt-12 sm:mt-16">
            <div className="container mx-auto px-4">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-text-primary px-4">
                    Your besties have your back — make it automatic.
                </h3>
                <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg text-text-secondary font-semibold px-4">
                    Vote for the official Besties logo and help shape the future of the app.
                </p>
                <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:gap-6">
                    <div className="flex flex-col w-full max-w-md sm:max-w-none sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4">
                        <Button variant="disabled" iconLeft="lock" className="w-full sm:w-auto">
                            Enter Site
                        </Button>
                        <Button variant="secondary" iconLeft="how_to_vote" onClick={onNavigate} className="w-full sm:w-auto">
                            Vote for the Besties Logo
                        </Button>
                    </div>
                    <div className="w-full max-w-md px-4">
                        <EmailForm />
                    </div>
                </div>
                 <p className="mt-12 sm:mt-16 text-sm sm:text-base text-text-secondary font-semibold">© {new Date().getFullYear()} Besties. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;