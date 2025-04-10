// types.ts
import { ReactNode } from 'react';

export interface ToolTag {
  id: number;
  name: string;
  color: string;
}

export interface Category {
  id: number;
  name: string;
  color: string;
  icon: ReactNode;
  description: string;
}

export interface Resource {
  title: string;
  url: string;
  type?: 'article' | 'video' | 'template' | 'tool' | 'documentation';
}

export interface Tool {
  id: number;
  name: string;
  category: number;
  description: string;
  link: string;
  icon: ReactNode;
  tags: ToolTag[];
  longDescription?: string;
  benefits?: string[];
  howTo?: string[];
  resources?: Resource[];
  duration?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  type?: 'ai' | 'manual' | 'software' | 'framework' | 'template';
  isRabbitExclusive?: boolean;
}

export interface Stage {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  colorStart: string;
  colorEnd: string;
  duration?: string;
  keyOutcome?: string;
  categories: Category[];
  tools: Tool[];
}