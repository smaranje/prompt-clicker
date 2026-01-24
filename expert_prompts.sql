-- UPGRADE TO EXPERT PROMPTS
-- Run this in your Supabase SQL Editor to replace generic content with "God-Tier" prompts.

-- 1. Chain of Density (Summarization)
UPDATE community_prompts 
SET content = 'Article: [Insert Article Here]

You will generate increasingly concise, entity-dense summaries of the above article. 

Repeat the following 2 steps 5 times. 

Step 1. Identify 1-3 informative entities (";" delimited) from the Article which are missing from the previously generated summary. 
Step 2. Write a new, denser summary of identical length which covers every entity and detail from the previous summary plus the Missing Entities. 

A Missing Entity is:
- relevant to the main story,
- specific yet concise (5 words or fewer),
- novel (not in the previous summary),
- faithful (present in the Article),
- anywhere (can be located anywhere in the Article).

Guidelines:
- The first summary should be long (4-5 sentences, ~80 words) yet highly non-specific, containing little information beyond the entities marked as missing. Use verbose language and fillers (e.g., "this article discusses") to reach ~80 words.
- Make every word count: rewrite the previous summary to improve flow and make space for additional entities.
- Make space with fusion, compression, and removal of uninformative phrases like "the article discusses".
- The summaries should become highly dense and concise yet self-contained, i.e., easily understood without the Article. 
- Missing entities can appear anywhere in the new summary.
- Never drop entities from the previous summary. If space cannot be made, add fewe missing entities. 

Remember, use the exact same number of words for each summary.'
WHERE title LIKE '%Blog Post%' OR title LIKE '%Summar%' OR title LIKE '%Article%';

-- 2. CO-STAR Framework (Business Communication)
UPDATE community_prompts 
SET content = '# CONTEXT #
I am a senior product manager preparing for a quarterly business review (QBR) with the executive team. The updated features for our SaaS product have seen a 15% increase in user retention, but a 5% drop in new user acquisition.

# OBJECTIVE #
Write an executive summary for my presentation deck that highlights the retention win while framing the acquisition drop as a known temporary trade-off that we are already addressing.

# STYLE #
Professional, concise, data-driven, and confident. Avoid defensive language.

# TONE #
Strategic and forward-looking.

# AUDIENCE #
C-Suite executives (CEO, CTO, CFO). They care about high-level metrics, ROI, and strategic alignment, not nitty-gritty implementation details.

# RESPONSE FORMAT #
- A 3-sentence executive summary paragraph
- 3 key bullet points for "Wins"
- 3 key bullet points for "Challenges & Solutions"
- a 1-sentence "Ask" or "Next Step"'
WHERE title LIKE '%Business%' OR title LIKE '%Review%' OR title LIKE '%Email%';

-- 3. Tree of Thoughts (Complex Reasoning)
UPDATE community_prompts 
SET content = 'Imagine three different experts are answering this question.
All experts will write down 1 step of their thinking,
then share it with the group.
Then all experts will go on to the next step, etc.
If any expert realizes they''re wrong at any point then they leave.
The question is: [Insert Complex Question Here]'
WHERE title LIKE '%Reasoning%' OR title LIKE '%Thinking%' OR title LIKE '%Ex%';

-- 4. Midjourney Photorealism (Creative)
UPDATE community_prompts 
SET content = '/imagine prompt: editorial photography, detailed portrait of a cyberpunk hacker in a neon-lit alleyway, raining, reflection in puddles, shot on 35mm lens, f/1.8, bokeh, cinematic lighting, volumetric fog, high contrast, 8k resolution, unreal engine 5 render style --ar 16:9 --v 6.0 --style raw --s 750'
WHERE title LIKE '%Midjourney%' OR title LIKE '%Stable%' OR title LIKE '%Image%';

-- 5. Senior Code Review (Coding)
UPDATE community_prompts 
SET content = 'Act as a Principal Software Engineer at Google. Review the following code for:
1. Security vulnerabilities (OWASP Top 10)
2. Performance bottlenecks (Time/Space complexity)
3. Maintainability (SOLID principles)
4. TypeScript best practices (Strict typing, no ''any'')

Format your response as a markdown table with columns: [Severity, File:Line, Issue, Recommendation, Code Fix].

Code to review:
[Paste Code Here]'
WHERE title LIKE '%Code%' OR title LIKE '%React%' OR title LIKE '%Debug%' OR title LIKE '%Hook%';

-- 6. Generic Framework for everything else (fallback)
UPDATE community_prompts 
SET content = 'Act as an expert [Role]. 
Your task is to [Task] for [Audience].

Context: [Insert Context]

Constraints:
1. Use clear, accessible language (Grade 8 reading level).
2. Do not use jargon.
3. Keep the Output under 500 words.
4. Use markdown formatting (headers, bullets).

Output Format:
# [Title]
## Executive Summary
[Summary]
## Detailed Analysis
[Analysis]'
WHERE content LIKE 'Write a extensive guide%';
gygygytf