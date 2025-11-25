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
    <div className="min-h-screen bg-background page-transition pb-8">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-3xl">
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
          {/* Success Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent/10 rounded-full mb-4 sm:mb-6">
              <Check className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 text-foreground font-heading px-4">
              Your Prompt is Ready!
            </h1>
            <p className="subtitle max-w-xl mx-auto px-4 text-sm sm:text-base md:text-lg">
              {generateSummary()}
            </p>
          </div>

          {/* Why This Works Section */}
          {whyThisWorks && (
            <div className="mb-6 sm:mb-8 p-4 sm:p-5 md:p-6 bg-accent/5 rounded-lg border border-accent/20">
              <h2 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                {whyThisWorks.title}
              </h2>
              <div className="space-y-2.5 sm:space-y-3">
                {whyThisWorks.points.map((point, index) => (
                  <div key={index} className="flex gap-2 sm:gap-3">
                    <span className="text-lg sm:text-xl flex-shrink-0">{point.icon}</span>
                    <div className="text-sm sm:text-base">
                      <span className="font-medium text-foreground">{point.title}:</span>
                      <span className="text-muted-foreground ml-2">{point.description}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 italic">
                {whyThisWorks.footer}
              </p>
            </div>
          )}

          {/* Prompt Preview - Open by Default */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-muted/30 rounded-lg p-4 sm:p-5 md:p-6 border border-border max-h-[400px] sm:max-h-[500px] overflow-y-auto">
              <pre className="whitespace-pre-wrap text-xs sm:text-sm leading-relaxed font-mono text-foreground">
                {fullPrompt}
              </pre>
            </div>

            {/* Actions */}
            <div>
              <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground text-center">
                What's next?
              </h2>

              {/* Primary Actions - Service Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Button
                  onClick={() => handleOpenService('chatgpt')}
                  className="w-full text-sm sm:text-base h-11 sm:h-12"
                  size="lg"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in ChatGPT
                </Button>

                <Button
                  onClick={() => handleOpenService('claude')}
                  variant="secondary"
                  className="w-full text-sm sm:text-base h-11 sm:h-12"
                  size="lg"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in Claude
                </Button>
              </div>

              {/* Secondary Actions */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="w-full text-sm sm:text-base h-10 sm:h-11"
                  size="lg"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-accent" />
                      <span className="hidden xs:inline">Copied!</span>
                      <span className="xs:hidden">✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                      <span className="hidden xs:inline">Copy</span>
                      <span className="xs:hidden">📋</span>
                    </>
                  )}
                </Button>

                <Button
                  onClick={handleSaveFavorite}
                  variant="outline"
                  className="w-full text-sm sm:text-base h-10 sm:h-11"
                  size="lg"
                  disabled={saved}
                >
                  {saved ? (
                    <>
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-accent" />
                      <span className="hidden xs:inline">Saved</span>
                      <span className="xs:hidden">✓</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                      <span className="hidden xs:inline">Save</span>
                      <span className="xs:hidden">🔖</span>
                    </>
                  )}
                </Button>
              </div>

              <Button
                onClick={() => navigate(-1)}
                variant="ghost"
                className="w-full text-sm sm:text-base h-10 sm:h-11"
                size="lg"
              >
                <Edit className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Edit Settings
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border text-center">
            <Button
              onClick={() => navigate('/')}
              variant="link"
              className="text-muted-foreground hover:text-primary text-sm sm:text-base"
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
