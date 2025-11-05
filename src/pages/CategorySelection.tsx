import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';

const CategorySelection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/templates/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-background page-transition">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-24 max-w-7xl">
        {/* Header Actions - Top Right */}
        <div className="flex justify-end gap-2 sm:gap-3 mb-6 sm:mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/favorites')}
            className="gap-1.5 sm:gap-2 text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4"
          >
            <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Saved</span>
          </Button>
          <ThemeToggle />
        </div>
        
        {/* Header - Generous spacing */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary text-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-border">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></span>
            <span className="text-xs sm:text-sm font-semibold font-heading">PromptCraft</span>
          </div>
          <h1 className="font-heading mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4">
            What do you want to create?
          </h1>
          <p className="subtitle max-w-2xl mx-auto px-4 text-base sm:text-lg md:text-xl">
            Choose a category to generate perfect AI prompts in seconds
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
        <div className="text-center pt-8 sm:pt-12 border-t border-border">
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base px-4">
            No signup required • Works with ChatGPT & Claude • Always free
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
