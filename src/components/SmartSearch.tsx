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
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Describe what you want... (e.g., 'I want to learn French', 'help me write a blog post')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isSearching}
            className="pl-10 h-12 text-base bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isSearching || !query.trim()}
          className="h-12 px-6"
        >
          {isSearching ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Searching...
            </>
          ) : (
            "Search"
          )}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        AI will understand your intent and guide you to the perfect prompt template
      </p>
    </form>
  );
};