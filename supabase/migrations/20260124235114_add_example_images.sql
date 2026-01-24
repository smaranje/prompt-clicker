-- Add example_image and example_input columns to community_prompts
ALTER TABLE community_prompts
ADD COLUMN IF NOT EXISTS example_image text,
ADD COLUMN IF NOT EXISTS example_input text;

-- Add checking for valid URLs roughly (optional, skipping for flexibility)
