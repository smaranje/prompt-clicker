import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnterpriseHeader } from '@/components/EnterpriseHeader';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, TrendingUp, Star, Flame, Gem } from 'lucide-react';
import { DynamicIcon } from '@/components/DynamicIcon';

// Mock community-curated prompts
const communityPrompts = [
    {
        id: 'viral-twitter-thread',
        title: 'Viral Twitter Thread Generator',
        description: 'The exact prompt that got 2M+ impressions. Creates engaging thread hooks.',
        icon: 'Twitter',
        category: 'writing',
        loves: 2847,
        author: '@sarah_writes',
        badge: 'viral',
    },
    {
        id: 'code-review-wizard',
        title: 'Senior Dev Code Review',
        description: 'Get code reviews like a 10x engineer. Finds bugs others miss.',
        icon: 'Code2',
        category: 'code',
        loves: 1923,
        author: '@dev_wizard',
        badge: 'trending',
    },
    {
        id: 'midjourney-magic',
        title: 'Midjourney Cinematic Prompts',
        description: 'Creates movie-quality AI images. Used by 500+ designers.',
        icon: 'Image',
        category: 'creative',
        loves: 3421,
        author: '@ai_artist',
        badge: 'gem',
    },
    {
        id: 'linkedin-viral',
        title: 'LinkedIn Thought Leadership',
        description: 'The framework that got me 100K followers in 6 months.',
        icon: 'Linkedin',
        category: 'writing',
        loves: 1654,
        author: '@growth_hacker',
        badge: 'trending',
    },
    {
        id: 'debugging-ai',
        title: 'AI Debugging Assistant',
        description: 'Finds bugs 10x faster than Stack Overflow. Mind-blowing results.',
        icon: 'Bug',
        category: 'code',
        loves: 2103,
        author: '@code_ninja',
        badge: 'gem',
    },
];

const Discover = () => {
    const navigate = useNavigate();
    const [lovedPrompts, setLovedPrompts] = useState<Set<string>>(new Set());

    const handleLove = (id: string) => {
        setLovedPrompts(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const getBadgeInfo = (badge: string) => {
        switch (badge) {
            case 'viral':
                return { icon: Flame, label: '🔥 Viral', color: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20' };
            case 'trending':
                return { icon: TrendingUp, label: '📈 Trending', color: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20' };
            case 'gem':
                return { icon: Gem, label: '💎 Hidden Gem', color: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20' };
            default:
                return { icon: Star, label: 'Featured', color: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20' };
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <EnterpriseHeader />

            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-6xl">
                {/* Header */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                            <Star className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold">Discover</h1>
                            <p className="text-muted-foreground mt-1">
                                Mind-blowing prompts curated by the community
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <Card className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                                <span className="text-sm text-muted-foreground">Total Loves</span>
                            </div>
                            <div className="text-2xl font-bold">
                                {communityPrompts.reduce((sum, p) => sum + p.loves, 0).toLocaleString()}
                            </div>
                        </Card>
                        <Card className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                                <Flame className="w-4 h-4 text-orange-500" />
                                <span className="text-sm text-muted-foreground">Prompts</span>
                            </div>
                            <div className="text-2xl font-bold">{communityPrompts.length}</div>
                        </Card>
                        <Card className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                                <TrendingUp className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-muted-foreground">This Week</span>
                            </div>
                            <div className="text-2xl font-bold">+127</div>
                        </Card>
                    </div>
                </div>

                {/* Prompts Grid */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Most Loved</h2>
                        <Badge variant="secondary">{communityPrompts.length} prompts</Badge>
                    </div>

                    <div className="grid gap-4">
                        {communityPrompts.map((prompt) => {
                            const badgeInfo = getBadgeInfo(prompt.badge);
                            const BadgeIcon = badgeInfo.icon;
                            const isLoved = lovedPrompts.has(prompt.id);

                            return (
                                <Card
                                    key={prompt.id}
                                    className="p-5 hover:border-primary/50 transition-colors group cursor-pointer"
                                    onClick={() => navigate(`/customize/${prompt.id}`)}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-4 flex-1">
                                            <DynamicIcon
                                                name={prompt.icon}
                                                className="w-8 h-8 text-primary flex-shrink-0 mt-1"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                                        {prompt.title}
                                                    </h3>
                                                    <Badge variant="outline" className={badgeInfo.color}>
                                                        {badgeInfo.label}
                                                    </Badge>
                                                </div>
                                                <p className="text-muted-foreground text-sm mb-3">
                                                    {prompt.description}
                                                </p>
                                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleLove(prompt.id);
                                                        }}
                                                        className="flex items-center gap-1 hover:text-red-500 transition-colors"
                                                    >
                                                        <Heart
                                                            className={`w-4 h-4 transition-all ${isLoved ? 'fill-red-500 text-red-500' : ''}`}
                                                        />
                                                        {prompt.loves + (isLoved ? 1 : 0)}
                                                    </button>
                                                    <span>•</span>
                                                    <span>by {prompt.author}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Button variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                                            Try It
                                        </Button>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
