import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Code2 } from 'lucide-react';
import { DoodleBulb } from '@/components/Doodles';

import { FirstTimeTutorial } from '@/components/FirstTimeTutorial';
import { MagicMode } from '@/components/MagicMode';
import { StudioMode } from '@/components/StudioMode';
import { PromptComparison } from '@/components/PromptComparison';
import { ExploreSection } from '@/components/ExploreSection';

const CategorySelection = () => {
  const [activeMode, setActiveMode] = useState<'magic' | 'studio'>('magic');

  return (
    <>
      <FirstTimeTutorial />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 page-transition pb-24 md:pb-8">


        <div className="container mx-auto px-3 sm:px-6 py-6 sm:py-12 md:py-16 lg:py-20 max-w-7xl">
          {/* Main Heading */}
          <div className="text-center mb-6 sm:mb-10 relative">
            {/* Decorative: Light Bulb (Ideas) - Anchored to Headline */}
            <div className="absolute -top-6 -right-2 md:-right-8 w-12 h-12 md:w-16 md:h-16 hidden sm:block opacity-90 pointer-events-none text-foreground dark:text-foreground/80 rotate-12">
              <DoodleBulb className="w-full h-full" />
            </div>

            <h1 className="font-heading mb-3 sm:mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl px-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent font-bold leading-tight">
              Get Perfect AI Prompts in 30 Seconds
            </h1>
            <p className="subtitle max-w-2xl mx-auto px-3 text-xs sm:text-base md:text-lg">
              Choose your experience: instant magic or full control
            </p>
          </div>

          {/* Dual Mode Tabs - Now First */}
          <div className="max-w-6xl mx-auto mb-10 sm:mb-16 relative">


            <Tabs defaultValue="magic" value={activeMode} onValueChange={(v) => setActiveMode(v as 'magic' | 'studio')} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-auto p-1 mb-6 sm:mb-8">
                <TabsTrigger
                  value="magic"
                  className="flex items-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-3 pr-10 sm:pr-14 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground relative overflow-hidden transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <div className="text-left min-w-0 z-10">
                    <div className="font-semibold text-xs sm:text-sm truncate">Magic Mode</div>
                    <div className="text-[10px] sm:text-xs opacity-70 truncate">Instant results</div>
                  </div>

                </TabsTrigger>
                <TabsTrigger
                  value="studio"
                  className="flex items-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-3 pr-10 sm:pr-14 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground relative overflow-hidden transition-all"
                >
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <div className="text-left min-w-0 z-10">
                    <div className="font-semibold text-xs sm:text-sm truncate">Studio Mode</div>
                    <div className="text-[10px] sm:text-xs opacity-70 truncate">Full control</div>
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

          {/* Before/After Comparison - Now After Modes */}
          <div className="relative">
            <PromptComparison />
          </div>

          <ExploreSection />


          {/* Footer */}
          <div className="text-center pt-8 sm:pt-12 border-t border-border space-y-4 relative">
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base px-4">
              No signup required. Works with ChatGPT and Claude. Always free.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="h-px w-12 bg-border"></div>
              <span className="text-sm sm:text-base font-medium text-foreground/80">Built by Smaran</span>
              <div className="h-px w-12 bg-border"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySelection;
