import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Category } from '@/types/templates';
import { ArrowRight } from 'lucide-react';
import { DynamicIcon } from '@/components/DynamicIcon';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
  templateCount?: number;
}

export const CategoryCard = ({ category, onClick, templateCount }: CategoryCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 active:scale-95 bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 p-6 sm:p-8 h-full relative overflow-hidden"
      style={{ boxShadow: 'var(--shadow-sm)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col h-full relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <DynamicIcon
              name={category.icon}
              className="w-8 h-8 text-primary flex-shrink-0"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors font-heading text-balance leading-tight">
              {category.title}
            </h3>
          </div>
          {templateCount !== undefined && templateCount > 0 && (
            <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0">
              {templateCount}
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground text-base sm:text-lg mb-6 flex-grow leading-relaxed">
          {category.description}
        </p>
        <div className="flex items-center text-primary font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
          Explore
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Card>
  );
};
