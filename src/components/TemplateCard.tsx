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
      className="group cursor-pointer transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/50 bg-card border border-border p-6"
      style={{ boxShadow: 'var(--shadow-sm)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      <div className="flex items-start gap-5">
        <div className="text-2xl flex-shrink-0 mt-1">{template.icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors font-heading">
            {template.title}
          </h3>
          <p className="text-muted-foreground text-base">
            {template.description}
          </p>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all flex-shrink-0 mt-2" />
      </div>
    </Card>
  );
};
