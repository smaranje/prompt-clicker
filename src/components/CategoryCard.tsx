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
      className="group cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 active:scale-95 bg-card border border-border hover:border-primary/50 p-5 sm:p-6 md:p-8 h-full"
      style={{ boxShadow: 'var(--shadow-sm)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-card-foreground group-hover:text-primary transition-colors font-heading">
          {category.title}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 flex-grow leading-relaxed">
          {category.description}
        </p>
        <div className="flex items-center text-primary font-semibold text-xs sm:text-sm">
          Explore
          <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </Card>
  );
};
