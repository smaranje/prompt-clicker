import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnterpriseHeader } from '@/components/EnterpriseHeader';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, TrendUp, Star, Fire, Diamond, CircleNotch, Sparkle, MagnifyingGlass as Search, Palette, Briefcase, TerminalWindow } from 'phosphor-react';
import { DynamicIcon } from '@/components/DynamicIcon';
import { supabase, type CommunityPrompt } from '@/lib/supabase';
import { motion } from 'framer-motion';
import { pageTransitionConfig } from '@/lib/animations';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories } from '@/data/categories';
import { communityPrompts } from '@/data/community_prompts';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Helper to get image path respecting base URL
const getImagePath = (path: string) => {
    const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
    return `${base}${path}`;
};

// Helper for row sections
const PromptRow = ({ title, prompts, icon: Icon, color, categoryId, onSeeAll }: any) => {
    const navigate = useNavigate();
    const [lovedPrompts, setLovedPrompts] = useState<Set<string>>(new Set());

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

    if (!prompts || prompts.length === 0) return null;
    return (
        <div className="mb-10">
            <div className="flex items-center gap-2 mb-4 px-4 sm:px-6 md:px-0">
                <div className={`p-1.5 rounded-lg ${color}`}>
                    <Icon className="w-5 h-5" weight="duotone" />
                </div>
                <h2 className="text-xl font-bold tracking-tight">{title}</h2>
                <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto text-xs text-muted-foreground hover:text-primary"
                    onClick={() => onSeeAll(categoryId)}
                >
                    See All <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
            </div>
            <ScrollArea className="w-full whitespace-nowrap pb-4">
                <div className="flex w-max space-x-4 pl-4 sm:pl-6 md:pl-0 pr-4 sm:pr-6">
                    {prompts.map((prompt: CommunityPrompt) => (
                        <div key={prompt.id} className="w-[280px] sm:w-[320px]">
                            <Card
                                className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm h-full flex flex-col whitespace-normal"
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

                                    {/* Category Pill */}
                                    <div className="absolute top-3 left-3">
                                        <Badge variant="secondary" className="backdrop-blur-md bg-background/80 hover:bg-background/90 text-xs px-2 py-0.5 h-6">
                                            {categories.find(c => c.id === prompt.category)?.title || prompt.category}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 flex-1 flex flex-col">
                                    <h3 className="font-semibold text-base leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                        {prompt.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1">
                                        {prompt.description}
                                    </p>

                                    {/* Footer */}
                                    <div className="mt-auto pt-3 border-t border-border/50 flex items-center justify-between gap-2">
                                        <div className="flex items-center text-[10px] text-muted-foreground">
                                            <span className="font-medium text-foreground">{prompt.author}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                className="h-7 px-2 text-[10px] font-medium"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate(`/customize/${prompt.id}`);
                                                }}
                                            >
                                                Get
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-7 w-7 hover:bg-red-500/10 hover:text-red-500 transition-colors text-muted-foreground"
                                                onClick={(e) => toggleLove(e, prompt.id)}
                                            >
                                                <Heart weight="regular" className="w-3.5 h-3.5" />
                                                <span className="sr-only">Love</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" className="hidden" />
            </ScrollArea>
        </div>
    );
};

// Hero Carousel Item Interface
interface HeroItem {
    id: string;
    title: string;
    description: string;
    badge: string;
    icon: any;
    image: string;
    gradient: string;
    actionLink: string;
    readLink: string;
    uses: string;
    categoryBadge: string;
    categoryColor: string;
}

const heroItems: HeroItem[] = [
    {
        id: 'virtual-mckinsey-consultant',
        title: 'Virtual Strategy Consultant',
        description: 'Unlock McKinsey-level insights. This researched-backed framework conducts a 360° audit of your business model.',
        badge: "Editor's Choice",
        icon: Sparkle,
        image: 'images/business-strategy.png',
        gradient: 'from-indigo-600/90 to-purple-700/80',
        actionLink: '/customize/virtual-mckinsey-consultant',
        readLink: '/prompt/virtual-mckinsey-consultant',
        uses: '142 uses',
        categoryBadge: 'Business',
        categoryColor: 'bg-emerald-500/20 text-emerald-100'
    },
    {
        id: 'midjourney-v6-photorealism',
        title: 'Midjourney v6 Photorealism',
        description: 'Generate indistinguishable-from-reality photos using specific camera gear, lighting, and film stock metadata.',
        badge: "Trending",
        icon: Fire,
        image: 'images/midjourney-portrait.png',
        gradient: 'from-pink-600/90 to-rose-700/80',
        actionLink: '/customize/midjourney-v6-photorealism',
        readLink: '/prompt/midjourney-v6-photorealism',
        uses: '324 uses',
        categoryBadge: 'Creative',
        categoryColor: 'bg-purple-500/20 text-purple-100'
    },
    {
        id: 'saas-landing-page-optimizer',
        title: 'SaaS Landing Page Optimizer',
        description: 'Design high-converting landing pages with scientific precision. Focuses on fold layout, CTA placement.',
        badge: "New Arrival",
        icon: TrendUp,
        image: 'images/saas-wireframe.png',
        gradient: 'from-emerald-600/90 to-teal-700/80',
        actionLink: '/customize/saas-landing-page-optimizer',
        readLink: '/prompt/saas-landing-page-optimizer',
        uses: '89 uses',
        categoryBadge: 'Marketing',
        categoryColor: 'bg-blue-500/20 text-blue-100'
    }
];

const HeroCarousel = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroItems.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    // Helper to get image path respecting base URL
    const getImagePath = (path: string) => {
        const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
        return `${base}${path}`;
    };

    const item = heroItems[currentIndex];

    return (
        <div className="relative mx-auto max-w-5xl mb-8 group">
            {/* Main Card */}
            <div className={`rounded-xl bg-gradient-to-br ${item.gradient} text-white p-5 sm:p-6 relative overflow-hidden shadow-lg transition-colors duration-1000`}>

                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-overlay" />

                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center min-h-[240px]">
                    {/* Text Content - Animate Key Changes */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            key={`text-${currentIndex}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge className="mb-2 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md px-2 py-0.5 text-[10px] uppercase tracking-wider">
                                <item.icon className="w-3 h-3 mr-1.5 fill-current" />
                                {item.badge}
                            </Badge>
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 leading-tight tracking-tight">
                                {item.title}
                            </h1>
                            <p className="text-sm sm:text-base text-white/80 mb-4 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium line-clamp-2">
                                {item.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                                <Button
                                    size="sm"
                                    className="font-bold h-9 px-4 shadow-md bg-white text-indigo-700 hover:bg-white/90 hover:-translate-y-0.5 transition-all text-xs"
                                    onClick={() => navigate(item.actionLink)}
                                >
                                    <Diamond className="w-3.5 h-3.5 mr-2" />
                                    Use Framework
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="bg-black/20 border-white/20 text-white hover:bg-black/30 h-9 text-xs backdrop-blur-sm"
                                    onClick={() => navigate(item.readLink)}
                                >
                                    Read Strategy
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Preview - Animate Slide In */}
                    <div className="w-full md:w-5/12 max-w-[320px] aspect-[16/9] relative perspective-1000 hidden sm:block">
                        <motion.div
                            key={`image-${currentIndex}`}
                            initial={{ opacity: 0, rotateY: 10, x: 50 }}
                            animate={{ opacity: 1, rotateY: -2, x: 0 }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className="w-full h-full relative rounded-lg overflow-hidden shadow-xl border border-white/10 bg-black/20"
                        >
                            <img
                                src={getImagePath(item.image)}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-2 left-3 right-3">
                                <div className="flex items-center gap-2 text-white/90 text-[10px] font-medium">
                                    <Badge variant="secondary" className={`${item.categoryColor} border-0 h-4 px-1 text-[9px]`}>{item.categoryBadge}</Badge>
                                    <span>{item.uses}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                {heroItems.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-1 h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

const Discover = () => {
    const navigate = useNavigate();
    const [communityPromptsData, setCommunityPrompts] = useState<CommunityPrompt[]>(communityPrompts);
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

        // FOR DEMO: Prioritize curated fallbacks
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

    // Filter prompts based on search and category
    const filteredPrompts = communityPromptsData.filter(prompt => {
        const matchesSearch = searchQuery === '' ||
            prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prompt.author.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = filterCategory === 'all' || prompt.category === filterCategory;

        return matchesSearch && matchesCategory;
    });

    const handleSeeAll = (categoryId: string) => {
        setFilterCategory(categoryId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Grouping for Widget Layout
    const trendingPrompts = filteredPrompts.filter(p => p.badge === 'viral' || p.badge === 'trending' || p.loves > 5000);
    const businessPrompts = filteredPrompts.filter(p => p.category === 'business');
    const creativePrompts = filteredPrompts.filter(p => p.category === 'creative' || p.category === 'writing');
    const devPrompts = filteredPrompts.filter(p => p.category === 'code');

    return (
        <motion.div
            className="min-h-screen bg-background"
            {...pageTransitionConfig}
        >
            <EnterpriseHeader />

            <div className="container mx-auto px-0 sm:px-6 py-8 sm:py-12 max-w-7xl">
                {/* Hero Carousel */}
                <HeroCarousel />

                {/* Search & Filters */}
                <div className="px-4 sm:px-0 flex flex-col md:flex-row gap-4 mb-10 sticky top-2 z-20">
                    <div className="flex-1 relative">
                        <div className="relative overflow-hidden rounded-xl shadow-sm bg-background/80 backdrop-blur-md border border-border/50">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Find a solution (e.g., 'Cold Email', 'SQL Debug')..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 h-11 bg-transparent border-none focus-visible:ring-0"
                            />
                        </div>
                    </div>
                    <Select value={filterCategory} onValueChange={setFilterCategory}>
                        <SelectTrigger className="w-full md:w-[200px] h-11 bg-background/80 backdrop-blur-md border-border/50 rounded-xl">
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

                {/* Rows */}
                <div className="space-y-2 pb-20">
                    <PromptRow
                        title="Trending Now"
                        prompts={trendingPrompts}
                        icon={Fire}
                        color="bg-orange-500/10 text-orange-600"
                        categoryId="all"
                        onSeeAll={handleSeeAll}
                    />
                    <PromptRow
                        title="Business Essentials"
                        prompts={businessPrompts}
                        icon={Briefcase}
                        color="bg-blue-500/10 text-blue-600"
                        categoryId="business"
                        onSeeAll={handleSeeAll}
                    />
                    <PromptRow
                        title="Creative Studio"
                        prompts={creativePrompts}
                        icon={Palette}
                        color="bg-pink-500/10 text-pink-600"
                        categoryId="creative"
                        onSeeAll={handleSeeAll}
                    />
                    <PromptRow
                        title="Developer Tools"
                        prompts={devPrompts}
                        icon={TerminalWindow}
                        color="bg-green-500/10 text-green-600"
                        categoryId="code"
                        onSeeAll={handleSeeAll}
                    />

                    {/* Fallback if no specific groups but search is active */}
                    {searchQuery && filteredPrompts.length === 0 && (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                                <Search className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-lg font-medium">No results found</h3>
                            <p className="text-muted-foreground">Try searching for something else</p>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Discover;
