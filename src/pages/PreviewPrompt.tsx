import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Copy, ExternalLink, Edit, Check, Sparkles } from 'lucide-react';
import { Template } from '@/types/templates';
import { useState } from 'react';
import { toast } from 'sonner';
import { OpenChatGPTDialog } from '@/components/OpenChatGPTDialog';

const PreviewPrompt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { template, formData } = location.state as {
    template: Template;
    formData: Record<string, any>;
  };

  const [copied, setCopied] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'chatgpt' | 'claude'>('chatgpt');

  if (!template || !formData) {
    navigate('/');
    return null;
  }

  const generatePrompt = () => {
    let prompt = template.promptTemplate;

    Object.entries(formData).forEach(([key, value]) => {
      const field = template.fields.find((f) => f.name === key);
      
      if (field?.type === 'dropdown' && field.options) {
        const option = field.options.find((o) => o.value === value);
        const label = option?.label || value;
        prompt = prompt.replace(`{${key}}`, label);
      } else if (field?.type === 'checkbox') {
        const addition = value
          ? ` Include ${field.label.toLowerCase()}.`
          : '';
        prompt = prompt.replace(`{${key}}`, addition);
      } else {
        prompt = prompt.replace(`{${key}}`, value || `[${key}]`);
      }
    });

    return prompt;
  };

  const fullPrompt = generatePrompt();

  const generateSummary = () => {
    const emailType = formData.email_type
      ? template.fields
          .find((f) => f.name === 'email_type')
          ?.options?.find((o) => o.value === formData.email_type)?.label
      : '';
    const recipient = formData.recipient || 'your recipient';
    const topic = formData.topic || 'the topic';
    const length = formData.length || 'medium';
    const tone = formData.tone || 'formal';

    return `A ${emailType?.toLowerCase() || 'professional'} email to ${recipient} about ${topic}, ${length} length with a ${tone} tone.`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullPrompt);
      setCopied(true);
      toast.success('Prompt copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy prompt');
    }
  };

  const handleOpenService = (service: 'chatgpt' | 'claude') => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background page-transition">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-3xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Card className="p-8 md:p-12 border border-border" style={{ boxShadow: 'var(--shadow-md)' }}>
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl font-semibold mb-4 text-foreground font-heading">
              Your Prompt is Ready!
            </h1>
            <p className="subtitle max-w-xl mx-auto">
              {generateSummary()}
            </p>
          </div>

          {/* Prompt Preview */}
          <div className="mb-12">
            <details className="group">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between p-5 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors border border-border">
                  <span className="font-semibold text-foreground text-base">
                    View Full Prompt
                  </span>
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform text-xl">
                    ▼
                  </span>
                </div>
              </summary>
              <div className="mt-4 p-6 bg-secondary/50 rounded-lg border border-border">
                <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                  {fullPrompt}
                </p>
              </div>
            </details>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-foreground text-center mb-6 text-lg">
                What's next?
              </h2>

              {/* Primary Actions - Service Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Button
                  onClick={() => handleOpenService('chatgpt')}
                  className="w-full"
                  size="lg"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in ChatGPT
                </Button>

                <Button
                  onClick={() => handleOpenService('claude')}
                  variant="secondary"
                  className="w-full"
                  size="lg"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in Claude
                </Button>
              </div>

              {/* Secondary Actions */}
              <Button
                onClick={copyToClipboard}
                variant="outline"
                className="w-full mb-3"
                size="lg"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Prompt Only
                  </>
                )}
              </Button>

              <Button
                onClick={() => navigate(-1)}
                variant="ghost"
                className="w-full"
                size="lg"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit Settings
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <Button
              onClick={() => navigate('/')}
              variant="link"
              className="text-muted-foreground hover:text-primary"
            >
              ← Create Another Prompt
            </Button>
          </div>
        </Card>
      </div>

      <OpenChatGPTDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        prompt={fullPrompt}
        service={selectedService}
      />
    </div>
  );
};

export default PreviewPrompt;
