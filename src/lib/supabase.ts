import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials not found. Using mock data.');
}

export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface CommunityPrompt {
    id: string;
    title: string;
    description: string;
    category: string;
    icon: string;
    author: string;
    loves: number;
    badge?: 'viral' | 'trending' | 'gem' | 'featured' | null;
    content?: string;
    example_image?: string;
    example_input?: string;
    created_at: string;
}
