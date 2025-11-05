import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const CategorySelection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/templates/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">PromptCraft</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What do you want to create?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose a category to get started with AI-powered prompt generation
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-muted-foreground text-sm">
          <p>No signup required • Fast & free • Works with ChatGPT & Claude</p>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
