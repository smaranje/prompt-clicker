import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const SmartSearch = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast({
        title: "Empty search",
        description: "Please describe what you want to create",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);

    try {
      const { data, error } = await supabase.functions.invoke('smart-search', {
        body: { query: query.trim() }
      });

      if (error) {
        throw error;
      }

      if (data?.templateId) {
        toast({
          title: "Found a match!",
          description: data.reason,
        });
        
        // Navigate to the customize page for the matched template
        navigate(`/customize/${data.templateId}`);
      } else {
        toast({
          title: "No match found",
          description: "Try describing your need differently",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Search error:", error);
      toast({
        title: "Search failed",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            type="text"
            placeholder="What do you want to create?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isSearching}
            className="pl-9 h-11 sm:h-12 text-sm sm:text-base bg-background border-border focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-primary transition-all"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isSearching || !query.trim()}
          className="h-11 sm:h-12 px-6 w-full sm:w-auto flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all"
        >
          {isSearching ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Searching...</span>
            </>
          ) : (
            <span>Search</span>
          )}
        </Button>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground mt-3 text-center">
        AI finds the perfect template for you
      </p>
    </form>
  );
};