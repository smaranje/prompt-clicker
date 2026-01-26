export interface CommunityPrompt {
    id: string;
    title: string;
    description: string;
    icon: string;
    category: string;
    loves: number;
    author: string;
    badge?: 'viral' | 'trending' | 'gem' | 'featured';
    example_image?: string;
    content?: string; // Content for the ViewPrompt page
    created_at: string;
}

export const communityPrompts: CommunityPrompt[] = [
    {
        id: 'virtual-mckinsey-consultant',
        title: 'Virtual Strategy Consultant',
        description: 'Conduct a comprehensive audit of your business model, identifying 5 key growth levers and 3 critical risks.',
        icon: 'Briefcase',
        category: 'business',
        loves: 8942,
        author: '@strategy_titan',
        badge: 'featured',
        example_image: 'images/salary-negotiation.png', // Reusing appropriate business image
        created_at: new Date().toISOString(),
        content: `You are a Senior Partner at a top-tier strategy consulting firm (like McKinsey or BCG).
I want you to conduct a strategic audit of my business/idea: [BUSINESS DESCRIPTION].

Structure your response into these sections:
1. **Executive Summary**: The "BLUF" (Bottom Line Up Front).
2. **SWOT Analysis (Advanced)**: Don't just list them; cross-reference Strengths with Opportunities (Leverage) and Weaknesses with Threats (Vulnerabilities).
3. **5 Growth Levers**: Specific, actionable initiatives to drive 10x growth.
4. **3 Critical Risks**: The "Black Swans" that could kill this business, and how to mitigate them.
5. **Immediate Next Steps**: A 30-day execution plan.

Tone: Professional, direct, and insight-heavy. Avoid generic advice.`
    },
    {
        id: 'midjourney-v6-photorealism',
        title: 'Midjourney v6 Photorealism',
        description: 'Generate indistinguishable-from-reality photos using specific camera gear, lighting, and film stock metadata.',
        icon: 'Camera',
        category: 'creative',
        loves: 12503,
        author: '@visual_alchemist',
        badge: 'gem',
        example_image: 'images/midjourney-v6.png',
        created_at: new Date().toISOString(),
        content: `/imagine prompt: A candid portrait photograph of [SUBJECT], shot on a Leica Q2 with a 28mm Summilux lens at f/1.7. 
Lighting: Natural window light, soft wrap-around illumination, slight dust motes in the air.
Details: Ultra-realistic skin texture, visible pores, vellus hair, perfect eye reflections.
Film Stock: Kodak Portra 400 emulation, grain structure intact.
Parameters: --ar 4:5 --v 6.1 --style raw --q 2 --s 50`
    },
    {
        id: 'senior-staff-code-review',
        title: 'Senior Staff Engineer Review',
        description: 'Get code feedback like a FAANG Staff Engineer. Focuses on security, O(n) performance, and architectural patterns.',
        icon: 'Code',
        category: 'code',
        loves: 5621,
        author: '@clean_coder',
        badge: 'trending',
        example_image: 'images/code-review.png',
        created_at: new Date().toISOString(),
        content: `You are a Senior Staff Software Engineer at Google. Review the code below.
Focus strictly on:
1. **Security Vulnerabilities**: (SQLi, XSS, RCE, IDOR).
2. **Algorithmic Complexity**: Identify any O(n^2) or worse operations.
3. **Scalability**: Will this break at 100k RPS?
4. **Clean Code Patterns**: Violations of SOLID principles.

Code to review:
[PASTE CODE HERE]

Output format:
- **Critical Issues** (Must fix)
- **Optimization Opportunities** (Nice to have)
- **Refactored Code Block** (The "Right Way" to write it)`
    },
    {
        id: 'saas-landing-page-optimizer',
        title: 'SaaS Landing Page Optimizer',
        description: 'Design high-converting landing pages with scientific precision. Focuses on fold layout, CTA placement, and social proof.',
        icon: 'Layout',
        category: 'business',
        loves: 7200,
        author: '@conversion_rate_expert',
        badge: 'trending',
        example_image: 'images/saas-optimizer.png',
        created_at: new Date().toISOString(),
        content: `Analyze this landing page structure for [PRODUCT/SERVICE].
        
Goal: Maximize sign-ups.

Provide a section-by-section optimization plan:
1. **Hero Section**: Headline (Value Prop), Subheadline (Objection handling), Primary CTA.
2. **Social ProofBar**: Logos, specific numbers (e.g., "Trusted by 500+ teams").
3. **Problem/Solution**: "Old Way" (Pain) vs "New Way" (Your Product).
4. **Feature Breakdown**: Benefit-driven copy, not just specs.
5. **Trust Battery**: Testimonials, Guarantee, FAQ.

Critique the current approach and offer 3 A/B test ideas.`
    },
    {
        id: 'viral-thread-hook-v2',
        title: 'Viral Thread Hook Generator',
        description: 'Generate 10 variations of scroll-stopping hooks using proven cognitive biases (Curiosity Gap, Negativity Bias).',
        icon: 'Lightning',
        category: 'writing',
        loves: 4320,
        author: '@growth_hacker',
        badge: 'viral',
        example_image: 'images/viral-hook.png',
        created_at: new Date().toISOString(),
        content: `Act as a Viral Content Strategist.
Topic: [TOPIC]

Generate 10 Twitter/X thread hooks using these specific psychological frameworks:
1. **The "Negative Outcome"**: "Most people fail at X because..."
2. **The "Insider Secret"**: "I spent 10 years at [Company]. Here's what they don't tell you."
3. **The "Counter-Intuitive"**: "Stop doing X. Do Y instead."
4. **The "Numbers Game"**: "0 to 1M users in 12 months. The breakdown:"
5. **The "Listicle"**: "7 tools to replace your marketing team."

Format: Simple text, no emojis, under 280 characters.`
    },
    {
        id: 'cold-email-architect',
        title: 'B2B Cold Email Architect',
        description: 'Writes 3-step sequences that actually get replies. Uses the "Problem-Agitate-Solve" framework.',
        icon: 'Envelope',
        category: 'business',
        loves: 3100,
        author: '@sales_sniper',
        badge: 'featured',
        example_image: 'images/cold-email.png',
        created_at: new Date().toISOString(),
        content: `Write a 3-part cold email sequence to sell [PRODUCT] to [TARGET PERSONA].

**Email 1 (The Hook)**:
- Subject: Short, lowercase, intriguing (e.g., "question about [company]").
- Body: Mention a specific observation about them (personalization).
- Problem: Agitate a pain point they likely feel.
- Soft CTA: "Worth a chat?" (Low friction).

**Email 2 (The Value - 3 days later)**:
- "Forgot to mention..."
- Link to a case study or resource (Value first).

**Email 3 (The Breakup - 7 days later)**:
- "Assuming this isn't a priority right now..." (Strip-line technique).

Keep all emails under 120 words. No fluff.`
    },
    {
        id: 'react-component-architect',
        title: 'React Component Architect',
        description: 'Generates production-ready React components with Tailwind, Shadcn/UI, and Zod validation built-in.',
        icon: 'Browsers',
        category: 'code',
        loves: 6800,
        author: '@frontend_god',
        badge: 'trending',
        example_image: 'images/react-architect.png',
        created_at: new Date().toISOString(),
        content: `Create a highly polished React component for: [COMPONENT DESCRIPTION].

Requirements:
- **Stack**: React, TypeScript, Tailwind CSS, Lucide Icons.
- **Styling**: Use "shadcn/ui" philosophy (clean, accessible, dark-mode ready).
- **Validation**: If form inputs are involved, use 'zod' for schema validation.
- **Animation**: Add subtle 'framer-motion' interactions for polish.

Output the full code in a single file or clearly separated blocks.`
    },
    {
        id: 'seo-content-rewriter',
        title: 'Semantic SEO Rewriter',
        description: 'Optimizes content for Google RankBrain. Focuses on entity salience, LSI keywords, and featured snippets.',
        icon: 'MagnifyingGlass',
        category: 'marketing',
        loves: 1900,
        author: '@seo_ninja',
        badge: 'gem',
        example_image: 'images/seo-blog.png',
        created_at: new Date().toISOString(),
        content: `Rewrite the following text to rank #1 on Google for the keyword: [KEYWORD].

Constraints:
1. **Entity Salience**: Ensure the main entity is established early.
2. **NLP Optimization**: Use natural language that answers specific user intent questions (Who, What, How).
3. **Structure**: Use <H2> and <H3> headers to break up text for "Featured Snippet" capture.
4. **Tone**: Authoritative yet accessible.

Text to rewrite:
[PASTE TEXT]`
    }
];
