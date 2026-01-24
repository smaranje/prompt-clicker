const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read .env.local manually
const envPath = path.resolve(__dirname, '../.env.local');
let supabaseUrl, supabaseKey;

try {
    const envFile = fs.readFileSync(envPath, 'utf-8');
    const getEnv = (key) => {
        const match = envFile.match(new RegExp(`${key}=(.*)`));
        return match ? match[1].trim() : null;
    };

    supabaseUrl = getEnv('VITE_SUPABASE_URL');
    supabaseKey = getEnv('VITE_SUPABASE_ANON_KEY');
} catch (e) {
    console.error('Error reading .env.local:', e.message);
    process.exit(1);
}

if (!supabaseUrl || !supabaseKey) {
    console.error('Credentials not found in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const prompts = [
    {
        title: "Executive Level Headshot",
        description: "Transform selfie into C-suite professional profile photo",
        category: "business",
        icon: "Briefcase",
        author: "PromptCraft Team",
        badge: "featured",
        loves: 124,
        content: "First ask me for a selfie. Transform my selfie into a crisp, executive-level professional headshot suitable for C-suite LinkedIn profiles. The lighting should be dramatic yet professional with soft shadows. My posture is confident and approachable, wearing a dark navy blazer. The background is a modern corporate office with floor-to-ceiling windows, slightly blurred.",
        example_input: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        example_image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
    },
    {
        title: "Legal Professional Headshot",
        description: "Authoritative headshot for law firms and legal directories",
        category: "business",
        icon: "Briefcase",
        author: "PromptCraft Team",
        badge: null,
        loves: 89,
        content: "First ask me for a selfie. Convert my selfie into a sharp, authoritative headshot perfect for law firm partnerships and legal directories. The lighting should be classic and timeless with controlled shadows. My expression is serious yet personable, shoulders square to camera. The background is a traditional mahogany-paneled office with law books, elegantly blurred.",
        example_image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
    },
    {
        title: "Hire-Me LinkedIn Headshot",
        description: "Approachable, high-conversion photo for job hunters",
        category: "business",
        icon: "User",
        author: "PromptCraft Team",
        badge: "trending",
        loves: 456,
        content: "First ask me for a selfie. Convert my selfie into an approachable LinkedIn headshot that screams 'hire me now.' The lighting should be natural daylight with soft, even coverage. My smile is genuine and confident, eyes making direct contact with camera. The background is a bright, modern co-working space with plants and natural elements, professionally blurred.",
        example_input: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        example_image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop"
    },
    {
        title: "Industry Expert Profile",
        description: "Media-ready headshot for podcasts and interviews",
        category: "business",
        icon: "Briefcase",
        author: "PromptCraft Team",
        badge: null,
        loves: 112,
        content: "First ask me for a selfie. Convert my selfie into an industry expert headshot suitable for podcast appearances and media interviews. The lighting should be broadcast-quality with professional setup. My demeanor is knowledgeable and articulate, posture media-ready. The background is a professional studio or broadcast setting, cinematically blurred.",
        example_image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=1000&fit=crop"
    },
    {
        title: "Artistic Creative Portrait",
        description: "Moody, artistic headshot for creative portfolios",
        category: "creative",
        icon: "Palette",
        author: "PromptCraft Team",
        badge: "gem",
        loves: 231,
        content: "First ask me for a selfie. Convert my selfie into an artistic headshot perfect for creative portfolios and gallery representations. The lighting should be moody and dramatic with artistic shadows. My expression is contemplative and inspired, eyes reflecting creativity. The background is an art studio with canvases and creative tools, artistically blurred.",
        example_image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
    },
    {
        title: "Influencer Content Creator",
        description: "Trendy, social-media optimized aesthetic headshot",
        category: "writing", // Optimized for feed content
        icon: "Camera",
        author: "PromptCraft Team",
        badge: "viral",
        loves: 567,
        content: "First ask me for a selfie. Convert my selfie into an influencer-worthy headshot perfect for brand collaborations and sponsorship pitches. The lighting should be social media optimized with perfect skin enhancement. My vibe is trendy and engaging, expression naturally photogenic. The background is an Instagram-worthy location with aesthetic elements, beautifully blurred.",
        example_input: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        example_image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1000&fit=crop"
    },
    {
        title: "Healthcare Professional",
        description: "Trustworthy, clean medical professional headshot",
        category: "business",
        icon: "Heart",
        author: "PromptCraft Team",
        badge: null,
        loves: 143,
        content: "First ask me for a selfie. Transform my selfie into a trustworthy healthcare professional headshot perfect for medical practice websites. The lighting should be clean and clinical yet warm and approachable. My expression is caring and competent, conveying medical expertise. The background is a modern medical office with subtle medical equipment, professionally blurred.",
        example_image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=1000&fit=crop"
    },
    {
        title: "Therapist & Counselor",
        description: "Warm, empathetic headshot for mental health pros",
        category: "business",
        icon: "Heart",
        author: "PromptCraft Team",
        badge: null,
        loves: 167,
        content: "First ask me for a selfie. Convert my selfie into a therapist's headshot that immediately puts clients at ease. The lighting should be soft and comforting with natural warmth. My presence is calm and empathetic, eyes conveying understanding and safety. The background is a peaceful therapy office with plants and calming colors, soothingly blurred.",
        example_image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop"
    },
    {
        title: "Real Estate Power Agent",
        description: "High-confidence, sales-oriented professional photo",
        category: "business",
        icon: "Home",
        author: "PromptCraft Team",
        badge: "trending",
        loves: 289,
        content: "First ask me for a selfie. Transform my selfie into a real estate agent headshot that sells houses before I even speak. The lighting should be trustworthy and successful with professional confidence. My smile is reassuring and knowledgeable, conveying real estate expertise. The background is an upscale property or modern real estate office, luxuriously blurred.",
        example_image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop"
    },
    {
        title: "Startup Founder",
        description: "Visionary, modern headshot for founders & investors",
        category: "business",
        icon: "Rocket",
        author: "PromptCraft Team",
        badge: "featured",
        loves: 312,
        content: "First ask me for a selfie. Transform my selfie into an entrepreneur's headshot that attracts investors and business partners. The lighting should be visionary and ambitious with success-oriented shadows. My presence is innovative and determined, eyes reflecting business acumen. The background is a startup office or modern business environment, strategically blurred.",
        example_image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop"
    }
];

async function seed() {
    console.log(`Inserting ${prompts.length} prompts...`);

    // Clean up existing duplicates based on title
    const titles = prompts.map(p => p.title);
    const { error: delError } = await supabase
        .from('community_prompts')
        .delete()
        .in('title', titles);

    if (delError) {
        console.error('Error cleaning up existing prompts:', delError);
    } else {
        console.log('Cleaned up existing prompts.');
    }

    // Insert new ones with images
    const { data, error } = await supabase
        .from('community_prompts')
        .insert(prompts)
        .select();

    if (error) {
        console.error('Error inserting prompts:', error);
    } else {
        console.log('Success! Inserted prompts:', data ? data.length : 0);
    }
}

seed();
