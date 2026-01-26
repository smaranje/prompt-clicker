import { ShareNetwork, TreeStructure, Detective, Sparkle, Fire, Heart, TrendUp, Briefcase, Layout, ChartPieSlice, Envelope, Camera, AppWindow, FilmStrip, Code, CheckCircle, Database, PenNib, Article, Brain, Robot, Rocket, Kanban, Target, PresentationChart, Megaphone, UsersThree, Globe, ShoppingCart, Money, Handshake, Lightbulb, PuzzlePiece, Wrench, Shield, Bug, GitBrunch, Browsers, Cpu, FigmaLogo, PaintBrush, VideoCamera, SpeakerHigh, Microphone, NotePencil, Books, GraduationCap, Translate, FileText, MagicWand } from 'phosphor-react';

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
    // =========================================================================
    // EXISTING CURATED PROMPTS (Preserved & Polished)
    // =========================================================================

    // --- BUSINESS & MARKETING (ChatGPT) ---
    {
        id: 'virtual-mckinsey-consultant',
        title: 'Virtual Strategy Consultant',
        description: 'Conduct a comprehensive audit of your business model, identifying 5 key growth levers and 3 critical risks.',
        icon: 'Briefcase',
        category: 'business',
        loves: 142,
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
        loves: 89,
        author: '@conversion_rate_expert',
        badge: 'trending',
        example_image: 'images/saas-wireframe.png',
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
        title: 'Deep Market Research Consultant',
        description: 'Act as a senior analyst to uncover market gaps, competitor weaknesses, and underserved segments.',
        icon: 'ChartPieSlice',
        category: 'business',
        loves: 56,
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
        loves: 112,
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
        loves: 324,
        author: '@visual_alchemist',
        badge: 'viral',
        example_image: 'images/midjourney-portrait.png',
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
        loves: 215,
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

    // --- CODING ---
    {
        id: 'senior-staff-code-review',
        title: 'Senior Staff Engineer Review',
        description: 'Get code review like a FAANG Staff Engineer. Focus on security, performance, and patterns.',
        icon: 'Code',
        category: 'code',
        loves: 89,
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
[PASTE CODE HERE]`
    },

    // =========================================================================
    // NEW BUSINESS PROMPTS
    // =========================================================================
    {
        id: 'blue-ocean-strategy',
        title: 'Blue Ocean Strategy Generator',
        description: 'Identify uncontested market spaces to make the competition irrelevant.',
        icon: 'Globe',
        category: 'business',
        loves: 65,
        author: '@innovator_prime',
        created_at: new Date().toISOString(),
        content: `Apply the Blue Ocean Strategy framework to [INDUSTRY/PRODUCT]. 
Identify 4 key factors the industry competes on. 
Then, propose a new "Strategy Canvas" where we:
1. **Eliminate** factors the industry takes for granted.
2. **Reduce** factors well below industry standards.
3. **Raise** factors well above industry standards.
4. **Create** factors the industry has never offered.
Objective: Create a new value curve that unlocks a new tier of non-customers.`
    },
    {
        id: 'alex-hormozi-offer',
        title: 'Grand Slam Offer Creation',
        description: 'Craft an irresistible offer using the Alex Hormozi $100M Leads framework.',
        icon: 'Money',
        category: 'business',
        loves: 210,
        author: '@offer_master',
        badge: 'trending',
        created_at: new Date().toISOString(),
        content: `Help me create a "Grand Slam Offer" for my [PRODUCT/SERVICE].
Apply the value equation:
1. **Dream Outcome**: Describe the ultimate result vividly.
2. **Perceived Likelihood of Achievement**: How do we prove it's guaranteed? (Social proof, guarantees).
3. **Time Delay**: How fast will they get results?
4. **Effort & Sacrifice**: How easy is it for them?

Then, add "Bonuses", "Scarcity", and "Urgency" to stack the value.`
    },
    {
        id: 'brand-voice-guidelines',
        title: 'Brand Voice Architect',
        description: 'Define a distinct, consistent brand personality and writing style guide.',
        icon: 'Megaphone',
        category: 'business',
        loves: 45,
        author: '@branding_pro',
        created_at: new Date().toISOString(),
        content: `Create a Brand Voice Guide for [COMPANY NAME].
Archetype: [e.g., The Rebel, The Sage, The Caregiver].
1. **Voice Persona**: 3 adjectives describing who we are (and 3 we are NOT).
2. **Tone Spectrum**: Where do we sit on Funny vs Serious, Respectful vs Irreverent?
3. **Vocabulary**: 5 specific words/phrases we use, and 5 we bann.
4. **Writing Sample**: Rewrite this boring sentence: "[INSERT SENTENCE]" in our new brand voice.`
    },
    {
        id: 'investor-pitch-deck',
        title: 'Series A Pitch Deck Flow',
        description: 'Structure a compelling narrative for venture capital fundraising.',
        icon: 'PresentationChart',
        category: 'business',
        loves: 78,
        author: '@venture_hacker',
        created_at: new Date().toISOString(),
        content: `Outline a 12-slide Series A pitch deck for [STARTUP DESCRIPTION].
Slide 1: Vision/Elevator Pitch.
Slide 2: The Problem (quantified pain).
Slide 3: The Solution (Your Product).
Slide 4: Market Size (TAM/SAM/SOM).
Slide 5: Traction (MoM growth, retention).
Slide 6: Business Model (Unit economics).
Slide 7: Go-to-Market Strategy.
Slide 8: Competition (Magic Quadrant).
Slide 9: Moat/Unfair Advantage.
Slide 10: The Team.
Slide 11: Financial Projections.
Slide 12: The Ask.`
    },
    {
        id: 'crisis-management-pr',
        title: 'Crisis PR Response',
        description: 'Draft a tactful, transparent public response to a company crisis or failure.',
        icon: 'Shield',
        category: 'business',
        loves: 32,
        author: '@pr_strategist',
        created_at: new Date().toISOString(),
        content: `Draft a public statement regarding [CRISIS SITUATION].
Framework: The "Capitulation" Strategy.
1. **Acknowledge**: Admit the mistake clearly without "but".
2. **Apologize**: Express genuine empathy for those affected.
3. **Action**: State exactly what steps are being taken right now to fix it.
4. **Accountability**: Explain how we will ensure this never happens again.
Tone: Humble, transparent, and concise.`
    },

    // =========================================================================
    // NEW MARKETING PROMPTS
    // =========================================================================
    {
        id: 'seo-content-calendar',
        title: '3-Month SEO Content Calendar',
        description: 'Plan 12 weeks of blog content targeting specific keyword clusters.',
        icon: 'Kanban',
        category: 'business',
        loves: 156,
        author: '@seo_wizard',
        created_at: new Date().toISOString(),
        content: `Create a 3-month content calendar for [WEBSITE NICHE].
Focus on these keyword clusters: [KEYWORDS].
For each week, provide:
1. **Blog Post Title**: Click-worthy and keyword-rich.
2. **Target Keyword**: The primary term.
3. **Search Intent**: Informational, Transactional, or Commercial.
4. **Funnel Stage**: TOFU, MOFU, or BOFU.
5. **Content Format**: Listicle, How-to, Case Study, or Guide.`
    },
    {
        id: 'youtube-script-hook',
        title: 'Viral YouTube Script Hook',
        description: 'Script the first 60 seconds of a video to maximize retention.',
        icon: 'VideoCamera',
        category: 'business',
        loves: 189,
        author: '@tube_master',
        badge: 'popular',
        created_at: new Date().toISOString(),
        content: `Write a script for the first 60 seconds of a YouTube video about [TOPIC].
Objective: Hook the viewer immediately to prevent drop-off.
Structure:
1. **The Hook**: A shocking statement, question, or visual description.
2. **The Promise**: "In this video, you will learn exactly how to..."
3. **The Credibility**: "I've used this method to..."
4. **The Open Loop**: "And stick around for the end where I share the #1 mistake people make."`
    },
    {
        id: 'facebook-ad-copy',
        title: 'High-CTR Facebook Ad Copy',
        description: 'Generate primary text, headline, and description for FB/Instagram ads.',
        icon: 'ShareNetwork',
        category: 'business',
        loves: 112,
        author: '@ad_buyer',
        created_at: new Date().toISOString(),
        content: `Write 3 Facebook Ad copy variations for [PRODUCT].
Audience: [TARGET AUDIENCE].
Pain Point: [MAIN PAIN POINT].

Format 1: **Story-based** (Long form). Start with "I used to struggle with..."
Format 2: **Benefit-stack** (Short form). Bullet points of key benefits.
Format 3: **Contrarian/Pattern Interrupter**. "Stop doing [COMMON ACTION]. Do this instead."`
    },
    {
        id: 'influencer-outreach',
        title: 'Influencer Collab Outreach',
        description: 'Write a non-spammy DM/email to pitch a collaboration to creators.',
        icon: 'Handshake',
        category: 'business',
        loves: 55,
        author: '@influence_co',
        created_at: new Date().toISOString(),
        content: `Draft a cold DM/email to an influencer ([NAME]) in the [NICHE] space.
Goal: Send them free product in exchange for an honest review/CGC.
Constraints:
- Don't sound automated.
- Reference a specific recent post of theirs ([CONTEXT]).
- Value-first: "No strings attached, just want to get this in your hands because I think you'd love the design."`
    },

    // =========================================================================
    // NEW CODING PROMPTS
    // =========================================================================
    {
        id: 'regex-master',
        title: 'Regex Generator & Explainer',
        description: 'Generate complex Regular Expressions for email, phone, or custom patterns.',
        icon: 'BracketsCurly',
        category: 'code',
        loves: 320,
        author: '@regex_god',
        badge: 'gem',
        created_at: new Date().toISOString(),
        content: `Create a Regular Expression (Regex) to match: [PATTERN REQUIREMENT].
Example: "A password with at least 8 characters, one number, one uppercase, and one symbol."
Provide:
1. **The Regex Pattern**.
2. **Breakdown**: Explain what each part of the regex does (e.g., \`(?=.*\\d)\` matches a digit).
3. **Test Cases**: 3 strings that match and 3 that fail.`
    },
    {
        id: 'sql-schema-architect',
        title: 'SQL Database Schema Design',
        description: 'Design a normalized database schema (ERD) for a complex application.',
        icon: 'Database',
        category: 'code',
        loves: 145,
        author: '@db_architect',
        created_at: new Date().toISOString(),
        content: `Design a SQL database schema for a [APP TYPE, e.g., Uber Clone].
Include tables for Users, [CORE ENTITIES], and their relationships.
Output:
1. **Table Definitions**: Column names, data types.
2. **Relationships**: PK (Primary Keys) and FK (Foreign Keys).
3. **Normalization**: Ensure 3NF (Third Normal Form).
4. **Indexes**: Recommendation for performance optimization.`
    },
    {
        id: 'react-component-generator',
        title: 'Modern React Component Gen',
        description: 'Create a fully typed, styled React component with Tailwind CSS.',
        icon: 'ReactLogo',
        category: 'code',
        loves: 275,
        author: '@frontend_fanatic',
        created_at: new Date().toISOString(),
        content: `Create a React Functional Component for a [COMPONENT NAME, e.g., DatePicker].
Specs:
- Use **TypeScript** interfaces for props.
- Use **Tailwind CSS** for styling.
- Ensure **Accessibility** (ARIA labels, keyboard nav).
- Include standard hooks (`useState`, `useEffect`) if logic is needed.
- Handle loading and error states if applicable.`
    },
{
    id: 'python-automation-script',
        title: 'Python Automation Script',
            description: 'Write a Python script to automate file handling, scraping, or data processing.',
                icon: 'FileCode',
                    category: 'code',
                        loves: 210,
                            author: '@automator_py',
                                created_at: new Date().toISOString(),
                                    content: `Write a Python script to [TASK DESCRIPTION].
Example: "Scrape the top 10 headlines from [WEBSITE] and save them to a CSV."
Requirements:
1. Use modern libraries (e.g., \`pandas\`, \`beautifulsoup4\`, \`requests\`).
2. Include error handling (try/except blocks).
3. Add comments explaining the logic.
4. Make it modular with functions.`
},
{
    id: 'docker-compose-setup',
        title: 'Docker Compose Wizard',
            description: 'Generate a multi-container Docker Compose setup for full-stack apps.',
                icon: 'Container',
                    category: 'code',
                        loves: 98,
                            author: '@devops_dude',
                                created_at: new Date().toISOString(),
                                    content: `Create a \`docker-compose.yml\` file for a stack containing:
1. **Frontend**: React (Dockerfile provided).
2. **Backend**: Node.js/Express.
3. **Database**: PostgreSQL (with persistent volume).
4. **Cache**: Redis.
Include environment variables injection and network configuration.`
},
{
    id: 'git-commit-message',
        title: 'Semantic Git Commit',
            description: 'Rewrite sloppy commit messages into conventional semantic commits.',
                icon: 'GitBranch',
                    category: 'code',
                        loves: 45,
                            author: '@git_police',
                                created_at: new Date().toISOString(),
                                    content: `Rewrite these commit messages to follow the **Conventional Commits** standard (feat, fix, chore, refactor, docs).

My sloppy messages:
- "Fixed the login button bug finally"
- "Added new header and updated styles"
- "Deleted unused files"

Output format:
\`type(scope): description\``
},
{
    id: 'complexity-analysis',
        title: 'Big O Complexity Analyzer',
            description: 'Analyze the time and space complexity of a given code snippet.',
                icon: 'Graph',
                    category: 'code',
                        loves: 88,
                            author: '@algo_expert',
                                created_at: new Date().toISOString(),
                                    content: `Analyze the Time and Space complexity (Big O) of the following function:
[PASTE CODE]

1. **Time Complexity**: Explain step-by-step why (loops, recursion).
2. **Space Complexity**: Memory usage explanation.
3. **Optimization**: Can this be improved from O(n^2) to O(n log n) or O(n)?`
},

// =========================================================================
// NEW CREATIVE & DESIGN PROMPTS
// =========================================================================
{
    id: 'logo-design-brief',
        title: 'Logo Design Brief Creator',
            description: 'Generate a comprehensive design brief for logo designers.',
                icon: 'PenNib',
                    category: 'creative',
                        loves: 76,
                            author: '@design_lead',
                                created_at: new Date().toISOString(),
                                    content: `Create a professional Logo Design Brief for [COMPANY NAME].
Industry: [INDUSTRY].
1. **Brand Values**: (e.g., Trust, Innovation, Speed).
2. **Target Audience**: Demographics and psychographics.
3. **Style Preference**: Minimalist vs. Complex, Vintage vs. Modern.
4. **Color Palette**: Preferred colors and their psychology.
5. **Do NOTs**: Specific clichés to avoid.`
},
{
    id: 'midjourney-logo',
        title: 'Midjourney Logo Generator',
            description: 'Prompts to generate vector-style, flat, minimal logo concepts.',
                icon: 'VectorTwo',
                    category: 'creative',
                        loves: 198,
                            author: '@mj_helper',
                                badge: 'trending',
                                    created_at: new Date().toISOString(),
                                        content: `/imagine prompt: A minimalist vector logo for a [COMPANY TYPE], [KEY IMAGE/SYMBOL].
Style: Paul Rand, flat design, negative space, geometric shapes.
Colors: [COLOR 1] and [COLOR 2] on a white background.
--no shading, realistic details, text`
},
{
    id: 'ux-user-persona',
        title: 'UX User Persona Generator',
            description: 'Create detailed user personas to guide product design decisions.',
                icon: 'UsersThree',
                    category: 'creative',
                        loves: 134,
                            author: '@ux_researcher',
                                created_at: new Date().toISOString(),
                                    content: `Create a User Persona for a [PRODUCT TYPE].
Name: [NAME].
Role: [JOB TITLE].
1. **Bio**: A short backstory.
2. **Goals**: What are they trying to achieve?
3. **Frustrations**: What pains do they currently face?
4. **Tech Savviness**: Low/Medium/High.
5. **Quote**: A phrase summarizing their mindset.`
},
{
    id: 'color-palette-generator',
        title: 'Accessible Color Palette',
            description: 'Generate a cohesive, accessible color scheme for web/app design.',
                icon: 'Palette',
                    category: 'creative',
                        loves: 92,
                            author: '@color_theory',
                                created_at: new Date().toISOString(),
                                    content: `Suggest a color palette for a [INDUSTRY] brand.
Mood: [MOOD, e.g., Trustworthy, Energetic, Calm].
Provide 5 Hex codes:
1. **Primary**: Main brand color.
2. **Secondary**: Action color (buttons).
3. **Accent**: For highlights.
4. **Neutral**: For text/backgrounds.
Ensure sufficient contrast ratio for WCAG AA accessibility standards.`
},
{
    id: 'design-system-tokens',
        title: 'Design System Tokens',
            description: 'Define the core token tier for a UI design system.',
                icon: 'FigmaLogo',
                    category: 'creative',
                        loves: 67,
                            author: '@system_designer',
                                created_at: new Date().toISOString(),
                                    content: `Define the core design tokens for a Design System called "[NAME]".
1. **Typography**: Font family, base size, scale ratio (e.g., 1.250 Major Third).
2. **Spacing**: Base unit (e.g., 4px) and scale (4, 8, 16, 24, 32...).
3. **Radius**: Small, Medium, Large, Pill.
4. **Shadows**: Elevation levels (1-5).`
},

// =========================================================================
// NEW WRITING PROMPTS
// =========================================================================
{
    id: 'tweet-thread-generator',
        title: 'Viral Twitter/X Thread',
            description: 'Turn a blog post or topic into an engaging 10-tweet thread.',
                icon: 'Bird',
                    category: 'writing',
                        loves: 245,
                            author: '@thread_boi',
                                badge: 'viral',
                                    created_at: new Date().toISOString(),
                                        content: `Turn this topic "[TOPIC]" into a viral Twitter thread.
Hook (Tweet 1): Controversial statement or high-value promise.
Body (Tweets 2-9): Break down the concept into punchy, one-idea-per-tweet segments. Use bullet points and spacing.
Conclusion (Tweet 10): Summary and CTA (Retweet/Follow).`
},
{
    id: 'linkedin-thought-leadership',
        title: 'LinkedIn Thought Leadership',
            description: 'Write a professional, engagement-bait post for LinkedIn.',
                icon: 'LinkedinLogo',
                    category: 'writing',
                        loves: 180,
                            author: '@linkedin_influencer',
                                created_at: new Date().toISOString(),
                                    content: `Write a LinkedIn post about [TOPIC].
Style: "Broetry" (Short sentences, lots of white space).
Structure:
1. **The Myth**: "Most people think X."
2. **The Reality**: "But actually, Y."
3. **The Evidence**: A personal story or data point.
4. **The Lesson**: What the reader should do differently.
5. **The Question**: Ask the audience for their opinion to drive comments.`
},
{
    id: 'ebook-outline',
        title: 'Non-Fiction Book Outline',
            description: 'Create a chapter-by-chapter outline for a non-fiction book.',
                icon: 'Books',
                    category: 'writing',
                        loves: 70,
                            author: '@book_coach',
                                created_at: new Date().toISOString(),
                                    content: `Create a detailed outline for a non-fiction book titled "[TITLE]".
Promise: How to [RESULT] without [PAIN].
Structure:
- **Introduction**: The Hook and The Promise.
- **Part 1 (The Problem)**: Chapters 1-3.
- **Part 2 (The Solution/Method)**: Chapters 4-8.
- **Part 3 (The Application)**: Chapters 9-10.
- **Conclusion**: The New World.`
},
{
    id: 'product-description-ecom',
        title: 'Sensory Product Description',
            description: 'Write alluring product descriptions for e-commerce that drive sales.',
                icon: 'ShoppingCart',
                    category: 'writing',
                        loves: 115,
                            author: '@copy_cat',
                                created_at: new Date().toISOString(),
                                    content: `Write a product description for [PRODUCT NAME].
Target Audience: [AUDIENCE].
1. **The Hook**: Open with a relatable problem or desire.
2. **Sensory Details**: Describe how it feels, looks, smells, or sounds. Use vivid adjectives.
3. **Features-to-Benefits**: Translate "Made of X" to "So that you get Y".
4. **Social Proof**: Mention "Join thousands of happy customers".`
},
{
    id: 'job-cover-letter',
        title: 'Standout Cover Letter',
            description: 'Write a cover letter that grabs a recruiter\'s attention immediately.',
                icon: 'FileText',
                    category: 'writing',
                        loves: 310,
                            author: '@career_hacker',
                                badge: 'gem',
                                    created_at: new Date().toISOString(),
                                        content: `Write a cover letter for the role of [JOB TITLE] at [COMPANY].
My Key skills: [SKILLS].
Tone: Confident, enthusiastic, professional.
Structure:
1. **The Hook**: Don't say "I am writing to apply." Say why you admire the company specifically.
2. **The Match**: Connect my specific achievements to the requirements in the job description.
3. **The Culture**: Explain why I fit their values.
4. **The CTA**: Ask for the interview.`
},
{
    id: 'language-translator',
        title: 'Contextual Translator',
            description: 'Translate text while preserving idiom, tone, and cultural nuance.',
                icon: 'Translate',
                    category: 'writing',
                        loves: 120,
                            author: '@polyglot',
                                created_at: new Date().toISOString(),
                                    content: `Translate the following text from [SOURCE LANGUAGE] to [TARGET LANGUAGE].
Text: "[INSERT TEXT]".
Critical Instruction: Do not translate word-for-word. Translate meaning-for-meaning.
Context: This is for [CONTEXT, e.g., a marketing slogan, a formal legal letter, casual slang].
Preserve the [TONE].`
}
];
