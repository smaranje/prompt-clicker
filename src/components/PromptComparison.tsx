import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X, Check, Sparkles, AlertTriangle } from 'lucide-react';

interface ComparisonExample {
  id: string;
  category: string;
  scenario: string;
  basicPrompt: string;
  basicResponse: string;
  craftedPrompt: string;
  craftedResponse: string;
}

const comparisonExamples: ComparisonExample[] = [
  {
    id: 'email',
    category: 'Email Writing',
    scenario: 'Ask for a project extension',
    basicPrompt: 'Write an email asking my boss for more time on the project.',
    basicResponse: `Subject: Request for Extension

Dear Boss,

I hope this email finds you well. I am writing to request an extension for the project deadline. I have been working hard but need more time to complete it. Please let me know if this is possible.

Thank you for your understanding.

Best regards,
[Your name]`,
    craftedPrompt: `You are a professional business communication expert who has coached C-level executives on email strategy.

Write a Request email to my manager about needing a deadline extension for the Q4 analytics project.

Key points to address: completed 70% of deliverables, unexpected data quality issues discovered, specific new timeline needed
Length: Medium (2-3 paragraphs)
Tone: Professional

EMAIL STRUCTURE:
1. Lead with progress made (not the problem)
2. Explain specific blocker with solution already in mind
3. Propose concrete new timeline with reasoning
4. End with commitment and accountability

✓ Show ownership, not excuses
✓ Propose solution, don't just present problem
✓ Be specific with dates and deliverables`,
    craftedResponse: `Subject: Q4 Analytics Project – Progress Update & Revised Timeline

Hi [Manager's Name],

I wanted to share a progress update on the Q4 analytics project. We've completed 70% of the deliverables, including the full customer segmentation analysis and revenue forecasting models.

During the data validation phase, we discovered significant inconsistencies in the legacy CRM data that weren't flagged in the initial audit. Rather than deliver potentially inaccurate insights, I've already coordinated with the data engineering team to run a cleanup script (ETA: 2 days). 

To ensure we deliver accurate, actionable insights, I'm proposing we adjust the deadline from Friday to next Wednesday. This gives us time to validate the corrected data and complete the final dashboards. I'll send you a status update Monday with confirmation we're on track.

Happy to discuss if you'd like more detail on what we've found.

Best,
[Your name]`
  },
  {
    id: 'code',
    category: 'Code Help',
    scenario: 'Debug a React state issue',
    basicPrompt: 'My React state is not updating. Help me fix it.',
    basicResponse: `There are several reasons why React state might not update:

1. Make sure you're using setState correctly
2. Check if you're mutating state directly
3. Try using the functional form of setState
4. Make sure your component is re-rendering

If you share your code, I can help you identify the specific issue.`,
    craftedPrompt: `You are a senior React developer with 10+ years debugging complex applications.

Debug this issue: React useState not reflecting new value after setState call

Context: I'm calling setState inside a click handler, but when I console.log the state right after, it shows the old value

DEBUGGING FRAMEWORK:
1. Identify root cause (async behavior, closure, batching)
2. Show the wrong pattern with ❌
3. Show the correct pattern with ✅
4. Explain WHY it works
5. Provide prevention strategies for future`,
    craftedResponse: `## Root Cause: React's Asynchronous State Updates

React batches state updates for performance. When you call \`setState\`, it schedules an update but doesn't immediately change the value.

### ❌ The Problem Pattern
\`\`\`javascript
const handleClick = () => {
  setCount(count + 1);
  console.log(count); // Still shows old value!
  // React hasn't re-rendered yet
}
\`\`\`

### ✅ Solution 1: Use useEffect to React to Changes
\`\`\`javascript
useEffect(() => {
  console.log(count); // Now shows updated value
}, [count]);
\`\`\`

### ✅ Solution 2: Use Functional Update (if you need previous value)
\`\`\`javascript
setCount(prevCount => {
  const newCount = prevCount + 1;
  console.log(newCount); // Correct value here
  return newCount;
});
\`\`\`

### Why This Happens
- \`setState\` is asynchronous in React
- State updates are batched for performance
- The variable \`count\` is captured in a closure at render time

### Prevention Checklist
✓ Never console.log state immediately after setState
✓ Use useEffect for side effects that depend on state
✓ Use functional updates when new state depends on old state`
  },
  {
    id: 'content',
    category: 'Content Creation',
    scenario: 'Write a LinkedIn post about a product launch',
    basicPrompt: 'Write a LinkedIn post about my new app that helps people save time.',
    basicResponse: `🚀 Exciting news! 

I'm thrilled to announce the launch of my new app that helps people save time! 

After months of hard work, we're finally live. The app is designed to make your life easier and more productive.

Check it out and let me know what you think!

#NewApp #Productivity #Launch #Excited`,
    craftedPrompt: `You are an expert LinkedIn content strategist who has helped 50+ companies grow their following to 100K+.

Create a professional LinkedIn post about: Launching a time-tracking app that saved beta users 5+ hours per week

Target audience: Busy professionals and entrepreneurs
Primary goal: Drive engagement and signups
Key value proposition: Automatic time tracking with zero manual entry

POST STRUCTURE (Algorithm-Optimized):
1. HOOK: Start with relatable pain point or surprising result
2. CONTEXT: Make it personal, share the "why"
3. VALUE: 3-5 specific benefits with → bullets
4. PROOF: Include real numbers/results
5. CTA: Specific question to drive comments

❌ Don't use: "Excited to announce" "Thrilled to share" generic hashtag spam`,
    craftedResponse: `Last month I tracked my time manually for a week.

The result? I spent 47 minutes PER DAY just logging what I was doing.

That's 4+ hours a week. On tracking time. Not doing actual work.

So I built something different.

Our new app tracks your time automatically by understanding context:
→ Detects which project you're working on
→ Knows when you switch tasks (no manual entry)
→ Generates timesheets and invoices in one click
→ Works silently in the background

Beta users are reporting:
• 5.2 hours saved per week (average)
• 94% accuracy on automatic categorization
• Zero "forgot to start timer" moments

The irony of time-tracking tools eating your time is finally solved.

We're opening up 100 spots for early access this week.

Drop a "⏱️" in the comments if you want the link.

What's your biggest frustration with current time-tracking tools?`
  }
];

