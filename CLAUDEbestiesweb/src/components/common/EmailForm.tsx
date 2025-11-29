import React, { useState } from 'react';
import { httpsCallable } from 'firebase/functions';
import { functions } from '../../firebase';
import { Icon } from './Icon';

export const EmailForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate email
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setStatus('error');
            setMessage('Please enter a valid email.');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            // Call Firebase Cloud Function
            const addEmailToList = httpsCallable(functions, 'addEmailToList');
            await addEmailToList({ email });

            // Success
            setStatus('success');
            setMessage("You're on the list! We'll be in touch. 💕");
            setEmail('');
        } catch (error: any) {
            console.error('Error submitting email:', error);
            setStatus('error');
            setMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center font-semibold text-primary p-4 sm:p-5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl w-full max-w-md mx-auto shadow-soft animate-bounce-gentle">
                {message}
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-3">
            <div className="relative">
                <Icon name="mail" className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-text-secondary text-xl" />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for early access"
                    className="w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-accent/30 bg-surface-light shadow-inner-soft focus:outline-none focus:border-primary transition-all text-text-primary placeholder:text-text-secondary font-medium"
                    disabled={status === 'loading'}
                    aria-label="Email for early access"
                />
            </div>
            <button
                type="submit"
                className="w-full font-display text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-soft transition-all duration-200 transform hover:scale-105 hover:shadow-soft-hover active:scale-95 flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent/80 text-text-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'Joining...' : 'Get Early Access'}
            </button>
            {status === 'error' && <p className="text-danger text-xs sm:text-sm font-semibold pt-1">{message}</p>}
        </form>
    );
};