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
                {/* Featured Spotlight Hero */}
                <div className="mb-12 rounded-3xl bg-gradient-to-br from-primary/90 to-primary/70 text-primary-foreground p-6 sm:p-10 relative overflow-hidden shadow-2xl">
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
                        <div className="w-full md:w-1/3 aspect-[4/3] bg-background/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 shadow-inner hidden md:block rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="h-full bg-background rounded-lg shadow-sm p-4 overflow-hidden relative">
                                <div className="space-y-3">
                                    <div className="h-2 w-1/3 bg-muted rounded animate-pulse" />
                                    <div className="h-2 w-3/4 bg-muted rounded animate-pulse" />
                                    <div className="h-2 w-5/6 bg-muted rounded animate-pulse" />
                                    <div className="h-2 w-full bg-muted rounded animate-pulse" />
                                    <div className="h-20 w-full bg-blue-500/5 rounded border border-blue-500/10 p-2 mt-4">
                                        <p className="text-[10px] text-blue-600 font-mono">
                                            "Based on my performance review, I believe a 15% adjustment reflects..."
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
                            </div>
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
                            className="w-full pl-9 h-10 bg-muted/50 border-transparent focus:bg-background focus:border-input transition-all"
                        />
                    </div>
                    <Select value={filterCategory} onValueChange={setFilterCategory}>
                        <SelectTrigger className="w-full md:w-[200px] h-10 bg-muted/50 border-transparent focus:bg-background focus:border-input">
                            <SelectValue placeholder="All Goals" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Goals</SelectItem>
                            {categories.map(cat => (
                                <SelectItem key={cat.id} value={cat.id}>{cat.title}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Trending Workflows</h2>
                    <Badge variant="outline" className="px-3 py-1">{filteredPrompts.length} solutions</Badge>
                </div>

                {!loading && (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
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
                                        className="group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border-border/50 h-full flex flex-col"
                                        onClick={() => navigate(`/prompt/${prompt.id}`)}
                                    >
                                        {/* Image Cover - Portrait Aspect */}
                                        {prompt.example_image ? (
                                            <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                                                <img
                                                    src={prompt.example_image}
                                                    alt={prompt.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />

                                                {/* Subtle Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />

                                                {/* Badge */}
                                                <div className="absolute top-3 right-3">
                                                    <Badge className={`${badgeInfo.color} shadow-lg border-0`}>
                                                        {badgeInfo.label}
                                                    </Badge>
                                                </div>

                                                {/* Before/After Pill - Bottom Center */}
                                                {prompt.example_input && (
                                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                                                        <div className="flex items-center gap-1.5 bg-background/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-border shadow-xl">
                                                            <img src={prompt.example_input} className="w-6 h-6 rounded-full object-cover ring-2 ring-primary/20" alt="Before" />
                                                            <span className="text-xs text-muted-foreground">→</span>
                                                            <img src={prompt.example_image} className="w-6 h-6 rounded-full object-cover ring-2 ring-green-500/30" alt="After" />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="aspect-[4/5] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center relative">
                                                <DynamicIcon name={prompt.icon} className="w-16 h-16 text-primary/30" />
                                                <div className="absolute top-3 right-3">
                                                    <Badge variant="outline" className={badgeInfo.color}>
                                                        {badgeInfo.label}
                                                    </Badge>
                                                </div>
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="p-4 flex-1 flex flex-col">
                                            <div className="flex items-start gap-2 mb-2">
                                                <div className="p-1.5 rounded-md bg-primary/10 flex-shrink-0">
                                                    <DynamicIcon name={prompt.icon} className="w-4 h-4 text-primary" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-base group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                                        {prompt.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1">
                                                {prompt.description}
                                            </p>

                                            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleLove(prompt.id);
                                                    }}
                                                    className="flex items-center gap-1.5 hover:text-red-500 transition-colors"
                                                >
                                                    <Heart
                                                        className={`w-3.5 h-3.5 ${isLoved ? 'fill-red-500 text-red-500' : ''}`}
                                                    />
                                                    <span className="font-medium">{(prompt.loves + (isLoved ? 1 : 0)).toLocaleString()}</span>
                                                </button>
                                                <span className="text-xs truncate">{prompt.author}</span>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default Discover;
