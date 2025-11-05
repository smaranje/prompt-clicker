import { Template } from '@/types/templates';

export const templates: Template[] = [
  // WRITING & CONTENT
  {
    id: 'email_professional',
    category: 'writing',
    title: 'Write a Professional Email',
    icon: '✉️',
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
    promptTemplate: `Write a {email_type} email to {recipient} about {topic}. Cover these key points: {key_points}. Keep it {length} with a {tone} tone. Use proper email structure with greeting and closing.{include_cta}`
  },
  {
    id: 'social_posts',
    category: 'writing',
    title: 'Create Social Media Posts',
    icon: '📱',
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
        name: 'topic',
        label: 'What to post about',
        type: 'text',
        placeholder: 'product launch, industry insight, team achievement'
      },
      {
        name: 'goal',
        label: 'Post goal',
        type: 'dropdown',
        default: 'engagement',
        options: [
          { value: 'engagement', label: 'Drive engagement' },
          { value: 'awareness', label: 'Build awareness' },
          { value: 'traffic', label: 'Generate traffic' },
          { value: 'leads', label: 'Generate leads' }
        ]
      },
      {
        name: 'style',
        label: 'Style',
        type: 'dropdown',
        default: 'professional',
        options: [
          { value: 'professional', label: 'Professional' },
          { value: 'casual', label: 'Casual & Relatable' },
          { value: 'inspirational', label: 'Inspirational' },
          { value: 'educational', label: 'Educational' },
          { value: 'storytelling', label: 'Story-driven' }
        ]
      },
      {
        name: 'include_hashtags',
        label: 'Include hashtags',
        type: 'checkbox',
        default: true
      }
    ],
    promptTemplate: `Create a {style} {platform} post about {topic}. Goal: {goal}. Make it platform-specific, engaging, and include a hook to grab attention in the first line.{include_hashtags} Keep it within {platform} character limits and best practices.`
  },
  {
    id: 'article_draft',
    category: 'writing',
    title: 'Draft an Article or Blog Post',
    icon: '📄',
    description: 'Create article outlines and drafts',
    fields: [
      {
        name: 'topic',
        label: 'Article topic',
        type: 'text',
        placeholder: '10 productivity tips for remote workers'
      },
      {
        name: 'audience',
        label: 'Target audience',
        type: 'text',
        placeholder: 'remote professionals, startup founders'
      },
      {
        name: 'angle',
        label: 'Unique angle',
        type: 'text',
        placeholder: 'based on neuroscience research, personal experience',
        required: false
      },
      {
        name: 'length',
        label: 'Length',
        type: 'dropdown',
        default: 'medium',
        options: [
          { value: 'short', label: 'Short (500-800 words)' },
          { value: 'medium', label: 'Medium (1000-1500 words)' },
          { value: 'long', label: 'Long (2000+ words)' }
        ]
      },
      {
        name: 'include_examples',
        label: 'Include real examples',
        type: 'checkbox',
        default: true
      }
    ],
    promptTemplate: `Write a {length} article about "{topic}" for {audience}. Unique angle: {angle}. Structure it with: 1) Attention-grabbing intro with hook, 2) Clear section headers, 3) Actionable takeaways, 4) Strong conclusion with call-to-action.{include_examples} Use storytelling and data to support points.`
  },
  {
    id: 'rewrite_text',
    category: 'writing',
    title: 'Improve/Rewrite Existing Text',
    icon: '✍️',
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
    promptTemplate: `{purpose} the following text. Maintain the original meaning but improve the writing quality.`
  },
  {
    id: 'product_description',
    category: 'writing',
    title: 'Write Product Descriptions',
    icon: '🏷️',
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
    promptTemplate: `Write a {tone} product description for {product}. Highlight these features: {features}. Make it compelling and clear.`
  },

  // WORK & BUSINESS
  {
    id: 'meeting_agenda',
    category: 'business',
    title: 'Create Meeting Agenda',
    icon: '📋',
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
    promptTemplate: `Create a {duration}-minute {meeting_type} agenda focused on {purpose}. Include time allocations for each topic and clear objectives.`
  },
  {
    id: 'business_report',
    category: 'business',
    title: 'Generate Business Report',
    icon: '📊',
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
    promptTemplate: `Create a {report_type} about {topic}. Include an executive summary, key findings, and actionable recommendations.`
  },
  {
    id: 'job_description',
    category: 'business',
    title: 'Write Job Description',
    icon: '💼',
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
    promptTemplate: `Write a job description for a {experience} {role}. Focus on these key skills: {key_skills}. Include responsibilities, requirements, and company culture fit.`
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
    promptTemplate: `Create a {duration}-minute presentation outline about {topic} for {audience}. Include slide-by-slide structure with key points and talking points.`
  },

  // LEARNING & RESEARCH
  {
    id: 'summarize_text',
    category: 'learning',
    title: 'Summarize Long Text',
    icon: '📝',
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
    promptTemplate: `Provide a {length} summary focusing on {focus}. Make it clear and easy to understand.`
  },
  {
    id: 'explain_concept',
    category: 'learning',
    title: 'Explain Complex Concepts',
    icon: '💡',
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
    promptTemplate: `Explain {concept} for {audience}. Use analogies and simple language. Break it down step by step.`
  },
  {
    id: 'study_guide',
    category: 'learning',
    title: 'Create Study Guide',
    icon: '📚',
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
    promptTemplate: `Create a {format} study guide for {topic}. Make it comprehensive and easy to review.`
  },
  {
    id: 'research_questions',
    category: 'learning',
    title: 'Generate Research Questions',
    icon: '🔍',
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
    promptTemplate: `Generate 5-7 {depth} research questions about {topic}. Make them specific, measurable, and academically sound.`
  },

  // CREATIVE & PERSONAL
  {
    id: 'story_idea',
    category: 'creative',
    title: 'Generate Story Ideas',
    icon: '📖',
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
    promptTemplate: `Generate 3 unique {genre} story ideas incorporating {theme}. Include plot hooks, main conflict, and potential character arcs.`
  },
  {
    id: 'brainstorm',
    category: 'creative',
    title: 'Brainstorm Ideas',
    icon: '💭',
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
    promptTemplate: `Brainstorm 10 {style} ideas for {topic}. Provide variety and explain why each could work.`
  },
  {
    id: 'personal_bio',
    category: 'creative',
    title: 'Write Personal Bio',
    icon: '👤',
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
    promptTemplate: `Write a {length} {purpose} bio highlighting: {background}. Make it engaging and memorable.`
  },

  // BROWSE/NOT SURE CATEGORY - Quick Start Templates
  {
    id: 'general_helper',
    category: 'browse',
    title: 'Ask Me Anything',
    icon: '❓',
    description: 'Get help with any question or task',
    fields: [
      {
        name: 'question',
        label: 'What do you need help with?',
        type: 'text',
        placeholder: 'e.g., how to cook pasta, explain quantum physics'
      }
    ],
    promptTemplate: `Help me with the following: {question}. Please provide a clear, practical answer.`
  },
  {
    id: 'task_breakdown',
    category: 'browse',
    title: 'Break Down Complex Tasks',
    icon: '📋',
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
      }
    ],
    promptTemplate: `Break down this task into clear, actionable steps: {task}. Consider a {timeframe} timeframe and provide a realistic plan with milestones.`
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
      }
    ],
    promptTemplate: `Help me decide: {decision}. My priorities are: {priorities}. Provide a balanced pros and cons analysis with a framework for making this decision.`
  },
  {
    id: 'quick_tips',
    category: 'browse',
    title: 'Get Quick Tips & Advice',
    icon: '💡',
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
    promptTemplate: `Give me {focus} for this situation: {situation}. Make the advice specific, actionable, and easy to implement.`
  },

  // CODE & TECH
  {
    id: 'debug_code',
    category: 'code',
    title: 'Debug Code Issue',
    icon: '🐛',
    description: 'Get help fixing code errors',
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
          { value: 'other', label: 'Other' }
        ]
      },
      {
        name: 'issue',
        label: 'What\'s Wrong',
        type: 'text',
        placeholder: 'describe the error or unexpected behavior'
      }
    ],
    promptTemplate: `Help me debug this {language} code. The issue is: {issue}. Explain what's wrong and how to fix it.`
  },
  {
    id: 'explain_code',
    category: 'code',
    title: 'Explain Code',
    icon: '📖',
    description: 'Understand how code works',
    fields: [
      {
        name: 'detail_level',
        label: 'Detail Level',
        type: 'dropdown',
        default: 'medium',
        options: [
          { value: 'high_level', label: 'High-level overview' },
          { value: 'medium', label: 'Medium detail' },
          { value: 'line_by_line', label: 'Line-by-line explanation' }
        ]
      }
    ],
    promptTemplate: `Provide a {detail_level} explanation of the following code. Make it clear for someone learning.`
  },
  {
    id: 'code_review',
    category: 'code',
    title: 'Code Review & Improvements',
    icon: '✅',
    description: 'Get code quality feedback',
    fields: [
      {
        name: 'focus',
        label: 'Focus On',
        type: 'dropdown',
        default: 'all',
        options: [
          { value: 'all', label: 'Overall quality' },
          { value: 'performance', label: 'Performance' },
          { value: 'security', label: 'Security' },
          { value: 'readability', label: 'Readability' },
          { value: 'best_practices', label: 'Best practices' }
        ]
      }
    ],
    promptTemplate: `Review this code focusing on {focus}. Suggest specific improvements with explanations.`
  },
  {
    id: 'documentation',
    category: 'code',
    title: 'Write Documentation',
    icon: '📄',
    description: 'Generate code documentation',
    fields: [
      {
        name: 'doc_type',
        label: 'Documentation Type',
        type: 'dropdown',
        default: 'function',
        options: [
          { value: 'function', label: 'Function/Method docs' },
          { value: 'api', label: 'API documentation' },
          { value: 'readme', label: 'README file' },
          { value: 'inline', label: 'Inline comments' }
        ]
      }
    ],
    promptTemplate: `Generate {doc_type} for the following code. Include parameter descriptions, return values, and usage examples.`
  }
];
