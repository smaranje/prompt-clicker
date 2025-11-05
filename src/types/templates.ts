export interface TemplateField {
  name: string;
  label: string;
  type: 'text' | 'dropdown' | 'toggle' | 'checkbox';
  placeholder?: string;
  default?: string | boolean;
  options?: Array<{ value: string; label: string }>;
  required?: boolean;
}

export interface Template {
  id: string;
  category: string;
  title: string;
  icon: string;
  description: string;
  fields: TemplateField[];
  promptTemplate: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  description: string;
  gradient: string;
}
