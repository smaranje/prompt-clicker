import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { templates } from '@/data/templates';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{template.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {template.title}
              </h1>
              <p className="text-muted-foreground text-sm">
                {template.description}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {template.fields.map((field) => (
              <div key={field.name} className="space-y-2">
                <Label htmlFor={field.name} className="text-foreground">
                  {field.label}
                </Label>

                {field.type === 'text' && (
                  <Input
                    id={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ''}
                    onChange={(e) => updateFormData(field.name, e.target.value)}
                    className="bg-background"
                  />
                )}

                {field.type === 'dropdown' && field.options && (
                  <Select
                    value={formData[field.name]}
                    onValueChange={(value) => updateFormData(field.name, value)}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                {field.type === 'checkbox' && (
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={field.name}
                      checked={formData[field.name] || false}
                      onCheckedChange={(checked) =>
                        updateFormData(field.name, checked)
                      }
                    />
                    <Label
                      htmlFor={field.name}
                      className="text-sm font-normal cursor-pointer"
                    >
                      Include {field.label.toLowerCase()}
                    </Label>
                  </div>
                )}
              </div>
            ))}

            <Button type="submit" className="w-full" size="lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate & Preview
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CustomizeTemplate;
