import { Template } from '@/types/templates';

export const templates: Template[] = [
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
        placeholder: 'project status',
        required: false
      },
      {
        name: 'length',
        label: 'Length',
        type: 'dropdown',
        default: 'medium',
        options: [
          { value: 'brief', label: 'Brief' },
          { value: 'medium', label: 'Medium' },
          { value: 'detailed', label: 'Detailed' }
        ]
      },
      {
        name: 'tone',
        label: 'Tone',
        type: 'dropdown',
        default: 'formal',
        options: [
          { value: 'formal', label: 'Formal' },
          { value: 'friendly', label: 'Friendly' },
          { value: 'direct', label: 'Direct' },
          { value: 'enthusiastic', label: 'Enthusiastic' }
        ]
      },
      {
        name: 'include_cta',
        label: 'Call-to-action',
        type: 'checkbox',
        default: false
      },
      {
        name: 'include_deadline',
        label: 'Specific deadline/date',
        type: 'checkbox',
        default: false
      }
    ],
    promptTemplate: `Write a {email_type} email to {recipient} about {topic}. The email should be {length} in length with a {tone} tone.{include_cta}{include_deadline}`
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
        label: 'Topic',
        type: 'text',
        placeholder: 'your announcement or idea'
      },
      {
        name: 'style',
        label: 'Style',
        type: 'dropdown',
        default: 'professional',
        options: [
          { value: 'professional', label: 'Professional' },
          { value: 'casual', label: 'Casual' },
          { value: 'inspirational', label: 'Inspirational' },
          { value: 'humorous', label: 'Humorous' }
        ]
      }
    ],
    promptTemplate: `Create a {style} {platform} post about {topic}.`
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
        label: 'Topic',
        type: 'text',
        placeholder: 'your article topic'
      },
      {
        name: 'audience',
        label: 'Audience',
        type: 'text',
        placeholder: 'who is this for?'
      }
    ],
    promptTemplate: `Write an article about {topic} for {audience}.`
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
    promptTemplate: `{purpose} the following text:`
  }
];