export const PromptComparison = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const example = comparisonExamples[currentIndex];

  const nextExample = () => {
    setCurrentIndex((prev) => (prev + 1) % comparisonExamples.length);
  };

  const prevExample = () => {
    setCurrentIndex((prev) => (prev - 1 + comparisonExamples.length) % comparisonExamples.length);
  };

  return (
    <div className="mb-12 sm:mb-16">
      <div className="text-center mb-6 sm:mb-8">
        <Badge variant="outline" className="mb-3 text-xs">See The Difference</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Same Task. Dramatically Different Results.</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          The prompt you use determines the quality of AI output. Here's proof.
        </p>
      </div>

      {/* Example Navigation */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={prevExample} className="h-8 w-8">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex gap-2">
          {comparisonExamples.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
        <Button variant="ghost" size="icon" onClick={nextExample} className="h-8 w-8">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Scenario Header */}
      <div className="text-center mb-6">
        <Badge className="mb-2">{example.category}</Badge>
        <p className="text-sm text-muted-foreground">Scenario: <span className="text-foreground font-medium">{example.scenario}</span></p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Basic Prompt Side */}
        <Card className="p-4 sm:p-5 border-destructive/30 bg-destructive/5">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-full bg-destructive/20">
              <X className="w-4 h-4 text-destructive" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Typical Prompt</h3>
              <p className="text-xs text-muted-foreground">What most people type</p>
            </div>
          </div>

          {/* Basic Prompt */}
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" /> The prompt:
            </p>
            <div className="bg-background/50 rounded-lg p-3 border border-border">
              <p className="text-sm italic text-muted-foreground">"{example.basicPrompt}"</p>
            </div>
          </div>

          {/* Basic Response */}
          <div>
            <p className="text-xs text-muted-foreground mb-1.5">AI Response:</p>
            <div className="bg-background/50 rounded-lg p-3 border border-border max-h-48 overflow-y-auto">
              <pre className="text-xs whitespace-pre-wrap font-sans text-foreground/70">{example.basicResponse}</pre>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-destructive/20">
            <p className="text-xs text-destructive font-medium">
              ❌ Generic, vague, requires multiple follow-ups
            </p>
          </div>
        </Card>

        {/* Crafted Prompt Side */}
        <Card className="p-4 sm:p-5 border-primary/30 bg-primary/5">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-full bg-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">PromptCraft Prompt</h3>
              <p className="text-xs text-muted-foreground">Expert-engineered template</p>
            </div>
          </div>

          {/* Crafted Prompt */}
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1">
              <Check className="w-3 h-3 text-primary" /> The prompt:
            </p>
            <div className="bg-background/50 rounded-lg p-3 border border-border max-h-32 overflow-y-auto">
              <pre className="text-xs whitespace-pre-wrap font-mono text-foreground/80">{example.craftedPrompt}</pre>
            </div>
          </div>

          {/* Crafted Response */}
          <div>
            <p className="text-xs text-muted-foreground mb-1.5">AI Response:</p>
            <div className="bg-background/50 rounded-lg p-3 border border-border max-h-48 overflow-y-auto">
              <pre className="text-xs whitespace-pre-wrap font-sans text-foreground/90">{example.craftedResponse}</pre>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-primary/20">
            <p className="text-xs text-primary font-medium">
              ✅ Specific, actionable, usable on the first try
            </p>
          </div>
        </Card>
      </div>

      {/* Bottom Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 max-w-lg mx-auto">
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-bold text-primary">3x</p>
          <p className="text-xs text-muted-foreground">More detailed output</p>
        </div>
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-bold text-primary">0</p>
          <p className="text-xs text-muted-foreground">Follow-up prompts needed</p>
        </div>
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-bold text-primary">90%</p>
          <p className="text-xs text-muted-foreground">Usable on first try</p>
        </div>
      </div>
    </div>
  );
};
