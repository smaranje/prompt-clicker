import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fire, ArrowRight } from 'phosphor-react';
import { Button } from '@/components/ui/button';
import { PromptCard } from '@/components/PromptCard';
import { communityPrompts } from '@/data/community_prompts';
import { supabase, type CommunityPrompt } from '@/lib/supabase';

export const ExploreSection = () => {
    const navigate = useNavigate();
    const [prompts, setPrompts] = useState<CommunityPrompt[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTrending = async () => {
            setIsLoading(true);
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 500));

            // In a real app, fetch trending from Supabase
            // For now, use local data and filter for interesting ones
            // Taking first 6 for the home page feed
            setPrompts(communityPrompts.slice(0, 6));
            setIsLoading(false);
        };

        fetchTrending();
    }, []);

    const handleLove = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        // Placeholder for love functionality
        console.log('Loved', id);
    };

    return (
        <div className="w-full max-w-6xl mx-auto mt-16 sm:mt-24 px-4 sm:px-6">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-orange-500/10 text-orange-600">
                        <Fire className="w-5 h-5 sm:w-6 sm:h-6" weight="duotone" />
                    </div>
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Trending Now</h2>
                        <p className="text-sm text-muted-foreground hidden sm:block">Community favorites this week</p>
                    </div>
                </div>
                <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/5 group"
                    onClick={() => navigate('/discover')}
                >
                    Browse All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {prompts.map((prompt) => (
                    <div key={prompt.id} className="h-full">
                        <PromptCard
                            prompt={prompt}
                            navigate={navigate}
                            toggleLove={handleLove}
                        />
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
                <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate('/discover')}
                >
                    View More Prompts
                </Button>
            </div>
        </div>
    );
};
