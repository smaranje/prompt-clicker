import { Template } from '@/types/templates';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavigate } from 'react-router-dom';
import { Settings } from 'lucide-react';

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

  if (!template) return null;

  const handleCustomize = () => {
    onOpenChange(false);
    navigate(`/customize/${template.id}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">
            {template.title}
          </DialogTitle>
          <DialogDescription>{template.description}</DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {/* Prompt Preview */}
            <div>
              <h3 className="font-semibold mb-2 text-sm">Expert prompt template:</h3>
              <div className="bg-muted/50 p-4 rounded-lg border border-border">
                <pre className="text-xs sm:text-sm whitespace-pre-wrap font-mono text-muted-foreground">
                  {template.promptTemplate}
                </pre>
              </div>
            </div>

            {template.fields.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2 text-sm">You'll customize these fields:</h3>
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
            variant="default"
            className="flex-1 gap-2"
            onClick={handleCustomize}
          >
            <Settings className="w-4 h-4" />
            Customize & Generate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
