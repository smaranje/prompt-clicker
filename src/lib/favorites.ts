export interface SavedPrompt {
  id: string;
  templateId: string;
  templateTitle: string;
  category: string;
  prompt: string;
  formData: Record<string, any>;
  savedAt: number;
}

const FAVORITES_KEY = 'promptcraft_favorites';

export const getFavorites = (): SavedPrompt[] => {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const saveFavorite = (prompt: Omit<SavedPrompt, 'id' | 'savedAt'>): void => {
  const favorites = getFavorites();
  const newFavorite: SavedPrompt = {
    ...prompt,
    id: `fav_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    savedAt: Date.now(),
  };
  favorites.unshift(newFavorite);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const removeFavorite = (id: string): void => {
  const favorites = getFavorites().filter(f => f.id !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const isFavorite = (templateId: string, formData: Record<string, any>): boolean => {
  const favorites = getFavorites();
  return favorites.some(f => 
    f.templateId === templateId && 
    JSON.stringify(f.formData) === JSON.stringify(formData)
  );
};
