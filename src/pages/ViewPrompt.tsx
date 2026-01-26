import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Copy, ArrowLeft, Heart, Ghost, Check, ShareNetwork, Sparkle, User, Calendar, Tag } from 'phosphor-react';
import { supabase, type CommunityPrompt } from '@/lib/supabase';
import { DynamicIcon } from '@/components/DynamicIcon';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { cascadeContainer, cascadeItem, pageTransitionConfig, copySuccess, heartPulse } from '@/lib/animations';
import { communityPrompts } from '@/data/community_prompts';

const ViewPrompt = () => {
    const { promptId } = useParams();
    const navigate = useNavigate();
    const [prompt, setPrompt] = useState<CommunityPrompt | null>(null);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);
    const [isLoved, setIsLoved] = useState(false);


    useEffect(() => {
        const fetchPrompt = async () => {
            if (!promptId) {
                setLoading(false);
                return;
            }

            // 1. Check local community prompts first
            const localPrompt = communityPrompts.find(p => p.id === promptId);
            if (localPrompt) {
                setPrompt(localPrompt);
                setLoading(false);
                return;
            }

            // 2. Fallback to Supabase
            if (!supabase) {
                setLoading(false);
                return;
            }

            try {
                const { data, error } = await supabase
                    .from('community_prompts')
                    .select('*')
                    .eq('id', promptId)
                    .single();

                if (error) throw error;
                if (data) setPrompt(data);
            } catch (error) {
                console.error('Error fetching prompt:', error);
                toast.error('Could not load prompt');
            } finally {
                setLoading(false);
            }
        };

        fetchPrompt();
    }, [promptId]);

    const handleCopy = () => {
        if (prompt?.content) {
            navigator.clipboard.writeText(prompt.content);
            setCopied(true);
            toast.success('Prompt copied to clipboard!');
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleLove = () => {
        setIsLoved(!isLoved);
        toast(isLoved ? "Removed from favorites" : "Added to favorites", {
            icon: <Heart className={isLoved ? "" : "fill-red-500 text-red-500"} />
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="flex flex-col items-center gap-4 animate-pulse">
                    <Ghost className="w-12 h-12 text-muted-foreground/50" />
                    <p className="text-muted-foreground">Summoning prompt...</p>
                </div>
            </div>
        );
    }

    if (!prompt) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center max-w-md px-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <Ghost className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Prompt Not Found</h2>
                    <p className="text-muted-foreground mb-6">
                        This prompt seems to have vanished into the digital void.
                    </p>
                    <Button onClick={() => navigate('/discover')}>Return to Discover</Button>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="min-h-screen bg-background pb-12"
            {...(pageTransitionConfig as any)}
        >
            <div className="container mx-auto px-4 sm:px-6 py-6 max-w-4xl">
                {/* Navigation Bar */}
                <div className="flex items-center justify-between mb-8">
                    <Button
                        variant="ghost"
                        className="pl-0 hover:bg-transparent hover:text-primary gap-2"
                        onClick={() => navigate('/discover')}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Discover
                    </Button>
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                    </div>
                </div>

                <motion.div
                    className="grid gap-6"
                    variants={cascadeContainer}
                    initial="initial"
                    animate="animate"
                >
                    {/* Header Card */}
                    <motion.div
                        className="flex flex-col md:flex-row gap-6 items-start justify-between"
                        variants={cascadeItem}
                    >
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    <DynamicIcon name={prompt.icon} className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-foreground">
                                        {prompt.title}
                                    </h1>
                                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                                        <Badge variant="outline" className="capitalize rounded-md">
                                            {prompt.category}
                                        </Badge>
                                        {prompt.badge && (
                                            <Badge variant="secondary" className="capitalize rounded-md bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                                                <Sparkle className="w-3 h-3 mr-1" />
                                                {prompt.badge}
                                            </Badge>
                                        )}
                                        <span className="flex items-center gap-1 ml-2">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(prompt.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                {prompt.description}
                            </p>

                            <div className="flex items-center gap-4 mt-6">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs">
                                        {prompt.author.substring(0, 2).toUpperCase()}
                                    </div>
                                    <span className="text-foreground">{prompt.author}</span>
                                </div>
                                <div className="h-4 w-px bg-border" />
                                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                                    <span className="font-semibold text-foreground">{prompt.loves.toLocaleString()}</span>
                                    <span>people used this</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto mt-4 md:mt-0">
                            <motion.div className="flex-1 md:w-48" animate={copied ? "copied" : "initial"} variants={copySuccess}>
                                <Button
                                    size="lg"
                                    className="w-full shadow-lg shadow-primary/20"
                                    onClick={handleCopy}
                                >
                                    <AnimatePresence mode="wait">
                                        {copied ? (
                                            <motion.span
                                                key="copied"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="flex items-center"
                                            >
                                                <Check className="w-4 h-4 mr-2" />
                                                Copied!
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                key="copy"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="flex items-center"
                                            >
                                                <Copy className="w-4 h-4 mr-2" />
                                                Copy Prompt
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </motion.div>
                            <Button variant="outline" size="lg" className="flex-1 md:w-48" onClick={handleLove}>
                                <motion.div animate={isLoved ? (heartPulse as any) : {}}>
                                    <Heart className={`w-4 h-4 mr-2 transition-all ${isLoved ? "fill-red-500 text-red-500" : ""}`} />
                                </motion.div>
                                {isLoved ? "Favorited" : "Favorite"}
                            </Button>
                        </div>
                    </motion.div>

                    {/* The Prompt Content - The "Gold" */}
                    <motion.div variants={cascadeItem}>
                        <Card className="relative group overflow-hidden border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

                            <div className="p-6 sm:p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2 relative z-10">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        Verified Formatting
                                    </h3>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 text-xs text-muted-foreground hover:text-foreground relative z-20"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent card clicks if any
                                            handleCopy();
                                        }}
                                    >
                                        Copy raw text
                                    </Button>
                                </div>

                                <div className="bg-muted/30 rounded-lg p-6 font-mono text-base sm:text-lg leading-relaxed whitespace-pre-wrap text-foreground border border-border/50 selection:bg-primary/20">
                                    {prompt.content || "No content available."}
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Tips / Context Section */}
                    <motion.div className="grid sm:grid-cols-2 gap-4" variants={cascadeItem}>
                        <Card className="p-5 bg-blue-500/5 border-blue-500/10">
                            <h3 className="font-semibold flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-400">
                                <Sparkle className="w-4 h-4" />
                                Pro Tip
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                This prompt uses specific structural cues that work best with GPT-4 and Claude 3. Keep the brackets [] as placeholders effectively.
                            </p>
                        </Card>
                        <Card className="p-5 bg-purple-500/5 border-purple-500/10">
                            <h3 className="font-semibold flex items-center gap-2 mb-2 text-purple-700 dark:text-purple-400">
                                <Tag className="w-4 h-4" />
                                Best Used For
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {prompt.category === 'code' ? 'Code reviews, debugging complex errors, and refactoring legacy codebases.' :
                                    prompt.category === 'writing' ? 'Viral social media threads, blog outines, and marketing copy.' :
                                        'General productivity and complex reasoning tasks.'}
                            </p>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ViewPrompt;
