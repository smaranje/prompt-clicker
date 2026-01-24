import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query } = await req.json();
    const GROQ_API_KEY = Deno.env.get("GROQ_API_KEY");

    if (!GROQ_API_KEY) {
      throw new Error("GROQ_API_KEY is not configured");
    }

    const systemPrompt = `You are an AI assistant that matches user queries to the most appropriate prompt template. Analyze the user's intent and return the template ID and category that best matches their needs.

Available templates:
- email_professional (writing): Write professional emails
- social_posts (writing): Create social media posts
- article_draft (writing): Write articles or blog posts
- rewrite_text (writing): Improve or rewrite text
- product_description (writing): Write product descriptions
- meeting_agenda (business): Create meeting agendas
- business_report (business): Generate business reports
- job_description (business): Write job descriptions
- presentation_outline (business): Create presentation outlines
- summarize_text (learning): Summarize long text
- explain_concept (learning): Explain complex concepts
- study_guide (learning): Create study guides
- research_questions (learning): Generate research questions
- story_idea (creative): Generate story ideas
- brainstorm (creative): Brainstorm creative ideas
- personal_bio (creative): Write personal bios
- general_helper (browse): General AI assistant
- task_breakdown (browse): Break down complex tasks
- decision_helper (browse): Help make decisions
- quick_tips (browse): Get quick tips and advice
- debug_code (code): Debug code issues
- explain_code (code): Explain how code works
- code_review (code): Review code for improvements
- documentation (code): Write code documentation
- optimize_code (code): Optimize code performance
- convert_code (code): Convert code between languages

Return ONLY a JSON object with this exact format:
{
  "templateId": "template_id_here",
  "category": "category_name_here",
  "reason": "Brief explanation of why this template matches"
}`;

    // Use Groq API (OpenAI-compatible endpoint)
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: query }
        ],
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("Groq API error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI API error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    // Parse the JSON response from AI
    const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const result = JSON.parse(jsonMatch[0]);
      return new Response(JSON.stringify(result), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    throw new Error("Could not parse AI response");
  } catch (error) {
    console.error("Error in smart-search function:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});