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
    // --- BUSINESS & MARKETING (ChatGPT) ---
    {
        id: 'virtual-mckinsey-consultant',
        title: 'Virtual Strategy Consultant',
        description: 'Conduct a comprehensive audit of your business model, identifying 5 key growth levers and 3 critical risks.',
        icon: 'Briefcase',
        category: 'business',
        loves: 8942,
        author: '@strategy_titan',
        badge: 'featured',
        example_image: 'images/business-strategy.png',
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
        id: 'saas-landing-page-optimizer',
        title: 'SaaS Landing Page Optimizer',
        description: 'Design high-converting landing pages with scientific precision. Focuses on fold layout, CTA placement.',
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
4. **Features vs Benefits**: Rewrite 3 feature bullets into benefit statements.
5. **Final CTA**: Urgency and risk reversal (guarantee).`
    },
    {
        id: 'comprehensive-market-research',
        title: 'Deep Market Research Analyst',
        description: 'Act as a senior analyst to uncover market gaps, competitor weaknesses, and underserved segments.',
        icon: 'ChartPieSlice',
        category: 'business',
        loves: 4500,
        author: '@market_maven',
        badge: 'gem',
        example_image: 'images/business-strategy.png',
        created_at: new Date().toISOString(),
        content: `Act as a senior market research analyst. I need a deep-dive analysis on the [INDUSTRY/NICHE] market.

Please provide:
1. **Market Size & CAGR**: Current valuation and projected growth.
2. **Key Competitors**: Top 3 players and their "Achilles Heel" (weakness).
3. **Underserved Segments**: Who is being ignored right now?
4. **Emerging Trends**: What will be huge in 12-24 months?
5. **Entry Strategy**: Low-cost, high-impact ways to enter this market today.`
    },
    {
        id: 'cold-email-architect',
        title: 'Cold Email Architect',
        description: 'Generate 3 variations of high-response cold emails using the PAS (Problem-Agitate-Solution) framework.',
        icon: 'Envelope',
        category: 'business',
        loves: 3800,
        author: '@sales_sniper',
        created_at: new Date().toISOString(),
        content: `Write 3 variations of a cold email to pitch [PRODUCT/SERVICE] to [TARGET PERSON/ROLE].

Use the PAS Framework (Problem-Agitate-Solution).
Constraint: Under 150 words.
Tone: Conversational, not salesy.

Variation 1: "The Observation" (Reference something they did recently).
Variation 2: "The Blunt Truth" (Call out a common industry pain point directly).
Variation 3: "The Helper" (Offer extensive value/resource upfront before asking for anything).`
    },

    // --- CREATIVE & DESIGN (Midjourney) ---
    {
        id: 'midjourney-v6-photorealism',
        title: 'Midjourney v6 Photorealism',
        description: 'Generate indistinguishable-from-reality photos using specific camera gear, lighting, and film stock metadata.',
        icon: 'Camera',
        category: 'creative',
        loves: 12503,
        author: '@visual_alchemist',
        badge: 'viral',
        example_image: 'images/midjourney-v6.png',
        created_at: new Date().toISOString(),
        content: `/imagine prompt: A candid portrait photograph of [SUBJECT], shot on a Leica Q2 with a 28mm Summilux lens at f/1.7. 
Lighting: Natural window light, soft wrap-around illumination, slight dust motes in the air.
Details: Ultra-realistic skin texture, visible pores, vellus hair, perfect eye reflections.
Film Stock: Kodak Portra 400 emulation, grain structure intact.
Parameters: --ar 4:5 --v 6.1 --style raw --q 2 --s 50`
    },
    {
        id: 'ui-design-inspiration',
        title: 'Modern UI/UX Inspiration',
        description: 'Generate clean, modern app interface concepts with glassmorphism and neon accents.',
        icon: 'AppWindow',
        category: 'creative',
        loves: 6100,
        author: '@design_guru',
        badge: 'trending',
        example_image: 'images/ui-design.png',
        created_at: new Date().toISOString(),
        content: `/imagine prompt: High-fidelity UI design of a [APP TYPE] mobile application.
Style: Glassmorphism, translucent blurred cards, neon gradients (cyan and magenta).
Layout: Clean, minimalist, plenty of whitespace, rounded corners (Apple Human Interface Guidelines).
Elements: Floating 3D icons, soft drop shadows, intuitive navigation bar.
View: Isometric perspective presentation mockups.
Parameters: --ar 9:16 --v 6.0`
    },
    {
        id: 'cinematic-storyboard',
        title: 'Cinematic Movie Storyboard',
        description: 'Create dramatic, wide-angle cinematic shots for storyboarding and visual storytelling.',
        icon: 'FilmStrip',
        category: 'creative',
        loves: 5300,
        author: '@director_cut',
        example_image: 'images/ui-design.png',
        created_at: new Date().toISOString(),
        content: `/imagine prompt: A cinematic wide shot of [SCENE DESCRIPTION] in the style of Denis Villeneuve.
Lighting: Moody, high contrast, chiaroscuro, volumetric fog.
Color Palette: Desaturated teals and oranges, cold industrial tones.
Composition: Rule of thirds, leading lines, massive scale.
Aspect Ratio: Anamorphic widescreen.
Parameters: --ar 2.39:1 --v 6.0 --stylize 250`
    },

    // --- CODING (ChatGPT/Claude) ---
    {
        id: 'senior-staff-code-review',
        title: 'Senior Staff Engineer Review',
        description: 'Get code feedback like a FAANG Staff Engineer. Focuses on security, O(n) performance, and architectural patterns.',
        icon: 'Code',
        category: 'code',
        loves: 5621,
        author: '@clean_coder',
        badge: 'gem',
        example_image: 'images/code-review-pro.png',
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
        id: 'unit-test-generator',
        title: 'Bulletproof Unit Test Gen',
        description: 'Generate comprehensive Jest/Vitest unit tests covering edge cases and error handling.',
        icon: 'CheckCircle',
        category: 'code',
        loves: 4100,
        author: '@test_driven',
        created_at: new Date().toISOString(),
        content: `Write comprehensive unit tests for this function using [TEST FRAMEWORK, e.g., Jest/Vitest].

Requirements:
1. **Happy Path**: Test the expected behavior.
2. **Edge Cases**: Empty inputs, null values, huge numbers, negative indices.
3. **Error Handling**: Ensure correct exceptions are thrown.
4. **Mocking**: Mock any external API calls or database dependencies.

Function to test:
[PASTE CODE HERE]`
    },
    {
        id: 'sql-query-optimizer',
        title: 'SQL Query Optimizer',
        description: 'Analyze slow SQL queries and rewrite them for maximum performance and indexing.',
        icon: 'Database',
        category: 'code',
        loves: 3900,
        author: '@db_admin',
        created_at: new Date().toISOString(),
        content: `Analyze this SQL query for performance issues on [DATABASE TYPE, e.g., PostgreSQL/MySQL].

Identify:
1. **N+1 Problems**.
2. **Missing Indexes**: Suggest specific columns to index.
3. **Inefficient Joins**: (e.g., using "OR" in joins, Cartesian products).

Provide the **Optimized Query** rewritten for speed.

Query:
[PASTE SQL HERE]`
    },

    // --- WRITING (Claude) ---
    {
        id: 'creative-storyteller',
        title: 'Master Storyteller (Claude)',
        description: 'Write gripping narratives with "Show, Don\'t Tell" principles, vivid sensory details, and deep character psychology.',
        icon: 'PenNib',
        category: 'writing',
        loves: 4800,
        author: '@fiction_writer',
        badge: 'featured',
        created_at: new Date().toISOString(),
        content: `Write a scene about [SCENE TOPIC] in the style of literary fiction.

Rules:
1. **Show, Don't Tell**: Do not name the emotion (e.g., "he was angry"). Describe the physical reaction (e.g., "his knuckles whitened as he gripped the glass").
2. **Sensory Details**: Include at least 3 senses (smell, sound, texture) to ground the reader.
3. **Pacing**: Vary sentence length to control the tension.
4. **Dialogue**: Subtext-heavy. People rarely say exactly what they mean.

Word count: ~500 words.`
    },
    {
        id: 'seo-blog-generator',
        title: 'SEO Blog Post Generator',
        description: 'Generate high-ranking, human-sounding blog posts with proper H1/H2/H3 structure and keyword integration.',
        icon: 'Article',
        category: 'writing',
        loves: 5200,
        author: '@content_king',
        created_at: new Date().toISOString(),
        content: `Write a 1500-word blog post about "[TOPIC]".
Target Keyword: "[KEYWORD]"

Structure:
- **H1**: Catchy, benefit-driven title.
- **Introduction**: Hook the reader (Problem/Agitate/Solve), define the keyword.
- **Body**: 4-5 H2 headings covering sub-topics. Use bullet points for readability.
- **FAQ Section**: Answer 3 common questions "People also ask" for this topic.
- **Conclusion**: Summary and Call to Action.

Tone: Authoritative but conversational. Use short paragraphs.`
    }
];
