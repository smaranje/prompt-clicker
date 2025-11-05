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
      className="group cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 bg-card border border-border hover:border-primary/50 p-8 h-full"
      style={{ boxShadow: 'var(--shadow-sm)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      <div className="flex flex-col h-full">
        <div className="text-2xl mb-6">{category.icon}</div>
        <h3 className="text-2xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors font-heading">
          {category.title}
        </h3>
        <p className="text-muted-foreground text-base mb-6 flex-grow">
          {category.description}
        </p>
        <div className="flex items-center text-primary font-semibold text-sm">
          Explore
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </Card>
  );
};
