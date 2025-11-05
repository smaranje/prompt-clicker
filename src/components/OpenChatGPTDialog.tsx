import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

interface OpenChatGPTDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prompt: string;
  service: 'chatgpt' | 'claude';
}

export const OpenChatGPTDialog = ({ open, onOpenChange, prompt, service }: OpenChatGPTDialogProps) => {
  const [countdown, setCountdown] = useState(3);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (open) {
      // Copy to clipboard immediately
      navigator.clipboard.writeText(prompt).then(() => {
        setCopied(true);
        toast.success('Prompt copied to clipboard!');
      });

      // Start countdown
      setCountdown(3);
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // Open service
            const url = service === 'chatgpt' 
              ? 'https://chatgpt.com' 
              : 'https://claude.ai/new';
            window.open(url, '_blank', 'noopener,noreferrer');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setCopied(false);
    }
  }, [open, prompt, service]);

  const serviceName = service === 'chatgpt' ? 'ChatGPT' : 'Claude';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-heading">
            <Check className="w-6 h-6 text-accent" />
            Prompt Copied!
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Opening {serviceName} in {countdown > 0 ? countdown : '...'} seconds
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-secondary p-4 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-2 font-semibold">Next steps:</p>
            <ol className="text-sm space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">1.</span>
                <span>When {serviceName} opens, click in the message box</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">2.</span>
                <span>Press <kbd className="px-2 py-0.5 bg-background border border-border rounded text-xs font-mono">⌘+V</kbd> (Mac) or <kbd className="px-2 py-0.5 bg-background border border-border rounded text-xs font-mono">Ctrl+V</kbd> (Windows) to paste</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">3.</span>
                <span>Press Enter to send</span>
              </li>
            </ol>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                navigator.clipboard.writeText(prompt);
                toast.success('Copied again!');
              }}
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Again
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                const url = service === 'chatgpt' 
                  ? 'https://chatgpt.com' 
                  : 'https://claude.ai/new';
                window.open(url, '_blank', 'noopener,noreferrer');
                onOpenChange(false);
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open {serviceName}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
