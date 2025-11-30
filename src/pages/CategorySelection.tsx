import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bookmark, Info, Sparkles, Code2 } from 'lucide-react';
import logo from '@/assets/logo.png';

import { FirstTimeTutorial } from '@/components/FirstTimeTutorial';
import { MagicMode } from '@/components/MagicMode';
import { StudioMode } from '@/components/StudioMode';

const CategorySelection = () => {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState<'magic' | 'studio'>('magic');

  return (
    <>
      <FirstTimeTutorial />
      
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 page-transition pb-8">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl">
        {/* Header with Logo and Actions */}
        <div className="flex justify-between items-center mb-8 sm:mb-12 md:mb-16 gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="PromptCraft Logo" className="w-9 h-9 sm:w-8 sm:h-8 flex-shrink-0" />
            <span className="text-base sm:text-xl font-bold font-heading text-foreground whitespace-nowrap">
              PromptCraft
            </span>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/about')}
              className="h-8 w-8 sm:h-9 sm:w-9 hover:bg-accent"
              aria-label="About"
            >
              <Info className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/favorites')}
              className="h-8 w-8 sm:h-9 sm:w-9 hover:bg-accent"
              aria-label="Saved prompts"
            >
              <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
        
        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-heading mb-4 sm:mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent font-bold leading-tight">
            Get Perfect AI Prompts in 30 Seconds
          </h1>
          <p className="subtitle max-w-2xl mx-auto px-4 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            Choose your experience: instant magic or full control
          </p>
        </div>

        {/* Dual Mode Tabs */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <Tabs defaultValue="magic" value={activeMode} onValueChange={(v) => setActiveMode(v as 'magic' | 'studio')} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-auto p-1 mb-8">
              <TabsTrigger 
                value="magic" 
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Sparkles className="w-4 h-4" />
                <div className="text-left">
                  <div className="font-semibold text-sm">Quick Mode</div>
                  <div className="text-xs opacity-70">Instant results</div>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="studio" 
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Code2 className="w-4 h-4" />
                <div className="text-left">
                  <div className="font-semibold text-sm">Studio Mode</div>
                  <div className="text-xs opacity-70">Full control</div>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="magic" className="mt-0">
              <MagicMode />
            </TabsContent>

            <TabsContent value="studio" className="mt-0">
              <StudioMode />
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 sm:pt-12 border-t border-border space-y-3">
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base px-4">
            No signup required. Works with ChatGPT and Claude. Always free.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm px-4">
            For professionals who actually get stuff done with AI.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Badge variant="secondary" className="text-xs">
              Made by Smaran
            </Badge>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CategorySelection;
