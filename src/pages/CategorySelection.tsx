import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { useNavigate } from 'react-router-dom';

const CategorySelection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/templates/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-background page-transition">
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
        {/* Header - Generous spacing */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-full mb-6 border border-border">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-semibold font-heading">PromptCraft</span>
          </div>
          <h1 className="font-heading mb-6">
            What do you want to create?
          </h1>
          <p className="subtitle max-w-2xl mx-auto">
            Choose a category to generate perfect AI prompts in seconds
          </p>
        </div>

        {/* Categories Grid - Generous spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-border">
          <p className="text-muted-foreground">
            No signup required • Works with ChatGPT & Claude • Always free
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
