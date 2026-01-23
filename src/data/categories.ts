import { Category } from '@/types/templates';

export const categories: Category[] = [
  {
    id: 'writing',
    title: 'Writing & Content',
    icon: 'FileText',
    description: 'Emails, articles, posts, and scripts',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'business',
    title: 'Work & Business',
    icon: 'Briefcase',
    description: 'Reports, presentations, and analysis',
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'learning',
    title: 'Learning & Research',
    icon: 'BookOpen',
    description: 'Summaries, study guides, explanations',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'creative',
    title: 'Creative & Personal',
    icon: 'Palette',
    description: 'Stories, ideas, personal projects',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    id: 'code',
    title: 'Code & Tech',
    icon: 'Code2',
    description: 'Debugging, documentation, explanations',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'browse',
    title: 'Not Sure / Browse All',
    icon: 'Layers',
    description: 'Explore all available templates',
    gradient: 'from-slate-500 to-gray-600'
  }
];
