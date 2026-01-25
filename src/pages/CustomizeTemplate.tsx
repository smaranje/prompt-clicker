import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { templates } from '@/data/templates';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Check, Copy, Wand2, ArrowRight, Bookmark, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { toast } from 'sonner';
import { supabase, type CommunityPrompt } from '@/lib/supabase';
import { Textarea } from '@/components/ui/textarea';
import { saveFavorite, isFavorite } from '@/lib/favorites';
import { OpenChatGPTDialog } from '@/components/OpenChatGPTDialog';

export const CustomizeTemplate = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [template, setTemplate] = useState<any>(null);
  const [isCommunity, setIsCommunity] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Preview States
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'chatgpt' | 'claude'>('chatgpt');
  const [saved, setSaved] = useState(false);

  // Auto-scroll ref
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTemplate = async () => {
      // 1. Try to find in local templates first
      const localTemplate = templates.find((t) => t.id === templateId);

      if (localTemplate) {
        setTemplate(localTemplate);
        setIsCommunity(false);
        const initial: Record<string, any> = {};
        localTemplate.fields.forEach((field) => {
          initial[field.name] = field.default ?? '';
        });
        setFormData(initial);
        setSaved(isFavorite(localTemplate.id, initial));
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
    const content = data.content || '';
    const regex = /\[(.*?)\]/g;
    const matches = [...content.matchAll(regex)];

    const fields: any[] = [];
    const initial: Record<string, any> = {};

    if (matches.length > 0) {
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
      icon: data.icon,
      category: data.category,
      promptTemplate: content,
      fields: fields
    });

    setFormData(initial);
    setIsCommunity(true);
    setLoading(false);
  };

  const updateFormData = (name: string, value: any) => {
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      // Check favorite status with new data combo if needed, though usually favorite is checked on generation
      return newData;
    });
  };

  const handleFillForMe = () => {
    if (!template) return;
    const smartDefaults: Record<string, any> = {};
    template.fields.forEach((field: any) => {
      // Logic to generate smart defaults...
      if (field.type === 'text' || field.type === 'textarea') {
        smartDefaults[field.name] = "Example " + field.label;
      } else if (field.type === 'checkbox') {
        smartDefaults[field.name] = true;
      } else if (field.type === 'dropdown' && field.options?.length > 0) {
        smartDefaults[field.name] = field.options[0].value;
      }
    });
    setFormData(smartDefaults);
    toast.success('Form filled with examples');
  };

  const generatePromptText = () => {
    if (!template) return '';
    let prompt = template.promptTemplate;

    Object.entries(formData).forEach(([key, value]) => {
      if (isCommunity) {
        if (key !== 'custom_input') {
          prompt = prompt.replace(new RegExp(`\\[${key}\\]`, 'gi'), value);
        }
      } else {
        const field = template.fields.find((f: any) => f.name === key);
        if (field?.type === 'dropdown' && field.options) {
          const option = field.options.find((o: any) => o.value === value);
          const label = option?.label || value;
          prompt = prompt.replace(`{${key}}`, label);
        } else if (field?.type === 'checkbox') {
          const addition = value ? ` Include ${field.label.toLowerCase()}.` : '';
          prompt = prompt.replace(`{${key}}`, addition);
        } else {
          prompt = prompt.replace(`{${key}}`, value || `[${key}]`);
        }
      }
    });

    if (isCommunity && formData.custom_input) {
      prompt += `\n\nAdditional Details:\n${formData.custom_input}`;
    }

    return prompt;
  };

  const handleGenerate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const prompt = generatePromptText();
    setGeneratedPrompt(prompt);
    setShowPreview(true);
    setSaved(isFavorite(template.id, formData));

    // On mobile, scroll to preview
    setTimeout(() => {
      previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      toast.success('Copied!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  const handleSaveFavorite = () => {
    saveFavorite({
      templateId: template.id,
      templateTitle: template.title,
      category: template.category,
      prompt: generatedPrompt,
      formData
    });
    setSaved(true);
    toast('Saved to favorites! 🎉');
  };

  const handleOpenService = (service: 'chatgpt' | 'claude') => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>;
  if (!template) return <div>Template not found</div>;

  return (
    <div className="min-h-screen bg-background pb-10">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={() => navigate(-1)} size="sm" className="-ml-3 gap-2">
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>
          <ThemeToggle />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* LEFT: Input Form */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{template.icon}</span>
                <h1 className="text-2xl font-bold font-heading">{template.title}</h1>
              </div>
              <p className="text-muted-foreground">{template.description}</p>
            </div>

            <Card className="p-6 border-border shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-lg">Customize</h2>
                <Button variant="ghost" size="sm" onClick={handleFillForMe} className="text-xs h-8">
                  <Wand2 className="w-3 h-3 mr-2" />
                  Auto-fill
                </Button>
              </div>

              <form onSubmit={handleGenerate} className="space-y-5">
                {template.fields.map((field: any) => (
                  <div key={field.name} className="space-y-2">
                    <Label htmlFor={field.name} className="font-medium">
                      {field.label} {field.required && <span className="text-destructive">*</span>}
                    </Label>

                    {(!field.type || field.type === 'text') && (
                      <Input
                        id={field.name}
                        value={formData[field.name]}
                        onChange={(e) => updateFormData(field.name, e.target.value)}
                        placeholder={field.placeholder}
                      />
                    )}

                    {field.type === 'textarea' && (
                      <Textarea
                        id={field.name}
                        value={formData[field.name]}
                        onChange={(e) => updateFormData(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        className="min-h-[100px]"
                      />
                    )}

                    {field.type === 'dropdown' && (
                      <Select value={formData[field.name]} onValueChange={(v) => updateFormData(field.name, v)}>
                        <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                        <SelectContent>
                          {field.options?.map((opt: any) => (
                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}

                    {field.type === 'checkbox' && (
                      <div className="flex items-center gap-3 pt-1">
                        <Checkbox
                          id={field.name}
                          checked={formData[field.name]}
                          onCheckedChange={(c) => updateFormData(field.name, c)}
                        />
                        <Label htmlFor={field.name} className="font-normal cursor-pointer">
                          Include {field.label.toLowerCase()}
                        </Label>
                      </div>
                    )}
                  </div>
                ))}

                <Button type="submit" className="w-full" size="lg">
                  Generate Prompt <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Card>
          </div>

          {/* RIGHT: Live Preview */}
          <div ref={previewRef} className={`w-full lg:w-1/2 lg:sticky lg:top-24 transition-all duration-500 ${showPreview ? 'opacity-100 translate-y-0' : 'opacity-50 lg:opacity-100'}`}>
            {showPreview ? (
              <Card className="p-6 border-primary/20 bg-primary/5 shadow-md h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    Result
                  </h3>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={copyToClipboard}>
                      {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                      {copied ? 'Copied' : 'Copy'}
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleSaveFavorite} disabled={saved}>
                      <Bookmark className={`w-4 h-4 mr-1 ${saved ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                </div>

                <div className="bg-background rounded-md p-5 border border-border font-mono text-sm whitespace-pre-wrap leading-relaxed shadow-inner flex-grow">
                  {generatedPrompt}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <Button onClick={() => handleOpenService('chatgpt')} className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" /> Open ChatGPT
                  </Button>
                  <Button onClick={() => handleOpenService('claude')} variant="secondary" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" /> Open Claude
                  </Button>
                </div>
              </Card>
            ) : (
              // Placeholder State on Desktop
              <div className="hidden lg:flex flex-col items-center justify-center h-full min-h-[400px] border-2 border-dashed border-muted-foreground/20 rounded-xl p-8 text-center text-muted-foreground">
                <Wand2 className="w-12 h-12 mb-4 opacity-20" />
                <p className="text-lg font-medium">Ready to generate?</p>
                <p className="text-sm">Fill out the form and click Generate to see your prompt here.</p>
              </div>
            )}
          </div>
        </div>

        <OpenChatGPTDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          prompt={generatedPrompt}
          service={selectedService}
        />
      </div>
    </div>
  );
};

export default CustomizeTemplate;
