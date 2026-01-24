import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnterpriseHeader } from '@/components/EnterpriseHeader';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, TrendUp, Star, Fire, Diamond, CircleNotch } from 'phosphor-react';
import { DynamicIcon } from '@/components/DynamicIcon';
import { supabase, type CommunityPrompt } from '@/lib/supabase';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, pageTransitionConfig, skeletonPulse } from '@/lib/animations';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories } from '@/data/categories';

// Fallback mock data if Supabase is unavailable
const fallbackPrompts: CommunityPrompt[] = [
    {
        id: 'viral-thread-hook',
        title: 'Viral Thread Hook Generator',
        description: 'Generate scroll-stopping hooks for Twitter/X threads. Proven to increase CTR by 40%.',
        icon: 'Twitter',
        category: 'writing',
        loves: 3421,
        author: '@growth_guru',
        badge: 'viral',
        created_at: new Date().toISOString(),
    },
    {
        id: 'senior-code-review',
        title: 'Senior Engineer Code Review',
        description: 'Simulates a FAANG staff engineer reviewing your code. Finds optimization, security, and style issues.',
        icon: 'Code2',
        category: 'code',
        loves: 2847,
        author: '@tech_lead_sarah',
        badge: 'trending',
        created_at: new Date().toISOString(),
    },
    {
        id: 'midjourney-cinematic',
        title: 'Midjourney Cinematic v6',
        description: 'Detailed lighting, camera angles, and composition parameters for photorealistic generation.',
        icon: 'Image',
        category: 'creative',
        loves: 1954,
        author: '@prompt_artist_jay',
        badge: 'gem',
        created_at: new Date().toISOString(),
    },
    {
        id: 'seo-blog-optimizer',
        title: 'SEO Blog Post Optimizer',
        description: 'Rewrites content to target keywords without sounding robotic. Includes meta descriptions.',
        icon: 'FileText',
        category: 'marketing',
        loves: 1654,
        author: '@content_king',
        badge: 'featured',
        created_at: new Date().toISOString(),
    },
    {
        id: 'react-component-gen',
        title: 'Modern React Component Gen',
        description: 'Generates Tailwind + Shadcn/UI components with proper TypeScript typing and accessibility.',
        icon: 'Layout',
        category: 'code',
        loves: 1203,
        author: '@frontend_wizard',
        badge: 'trending',
        created_at: new Date().toISOString(),
    },
    {
        id: 'cold-email-sales',
        title: 'B2B Cold Email Architect',
        description: 'Creates personalized 3-step email sequences based on prospect value proposition.',
        icon: 'Mail',
        category: 'business',
        loves: 982,
        author: '@sales_closer',
        badge: 'featured',
        created_at: new Date().toISOString(),
    },
    {
        id: 'regex-explained',
        title: 'Regex Explainer & Fixer',
        description: 'Paste your broken regex and get a fix + plain English explanation.',
        icon: 'Bug',
        category: 'code',
        loves: 876,
        author: '@regex_god',
        badge: 'gem',
        created_at: new Date().toISOString(),
    },
];

