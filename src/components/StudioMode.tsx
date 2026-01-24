import { useState, useMemo } from 'react';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { templates } from '@/data/templates';
import { useNavigate } from 'react-router-dom';
import { Code2, Search, X, ArrowLeft, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
    ).slice(0, 8);
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
  const isSearching = searchQuery.length > 0;

  return (
    <div className="w-full">
      {/* Header with Back Button when Searching */}
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        {isSearching ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="gap-1 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        ) : (
          <>
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <h2 className="text-base sm:text-xl font-semibold">Studio Mode</h2>
          </>
        )}
        <Badge variant="secondary" className="ml-auto text-xs">
          {totalTemplates} templates
        </Badge>
      </div>

      {/* Search Bar - Improved Styling */}
      <div className="relative mb-6">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Search className="w-4 h-4 text-muted-foreground/70" />
        </div>
        <Input
          type="text"
          placeholder={`Search ${totalTemplates} templates...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 pr-10 h-11 text-sm bg-muted/30 border-muted-foreground/20 focus:border-primary focus:bg-background transition-colors"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Search Results - Improved Layout */}
      {isSearching && searchResults.length > 0 && (
        <div className="mb-6 animate-in fade-in-0 duration-200">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">
              Found <span className="font-medium text-foreground">{searchResults.length}</span> template{searchResults.length !== 1 ? 's' : ''}
            </p>
            <Button variant="ghost" size="sm" onClick={clearSearch} className="text-xs h-7">
              Clear
            </Button>
          </div>

          <div className="space-y-2">
            {searchResults.map((template) => (
              <button
                key={template.id}
                onClick={() => handleTemplateClick(template.id)}
                className="w-full text-left p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 group flex items-center gap-4"
              >
                <span className="text-2xl flex-shrink-0">{template.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {template.description}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </button>
            ))}
          </div>

          {searchResults.length === 8 && (
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Showing first 8 results • Try a more specific search
            </p>
          )}
        </div>
      )}

      {/* No Results - Improved Empty State */}
      {isSearching && searchResults.length === 0 && (
        <div className="text-center py-12 mb-6 animate-in fade-in-0 duration-200">
          <div className="flex justify-center mb-3">
            <Search className="w-12 h-12 text-muted-foreground/30" />
          </div>
          <p className="text-sm text-muted-foreground mb-1">No templates found for "{searchQuery}"</p>
          <p className="text-xs text-muted-foreground mb-4">Try a different search term</p>
          <Button variant="outline" size="sm" onClick={clearSearch}>
            <ArrowLeft className="w-3 h-3 mr-1" />
            Back to categories
          </Button>
        </div>
      )}

      {/* Categories Section - Only show when not searching */}
      {!isSearching && (
        <>
          <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
            Browse templates by category and customize every detail
          </p>

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
