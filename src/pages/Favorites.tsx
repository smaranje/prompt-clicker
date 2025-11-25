import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, ExternalLink, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';

import { getFavorites, removeFavorite, SavedPrompt } from '@/lib/favorites';
import { useToast } from '@/hooks/use-toast';

const Favorites = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<SavedPrompt[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleDelete = (id: string) => {
    removeFavorite(id);
    setFavorites(getFavorites());
    toast({
      description: "Removed from favorites",
    });
  };

  const handleCopy = async (prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      toast({
        description: "Prompt copied to clipboard",
      });
    } catch {
      toast({
        description: "Failed to copy",
        variant: "destructive",
      });
    }
  };

  const handleReuse = (favorite: SavedPrompt) => {
    localStorage.setItem('reuse_template', JSON.stringify({
      templateId: favorite.templateId,
      formData: favorite.formData
    }));
    navigate(`/customize/${favorite.templateId}`);
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg md:text-xl font-semibold truncate">Saved Prompts</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {favorites.length} {favorites.length === 1 ? 'prompt' : 'prompts'}
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-4xl">
        {favorites.length === 0 ? (
          <Card className="p-8 sm:p-10 md:p-12 text-center">
            <div className="max-w-md mx-auto space-y-3 sm:space-y-4">
              <div className="text-5xl sm:text-6xl">📚</div>
              <h2 className="text-xl sm:text-2xl font-semibold">No saved prompts yet</h2>
              <p className="text-muted-foreground text-sm sm:text-base px-4">
                When you create an amazing prompt, save it to your favorites for quick access later.
              </p>
              <Button onClick={() => navigate('/')} className="mt-4 h-10 sm:h-11 text-sm sm:text-base">
                Create Your First Prompt
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {favorites.map((favorite) => (
              <Card key={favorite.id} className="p-4 sm:p-5 md:p-6">
                <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-base sm:text-lg truncate">{favorite.templateTitle}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {favorite.category} • {new Date(favorite.savedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(favorite.id)}
                    className="text-destructive hover:text-destructive flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10"
                  >
                    <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 max-h-32 sm:max-h-40 overflow-y-auto">
                  <pre className="text-xs sm:text-sm whitespace-pre-wrap font-mono">
                    {favorite.prompt.substring(0, 300)}
                    {favorite.prompt.length > 300 && '...'}
                  </pre>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => handleReuse(favorite)}
                    className="gap-1.5 sm:gap-2 text-xs sm:text-sm h-9 sm:h-10"
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Reuse This Prompt
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(favorite.prompt)}
                    className="gap-1.5 sm:gap-2 text-xs sm:text-sm h-9 sm:h-10"
                  >
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Copy
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Favorites;
