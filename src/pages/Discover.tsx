import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnterpriseHeader } from '@/components/EnterpriseHeader';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, TrendUp, Star, Fire, Diamond, CircleNotch, Sparkle, MagnifyingGlass as Search } from 'phosphor-react';
import { DynamicIcon } from '@/components/DynamicIcon';
import { supabase, type CommunityPrompt } from '@/lib/supabase';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, pageTransitionConfig, skeletonPulse } from '@/lib/animations';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories } from '@/data/categories';

import { communityPrompts } from '@/data/community_prompts';

// Helper to get image path respecting base URL
const getImagePath = (path: string) => {
    const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
    return `${base}${path}`;
};

const Discover = () => {
    const navigate = useNavigate();
    const [communityPromptsData, setCommunityPrompts] = useState<CommunityPrompt[]>(communityPrompts);
    const [lovedPrompts, setLovedPrompts] = useState<Set<string>>(new Set());
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');

    useEffect(() => {
        fetchPrompts();
    }, []);

    const fetchPrompts = async () => {
        setIsLoading(true);
        // Simulate network delay for "live" feel
        await new Promise(resolve => setTimeout(resolve, 800));

        // FOR DEMO: Prioritize curated fallbacks to avoid "fake" or duplicate DB data
        // Check if we want to mix in DB data later, but for now enforce quality
        const useSupabase = false;

        if (!useSupabase || !supabase) {
            console.log('Using curated premium prompts');
            setCommunityPrompts(communityPrompts);
            setIsLoading(false);
            return;
        }

        try {
            const { data, error } = await supabase
                .from('community_prompts')
                .select('*')
                .order('loves', { ascending: false });

            if (error) throw error;

            if (data && data.length > 0) {
                setCommunityPrompts(data);
            } else {
                setCommunityPrompts(communityPrompts);
            }
        } catch (error) {
            console.error('Error fetching prompts:', error);
            setCommunityPrompts(communityPrompts);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleLove = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
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

    const getBadgeStyle = (badge: string | null | undefined) => {
        if (!badge) return null;
        switch (badge) {
            case 'viral':
                return { icon: Fire, label: 'Viral', color: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20' };
            case 'trending':
                return { icon: TrendUp, label: 'Trending', color: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20' };
            case 'gem':
                return { icon: Diamond, label: 'Hidden Gem', color: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20' };
            default:
                return { icon: Star, label: 'Featured', color: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20' };
        }
    };

    // Filter prompts based on search and category
    const filteredPrompts = communityPromptsData.filter(prompt => {
        const matchesSearch = searchQuery === '' ||
            prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prompt.author.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = filterCategory === 'all' || prompt.category === filterCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <motion.div
            className="min-h-screen bg-background"
            {...pageTransitionConfig}
        >
            <EnterpriseHeader />

            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-6xl">
                {/* Featured Spotlight Hero */}
                <div className="mb-8 rounded-3xl bg-gradient-to-br from-primary/90 to-primary/70 text-primary-foreground p-6 sm:p-10 relative overflow-hidden shadow-2xl group">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 text-center md:text-left">
                            <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md">
                                <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
                                Daily Spotlight
                            </Badge>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                The "Salary Negotiator" Playbook
                            </h1>
                            <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
                                Don't leave money on the table. This research-backed script helps you confidently ask for a raise or negotiate a new offer.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="font-semibold h-12 px-8 shadow-lg transition-transform hover:-translate-y-0.5"
                                    onClick={() => navigate('/customize/salary-negotiator')}
                                >
                                    <Diamond className="w-4 h-4 mr-2" />
                                    Use This Playbook
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent border-white/30 text-white hover:bg-white/10 h-12"
                                >
                                    Read Strategy
                                </Button>
                            </div>
                        </div>

                        {/* Visual Preview */}
                        <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl border border-white/10 transform md:rotate-3 transition-all duration-500 group-hover:rotate-0 group-hover:scale-105">
                            <img
                                src={getImagePath('images/salary-negotiation.png')}
                                alt="Salary Negotiation Playbook"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                        </div>
                    </div>
                </div>

                {/* Search & Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-2 z-20 bg-background/95 backdrop-blur-md p-2 -mx-2 rounded-xl border border-border/50 shadow-sm supports-[backdrop-filter]:bg-background/60">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Find a solution (e.g., 'Cold Email', 'SQL Debug')..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 h-10 bg-muted/50 border-transparent focus:bg-background focus:border-input transition-all"
                        />
                    </div>
                    <Select value={filterCategory} onValueChange={setFilterCategory}>
                        <SelectTrigger className="w-full md:w-[200px] h-10 bg-muted/50 border-transparent focus:bg-background focus:border-input">
                            <SelectValue placeholder="All Goals" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Goals</SelectItem>
                            {categories.map((cat) => (
                                <SelectItem key={cat.id} value={cat.id}>
                                    {cat.title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Prompts Grid */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold tracking-tight">Trending Workflows</h2>
                        <Badge variant="outline" className="rounded-full px-3 h-7">
                            {filteredPrompts.length} solutions
                        </Badge>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                    >
                        {isLoading
                            ? Array.from({ length: 6 }).map((_, i) => (
                                <Card key={i} className="h-[320px] bg-muted/30 border-0 animate-pulse rounded-xl" />
                            ))
                            : filteredPrompts.map((prompt) => {
                                const badgeStyle = getBadgeStyle(prompt.badge);
                                const isLoved = lovedPrompts.has(prompt.id);

                                return (
                                    <motion.div key={prompt.id} variants={staggerItem}>
                                        <Card
                                            className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm h-full flex flex-col"
                                            onClick={() => navigate(`/prompt/${prompt.id}`)}
                                        >
                                            {/* Card Header / Image Area */}
                                            <div className="relative aspect-video w-full overflow-hidden bg-muted/30 group-hover:bg-muted/50 transition-colors">
                                                {prompt.example_image ? (
                                                    <div className="w-full h-full relative">
                                                        <img
                                                            src={getImagePath(prompt.example_image)}
                                                            alt={prompt.title}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                                    </div>
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <DynamicIcon
                                                            name={prompt.icon}
                                                            className="w-12 h-12 text-muted-foreground/20 group-hover:text-primary/40 transition-colors duration-300"
                                                        />
                                                    </div>
                                                )}

                                                {/* Badge */}
                                                {badgeStyle && (
                                                    <div className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-medium border backdrop-blur-md shadow-sm ${badgeStyle.color}`}>
                                                        <div className="flex items-center gap-1">
                                                            <badgeStyle.icon className="w-3 h-3" weight="fill" />
                                                            {badgeStyle.label}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Category Pill */}
                                                <div className="absolute top-3 left-3">
                                                    <Badge variant="secondary" className="backdrop-blur-md bg-background/80 hover:bg-background/90 text-xs px-2 py-0.5 h-6">
                                                        {categories.find(c => c.id === prompt.category)?.title || prompt.category}
                                                    </Badge>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-5 flex-1 flex flex-col">
                                                <h3 className="font-semibold text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                                    {prompt.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                                                    {prompt.description}
                                                </p>

                                                {/* Footer */}
                                                <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between gap-3">
                                                    <div className="flex items-center text-xs text-muted-foreground">
                                                        <span className="font-medium text-foreground">{prompt.author}</span>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        <Button
                                                            size="sm"
                                                            variant="default" // Primary button for action
                                                            className="h-8 px-3 text-xs font-medium bg-primary/90 hover:bg-primary shadow-sm"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                navigate(`/customize/${prompt.category === 'writing' ? 'viral-hook' : 'salary-negotiator'}`);
                                                            }}
                                                        >
                                                            Remix
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className={`h-8 w-8 hover:bg-red-500/10 hover:text-red-500 transition-colors ${isLoved ? 'text-red-500' : 'text-muted-foreground'
                                                                }`}
                                                            onClick={(e) => toggleLove(e, prompt.id)}
                                                        >
                                                            <Heart weight={isLoved ? "fill" : "regular"} className={`w-4 h-4 ${isLoved ? "animate-pulse-once" : ""}`} />
                                                            <span className="sr-only">Love</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Discover;
