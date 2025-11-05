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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold">Saved Prompts</h1>
              <p className="text-sm text-muted-foreground">
                {favorites.length} {favorites.length === 1 ? 'prompt' : 'prompts'} saved
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {favorites.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto space-y-4">
              <div className="text-6xl">📚</div>
              <h2 className="text-2xl font-semibold">No saved prompts yet</h2>
              <p className="text-muted-foreground">
                When you create an amazing prompt, save it to your favorites for quick access later.
              </p>
              <Button onClick={() => navigate('/')} className="mt-4">
                Create Your First Prompt
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-4">
            {favorites.map((favorite) => (
              <Card key={favorite.id} className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{favorite.templateTitle}</h3>
                    <p className="text-sm text-muted-foreground">
                      {favorite.category} • {new Date(favorite.savedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(favorite.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mb-4 max-h-40 overflow-y-auto">
                  <pre className="text-sm whitespace-pre-wrap font-mono">
                    {favorite.prompt.substring(0, 300)}
                    {favorite.prompt.length > 300 && '...'}
                  </pre>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => handleReuse(favorite)}
                    className="gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Reuse This Prompt
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(favorite.prompt)}
                    className="gap-2"
                  >
                    <Copy className="w-4 h-4" />
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
