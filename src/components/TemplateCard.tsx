import { Card } from '@/components/ui/card';
import { Template } from '@/types/templates';
import { ArrowRight } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
  onClick: () => void;
}

export const TemplateCard = ({ template, onClick }: TemplateCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50 bg-card border-border p-5"
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl flex-shrink-0">{template.icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-1 text-card-foreground group-hover:text-primary transition-colors">
            {template.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {template.description}
          </p>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
      </div>
    </Card>
  );
};
