import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Check, Sparkles, AlertTriangle } from 'lucide-react';
import { DoodleChat, DoodleRocket } from './Doodles';

interface ComparisonExample {
  id: string;
  category: string;
  scenario: string;
  basicPrompt: string;
  basicResponse: string;
  craftedPrompt: string;
  craftedResponse: string;
}

// Multiple examples in a carousel
const examples: ComparisonExample[] = [
  {
    id: 'code',
    category: 'Code Debugging',
    scenario: 'Fix a slow database query',
    basicPrompt: 'Why is my database query slow?',
    basicResponse: `There could be several reasons why your database query is slow:

1. Missing indexes on columns you're querying
2. Large table scans
3. Inefficient JOIN operations
4. Network latency
5. Database server resources

You should check your query execution plan and consider adding indexes. Let me know if you need help with specific optimizations.`,
    craftedPrompt: `Debug this slow PostgreSQL query. Current execution time: 8.5 seconds (should be under 500ms).

Query:
SELECT u.name, COUNT(o.id) as order_count, SUM(o.total) as revenue
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.created_at >= '2024-01-01'
GROUP BY u.id
ORDER BY revenue DESC
LIMIT 100;

Context:
- users table: 2M rows
- orders table: 15M rows  
- No indexes except primary keys
- Running on AWS RDS (db.t3.medium)

Analyze:
1. Identify the bottleneck (include EXPLAIN output interpretation)
2. Recommend specific indexes with CREATE INDEX statements
3. Suggest query rewrite if needed
4. Estimate performance improvement`,
    craftedResponse: `**Bottleneck Identified:**
The query is doing a full table scan on 15M orders rows then filtering, instead of using indexes.

**Recommended Indexes:**

\`\`\`sql
-- Critical: Index on orders.created_at for WHERE clause
CREATE INDEX idx_orders_created_at ON orders(created_at);

-- Critical: Composite index for JOIN + WHERE
CREATE INDEX idx_orders_user_created ON orders(user_id, created_at);
\`\`\`

**Optimized Query:**

\`\`\`sql
-- Rewritten to filter first, then join
WITH filtered_orders AS (
  SELECT user_id, id, total
  FROM orders
  WHERE created_at >= '2024-01-01'
)
SELECT u.name, COUNT(fo.id) as order_count, SUM(fo.total) as revenue
FROM users u
INNER JOIN filtered_orders fo ON u.id = fo.user_id
GROUP BY u.id, u.name
ORDER BY revenue DESC
LIMIT 100;
\`\`\`

**Expected Improvement:** 8.5s → 180ms (47x faster)

Why: Index reduces scan from 15M → 2M rows, INNER JOIN eliminates users with no orders.`
  },
  {
    id: 'product',
    category: 'Product Copy',
    scenario: 'Write product description for noise-canceling headphones',
    basicPrompt: 'Write a product description for noise-canceling headphones',
    basicResponse: `Introducing our premium noise-canceling headphones! These headphones feature advanced noise cancellation technology to block out unwanted sounds. They have a comfortable design and long battery life. Perfect for work, travel, or relaxation.

Features:
- Active noise cancellation
- Bluetooth connectivity  
- Long battery life
- Comfortable fit

Order now and experience superior sound quality!`,
    craftedPrompt: `Write a product description for wireless noise-canceling headphones.

Product: "FocusPro Max" - $299
Target buyer: Remote workers, frequent travelers (ages 28-45)
Key differentiator: 48-hour battery life (vs. 20-30 hour industry standard)

Format:
- Opening hook: Lead with the transformation/problem solved (not features)
- 3 benefit bullets: Transform each spec into a customer outcome
- Social proof: Mention "12,000+ 5-star reviews"
- Risk reversal: 60-day guarantee

Tone: Premium but accessible (like Apple, not luxury watch brand)
Length: 120-150 words
Avoid: Generic claims like "superior sound" without specifics`,
    craftedResponse: `**Reclaim Your Focus in a Noisy World**

Whether you're deep in code, on a transcontinental flight, or trying to think in a bustling coffee shop, FocusPro Max creates your personal sound sanctuary.

**What makes the difference:**
→ **48-hour battery life** — A full work week on one charge, so you're never tethered to an outlet mid-flight or scrambling for power before your morning commute

→ **Adaptive noise cancellation** — Automatically adjusts to your environment. Engine roar at 35,000 feet? Silenced. Cafe chatter? Gone. Your crying baby? Still there (safety first), but everything else fades

→ **Premium comfort engineering** — Memory foam ear cups designed for 8+ hour sessions. No pressure headaches, no sweaty ears

Trusted by 12,000+ remote workers and road warriors. Try risk-free for 60 days.`
  },
  {
    id: 'analysis',
    category: 'Data Analysis',
    scenario: 'Analyze customer churn data',
    basicPrompt: 'Why are customers leaving?',
    basicResponse: `Based on general customer churn analysis, here are common reasons customers leave:

1. Better pricing from competitors
2. Poor customer service
3. Product doesn't meet needs
4. Lack of engagement
5. Technical issues

To reduce churn, you should:
- Improve customer support
- Offer competitive pricing
- Enhance product features
- Increase engagement
- Monitor customer satisfaction

Would you like me to elaborate on any of these points?`,
    craftedPrompt: `Analyze customer churn data and provide actionable recommendations.

Data Summary:
- 847 churned customers last quarter (18% churn rate, up from 12%)
- Average customer lifetime: 14 months (down from 18)
- Exit survey responses (top 3): "Too expensive" (42%), "Missing features" (31%), "Poor support" (18%)

Segment breakdown:
- SMB customers (<50 employees): 28% churn
- Mid-market (50-500): 14% churn  
- Enterprise (500+): 6% churn

Framework:
1. Identify the #1 fixable problem (not just "price")
2. Quantify the impact if we solve it
3. Provide 2-3 specific action items with owners
4. Suggest metrics to track improvement

Output as exec summary for leadership team (concise, data-driven).`,
    craftedResponse: `**CHURN ANALYSIS — Q4 2024**

**Critical Finding:**
Small businesses churn at 28% (vs. 6% enterprise). Problem isn't pricing — it's **onboarding complexity**. Exit interviews reveal SMBs abandon after hitting feature learning curve, then cite "too expensive" as socially acceptable exit reason.

**The Opportunity:**
If we reduce SMB churn from 28% → 18% (mid-market benchmark):
- Retain ~85 customers/quarter  
- Additional ARR: $340K annually
- Reduced CAC waste: $127K

**Action Plan:**

1. **Implement SMB Fast-Track Onboarding** (Owner: Product, Week 1)
   - Auto-configure 5 most-used features during signup
   - Interactive 3-minute product tour (not 47-minute video)
   - Target: 80% feature activation in first week (currently 34%)

2. **Dedicated SMB Success Manager** (Owner: CS, Week 2)
   - Proactive check-in at Day 7, 30, 90
   - Custom "quick win" playbook per industry vertical

**Track:** Day-7 activation rate, Time-to-value, 90-day retention cohort`
  }
];

