import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userInput } = await req.json();

    if (!userInput) {
      return new Response(
        JSON.stringify({ error: "User input is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY not configured");
    }

    // System prompt to generate expert-level prompts
    const systemPrompt = `You are an expert prompt engineer. Your job is to transform simple user requests into expert-level AI prompts that get perfect results on the first try.

Guidelines:
1. Add role definition (e.g., "Act as a...")
2. Provide clear context and constraints
3. Specify output format and structure
4. Include relevant best practices
5. Make it detailed but not overwhelming
6. Keep it under 300 words but comprehensive

The user's simple request will be transformed into a professional, structured prompt that would be used by an expert.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { 
            role: "user", 
            content: `Transform this simple request into an expert-level AI prompt: "${userInput}"` 
          }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI API error:", response.status, errorText);
      throw new Error("AI API request failed");
    }

    const data = await response.json();
    const generatedPrompt = data.choices?.[0]?.message?.content;

    if (!generatedPrompt) {
      throw new Error("No prompt generated");
    }

    return new Response(
      JSON.stringify({ prompt: generatedPrompt }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in magic-prompt function:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "An unexpected error occurred" 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
