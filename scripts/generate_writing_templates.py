#!/usr/bin/env python3
"""
Multi-Agent Template Generator
Generates 45 new templates for PromptCraft across Writing, Coding, and Productivity categories
"""

import json

# Template structure
def create_template(id, category, title, icon, description, fields, prompt_template):
    return {
        "id": id,
        "category": category,
        "title": title,
        "icon": icon,
        "description": description,
        "fields": fields,
        "promptTemplate": prompt_template
    }

# WRITING & CONTENT TEMPLATES (15)
writing_templates = [
    {
        "id": "cold-outreach-email",
        "category": "writing",
        "title": "Cold Outreach Email",
        "icon": "Envelope",
        "description": "Craft compelling cold emails that get responses using proven frameworks",
        "fields": [
            {"name": "recipient_role", "label": "Recipient Role", "type": "text", "placeholder": "e.g., Marketing Director"},
            {"name": "product_service", "label": "Your Product/Service", "type": "text", "placeholder": "What are you offering?"},
            {"name": "value_prop", "label": "Key Value Proposition", "type": "text", "placeholder": "Main benefit"},
            {"name": "tone", "label": "Tone", "type": "select", "options": ["Professional", "Casual", "Friendly", "Direct"]}
        ],
        "promptTemplate": """Write a cold outreach email to a {recipient_role} about {product_service}.

Key value proposition: {value_prop}
Tone: {tone}

Structure:
1. **Subject Line**: Attention-grabbing, specific, under 50 characters
2. **Opening**: Personalized observation or compliment (research-based)
3. **Problem**: Identify a pain point they likely face
4. **Solution**: How {product_service} solves it (focus on outcomes, not features)
5. **CTA**: Single, clear next step (15-min call, demo, resource)

Keep it under 150 words. No fluff, no jargon."""
    },
    {
        "id": "resume-bullet-points",
        "category": "writing",
        "title": "Resume Bullet Points",
        "icon": "ListBullets",
        "description": "Transform job responsibilities into achievement-focused resume bullets",
        "fields": [
            {"name": "job_title", "label": "Job Title", "type": "text", "placeholder": "e.g., Product Manager"},
            {"name": "responsibilities", "label": "Key Responsibilities", "type": "textarea", "placeholder": "List what you did..."},
            {"name": "achievements", "label": "Measurable Results", "type": "textarea", "placeholder": "Any metrics or outcomes?"}
        ],
        "promptTemplate": """Transform these job responsibilities into powerful resume bullet points for a {job_title} role.

Responsibilities:
{responsibilities}

Achievements/Metrics:
{achievements}

Use the XYZ formula: "Accomplished [X] as measured by [Y], by doing [Z]"

Requirements:
- Start with strong action verbs (Led, Drove, Increased, Reduced, Launched)
- Include quantifiable metrics (%, $, time saved, users impacted)
- Focus on impact and results, not just tasks
- Keep each bullet to 1-2 lines
- Generate 5-7 bullets"""
    },
    {
        "id": "cover-letter-generator",
        "category": "writing",
        "title": "Cover Letter Generator",
        "icon": "FileText",
        "description": "Write a standout cover letter that grabs recruiter attention",
        "fields": [
            {"name": "job_title", "label": "Job Title", "type": "text", "placeholder": "e.g., Senior Software Engineer"},
            {"name": "company_name", "label": "Company Name", "type": "text"},
            {"name": "key_skills", "label": "Your Key Skills", "type": "textarea", "placeholder": "List 3-5 relevant skills"},
            {"name": "why_company", "label": "Why This Company?", "type": "textarea", "placeholder": "What excites you about them?"}
        ],
        "promptTemplate": """Write a cover letter for the {job_title} position at {company_name}.

My key skills: {key_skills}
Why I'm interested: {why_company}

Structure:
1. **Opening Hook**: Don't say "I am writing to apply." Start with why you admire {company_name} specifically (reference a recent product launch, mission, or value)
2. **The Match**: Connect 2-3 of my skills directly to the job requirements. Use specific examples
3. **Culture Fit**: Explain why I align with their values/mission
4. **Closing CTA**: Confidently request an interview

Tone: Enthusiastic but professional. Show personality.
Length: 250-350 words."""
    },
    {
        "id": "press-release-writer",
        "category": "writing",
        "title": "Press Release",
        "icon": "Newspaper",
        "description": "Create newsworthy press releases that media outlets will publish",
        "fields": [
            {"name": "announcement", "label": "What's the News?", "type": "text", "placeholder": "Product launch, funding, partnership, etc."},
            {"name": "company_name", "label": "Company Name", "type": "text"},
            {"name": "key_details", "label": "Key Details", "type": "textarea", "placeholder": "Who, what, when, where, why"},
            {"name": "quote", "label": "Executive Quote", "type": "textarea", "placeholder": "Quote from CEO/founder"}
        ],
        "promptTemplate": """Write a press release for {company_name} announcing: {announcement}

Key details: {key_details}
Executive quote to include: {quote}

Follow AP Style press release format:
1. **Headline**: Newsworthy, under 10 words
2. **Subheadline**: Expand on the headline
3. **Dateline**: [CITY, State, Date]
4. **Lead Paragraph**: Answer who, what, when, where, why in 2-3 sentences
5. **Body**: Expand with context, significance, and the executive quote
6. **Boilerplate**: 2-3 sentence company description
7. **Contact Info**: Media contact details

Tone: Objective, newsworthy, third-person. Avoid marketing fluff."""
    },
    {
        "id": "email-newsletter",
        "category": "writing",
        "title": "Email Newsletter",
        "icon": "EnvelopeOpen",
        "description": "Design engaging email newsletters that drive opens and clicks",
        "fields": [
            {"name": "topic", "label": "Newsletter Topic", "type": "text", "placeholder": "This week's theme"},
            {"name": "audience", "label": "Target Audience", "type": "text", "placeholder": "Who are your subscribers?"},
            {"name": "cta_goal", "label": "Call-to-Action Goal", "type": "text", "placeholder": "What should readers do?"}
        ],
        "promptTemplate": """Create an email newsletter about {topic} for {audience}.

Primary CTA goal: {cta_goal}

Structure:
1. **Subject Line**: Curiosity-driven or benefit-focused (under 50 chars)
2. **Preheader**: Expand on subject (40-100 chars)
3. **Opening**: Personal greeting + hook (why this matters now)
4. **Main Content**: 3 short sections with subheadings:
   - Insight/Story
   - Actionable tip
   - Resource/Link
5. **CTA**: Clear button text for {cta_goal}
6. **P.S.**: Personal note or teaser for next week

Tone: Conversational, like an email from a friend. Use "you" language.
Length: 300-500 words."""
    },
    {
        "id": "case-study-writer",
        "category": "writing",
        "title": "Case Study",
        "icon": "ChartLineUp",
        "description": "Write compelling case studies that showcase customer success",
        "fields": [
            {"name": "customer_name", "label": "Customer/Company", "type": "text"},
            {"name": "problem", "label": "Problem They Faced", "type": "textarea"},
            {"name": "solution", "label": "Your Solution", "type": "textarea"},
            {"name": "results", "label": "Measurable Results", "type": "textarea", "placeholder": "Metrics, ROI, outcomes"}
        ],
        "promptTemplate": """Write a case study featuring {customer_name}.

Problem: {problem}
Solution: {solution}
Results: {results}

Use the Problem-Solution-Results framework:

1. **Title**: "[Customer] Achieves [Specific Result] with [Your Product]"
2. **Executive Summary**: 2-3 sentence overview
3. **The Challenge**: Describe {problem} with emotional impact
4. **The Solution**: How {solution} was implemented (include specific features/approach)
5. **The Results**: Highlight {results} with bold metrics and quotes
6. **Conclusion**: Key takeaway and CTA

Include:
- Pull quotes from the customer
- Specific numbers and percentages
- Before/after comparison
- Visual data points

Tone: Professional storytelling. Make the customer the hero.
Length: 600-800 words."""
    },
    {
        "id": "linkedin-thought-leadership",
        "category": "writing",
        "title": "LinkedIn Thought Leadership",
        "icon": "LinkedinLogo",
        "description": "Write viral LinkedIn posts that position you as an industry expert",
        "fields": [
            {"name": "topic", "label": "Topic/Insight", "type": "text", "placeholder": "Your hot take or lesson"},
            {"name": "industry", "label": "Industry", "type": "text", "placeholder": "Your field"},
            {"name": "post_type", "label": "Post Type", "type": "select", "options": ["Story", "Listicle", "Contrarian Take", "Lesson Learned"]}
        ],
        "promptTemplate": """Write a LinkedIn post about {topic} in the {industry} industry.

Post type: {post_type}

Use the "Broetry" format (short sentences, lots of white space):

Structure:
1. **Hook**: Controversial statement or surprising fact (1-2 lines)
2. **The Myth**: "Most people think X..." (1 line)
3. **The Reality**: "But actually, Y..." (1-2 lines)
4. **The Story/Evidence**: Personal anecdote or data (3-5 short paragraphs)
5. **The Lesson**: Key takeaway (1-2 lines)
6. **Engagement Question**: Ask readers for their opinion

Formatting:
- Max 3-4 words per line
- Use line breaks liberally
- No hashtags in body (add 3-5 at the end)
- Include one emoji maximum

Tone: Authentic, confident, conversational. Avoid corporate speak.
Length: 150-200 words."""
    },
    {
        "id": "video-script-writer",
        "category": "writing",
        "title": "Video Script",
        "icon": "VideoCamera",
        "description": "Script engaging videos for YouTube, TikTok, or Instagram",
        "fields": [
            {"name": "video_topic", "label": "Video Topic", "type": "text"},
            {"name": "platform", "label": "Platform", "type": "select", "options": ["YouTube", "TikTok", "Instagram Reels", "LinkedIn"]},
            {"name": "video_length", "label": "Target Length", "type": "select", "options": ["30 seconds", "60 seconds", "3-5 minutes", "10+ minutes"]},
            {"name": "cta", "label": "Call-to-Action", "type": "text", "placeholder": "Subscribe, visit website, etc."}
        ],
        "promptTemplate": """Write a video script about {video_topic} for {platform}.

Target length: {video_length}
CTA: {cta}

Script structure:

**[0-5 seconds] HOOK:**
- Shocking statement, question, or visual that stops the scroll
- Example: "I lost $10K before I learned this..."

**[5-15 seconds] PROMISE:**
- "In this video, you'll learn exactly how to..."
- Set clear expectations

**[15-30 seconds] CREDIBILITY:**
- "I've [achievement/experience]..."
- Build trust quickly

**[Main Content]:**
- Break into 3-5 clear points
- Use B-roll suggestions [in brackets]
- Include on-screen text cues
- Keep energy high

**[Final 10 seconds] CTA:**
- Reinforce {cta}
- Create urgency or FOMO

Include:
- [Camera angles]
- [Visual cues]
- Timing markers
- Emphasis on KEY WORDS

Tone: Energetic, authentic, conversational."""
    },
    {
        "id": "podcast-episode-outline",
        "category": "writing",
        "title": "Podcast Episode Outline",
        "icon": "Microphone",
        "description": "Structure engaging podcast episodes with clear segments and talking points",
        "fields": [
            {"name": "episode_topic", "label": "Episode Topic", "type": "text"},
            {"name": "guest_name", "label": "Guest Name (if applicable)", "type": "text", "placeholder": "Leave blank for solo episode"},
            {"name": "key_points", "label": "Key Points to Cover", "type": "textarea"},
            {"name": "episode_length", "label": "Target Length", "type": "select", "options": ["15-20 min", "30-45 min", "60+ min"]}
        ],
        "promptTemplate": """Create a podcast episode outline for: {episode_topic}

Guest: {guest_name}
Key points: {key_points}
Target length: {episode_length}

Outline structure:

**[0-2 min] COLD OPEN:**
- Teaser: Most compelling moment from the episode
- Hook question or statement

**[2-5 min] INTRO:**
- Welcome + episode number
- Introduce {guest_name} (if applicable)
- Why this topic matters now
- What listeners will learn

**[Main Content - Segment by segment]:**
For each key point from {key_points}, create:
- Segment title
- Discussion questions (3-5 per segment)
- Potential stories/examples
- Transition to next segment

**[Final 5 min] WRAP-UP:**
- Recap key takeaways (3 bullets)
- Guest's final advice/CTA
- Sponsor message (if applicable)
- Preview next episode
- Where to find guest/resources

Include:
- Timestamp estimates
- Ad break placements
- Listener engagement prompts
- Show notes outline"""
    },
    {
        "id": "advertisement-copy",
        "category": "writing",
        "title": "Advertisement Copy",
        "icon": "Megaphone",
        "description": "Write high-converting ad copy for Facebook, Google, or LinkedIn",
        "fields": [
            {"name": "product_service", "label": "Product/Service", "type": "text"},
            {"name": "target_audience", "label": "Target Audience", "type": "text", "placeholder": "Who are you targeting?"},
            {"name": "platform", "label": "Ad Platform", "type": "select", "options": ["Facebook/Instagram", "Google Search", "LinkedIn", "TikTok"]},
            {"name": "goal", "label": "Campaign Goal", "type": "select", "options": ["Awareness", "Leads", "Sales", "App Installs"]}
        ],
        "promptTemplate": """Write ad copy for {product_service} targeting {target_audience} on {platform}.

Campaign goal: {goal}

Create 3 variations:

**VARIATION 1: Problem-Focused**
- Headline: Call out the pain point (40 chars max)
- Body: Agitate the problem, introduce solution
- CTA: Clear action button

**VARIATION 2: Benefit-Focused**
- Headline: Lead with the transformation (40 chars max)
- Body: Paint the "after" picture
- CTA: Outcome-driven

**VARIATION 3: Urgency/Scarcity**
- Headline: Time-sensitive offer (40 chars max)
- Body: What they'll miss out on
- CTA: FOMO-driven

For each variation include:
- Primary text (125 chars for {platform})
- Headline
- Description (if applicable)
- CTA button text
- Image/video suggestions

Follow {platform} best practices and character limits."""
    },
    {
        "id": "creative-story-ideas",
        "category": "writing",
        "title": "Creative Story Ideas",
        "icon": "Lightbulb",
        "description": "Generate unique story concepts for fiction, screenplays, or content",
        "fields": [
            {"name": "genre", "label": "Genre", "type": "select", "options": ["Sci-Fi", "Fantasy", "Thriller", "Romance", "Horror", "Mystery", "Drama"]},
            {"name": "themes", "label": "Themes/Topics", "type": "text", "placeholder": "e.g., AI, betrayal, redemption"},
            {"name": "format", "label": "Format", "type": "select", "options": ["Short Story", "Novel", "Screenplay", "Web Series"]}
        ],
        "promptTemplate": """Generate 5 unique story concepts in the {genre} genre for a {format}.

Themes to explore: {themes}

For each concept, provide:

**1. LOGLINE** (1-2 sentences)
- The entire story in a nutshell
- Include protagonist, conflict, and stakes

**2. PROTAGONIST**
- Name and brief description
- Fatal flaw or internal conflict
- What makes them unique

**3. CENTRAL CONFLICT**
- External: What they're fighting against
- Internal: What they're fighting within

**4. TWIST/HOOK**
- The unique angle that makes this story fresh
- What readers haven't seen before

**5. THEMATIC QUESTION**
- The deeper question the story explores

Make each concept distinct. Avoid clichés. Focus on character-driven narratives with high stakes."""
    },
    {
        "id": "product-description-ecommerce",
        "category": "writing",
        "title": "E-Commerce Product Description",
        "icon": "ShoppingCart",
        "description": "Write persuasive product descriptions that convert browsers into buyers",
        "fields": [
            {"name": "product_name", "label": "Product Name", "type": "text"},
            {"name": "features", "label": "Key Features", "type": "textarea", "placeholder": "List main features"},
            {"name": "target_customer", "label": "Target Customer", "type": "text"},
            {"name": "price_point", "label": "Price Point", "type": "select", "options": ["Budget", "Mid-Range", "Premium", "Luxury"]}
        ],
        "promptTemplate": """Write a product description for {product_name} targeting {target_customer}.

Features: {features}
Price positioning: {price_point}

Structure:

**1. HEADLINE** (5-8 words)
- Lead with the main benefit, not the product name

**2. OPENING HOOK** (1-2 sentences)
- Describe the problem or desire
- Create emotional connection

**3. SENSORY DESCRIPTION** (2-3 sentences)
- How it looks, feels, sounds, smells
- Use vivid, specific adjectives
- Help them imagine owning it

**4. FEATURES → BENEFITS** (3-5 bullets)
- Don't just list features
- Translate each feature into "so you can..."
- Focus on outcomes

**5. SOCIAL PROOF**
- "Join [X] happy customers"
- Trust signals

**6. CTA**
- Action-oriented button text

Tone: Match {price_point} positioning (budget = practical, luxury = aspirational)
Length: 150-250 words
SEO: Naturally include product category keywords"""
    },
    {
        "id": "blog-seo-article",
        "category": "writing",
        "title": "SEO Blog Article",
        "icon": "Article",
        "description": "Write search-optimized blog posts that rank and convert",
        "fields": [
            {"name": "target_keyword", "label": "Target Keyword", "type": "text", "placeholder": "Primary keyword to rank for"},
            {"name": "search_intent", "label": "Search Intent", "type": "select", "options": ["Informational", "Commercial", "Transactional", "Navigational"]},
            {"name": "word_count", "label": "Target Word Count", "type": "select", "options": ["800-1200", "1500-2000", "2500+"]},
            {"name": "audience_level", "label": "Audience Level", "type": "select", "options": ["Beginner", "Intermediate", "Expert"]}
        ],
        "promptTemplate": """Write an SEO-optimized blog post targeting the keyword: "{target_keyword}"

Search intent: {search_intent}
Target length: {word_count} words
Audience: {audience_level}

**SEO REQUIREMENTS:**
- Include "{target_keyword}" in: title, first paragraph, one H2, meta description
- Use LSI keywords (related terms)
- Internal linking opportunities (suggest 3-5)
- External authority links (suggest 2-3)

**STRUCTURE:**

**Title (H1):** 
- Include "{target_keyword}"
- 50-60 characters
- Compelling + click-worthy

**Meta Description:**
- 150-160 characters
- Include keyword + CTA

**Introduction (100-150 words):**
- Hook with a question or stat
- Promise what they'll learn
- Include keyword naturally

**Body (H2 sections):**
- 3-5 main sections
- Use H3 subheadings
- Include:
  - Bullet points
  - Numbered lists
  - Bold key phrases
  - Short paragraphs (3-4 sentences max)

**Conclusion:**
- Summarize key points
- Clear CTA

**Tone:** {audience_level}-friendly, authoritative but accessible
**Formatting:** Scannable, visual hierarchy"""
    },
    {
        "id": "twitter-thread-generator",
        "category": "writing",
        "title": "Viral Twitter/X Thread",
        "icon": "TwitterLogo",
        "description": "Turn ideas into engaging Twitter threads that drive engagement",
        "fields": [
            {"name": "thread_topic", "label": "Thread Topic", "type": "text"},
            {"name": "key_points", "label": "Key Points", "type": "textarea", "placeholder": "Main ideas to cover"},
            {"name": "thread_goal", "label": "Thread Goal", "type": "select", "options": ["Educate", "Inspire", "Entertain", "Sell/Promote"]}
        ],
        "promptTemplate": """Create a Twitter/X thread about: {thread_topic}

Key points to cover: {key_points}
Goal: {thread_goal}

**THREAD STRUCTURE:**

**Tweet 1 (HOOK):**
- Controversial statement, surprising stat, or bold promise
- Make them NEED to click "Show this thread"
- End with "Here's what I learned:" or "A thread 🧵"

**Tweets 2-9 (BODY):**
- One idea per tweet
- Use:
  - Line breaks for readability
  - Bullet points (•)
  - Numbers (1/, 2/, 3/)
  - Emojis sparingly (max 1-2 per tweet)
- Keep each tweet 200-250 characters
- Each should work standalone

**Tweet 10 (CONCLUSION):**
- Summarize the key takeaway
- CTA: "Retweet if this helped" or "Follow me for more on [topic]"

**BONUS Tweet 11 (OPTIONAL):**
- Plug your product/newsletter/link
- "If you found this valuable, you'll love..."

**FORMATTING RULES:**
- No hashtags in thread (kills reach)
- Tag relevant accounts (max 1-2)
- First tweet should be quotable
- Use pattern interrupts (questions, stats, stories)

Generate 10-12 tweets total."""
    },
    {
        "id": "email-subject-lines",
        "category": "writing",
        "title": "Email Subject Line Generator",
        "icon": "At",
        "description": "Create irresistible email subject lines that boost open rates",
        "fields": [
            {"name": "email_purpose", "label": "Email Purpose", "type": "text", "placeholder": "Product launch, newsletter, promotion, etc."},
            {"name": "audience", "label": "Audience", "type": "text"},
            {"name": "tone", "label": "Tone", "type": "select", "options": ["Urgent", "Curious", "Friendly", "Professional", "Playful"]}
        ],
        "promptTemplate": """Generate 10 email subject lines for: {email_purpose}

Audience: {audience}
Tone: {tone}

Create 2 variations of each type:

**1. CURIOSITY GAP** (2 subject lines)
- Tease without revealing
- Example: "You're doing [X] wrong (here's why)"

**2. URGENCY/SCARCITY** (2 subject lines)
- Time-sensitive or limited
- Example: "Last chance: [Offer] ends tonight"

**3. PERSONALIZATION** (2 subject lines)
- Use "you" language
- Example: "{audience}, this is for you"

**4. BENEFIT-DRIVEN** (2 subject lines)
- Lead with the outcome
- Example: "Get [result] in [timeframe]"

**5. QUESTION** (2 subject lines)
- Make them think
- Example: "Are you making this [mistake]?"

**REQUIREMENTS:**
- 30-50 characters each
- No spam trigger words (FREE, !!!, ACT NOW)
- A/B test-ready (similar but distinct)
- Mobile-friendly (front-load key words)

Include predicted open rate for each (based on best practices)."""
    }
]

# Generate TypeScript code for templates
def generate_typescript_templates(templates, category_name):
    ts_code = f"\n// ========== {category_name.upper()} TEMPLATES ==========\n"
    for template in templates:
        ts_code += "  {\n"
        ts_code += f"    id: '{template['id']}',\n"
        ts_code += f"    category: '{template['category']}',\n"
        ts_code += f"    title: '{template['title']}',\n"
        ts_code += f"    icon: '{template['icon']}',\n"
        ts_code += f"    description: `{template['description']}`,\n"
        ts_code += f"    fields: {json.dumps(template['fields'], indent=6)},\n"
        ts_code += f"    promptTemplate: `{template['promptTemplate']}`\n"
        ts_code += "  },\n"
    return ts_code

# Generate all writing templates
output = generate_typescript_templates(writing_templates, "Writing & Content")

print("=" * 80)
print("WRITING & CONTENT TEMPLATES GENERATED (15 templates)")
print("=" * 80)
print(output)
print("\n\nSaving to file...")

with open("generated_writing_templates.ts", "w") as f:
    f.write(output)

print("✅ Writing templates saved to: generated_writing_templates.ts")
print(f"✅ Generated {len(writing_templates)} writing templates")
