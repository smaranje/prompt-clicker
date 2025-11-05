import { useParams, useNavigate } from 'react-router-dom';
import { TemplateCard } from '@/components/TemplateCard';
import { templates } from '@/data/templates';
import { categories } from '@/data/categories';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const TemplateSelection = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = categories.find((c) => c.id === categoryId);
  const categoryTemplates = templates.filter((t) => t.category === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Category not found</h2>
          <Button onClick={() => navigate('/')}>Back to Categories</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Categories
        </Button>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {category.title}
              </h1>
              <p className="text-muted-foreground mt-1">
                {category.description}
              </p>
            </div>
          </div>
        </div>

        {/* Templates */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Choose a template
          </h2>
          {categoryTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onClick={() => navigate(`/customize/${template.id}`)}
            />
          ))}

          {categoryTemplates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No templates available in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
