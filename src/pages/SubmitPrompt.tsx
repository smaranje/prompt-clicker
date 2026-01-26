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
    const [dragActive, setDragActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        author: '',
    });

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file: File) => {
        setSelectedFile(file);
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
    };

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

            // Note: In a real app, we would upload the file to storage here
            // const imagePath = await uploadImage(selectedFile);

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
                        content: (document.getElementById('content') as HTMLTextAreaElement)?.value || '',
                        // example_image: imagePath 
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

            <div className="container mx-auto px-4 sm:px-6 py-4 max-w-6xl">
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border/40 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                            <Sparkle className="w-5 h-5" weight="duotone" />
                        </div>
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Submit a Prompt</h1>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                Share your best work with the community.
                            </p>
                        </div>
                    </div>
                    {/* Optional: Add a subtle link or stat here later if needed */}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Form Area */}
                    <div className="lg:col-span-2">
                        <Card className="p-6 sm:p-8 border-border/60 shadow-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="title" className="text-base">Prompt Title</Label>
                                    <Input
                                        id="title"
                                        placeholder="e.g., SEO Blog Post Generator"
                                        value={formData.title}
                                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                        required
                                        className="h-12 text-lg"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="category">Category</Label>
                                        <Select
                                            value={formData.category}
                                            onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                                            required
                                        >
                                            <SelectTrigger className="h-11">
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
                                        <Label htmlFor="author">Your Handle (Optional)</Label>
                                        <Input
                                            id="author"
                                            placeholder="@username"
                                            value={formData.author}
                                            onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                                            className="h-11"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="description">Short Description</Label>
                                    <Input
                                        id="description"
                                        placeholder="Briefly explain what this prompt achieves..."
                                        value={formData.description}
                                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                        required
                                        className="h-11"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="content">Prompt Content *</Label>
                                    <div className="relative">
                                        <Textarea
                                            id="content"
                                            placeholder="Paste your full prompt here...&#10;&#10;[Topic]&#10;[Context]&#10;[Constraints]"
                                            className="min-h-[250px] font-mono text-sm leading-relaxed p-4 bg-muted/20"
                                            required
                                        />
                                        <div className="absolute top-3 right-3 text-[10px] text-muted-foreground uppercase font-semibold tracking-wider bg-background/50 px-2 py-1 rounded border">
                                            Markdown Supported
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 flex justify-end gap-3">
                                    <Button variant="outline" size="lg" type="button" onClick={() => navigate(-1)} className="px-6">
                                        Cancel
                                    </Button>
                                    <Button type="submit" size="lg" disabled={isSubmitting} className="px-8 font-semibold shadow-lg shadow-primary/20">
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

                    {/* Sidebar / Drag Drop Area */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label className="text-base font-semibold">Example Output Image</Label>
                            <div
                                className={`
                                    relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer
                                    ${dragActive ? 'border-primary bg-primary/5 scale-[1.02]' : 'border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/30'}
                                    ${previewUrl ? 'p-0 overflow-hidden border-solid border-border' : ''}
                                `}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                                onClick={() => document.getElementById('image-upload')?.click()}
                            >
                                <input
                                    id="image-upload"
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleChange}
                                />

                                {previewUrl ? (
                                    <div className="relative group w-full aspect-video">
                                        <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium">
                                            Click to change
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-6 min-h-[200px]">
                                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                                            <div className="w-8 h-8 text-muted-foreground">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-medium text-foreground mb-1">Drag and drop an image</p>
                                        <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
                                        <Button variant="secondary" size="sm" type="button" className="pointer-events-none">
                                            Upload Preview
                                        </Button>
                                    </div>
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                                Recommended: 16:9 ratio, min 1280px width.
                            </p>
                        </div>

                        {/* Tips Card */}
                        <Card className="p-6 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border-indigo-500/10">
                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                                <Sparkle className="w-4 h-4 text-indigo-500" />
                                Pro Tips
                            </h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-primary">•</span>
                                    Use [Bracket] placeholders for user inputs.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary">•</span>
                                    Provide a clear Example Output image.
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary">•</span>
                                    Mention which LLM (GPT-4, Claude) it works best with.
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SubmitPrompt;