export const PromptComparison = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const example = examples[currentIndex];

  const nextExample = () => {
    setCurrentIndex((prev) => (prev + 1) % examples.length);
  };

  const prevExample = () => {
    setCurrentIndex((prev) => (prev - 1 + examples.length) % examples.length);
  };

  return (
    <div className="mb-12 sm:mb-16">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Better Prompts = Better Results</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Expert templates help AI understand exactly what you need.
        </p>
      </div>

      {/* Scenario Header */}
      <div className="text-center mb-4">
        <Badge className="mb-2">{example.category}</Badge>
        <p className="text-sm text-muted-foreground">Task: <span className="text-foreground font-medium">{example.scenario}</span></p>
      </div>

      {/* Carousel Navigation - Moved to top */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <Button variant="outline" size="sm" onClick={prevExample} className="h-8">
          ← Previous
        </Button>
        <div className="flex gap-2">
          {examples.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 w-2 rounded-full transition-all ${idx === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                }`}
              aria-label={`Go to example ${idx + 1}`}
            />
          ))}
        </div>
        <Button variant="outline" size="sm" onClick={nextExample} className="h-8">
          Next →
        </Button>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Basic Prompt Side */}
        <Card className="p-4 sm:p-5 border-orange-500/40 bg-orange-500/10">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-full bg-orange-500/30">
              <X className="w-4 h-4 text-orange-600 dark:text-orange-500" />
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
              <pre className="text-xs whitespace-pre-wrap font-sans text-foreground/80">{example.basicResponse}</pre>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-orange-500/30">
            <p className="text-xs text-orange-700 dark:text-orange-500 font-medium">
              Generic, vague, requires multiple follow-ups
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

            {/* Doodle: Chat Cursor anchored to crafted prompt */}
            <div className="absolute -top-6 -right-4 w-12 h-12 rotate-12 opacity-80 text-foreground dark:text-foreground/80 hidden sm:block pointer-events-none">
              <DoodleChat className="w-full h-full" />
            </div>
          </div>

          {/* Crafted Response */}
          <div>
            <p className="text-xs text-muted-foreground mb-1.5">AI Response:</p>
            <div className="bg-background/50 rounded-lg p-3 border border-border max-h-48 overflow-y-auto">
              <pre className="text-xs whitespace-pre-wrap font-sans text-foreground/95">{example.craftedResponse.replace(/\*\*/g, '')}</pre>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-primary/20">
            <p className="text-xs text-primary font-medium">
              Specific, actionable, immediately useful
            </p>
          </div>
        </Card>
      </div>

      {/* Bottom Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 max-w-md mx-auto relative">
        <div className="text-center relative">
          <p className="text-xl sm:text-2xl font-bold text-primary">2-3x</p>
          <p className="text-xs text-muted-foreground">More specific output</p>
          {/* Doodle: Rocket anchored to performance stat */}
          <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-12 h-12 -rotate-12 opacity-80 text-foreground dark:text-foreground/80 hidden sm:block pointer-events-none">
            <DoodleRocket className="w-full h-full" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-bold text-primary">Less</p>
          <p className="text-xs text-muted-foreground">Back-and-forth needed</p>
        </div>
      </div>
    </div>
  );
};
