import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { templates } from '@/data/templates';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Copy, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { toast } from 'sonner';
import { supabase, type CommunityPrompt } from '@/lib/supabase';
import { Textarea } from '@/components/ui/textarea';

// Helper function to count words in a string
const countWords = (text: string): number => {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};

const CustomizeTemplate = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [template, setTemplate] = useState<any>(null);
  const [isCommunity, setIsCommunity] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    const loadTemplate = async () => {
      // 1. Try to find in local templates first
      const localTemplate = templates.find((t) => t.id === templateId);

      if (localTemplate) {
        setTemplate(localTemplate);
        setIsCommunity(false);

        // Initialize form data
        const initial: Record<string, any> = {};
        localTemplate.fields.forEach((field) => {
          initial[field.name] = field.default ?? '';
        });
        setFormData(initial);
        setLoading(false);
        return;
      }

      // 2. If not found locally, try fetching from Supabase
      if (supabase && templateId) {
        try {
          const { data, error } = await supabase
            .from('community_prompts')
            .select('*')
            .eq('id', templateId)
            .single();

          if (data) {
            setupCommunityTemplate(data);
          } else {
            console.error('Template not found in Supabase');
            setLoading(false);
          }
        } catch (err) {
          console.error('Error fetching template:', err);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    loadTemplate();
  }, [templateId]);

  const setupCommunityTemplate = (data: CommunityPrompt) => {
    // Parse placeholders like [topic] from content
    const content = data.content || '';
    const regex = /\[(.*?)\]/g;
    const matches = [...content.matchAll(regex)];

    const fields: any[] = [];
    const initial: Record<string, any> = {};

    if (matches.length > 0) {
      // Create fields for each placeholder
      const uniquePlaceholders = new Set();

      matches.forEach(match => {
        const name = match[1];
        if (!uniquePlaceholders.has(name)) {
          uniquePlaceholders.add(name);
          fields.push({
            name: name,
            label: name.charAt(0).toUpperCase() + name.slice(1),
            type: 'text',
            placeholder: `Enter ${name}...`,
            required: true
          });
          initial[name] = '';
        }
      });
    } else {
      // Fallback if no placeholders found
      fields.push({
        name: 'custom_input',
        label: 'Custom Detail',
        type: 'textarea',
        placeholder: 'Add specific details related to this prompt...',
        required: false
      });
      initial['custom_input'] = '';
    }

    setTemplate({
      id: data.id,
      title: data.title,
      description: data.description,
      icon: data.icon, // We'll render this dynamically
      category: data.category,
      promptTemplate: content, // Use the content as the template
      fields: fields
    });

    setFormData(initial);
    setIsCommunity(true);
    setLoading(false);
  };

  const handleFillForMe = () => {
    if (!template) return;

    const smartDefaults: Record<string, any> = {};

    template.fields.forEach((field: any) => {
      if (field.type === 'text' || field.type === 'textarea') {
        // Generate contextual smart defaults based on field name
        const name = field.name.toLowerCase();
        if (name.includes('topic') || name.includes('subject')) {
          smartDefaults[field.name] = 'quarterly performance review';
        } else if (name.includes('recipient') || name.includes('audience')) {
          smartDefaults[field.name] = 'team members';
        } else if (name.includes('context') || name.includes('background')) {
          smartDefaults[field.name] = 'recent project completion with positive outcomes';
        } else if (name.includes('code')) {
          smartDefaults[field.name] = 'function example() { return data; }';
        } else if (name.includes('error')) {
          smartDefaults[field.name] = 'TypeError: Cannot read property';
        } else {
          smartDefaults[field.name] = 'example content';
        }
      } else if (field.type === 'dropdown' && field.options) {
        // Select first non-default option for variety
        smartDefaults[field.name] = field.options[1]?.value || field.options[0]?.value;
      } else if (field.type === 'checkbox') {
        smartDefaults[field.name] = true;
      }
    });

    setFormData(smartDefaults);
    toast.success('Form filled with smart defaults! ✨');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isCommunity) {
      // For community prompts, we generate it right here
      let finalPrompt = template.promptTemplate;

      // Replace placeholders
      Object.entries(formData).forEach(([key, value]) => {
        // Replace [key] with value globally
        if (key !== 'custom_input') {
          finalPrompt = finalPrompt.replace(new RegExp(`\\[${key}\\]`, 'gi'), value);
        }
      });

      // Append custom input if exists
      if (formData.custom_input) {
        finalPrompt += `\n\nAdditional Details:\n${formData.custom_input}`;
      }

      setGeneratedPrompt(finalPrompt);
      toast.success('Prompt generated successfully!');
    } else {
      // For local templates, go to preview page
      navigate('/preview', { state: { template, formData } });
    }
  };

  const updateFormData = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    toast.success('Prompt copied to clipboard!');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Template not found</h2>
          <Button onClick={() => navigate('/discover')}>Back to Discover</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background page-transition pb-8">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-3xl">
        {/* Top Bar - Improved Navigation */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <nav className="flex items-center text-sm text-muted-foreground flex-wrap gap-1">
            <Button
              variant="link"
              onClick={() => navigate('/')}
              className="p-0 h-auto font-normal text-muted-foreground hover:text-foreground"
            >
              Home
            </Button>
            <span className="text-muted-foreground/40">/</span>
            <Button
              variant="link"
              onClick={() => navigate(isCommunity ? '/discover' : `/templates/${template.category}`)}
              className="p-0 h-auto font-normal text-muted-foreground hover:text-foreground capitalize"
            >
              {isCommunity ? 'Discover' : template.category}
            </Button>
            <span className="text-muted-foreground/40">/</span>
            <span className="text-foreground font-medium truncate max-w-[150px] sm:max-w-[200px]">
              {template.title}
            </span>
          </nav>
          <ThemeToggle />
        </div>

        <div className="grid gap-8">
          <Card className="p-5 sm:p-6 md:p-8 lg:p-12 border border-border" style={{ boxShadow: 'var(--shadow-md)' }}>
            <div className="mb-8 sm:mb-10 md:mb-12">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    {!isCommunity && <span className="text-3xl sm:text-4xl flex-shrink-0">{template.icon}</span>}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground font-heading break-words leading-tight">
                      {template.title}
                    </h1>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed ml-1">
                    {template.description}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleFillForMe}
                  className="flex-shrink-0 self-start sm:self-auto mt-2 sm:mt-0"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Fill for me
                </Button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {template.fields.map((field: any) => (
                <div key={field.name} className="space-y-2 sm:space-y-3">
                  <Label htmlFor={field.name} className="text-foreground text-sm sm:text-base font-semibold">
                    {field.label}
                    {field.required && <span className="text-destructive ml-1">*</span>}
                  </Label>

                  {(field.type === 'text' || !field.type) && (
                    <>
                      <Input
                        id={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ''}
                        onChange={(e) => updateFormData(field.name, e.target.value)}
                        className="bg-background h-11 sm:h-12 text-sm sm:text-base"
                        autoFocus={field === template.fields[0]}
                      />
                    </>
                  )}

                  {field.type === 'textarea' && (
                    <Textarea
                      id={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ''}
                      onChange={(e) => updateFormData(field.name, e.target.value)}
                      className="bg-background min-h-[100px] text-sm sm:text-base"
                    />
                  )}

                  {field.type === 'dropdown' && field.options && (
                    <Select
                      value={formData[field.name]}
                      onValueChange={(value) => updateFormData(field.name, value)}
                    >
                      <SelectTrigger className="bg-background h-11 sm:h-12 text-sm sm:text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options.map((option: any) => (
                          <SelectItem key={option.value} value={option.value} className="text-sm sm:text-base">
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}

                  {field.type === 'checkbox' && (
                    <div className="flex items-center gap-3 pt-2">
                      <Checkbox
                        id={field.name}
                        checked={formData[field.name] || false}
                        onCheckedChange={(checked) =>
                          updateFormData(field.name, checked)
                        }
                        className="h-5 w-5 sm:h-6 sm:w-6"
                      />
                      <Label
                        htmlFor={field.name}
                        className="text-sm sm:text-base font-normal cursor-pointer"
                      >
                        Include {field.label.toLowerCase()}
                      </Label>
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 sm:pt-6">
                <Button type="submit" className="w-full h-11 sm:h-12 text-sm sm:text-base" size="lg">
                  {isCommunity ? 'Generate & View' : 'Generate Prompt'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </Card>

          {/* Generated Result for Community Prompts */}
          {generatedPrompt && (
            <Card className="p-6 border border-primary/20 bg-primary/5 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Your Generated Prompt
                </h3>
                <Button size="sm" variant="outline" onClick={copyToClipboard}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
              <div className="bg-background rounded-md p-4 border border-border whitespace-pre-wrap font-mono text-sm">
                {generatedPrompt}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomizeTemplate;
