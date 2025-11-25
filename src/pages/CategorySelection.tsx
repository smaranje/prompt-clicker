import { useState } from 'react';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { templates } from '@/data/templates';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Bookmark, Info, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.png';
import { SmartSearch } from '@/components/SmartSearch';

import { FirstTimeTutorial } from '@/components/FirstTimeTutorial';
import { TemplatePreviewDialog } from '@/components/TemplatePreviewDialog';
import { Template } from '@/types/templates';

const CategorySelection = () => {
  const navigate = useNavigate();
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/templates/${categoryId}`);
  };

  const handleTemplatePreview = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setPreviewTemplate(template);
      setPreviewOpen(true);
    }
  };

  return (
    <>
      <FirstTimeTutorial />
      <TemplatePreviewDialog
        template={previewTemplate}
        open={previewOpen}
        onOpenChange={setPreviewOpen}
      />
      
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
            Stop wasting time on bad prompts. Get perfect AI results in 30 seconds.
          </h1>
          <p className="subtitle max-w-2xl mx-auto px-4 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            Battle-tested prompt templates used by thousands of professionals who actually get stuff done.
          </p>
          <SmartSearch />
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">10x faster</div>
            <div className="text-sm text-muted-foreground">Than writing from scratch</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">8 min saved</div>
            <div className="text-sm text-muted-foreground">Average per prompt</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">First try</div>
            <div className="text-sm text-muted-foreground">Get it right immediately</div>
          </div>
        </div>

        {/* Comparison Demo */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-muted/50 border border-border rounded-lg p-4 sm:p-6">
              <div className="text-xs sm:text-sm font-semibold text-muted-foreground mb-3">Without PromptCraft:</div>
              <div className="text-sm sm:text-base text-muted-foreground italic mb-4">"Write me an email"</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Generic result, needs 5+ rewrites, wastes your time</div>
            </div>
            <div className="bg-primary/5 border border-primary/30 rounded-lg p-4 sm:p-6">
              <div className="text-xs sm:text-sm font-semibold text-primary mb-3">With PromptCraft:</div>
              <div className="text-sm sm:text-base font-medium mb-4">Expert prompt with structure, tone, best practices</div>
              <div className="text-xs sm:text-sm text-foreground/70">Perfect result on first try</div>
            </div>
          </div>
        </div>

        {/* Quick Start Templates */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Start here</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Most popular templates. Click to use instantly.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <Card
              onClick={() => handleTemplatePreview('email_professional')}
              className="group cursor-pointer transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98] hover:border-primary/50 bg-card border border-border p-4 sm:p-5"
              style={{ boxShadow: 'var(--shadow-sm)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-1.5 text-card-foreground group-hover:text-primary transition-colors">
                    Write Professional Email
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Generate well-structured professional emails
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all flex-shrink-0 mt-1" />
              </div>
            </Card>
            <Card
              onClick={() => handleTemplatePreview('social_posts')}
              className="group cursor-pointer transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98] hover:border-primary/50 bg-card border border-border p-4 sm:p-5"
              style={{ boxShadow: 'var(--shadow-sm)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-1.5 text-card-foreground group-hover:text-primary transition-colors">
                    Create Social Posts
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Generate engaging social media content
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all flex-shrink-0 mt-1" />
              </div>
            </Card>
            <Card
              onClick={() => handleTemplatePreview('article_draft')}
              className="group cursor-pointer transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.98] hover:border-primary/50 bg-card border border-border p-4 sm:p-5"
              style={{ boxShadow: 'var(--shadow-sm)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-1.5 text-card-foreground group-hover:text-primary transition-colors">
                    Draft Article or Blog
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Create article outlines and drafts
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all flex-shrink-0 mt-1" />
              </div>
            </Card>
          </div>
        </div>

        {/* Browse Categories Section */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">
            Or browse by category:
          </p>
        </div>

        {/* Categories Grid - Generous spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-24">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
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
