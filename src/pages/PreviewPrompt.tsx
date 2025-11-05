import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Copy, ExternalLink, Edit, Check, Bookmark } from 'lucide-react';
import { Template } from '@/types/templates';
import { useState } from 'react';
import { toast } from 'sonner';
import { OpenChatGPTDialog } from '@/components/OpenChatGPTDialog';
import { ThemeToggle } from '@/components/ThemeToggle';
import { saveFavorite, isFavorite } from '@/lib/favorites';

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
  const [saved, setSaved] = useState(() => isFavorite(template.id, formData));

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
    // Generate dynamic summary based on template type
    switch (template.id) {
      case 'email_professional': {
        const emailType = formData.email_type
          ? template.fields.find((f) => f.name === 'email_type')?.options?.find((o) => o.value === formData.email_type)?.label
          : 'professional';
        const recipient = formData.recipient || 'your recipient';
        const topic = formData.topic || 'the topic';
        const length = formData.length || 'medium';
        const tone = formData.tone || 'professional';
        return `A ${emailType?.toLowerCase()} email to ${recipient} about ${topic}, ${length} length with a ${tone} tone.`;
      }
      
      case 'debug_code': {
        const language = template.fields.find((f) => f.name === 'language')?.options?.find((o) => o.value === formData.language)?.label || 'JavaScript';
        const hasError = formData.error_message;
        return `Expert debugging help for ${language} code${hasError ? ' with error analysis' : ''} including root cause identification and prevention strategies.`;
      }
      
      case 'explain_code': {
        const language = template.fields.find((f) => f.name === 'language')?.options?.find((o) => o.value === formData.language)?.label || 'JavaScript';
        const skillLevel = template.fields.find((f) => f.name === 'skill_level')?.options?.find((o) => o.value === formData.skill_level)?.label || 'Intermediate';
        const style = template.fields.find((f) => f.name === 'explanation_style')?.options?.find((o) => o.value === formData.explanation_style)?.label || 'Line-by-line walkthrough';
        return `${style} explanation of ${language} code for ${skillLevel.toLowerCase()} programmers, focusing on concepts and patterns.`;
      }
      
      case 'code_review': {
        const language = template.fields.find((f) => f.name === 'language')?.options?.find((o) => o.value === formData.language)?.label || 'JavaScript';
        const focus = template.fields.find((f) => f.name === 'review_focus')?.options?.find((o) => o.value === formData.review_focus)?.label || 'Comprehensive review';
        return `${focus} of ${language} code with severity-categorized issues and best practice recommendations.`;
      }
      
      case 'documentation': {
        const language = template.fields.find((f) => f.name === 'language')?.options?.find((o) => o.value === formData.language)?.label || 'JavaScript';
        const docType = template.fields.find((f) => f.name === 'doc_type')?.options?.find((o) => o.value === formData.doc_type)?.label || 'Function documentation';
        return `Professional ${docType.toLowerCase()} for ${language} following language-specific standards${formData.include_examples ? ' with usage examples' : ''}.`;
      }
      
      case 'optimize_code': {
        const language = template.fields.find((f) => f.name === 'language')?.options?.find((o) => o.value === formData.language)?.label || 'JavaScript';
        const goal = template.fields.find((f) => f.name === 'optimization_goal')?.options?.find((o) => o.value === formData.optimization_goal)?.label || 'performance';
        return `Performance optimization for ${language} focused on ${goal.toLowerCase()} with Big-O analysis and benchmarking guidance.`;
      }
      
      case 'convert_code': {
        const fromLang = template.fields.find((f) => f.name === 'from_language')?.options?.find((o) => o.value === formData.from_language)?.label || 'JavaScript';
        const toLang = template.fields.find((f) => f.name === 'to_language')?.options?.find((o) => o.value === formData.to_language)?.label || 'Python';
        return `Convert ${fromLang} to idiomatic ${toLang} with language-specific patterns and best practices.`;
      }
      
      case 'social_posts': {
        const platform = template.fields.find((f) => f.name === 'platform')?.options?.find((o) => o.value === formData.platform)?.label || 'LinkedIn';
        const style = template.fields.find((f) => f.name === 'style')?.options?.find((o) => o.value === formData.style)?.label || 'Professional';
        const audience = template.fields.find((f) => f.name === 'target_audience')?.options?.find((o) => o.value === formData.target_audience)?.label || 'Professionals';
        return `${style} ${platform} post optimized for ${audience.toLowerCase()} using the Hook-Context-Insight-CTA framework proven to drive 3x more engagement.`;
      }
      
      case 'article_draft': {
        const length = template.fields.find((f) => f.name === 'length')?.options?.find((o) => o.value === formData.length)?.label || 'Medium';
        const angle = template.fields.find((f) => f.name === 'angle')?.options?.find((o) => o.value === formData.angle)?.label || 'How-to guide';
        return `${length} ${angle.toLowerCase()} with SEO-optimized structure, practical examples, and actionable takeaways that readers can implement today.`;
      }
      
      default: {
        // Generic summary for other templates
        const firstTextField = template.fields.find(f => f.type === 'text');
        const mainValue = firstTextField ? formData[firstTextField.name] || template.title.toLowerCase() : template.title.toLowerCase();
        return `${template.title} - ${mainValue}`;
      }
    }
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

  const handleSaveFavorite = () => {
    const fullPrompt = generatePrompt();
    saveFavorite({
      templateId: template.id,
      templateTitle: template.title,
      category: template.category,
      prompt: fullPrompt,
      formData
    });
    setSaved(true);
    toast('Saved to favorites! 🎉');
  };

  const getWhyThisWorks = () => {
    switch (template.id) {
      case 'social_posts':
        return {
          title: 'What makes this prompt effective:',
          points: [
            {
              icon: '🎯',
              title: 'Hook formula',
              description: 'Uses pattern-interrupt techniques to stop the scroll (users see 100+ posts/day)'
            },
            {
              icon: '📐',
              title: 'Structured framework',
              description: 'Hook-Context-Insight-CTA structure proven to drive 3x more engagement'
            },
            {
              icon: '⚡',
              title: 'Platform optimization',
              description: 'Algorithm-specific formatting (line breaks, character limits, hashtag strategy)'
            },
            {
              icon: '💬',
              title: 'Engagement CTA',
              description: 'Ends with a question to spark comments (platforms reward early engagement)'
            }
          ],
          footer: 'Based on analysis of 10,000+ high-performing posts by top creators.'
        };
      case 'article_draft':
        return {
          title: 'What makes this prompt effective:',
          points: [
            {
              icon: '📊',
              title: 'Proven structure',
              description: 'Uses content frameworks from top publications (hook, problem, solution, action)'
            },
            {
              icon: '✍️',
              title: 'Scannable format',
              description: 'Subheadings every 200-300 words, bullet points, bold key phrases for readability'
            },
            {
              icon: '🎯',
              title: 'Actionable takeaways',
              description: 'Includes "Quick Start Guide" so readers can implement TODAY'
            },
            {
              icon: '🔍',
              title: 'SEO optimized',
              description: 'Naturally integrates keywords, uses semantic terms, creates keyword-rich headings'
            }
          ],
          footer: 'Based on content strategies from 500+ published articles in top publications.'
        };
      case 'debug_code':
        return {
          title: 'What makes this prompt effective:',
          points: [
            {
              icon: '🔍',
              title: 'Root cause analysis',
              description: 'Asks for WHY the error occurs, not just the fix (teaches debugging methodology)'
            },
            {
              icon: '📚',
              title: 'Context gathering',
              description: 'Includes environment, dependencies, and trigger conditions for accurate diagnosis'
            },
            {
              icon: '🛡️',
              title: 'Prevention strategies',
              description: 'Requests future-proofing advice to avoid similar errors'
            },
            {
              icon: '💡',
              title: 'Step-by-step thinking',
              description: 'Encourages systematic approach: analyze → trace → explain → fix'
            }
          ],
          footer: 'Based on debugging best practices from senior developers and error pattern analysis.'
        };
      default:
        return null;
    }
  };

  const whyThisWorks = getWhyThisWorks();

  return (
    <div className="min-h-screen bg-background page-transition">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-3xl">
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
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Check className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl font-semibold mb-4 text-foreground font-heading">
              Your Prompt is Ready!
            </h1>
            <p className="subtitle max-w-xl mx-auto">
              {generateSummary()}
            </p>
          </div>

          {/* Why This Works Section */}
          {whyThisWorks && (
            <div className="mb-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
              <h2 className="font-semibold text-foreground mb-4 text-base">
                {whyThisWorks.title}
              </h2>
              <div className="space-y-3">
                {whyThisWorks.points.map((point, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-xl flex-shrink-0">{point.icon}</span>
                    <div>
                      <span className="font-medium text-foreground">{point.title}:</span>
                      <span className="text-muted-foreground ml-2">{point.description}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                {whyThisWorks.footer}
              </p>
            </div>
          )}

          {/* Prompt Preview - Open by Default */}
          <div className="mb-8">
            <div className="mb-3">
              <h2 className="font-semibold text-foreground text-base">Your Expert Prompt:</h2>
            </div>
            <div className="p-6 bg-secondary/30 rounded-lg border border-border">
              <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed font-mono">
                {fullPrompt}
              </p>
            </div>
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
              <div className="grid grid-cols-2 gap-3 mb-3">
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="w-full"
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
                      Copy
                    </>
                  )}
                </Button>

                <Button
                  onClick={handleSaveFavorite}
                  variant="outline"
                  className="w-full"
                  size="lg"
                  disabled={saved}
                >
                  {saved ? (
                    <>
                      <Check className="w-4 h-4 mr-2 text-accent" />
                      Saved
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save
                    </>
                  )}
                </Button>
              </div>

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
