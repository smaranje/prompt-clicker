-- Create community_prompts table
create table community_prompts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  category text not null,
  icon text not null default 'Sparkles',
  author text not null default 'Anonymous',
  loves integer default 0,
  badge text check (badge in ('viral', 'trending', 'gem', 'featured')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table community_prompts enable row level security;

-- Allow anyone to read prompts
create policy "Public prompts are viewable by everyone"
  on community_prompts for select
  using (true);

-- Allow anyone to insert prompts (for now - can add auth later)
create policy "Anyone can submit prompts"
  on community_prompts for insert
  with check (true);

-- Seed with mock data
insert into community_prompts (title, description, category, icon, author, loves, badge) values
('Viral Thread Hook Generator', 'Generate attention-grabbing Twitter thread hooks', 'writing', 'Twitter', 'Sarah Chen', 847, 'viral'),
('Senior Engineer Code Review', 'Get detailed code review feedback like a tech lead', 'code', 'Code2', 'Alex Rivera', 612, 'trending'),
('Product Launch Strategy', 'Turn product ideas into go-to-market plans', 'business', 'Rocket', 'Jamie Park', 523, 'featured'),
('Convert Jargon to Plain English', 'Make technical docs readable by anyone', 'writing', 'BookOpen', 'Morgan Lee', 445, 'gem'),
('Competitor Analysis Framework', 'Analyze competitors like a consulting firm', 'business', 'Target', 'Taylor Swift', 389, 'featured'),
('Design System Documentation', 'Turn Figma designs into developer-ready docs', 'code', 'Palette', 'Jordan Kim', 356, 'trending'),
('Sales Email Sequence', 'Cold outreach that actually gets replies', 'business', 'Mail', 'Casey Morgan', 298, null),
('API Documentation Generator', 'Create clear API docs from code', 'code', 'FileCode', 'Riley Johnson', 267, null);
