import { Template } from '@/types/templates';

export const templates: Template[] = [
  // WRITING & CONTENT
  {
    id: 'email_professional',
    category: 'writing',
    title: 'Write a Professional Email',
    icon: 'Mail',
    description: 'Generate well-structured professional emails',
    fields: [
      {
        name: 'email_type',
        label: 'Email type',
        type: 'dropdown',
        default: 'professional_reply',
        options: [
          { value: 'professional_reply', label: 'Professional Reply' },
          { value: 'request', label: 'Request' },
          { value: 'update', label: 'Update' },
          { value: 'apology', label: 'Apology' },
          { value: 'followup', label: 'Follow-up' },
          { value: 'sales', label: 'Sales/Pitch' },
          { value: 'thankyou', label: 'Thank You' },
          { value: 'cold', label: 'Cold Outreach' }
        ]
      },
      {
        name: 'recipient',
        label: 'To',
        type: 'text',
        placeholder: 'your client',
        required: false
      },
      {
        name: 'topic',
        label: 'About',
        type: 'text',
        placeholder: 'project status update',
        required: false
      },
      {
        name: 'key_points',
        label: 'Key points to cover',
        type: 'text',
        placeholder: 'completed tasks, next steps, timeline',
        required: false
      },
      {
        name: 'length',
        label: 'Length',
        type: 'dropdown',
        default: 'medium',
        options: [
          { value: 'brief', label: 'Brief (3-4 sentences)' },
          { value: 'medium', label: 'Medium (2-3 paragraphs)' },
          { value: 'detailed', label: 'Detailed (4+ paragraphs)' }
        ]
      },
      {
        name: 'tone',
        label: 'Tone',
        type: 'dropdown',
        default: 'professional',
        options: [
          { value: 'professional', label: 'Professional' },
          { value: 'friendly', label: 'Friendly & Warm' },
          { value: 'direct', label: 'Direct & Concise' },
          { value: 'enthusiastic', label: 'Enthusiastic' },
          { value: 'apologetic', label: 'Apologetic' }
        ]
      },
      {
        name: 'include_cta',
        label: 'Include call-to-action',
        type: 'checkbox',
        default: false
      }
    ],
    promptTemplate: `You are a professional business communication expert who has coached C-level executives on email strategy.

Write a {email_type} email to {recipient} about {topic}.

Key points to address: {key_points}
Length: {length}
Tone: {tone}
Include CTA: {include_cta}

EMAIL STRUCTURE FRAMEWORK:

1. SUBJECT LINE
Create 2 options:
- Benefit-driven: Focus on value for recipient
- Curiosity-driven: Creates intrigue without being clickbait
Keep under 50 characters for mobile optimization.

2. OPENING (First 1-2 sentences)
Email Type Strategies:
- Professional Reply: Reference their email + acknowledge main point
- Request: Show you understand their time is valuable
- Update: Lead with the most important news
- Apology: Take ownership immediately, no excuses
- Follow-up: Reference previous conversation + provide value
- Sales/Pitch: Start with their problem/opportunity (not your solution)
- Thank You: Be specific about what you're thanking them for
- Cold Outreach: Personalized observation about them/their company

[AVOID] Avoid: "I hope this email finds you well" "I wanted to reach out"

3. BODY (2-4 paragraphs for {length})
Brief: 3-4 sentences, single main point
Medium: 2-3 short paragraphs, clear structure
Detailed: 4+ paragraphs with subheadings/bullets

Structure Guidelines:
- Start each paragraph with key point (busy readers skim)
- Use bullet points for lists (3-5 max)
- One idea per paragraph
- Break up text (no paragraph over 4 lines)
- Bold important points (use sparingly)

Tone Customization for {tone}:
- Professional: Clear, respectful, solution-focused
- Friendly & Warm: Use first names, contractions, show personality
- Direct & Concise: Skip pleasantries, action-oriented
- Enthusiastic: Exclamation points (max 1-2), positive language
- Apologetic: Own the mistake, outline solution, prevent future issues

4. CALL-TO-ACTION
{include_cta} Based on email type:
- Request: Specific ask + easy response (yes/no question)
- Update: Next steps + timeline
- Sales: Low-commitment next step (call, demo, resource)
- Follow-up: Gentle nudge + value-add

Make it easy to respond:
[TIP] Single, clear action
[TIP] Provide specific options/times
[TIP] Remove friction (no multi-step process)

5. CLOSING
Match tone:
- Professional: "Best regards," "Sincerely,"
- Friendly: "Thanks!" "Cheers,"
- Direct: "Thanks," "Regards,"

RECIPIENT CUSTOMIZATION:
- Executives: Lead with impact/ROI, be concise
- Clients: Professional + warm, focus on their goals
- Team: Collaborative tone, clear expectations
- Strangers: Build credibility quickly, personalize

BEST PRACTICES:
[TIP] Front-load important information
[TIP] Use active voice ("I will" not "it will be")
[TIP] Avoid jargon unless industry-specific
[TIP] Proofread for typos (undermines credibility)
[TIP] Preview on mobile (60% of emails opened on mobile)
[TIP] If over 200 words, consider if a call would be better

Write the complete email now with subject line options.`
  },
  {
    id: 'social_posts',
    category: 'writing',
    title: 'Create Social Media Posts',
    icon: 'Smartphone',
    description: 'Generate engaging social media content',
    fields: [
      {
        name: 'platform',
        label: 'Platform',
        type: 'dropdown',
        default: 'linkedin',
        options: [
          { value: 'linkedin', label: 'LinkedIn' },
          { value: 'twitter', label: 'Twitter/X' },
          { value: 'instagram', label: 'Instagram' },
          { value: 'facebook', label: 'Facebook' }
        ]
      },
      {
        name: 'description',
        label: 'Describe what you want to post about',
        type: 'text',
        placeholder: 'e.g., PromptCraft - helps users generate expert AI prompts in seconds without prompt engineering knowledge'
      },
      {
        name: 'key_benefit',
        label: 'Key benefit to highlight',
        type: 'text',
        placeholder: 'e.g., Saves 15 minutes per prompt'
      },
      {
        name: 'target_audience',
        label: 'Target Audience',
        type: 'dropdown',
        default: 'professionals',
        options: [
          { value: 'developers', label: 'Developers' },
          { value: 'marketers', label: 'Marketers' },
          { value: 'content_creators', label: 'Content Creators' },
          { value: 'entrepreneurs', label: 'Entrepreneurs' },
          { value: 'professionals', label: 'General Professionals' }
        ]
      },
      {
        name: 'goal',
        label: 'Post Goal',
        type: 'dropdown',
        default: 'engagement',
        options: [
          { value: 'engagement', label: 'Drive engagement' },
          { value: 'awareness', label: 'Build awareness' },
          { value: 'leads', label: 'Generate leads' },
          { value: 'authority', label: 'Establish authority' }
        ]
      },
      {
        name: 'style',
        label: 'Style',
        type: 'dropdown',
        default: 'professional',
        options: [
          { value: 'professional', label: 'Professional' },
          { value: 'conversational', label: 'Conversational' },
          { value: 'storytelling', label: 'Storytelling' },
          { value: 'thought_leadership', label: 'Thought Leadership' }
        ]
      }
    ],
    promptTemplate: `You are an expert {platform} content strategist who has helped 50+ companies grow their following to 100K+.

Create a {style} {platform} post about: {description}

Target audience: {target_audience}
Primary goal: {goal}
Key value proposition: {key_benefit}

Post Structure (Algorithm-Optimized):

1. HOOK (First Line - Critical!)
   Choose ONE approach:
   - Provocative question: "Why do 90% of {target_audience} still struggle with [problem]?"
   - Surprising stat: "[Shocking number] of {target_audience} don't know this..."
   - Personal story: "I made a $50K mistake. Here's what I learned:"
   - Contrarian take: "Unpopular opinion: [Common belief] is wrong"
   
   [AVOID] Don't use: "I'm excited to announce..." "I'm happy to share..." "Just launched..."

2. CONTEXT (Lines 2-4)
   - Set up the problem/situation
   - Make it relatable to {target_audience}
   - Use "you" language (not "I/we" focused)

3. INSIGHT (Lines 5-9)
   - Share your solution/learning/framework
   - Break it into 3-5 bullet points OR numbered list
   - Each point should be 1-2 lines max
   - Use → or • for visual breaks

4. CALL-TO-ACTION (Last 1-2 lines)
   - Ask a specific question to drive comments
   - Examples: "What's your experience with X?" "Which approach works for you?"
   - Avoid: "Let me know in the comments" (too generic)

Platform-Specific Formatting for {platform}:
- LinkedIn: 150-200 words, blank lines between sections, first line under 140 chars, 3-5 hashtags at end
- Twitter/X: Under 280 characters or thread, max 1-2 hashtags, use line breaks
- Instagram: 125-150 words, first 60 chars crucial, 10-15 hashtags, emojis encouraged  
- Facebook: Conversational tone, questions drive comments, 3-5 hashtags

Tone Guidelines for {style}:
- Professional: Authoritative but warm, avoid corporate jargon
- Conversational: Friendly, use contractions, like talking to a friend
- Thought Leadership: Data-driven, bold takes, challenge assumptions
- Storytelling: Personal, vulnerable, with clear arc (problem → solution)

Audience Customization for {target_audience}:
- Developers: Technical language, coding workflows, efficiency focus
- Marketers: ROI, metrics, campaign performance terminology
- Content Creators: Creativity, audience growth, creator challenges
- Entrepreneurs: Scalability, growth, business impact
- Professionals: Clear language, practical benefits

Final check:
[TIP] Hook stops the scroll?
[TIP] Post delivers value (not just announcement)?
[TIP] CTA encourages {goal}?
[TIP] Formatted for readability?
[TIP] Optimized for {platform} algorithm?

Write the post now.`
  },
  {
    id: 'article_draft',
    category: 'writing',
    title: 'Draft an Article or Blog Post',
    icon: 'FileText',
    description: 'Create article outlines and drafts',
    fields: [
      {
        name: 'topic',
        label: 'Article Topic',
        type: 'text',
        placeholder: 'e.g., How to build better AI prompts'
      },
      {
        name: 'audience',
        label: 'Target Audience',
        type: 'text',
        placeholder: 'e.g., non-technical professionals wanting to use AI'
      },
      {
        name: 'key_takeaway',
        label: 'Main takeaway readers should have',
        type: 'text',
        placeholder: 'e.g., Anyone can write great prompts with the right framework'
      },
      {
        name: 'length',
        label: 'Article Length',
        type: 'dropdown',
        default: 'medium',
        options: [
          { value: 'short', label: 'Short (500-800 words)' },
          { value: 'medium', label: 'Medium (1000-1500 words)' },
          { value: 'long', label: 'Long (2000+ words)' }
        ]
      },
      {
        name: 'angle',
        label: 'Article Angle',
        type: 'dropdown',
        default: 'howto',
        options: [
          { value: 'howto', label: 'How-to guide' },
          { value: 'listicle', label: 'List article' },
          { value: 'opinion', label: 'Opinion piece' },
          { value: 'case_study', label: 'Case study' },
          { value: 'comparison', label: 'Comparison' }
        ]
      },
      {
        name: 'tone',
        label: 'Tone',
        type: 'dropdown',
        default: 'educational',
        options: [
          { value: 'educational', label: 'Educational' },
          { value: 'conversational', label: 'Conversational' },
          { value: 'authoritative', label: 'Authoritative' },
          { value: 'inspirational', label: 'Inspirational' }
        ]
      }
    ],
    promptTemplate: `You are a professional content writer who has written 500+ published articles for top publications.

Write a {length} {angle} article about: "{topic}"

Target audience: {audience}
Core message: {key_takeaway}
Tone: {tone}

Article Structure:

## 1. HEADLINE
Create 3 headline options using proven formulas:
- How-to: "How to [achieve result] [without common objection]"
- List: "X [Ways/Reasons/Steps] to [achieve benefit]"
- Question: "[Provocative question about pain point]"
- Outcome: "The [adjective] Way to [achieve result]"

Pick the strongest and most clickable option.

## 2. INTRODUCTION (100-150 words)
- Hook: Start with a story, stat, or bold statement
- Problem: Identify the reader's pain point
- Promise: Preview what they'll learn
- Proof: Brief credibility indicator (research, experience, results)

[AVOID] Don't use: "In this article, we will..." "Have you ever wondered..."

## 3. BODY (Main Content)
Structure based on {angle}:
- Use subheadings every 200-300 words
- Include specific examples (not generic)
- Add data points or statistics where relevant
- Use short paragraphs (3-4 lines max)
- Bold key phrases for scannability
- Include bullet points for lists
- Add transitional phrases between sections

## 4. PRACTICAL EXAMPLES
Include 2-3 real-world examples or mini case studies that demonstrate your points.
Make them specific, not generic.

## 5. COMMON MISTAKES
Include a "What NOT to do" section with 3-5 common pitfalls.

## 6. ACTIONABLE TAKEAWAYS
Create a "Quick Start Guide" or "Action Steps" section:
- 3-5 concrete actions readers can take today
- Each should be specific and achievable
- Link back to main article concepts

## 7. CONCLUSION (100 words)
- Recap: Main benefit/insight
- Motivation: Encourage action
- Next step: Clear call-to-action
- Opening: End with inspiring thought or question

SEO Optimization:
- Naturally integrate topic keywords
- Use variations of main topic throughout
- Include semantic related terms
- Create descriptive, keyword-rich subheadings

Engagement Elements:
- Ask questions throughout to keep reader engaged
- Use "you" language (write TO the reader)
- Include relatable scenarios
- Vary sentence length for rhythm

Final Quality Check:
[TIP] Does the intro hook readers in 30 seconds?
[TIP] Is every section valuable and actionable?
[TIP] Could someone implement this TODAY?
[TIP] Is it scannable with subheadings and formatting?
[TIP] Does it deliver on the promise in the headline?

Write the complete article now.`
  },
  {
    id: 'rewrite_text',
    category: 'writing',
    title: 'Improve/Rewrite Existing Text',
    icon: 'PenTool',
    description: 'Enhance and refine your writing',
    fields: [
      {
        name: 'purpose',
        label: 'Goal',
        type: 'dropdown',
        default: 'improve',
        options: [
          { value: 'improve', label: 'Improve clarity' },
          { value: 'shorten', label: 'Make shorter' },
          { value: 'expand', label: 'Make longer' },
          { value: 'professional', label: 'More professional' },
          { value: 'casual', label: 'More casual' }
        ]
      }
    ],
    promptTemplate: `You are an expert editor who has refined copy for The New York Times, Harvard Business Review, and top Fortune 500 companies.

Task: {purpose} the following text
Goal: Maintain original meaning while dramatically improving impact and readability

EDITING FRAMEWORK BY PURPOSE:

## IMPROVE CLARITY
- Remove passive voice: "was done by" → "did"
- Cut filler words: "in order to" → "to", "due to the fact that" → "because"
- Replace vague terms: "very good" → specific descriptor
- Split complex sentences (max 20-25 words)
- Use active, concrete verbs
- Define technical terms if needed
- One idea per sentence

Before: "The implementation of the new system was accomplished by our team."
After: "Our team implemented the new system."

## MAKE SHORTER
Target: Cut 30-50% of word count while keeping all key points
- Delete redundant phrases ("final outcome" → "outcome")
- Remove qualifiers unless critical ("really", "very", "quite")
- Cut throat-clearing openings ("It is important to note that...")
- Combine related sentences
- Use bullet points for lists
- Replace phrases with single words: "in the event that" → "if"

## MAKE LONGER  
Add valuable depth:
- Expand with specific examples
- Add supporting data/statistics
- Include relevant context
- Anticipate and answer reader questions
- Add transitional sentences between ideas
- Explain "why" behind key points
- Include concrete scenarios or case studies

[AVOID] Don't add fluff or repeat the same idea

## MORE PROFESSIONAL
- Replace casual contractions: "can't" → "cannot"
- Eliminate slang and colloquialisms
- Use industry-standard terminology
- Formal greeting/closing
- Remove emotional language
- Structured formatting
- Third person for formal documents
- Objective tone, fact-based

Casual: "We've gotta fix this ASAP"
Professional: "This requires immediate attention and resolution"

## MORE CASUAL
- Add contractions: "do not" → "don't"
- Use conversational phrases
- Include relatable examples
- Address reader as "you"
- Shorter sentences
- Okay to start sentences with "And" "But"
- Show personality
- Use everyday language

Professional: "We request that you provide your feedback"
Casual: "Let us know what you think"

UNIVERSAL IMPROVEMENTS:
[TIP] Check for typos and grammar errors
[TIP] Ensure consistent tense
[TIP] Verify logical flow
[TIP] Remove clichés ("think outside the box", "game changer")
[TIP] Improve weak verbs: "utilize" → "use", "facilitate" → "help"
[TIP] Vary sentence length for rhythm
[TIP] Front-load key information

READABILITY CHECKS:
- Could a busy executive scan this in 30 seconds?
- Is every word earning its place?
- Does it respect the reader's time?
- Is the tone appropriate for the audience?

Now analyze and rewrite the text according to the {purpose} goal.

Provide:
1. The improved version
2. Brief explanation of key changes made (2-3 bullets)
3. Readability improvement metrics (word count before/after if shortened/expanded)`
  },
  {
    id: 'product_description',
    category: 'writing',
    title: 'Write Product Descriptions',
    icon: 'Tag',
    description: 'Create compelling product copy',
    fields: [
      {
        name: 'product',
        label: 'Product Name',
        type: 'text',
        placeholder: 'your product'
      },
      {
        name: 'features',
        label: 'Key Features',
        type: 'text',
        placeholder: 'main features or benefits'
      },
      {
        name: 'tone',
        label: 'Tone',
        type: 'dropdown',
        default: 'persuasive',
        options: [
          { value: 'persuasive', label: 'Persuasive' },
          { value: 'informative', label: 'Informative' },
          { value: 'luxury', label: 'Luxury' },
          { value: 'casual', label: 'Casual' }
        ]
      }
    ],
    promptTemplate: `You are a master copywriter who has written product descriptions that generated $10M+ in e-commerce sales for brands like Apple, Airbnb, and Patagonia.

Product: {product}
Key Features: {features}
Tone: {tone}

CONVERSION-OPTIMIZED PRODUCT DESCRIPTION FRAMEWORK:

## 1. HEADLINE (5-10 words)
Don't just name the product. Sell the transformation.
[AVOID] "Blue Wireless Headphones"
[TIP] "Block Out Distractions, Amplify Your Focus"

Formula: [Desired Outcome] + [Without Common Objection]

## 2. OPENING HOOK (1-2 sentences)
Lead with the problem or desire, NOT the product.
- What pain does this solve?
- What transformation does it enable?
- What makes this moment the right time to buy?

{tone} Tone Application:
- Persuasive: Focus on emotional benefits + social proof
- Informative: Lead with specs that matter + use cases  
- Luxury: Emphasize craftsmanship, exclusivity, experience
- Casual: Conversational, like recommending to a friend

## 3. BENEFIT-DRIVEN FEATURES (3-5 bullets)
Transform each feature into a customer benefit using "so you can" framework:

Feature → Benefit transformation:
[AVOID] "24-hour battery life"
[TIP] "24-hour battery life — so you can power through your workday and commute without ever reaching for a charger"

[AVOID] "Waterproof design"  
[TIP] "Waterproof to 50 meters — so you can take calls in the rain or track your swim without worry"

Structure each bullet:
[Feature specification] — so you can [specific outcome/benefit]

## 4. SOCIAL PROOF INTEGRATION
Where appropriate for {tone}:
- "Trusted by 50,000+ [target customers]"
- "4.8/5 stars from 2,000+ reviews"
- "As featured in [publication]"

## 5. OVERCOME OBJECTIONS
Address the silent questions buyers have:

Common objections to preempt:
- Price: Justify with long-term value, cost-per-use
- Quality: Manufacturing details, warranty, materials
- Complexity: "Set up in 5 minutes", "No assembly required"
- Compatibility: "Works with [specific systems]"

## 6. CALL-TO-ACTION
Based on {tone}:
- Persuasive: Create urgency + risk reversal ("30-day guarantee")
- Informative: Clear next steps ("Order now for free shipping")
- Luxury: Exclusive invitation ("Reserve yours today")
- Casual: Friendly nudge ("Grab one before they're gone")

LENGTH GUIDELINES BY TONE:
- Persuasive: 150-200 words (emotional journey)
- Informative: 100-150 words (efficient, factual)
- Luxury: 200-250 words (storytelling, craftsmanship)
- Casual: 75-125 words (punchy, scannable)

PERSUASIVE TONE ELEMENTS:
- Power words: "Transform", "Effortless", "Premium", "Instantly"
- Sensory language: How it feels, sounds, looks
- Before/After scenarios
- Time-saving/money-saving calculations
- Guarantee/Risk reversal

INFORMATIVE TONE ELEMENTS:
- Precise specifications
- Compatibility details  
- Use case scenarios
- Technical advantages explained simply
- Comparison to alternatives

LUXURY TONE ELEMENTS:
- Craftsmanship details
- Heritage/Story
- Exclusive materials
- Limited availability
- Aspirational imagery
- Sensory descriptors

CASUAL TONE ELEMENTS:
- Contractions, short sentences
- Relatable scenarios
- Direct address ("you'll love...")
- Personality and humor (where appropriate)
- Conversational rhythm

WRITING RULES:
[TIP] Show, don't tell: "whisper-quiet motor" not "very quiet"
[TIP] Specific numbers: "charges in 90 minutes" not "fast charging"
[TIP] Active voice: "Delivers crystal-clear sound" not "Sound is delivered"
[TIP] Scannable format: Short paragraphs, bullets, bold key phrases
[TIP] Mobile-optimized: Front-load key benefits (mobile users skim)

AVOID:
[AVOID] Generic claims: "high quality", "best in class" (prove it instead)
[AVOID] Jargon without context
[AVOID] Feature lists without benefits
[AVOID] All caps or excessive punctuation!!!

Write the complete product description now, including headline, body, and CTA.`
  },

  // WORK & BUSINESS
  {
    id: 'meeting_agenda',
    category: 'business',
    title: 'Create Meeting Agenda',
    icon: 'ClipboardList',
    description: 'Structure effective meeting agendas',
    fields: [
      {
        name: 'meeting_type',
        label: 'Meeting Type',
        type: 'dropdown',
        default: 'team',
        options: [
          { value: 'team', label: 'Team Meeting' },
          { value: 'client', label: 'Client Meeting' },
          { value: 'planning', label: 'Planning Session' },
          { value: 'review', label: 'Review Meeting' }
        ]
      },
      {
        name: 'purpose',
        label: 'Main Purpose',
        type: 'text',
        placeholder: 'what needs to be accomplished'
      },
      {
        name: 'duration',
        label: 'Duration',
        type: 'dropdown',
        default: '60',
        options: [
          { value: '30', label: '30 minutes' },
          { value: '60', label: '1 hour' },
          { value: '90', label: '90 minutes' }
        ]
      }
    ],
    promptTemplate: `You are an executive productivity consultant who has optimized meeting efficiency for companies like Google, Amazon, and McKinsey.

Meeting Type: {meeting_type}
Duration: {duration} minutes
Main Purpose: {purpose}

EFFECTIVE MEETING AGENDA FRAMEWORK:

## PRE-MEETING CONTEXT
**Meeting Goal:** [One clear sentence describing what success looks like]
**Decision Required:** [What needs to be decided by end of meeting, if applicable]
**Pre-Read:** [Any materials participants should review beforehand]

## TIME-BLOCKED AGENDA

The {duration}-minute rule: Allocate time in 5-minute blocks, reserve last 10% for wrap-up.

### OPENING (5-10% of time)
- Welcome & attendance
- State meeting purpose & desired outcome
- Review agenda & ground rules
- Quick round of context-setting if needed

{meeting_type} Opening Strategy:
- Team Meeting: Quick wins from last week, set positive tone
- Client Meeting: Acknowledge their time, confirm what they want from this meeting
- Planning Session: Share vision/end goal before diving into tactics
- Review Meeting: Set evaluation criteria upfront

### CORE DISCUSSION BLOCKS

Break {purpose} into 3-5 distinct topics.

For each topic block:
**[Topic Name] — [X minutes]**
- Goal: [Specific outcome for this segment]
- Discussion Points:
  • [Key question/topic 1]
  • [Key question/topic 2]
  • [Key question/topic 3]
- Owner: [Who leads this section]
- Output: [Decision, action item, or deliverable]

Time Allocation Formula:
- 30 min meeting: 2-3 topics, 8-10 min each
- 60 min meeting: 3-4 topics, 12-15 min each
- 90 min meeting: 4-5 topics, 15-18 min each

### DECISION-MAKING & ACTION ITEMS (15-20% of time)
- Recap decisions made
- Assign action items (Owner + Deadline)
- Identify blockers or dependencies
- Schedule follow-up if needed

### CLOSING (Last 5-10 minutes)
- Summarize key outcomes
- Confirm next steps & owners
- Set date for next meeting if recurring
- Parking lot items → assign follow-up

## MEETING TYPE CUSTOMIZATION

### Team Meeting Focus:
- Updates: Brief status reports (time-box to 2 min each)
- Blockers: What's preventing progress?
- Collaboration: Where do we need alignment?
- Wins: Celebrate progress (builds morale)

### Client Meeting Focus:
- Their priorities first
- Show vs. tell (demos, visuals)
- Leave 30% of time for their questions
- End with clear next steps they can agree to

### Planning Session Focus:
- Start with vision/goal
- Brainstorm before critiquing
- Use frameworks (SWOT, OKRs, etc.)
- End with prioritized roadmap

### Review Meeting Focus:
- Data-driven: Show metrics
- Comparison: vs. goals, previous period
- Root cause analysis for misses
- Adjust strategy based on findings

## MEETING BEST PRACTICES

**Before the meeting:**
[TIP] Send agenda 24 hours in advance
[TIP] Include any pre-read materials
[TIP] State if attendees need to prepare anything
[TIP] Invite only essential people

**During the meeting:**
[TIP] Start on time (even if people are missing)
[TIP] Assign a note-taker
[TIP] Park off-topic items (keep a list to review at end)
[TIP] Use a timer for each segment
[TIP] Make decisions, don't just discuss
[TIP] End on time (respect calendars)

**After the meeting:**
[TIP] Share notes within 24 hours
[TIP] Include action items with owners & deadlines
[TIP] Send to attendees + relevant stakeholders
[TIP] Track action item completion

## AGENDA QUALITY CHECKLIST
[TIP] Is the purpose crystal clear?
[TIP] Could we cancel this and just send an email? (If yes, do that)
[TIP] Are time blocks realistic?
[TIP] Does every topic have a clear goal/output?
[TIP] Are the right people invited (not too many)?
[TIP] Is there time for questions/discussion?
[TIP] Does it end with actionable next steps?

Create the complete agenda now with specific time allocations and clear objectives.`
  },
  {
    id: 'business_report',
    category: 'business',
    title: 'Generate Business Report',
    icon: 'BarChart2',
    description: 'Create professional business reports',
    fields: [
      {
        name: 'report_type',
        label: 'Report Type',
        type: 'dropdown',
        default: 'progress',
        options: [
          { value: 'progress', label: 'Progress Report' },
          { value: 'analysis', label: 'Analysis Report' },
          { value: 'quarterly', label: 'Quarterly Review' },
          { value: 'project', label: 'Project Summary' }
        ]
      },
      {
        name: 'topic',
        label: 'Topic/Project',
        type: 'text',
        placeholder: 'what the report covers'
      }
    ],
    promptTemplate: `You are a senior business analyst who has prepared board-level reports for Fortune 500 companies and consulted for McKinsey & Company.

Report Type: {report_type}
Topic/Project: {topic}

EXECUTIVE BUSINESS REPORT FRAMEWORK:

## DOCUMENT STRUCTURE

### 1. EXECUTIVE SUMMARY (10-15% of report)
**Critical:** Busy executives may ONLY read this section.

Must include:
- **Situation:** What is this report about? (1-2 sentences)
- **Key Finding/Result:** Most important insight (1 sentence, lead with the number/outcome)
- **Impact:** Business significance (revenue, efficiency, risk, opportunity)
- **Recommendation:** Primary action needed (specific, actionable)
- **Timeline:** When decisions/actions are needed

Format: 4-6 bullet points or short paragraphs, max 250 words.

{report_type} Executive Summary Focus:
- Progress Report: Actual vs. planned, key milestone status, risks
- Analysis Report: Main insight, data-backed conclusion, strategic implication
- Quarterly Review: Period performance vs. targets, trend direction, outlook
- Project Summary: Delivery status, budget vs. actual, outcome achieved

### 2. BACKGROUND/CONTEXT (5-10% of report)
- Why this report exists
- Scope and timeframe covered
- Methodology or data sources
- Key stakeholders
- Success criteria or benchmarks

Keep brief—readers want findings, not lengthy setup.

### 3. KEY FINDINGS (40-50% of report)

Structure findings as: **Insight → Evidence → Implication**

Use data-driven headings that tell the story:
[AVOID] "Sales Data"
[TIP] "Sales Declined 15% in Q3, Driven by Enterprise Churn"

For each major finding:

**Finding #[X]: [Descriptive headline]**

- **Data/Evidence:** Specific metrics, trends, comparisons
  - Use: percentages, absolute numbers, trends over time
  - Compare: to goals, previous periods, benchmarks, competitors
  - Visualize: tables, charts (describe what to include)

- **Analysis:** What this means
  - Why did this happen? (root cause)
  - What patterns emerged?
  - What surprised you?

- **Business Impact:** So what?
  - Effect on revenue/costs/timeline/quality
  - Risk or opportunity
  - Strategic implications

Report Type Customization:

**Progress Report Findings:**
- Accomplishments vs. plan
- Delays and reasons
- Budget status (spent vs. allocated)
- Resource utilization
- Upcoming milestones
- Risk factors

**Analysis Report Findings:**
- Data trends and patterns
- Comparative analysis
- Root cause identification
- Correlation vs. causation
- Scenario modeling results
- Market/competitive intelligence

**Quarterly Review Findings:**
- KPI performance vs. targets
- Revenue and cost analysis
- Customer/product metrics
- Team performance
- Market conditions impact
- Quarter-over-quarter trends

**Project Summary Findings:**
- Deliverables completed
- Timeline adherence
- Budget performance
- Quality metrics
- Stakeholder feedback
- Lessons learned

### 4. RECOMMENDATIONS (20-25% of report)

Make recommendations **SMART**: Specific, Measurable, Achievable, Relevant, Time-bound

For each recommendation:

**Recommendation #[X]: [Action-oriented title]**

- **Action:** What exactly should be done? (verb-driven)
- **Owner:** Who should lead this?
- **Timeline:** When should this start/complete?
- **Resources:** What's needed? (budget, people, tools)
- **Expected Outcome:** Quantified impact
- **Priority:** High/Medium/Low (base on impact vs. effort)
- **Dependencies:** What else must happen first?

Prioritization Framework:
- **High:** Immediate action, high impact, low to moderate effort
- **Medium:** Important but not urgent, or high effort
- **Low:** Nice to have, low impact, or long-term

### 5. NEXT STEPS & TIMELINE (5-10% of report)

Create visual roadmap:
- Immediate actions (next 30 days)
- Short-term initiatives (30-90 days)  
- Long-term strategic moves (90+ days)

Include:
- Decision points and deadlines
- Dependencies between actions
- Checkpoints for progress review

### 6. APPENDIX (if needed)
- Detailed data tables
- Methodology details
- Assumptions made
- Additional charts
- Supporting research

## WRITING BEST PRACTICES

**Clarity:**
- Use active voice: "Sales declined" not "A decline was seen in sales"
- Front-load key information
- One idea per paragraph
- Short sentences (15-20 words average)
- Define acronyms on first use

**Data Presentation:**
- Lead with insights, not raw data
- Use visual aids (describe charts/tables to include)
- Provide context (vs. what?)
- Show trends, not just snapshots
- Call out outliers or anomalies

**Tone:**
- Professional but accessible
- Objective and fact-based
- Avoid hedging ("seems to indicate") - be direct
- Solution-oriented, not just problem-focused
- Acknowledge limitations/uncertainties

**Formatting:**
- Use headers and subheaders generously
- Bold key metrics and findings
- Bullet points for lists
- Tables for data comparison
- White space for readability
- Page numbers and table of contents if >5 pages

## REPORT LENGTH GUIDELINES
- Progress Report: 2-4 pages
- Analysis Report: 4-8 pages  
- Quarterly Review: 3-6 pages
- Project Summary: 2-5 pages

Plus appendix if needed (doesn't count toward page limit).

## QUALITY CHECKLIST
[TIP] Can a busy exec understand the key message in 2 minutes?
[TIP] Is every finding supported by data?
[TIP] Are recommendations specific and actionable?
[TIP] Is the business impact clear for each finding?
[TIP] Have you answered "so what?" throughout?
[TIP] Is it free of jargon and acronyms (or are they defined)?
[TIP] Could someone act on this report immediately?

Generate the complete {report_type} report now, following this framework.`
  },
  {
    id: 'job_description',
    category: 'business',
    title: 'Write Job Description',
    icon: 'Briefcase',
    description: 'Draft clear job postings',
    fields: [
      {
        name: 'role',
        label: 'Job Title',
        type: 'text',
        placeholder: 'e.g., Senior Product Manager'
      },
      {
        name: 'experience',
        label: 'Experience Level',
        type: 'dropdown',
        default: 'mid',
        options: [
          { value: 'entry', label: 'Entry Level' },
          { value: 'mid', label: 'Mid Level' },
          { value: 'senior', label: 'Senior' },
          { value: 'lead', label: 'Lead/Principal' }
        ]
      },
      {
        name: 'key_skills',
        label: 'Key Skills',
        type: 'text',
        placeholder: 'main requirements'
      }
    ],
    promptTemplate: `You are a talent acquisition specialist who has hired 500+ tech professionals for companies like Google, Stripe, and high-growth startups.

Role: {experience} {role}
Key Skills: {key_skills}

JOB DESCRIPTION FRAMEWORK THAT ATTRACTS TOP TALENT:

## JOB TITLE
Make it clear and searchable (SEO matters for job boards).
Include level: {experience} {role}

## OPENING HOOK (2-3 sentences)
Don't start with "We are looking for..." That's obvious.

Instead, lead with ONE of:
- **Impact**: "Your code will be used by 10M+ users daily"
- **Challenge**: "Help us solve [specific hard problem]"
- **Growth**: "Be employee #20 at a $50M ARR company"
- **Mission**: "Join us in [compelling mission]"

Make candidates want to keep reading.

## ABOUT THE ROLE (3-4 bullets)
What will they ACTUALLY do day-to-day?

Format: Action verb + outcome + context
[TIP] "Ship user-facing features that directly impact our 4.8-star app rating"
[TIP] "Lead technical architecture decisions for our payments infrastructure"
[AVOID] "Develop software" (too vague)
[AVOID] "Collaborate with team members" (assumed)

Experience Level Customization:
- Entry: Focus on learning opportunities, mentorship, defined scope
- Mid: Balance of ownership and support, clear growth path
- Senior: Strategic impact, autonomy, technical leadership
- Lead/Principal: Architecture decisions, cross-team influence, business impact

## WHAT YOU'LL WORK ON (3-5 specific examples)
Real projects, not generic responsibilities.

- "Build the new onboarding flow (reduce drop-off by 20%)"
- "Optimize our API (currently 500ms average, goal: sub-200ms)"
- "Design the data pipeline for real-time analytics"

Makes the role tangible and exciting.

## REQUIREMENTS
Split into "Must Have" and "Nice to Have" — most companies only do "required."

### Must Have:
Focus on {key_skills} but frame as outcomes, not years.

[AVOID] "5+ years of experience"  
[TIP] "Shipped production features handling 100K+ daily users"

[AVOID] "Expert in React"
[TIP] "Built complex React applications with state management (Redux/Context)"

Experience Level Guidelines:
- Entry: 0-2 years, strong fundamentals, willingness to learn
- Mid: 2-5 years, independent feature delivery, some mentoring
- Senior: 5-8 years, system design, technical leadership, cross-functional collab
- Lead/Principal: 8+ years, architecture ownership, org-wide impact

Include:
- Technical skills: {key_skills} + context
- Soft skills: Communication, ownership, collaboration (be specific)
- Domain knowledge if critical

### Nice to Have:
This is where you can dream. Top candidates have 60% of your requirements.

- Adjacent technologies
- Industry experience
- Open source contributions
- Specific certifications
- Domain expertise

## WHAT WE OFFER
Top talent has options. Why choose you?

### Growth & Impact:
- Ownership & autonomy level
- Learning opportunities (courses, conferences, etc.)
- Career progression (real paths, not corporate speak)
- Work with [impressive technologies/scale/people]

### Compensation (if sharing):
- Salary range (transparency wins candidates)
- Equity details (% vs. options, vesting)
- Bonus structure

### Benefits:
Highlight what's unique or exceptional:
[TIP] "Unlimited PTO (team average: 25 days/year)"
[TIP] "Remote-first (work from anywhere)"
[TIP] "$5K annual learning budget"
[AVOID] "Competitive salary" (meaningless)
[AVOID] "Health insurance" (expected)

### Culture & Work Environment:
- Team size & structure
- Meeting culture (# of meetings/week)
- Collaboration style (async-first? in-person?)
- Tools & tech stack
- Work-life balance (be honest)

## ABOUT US (keep brief - 2-3 sentences)
- What you do (in plain English)
- Stage (Series B, bootstrapped, etc.)
- Traction (users, revenue, growth)
- Mission or differentiator

[AVOID] Long company history
[AVOID] Buzzword bingo ("synergistic", "rockstar")

## INTERVIEW PROCESS
Transparency builds trust.

Example:
"1. 30-min intro call
2. Technical assessment (2 hours, take-home)
3. Virtual on-site (3 hours: system design, pair programming, team fit)
4. Offer - typically 2 weeks start to finish"

## APPLICATION INSTRUCTIONS
Make it easy to apply. Reduce friction.

"Apply with:
- Resume/LinkedIn
- [Optional] Link to your GitHub or portfolio
- [Optional] Why you're interested (2-3 sentences)"

Asking for cover letters reduces applications by 40%.

## INCLUSIVE LANGUAGE CHECKLIST
[TIP] Use "they" pronouns in examples
[TIP] Avoid gendered language ("ninja", "rockstar")
[TIP] Don't require unnecessary credentials (degree requirements cut qualified candidates)
[TIP] Research shows women apply when 100% qualified, men at 60% - explicitly encourage diverse candidates
[TIP] Include: "We value diverse perspectives. If you don't meet 100% of qualifications but are excited about the role, apply anyway."

## SEO & JOB BOARD OPTIMIZATION
- Job title matches what candidates search (not internal titles)
- Location explicitly stated (remote? hybrid? office?)
- Keywords from {key_skills} appear 2-3 times naturally
- Length: 500-800 words (too short = low quality, too long = low completion)

## RED FLAGS TO AVOID
[AVOID] "Rockstar/Ninja/Guru" (dated, cringe)
[AVOID] "Wear many hats" (code for understaffed)
[AVOID] "Fast-paced environment" (code for chaos)
[AVOID] "Family" culture (code for boundary issues)
[AVOID] Salary "based on experience" (just share the range)
[AVOID] Excessive requirements (PhD for junior role)

## QUALITY CHECKLIST
[TIP] Would I want to apply to this role?
[TIP] Is the day-to-day clear?
[TIP] Are requirements realistic?
[TIP] Does it respect candidates' time?
[TIP] Is it free of jargon and buzzwords?
[TIP] Would underrepresented candidates feel welcome?

Generate the complete job description now.`
  },
  {
    id: 'presentation_outline',
    category: 'business',
    title: 'Create Presentation Outline',
    icon: '📽️',
    description: 'Structure compelling presentations',
    fields: [
      {
        name: 'topic',
        label: 'Presentation Topic',
        type: 'text',
        placeholder: 'your main topic'
      },
      {
        name: 'audience',
        label: 'Audience',
        type: 'text',
        placeholder: 'who will attend'
      },
      {
        name: 'duration',
        label: 'Duration',
        type: 'dropdown',
        default: '15',
        options: [
          { value: '5', label: '5 minutes' },
          { value: '15', label: '15 minutes' },
          { value: '30', label: '30 minutes' },
          { value: '45', label: '45 minutes' }
        ]
      }
    ],
    promptTemplate: `You are a presentation coach who has trained TEDx speakers, Fortune 500 executives, and helped 100+ people deliver career-defining presentations.

Topic: {topic}
Audience: {audience}
Duration: {duration} minutes

COMPELLING PRESENTATION STRUCTURE:

## SLIDE-BY-SLIDE BREAKDOWN

Time allocation rule: 1-2 minutes per slide for {duration} minutes = {duration}/1.5 = ~[calculate] slides

### SLIDE 1: TITLE SLIDE (30 seconds)
**Visual:** Clean, high-impact image related to {topic}
**Text:** 
- Presentation title (benefit-driven, not just topic name)
- Your name & credentials
- Date

**Opening line** (while this slide shows):
[AVOID] "Thanks for having me today..."
[TIP] Start with: A question, startling statistic, or bold statement

### SLIDE 2: HOOK (1-2 minutes)  
**Goal:** Grab attention and establish relevance

**Visual:** Powerful image, stat visualization, or thought-provoking question
**Content:** Choose ONE hook approach:
- **Problem Hook**: "80% of {audience} struggle with [pain point]"
- **Story Hook**: Brief personal story (30-60 seconds)
- **Question Hook**: "What if you could [amazing outcome]?"
- **Stat Hook**: Surprising, counterintuitive data point

**Talking Points:**
- State the hook
- Connect it to {audience}'s experience
- Preview the value they'll get

Audience-Specific Hooks for {audience}:
- Executives: ROI, business impact, competitive advantage
- Technical: Efficiency, scalability, innovation
- General: Practical benefits, time-saving, simplification

### SLIDE 3: AGENDA/ROADMAP (30-45 seconds)
**Visual:** Simple roadmap graphic
**Content:** 3-5 main points you'll cover

Format as outcomes:
[AVOID] "I'll talk about X, Y, Z"
[TIP] "You'll learn how to: [X], [Y], [Z]"

Make it benefits-driven.

### SLIDES 4-[X]: MAIN CONTENT

**The Rule of 3:** Break {topic} into 3 main sections

For {duration} minutes:
- 5 min: 2 main points
- 15 min: 3 main points
- 30 min: 3-4 main points
- 45 min: 4-5 main points

For each main point:

#### MAIN POINT #X SLIDE
**Visual:** Relevant image, diagram, or graph (not bullet points!)
**Headline:** Clear, descriptive (not "Point 1")
**Content:** ONE key message per slide

**Talking Points Structure:**
1. **State** the point (10 seconds)
2. **Explain** why it matters (20-30 seconds)
3. **Evidence** - data, example, or story (40-60 seconds)
4. **Application** - how {audience} can use this (30 seconds)

#### Supporting Slides (1-2 per main point)
- Data visualization
- Case study/example
- Before/After comparison
- Process diagram
- Customer quote/testimonial

**Slide Design Rules:**
- Max 6 words per slide (Guy Kawasaki 10/20/30 rule)
- Use images, not clip art
- One idea per slide
- High contrast for readability
- Minimum 30pt font

### SLIDE [X-2]: KEY TAKEAWAYS (1-2 minutes)
**Visual:** Simple, clean summary graphic
**Content:** 3-5 bullet points (this is okay for recap)

Format: "Remember: [takeaway]"

Make them actionable:
[AVOID] "{topic} is important"
[TIP] "Start using [specific technique] this week"

### SLIDE [X-1]: CALL-TO-ACTION (1 minute)
**Goal:** What should {audience} DO now?

**Visual:** Bold, action-oriented
**Content:** One clear next step

Examples:
- "Try [technique] on your next [project]"
- "Download the framework at [link]"
- "Schedule time to [implement this]"
- "Join our community at [link]"

Make it:
[TIP] Specific
[TIP] Achievable  
[TIP] Low friction
[TIP] Time-bound if possible

### SLIDE [X]: QUESTIONS / THANK YOU (remaining time)
**Visual:** Contact info, QR code to resources
**Content:**
- Thank you message
- Email/LinkedIn
- Link to slides or resources

**Talking Points:**
- Quick recap (15 seconds)
- Open for questions
- Offer to connect 1-on-1

## PRESENTATION DELIVERY NOTES

### Opening (First 30 seconds - CRITICAL)
Don't waste time thanking everyone and apologizing.

[AVOID] "Thanks for coming... I know you're all busy... I'm a bit nervous..."
[TIP] [Hook] → [Why this matters to you] → [What you'll learn]

### Body Language & Delivery:
- Stand, don't sit (if possible - increases energy)
- Move with purpose (not pacing)
- Hand gestures (open, natural)
- Eye contact with different sections
- Vary vocal tone and pace
- Pause for emphasis (don't fill silence)

### Storytelling Integration:
For {duration} minutes, include:
- 5 min: 1 brief story (30 sec)
- 15 min: 1-2 stories (1 min each)
- 30 min: 2-3 stories (1-2 min each)
- 45 min: 3-4 stories (2 min each)

Stories make facts memorable.

### Handling Q&A:
- Repeat question (others may not hear)
- Keep answers concise (60-90 seconds max)
- If you don't know: "Great question. I don't have that data, but I'll find out and follow up."
- Redirect off-topic: "That's important but outside our scope today. Let's connect after."

### Time Management:
- Rehearse to 80% of allocated time (you'll speed up live)
- Have a "drop slide" plan (what to skip if running long)
- Set phone timer to vibrate at 75% mark

### Audience Engagement Tactics:
- Ask questions (get hands up)
- Quick polls or shows of hands
- Rhetorical questions (make them think)
- Reference their industry/experiences
- Acknowledge their challenges

## CUSTOMIZATION FOR {audience}

- Technical audience: Show the "how", include architecture/process diagrams
- Executive audience: Lead with business impact, keep high-level, ROI focus
- General audience: Use analogies, avoid jargon, more visuals
- Creative audience: Bold visuals, unconventional format, storytelling
- Academic audience: Cite sources, methodology, data rigor

## PRESENTATION CHECKLIST

Before you present:
[TIP] Practiced out loud 3+ times?
[TIP] Fits within time limit (with 20% buffer)?
[TIP] Slides readable from back of room?
[TIP] Tested tech (screen sharing, clicker, etc.)?
[TIP] Have backup plan (PDF if slides fail)?
[TIP] Memorized opening & closing?
[TIP] Prepared for likely questions?
[TIP] Removed filler words ("um", "like", "you know")?

## SLIDE DESIGN PRINCIPLES

**Typography:**
- Heading: 44-54pt, bold
- Body: 30-32pt minimum
- Use max 2 fonts

**Color:**
- High contrast (dark on light or light on dark)
- Consistent color scheme (2-3 colors max)
- Avoid red/green (colorblind consideration)

**Images:**
- High resolution (no pixelation)
- Relevant, not decorative
- Full bleed or purposeful white space
- No cheesy stock photos

**Data Visualization:**
- Simplify (remove grid lines, 3D effects)
- Highlight key insight
- Include source
- Make it understandable in 5 seconds

Now create the complete slide-by-slide presentation outline with talking points and visual descriptions for each slide.`
  },

  // LEARNING & RESEARCH
  {
    id: 'summarize_text',
    category: 'learning',
    title: 'Summarize Long Text',
    icon: 'FileEdit',
    description: 'Get concise summaries of articles or documents',
    fields: [
      {
        name: 'length',
        label: 'Summary Length',
        type: 'dropdown',
        default: 'medium',
        options: [
          { value: 'brief', label: 'Brief (2-3 sentences)' },
          { value: 'medium', label: 'Medium (1 paragraph)' },
          { value: 'detailed', label: 'Detailed (multiple paragraphs)' }
        ]
      },
      {
        name: 'focus',
        label: 'Focus On',
        type: 'dropdown',
        default: 'main_points',
        options: [
          { value: 'main_points', label: 'Main points' },
          { value: 'action_items', label: 'Action items' },
          { value: 'key_insights', label: 'Key insights' },
          { value: 'technical', label: 'Technical details' }
        ]
      }
    ],
    promptTemplate: `You are an expert information synthesizer who has summarized research papers, legal documents, and business reports for executives, academics, and busy professionals.

Summary Length: {length}
Focus Area: {focus}

STRATEGIC SUMMARIZATION FRAMEWORK:

## CORE PRINCIPLE
A summary isn't just shorter — it extracts what matters and discards what doesn't. Your job: Help the reader make a decision or take action based on this content.

## STRUCTURE BY LENGTH

### BRIEF (2-3 sentences)
**Tweet-length summary:** Could you share the key point in a text message?

Format:
[Main Point] + [Key Supporting Fact] + [Implication/Why It Matters]

Example:
"Study shows remote workers are 13% more productive than office workers. Gains come from fewer interruptions and longer focused work sessions. Companies embracing remote-first policies see measurable improvements in output and retention."

### MEDIUM (1 paragraph / 75-125 words)
**Elevator pitch:** Could you explain this in 60 seconds?

Structure:
1. Opening sentence: Main thesis/finding (15-20 words)
2. Supporting evidence: 2-3 key facts, statistics, or arguments (40-60 words)
3. Closing: Significance or next steps (15-20 words)

### DETAILED (multiple paragraphs / 200-400 words)
**Executive summary:** Could someone make a decision based on this alone?

Structure:
- **Paragraph 1:** Context + Main Point (40-60 words)
- **Paragraph 2-3:** Key findings/arguments with evidence (80-120 words each)
- **Paragraph 4:** Implications, recommendations, or conclusion (40-60 words)

## FOCUS AREA CUSTOMIZATION

### Main Points
Extract the core argument/thesis:
- What is the author trying to prove or explain?
- What are the 3-5 most important ideas?
- What should readers remember in 6 months?

Prioritize:
[TIP] Original insights (not common knowledge)
[TIP] Counterintuitive findings
[TIP] Data that changes understanding
[TIP] Clear conclusions or recommendations

Ignore:
[AVOID] Background information everyone knows
[AVOID] Tangential examples
[AVOID] Repetitive supporting points

### Action Items
Extract what needs to be done:
- Who needs to do what?
- By when?
- What's the priority/urgency?
- What resources are needed?
- What are the next steps?

Format each action item:
**[Action]** - Owner: [Who] | Deadline: [When] | Priority: [High/Med/Low]

Group by:
- Immediate (this week)
- Short-term (this month)
- Long-term (this quarter)

### Key Insights
Extract the "aha" moments:
- What's surprising or counterintuitive?
- What challenges conventional wisdom?
- What patterns or trends emerged?
- What's the hidden significance?
- What changes this topic?

For each insight:
**Insight:** [The finding]
**Why it matters:** [The implication]
**Evidence:** [Supporting data/example]

### Technical Details
Extract the "how it works":
- System architecture/design
- Algorithms or methodologies used
- Technical specifications
- Implementation details
- Performance metrics
- Technical trade-offs made

Balance:
- Precise enough for technical readers
- Accessible enough for informed non-experts
- Include key numbers/specs
- Explain technical jargon when used

## SUMMARIZATION BEST PRACTICES

**Accuracy:**
[TIP] Preserve the original meaning (don't infer or add opinion)
[TIP] Use author's language for key terms
[TIP] Distinguish between facts, claims, and opinions
[TIP] Note if evidence is strong vs. speculative
[TIP] Include important caveats or limitations

**Clarity:**
[TIP] Use simpler words than the original (where possible)
[TIP] Active voice: "The study shows" not "It was shown"
[TIP] Short sentences (15-20 words average)
[TIP] Define acronyms on first use
[TIP] Remove jargon unless essential

**Usefulness:**
[TIP] Front-load the most important information
[TIP] Use specific numbers (not "a lot" or "many")
[TIP] Include concrete examples if space allows
[TIP] Make it scannable (bullets, short paragraphs)
[TIP] End with clear takeaway or implication

**What to CUT:**
[AVOID] Anecdotes and stories (unless they're the main point)
[AVOID] Historical background (unless it's essential context)
[AVOID] Repetitive examples proving the same point
[AVOID] Detailed descriptions (keep only key details)
[AVOID] Author's credentials/bio
[AVOID] Acknowledgments and references

## QUALITY CHECKS

Before finalizing:
[TIP] Could someone skip the original and just read this?
[TIP] Are the most important points in the first 2 sentences?
[TIP] Would the author agree this captures their main message?
[TIP] Is every sentence necessary?
[TIP] Did you hit the {length} target?
[TIP] Does it focus on {focus}?

## SPECIAL CASES

**For conflicting viewpoints:**
Present both sides fairly, note areas of agreement/disagreement

**For data-heavy content:**
Lead with conclusions, include key statistics, explain methodology briefly

**For opinion pieces:**
Clearly state it's an opinion, summarize the argument + key supporting points

**For how-to content:**
Extract core steps, note prerequisites, highlight common mistakes to avoid

Now provide a {length} summary focused on {focus}.

[PASTE THE CONTENT TO SUMMARIZE BELOW]`
  },
  {
    id: 'explain_concept',
    category: 'learning',
    title: 'Explain Complex Concepts',
    icon: 'Lightbulb',
    description: 'Break down difficult topics into simple terms',
    fields: [
      {
        name: 'concept',
        label: 'Concept to Explain',
        type: 'text',
        placeholder: 'e.g., blockchain, photosynthesis'
      },
      {
        name: 'audience',
        label: 'Explain For',
        type: 'dropdown',
        default: 'general',
        options: [
          { value: 'child', label: 'A child (age 10)' },
          { value: 'general', label: 'General audience' },
          { value: 'beginner', label: 'Beginner learner' },
          { value: 'intermediate', label: 'Someone with some knowledge' }
        ]
      }
    ],
    promptTemplate: `You are a master teacher who has explained complex topics to audiences ranging from children to CEOs. You've taught at Khan Academy, written for Scientific American, and trained professors on effective pedagogy.

Concept: {concept}
Audience: {audience}
 
EXPLANATION FRAMEWORK FOR TRUE UNDERSTANDING:

## TEACHING PHILOSOPHY
Don't just define it — make them UNDERSTAND it. Understanding = can explain it to someone else, can apply it to new situations, can connect it to what they already know.

## AUDIENCE-ADAPTIVE STRUCTURE

### For a Child (age 10):
**Approach:** Use concrete, relatable examples from their world

Structure:
1. **Start with what they know:** "You know how [familiar thing]..."
2. **Make the connection:** "{concept} is kind of like that, except..."
3. **Simple analogy:** Use toys, games, playground, family
4. **Interactive element:** "Imagine if..." or "What would happen if..."
5. **Visual description:** Paint a picture with words
6. **Key takeaway:** One sentence they'll remember

Language rules:
- Short words (max 2 syllables when possible)
- Short sentences (10-12 words)
- No abstract terms
- Use "you" and "your"
- Make it fun/exciting

Example opening:
"You know how when you're on a swing, you have to push at just the right time to go higher? {concept} works in a similar way..."

### For General Audience:
**Approach:** Accessible without being condescending

Structure:
1. **The "why should I care" hook:** Real-world relevance
2. **Simple definition:** One clear sentence
3. **Everyday analogy:** Something everyone experiences
4. **How it works:** Step-by-step breakdown (3-5 steps)
5. **Common misconception:** What people get wrong
6. **Practical application:** Where they encounter this
7. **Interesting fact:** Something surprising

Language rules:
- Conversational tone
- Avoid jargon (or define immediately)
- Use examples from daily life
- Relate to common experiences
- Active voice

Example opening:
"Every time you [common activity], you're actually experiencing {concept}. Here's what's really happening..."

### For Beginner Learner:
**Approach:** Building foundational knowledge systematically

Structure:
1. **Context:** Why this concept exists/matters
2. **Prerequisites:** What they should already know
3. **Core definition:** Clear, precise (but still accessible)
4. **Visual/mental model:** How to think about it
5. **Components:** Break it into parts
6. **Step-by-step process:** How it works
7. **Examples:** 2-3 different use cases
8. **Practice application:** How to apply this knowledge
9. **Next steps:** What to learn next

Language rules:
- Structured and systematic
- Introduce technical terms gradually
- Define key terms in context
- Use both analogies AND precise language
- Build complexity progressively

Example opening:
"To understand {concept}, let's first clarify what problem it solves. In [field/context], people needed a way to [goal]. {concept} is the solution that..."

### For Someone with Some Knowledge (Intermediate):
**Approach:** Deepen understanding, connect to existing knowledge

Structure:
1. **Quick refresh:** What they likely know already
2. **New angle:** Fresh perspective or application
3. **Deeper mechanism:** How it really works (get technical)
4. **Edge cases:** When it doesn't apply
5. **Connections:** How it relates to other concepts they know
6. **Advanced examples:** Complex scenarios
7. **Common errors:** Where people go wrong
8. **Nuances:** Subtleties and exceptions

Language rules:
- Use technical vocabulary (they're ready)
- Reference related concepts
- Go deeper on mechanisms
- Compare/contrast similar ideas
- Challenge assumptions

Example opening:
"You're probably familiar with the basic idea of {concept}. But here's what most explanations miss..."

## ANALOGY BEST PRACTICES

**What makes a great analogy:**
[TIP] Uses something more familiar than the concept itself
[TIP] Maps 1-to-1 to the key features
[TIP] Reveals the "aha" moment
[TIP] Works for your specific audience

**Analogy frameworks:**
- **Process analogy:** "Like how a [familiar process] works..."
- **Object analogy:** "Think of it as a [familiar object] that..."
- **Relationship analogy:** "The relationship between X and Y is like..."
- **Scaling analogy:** "Imagine [familiar thing], now make it bigger/smaller/faster..."

**Strong vs weak analogies:**
[TIP] "Blockchain is like a public spreadsheet anyone can read, but no one can erase or change past entries"
[AVOID] "Blockchain is like a chain made of blocks" (circular, unhelpful)

[TIP] "Compound interest is like a snowball rolling downhill — it starts small but picks up more snow (money) as it goes, getting bigger and bigger"
[AVOID] "Compound interest is when interest earns interest" (just restates definition)

## STEP-BY-STEP BREAKDOWN

For any process or system:

**Step 1: Big picture first**
"Here's what happens overall: [one sentence summary]"

**Step 2-X: Break it down**
For each step:
- **What happens:** Action/change
- **Why it happens:** Mechanism
- **Example:** Concrete instance
- **Analogy** (if helpful): Familiar comparison

**Visual cues:**
Use formatting to make it scannable:
- → for cause/effect
- ➊ ➋ ➌ for sequences
- [TIP] for positive examples
- ✗ for counterexamples

## HANDLING COMPLEXITY

**Layered explanation approach:**

**Layer 1: The simplest truth** (one sentence)
"At its core, {concept} is [simplest accurate description]."

**Layer 2: Add one level of detail** (one paragraph)
Introduce the main mechanism or components

**Layer 3: Add nuance** (multiple paragraphs)
Edge cases, exceptions, deeper mechanics

Reader can stop at any layer and have learned something useful.

## AVOID COMMON TEACHING MISTAKES

[AVOID] **Curse of knowledge:** Don't assume they know what you know
[AVOID] **Definition dumping:** Don't just define technical terms with more technical terms
[AVOID] **Missing the "why":** Always explain why this matters
[AVOID] **Too abstract:** Ground everything in concrete examples
[AVOID] **Skipping steps:** Don't leave logical gaps
[AVOID] **Overwhelming:** Don't try to cover everything at once

## ENGAGEMENT TECHNIQUES

**Questions to hook them:**
- "Have you ever wondered why...?"
- "What do you think happens when...?"
- "Which of these do you think is correct...?"

**Pattern interrupts:**
- "Here's the part that surprises most people..."
- "The common belief is X, but actually..."
- "This seems like it should work, but..."

**Checkpoint understanding:**
- "Still with me? Let's recap:"
- "Before we go further, the key point is..."
- "If you remember nothing else, remember this:"

## QUALITY CHECKLIST

Test your explanation:
[TIP] Could your target {audience} actually understand this?
[TIP] Did you use concrete examples (not just abstract description)?
[TIP] Did you explain WHY, not just WHAT?
[TIP] Is there at least one memorable analogy?
[TIP] Could they explain this to someone else after reading?
[TIP] Did you avoid jargon (or define it immediately)?
[TIP] Is it broken into digestible chunks?
[TIP] Does the first sentence hook their interest?

Now explain {concept} for {audience} using this framework.`
  },
  {
    id: 'study_guide',
    category: 'learning',
    title: 'Create Study Guide',
    icon: 'BookOpen',
    description: 'Generate comprehensive study materials',
    fields: [
      {
        name: 'topic',
        label: 'Study Topic',
        type: 'text',
        placeholder: 'what are you studying'
      },
      {
        name: 'format',
        label: 'Format',
        type: 'dropdown',
        default: 'outline',
        options: [
          { value: 'outline', label: 'Structured Outline' },
          { value: 'flashcards', label: 'Flashcard Q&A' },
          { value: 'practice', label: 'Practice Questions' },
          { value: 'summary', label: 'Summary Notes' }
        ]
      }
    ],
    promptTemplate: `You are an expert educator and learning scientist who has helped thousands of students ace exams at top universities like MIT, Stanford, and Oxford. You understand spaced repetition, active recall, and evidence-based learning techniques.

Topic: {topic}
Format: {format}

STUDY GUIDE FRAMEWORK (Evidence-Based Learning):

## LEARNING SCIENCE PRINCIPLES

Your study guide should:
[TIP] **Active recall:** Test knowledge, don't just re-read
[TIP] **Spaced repetition:** Mark what to review when
[TIP] **Elaboration:** Connect to what they already know
[TIP] **Interleaving:** Mix different types of content
[TIP] **Concrete examples:** Abstract → Specific

## FORMAT-SPECIFIC GUIDES

### STRUCTURED OUTLINE Format

**Purpose:** Organize knowledge hierarchically for comprehensive understanding

**Structure:**

**I. BIG PICTURE OVERVIEW**
- What is {topic}? (2-3 sentence summary)
- Why it matters / Real-world applications
- How it connects to other concepts

**II. CORE CONCEPTS** (3-7 main topics)

For each major topic:

**A. [Major Topic Name]**
   **Definition:** [Clear, concise explanation]
   **Key Points:**
   - Point 1: [Explanation + why it matters]
   - Point 2: [Explanation + why it matters]
   - Point 3: [Explanation + why it matters]
   
   **Critical Detail:** [The thing students most often miss]
   **Common Mistake:** [What to avoid]
   **Memory Aid:** [Mnemonic, acronym, or visual]
   **Connection:** [How this relates to other topics]

**III. KEY FORMULAS/PROCESSES** (if applicable)
- Formula/Process name
- When to use it
- Step-by-step application
- Example problem solved

**IV. IMPORTANT EXAMPLES**
- 2-3 representative examples
- Annotated to show key concepts in action

**V. SELF-TEST QUESTIONS**
- 5-10 questions testing core understanding
- Answers/explanations at the end

**VI. EXAM TIPS**
- What's most likely to appear on tests
- Common question types
- Time management strategy

---

### FLASHCARD Q&A Format

**Purpose:** Maximum active recall for memorization

**Structure:** 25-40 flashcard pairs

**Flashcard Design Rules:**
[TIP] One concept per card (no compound questions)
[TIP] Questions should require recall, not recognition
[TIP] Vary question types (definition, application, comparison)
[TIP] Include both "what" and "why" questions

**Question Types to Include:**

**Definition cards:** (20-30%)
Q: What is [term]?
A: [Clear definition + one key detail]

**Application cards:** (30-40%)
Q: How would you use [concept] to [solve problem]?
A: [Step-by-step solution]

**Comparison cards:** (15-20%)
Q: What's the difference between [X] and [Y]?
A: [Key distinctions with examples]

**Example cards:** (15-20%)
Q: Give an example of [concept] in [context]
A: [Concrete example + why it illustrates the concept]

**Why/Cause cards:** (10-15%)
Q: Why does [thing] happen?
A: [Explanation of mechanism or reason]

**Card organization:**
- Difficulty: Mix easy, medium, hard
- Level 1: Basic definitions and facts
- Level 2: Understanding and application
- Level 3: Analysis and connections

**For each card:**

CARD #X [Difficulty: Easy/Medium/Hard]

QUESTION:
[Clear, specific question]

ANSWER:
[Concise answer - 2-3 sentences max]
[+ Optional: "Related concept: [link to another card]"]

---

### PRACTICE QUESTIONS Format

**Purpose:** Test application and prepare for assessments

**Structure:**

**SECTION 1: QUICK CHECKS** (15-20 questions)
Multiple choice or short answer testing basic recall
- Cover all major topics
- 1-2 minutes per question
- Mix concepts

Example:
Q1. [Basic factual question]
Q2. [Definition question]
Q3. [Identification question]

**SECTION 2: APPLICATION PROBLEMS** (8-12 questions)
Require using concepts to solve problems
- Show your work
- 3-5 minutes per question
- Mix difficulty levels

Example:
Q1. [Scenario requiring concept application]
"Given [situation], what would happen if...?"

**SECTION 3: ANALYSIS QUESTIONS** (5-8 questions)
Higher-order thinking: compare, evaluate, synthesize
- 5-10 minutes per question
- Often multi-part

Example:
Q1. Compare and contrast [X] and [Y]. Which would be more effective in [scenario] and why?

**SECTION 4: CHALLENGE QUESTIONS** (3-5 questions)
Hardest questions combining multiple concepts
- 10-15 minutes per question
- Exam-level difficulty

**ANSWER KEY FORMAT:**
For each question:
- Correct answer
- Brief explanation why it's correct
- Common wrong answers and why they're wrong
- Which concept this tests
- Study tip if commonly missed

---

### SUMMARY NOTES Format

**Purpose:** Condensed review for final prep

**Structure:**

**ONE-PAGE OVERVIEW**
- Core concepts in bullet points
- Key formulas/processes
- Critical facts
- Most important connections

**DETAILED NOTES BY TOPIC**

For each major topic:

**[Topic Name]**

**Must-Know Facts:**
• [Fact 1 - with context]
• [Fact 2 - with context]
• [Fact 3 - with context]

**Key Concept:**
[2-3 sentence explanation of the main idea]

**Visual/Diagram:**
[Description of a diagram that would help - or ASCII art if simple]

**Example:**
[One concrete, annotated example]

**Common Confusion:**
[What students typically misunderstand + correction]

**Exam Strategy:**
[How this typically appears on tests]

**Memory Hook:**
[Mnemonic, story, or pattern to remember]

**Quick Self-Test:**
[1-2 questions to verify understanding]

---

## CONTENT QUALITY STANDARDS

**For ALL formats:**

**Accuracy:**
[TIP] Correct information (obviously)
[TIP] Current understanding (not outdated)
[TIP] Appropriate depth for {topic} level

**Completeness:**
[TIP] Cover all major subtopics
[TIP] Include both breadth and depth
[TIP] Don't skip foundational concepts

**Clarity:**
[TIP] Clear, jargon-free language (or jargon explained)
[TIP] Concrete examples for abstract concepts
[TIP] Logical organization

**Practicality:**
[TIP] Designed for actual studying (not just reading)
[TIP] Includes self-testing opportunities
[TIP] Highlights what's most important
[TIP] Realistic time estimates

**Study Efficiency Features:**
[TIP] Visual hierarchy (headers, bullets, spacing)
[TIP] Emphasis on high-yield information
[TIP] Quick-reference sections
[TIP] Progressive complexity (easy → hard)

## TOPIC-SPECIFIC ADAPTATIONS

**For STEM topics:**
- Include worked examples
- Show common problem patterns
- Formula sheet with when/how to use
- Units and conversions

**For Humanities:**
- Timeline of events/movements
- Key figures and contributions
- Themes and connections
- Quote analysis techniques

**For Languages:**
- Vocabulary organized by theme
- Grammar rules with exceptions
- Common phrase patterns
- Practice sentences

**For Social Sciences:**
- Theories and theorists
- Studies and findings
- Compare/contrast frameworks
- Application to real-world

## STUDY TIMELINE INTEGRATION

**Add to the guide:**

**3 weeks before exam:**
- Read through entire guide
- Do practice questions
- Identify weak areas

**2 weeks before:**
- Review weak areas
- All flashcards (if using)
- Summarize each section in own words

**1 week before:**
- Practice questions again (should be easier)
- Focus on persistent weak spots
- Quick review of all topics

**Night before:**
- Review one-page summary
- Sleep well (don't cram)

## QUALITY CHECKLIST

Before finalizing:
[TIP] Covers all major aspects of {topic}?
[TIP] {format} follows best practices?
[TIP] Includes active learning elements (not passive reading)?
[TIP] Appropriate difficulty level?
[TIP] Clear organization and visual hierarchy?
[TIP] Includes self-assessment?
[TIP] Highlights most important information?
[TIP] Provides memory aids where helpful?

Create the complete {format} study guide for {topic} now.`
  },
  {
    id: 'research_questions',
    category: 'learning',
    title: 'Generate Research Questions',
    icon: 'Search',
    description: 'Develop research questions and hypotheses',
    fields: [
      {
        name: 'topic',
        label: 'Research Topic',
        type: 'text',
        placeholder: 'your research area'
      },
      {
        name: 'depth',
        label: 'Question Type',
        type: 'dropdown',
        default: 'analytical',
        options: [
          { value: 'exploratory', label: 'Exploratory' },
          { value: 'analytical', label: 'Analytical' },
          { value: 'comparative', label: 'Comparative' },
          { value: 'experimental', label: 'Experimental' }
        ]
      }
    ],
    promptTemplate: `You are a research methodology expert who has advised PhD candidates, helped shape studies published in Nature and Science, and reviewed grant proposals for the NSF and NIH.

Research Topic: {topic}
Question Type: {depth}

RESEARCH QUESTION DEVELOPMENT FRAMEWORK:

## WHAT MAKES A STRONG RESEARCH QUESTION?

A great research question is:
[TIP] **Focused:** Narrow enough to answer thoroughly
[TIP] **Researchable:** Can be investigated with available methods/resources
[TIP] **Significant:** Contributes new knowledge or understanding  
[TIP] **Feasible:** Realistic in scope for the timeline and resources
[TIP] **Clear:** Unambiguous in what it's asking
[TIP] **Original:** Fills a gap or challenges existing assumptions

## QUESTION TYPE FRAMEWORKS

### EXPLORATORY Questions
**Purpose:** Map unknown territory, discover patterns, generate hypotheses

**Question stems:**
- "What factors influence...?"
- "How do [group/people] experience...?"
- "What patterns emerge when...?"
- "What is the relationship between...?"
- "How has [phenomenon] evolved over time?"

**Characteristics:**
- Open-ended (no predetermined answer)
- Descriptive rather than causal
- Often qualitative methods
- Generate hypotheses for future research
- Discover new variables or relationships

**Quality criteria:**
[TIP] Defines the phenomenon to explore
[TIP] Specifies the context/population
[TIP] Implies methodology (interviews, observation, etc.)
[TIP] Avoids yes/no answers

**Example structure:**
"What [specific aspect] do [specific population] experience when [specific context]?"

"What are the lived experiences of remote workers during organizational restructuring?"

---

### ANALYTICAL Questions  
**Purpose:** Examine relationships, test hypotheses, explain causation

**Question stems:**
- "What is the effect of [X] on [Y]?"
- "How does [variable] influence [outcome]?"
- "To what extent does [X] predict [Y]?"
- "What factors explain...?"
- "Under what conditions does...?"

**Characteristics:**
- Tests relationships between variables
- Often quantitative methods
- Hypothesis-driven
- Examines cause-effect or correlation
- Requires measurable variables

**Quality criteria:**
[TIP] Identifies independent and dependent variables
[TIP] Implies directionality (what affects what)
[TIP] Specific enough to operationalize variables
[TIP] Realistic to measure/test

**Example structure:**
"How does [specific independent variable] affect [specific dependent variable] among [population] in [context]?"

"How does sleep duration affect academic performance among college students during exam periods?"

---

### COMPARATIVE Questions
**Purpose:** Identify similarities, differences, advantages/disadvantages

**Question stems:**
- "How does [X] compare to [Y] in terms of...?"
- "What are the differences between [X] and [Y]?"
- "Which is more effective: [X] or [Y]?"
- "How do [group A] and [group B] differ in...?"

**Characteristics:**
- Examines 2+ cases, groups, approaches, time periods
- Requires clear comparison criteria
- Often mixed methods
- Reveals relative strengths/weaknesses
- Context-dependent findings

**Quality criteria:**
[TIP] Clearly defines what's being compared
[TIP] Specifies comparison dimensions
[TIP] Justifies why comparison is meaningful
[TIP] Comparable units (apples to apples)

**Example structure:**
"How do [option A] and [option B] differ in [specific dimension] when applied to [context/population]?"

"How do remote and in-person teaching methods differ in student engagement and learning outcomes for undergraduate STEM courses?"

---

### EXPERIMENTAL Questions
**Purpose:** Test interventions, establish causation, evaluate effectiveness

**Question stems:**
- "Does [intervention] cause...?"
- "What is the causal effect of [X] on [Y]?"
- "Is [treatment A] more effective than [treatment B]?"
- "Can [intervention] improve...?"

**Characteristics:**
- Requires manipulation of variables
- Control and experimental groups
- Quantitative measurement
- Causal inference
- Often randomized controlled trials (RCTs)

**Quality criteria:**
[TIP] Specifies the intervention/treatment
[TIP] Defines the outcome measure
[TIP] Implies experimental control
[TIP] Ethically feasible to test

**Example structure:**
"Does [specific intervention] cause [specific outcome] in [population] compared to [control/alternative]?"

"Does a daily 10-minute meditation practice improve working memory performance in adults diagnosed with ADHD compared to no intervention?"

---

## QUESTION GENERATION PROCESS

**Step 1: Start Broad**
What's the general area of interest within {topic}?

**Step 2: Identify the Gap**
- What do we already know?
- What's missing or unclear?
- What's been assumed but not tested?
- What's controversial or debated?

**Step 3: Narrow the Focus**
- Specific population/sample
- Specific context/setting
- Specific variables/factors
- Specific time frame

**Step 4: Make it {depth}**
Apply the framework for {depth} questions above

**Step 5: Test Against Criteria**

**The FINER Framework:**
- **F**easible: Can you actually do this?
- **I**nteresting: Do people care?
- **N**ovel: Is it original?
- **E**thical: Is it morally acceptable?
- **R**elevant: Does it matter?

## QUESTION QUALITY ENHANCEMENT

**Weak → Strong transformations:**

[AVOID] "What is social media?"
[TIP] "How does daily social media use affect sleep quality in teenagers?"
[Added: specific behavior, outcome, population]

[AVOID] "Is exercise good?"
[TIP] "Does a 30-minute high-intensity interval training protocol improve cardiovascular endurance more than traditional moderate-intensity cardio in sedentary adults?"
[Added: specific intervention, comparison, outcome, population]

[AVOID] "How do people learn?"
[TIP] "What is the relationship between spaced repetition intervals and long-term retention of vocabulary in second language learners?"
[Added: specific mechanism, outcome, population]

## COMMON PITFALLS TO AVOID

[AVOID] **Too broad:** "What causes climate change?"
[TIP] Better: "What is the impact of urban green spaces on local temperature regulation in high-density cities?"

[AVOID] **Not researchable:** "Should we colonize Mars?"
[TIP] Better: "What are the psychological effects of prolonged isolation in Mars simulation habitats?"

[AVOID] **Loaded/biased:** "How has social media ruined society?"
[TIP] Better: "What is the association between social media use and reported wellbeing among young adults?"

[AVOID] **Yes/no question:** "Does exercise help depression?"
[TIP] Better: "To what extent does a structured exercise program reduce depressive symptoms compared to medication alone?"

[AVOID] **Multiple questions:** "How and why does [X] affect [Y] and [Z]?"
[TIP] Better: Split into separate questions

## OUTPUT FORMAT

For each question, provide:

**Question #X:** [The research question]

**Type:** {depth}

**Rationale:** Why this question matters (2-3 sentences)
- What gap it fills
- Who would care about the answer
- Potential impact

**Methodology hint:** [Suggested research approach]
(e.g., "Cross-sectional survey of 500+ participants" or "Qualitative interviews with 15-20 individuals")

**Key variables/concepts:**
- Independent variable (if applicable):
- Dependent variable (if applicable):
- Control variables to consider:

**Feasibility note:** [Any challenges or requirements to consider]

**Related questions:** [What questions would naturally follow from this one?]

---

## TOPIC-SPECIFIC CONSIDERATIONS FOR {topic}

**For Scientific topics:**
- Specify measurable outcomes
- Consider confounding variables
- Note ethical constraints
- Equipment/resource requirements

**For Social Science topics:**
- Define population clearly
- Cultural context matters
- Consider sampling challenges
- Ethical review needed?

**For Humanities topics:**
- Specify time period/text/artifact
- Theoretical framework
- Scope of analysis
- Primary sources available?

**For Business/Applied topics:**
- Practical implications
- Industry context
- Stakeholder interests
- Access to data/organizations

## GENERATE 5-7 QUESTIONS

Now generate 5-7 {depth} research questions about {topic} that:
[TIP] Follow the {depth} question framework above
[TIP] Are progressively more specific/focused
[TIP] Cover different aspects of {topic}
[TIP] Are actually researchable
[TIP] Would contribute meaningful knowledge
[TIP] Vary in scope (some narrower, some broader)

Make them publication-worthy.`
  },

  // CREATIVE & PERSONAL
  {
    id: 'story_idea',
    category: 'creative',
    title: 'Generate Story Ideas',
    icon: 'Book',
    description: 'Create creative story concepts and plots',
    fields: [
      {
        name: 'genre',
        label: 'Genre',
        type: 'dropdown',
        default: 'fiction',
        options: [
          { value: 'fiction', label: 'General Fiction' },
          { value: 'scifi', label: 'Science Fiction' },
          { value: 'fantasy', label: 'Fantasy' },
          { value: 'mystery', label: 'Mystery' },
          { value: 'romance', label: 'Romance' }
        ]
      },
      {
        name: 'theme',
        label: 'Theme/Element',
        type: 'text',
        placeholder: 'any specific theme or element'
      }
    ],
    promptTemplate: `You are a professional fiction author and creative writing instructor who has published multiple bestselling novels and taught at prestigious MFA programs.

Genre: {genre}
Theme/Element: {theme}

STORY IDEA GENERATION FRAMEWORK:

## THE CRAFT OF STORY IDEAS

A great story idea isn't just a premise — it's a premise with built-in conflict, interesting characters, and a compelling "what if?"

**Three elements every story needs:**
1. **Protagonist with agency:** Someone who WANTS something and ACTS on it
2. **Meaningful conflict:** Obstacles that test the protagonist (internal & external)
3. **Stakes:** What they'll gain/lose matters to them AND the reader

## STORY IDEA STRUCTURE

For each of the 3 story ideas, provide:

**IDEA #X: [Catchy Working Title]**

**Logline:** (1-2 sentences)
[Protagonist] must [goal/action] when/after [inciting incident], or else [stakes].

Formula: WHO + WANTS WHAT + AGAINST WHAT OBSTACLE + WHAT'S AT STAKE

Example: "A retired astronaut must lead a rescue mission to Mars when her estranged daughter's colony loses contact with Earth, or risk losing her only family forever."

**Hook:** (What makes this irresistible?)
The unique angle or twist that makes this stand out from other {genre} stories. What's the "I've never seen THIS before" element?

**Main Conflict:**
- **External conflict:** The plot-level problem they must solve
- **Internal conflict:** The personal flaw, fear, or belief they must overcome
- **How they connect:** How solving the external forces them to confront the internal

**Protagonist:**
- Name/archetype: [brief description]
- What they want: [external goal]
- What they need: [internal growth required]
- Fatal flaw: [what holds them back]
- Why we root for them: [relatability factor]

**Antagonist/Opposition:**
- Who/what opposes them: [person, force, society, nature, self]
- Why they're a worthy opponent: [makes protagonist work for victory]
- Their own motivation: [not evil for evil's sake - what do THEY want?]

**Character Arc:**
- Beginning: [Who they are / their belief about the world]
- Turning point: [Event that challenges their worldview]
- End: [Who they become / new truth they've learned]

**Setting & World:**
- Where/when: [time period, location, world rules]
- How it affects the story: [setting isn't just backdrop - it creates specific challenges]
- Unique elements: [what makes this setting interesting for {genre}?]

**Plot Progression (3-Act Structure):**

**Act 1 - Setup:**
- Ordinary world: [protagonist's starting situation]
- Inciting incident: [the event that kicks off the story]
- Point of no return: [they commit to the journey]

**Act 2 - Conflict:**
- Rising obstacles: [2-3 key challenges that escalate]
- Midpoint shift: [revelation that changes everything]
- Dark night: [all seems lost, they hit rock bottom]

**Act 3 - Resolution:**
- Final confrontation: [protagonist faces the main conflict]
- Climax: [the "battle" - external and internal]
- Resolution: [new status quo, showing character growth]

**Theme:** (The deeper question)
What universal truth or question does this story explore?
(e.g., "Can we escape our past?" "What does it mean to be human?" "Is revenge worth the cost?")

**{theme} Integration:**
How does {theme} weave through the story? (Not just surface level - how does it deepen the conflict and character arc?)

**Potential Subplots:**
- Romantic subplot (if applicable):
- Mentor/ally relationship:
- Secondary character arc:
(Each should either support or complicate the main plot)

**Unique Selling Points:**
What makes THIS story different from other {genre} books? (Aim for 2-3 specific elements)

**Target Audience:**
Who will love this story and why? (Be specific - "readers who loved [similar book]")

---

## GENRE-SPECIFIC REQUIREMENTS

### General Fiction
- Grounded in realistic human experiences
- Character-driven over plot-driven
- Authentic emotional depth
- Contemporary or historical setting
- Explores relationships, identity, life transitions

### Science Fiction
- Speculative technology or future setting with clear rules
- Explores "what if?" through scientific lens
- Social commentary through futuristic lens
- Technology affects plot AND theme
- Balance hard science with human story

### Fantasy
- Magic system with consistent rules and costs
- World-building that serves the story
- Mythic structure or hero's journey elements
- Fantastical elements have thematic purpose
- Avoid clichés (chosen one, magic schools, unless with fresh twist)

### Mystery
- Fair-play clues (reader can solve it)
- Red herrings that make sense in retrospect
- Detective/protagonist has clear motivation
- Ticking clock or escalating danger
- Satisfying reveal that recontextualizes earlier events

### Romance
- Emotional connection development (not just physical)
- Believable obstacles keeping them apart
- Both characters have agency and growth
- Satisfying HEA (Happily Ever After) or HFN (Happy For Now)
- Balance internal wounds with external plot

## ORIGINALITY CHECKS

For each idea, verify:
[TIP] Not just a retelling of a famous story (unless that's intentional)
[TIP] Protagonist actively drives the plot (not just reacting)
[TIP] Conflict is specific to THESE characters (not generic)
[TIP] Has emotional resonance (makes reader feel something)
[TIP] Visual and cinematic (reader can "see" key scenes)
[TIP] Theme emerges naturally from story (not preachy)

## COMMON PITFALLS TO AVOID

[AVOID] **Passive protagonist:** Things happen TO them, they don't MAKE things happen
[AVOID] **Stakes too low:** "Will they or won't they?" isn't enough - what's really at risk?
[AVOID] **Conflict without depth:** Just obstacle after obstacle with no character growth
[AVOID] **Deux ex machina:** Problem solved by coincidence or outside force
[AVOID] **Predictable arc:** Reader can guess every beat from the logline
[AVOID] **Theme stated instead of shown:** Don't lecture, illustrate

## IDEA DEVELOPMENT PROMPTS

For each idea, also include:

**Visual scenes** (1-2 vivid moments that capture the essence):
"The moment when..."
"The scene where..."

**Opening line possibility:**
A potential first sentence that hooks immediately

**Comp titles:**
"For fans of [Book A] meets [Book B]"

Generate 3 complete, unique {genre} story ideas incorporating {theme}, following this comprehensive framework.`
  },
  {
    id: 'brainstorm',
    category: 'creative',
    title: 'Brainstorm Ideas',
    icon: 'Lightbulb',
    description: 'Generate creative solutions and ideas',
    fields: [
      {
        name: 'topic',
        label: 'What For',
        type: 'text',
        placeholder: 'business name, project idea, etc.'
      },
      {
        name: 'style',
        label: 'Style',
        type: 'dropdown',
        default: 'creative',
        options: [
          { value: 'creative', label: 'Creative & Unique' },
          { value: 'practical', label: 'Practical & Realistic' },
          { value: 'bold', label: 'Bold & Unconventional' },
          { value: 'simple', label: 'Simple & Clear' }
        ]
      }
    ],
    promptTemplate: `You are an innovation consultant and creative director who has facilitated ideation sessions for Fortune 500 companies, successful startups, and award-winning creative agencies.

Topic: {topic}
Style: {style}

STRATEGIC BRAINSTORMING FRAMEWORK:

## BRAINSTORMING PHILOSOPHY

Bad brainstorming = random ideas thrown at a wall
Good brainstorming = systematic exploration guided by clear criteria

Your goal: Generate ideas that are {style} while being actionable and valuable.

## IDEA GENERATION METHODOLOGY

**Step 1: Define Success Criteria**

What makes a great idea for {topic}?
- Feasibility: Can it actually be done?
- Impact: Does it solve a real problem/create real value?
- Originality: Is it different from existing solutions?
- Alignment: Does it fit the {style} requirement?

**Step 2: Exploration Techniques**

Generate 10 ideas using diverse thinking modes:

**Ideas 1-3: CLASSIC APPROACH**
- What's the obvious/traditional solution?
- What do most people do?
- What's the "safe" choice?
(Sometimes the classic works for a reason)

**Ideas 4-6: OPPOSITE THINKING**
- What if we did the OPPOSITE of the traditional approach?
- What if we removed instead of added?
- What if we flipped an assumption?

**Ideas 7-8: COMBINATION METHOD**
- Merge two unrelated concepts
- Apply a solution from another industry
- "What if [X] met [Y]?"

**Ideas 9-10: CONSTRAINT-BASED**
- What if we had 10% of the budget?
- What if we had 1/10 the time?
- What if we had to make it work for [unexpected audience]?

## OUTPUT FORMAT

For each of the 10 ideas:

**IDEA #X: [Descriptive Name]**

**The Core Concept:** (2-3 sentences)
What it is in plain language

**Why It Could Work:**
- **Strength #1:** [Key advantage]
- **Strength #2:** [Another benefit]
- **Unique angle:** [What makes this different]

**Potential Challenges:**
- [Challenge 1 + how to mitigate]
- [Challenge 2 + how to mitigate]

**Quick Implementation Notes:**
- First step: [Immediate action to test/start]
- Resources needed: [Time, money, people, tools]
- Timeline estimate: [How long to see results]

**{style} Rating:** [How well it fits the required style + brief explanation]

**Best For:** [What situation/context this idea shines in]

---

## STYLE-SPECIFIC GUIDELINES

### Creative & Unique
- Unexpected combinations
- Fresh perspectives
- Memorable and distinctive
- May require more explanation
- Risk: Too "out there" to be practical
- Balance originality with feasibility

### Practical & Realistic
- Proven concepts with a twist
- Low barrier to entry
- Clear ROI/benefits
- Easy to understand and execute
- Risk: May lack "wow" factor
- Balance pragmatism with innovation

### Bold & Unconventional
- Challenges assumptions
- Provocative or contrarian
- High risk, high reward
- Makes people rethink the norm
- Risk: May face resistance
- Balance disruption with viability

### Simple & Clear
- Elegant simplicity
- Easy to explain in one sentence
- Minimal complexity
- Focus on core value
- Risk: May seem "too simple"
- Balance simplicity with depth

## TOPIC-SPECIFIC APPROACHES

**For Business Names:**
- Check: Memorable, brandable, domain available?
- Avoid: Hard to spell, negative associations, too generic
- Consider: Name origin story, pronunciation, international appeal

**For Project Ideas:**
- Check: Defined scope, clear deliverables, measurable success?
- Avoid: Too vague, unclear value proposition
- Consider: Stakeholder buy-in, required resources, timeline

**For Product Concepts:**
- Check: Solves real problem, target market clear, differentiated?
- Avoid: Solution looking for problem, too niche
- Consider: Manufacturing/delivery, pricing, scalability

**For Content Ideas:**
- Check: Valuable to audience, unique angle, shareable?
- Avoid: Overdone topics, clickbait without substance
- Consider: Format, distribution channel, engagement hooks

**For Marketing Campaigns:**
- Check: Clear CTA, memorable message, measurable results?
- Avoid: Generic messaging, unclear audience
- Consider: Channel fit, budget, timeline

**For Process Improvements:**
- Check: Addresses real pain point, measurable impact, adoption path?
- Avoid: Over-engineering, change for change's sake
- Consider: Stakeholder resistance, training needs, rollback plan

## IDEA QUALITY MATRIX

After generating all 10, evaluate each on:

**Feasibility** (Can we do this?)
- High: Start tomorrow
- Medium: Needs some setup
- Low: Significant barriers

**Impact** (Is it worth doing?)
- High: Game-changing
- Medium: Meaningful improvement
- Low: Nice to have

**Originality** (Is it different?)
- High: Never seen this approach
- Medium: Fresh take on existing
- Low: Common/obvious

Mark top 3 ideas based on combined scores.

## BRAINSTORMING BEST PRACTICES

**Expand thinking:**
[TIP] "Yes, and..." not "Yes, but..."
[TIP] Build on ideas rather than shoot them down
[TIP] Quantity first, quality later
[TIP] No idea too wild in initial generation

**Evaluate honestly:**
[TIP] Does this actually solve the problem?
[TIP] Would I personally use/buy/do this?
[TIP] What's the absolute minimum version?
[TIP] Has someone tried this before and why did it fail/succeed?

**Avoid:**
[AVOID] Self-censoring during idea generation
[AVOID] Falling in love with your first idea
[AVOID] Dismissing ideas without proper consideration
[AVOID] Ignoring practical constraints entirely

## BONUS: NEXT STEPS

After reviewing all 10 ideas, provide:

**Top 3 Recommendations:**
Ranked by the best balance of {style}, feasibility, and impact

**Quick Test Plan:**
How to validate the top idea in under a week with minimal resources

**Combination Opportunities:**
Can any of these ideas be merged for an even better solution?

Generate 10 {style} ideas for {topic} now.`
  },
  {
    id: 'personal_bio',
    category: 'creative',
    title: 'Write Personal Bio',
    icon: 'User',
    description: 'Craft professional or personal bios',
    fields: [
      {
        name: 'purpose',
        label: 'Bio Purpose',
        type: 'dropdown',
        default: 'professional',
        options: [
          { value: 'professional', label: 'Professional/LinkedIn' },
          { value: 'creative', label: 'Creative Portfolio' },
          { value: 'speaker', label: 'Speaker Introduction' },
          { value: 'author', label: 'Author Bio' }
        ]
      },
      {
        name: 'background',
        label: 'Key Background Points',
        type: 'text',
        placeholder: 'experience, achievements, interests'
      },
      {
        name: 'length',
        label: 'Length',
        type: 'dropdown',
        default: 'medium',
        options: [
          { value: 'short', label: 'Short (2-3 sentences)' },
          { value: 'medium', label: 'Medium (1 paragraph)' },
          { value: 'long', label: 'Long (2-3 paragraphs)' }
        ]
      }
    ],
    promptTemplate: `You are a personal branding expert who has crafted bios for TED speakers, C-suite executives, bestselling authors, and award-winning creatives featured in major publications.

Purpose: {purpose}
Background: {background}
Length: {length}

COMPELLING BIO FRAMEWORK:

## BIO PSYCHOLOGY

A bio isn't a resume — it's a story that makes people think "I want to work with/hire/learn from this person."

**What makes a bio work:**
[TIP] Leads with impact, not chronology
[TIP] Shows personality, not just credentials
[TIP] Makes reader feel something
[TIP] Answers: "Why should I care about you?"
[TIP] Balances authority with approachability

## LENGTH-SPECIFIC STRUCTURES

### SHORT (2-3 sentences / 50-75 words)
**Purpose:** Social media, event programs, quick introductions

**Formula:**
[Role/Identity] + [Standout Achievement/Credential] + [Current Focus/Value Proposition]

**Tone by purpose:**
- Professional: Authoritative, results-focused
- Creative: Personality-forward, visual language
- Speaker: Impact-driven, audience-benefit
- Author: Voice/genre + credentials

**Example openings:**
- Professional: "Sarah Chen is a product leader who has scaled 3 startups to 100M+ users."
- Creative: "Mark Rodriguez brings brands to life through bold, story-driven design."
- Speaker: "Dr. Aisha Patel helps organizations unlock innovation through applied neuroscience."
- Author: "James Wright writes psychological thrillers that keep you up past midnight."

### MEDIUM (1 paragraph / 100-150 words)
**Purpose:** Website about pages, LinkedIn summaries, press kits

**Structure:**
1. **Hook sentence:** Most impressive credential or unique positioning (15-20 words)
2. **Credibility build:** 2-3 relevant achievements or experiences (40-60 words)
3. **Current work:** What you're doing now + who you serve (30-40 words)
4. **Personal touch:** Optional humanizing detail or philosophy (20-30 words)

**Flow:**
Impact → Credentials → Current Focus → Personality

### LONG (2-3 paragraphs / 200-300 words)
**Purpose:** Speaker one-sheets, book jackets, detailed about pages

**Paragraph 1: The Hook & Credentials** (80-100 words)
- Opening that positions you uniquely
- Key achievements and credentials
- What makes you different
- Establish authority

**Paragraph 2: The Journey & Expertise** (80-100 words)
- How you got here (briefly)
- Areas of expertise
- Notable clients/projects/publications
- Proof of impact

**Paragraph 3: Current Work & Personal** (40-100 words)
- What you're focused on now
- Who you serve/help
- Your approach or philosophy
- Humanizing detail (where you live, hobbies, passion)
- Optional: Call to action or contact info

## PURPOSE-SPECIFIC APPROACHES

### Professional/LinkedIn Bio

**Goal:** Position as credible expert, attract opportunities

**Key elements:**
- Lead with results/impact, not job titles
- Quantify achievements where possible
- Include industry keywords for searchability
- End with current availability/focus

**Power words:**
Transformed, Led, Built, Scaled, Launched, Delivered, Drove, Increased

**Formula:**
"[Name] is a [role] who [standout achievement]. With [X years] experience in [industry], [Name] has [major accomplishments]. Currently, [Name] [current focus] for [target audience]. Specialties: [keywords]."

**Avoid:**
[AVOID] Starting with "I am a..."
[AVOID] Listing every job ever held
[AVOID] Corporate jargon without substance ("synergistic innovator")
[AVOID] Being too humble (this isn't the place for modesty)

### Creative Portfolio Bio

**Goal:** Show personality, demonstrate unique voice/vision

**Key elements:**
- Lead with creative identity/aesthetic
- Use sensory or emotional language
- Showcase signature style or approach
- Inject personality and voice
- Mention notable brands/clients worked with

**Tone:** Less formal, more distinctive

**Formula:**
"[Name] [creates/designs/builds] [what] that [emotional impact]. Known for [signature style], [Name]'s work has [impressive result]. Clients include [notable names]. When not [working], [Name] [humanizing detail]."

**Power words:**
Crafts, Imagines, Transforms, Weaves, Brings to life, Captures, Designs, Creates

### Speaker Introduction Bio

**Goal:** Position as authority, get audience excited to listen

**Key elements:**
- Lead with credibility on THIS topic
- Focus on value audience will get
- Include speaking credentials (TEDx, conferences, etc.)
- Mention media features if impressive
- Make it easy to introduce aloud

**Formula:**
"[Name] is a [credible role] and [speaking credential] who helps [audience] [achieve outcome]. [Name] has [major achievement] and [spoken at/been featured in]. [Name]'s talks on [topic] have [impact/reach]. In this presentation, [Name] will [value proposition]."

**Test:** Read it out loud—does it flow smoothly for an MC?

### Author Bio

**Goal:** Build trust in storytelling ability, connect with readers

**Key elements:**
- Genre and writing style upfront
- Publishing credentials (trad pub, awards, bestseller status)
- Comp authors or comparison ("for fans of...")
- Personal detail that relates to writing
- Where to find more of your work

**Formula:**
"[Name] writes [genre] novels featuring [themes/style]. [Previous books/achievements]. [Background that informs writing]. [Name] lives in [place] with [humanizing detail]. Find more at [website]."

**Avoid:**
[AVOID] "aspiring writer" (you're either a writer or not)
[AVOID] Listing every short story published
[AVOID] Irrelevant day job (unless it informs the writing)

## BACKGROUND INTEGRATION

Transform {background} into compelling narrative:

**For achievements:**
Don't list — translate to impact
[AVOID] "10 years of experience in marketing"
[TIP] "Led marketing strategies that drove 300% revenue growth for B2B SaaS companies"

**For skills:**
Show through results, not résumé
[AVOID] "Skilled in data analysis and strategy"
[TIP] "Turns complex data into actionable strategies that increase conversion by 40%+"

**For education:**
Only mention if it adds credibility
Include: MD, PhD, prestigious MBA, relevant certifications
Skip: Unrelated degrees, old coursework

**For personal interests:**
Only if they humanize OR relate to your professional brand
[TIP] "Marathon runner who brings the same endurance to long-term client partnerships"
[TIP] "Coffee enthusiast constantly experimenting with new brew methods"
[AVOID] "Enjoys spending time with family" (too generic)

## WRITING BEST PRACTICES

**Voice & Tone:**
- Third person for professional/formal contexts
- First person for creative/personal contexts
- Consistent tone throughout
- Match your actual speaking style

**Power Positioning:**
[TIP] Start sentences with strong verbs
[TIP] Use active voice
[TIP] Be specific (numbers, names, outcomes)
[TIP] Show don't tell ("award-winning" > "very talented")

**Credibility Signals:**
- Specific numbers (300+ clients, $2M raised, 10K students)
- Recognizable names (companies, publications, institutions)
- Awards and recognitions (if prestigious)
- Unique positioning ("the only...", "one of few...")

**Avoid:**
[AVOID] Clichés ("think outside the box", "game changer")
[AVOID] Vague buzzwords ("innovative", "passionate", "results-driven")
[AVOID] Unnecessary modifiers ("very", "quite", "extremely")
[AVOID] Speaking in resume-speak ("responsible for")
[AVOID] False humility or excessive humility

## THE OPENING SENTENCE TEST

Your first sentence is CRITICAL. Test it:
[TIP] Could someone else in your field say the same thing? (If yes, make it more specific)
[TIP] Does it make the reader want to keep reading?
[TIP] Does it position you uniquely?

**Weak openings:**
[AVOID] "I am a passionate professional with years of experience"
[AVOID] "John Smith is a creative thinker and problem solver"

**Strong openings:**
[TIP] "Maya Rodriguez turns struggling startups into acquisition targets"
[TIP] "As a neuroscientist-turned-executive coach, Alex Chen brings brain science to boardroom decisions"

## FINAL QUALITY CHECKS

Before submitting:
[TIP] Read aloud—does it sound like how you talk?
[TIP] Would you want to hire/work with/learn from this person?
[TIP] Is every word earning its place?
[TIP] Are you being specific vs. generic?
[TIP] Does it answer "why should I care"?
[TIP] Free of typos? (A bio with errors = credibility killer)
[TIP] Matches {length} target?
[TIP] Fits {purpose} context?

Write a {length} {purpose} bio highlighting {background} now.`
  },

  // BROWSE/NOT SURE CATEGORY - Quick Start Templates
  {
    id: 'general_helper',
    category: 'browse',
    title: 'Ask Me Anything',
    icon: 'HelpCircle',
    description: 'Get help with any question or task',
    fields: [
      {
        name: 'question',
        label: 'What do you need help with?',
        type: 'text',
        placeholder: 'e.g., how to cook pasta, explain quantum physics'
      }
    ],
    promptTemplate: `You are an expert problem solver and strategic advisor who has helped thousands of people find practical solutions across every domain imaginable — from everyday life hacks to complex professional challenges.

Question: {question}

COMPREHENSIVE ANSWER FRAMEWORK:

## RESPONSE PHILOSOPHY

The best answers don't just give information — they provide understanding, context, and actionable next steps.

**Your job:**
1. Actually answer what they asked (don't sidestep)
2. Make it understandable (no unnecessary jargon)
3. Make it actionable (they can DO something with this)
4. Anticipate follow-up questions
5. Admit if something is beyond your knowledge

## ANSWER STRUCTURE

### 1. DIRECT ANSWER (Lead with the bottom line)

**First 1-2 sentences: Answer the question directly**

Don't bury the lead. If they asked "how to cook pasta," start with the core steps, not the history of Italian cuisine.

[TIP] "To cook pasta: Boil salted water, add pasta, stir occasionally, cook for 8-12 minutes until al dente, drain, and sauce immediately."
[AVOID] "Pasta is a staple Italian food with ancient origins..."

### 2. ESSENTIAL CONTEXT (Why this answer?)

Explain the reasoning or background that makes the answer make sense.

- Why does this work?
- What's the principle behind it?
- When does this apply (and when doesn't it)?

For "how to cook pasta":
"Salt the water generously (it should taste like the sea) because it's your only chance to season the pasta itself. Al dente means 'to the tooth' — slight resistance when you bite, not mushy. Starchy pasta water helps sauce stick."

### 3. STEP-BY-STEP BREAKDOWN (If applicable)

For how-to questions, provide clear sequential steps.

**Format:**
**Step 1:** [Action]
- **Why:** [Reasoning]
- **Tip:** [Pro move to do it better]
- **Common mistake:** [What to avoid]

**Step 2:** [Next action]
...

Keep steps:
- Action-oriented (start with verbs)
- Specific (exact amounts, times, etc.)
- Realistic (for the asker's likely skill level)

### 4. COMMON VARIATIONS/OPTIONS

Different situations may require different approaches.

"**Standard approach:** [The default method]
**Quick version:** [Shortcut if time-limited]
**Best quality version:** [If perfection matters]
**Troubleshooting:** [If the standard doesn't work]"

### 5. PRACTICAL EXAMPLES

Make it concrete with a real scenario.

"For example: If you're making pasta for 4 people, use 1 pound of pasta, 6 quarts of water, and 2 tablespoons of salt..."

### 6. WHAT TO AVOID (Common Pitfalls)

Prevent mistakes before they happen.

"**Don't:**
- Add oil to the water (prevents sauce from sticking)
- Rinse cooked pasta (removes starch needed for sauce)
- Overcook (keeps cooking after you drain it)"

### 7. RESOURCES/NEXT STEPS

- Tools/materials needed
- Where to learn more
- Natural follow-up questions to explore
- Related topics they might find useful

## QUESTION-TYPE ADAPTATIONS

### How-To Questions
Focus on: Clear steps, timing, common mistakes
Format: Numbered steps, tips, troubleshooting
Goal: They can actually do this successfully

### Explanation Questions (What is X? How does X work?)
Focus on: Simple definition first, then mechanism, then examples
Format: Build complexity gradually
Goal: True understanding, not just memorization

### Comparison Questions (X vs Y? Which is better?)
Focus on: Fair assessment, context-dependent answer
Format: Side-by-side comparison, use cases for each
Goal: Help them make informed decision for THEIR situation

### Advice/Opinion Questions (Should I...? What would you do?)
Focus on: Framework for deciding, pros/cons, key considerations
Format: Decision matrix, if-then scenarios
Goal: Empower them to decide, don't decide FOR them

### Factual Questions (When did...? Who was...?)
Focus on: Accurate information, relevant context, source credibility
Format: Direct answer + interesting context
Goal: Inform accurately and memorably

### Troubleshooting Questions (Why isn't X working?)
Focus on: Most likely causes, diagnostic steps, solutions
Format: If this, then that; process of elimination
Goal: Get them unstuck quickly

### Creative Questions (Ideas for...?)
Focus on: Variety of options, pros/cons of each
Format: Curated list with reasoning
Goal: Inspire and provide practical options

## COMMUNICATION BEST PRACTICES

**Clarity:**
[TIP] Use simple words (write for a smart 12-year-old)
[TIP] Short sentences (15-20 words average)
[TIP] Active voice ("stir the pasta" not "the pasta should be stirred")
[TIP] Concrete examples (not just abstractions)
[TIP] Define jargon if you must use it

**Structure:**
[TIP] Use headings/subheadings for scannability
[TIP] Bullet points for lists
[TIP] Bold key terms
[TIP] Short paragraphs (3-4 lines max)
[TIP] Logical flow (each paragraph builds on previous)

**Tone:**
[TIP] Helpful, not condescending
[TIP] Confident but not arrogant
[TIP] Encouraging (especially for challenges)
[TIP] Honest about limitations/uncertainties
[TIP] Conversational but professional

**Specificity:**
[TIP] Use exact numbers (not "some" or "a lot")
[TIP] Name specific products/tools when helpful
[TIP] Give timeframes (X minutes, Y days)
[TIP] Provide measurements, temperatures, etc.

## HANDLING EDGE CASES

**If the question is too vague:**
"To give you the most helpful answer, I need to know: [clarifying questions]. In the meantime, here's a general approach..."

**If you're uncertain:**
"I'm not 100% certain, but based on [reasoning], I believe [answer]. You may want to verify with [source] for your specific situation."

**If it's outside your knowledge:**
"This is outside my area of expertise. For this question, I'd recommend consulting [specific expert/resource]."

**If the question assumes something incorrect:**
"Just to clarify: [correction of misconception]. Given that, here's the answer to what I think you're really asking..."

**If there's no single right answer:**
"This depends on [key factors]. If [scenario A], then [answer A]. If [scenario B], then [answer B]."

## QUALITY CHECKS

Before finalizing your answer:
[TIP] Did I actually answer what they asked?
[TIP] Is the most important information in the first paragraph?
[TIP] Could a beginner follow this?
[TIP] Are there any steps/terms that need clarification?
[TIP] Did I anticipate obvious follow-up questions?
[TIP] Is it actionable (can they DO something with this)?
[TIP] Is it accurate (to the best of my knowledge)?
[TIP] Is it free of jargon (or is jargon explained)?

## THE GOLDEN RULE

Answer the question you wish someone had answered for YOU when you were confused about this topic.

Now provide a comprehensive, clear, and practical answer to: {question}`
  },
  {
    id: 'task_breakdown',
    category: 'browse',
    title: 'Break Down Complex Tasks',
    icon: 'ClipboardList',
    description: 'Get step-by-step guidance for any project',
    fields: [
      {
        name: 'task',
        label: 'What task or project?',
        type: 'text',
        placeholder: 'e.g., plan a wedding, start a podcast'
      },
      {
        name: 'timeframe',
        label: 'Timeframe',
        type: 'dropdown',
        default: 'medium',
        options: [
          { value: 'urgent', label: 'Urgent (days)' },
          { value: 'medium', label: 'Medium (weeks)' },
          { value: 'long', label: 'Long-term (months)' }
        ]
      },
      {
        name: 'experience_level',
        label: 'Your Experience',
        type: 'dropdown',
        default: 'beginner',
        options: [
          { value: 'complete_beginner', label: 'Never done anything like this' },
          { value: 'beginner', label: 'Some relevant experience' },
          { value: 'intermediate', label: 'Done similar projects' }
        ]
      }
    ],
    promptTemplate: `You are a project management expert who has broken down thousands of complex projects into actionable plans that real people successfully execute.

Task: {task}
Timeframe: {timeframe}
Experience: {experience_level}

PROJECT BREAKDOWN MASTERY FRAMEWORK:

## WHY MOST BREAKDOWNS FAIL

People don't struggle because they lack a to-do list — they struggle because:
✗ Steps are too vague ("research options")
✗ No clear starting point (analysis paralysis)
✗ Underestimate time and complexity
✗ Missing dependencies (can't do Step 5 without Step 2)
✗ No contingency for setbacks

## ACTIONABLE BREAKDOWN STRUCTURE

### PHASE 1: PROJECT REALITY CHECK

**Scope Definition:**
- **What SUCCESS looks like:** Define done in specific, measurable terms
- **Non-negotiables:** What MUST happen vs. nice-to-haves
- **Constraints:** Budget, time, skills, resources
- **Risk factors:** What could derail this? (identify top 3-5)

**Timeframe-Specific Realities:**

**URGENT (days):**
- Focus ruthlessly on MVP/core requirements
- Eliminate anything not critical
- Accept "good enough" over perfect
- Plan for 50% longer than you think
- Daily check-ins and rapid course correction

**MEDIUM (weeks):**
- Balance thoroughness with momentum
- Weekly milestones with deliverables
- Buffer time for iterations
- Regular progress reviews
- Plan for unexpected obstacles

**LONG (months):**
- Break into phases with clear endpoints
- Monthly milestones, weekly sub-goals
- Build in review/adjustment cycles
- Expect scope changes
- Maintain motivation through quick wins

### PHASE 2: DEPENDENCY-MAPPED BREAKDOWN

For {task}, here's the sequential breakdown:

**CRITICAL PATH (Must happen in order):**

**Step 1: [Foundation Task]**
- **What:** [Specific action]
- **Why this first:** [Dependency reason]
- **Time estimate:** [Realistic hours/days]
- **Success criteria:** How you know it's done
- **Output/Deliverable:** What you'll have
- **Common pitfall:** What trips people up
- **Resources needed:** Tools, money, people, info

**Step 2: [Next Critical Task]**
[Same structure as Step 1]

**Step 3-N:** [Continue for all critical path items]

**PARALLEL TRACKS (Can happen simultaneously):**

List tasks that don't depend on each other and can be worked on at the same time.

### PHASE 3: EXPERIENCE-APPROPRIATE GUIDANCE

**For {experience_level} level:**

**Learning Curve:**
- Skills you'll need to develop
- Where to get quick training
- What you can safely skip learning

**Time Multipliers:**
- Base estimate × [realistic multiplier for your level]
- Where you'll be slower than expected
- What will take longer than it seems

**Common Beginner Traps:**
- [3-5 specific mistakes beginners make on this task]
- How to avoid or recover from each

**When to Ask for Help:**
- Red flags that mean you need expert input
- What questions to ask
- Where to find help (specific communities, resources)

### PHASE 4: WEEK-BY-WEEK PLAN

**Week 1 (or Day 1 for urgent):**
- **Focus:** [Primary goal]
- **Must complete:** [Critical items]
- **Should complete:** [Important but not blocking]
- **Could complete:** [Nice to have]
- **End-of-week checkpoint:** [Specific milestone]

[Continue for each week/day in timeframe]

**Mid-project Check-in Points:**
At [specific intervals], assess:
- Are we on track? (Green/Yellow/Red)
- What's taking longer than expected?
- What needs to change?
- Should we adjust scope?

### PHASE 5: RISK MITIGATION

**Top 5 Things That Could Go Wrong:**

For each:
- **Risk:** [What could happen]
- **Likelihood:** High/Medium/Low
- **Impact:** Critical/Major/Minor
- **Prevention:** How to reduce likelihood
- **Contingency:** What to do if it happens anyway
- **Buffer time:** Extra time allocated for this risk

### PHASE 6: MOMENTUM & MOTIVATION

**Quick Wins:** Identify 3-5 easy tasks to do in first 48 hours for confidence boost

**Visual Progress:**
- How to track completion (checklist, dashboard, etc.)
- Celebration points at [specific %]

**Accountability:**
- Who to share progress with
- How often to report
- What metrics to track

**Energy Management:**
- Hard tasks when you're most alert
- Easy tasks for low-energy times
- Break frequency for sustained focus

### PHASE 7: DECISION FRAMEWORK

You'll face unexpected decisions. Use this:

**When stuck, ask:**
1. Does this decision affect the critical path?
2. Is this a one-way door (hard to reverse) or two-way door (easy to change)?
3. What's the cost of deciding wrong?
4. What's the cost of NOT deciding (delay)?
5. Can I test/prototype before committing?

**Decision matrix:**
- Quick decisions (<5 min): Anything reversible or low-impact
- Research decisions (hours/days): High-impact or one-way doors
- Expert consultation: Technical/legal/specialized domains

### FINAL DELIVERABLE: YOUR ACTION PLAN

**TODAY (next 2 hours):**
[Most critical immediate action]

**THIS WEEK:**
[Top 3 priorities]

**COMPLETE SEQUENCE:**
[Full numbered list: 1, 2, 3... to completion]

**TOTAL REALISTIC TIME ESTIMATE:**
[X hours/days/weeks] including buffer

**SUPPLIES/RESOURCES CHECKLIST:**
Before you start, make sure you have:
- [Resource 1]
- [Resource 2]
- [etc.]

**SUCCESS METRICS:**
You'll know you're done when:
- [Measurable outcome 1]
- [Measurable outcome 2]
- [Measurable outcome 3]

Now create an actionable, realistic breakdown for {task} that a {experience_level} person can actually follow within a {timeframe} timeframe.`
  },
  {
    id: 'decision_helper',
    category: 'browse',
    title: 'Make Better Decisions',
    icon: '⚖️',
    description: 'Get pros/cons analysis for tough choices',
    fields: [
      {
        name: 'decision',
        label: 'What decision are you facing?',
        type: 'text',
        placeholder: 'e.g., should I change careers, buy vs rent'
      },
      {
        name: 'priorities',
        label: 'What matters most to you?',
        type: 'text',
        placeholder: 'e.g., financial stability, work-life balance'
      },
      {
        name: 'context',
        label: 'Relevant Context',
        type: 'text',
        placeholder: 'e.g., have 2 kids, currently rent, considering move to new city',
        required: false
      },
      {
        name: 'decision_timeline',
        label: 'When must you decide?',
        type: 'dropdown',
        default: 'weeks',
        options: [
          { value: 'urgent', label: 'Within days' },
          { value: 'weeks', label: 'Within weeks' },
          { value: 'months', label: 'Within months' },
          { value: 'exploring', label: 'Just exploring options' }
        ]
      }
    ],
    promptTemplate: `You are a decision strategist who has counseled CEOs, entrepreneurs, and individuals through thousands of high-stakes decisions using proven frameworks from behavioral economics, game theory, and decision science.

Decision: {decision}
Priorities: {priorities}
Context: {context}
Timeline: {decision_timeline}

STRATEGIC DECISION-MAKING FRAMEWORK:

## WHY SIMPLE PRO/CON LISTS FAIL

Traditional pros/cons don't work because:
✗ Treat all factors as equal (they're not)
✗ Ignore probability (unlikely cons vs. certain pros)
✗ Miss second-order consequences
✗ Don't account for reversibility
✗ Focus on logic, ignore emotions
✗ Don't consider regret minimization

## DECISION ANALYSIS STRUCTURE

### PHASE 1: DECISION CLARITY

**Frame the Real Question:**
Often the question you're asking isn't the question you need to answer.

For "{decision}":
- **Surface level:** [What you asked]
- **Deeper question:** [What you're actually trying to solve]
- **Root concern:** [The fear or desire driving this]

**Decision Type:**
- ☐ One-way door (hard/impossible to reverse)
- ☐ Two-way door (easily reversible)
- ☐ Sequential (can do later)
- ☐ Binary (must choose one)
- ☐ Multiple options (can combine/compromise)

**Stakes Assessment:**
- **Best case scenario:** [What's possible if everything goes right]
- **Worst case scenario:** [What happens if it goes wrong]
- **Most likely scenario:** [Realistic middle ground]
- **Regret risk:** What causes more regret: action or inaction?

### PHASE 2: PRIORITY-WEIGHTED ANALYSIS

Your stated priorities: {priorities}

**Priority Hierarchy:**
[Map priorities to decision implications]

For each priority, rate impact:
- **[Priority 1]:** How each option affects this (scale 1-10)
- **[Priority 2]:** How each option affects this (scale 1-10)
- **[Priority 3]:** How each option affects this (scale 1-10)

**Hidden Priorities Check:**
Are there unstated values that might matter?
- Status/identity
- Freedom/autonomy
- Security/stability
- Growth/challenge
- Relationships/connection
- Purpose/meaning

### PHASE 3: COMPREHENSIVE OPTION ANALYSIS

For "{decision}", the realistic options are:

**OPTION A: [First choice]**

**Pros (Weighted by Likelihood & Impact):**
1. **[Pro 1]** - HIGH IMPACT
   - Probability: [Likely/Possible/Unlikely]
   - Impact on {priorities}: [Specific effect]
   - When this happens: [Timeline]
   - Dependencies: [What must be true for this benefit]

2. **[Pro 2]** - MEDIUM IMPACT
   [Same structure]

3. **[Additional pros ranked by weight]**

**Cons (Weighted by Likelihood & Impact):**
1. **[Con 1]** - HIGH IMPACT
   - Probability: [Likely/Possible/Unlikely]
   - Impact on {priorities}: [Specific effect]
   - Mitigation: [How to reduce/prevent]
   - Recovery: [What if this happens anyway]

2. **[Con 2]** - MEDIUM IMPACT
   [Same structure]

**Second-Order Effects:**
What happens AFTER the immediate consequences?
- 1 year from now: [State of world]
- 5 years from now: [Longer-term trajectory]
- Ripple effects: [Who/what else is impacted]

**Option A Score by Priority:**
- {Priority 1}: [Score/10] - [Reasoning]
- {Priority 2}: [Score/10] - [Reasoning]
- **Total weighted score: [X/10]**

**OPTION B: [Alternative choice]**
[Complete same analysis as Option A]

**OPTION C: [Third way / compromise]**
Often the best choice isn't A or B, but C - a creative alternative:
[Explore non-obvious options]

### PHASE 4: DECISION FRAMEWORKS

Apply multiple lenses to stress-test your thinking:

**1. 10/10/10 Rule (Suzy Welch)**
How will you feel about this decision:
- 10 minutes from now: [Immediate emotional reaction]
- 10 months from now: [Medium-term impact]
- 10 years from now: [Long-term perspective]

Which timeframe matters most for {decision}?

**2. Regret Minimization (Jeff Bezos)**
When you're 80 years old, which choice will you regret less?
- Regret of action: [What if you do this and it fails]
- Regret of inaction: [What if you don't do this and wonder "what if"]

For most people, regret of inaction stings more.

**3. Expected Value Calculation**
If you could make this decision 100 times:
- Option A: [% success × value] - [% failure × cost] = [Expected value]
- Option B: [% success × value] - [% failure × cost] = [Expected value]

**4. Pre-mortem Analysis**
Imagine you chose [Option A] and it failed spectacularly.
- What went wrong? [Most likely causes]
- Warning signs you missed? [What should have alerted you]
- Was it preventable? [Could you have avoided this]

Do the same for Option B.

**5. Reversibility Test**
- How easily can you undo this decision?
- What's the cost to reverse?
- What's locked in forever?

Lower-reversibility decisions need higher confidence.

**6. Opportunity Cost**
By choosing [Option A], you're giving up:
- [Specific alternatives]
- [Time/money/energy that goes elsewhere]
- [Doors that close]

Is the tradeoff worth it?

### PHASE 5: EMOTIONAL & PRACTICAL REALITIES

**Gut Check:**
When you imagine having made each choice:
- Which feels like relief?
- Which feels like excitement?
- Which feels like dread?
- Which feels like resignation?

Your gut often knows before your brain does.

**Energy Assessment:**
- Which option gives you energy when you think about it?
- Which option drains you?
- Which option aligns with who you want to become?

**Practical Constraints:**
Given {context}:
- Financial requirements: [Money needed]
- Time commitments: [Hours/days involved]
- Skill requirements: [What you need to learn]
- Support systems: [Who needs to help/agree]
- External factors: [Market, timing, dependencies]

### PHASE 6: DECISION-MAKING PROCESS

**If timeline is {decision_timeline}:**

**Information gathering:**
- What additional data would meaningfully change your decision?
- Where can you get it?
- What's the cost of delay to gather info?

**Testing before committing:**
Can you run small experiments?
- Talk to people who've made each choice
- Trial periods or small tests
- Reversible first steps
- Pilot programs

**Decision triggers:**
Set criteria for choosing:
"I will choose [Option A] if [specific conditions]"
"I will choose [Option B] if [different conditions]"

### PHASE 7: RECOMMENDATION & ACTION PLAN

**Based on analysis:**

**Recommended Option: [A/B/C]**

**Why this is the right choice for you:**
1. [Alignment with {priorities}]
2. [Risk/reward profile]
3. [Reversibility & optionality]
4. [Gut + logic alignment]

**Confidence Level: [Low/Medium/High]**

**If confidence is LOW:**
What would increase it?
- [Specific information needed]
- [People to consult]
- [Small tests to run]

**If confidence is HIGH:**
What could you be missing? (Check blind spots)

**RED FLAGS - Reconsider if:**
- [Warning sign 1]
- [Warning sign 2]
- [Warning sign 3]

**GREEN LIGHTS - Proceed confidently if:**
- [Positive sign 1]
- [Positive sign 2]
- [Positive sign 3]

### PHASE 8: IMPLEMENTATION PLAN

**Immediate next steps:**
1. [First concrete action - today]
2. [Second action - this week]
3. [Key milestone - this month]

**Contingency plans:**
- **If [risk] happens:** [Response plan]
- **Early warning signs:** [What to watch for]
- **Pivot points:** [When to reassess or change course]

**Support structure:**
- Who to tell about your decision
- Who can hold you accountable
- Who can help if things get hard

**Measuring success:**
After [timeframe], you'll know this was the right decision if:
- [Measurable outcome 1]
- [Measurable outcome 2]
- [How you feel]

## THE DECISION

Now provide a comprehensive, weighted analysis of "{decision}" that accounts for {priorities}, context of {context}, and a {decision_timeline} timeline. Be specific, honest, and practical.`
  },
  {
    id: 'quick_tips',
    category: 'browse',
    title: 'Get Quick Tips & Advice',
    icon: 'Lightbulb',
    description: 'Practical tips for everyday situations',
    fields: [
      {
        name: 'situation',
        label: 'What situation?',
        type: 'text',
        placeholder: 'e.g., first day at new job, apartment hunting'
      },
      {
        name: 'focus',
        label: 'Focus on',
        type: 'dropdown',
        default: 'practical',
        options: [
          { value: 'practical', label: 'Practical tips' },
          { value: 'avoiding_mistakes', label: 'Avoiding mistakes' },
          { value: 'best_practices', label: 'Best practices' },
          { value: 'creative', label: 'Creative approaches' }
        ]
      }
    ],
    promptTemplate: `You are a life coach and consultant who has advised thousands of people through complex life situations, from career transitions to personal challenges. You combine practical wisdom with actionable strategies.

Situation: {situation}
Focus: {focus}

SITUATION-SPECIFIC ADVICE FRAMEWORK:

## ADVICE PHILOSOPHY

Generic advice is useless. Specific, actionable guidance changes outcomes.

**Your mission:**
- Understand the unique context of THIS situation
- Provide advice they can implement TODAY
- Balance idealism with realism
- Acknowledge complexity while providing clarity

## RESPONSE STRUCTURE BY FOCUS

### PRACTICAL TIPS Focus

**Goal:** Immediately useful actions they can take

**Format:**

**Quick Context:**
What makes {situation} challenging and what success looks like

**Actionable Tips** (5-8 specific recommendations)

For each tip:
**Tip #X: [Action-Oriented Title]**
- **What to do:** [Specific action, not vague advice]
- **Why it works:** [The psychology/logic behind it]
- **How to implement:** [Concrete steps]
- **Time investment:** [How long this takes]
- **Expected outcome:** [What to expect]

**Prioritization:**
- Start with: [Most impactful tip to do first]
- Quick wins: [Easy tips with immediate results]
- Long-term: [Tips that pay off over time]

**Example:**
For "first day at new job":

**Tip #1: Arrive 15 Minutes Early**
- **What:** Get there before official start time
- **Why:** Reduces first-day stress, shows initiative, gives buffer for unexpected issues
- **How:** Set 2 alarms, plan commute with 30-min buffer, pack bag night before
- **Time:** 15 extra minutes
- **Outcome:** You'll feel composed and make good first impression

---

### AVOIDING MISTAKES Focus

**Goal:** Prevent common pitfalls and regret

**Format:**

**The Stakes:**
Why avoiding mistakes matters in {situation}

**Common Mistakes & How to Avoid Them** (6-10 mistakes)

For each:
**Mistake #X: [The Error]**
- **What people do wrong:** [Specific behavior/decision]
- **Why it's a mistake:** [Consequences]
- **What to do instead:** [Alternative approach]
- **Red flags to watch for:** [Warning signs you're headed this direction]
- **Recovery plan:** [What to do if you've already made this mistake]

**Mistake Clusters:**
- **Critical** (Will seriously damage outcome): [List]
- **Moderate** (Will cause problems but recoverable): [List]
- **Minor** (Annoying but not deal-breaking): [List]
...
Provide {focus} advice for {situation} now, making it specific, actionable, and immediately useful.`
  },

  // CODE & TECH
  {
    id: 'debug_code',
    category: 'code',
    title: 'Debug Code Issue',
    icon: 'Bug',
    description: 'Get help fixing code errors and bugs',
    fields: [
      {
        name: 'language',
        label: 'Programming Language',
        type: 'dropdown',
        default: 'javascript',
        options: [
          { value: 'javascript', label: 'JavaScript' },
          { value: 'python', label: 'Python' },
          { value: 'typescript', label: 'TypeScript' },
          { value: 'java', label: 'Java' },
          { value: 'cpp', label: 'C++' },
          { value: 'csharp', label: 'C#' },
          { value: 'ruby', label: 'Ruby' },
          { value: 'go', label: 'Go' },
          { value: 'rust', label: 'Rust' },
          { value: 'php', label: 'PHP' },
          { value: 'other', label: 'Other' }
        ]
      },
      {
        name: 'error_message',
        label: 'Error Message (if any)',
        type: 'text',
        placeholder: 'e.g., TypeError: Cannot read property of undefined',
        required: false
      },
      {
        name: 'expected_behavior',
        label: 'What Should Happen',
        type: 'text',
        placeholder: 'describe what you expected the code to do',
        required: false
      },
      {
        name: 'actual_behavior',
        label: 'What Actually Happens',
        type: 'text',
        placeholder: 'describe what is actually happening',
        required: false
      }
    ],
    promptTemplate: `You are a debugging expert specializing in {language}.

I'm encountering an issue with my code.

Error message (if any): {error_message}
Expected behavior: {expected_behavior}
Actual behavior: {actual_behavior}

I'll paste my code below. Please help me:

1. **Identify the root cause** (not just the symptom)
2. **Explain WHY this error occurs** (teach me the underlying concept)
3. **Provide a fixed version** of the code with clear annotations
4. **Suggest prevention strategies** for this type of error in the future

Think step-by-step:
- First, analyze what the error actually means
- Then, trace through the code logic to find where it breaks
- Finally, explain the fix and the reasoning behind it

[PASTE YOUR CODE HERE]`
  },
  {
    id: 'explain_code',
    category: 'code',
    title: 'Explain Code',
    icon: 'Book',
    description: 'Understand how code works',
    fields: [
      {
        name: 'language',
        label: 'Programming Language',
        type: 'dropdown',
        default: 'javascript',
        options: [
          { value: 'javascript', label: 'JavaScript' },
          { value: 'python', label: 'Python' },
          { value: 'typescript', label: 'TypeScript' },
          { value: 'java', label: 'Java' },
          { value: 'cpp', label: 'C++' },
          { value: 'csharp', label: 'C#' },
          { value: 'ruby', label: 'Ruby' },
          { value: 'go', label: 'Go' },
          { value: 'rust', label: 'Rust' },
          { value: 'php', label: 'PHP' },
          { value: 'other', label: 'Other' }
        ]
      },
      {
        name: 'skill_level',
        label: 'Your Experience Level',
        type: 'dropdown',
        default: 'intermediate',
        options: [
          { value: 'beginner', label: 'Beginner - New to programming' },
          { value: 'intermediate', label: 'Intermediate - Know the basics' },
          { value: 'advanced', label: 'Advanced - Want deep insights' }
        ]
      },
      {
        name: 'explanation_style',
        label: 'Explanation Style',
        type: 'dropdown',
        default: 'line_by_line',
        options: [
          { value: 'line_by_line', label: 'Line-by-line walkthrough' },
          { value: 'high_level_first', label: 'High-level overview first, then details' },
          { value: 'patterns', label: 'Focus on patterns & concepts' },
          { value: 'eli5', label: 'ELI5 (Explain Like I\'m 5)' }
        ]
      },
      {
        name: 'include_purpose',
        label: 'Include what each part does',
        type: 'checkbox',
        default: true
      },
      {
        name: 'include_why',
        label: 'Include why it\'s written this way',
        type: 'checkbox',
        default: true
      },
      {
        name: 'include_mistakes',
        label: 'Include common mistakes to avoid',
        type: 'checkbox',
        default: true
      },
      {
        name: 'include_alternatives',
        label: 'Include alternative approaches',
        type: 'checkbox',
        default: false
      }
    ],
    promptTemplate: `You are an expert {language} developer and teacher. I'm a {skill_level} programmer learning {language}.

I'll paste some code below. Please explain it using a {explanation_style} approach that teaches me the underlying concepts.

For each section, explain:{include_purpose}{include_why}{include_mistakes}{include_alternatives}

Format your response as:

## Lines X-Y: [Purpose]
**Code:** \`[the code]\`
**Explanation:** [detailed breakdown in plain English]
**Key concept:** [the pattern/principle being used]

Focus on teaching concepts and patterns, not just translating syntax into English.

[PASTE YOUR CODE HERE]`
  },
  {
    id: 'code_review',
    category: 'code',
    title: 'Code Review & Improvements',
    icon: 'CheckCircle',
    description: 'Get expert code quality feedback',
    fields: [
      {
        name: 'language',
        label: 'Programming Language',
        type: 'dropdown',
        default: 'javascript',
        options: [
          { value: 'javascript', label: 'JavaScript' },
          { value: 'python', label: 'Python' },
          { value: 'typescript', label: 'TypeScript' },
          { value: 'java', label: 'Java' },
          { value: 'cpp', label: 'C++' },
          { value: 'csharp', label: 'C#' },
          { value: 'ruby', label: 'Ruby' },
          { value: 'go', label: 'Go' },
          { value: 'rust', label: 'Rust' },
          { value: 'php', label: 'PHP' },
          { value: 'other', label: 'Other' }
        ]
      },
      {
        name: 'review_focus',
        label: 'Review Focus',
        type: 'dropdown',
        default: 'comprehensive',
        options: [
          { value: 'comprehensive', label: 'Comprehensive review (all aspects)' },
          { value: 'security', label: 'Security vulnerabilities' },
          { value: 'performance', label: 'Performance optimization' },
          { value: 'readability', label: 'Readability & maintainability' },
          { value: 'best_practices', label: 'Best practices & idioms' },
          { value: 'bugs', label: 'Potential bugs & edge cases' }
        ]
      },
      {
        name: 'provide_refactored',
        label: 'Provide refactored version',
        type: 'checkbox',
        default: true
      }
    ],
    promptTemplate: `You are a senior {language} developer conducting a code review with focus on {review_focus}.

Please review the code I'll paste below and provide:

1. **Issues Found** - Categorized by severity (Critical/Major/Minor)
   - Security vulnerabilities
   - Potential bugs or edge cases
   - Performance bottlenecks
   - Code smells and anti-patterns

2. **Specific Improvements** - For each issue:
   - What's wrong and why it matters
   - How to fix it (with code examples)
   - Best practice explanation

3. **Best Practices Check**
   - Language-specific idioms and conventions
   - Error handling approach
   - Code organization and structure
   - Naming conventions and clarity
{provide_refactored}

Format each finding as:
**[Severity] Issue Name**
- **Problem:** [description]
- **Impact:** [why it matters]
- **Fix:** [solution with code]
- **Why:** [best practice explanation]

[PASTE YOUR CODE HERE]`
  },
  {
    id: 'documentation',
    category: 'code',
    title: 'Write Documentation',
    icon: 'FileText',
    description: 'Generate professional code documentation',
    fields: [
      {
        name: 'language',
        label: 'Programming Language',
        type: 'dropdown',
        default: 'javascript',
        options: [
          { value: 'javascript', label: 'JavaScript' },
          { value: 'python', label: 'Python' },
          { value: 'typescript', label: 'TypeScript' },
          { value: 'java', label: 'Java' },
          { value: 'cpp', label: 'C++' },
          { value: 'csharp', label: 'C#' },
          { value: 'ruby', label: 'Ruby' },
          { value: 'go', label: 'Go' },
          { value: 'rust', label: 'Rust' },
          { value: 'php', label: 'PHP' },
          { value: 'other', label: 'Other' }
        ]
      },
      {
        name: 'doc_type',
        label: 'Documentation Type',
        type: 'dropdown',
        default: 'function',
        options: [
          { value: 'function', label: 'Function/Method documentation' },
          { value: 'api', label: 'API documentation' },
          { value: 'readme', label: 'README file' },
          { value: 'inline', label: 'Inline comments' },
          { value: 'class', label: 'Class/Module documentation' }
        ]
      },
      {
        name: 'doc_standard',
        label: 'Documentation Standard',
        type: 'dropdown',
        default: 'auto',
        options: [
          { value: 'auto', label: 'Auto-detect from language' },
          { value: 'jsdoc', label: 'JSDoc (JavaScript)' },
          { value: 'sphinx', label: 'Sphinx (Python)' },
          { value: 'javadoc', label: 'JavaDoc (Java)' },
          { value: 'xmldoc', label: 'XML Documentation (C#)' },
          { value: 'markdown', label: 'Markdown' }
        ]
      },
      {
        name: 'include_examples',
        label: 'Include usage examples',
        type: 'checkbox',
        default: true
      }
    ],
    promptTemplate: `You are a senior technical writer who has documented thousands of codebases, from open-source libraries with millions of users to internal enterprise systems. You understand that great documentation isn't just about describing what code does — it's about helping developers use it correctly, debug problems faster, and maintain it over time.

Language: {language}
Documentation Type: {doc_type}
Standard: {doc_standard}
Include Examples: {include_examples}

PROFESSIONAL DOCUMENTATION FRAMEWORK:

## DOCUMENTATION PHILOSOPHY

Bad documentation:
✗ States the obvious ("This function adds two numbers")
✗ Gets outdated immediately
✗ Doesn't explain WHY, only WHAT
✗ Missing examples for non-trivial usage
✗ Inconsistent formatting
✗ No error cases documented

Great documentation:
[TIP] Explains intent and design decisions
[TIP] Shows real-world usage patterns
[TIP] Covers edge cases and gotchas
[TIP] Includes what NOT to do
[TIP] Helps debugging when things fail
[TIP] Maintained as code changes

## DOC TYPE: {doc_type}

### For FUNCTION/METHOD Documentation:

**Required Sections:**

**Purpose & Context:**
- What problem does this solve?
- When should developers use this?
- When should they NOT use this?
- How does it fit in the larger system?

**Signature:**
Proper {doc_standard} formatted signature with all parameters

**Parameters:**
For each parameter:
\\\`\\\`\\\`
@param {type} name - Description
  - Valid values: [constraints]
  - Default: [if applicable]
  - Optional/Required
  - Edge cases: [empty string, null, negative numbers, etc.]
\\\`\\\`\\\`

**Return Value:**
- Type and structure
- Different values for different conditions
- Null/undefined cases
- Error returns

**Throws/Errors:**
- All possible exceptions
- When each is thrown
- How to prevent/handle

**Side Effects:**
- State mutations
- API calls
- File system changes
- Logging
- Events triggered

**Performance:**
- Time complexity
- Space complexity
- When performance matters for this function

**Examples:**
{include_examples}

**Common Mistakes:**
- Typical misuses
- Anti-patterns
- What looks like it should work but doesn't

**See Also:**
- Related functions
- Alternative approaches
- Migration notes from deprecated versions

### For API Documentation:

**Endpoint Overview:**
- Purpose and use case
- Authentication requirements
- Rate limits

**Request:**
- HTTP method
- URL structure with path parameters
- Query parameters
- Headers
- Request body schema with examples
- Content-Type

**Response:**
- Success responses (200, 201, etc.) with schema
- Error responses (400, 401, 404, 500) with schema
- Headers
- Pagination structure

**Examples:**
- cURL example
- Code examples in popular languages
- Common request/response pairs
- Error response examples

**Rate Limiting:**
- Limits and windows
- Headers returned
- What happens when exceeded

**Changelog:**
- Version history
- Breaking changes
- Deprecation notices

### For README Files:

**Structure:**

**# Project Name**
One-line description (the "elevator pitch")

**## What It Does**
2-3 paragraph overview:
- Problem it solves
- How it solves it
- Key features/benefits
- Who it's for

**## Quick Start**
Get something working in <5 minutes:
\\\`\\\`\\\`bash
# Absolute minimum to get started
\\\`\\\`\\\`

**## Installation**
Detailed setup for {language}:
- Prerequisites (versions!)
- Package manager commands
- Environment setup
- Configuration files

**## Usage**
Basic usage examples:
\\\`\\\`\\\`{language}
// Most common use case
// Second most common use case  
// Important edge case
\\\`\\\`\\\`

**## API Reference**
Link to detailed docs or include inline

**## Configuration**
- All configurable options
- Environment variables
- Config file format
- Defaults and overrides

**## Development**
- How to contribute
- Running tests
- Building from source
- Project structure

**## Troubleshooting**
Common problems and solutions

**## License**

### For INLINE COMMENTS:

**When to Comment:**
[TIP] WHY, not WHAT (code shows what)
[TIP] Non-obvious algorithms
[TIP] Business logic rationale
[TIP] Workarounds and hacks (with explanation)
[TIP] Performance-critical sections
[TIP] Security implications
[TIP] TODO/FIXME with context

**When NOT to Comment:**
✗ Self-explanatory code
✗ What the next line does
✗ Obvious statements
✗ Commented-out code (delete it)

**Format:**
\\\`\\\`\\\`{language}
// GOOD: Explains WHY
// Using binary search here because dataset can be 100K+ items
// and linear search was taking 2+ seconds in production

// BAD: Explains WHAT (obvious from code)
// Loop through the array
\\\`\\\`\\\`

### For CLASS/MODULE Documentation:

**Class-Level:**
- Purpose and responsibility
- Design patterns used
- State management approach
- Thread safety
- Lifecycle (initialization, cleanup)
- Inheritance hierarchy
- Usage examples

**Module-Level:**
- Module purpose
- Key exports
- Dependencies
- Usage patterns
- Architectural notes

## LANGUAGE-SPECIFIC CONVENTIONS

### JavaScript/TypeScript (JSDoc):
\\\`\\\`\\\`javascript
/**
 * Brief description here.
 * 
 * Longer description with context, design decisions, and usage guidance.
 * 
 * @param {string} name - User's full name
 * @param {Object} options - Configuration options
 * @param {boolean} [options.strict=false] - Enable strict validation
 * @returns {Promise<User>} Resolves with created user object
 * @throws {ValidationError} When name is invalid
 * @example
 * const user = await createUser('John Doe', { strict: true });
 */
\\\`\\\`\\\`

### Python (Sphinx/docstring):
\\\`\\\`\\\`python
def create_user(name: str, options: dict = None) -> User:
    """
    Brief description here.
    
    Longer description with context, design decisions, and usage guidance.
    
    Args:
        name: User's full name
        options: Configuration options
            - strict (bool): Enable strict validation. Defaults to False.
    
    Returns:
        User: The created user object
    
    Raises:
        ValidationError: When name is invalid
    
    Examples:
        >>> user = create_user('John Doe', {'strict': True})
    
    Note:
        This function makes a database call and should not be called in loops.
    """
\\\`\\\`\\\`

### Java (JavaDoc):
\\\`\\\`\\\`java
/**
 * Brief description here.
 * 
 * <p>Longer description with context, design decisions, and usage guidance.</p>
 * 
 * @param name User's full name
 * @param options Configuration options (nullable)
 * @return The created user object
 * @throws ValidationException When name is invalid
 * @see User
 * @since 2.0
 * @example
 * <pre>
 * User user = createUser("John Doe", options);
 * </pre>
 */
\\\`\\\`\\\`

## EXAMPLE QUALITY STANDARDS

**Good Examples:**
[TIP] Real-world scenarios
[TIP] Copy-paste ready
[TIP] Show common patterns
[TIP] Include error handling
[TIP] Demonstrate best practices
[TIP] Cover edge cases

**Bad Examples:**
✗ Toy examples (foo, bar, baz)
✗ Incomplete code snippets
✗ Missing imports/setup
✗ Don't show error handling
✗ Only happy path

## DOCUMENTATION MAINTENANCE

**Update triggers:**
- Any signature change
- New edge cases discovered
- Bug fixes
- Performance improvements
- Deprecations
- Security issues

**Version history:**
Track changes to API:
- Added
- Changed  
- Deprecated
- Removed
- Fixed
- Security

Now generate professional, maintainable {doc_type} for {language} code following {doc_standard} standards.

[PASTE YOUR CODE HERE]`
  },
  {
    id: 'optimize_code',
    category: 'code',
    title: 'Optimize Performance',
    icon: 'Zap',
    description: 'Improve code speed and efficiency',
    fields: [
      {
        name: 'language',
        label: 'Programming Language',
        type: 'dropdown',
        default: 'javascript',
        options: [
          { value: 'javascript', label: 'JavaScript' },
          { value: 'python', label: 'Python' },
          { value: 'typescript', label: 'TypeScript' },
          { value: 'java', label: 'Java' },
          { value: 'cpp', label: 'C++' },
          { value: 'csharp', label: 'C#' },
          { value: 'go', label: 'Go' },
          { value: 'rust', label: 'Rust' }
        ]
      },
      {
        name: 'performance_issue',
        label: 'Performance Issue',
        type: 'text',
        placeholder: 'e.g., slow with large datasets, high memory usage',
        required: false
      },
      {
        name: 'optimization_goal',
        label: 'Optimization Goal',
        type: 'dropdown',
        default: 'speed',
        options: [
          { value: 'speed', label: 'Faster execution time' },
          { value: 'memory', label: 'Lower memory usage' },
          { value: 'both', label: 'Both speed and memory' },
          { value: 'scalability', label: 'Better scalability' }
        ]
      }
    ],
    promptTemplate: `You are a performance optimization expert for {language}.

Performance issue: {performance_issue}
Optimization goal: {optimization_goal}

Please analyze the code I'll paste below and provide:

1. **Performance Analysis**
   - Identify bottlenecks and inefficiencies
   - Big-O complexity analysis (time and space)
   - Profiling insights and hotspots

2. **Optimized Version**
   - Provide refactored code with improvements
   - Explain each optimization technique used
   - Compare before/after complexity

3. **Trade-offs**
   - What was gained vs. what was sacrificed
   - When to use this optimization
   - Alternative approaches for different scenarios

4. **Benchmarking Guidance**
   - How to measure the improvement
   - What metrics to track
   - Testing recommendations

[PASTE YOUR CODE HERE]`
  },
  {
    id: 'convert_code',
    category: 'code',
    title: 'Convert Between Languages',
    icon: 'RefreshCcw',
    description: 'Translate code from one language to another',
    fields: [
      {
        name: 'from_language',
        label: 'From Language',
        type: 'dropdown',
        default: 'javascript',
        options: [
          { value: 'javascript', label: 'JavaScript' },
          { value: 'python', label: 'Python' },
          { value: 'typescript', label: 'TypeScript' },
          { value: 'java', label: 'Java' },
          { value: 'cpp', label: 'C++' },
          { value: 'csharp', label: 'C#' },
          { value: 'ruby', label: 'Ruby' },
          { value: 'go', label: 'Go' },
          { value: 'rust', label: 'Rust' },
          { value: 'php', label: 'PHP' }
        ]
      },
      {
        name: 'to_language',
        label: 'To Language',
        type: 'dropdown',
        default: 'python',
        options: [
          { value: 'javascript', label: 'JavaScript' },
          { value: 'python', label: 'Python' },
          { value: 'typescript', label: 'TypeScript' },
          { value: 'java', label: 'Java' },
          { value: 'cpp', label: 'C++' },
          { value: 'csharp', label: 'C#' },
          { value: 'ruby', label: 'Ruby' },
          { value: 'go', label: 'Go' },
          { value: 'rust', label: 'Rust' },
          { value: 'php', label: 'PHP' }
        ]
      },
      {
        name: 'preserve_style',
        label: 'Use idiomatic style',
        type: 'checkbox',
        default: true
      }
    ],
    promptTemplate: `You are an expert in both {from_language} and {to_language}.

I need to convert code from {from_language} to {to_language}.

Important: {preserve_style}

Please provide:

1. **Converted Code** - Not just a literal translation, but an idiomatic {to_language} version
2. **Key Differences** - Explain how the languages handle this differently
3. **Idioms & Patterns** - {to_language}-specific best practices applied
4. **Dependencies** - Any libraries or imports needed in {to_language}
5. **Notes** - Things that don't translate directly and why

[PASTE YOUR {from_language} CODE HERE]`
  }
];
