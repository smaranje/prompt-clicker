import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

export const MagicMode = () => {
  const [userInput, setUserInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  // Advanced Mode State (RTCROS)
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [advancedFields, setAdvancedFields] = useState({
    role: '',
    task: '',
    context: '',
    reasoning: '',
    output: '',
    stopping: ''
  });

  const navigate = useNavigate();

  const handleMagicGenerate = async () => {
    // Construct the final prompt based on mode
    let finalInput = userInput;

    if (isAdvanced) {
      // Validate that at least Task is present
      if (!advancedFields.task.trim()) {
        toast.error('Task is required in Advanced Mode');
        return;
      }

      // Combine RTCROS fields into a structured request
      finalInput = `
Role: ${advancedFields.role}
Task: ${advancedFields.task}
Context: ${advancedFields.context}
Reasoning: ${advancedFields.reasoning}
Output Format: ${advancedFields.output}
Stopping Criteria: ${advancedFields.stopping}
      `.trim();
    } else if (!userInput.trim()) {
      toast.error('Please describe what you want to create');
      return;
    }

    setIsProcessing(true);

    try {
      // Call AI to generate prompt directly
      const { data, error } = await supabase.functions.invoke('magic-prompt', {
        body: { userInput: finalInput }
      });

      if (error) throw error;

      if (data?.prompt) {
        setGeneratedPrompt(data.prompt);
        // Auto-copy to clipboard
        await navigator.clipboard.writeText(data.prompt);
        toast.success('Prompt generated and copied!', {
          icon: <Sparkles className="w-5 h-5 text-blue-500 fill-blue-500/20" />,
          style: { background: 'var(--background)', border: '1px solid var(--border)', padding: '16px' }
        });
      }
    } catch (error) {
      console.error('Magic generate error:', error);
      toast.error('Failed to generate prompt. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      toast.success('Copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  const handleOpenChatGPT = () => {
    window.open('https://chat.openai.com/', '_blank');
  };

  const handleOpenClaude = () => {
    window.open('https://claude.ai/', '_blank');
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Magic Input */}
      <Card className="p-4 sm:p-6 md:p-8 border border-border shadow-sm">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-xl font-semibold">Magic Mode</h2>
            <Badge variant="secondary" className="text-[10px] h-5 px-1.5">
              Refined
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAdvanced(!isAdvanced)}
            className={`text-xs ${isAdvanced ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}
          >
            {isAdvanced ? 'Switch to Simple' : '✨ Advanced (RTCROS)'}
          </Button>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
          {isAdvanced
            ? "Engineer robust prompts using the RTCROS framework. Fill what you can, we'll do the rest."
            : "Just tell us what you want, and we'll create the perfect prompt for you."}
        </p>

        <div className="space-y-4">
          {isAdvanced ? (
            <div className="grid gap-4 animate-in slide-in-from-top-2 fade-in duration-300">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground">Role (Who)</label>
                  <Input
                    placeholder="e.g. Senior Copywriter, Python Expert"
                    value={advancedFields.role}
                    onChange={(e) => setAdvancedFields(prev => ({ ...prev, role: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-primary">Task (What) *</label>
                  <Input
                    placeholder="e.g. Write a sales email, Debug this code"
                    value={advancedFields.task}
                    onChange={(e) => setAdvancedFields(prev => ({ ...prev, task: e.target.value }))}
                    className="border-primary/20 bg-primary/5"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">Context (Background)</label>
                <Textarea
                  placeholder="Audience, constraints, platform details..."
                  value={advancedFields.context}
                  onChange={(e) => setAdvancedFields(prev => ({ ...prev, context: e.target.value }))}
                  className="h-20"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground">Reasoning (How)</label>
                  <Input
                    placeholder="Step-by-step..."
                    value={advancedFields.reasoning}
                    onChange={(e) => setAdvancedFields(prev => ({ ...prev, reasoning: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground">Output (Format)</label>
                  <Input
                    placeholder="Table, JSON, List..."
                    value={advancedFields.output}
                    onChange={(e) => setAdvancedFields(prev => ({ ...prev, output: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground">Stopping (Limits)</label>
                  <Input
                    placeholder="Max 300 words..."
                    value={advancedFields.stopping}
                    onChange={(e) => setAdvancedFields(prev => ({ ...prev, stopping: e.target.value }))}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative animate-in slide-in-from-bottom-2 fade-in duration-300">
              <Input
                type="text"
                placeholder="I want to write an email to my boss about..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleMagicGenerate()}
                disabled={isProcessing}
                className="h-11 sm:h-14 text-sm sm:text-base pr-4"
              />
            </div>
          )}

          <Button
            onClick={handleMagicGenerate}
            disabled={isProcessing || (!isAdvanced && !userInput.trim()) || (isAdvanced && !advancedFields.task.trim())}
            className="w-full h-10 sm:h-12 text-sm sm:text-base"
            size="lg"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Prompt
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Generated Prompt Result */}
      {generatedPrompt && (
        <Card className="mt-4 sm:mt-6 p-4 sm:p-6 md:p-8 border border-border animate-in fade-in slide-in-from-bottom-4">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
              <h3 className="text-base sm:text-lg font-semibold">Your Perfect Prompt</h3>
            </div>

            <div className="bg-muted/30 rounded-lg p-3 sm:p-4 border border-border max-h-[250px] sm:max-h-[300px] overflow-y-auto">
              <pre className="whitespace-pre-wrap text-xs sm:text-sm leading-relaxed font-mono">
                {generatedPrompt}
              </pre>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              <Button
                onClick={handleCopy}
                variant="outline"
                className="w-full"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-accent" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>

              <Button
                onClick={handleOpenChatGPT}
                variant="default"
                className="w-full"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                ChatGPT
              </Button>

              <Button
                onClick={handleOpenClaude}
                variant="secondary"
                className="w-full"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Claude
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Prompt automatically copied to clipboard ✨
            </p>
          </div>
        </Card>
      )}

      {/* Quick Start Buttons */}
      {!generatedPrompt && (
        <div className="mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-muted-foreground text-center mb-3 sm:mb-4">
            Try these high-impact tasks:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
            <Button
              variant="outline"
              onClick={() => setUserInput('Analyze this contract for potential loopholes and risky clauses')}
              className="h-auto py-2.5 sm:py-3 px-3 sm:px-4 text-left justify-start hover:border-primary/50 transition-colors"
            >
              <div className="min-w-0">
                <div className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1 truncate">Analyze Contract</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground truncate">Find risks & loopholes</div>
              </div>
            </Button>
            <Button
              variant="outline"
              onClick={() => setUserInput('Create a 30-day viral content calendar for LinkedIn focusing on AI trends')}
              className="h-auto py-2.5 sm:py-3 px-3 sm:px-4 text-left justify-start hover:border-primary/50 transition-colors"
            >
              <div className="min-w-0">
                <div className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1 truncate">Viral Strategy</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground truncate">30-day content plan</div>
              </div>
            </Button>
            <Button
              variant="outline"
              onClick={() => setUserInput('Refactor this legacy code to use modern patterns and improve performance')}
              className="h-auto py-2.5 sm:py-3 px-3 sm:px-4 text-left justify-start hover:border-primary/50 transition-colors"
            >
              <div className="min-w-0">
                <div className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1 truncate">Refactor Code</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground truncate">Modernize & optimize</div>
              </div>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
