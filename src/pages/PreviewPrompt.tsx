import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Copy, ExternalLink, Edit, Check } from 'lucide-react';
import { Template } from '@/types/templates';
import { useState } from 'react';
import { toast } from 'sonner';

const PreviewPrompt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { template, formData } = location.state as {
    template: Template;
    formData: Record<string, any>;
  };

  const [copied, setCopied] = useState(false);

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

  const openInChatGPT = () => {
    const encoded = encodeURIComponent(fullPrompt);
    window.open(`https://chat.openai.com/?q=${encoded}`, '_blank');
  };

  const openInClaude = () => {
    const encoded = encodeURIComponent(fullPrompt);
    window.open(`https://claude.ai/new?q=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Card className="p-8">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">✨</div>
            <h1 className="text-3xl font-bold mb-2 text-foreground">
              Your Prompt is Ready!
            </h1>
            <p className="text-muted-foreground">
              You'll get: {generateSummary()}
            </p>
          </div>

          <div className="mb-8">
            <details className="group">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <span className="font-medium text-foreground">
                    📋 View Full Prompt
                  </span>
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </div>
              </summary>
              <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm text-foreground whitespace-pre-wrap font-mono">
                  {fullPrompt}
                </p>
              </div>
            </details>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-foreground text-center mb-4">
              What's next?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button
                onClick={openInChatGPT}
                className="w-full"
                size="lg"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in ChatGPT
              </Button>

              <Button
                onClick={openInClaude}
                variant="secondary"
                className="w-full"
                size="lg"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in Claude
              </Button>
            </div>

            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="w-full"
              size="lg"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Prompt
                </>
              )}
            </Button>

            <Button
              onClick={() => navigate(-1)}
              variant="ghost"
              className="w-full"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Settings
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <Button
              onClick={() => navigate('/')}
              variant="link"
              className="text-muted-foreground"
            >
              ← Start Over
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PreviewPrompt;
