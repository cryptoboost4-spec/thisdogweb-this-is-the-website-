import React, { useState, useEffect } from 'react';
import { httpsCallable } from 'firebase/functions';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db, functions } from '../firebase';
import { Button } from './common/Button';
import { EmailForm } from './common/EmailForm';
import { Icon } from './common/Icon';
import { LOGO_OPTIONS } from '../constants';
import type { LogoResult } from '../types';

interface VoteProps {
    onBack: () => void;
}

const VOTE_STORAGE_KEY = 'besties_logo_voted';

const Vote: React.FC<VoteProps> = ({ onBack }) => {
    const [hasVoted, setHasVoted] = useState(false);
    const [results, setResults] = useState<LogoResult[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isVoting, setIsVoting] = useState<number | null>(null);

    // Listen to real-time vote updates from Firestore
    useEffect(() => {
        const alreadyVoted = localStorage.getItem(VOTE_STORAGE_KEY);
        if (alreadyVoted) {
            setHasVoted(true);
        } else {
            setIsLoading(false);
        }

        // Set up real-time listener for vote counts
        const votesQuery = query(collection(db, 'logo_votes'));
        const unsubscribe = onSnapshot(votesQuery, (snapshot) => {
            const votes: { [key: string]: number } = {};
            let totalVotes = 0;

            snapshot.forEach((doc) => {
                const data = doc.data();
                votes[doc.id] = data.count || 0;
                totalVotes += data.count || 0;
            });

            // Calculate results with percentages
            const calculatedResults = LOGO_OPTIONS.map((logo, index) => {
                const voteCount = votes[`logo_${index}`] || 0;
                return {
                    ...logo,
                    votes: voteCount,
                    percentage: totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0,
                };
            }).sort((a, b) => b.votes - a.votes);

            setResults(calculatedResults);
            setIsLoading(false);
        }, (error) => {
            console.error('Error fetching votes:', error);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleVote = async (index: number) => {
        setIsVoting(index);

        try {
            // Call Firebase Cloud Function to cast vote
            const castVote = httpsCallable(functions, 'castVote');
            await castVote({ logoIndex: index });

            // Mark as voted in localStorage
            localStorage.setItem(VOTE_STORAGE_KEY, 'true');
            setHasVoted(true);
        } catch (error: any) {
            console.error('Error casting vote:', error);
            alert(error.message || 'Failed to cast vote. Please try again.');
        } finally {
            setIsVoting(null);
        }
    };

    if (hasVoted) {
        return (
            <section className="text-center py-20 sm:py-24 min-h-[calc(100vh-100px)]">
                <Icon name="favorite" className="text-primary text-6xl" />
                <h1 className="font-display text-4xl sm:text-5xl text-text-primary mt-4">
                    Thank you!
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary font-semibold">
                    Thanks for helping shape the future of Besties. Here's how the votes are looking so far:
                </p>

                {isLoading && (
                    <div className="mt-12 text-primary font-semibold">Loading results...</div>
                )}

                {results && (
                    <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {results.map((result, index) => {
                            const isWinning = index === 0;
                            return (
                                <div 
                                    key={index} 
                                    className={`relative bg-surface-light/90 rounded-2xl p-6 shadow-soft backdrop-blur-sm border-2 transition-all hover:scale-105 ${
                                        isWinning ? 'border-primary shadow-glow-pink' : 'border-white'
                                    }`}
                                >
                                    {/* Rank Badge */}
                                    <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center font-display text-xl shadow-soft ${
                                        isWinning ? 'bg-gradient-to-br from-primary to-secondary text-white' : 'bg-accent text-yellow-900'
                                    }`}>
                                        #{index + 1}
                                    </div>

                                    {/* Logo Image */}
                                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 mb-4">
                                        <img 
                                            src={result.url} 
                                            alt={result.alt} 
                                            className="w-full h-auto object-contain rounded-md aspect-square max-w-[180px] mx-auto" 
                                        />
                                    </div>

                                    {/* Logo Title */}
                                    <p className="font-display text-lg text-text-primary text-center mb-2">
                                        Logo #{LOGO_OPTIONS.findIndex(l => l.url === result.url) + 1}
                                    </p>

                                    {/* Vote Stats */}
                                    <div className="text-center mb-3">
                                        <div className="font-display text-3xl text-primary">
                                            {result.percentage.toFixed(1)}%
                                        </div>
                                        <div className="text-text-secondary text-sm font-semibold">
                                            {result.votes} {result.votes === 1 ? 'vote' : 'votes'}
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-full bg-primary/20 rounded-full h-3">
                                        <div 
                                            className={`h-3 rounded-full transition-all duration-500 ${
                                                isWinning ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-primary'
                                            }`}
                                            style={{ width: `${result.percentage}%` }}
                                        ></div>
                                    </div>

                                    {/* Winning Badge */}
                                    {isWinning && (
                                        <div className="mt-3 text-center">
                                            <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                                                🏆 Leading
                                            </span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className="mt-16 max-w-md mx-auto space-y-4">
                    <p className="font-display text-xl text-text-primary">Get notified on launch!</p>
                    <EmailForm />
                </div>

                <div className="mt-12">
                    <button onClick={onBack} className="font-bold text-lg text-text-secondary hover:text-primary transition-colors">
                        Back to Home
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="text-center py-20 sm:py-24 min-h-[calc(100vh-100px)]">
            <h1 className="font-display text-4xl sm:text-5xl text-text-primary">
                Vote for the Besties Logo
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary font-semibold">
                Help us choose the perfect look for the app that has your back. Which one feels the most like a bestie?
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {LOGO_OPTIONS.map((logo, index) => {
                    const isLoadingThis = isVoting === index;
                    return (
                        <div
                            key={index}
                            className="flex flex-col p-4 rounded-xl bg-surface-light/80 shadow-soft backdrop-blur-sm border-2 border-white"
                        >
                            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-4 flex-grow flex items-center justify-center">
                                <img src={logo.url} alt={logo.alt} className="w-full h-auto object-contain rounded-md aspect-square max-w-[200px] mx-auto" />
                            </div>
                            <Button
                                onClick={() => handleVote(index)}
                                disabled={isLoadingThis || isVoting !== null}
                                variant={'primary'}
                                className={`w-full mt-4 !text-base !py-3`}
                            >
                                {isLoadingThis ? 'Voting...' : `Vote for Logo #${index + 1}`}
                            </Button>
                        </div>
                    );
                })}
            </div>

            <div className="mt-16 flex flex-col items-center gap-6">
                <button onClick={onBack} className="font-bold text-lg text-text-secondary hover:text-primary transition-colors">
                    Back to Home
                </button>
            </div>
        </section>
    );
};

export default Vote;