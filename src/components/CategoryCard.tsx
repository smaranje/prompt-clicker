import { Card } from '@/components/ui/card';
import { Category } from '@/types/templates';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export const CategoryCard = ({ category, onClick }: CategoryCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-border p-6 h-full"
    >
      <div className="relative z-10">
        <div className="text-5xl mb-4">{category.icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
          {category.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {category.description}
        </p>
        <div className="flex items-center text-primary font-medium text-sm">
          Explore
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br from-primary to-primary-glow" />
    </Card>
  );
};
