import { useState, useMemo } from 'react';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { templates } from '@/data/templates';
import { useNavigate } from 'react-router-dom';
import { Code2, Search, X, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export const StudioMode = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Count templates per category
  const templateCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    templates.forEach(t => {
      counts[t.category] = (counts[t.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Search templates across all categories
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return templates.filter(t =>
      t.title.toLowerCase().includes(query) ||
      t.description.toLowerCase().includes(query) ||
      t.category.toLowerCase().includes(query)
    ).slice(0, 8); // Limit to 8 results
  }, [searchQuery]);

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/templates/${categoryId}`);
  };

  const handleTemplateClick = (templateId: string) => {
    navigate(`/customize/${templateId}`);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const totalTemplates = templates.length;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
        <h2 className="text-base sm:text-xl font-semibold">Studio Mode</h2>
        <Badge variant="secondary" className="ml-auto text-xs">
          {totalTemplates} templates
        </Badge>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={`Search ${totalTemplates} templates...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 h-11 text-sm"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Search Results */}
      {searchQuery && searchResults.length > 0 && (
        <div className="mb-6">
          <p className="text-xs text-muted-foreground mb-3">
            Found {searchResults.length} template{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {searchResults.map((template) => (
              <Card
                key={template.id}
                onClick={() => handleTemplateClick(template.id)}
                className="p-4 cursor-pointer hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">{template.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                      {template.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {template.description}
                    </p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {template.category}
                    </Badge>
                  </div>
                  <Sparkles className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
              </Card>
            ))}
          </div>
          {searchResults.length === 8 && (
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Showing first 8 results. Try a more specific search.
            </p>
          )}
        </div>
      )}

      {/* No Results */}
      {searchQuery && searchResults.length === 0 && (
        <div className="text-center py-8 mb-6">
          <p className="text-sm text-muted-foreground">No templates found for "{searchQuery}"</p>
          <Button variant="link" onClick={clearSearch} className="text-sm">
            Clear search
          </Button>
        </div>
      )}

      {/* Categories Section */}
      {!searchQuery && (
        <>
          <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
            Browse templates by category and customize every detail
          </p>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => handleCategoryClick(category.id)}
                templateCount={category.id === 'browse' ? totalTemplates : templateCounts[category.id] || 0}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