const Discover = () => {
    const navigate = useNavigate();
    const [communityPrompts, setCommunityPrompts] = useState<CommunityPrompt[]>(fallbackPrompts);
    const [lovedPrompts, setLovedPrompts] = useState<Set<string>>(new Set());
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');

    useEffect(() => {
        const fetchPrompts = async () => {
            if (!supabase) {
                console.log('Supabase not configured, using fallback data');
                setLoading(false);
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
                }
            } catch (error) {
                console.error('Error fetching prompts:', error);
                // Fallback to mock data on error
            } finally {
                setLoading(false);
            }
        };

        fetchPrompts();
    }, []);

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

    const getBadgeInfo = (badge: string | null | undefined) => {
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
    const filteredPrompts = communityPrompts.filter(prompt => {
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
                                <Fire className="w-4 h-4 text-orange-500" />
                                <span className="text-sm text-muted-foreground">Prompts</span>
                            </div>
                            <div className="text-2xl font-bold">{communityPrompts.length}</div>
                        </Card>
                        <Card className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                                <TrendUp className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-muted-foreground">This Week</span>
                            </div>
                            <div className="text-2xl font-bold">+127</div>
                        </Card>
                    </div>

                    {/* Search and Filter */}
                    <div className="mb-6 space-y-4">
                        <div className="flex flex-col sm:flex-row gap-3">
                            {/* Search Input */}
                            <div className="flex-1">
                                <Input
                                    placeholder="Search prompts by title, description, or author..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full"
                                />
                            </div>

                            {/* Category Filter */}
                            <Select value={filterCategory} onValueChange={setFilterCategory}>
                                <SelectTrigger className="w-full sm:w-[180px]">
                                    <SelectValue placeholder="All Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    {categories.map(cat => (
                                        <SelectItem key={cat.id} value={cat.id}>{cat.title}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Prompts Grid */}
                <div className="space-y-4">
                    {loading && (
                        <motion.div className="grid gap-4" {...skeletonPulse}>
                            {[...Array(5)].map((_, i) => (
                                <Card key={i} className="p-5 h-32 bg-muted/50 animate-pulse" />
                            ))}
                        </motion.div>
                    )}
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Most Loved</h2>
                        <Badge variant="secondary">{filteredPrompts.length} prompts</Badge>
                    </div>

                    {!loading && (
                        <motion.div
                            className="grid gap-4"
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                        >
                            {filteredPrompts.map((prompt) => {
                                const badgeInfo = getBadgeInfo(prompt.badge);
                                const BadgeIcon = badgeInfo.icon;
                                const isLoved = lovedPrompts.has(prompt.id);

                                return (
                                    <motion.div
                                        key={prompt.id}
                                        variants={staggerItem}
                                    >
                                        <Card
                                            className="group cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden border-border/50"
                                            onClick={() => navigate(`/prompt/${prompt.id}`)}
                                        >
                                            {/* Image Cover if available */}
                                            {prompt.example_image ? (
                                                <div className="relative h-48 overflow-hidden bg-muted">
                                                    <img
                                                        src={prompt.example_image}
                                                        alt={prompt.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                                    {/* Badge on Image */}
                                                    <div className="absolute top-3 right-3">
                                                        <Badge variant="secondary" className={`${badgeInfo.color} bg-background/95 backdrop-blur-sm shadow-sm border-0`}>
                                                            {badgeInfo.label}
                                                        </Badge>
                                                    </div>

                                                    {/* Title & Icon on Image */}
                                                    <div className="absolute bottom-3 left-3 right-3 text-white">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <div className="p-1.5 rounded-md bg-white/20 backdrop-blur-md">
                                                                <DynamicIcon name={prompt.icon} className="w-4 h-4 text-white" />
                                                            </div>
                                                            <span className="text-xs font-medium text-white/90 uppercase tracking-wider">
                                                                {categories.find(c => c.id === prompt.category)?.title || prompt.category}
                                                            </span>
                                                        </div>
                                                        <h3 className="font-bold text-lg leading-tight text-white mb-1 shadow-sm">
                                                            {prompt.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="p-5 border-b bg-muted/30">
                                                    <div className="flex items-start justify-between mb-2">
                                                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                                                            <DynamicIcon name={prompt.icon} className="w-6 h-6" />
                                                        </div>
                                                        <Badge variant="outline" className={badgeInfo.color}>
                                                            {badgeInfo.label}
                                                        </Badge>
                                                    </div>
                                                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
                                                        {prompt.title}
                                                    </h3>
                                                </div>
                                            )}

                                            <div className="p-4">
                                                {!prompt.example_image && (
                                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 min-h-[40px]">
                                                        {prompt.description}
                                                    </p>
                                                )}
                                                {prompt.example_image && (
                                                    <div className="flex items-center gap-2 text-xs font-medium text-primary mb-3">
                                                        <span className="flex items-center gap-1.5 bg-primary/10 px-2 py-1 rounded-md">
                                                            <img src={prompt.example_input} className="w-4 h-4 rounded-full object-cover" alt="Before" />
                                                            <span>Before</span>
                                                        </span>
                                                        <span className="text-muted-foreground">→</span>
                                                        <span className="flex items-center gap-1.5 bg-green-500/10 text-green-600 px-2 py-1 rounded-md">
                                                            <img src={prompt.example_image} className="w-4 h-4 rounded-full object-cover" alt="After" />
                                                            <span>Result</span>
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleLove(prompt.id);
                                                            }}
                                                            className="flex items-center gap-1.5 hover:text-red-500 transition-colors group/love"
                                                        >
                                                            <Heart
                                                                className={`w-4 h-4 transition-all ${isLoved ? 'fill-red-500 text-red-500 scale-110' : 'group-hover/love:scale-110'}`}
                                                            />
                                                            <span className="font-medium">{prompt.loves + (isLoved ? 1 : 0)}</span>
                                                        </button>
                                                        <span>by {prompt.author}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Discover;
