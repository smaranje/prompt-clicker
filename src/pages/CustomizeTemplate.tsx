import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { templates } from '@/data/templates';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';

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
    <div className="min-h-screen bg-background page-transition">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-2xl">
        <div className="flex items-center justify-between mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <ThemeToggle />
        </div>

        <Card className="p-8 md:p-12 border border-border" style={{ boxShadow: 'var(--shadow-md)' }}>
          <div className="mb-12">
            <h1 className="text-3xl font-semibold text-foreground font-heading mb-3">
              {template.title}
            </h1>
            <p className="text-muted-foreground text-base">
              {template.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {template.fields.map((field) => (
              <div key={field.name} className="space-y-3">
                <Label htmlFor={field.name} className="text-foreground text-base font-semibold">
                  {field.label}
                </Label>

                {field.type === 'text' && (
                  <Input
                    id={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ''}
                    onChange={(e) => updateFormData(field.name, e.target.value)}
                    className="bg-background h-12 text-base"
                    autoFocus={field === template.fields[0]}
                  />
                )}

                {field.type === 'dropdown' && field.options && (
                  <Select
                    value={formData[field.name]}
                    onValueChange={(value) => updateFormData(field.name, value)}
                  >
                    <SelectTrigger className="bg-background h-12 text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options.map((option) => (
                        <SelectItem key={option.value} value={option.value} className="text-base">
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
                      className="h-5 w-5"
                    />
                    <Label
                      htmlFor={field.name}
                      className="text-base font-normal cursor-pointer"
                    >
                      Include {field.label.toLowerCase()}
                    </Label>
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4">
              <Button type="submit" className="w-full" size="lg">
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
