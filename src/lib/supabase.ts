import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials not found. Using mock data.');
    console.log('Debug Info:', {
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseAnonKey,
        urlLength: supabaseUrl?.length || 0,
        envMode: import.meta.env.MODE
    });
} else {
    console.log('Supabase initialized successfully with URL:', supabaseUrl);
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
    created_at: string;
}
