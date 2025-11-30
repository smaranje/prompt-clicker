import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { templates } from '@/data/templates';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { toast } from 'sonner';


// Helper function to count words in a string
const countWords = (text: string): number => {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};

const CustomizeTemplate = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const template = templates.find((t) => t.id === templateId);

  const [formData, setFormData] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    template?.fields.forEach((field) => {
      initial[field.name] = field.default ?? '';
    });
    return initial;
  });

  const handleFillForMe = () => {
    const smartDefaults: Record<string, any> = {};
    
    template?.fields.forEach((field) => {
      if (field.type === 'text') {
        // Generate contextual smart defaults based on field name
        if (field.name.includes('topic') || field.name.includes('subject')) {
          smartDefaults[field.name] = 'quarterly performance review';
        } else if (field.name.includes('recipient') || field.name.includes('audience')) {
          smartDefaults[field.name] = 'team members';
        } else if (field.name.includes('context') || field.name.includes('background')) {
          smartDefaults[field.name] = 'recent project completion with positive outcomes';
        } else if (field.name.includes('code')) {
          smartDefaults[field.name] = 'function example() { return data; }';
        } else if (field.name.includes('error')) {
          smartDefaults[field.name] = 'TypeError: Cannot read property';
        } else {
          smartDefaults[field.name] = field.placeholder || 'example content';
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

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Template not found</h2>
          <Button onClick={() => navigate('/')}>Back to Categories</Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/preview', { state: { template, formData } });
  };

  const updateFormData = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background page-transition pb-8">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-2xl">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            size="sm"
            className="h-9 sm:h-10"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 sm:mr-2" />
            <span className="text-sm sm:text-base">Back</span>
          </Button>
          <ThemeToggle />
        </div>

        <Card className="p-5 sm:p-6 md:p-8 lg:p-12 border border-border" style={{ boxShadow: 'var(--shadow-md)' }}>
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground font-heading mb-2 sm:mb-3">
                  {template.title}
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {template.description}
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={handleFillForMe}
                className="flex-shrink-0"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Fill for me
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {template.fields.map((field) => (
              <div key={field.name} className="space-y-2 sm:space-y-3">
                <Label htmlFor={field.name} className="text-foreground text-sm sm:text-base font-semibold">
                  {field.label}
                  {field.required && <span className="text-destructive ml-1">*</span>}
                </Label>

                {field.type === 'text' && (
                  <>
                    <Input
                      id={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ''}
                      onChange={(e) => updateFormData(field.name, e.target.value)}
                      className="bg-background h-11 sm:h-12 text-sm sm:text-base"
                      autoFocus={field === template.fields[0]}
                    />
                    {(() => {
                      const wordCount = countWords(formData[field.name] || '');
                      if (wordCount === 0) return null;
                      
                      return wordCount < 8 ? (
                        <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 mt-2">
                          💡 Add more details for better results
                        </p>
                      ) : (
                        <p className="text-xs sm:text-sm text-success flex items-center gap-1.5 mt-2">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          Good
                        </p>
                      );
                    })()}
                  </>
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
                      {field.options.map((option) => (
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
                Generate Prompt
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CustomizeTemplate;
