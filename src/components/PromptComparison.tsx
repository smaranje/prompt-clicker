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
  },
  {
    id: 'engineer',
    category: 'Technical Architecture',
    scenario: 'Design a scalable microservices system',
    basicPrompt: 'How do I build a microservices architecture?',
    basicResponse: `Microservices architecture involves breaking down your application into smaller, independent services. Here's what you need to know:

1. Each service should handle one specific function
2. Services communicate via APIs
3. Use containers like Docker
4. Consider using Kubernetes for orchestration
5. Implement proper logging and monitoring

Would you like more details on any of these points?`,
    craftedPrompt: `You are a principal engineer who has designed systems at Netflix/Uber scale (10M+ daily users).

Design a microservices architecture for an e-commerce platform with these requirements:
- Expected load: 50K concurrent users, 500 orders/minute peak
- Current pain point: Monolith with 4-second checkout latency
- Team: 12 engineers, 3 teams
- Budget: AWS, ~$15K/month infrastructure

ARCHITECTURE DELIVERABLES:
1. SERVICE BOUNDARIES: Define 5-7 core services with clear ownership
2. DATA STRATEGY: Database-per-service vs shared DB tradeoffs for our scale
3. COMMUNICATION: Sync (REST/gRPC) vs Async (events) for each interaction
4. FAILURE MODES: Circuit breaker patterns, graceful degradation paths
5. MIGRATION PATH: Strangler fig pattern steps from monolith (prioritized)

Include specific AWS services with cost estimates. Flag anti-patterns to avoid.`,
    craftedResponse: `## E-COMMERCE MICROSERVICES ARCHITECTURE

### Service Boundaries & Team Ownership

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                      API Gateway (Kong)                       │
│                    Rate limiting, Auth, Routing               │
└─────────────────────────────────────────────────────────────┘
         │              │              │              │
    ┌────┴────┐   ┌────┴────┐   ┌────┴────┐   ┌────┴────┐
    │ Catalog │   │  Cart   │   │  Order  │   │ Payment │
    │ Service │   │ Service │   │ Service │   │ Service │
    │ Team A  │   │ Team B  │   │ Team B  │   │ Team C  │
    └────┬────┘   └────┬────┘   └────┬────┘   └────┬────┘
         │              │              │              │
    [PostgreSQL]   [Redis]      [PostgreSQL]   [Stripe API]
      (RDS)       (ElastiCache)    (RDS)       + Event Log
\`\`\`

### Communication Matrix

| From → To | Pattern | Why |
|-----------|---------|-----|
| Cart → Catalog | Sync (gRPC) | Need real-time inventory |
| Order → Payment | Sync (REST) | Transaction integrity |
| Order → Inventory | **Async (SQS)** | Decouple for resilience |
| All → Analytics | Async (Kinesis) | Fire-and-forget |

### Checkout Latency Fix (4s → <800ms)

**Root cause analysis:**
- Current: Sequential DB calls (inventory → pricing → tax → payment)
- Fix: Parallel calls + Redis cart cache + pre-computed pricing

\`\`\`javascript
// Before: 4 sequential calls = 4000ms
// After: Parallel + cached
await Promise.all([
  getCachedCart(userId),           // 50ms (Redis)
  validateInventoryBatch(items),    // 200ms (gRPC)
  calculateTax(precomputed),        // 100ms (cached rates)
]);
// + Payment: 400ms = Total: ~750ms
\`\`\`

### AWS Cost Breakdown (~$14.2K/month)

| Service | Config | Cost |
|---------|--------|------|
| EKS | 6x m5.large | $4,800 |
| RDS PostgreSQL | 2x db.r5.large (Multi-AZ) | $3,200 |
| ElastiCache | r5.large cluster | $2,400 |
| ALB + API Gateway | - | $1,800 |
| SQS/SNS/Kinesis | - | $800 |
| Monitoring (DataDog) | - | $1,200 |

### Migration Priority (Strangler Fig)

1. **Week 1-2:** Extract Payment service (highest risk isolation)
2. **Week 3-4:** Cart service + Redis (biggest latency win)
3. **Month 2:** Order service (complex, needs careful data migration)
4. **Month 3:** Catalog service (read-heavy, easiest to scale independently)`
  },
  {
    id: 'student',
    category: 'Research & Learning',
    scenario: 'Understanding complex academic concepts',
    basicPrompt: 'Explain machine learning to me.',
    basicResponse: `Machine learning is a type of artificial intelligence that allows computers to learn from data without being explicitly programmed.

There are three main types:
1. Supervised learning - learning from labeled examples
2. Unsupervised learning - finding patterns in unlabeled data  
3. Reinforcement learning - learning through trial and error

Common applications include image recognition, recommendation systems, and natural language processing.

Would you like me to explain any of these in more detail?`,
    craftedPrompt: `You are a CS professor at Stanford known for making complex topics intuitive. You've taught ML to 10,000+ students.

Explain machine learning for a 3rd-year computer science student who:
- Understands basic statistics (mean, variance, probability)
- Can code in Python
- Has never touched ML before
- Needs to build their first model for a class project (predicting house prices)

TEACHING FRAMEWORK:
1. INTUITION FIRST: Real-world analogy before any math
2. THE "WHY": Why does this approach work mathematically? (conceptual, not proofs)
3. CODE CONNECTION: Pseudocode showing exactly where math meets implementation
4. COMMON TRAPS: Top 3 mistakes students make on their first project
5. NEXT STEPS: What to learn after grasping basics (specific resources)

Optimize for "aha moments" over comprehensive coverage.`,
    craftedResponse: `## Machine Learning: The Mental Model That Actually Sticks

### The Intuition (Forget Algorithms for a Minute)

Imagine you're a real estate agent who's seen 1,000 houses sell. After a while, you develop "gut feelings" about prices. You notice patterns:
- Bigger houses → higher prices
- Good school district → +15% 
- Near highway → -10%

**That's machine learning.** You're finding a function that maps inputs (features) to outputs (price). The difference? Computers do it with math instead of gut feelings.

### The Math That Matters (Just This, I Promise)

For your house price project, you'll use **Linear Regression**:

\`\`\`
Price = w₁(sqft) + w₂(bedrooms) + w₃(location_score) + b
\`\`\`

**The "learning" part:** Finding the weights (w₁, w₂, w₃) that minimize prediction errors.

\`\`\`python
# What your code is actually doing:
for each training example:
    prediction = weights @ features + bias
    error = (prediction - actual_price)²
    
    # Gradient descent: adjust weights to reduce error
    weights -= learning_rate * gradient(error)
\`\`\`

**Why it works:** Calculus guarantees that following the gradient downhill eventually finds the minimum error. That's it. That's the magic.

### Your First Model (Copy This Structure)

\`\`\`python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

# 1. Load & split (ALWAYS split before anything else)
df = pd.read_csv('houses.csv')
X = df[['sqft', 'bedrooms', 'bathrooms']]
y = df['price']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# 2. Train (this is where the "learning" happens)
model = LinearRegression()
model.fit(X_train, y_train)

# 3. Evaluate (on data the model has NEVER seen)
predictions = model.predict(X_test)
print(f"Avg error: \${mean_absolute_error(y_test, predictions):,.0f}")
\`\`\`

### The 3 Traps You'll Fall Into (Everyone Does)

| Trap | What Happens | Fix |
|------|--------------|-----|
| **Data leakage** | Test on training data → 99% accuracy → model fails in production | Split data FIRST, before any preprocessing |
| **Feature scaling** | sqft (1000s) dominates bedrooms (1-5) | \`StandardScaler()\` on numeric features |
| **Overfitting** | Model memorizes training data | Watch for train acc >> test acc; use regularization |

### What to Learn Next (In This Order)

1. **Decision Trees** → More intuitive, handles non-linear patterns
2. **Cross-validation** → More reliable than single train/test split
3. **Feature engineering** → Where the real performance gains come from

📚 Best resource: [Fast.ai Practical ML Course](https://course.fast.ai/) - Skip theory, build things first`
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
