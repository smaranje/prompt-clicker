import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Copy, Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface DemoPrompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  templateId: string;
}

const demoPrompts: DemoPrompt[] = [
  {
    id: 'email_demo',
    title: 'Professional Email',
    description: 'Request meeting with client about project update',
    templateId: 'email_professional',
    prompt: `You are a professional business communication expert who has coached C-level executives on email strategy.

Write a Request email to your client about project update.

Key points to address: completed milestones, timeline for next phase, need to schedule review meeting
Length: Medium (2-3 paragraphs)
Tone: Professional
Include CTA: Yes

SUBJECT LINE OPTIONS:
1. Quick Project Update + 15-Min Review Meeting?
2. [Project Name] Milestone Complete – Let's Discuss Next Steps

Hi [Client Name],

I wanted to update you on our progress with [Project Name]. We've successfully completed Phase 1 ahead of schedule, including all the deliverables we outlined in our last meeting.

Here's what we accomplished:
• Completed user research and persona development
• Finalized the design mockups (attached)
• Set up the technical infrastructure

Now that we're moving into Phase 2, I'd like to schedule a brief 15-minute call to walk you through what we've built and align on priorities for the next sprint. Would this Thursday at 2pm or Friday at 10am work for you?

Looking forward to showing you what we've created.

Best regards,
[Your Name]`
  },
  {
    id: 'social_demo',
    title: 'LinkedIn Post',
    description: 'Announce new productivity tool launch',
    templateId: 'social_posts',
    prompt: `You are an expert LinkedIn content strategist who has helped 50+ companies grow their following to 100K+.

Create a professional LinkedIn post about: Launching PromptCraft - an AI prompt generator that helps professionals create expert prompts in seconds without prompt engineering knowledge

Target audience: General Professionals
Primary goal: Drive engagement
Key value proposition: Saves 15 minutes per prompt, gets results on first try

I spent 2 hours yesterday trying to get ChatGPT to write a decent cold email.

Frustrated, I rewrote the prompt 7 times. Still mediocre results.

Then I realized: Most people waste MORE time crafting prompts than the AI takes to respond.

That's why we built PromptCraft 🚀

What it does:
→ Battle-tested prompt templates for 50+ use cases
→ Smart search finds the right template in seconds
→ Pre-optimized for best results (no trial and error)
→ Works with ChatGPT, Claude, any AI tool

The result? What used to take 15 minutes now takes 30 seconds.

Early users are reporting 10x faster prompt creation and way better outputs on the first try.

No more: "Can you make it more [adjective]?"
No more: Starting from scratch every single time
No more: Wondering if your prompt is "good enough"

Just: Copy. Paste. Get great results.

Try it free: promptcraft.ai

What's the most time you've ever spent perfecting a single AI prompt? 👇

#AI #Productivity #ChatGPT #Efficiency #WorkSmart`
  },
  {
    id: 'debug_demo',
    title: 'Debug Code',
    description: 'Fix React useState not updating error',
    templateId: 'debug_code',
    prompt: `You are a senior software engineer with 10+ years debugging complex applications.

Debug this JavaScript code:

[User's code here]

Error message: "State not updating after setState call"

COMPREHENSIVE DEBUG ANALYSIS:

1. ROOT CAUSE IDENTIFICATION
Analyze what's causing the error:
- Is it a closure issue?
- Async state update problem?
- Reference vs value issue?
- React batching behavior?

Likely cause: React state updates are asynchronous and batched. If you're reading state immediately after setState, you'll see the old value.

2. STEP-BY-STEP TRACE
Follow the execution flow:
- Where is setState called?
- What's the current state value?
- When does the component re-render?
- Is there a dependency array issue?

3. THE FIX
Provide the corrected code with explanation:

// ❌ WRONG - Reading state immediately after update
const handleClick = () => {
  setState(newValue);
  console.log(state); // Still shows old value!
}

// ✅ CORRECT - Use callback or useEffect
const handleClick = () => {
  setState(newValue);
}

useEffect(() => {
  console.log(state); // Now shows new value
}, [state]);

// OR use functional update if you need previous value
setState(prevState => {
  const newState = prevState + 1;
  return newState;
});

4. PREVENTION STRATEGIES
How to avoid this in the future:
- Remember setState is async in React
- Use useEffect to react to state changes
- Use functional updates when new state depends on old state
- Enable React DevTools to inspect state updates

5. RELATED GOTCHAS
Common variations of this bug:
- Multiple setState calls in one function (batched)
- setState in loops (use array methods instead)
- Stale closures in event handlers

Would you like me to explain any part in more detail?`
  }
];

export const InstantPromptDemo = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCopy = async (prompt: string, id: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedId(id);
      toast.success('Copied! Paste into ChatGPT or Claude');
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      toast.error('Failed to copy');
    }
  };

  const handleCustomize = (templateId: string) => {
    navigate(`/customize/${templateId}`);
  };

  return (
    <div className="mb-12 sm:mb-16">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">See it in action</h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Try these ready-to-use prompts right now. No setup needed.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {demoPrompts.map((demo) => (
          <Card key={demo.id} className="p-4 sm:p-5 border border-border hover:border-primary/50 transition-colors">
            <div className="mb-3">
              <h3 className="font-semibold text-base sm:text-lg mb-1">{demo.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{demo.description}</p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-3 mb-3 max-h-32 overflow-hidden relative">
              <pre className="text-xs whitespace-pre-wrap font-mono text-foreground/70 line-clamp-6">
                {demo.prompt}
              </pre>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-muted/30 to-transparent" />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => handleCopy(demo.prompt, demo.id)}
                variant="default"
                size="sm"
                className="flex-1 h-9 text-xs sm:text-sm"
              >
                {copiedId === demo.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 mr-1.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 mr-1.5" />
                    Copy & Use
                  </>
                )}
              </Button>
              <Button
                onClick={() => handleCustomize(demo.templateId)}
                variant="outline"
                size="sm"
                className="h-9 px-3"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-6">
        <p className="text-xs sm:text-sm text-muted-foreground">
          These prompts are ready to use immediately. Click "Copy & Use" then paste into any AI tool.
        </p>
      </div>
    </div>
  );
};
