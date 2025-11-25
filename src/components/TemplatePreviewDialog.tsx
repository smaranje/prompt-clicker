import { Template } from '@/types/templates';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavigate } from 'react-router-dom';
import { Copy, Settings, Check, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

interface TemplatePreviewDialogProps {
  template: Template | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TemplatePreviewDialog = ({
  template,
  open,
  onOpenChange,
}: TemplatePreviewDialogProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  if (!template) return null;

  // Generate prompt with smart defaults
  const generateQuickPrompt = () => {
    let prompt = template.promptTemplate;
    
    // Replace placeholders with smart defaults
    template.fields.forEach((field) => {
      const placeholder = `{${field.name}}`;
      
      if (field.type === 'dropdown' && field.options && field.default) {
        const option = field.options.find(o => o.value === field.default);
        prompt = prompt.replace(placeholder, option?.label || String(field.default));
      } else if (field.type === 'checkbox') {
        prompt = prompt.replace(placeholder, field.default ? ` Include ${field.label.toLowerCase()}.` : '');
      } else if (field.placeholder) {
        prompt = prompt.replace(placeholder, `[${field.placeholder}]`);
      } else {
        prompt = prompt.replace(placeholder, `[your ${field.label.toLowerCase()}]`);
      }
    });
    
    return prompt;
  };

  const handleQuickCopy = () => {
    const quickPrompt = generateQuickPrompt();
    navigator.clipboard.writeText(quickPrompt);
    setCopied(true);
    toast({
      title: 'Copied with smart defaults!',
      description: 'Just fill in the bracketed parts and paste into ChatGPT',
    });
    setTimeout(() => {
      setCopied(false);
      onOpenChange(false);
    }, 1500);
  };

  const handleCopyAsIs = () => {
    navigator.clipboard.writeText(template.promptTemplate);
    toast({
      title: 'Copied to clipboard',
      description: 'Paste this prompt into ChatGPT or Claude',
    });
    onOpenChange(false);
  };

  const handleCustomize = () => {
    onOpenChange(false);
    navigate(`/customize/${template.id}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl flex items-center gap-2">
            {template.title}
            <Badge variant="secondary" className="text-xs">Quick Use</Badge>
          </DialogTitle>
          <DialogDescription>{template.description}</DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {/* Quick Copy Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Skip setup - Use smart defaults</h3>
                  <p className="text-xs text-muted-foreground">
                    Copy with pre-filled values. Just replace the bracketed parts.
                  </p>
                </div>
              </div>
              <Button
                onClick={handleQuickCopy}
                variant="default"
                className="w-full"
                size="sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Quick-Start Version
                  </>
                )}
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-2 text-muted-foreground">or preview & customize</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm">Preview of the prompt structure:</h3>
              <div className="bg-muted/50 p-4 rounded-lg border border-border">
                <pre className="text-xs sm:text-sm whitespace-pre-wrap font-mono text-muted-foreground">
                  {template.promptTemplate}
                </pre>
              </div>
            </div>

            {template.fields.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2 text-sm">Customizable fields:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {template.fields.map((field) => (
                    <li key={field.name}>{field.label}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t">
          <Button
            variant="outline"
            className="flex-1 gap-2"
            onClick={handleCustomize}
          >
            <Settings className="w-4 h-4" />
            Fully Customize
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
