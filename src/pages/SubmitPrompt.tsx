import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnterpriseHeader } from '@/components/EnterpriseHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Sparkle, PaperPlaneRight } from 'phosphor-react';
import { categories } from '@/data/categories';
import { supabase } from '@/lib/supabase';

const SubmitPrompt = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        author: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (!supabase) {
                toast.error('Database not configured. Please check your setup.');
                setIsSubmitting(false);
                return;
            }

            // Get the category icon
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
                        content: (document.getElementById('content') as HTMLTextAreaElement)?.value || ''
                    }
                ]);

            if (error) throw error;

            toast.success('Prompt submitted successfully! Check it out in Discover.');
            navigate('/discover');
        } catch (error) {
            console.error('Error submitting prompt:', error);
            toast.error('Failed to submit prompt. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <EnterpriseHeader />

            <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 max-w-3xl">
                <div className="mb-4 text-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-3">
                        <Sparkle className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">Submit a Prompt</h1>
                    <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                        Share your best prompts with the community. Help others achieve better results.
                    </p>
                </div>

                <Card className="p-5 sm:p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Prompt Title</Label>
                            <Input
                                id="title"
                                placeholder="e.g., SEO Blog Post Generator"
                                value={formData.title}
                                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select
                                value={formData.category}
                                onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                                required
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map(cat => (
                                        <SelectItem key={cat.id} value={cat.id}>
                                            {cat.title}
                                        </SelectItem>
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
                            <p className="text-xs text-muted-foreground">
                                Briefly explain the purpose and output of your prompt.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="content">Prompt Content *</Label>
                            <Textarea
                                id="content"
                                placeholder="Paste your full prompt here...&#10;&#10;Example:&#10;You are an expert SEO copywriter. Write a blog post about [TOPIC] that:&#10;- Targets the keyword [KEYWORD]&#10;- Is 1500-2000 words&#10;- Includes 3 H2 subheadings&#10;- Has a conversational tone"
                                className="min-h-[150px] font-mono text-sm"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="image">Example Image (Optional)</Label>
                            <Input
                                id="image"
                                type="file"
                                accept="image/*"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="author">Your Name (Optional)</Label>
                            <Input
                                id="author"
                                placeholder="e.g., @yourhandle or Your Name"
                                value={formData.author}
                                onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                            />
                            <p className="text-xs text-muted-foreground">
                                Leave blank to submit as Anonymous.
                            </p>
                        </div>

                        <div className="pt-3 flex justify-end gap-3">
                            <Button variant="outline" type="button" onClick={() => navigate(-1)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    'Submitting...'
                                ) : (
                                    <>
                                        <PaperPlaneRight className="w-4 h-4 mr-2" />
                                        Submit Prompt
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default SubmitPrompt;
