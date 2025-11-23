import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bookmark, Info } from 'lucide-react';
import logo from '@/assets/logo.png';
import { SmartSearch } from '@/components/SmartSearch';

const CategorySelection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/templates/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 page-transition">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl">
        {/* Header with Logo and Actions */}
        <div className="flex justify-between items-center mb-8 sm:mb-12 md:mb-16 gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <img src={logo} alt="PromptCraft Logo" className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
            <span className="text-lg sm:text-xl font-bold font-heading text-foreground truncate">
              PromptCraft
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/about')}
              className="gap-1.5 h-8 sm:h-9 px-2 sm:px-3 hover:bg-accent"
            >
              <Info className="w-4 h-4" />
              <span className="text-xs sm:text-sm">About</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/favorites')}
              className="gap-1.5 h-8 sm:h-9 px-2 sm:px-3 hover:bg-accent"
            >
              <Bookmark className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Saved</span>
            </Button>
            <ThemeToggle />
          </div>
        </div>
        
        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-heading mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent font-bold leading-tight">
            Get better AI results — every time.
          </h1>
          <p className="subtitle max-w-2xl mx-auto px-4 text-base sm:text-lg md:text-xl mb-8">
            Just describe what you want, and AI will find the perfect template for you.
          </p>
          <SmartSearch />
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
            No signup required • Works with ChatGPT & Claude • Always free
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm px-4">
            Built for creators, students, and professionals who want the best from AI.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Badge variant="secondary" className="text-xs">
              Made by Smaran
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
