import { useParams, useNavigate } from 'react-router-dom';
import { TemplateCard } from '@/components/TemplateCard';
import { templates } from '@/data/templates';
import { categories } from '@/data/categories';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

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
    <div className="min-h-screen bg-background page-transition">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        {/* Top Bar - Back Button + Theme Toggle */}
        <div className="flex items-center justify-between mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <ThemeToggle />
        </div>

        {/* Header - Generous spacing */}
        <div className="mb-16">
          <h1 className="font-heading mb-3">
            {category.title}
          </h1>
          <p className="subtitle">
            {category.description}
          </p>
        </div>

        {/* Templates */}
        <div className="space-y-4">
          {categoryTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onClick={() => navigate(`/customize/${template.id}`)}
            />
          ))}

          {categoryTemplates.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
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
