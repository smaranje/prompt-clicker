import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart } from 'phosphor-react';
import { DynamicIcon } from '@/components/DynamicIcon';
import { getImagePath } from '@/lib/utils';
import { categories } from '@/data/categories';

interface PromptCardProps {
    prompt: any;
    navigate: any; // Using any for now to match original, but should be NavigateFunction
    toggleLove: (e: React.MouseEvent, id: string) => void;
}

export const PromptCard = ({ prompt, navigate, toggleLove }: PromptCardProps) => (
    <Card
        className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm h-full flex flex-col whitespace-normal cursor-pointer"
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
);
