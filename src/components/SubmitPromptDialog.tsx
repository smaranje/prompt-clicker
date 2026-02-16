import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import { categories } from '@/data/categories';
import { Loader2, Share2 } from 'lucide-react';

interface SubmitPromptDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialPrompt: string;
    initialTitle?: string;
}

export const SubmitPromptDialog = ({ open, onOpenChange, initialPrompt, initialTitle = '' }: SubmitPromptDialogProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: initialTitle,
        category: '',
        description: '',
        author: '',
        content: initialPrompt
    });

    // Update content if initialPrompt changes (and we haven't edited it manually? nice to have but keep simple)
    // Actually, better to just init state when open changes or rely on props if modal is destroyed.
    // We'll trust the user to edit if needed.

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (!supabase) {
                toast.error('Database configuration missing.');
                return;
            }

            // Get category icon
            const categoryData = categories.find(c => c.id === formData.category);
            const icon = categoryData?.icon || 'Sparkles';

            const { error } = await supabase
                .from('community_prompts')
                .insert([
                    {
                        title: formData.title,
                        description: formData.description,
                        category: formData.category,
                        icon: icon,
                        author: formData.author || 'Anonymous',
                        loves: 0,
                        badge: null,
                        content: formData.content || initialPrompt,
                    }
                ]);

            if (error) throw error;

            toast.success('Prompt shared with the community!');
            onOpenChange(false);
            // Reset form?
            setFormData({ title: '', category: '', description: '', author: '', content: '' });

        } catch (error) {
            console.error('Error submitting prompt:', error);
            toast.error('Failed to share prompt. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Share with Community</DialogTitle>
                    <DialogDescription>
                        Publish this prompt to the community library.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 py-2">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            placeholder="e.g. Professional Email Generator"
                            value={formData.title}
                            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select
                            value={formData.category}
                            onValueChange={(v) => setFormData(prev => ({ ...prev, category: v }))}
                            required
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map(c => (
                                    <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Short Description</Label>
                        <Input
                            id="description"
                            placeholder="What does this prompt do?"
                            value={formData.description}
                            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="content">Prompt Content</Label>
                        <Textarea
                            id="content"
                            value={formData.content || initialPrompt} // Allow editing but default to prop
                            onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                            className="min-h-[100px] font-mono text-xs"
                            required
                        />
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Share2 className="w-4 h-4 mr-2" />}
                            Publish
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};
