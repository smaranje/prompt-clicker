import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Check, Sparkles, AlertTriangle } from 'lucide-react';

interface ComparisonExample {
  id: string;
  category: string;
  scenario: string;
  basicPrompt: string;
  basicResponse: string;
  craftedPrompt: string;
  craftedResponse: string;
}

// Condensed to 1 example for better UX
const example: ComparisonExample = {
  id: 'manager',
  category: 'Executive Analysis',
  scenario: 'Quarterly portfolio risk assessment',
  basicPrompt: 'Analyze the risk in my investment portfolio.',
  basicResponse: `Here are some general tips for analyzing portfolio risk:

1. Look at your asset allocation
2. Consider diversification across sectors
3. Check the volatility of individual holdings
4. Review your risk tolerance
5. Consider market conditions

Would you like me to explain any of these in more detail?`,
  craftedPrompt: `You are a senior portfolio risk analyst with 15+ years at major financial institutions (RBC, TD, Goldman).

Analyze portfolio risk for a $2.5M institutional portfolio with the following allocation:
- 45% Canadian equities (heavy in energy/financials)
- 30% US tech growth stocks
- 15% corporate bonds (BBB-rated)
- 10% cash

Current concerns: Rising interest rates, tech sector correction, CAD/USD exposure

ANALYSIS FRAMEWORK:
1. CONCENTRATION RISK: Identify sector/geographic overexposure with specific % thresholds
2. CORRELATION ANALYSIS: Which holdings move together during downturns?
3. STRESS SCENARIOS: Model impact of -20% tech correction + 100bps rate hike
4. ACTIONABLE RECOMMENDATIONS: Specific rebalancing with target allocations
5. TIMELINE: Prioritize actions by urgency (immediate/30-day/quarterly)

Output as executive summary for investment committee review.`,
  craftedResponse: `## PORTFOLIO RISK ASSESSMENT - EXECUTIVE SUMMARY

### Critical Risk Flags 🔴

**1. Concentration Risk: HIGH**
- Canadian equity exposure (45%) exceeds recommended 30% for institutional portfolios
- Energy/financials represent ~60% of Canadian holdings = 27% total portfolio in 2 sectors
- US tech (30%) concentrated in growth names with avg P/E >35

**2. Correlation Concern**
- Energy + Financials correlation: 0.72 during rate hike cycles
- Tech growth correlation during corrections: 0.85
- Effective diversification: Only 3 independent risk factors

### Stress Test Results

| Scenario | Portfolio Impact | Recovery Timeline |
|----------|-----------------|-------------------|
| Tech -20% | -$150K (-6%) | 8-14 months |
| +100bps rates | -$95K (-3.8%) | 12-18 months |
| Combined | -$285K (-11.4%) | 18-24 months |

### Recommended Actions

**Immediate (This Week):**
- Reduce US tech to 20% → reallocate $250K to international developed markets
- Add currency hedge on USD exposure (cost: ~0.3% annually)

**30-Day:**
- Rotate $200K from Canadian financials → Canadian REITs (lower rate sensitivity)
- Upgrade corporate bonds to A-rated (sacrifice 40bps yield for stability)

**Target Allocation:** 35% CAD equity | 20% US | 15% International | 20% Fixed Income | 10% Cash`
};

export const PromptComparison = () => {
  return (
    <div className="mb-12 sm:mb-16">
      <div className="text-center mb-6 sm:mb-8">
        <Badge variant="outline" className="mb-3 text-xs">See The Difference</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Same Task. Dramatically Different Results.</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          The prompt you use determines the quality of AI output. Here's proof.
        </p>
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
