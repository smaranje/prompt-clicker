import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { useNavigate } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export const StudioMode = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/templates/${categoryId}`);
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <Code2 className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold">Studio Mode</h2>
      </div>
      
      <p className="text-sm text-muted-foreground mb-8">
        Browse templates by category and customize every detail
      </p>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={() => handleCategoryClick(category.id)}
          />
        ))}
      </div>
    </div>
  );
};
