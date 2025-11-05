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
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-4xl">
        {/* Top Bar - Back Button + Theme Toggle */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            size="sm"
            className="h-9 sm:h-10"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 sm:mr-2" />
            <span className="text-sm sm:text-base">Back</span>
          </Button>
          <ThemeToggle />
        </div>

        {/* Header - Generous spacing */}
        <div className="mb-10 sm:mb-12 md:mb-16 px-2">
          <h1 className="font-heading mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {category.title}
          </h1>
          <p className="subtitle text-base sm:text-lg md:text-xl">
            {category.description}
          </p>
        </div>

        {/* Templates */}
        <div className="space-y-3 sm:space-y-4">
          {categoryTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onClick={() => navigate(`/customize/${template.id}`)}
            />
          ))}

          {categoryTemplates.length === 0 && (
            <div className="text-center py-12 sm:py-20 px-4">
              <p className="text-muted-foreground text-base sm:text-lg">
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
