// types.ts
import { ReactNode } from 'react';

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
  longDescription?: string;
  benefits?: string[];
  howTo?: string[];
  resources?: Resource[];
  duration?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  type?: 'ai' | 'manual' | 'software' | 'framework' | 'template';
  isFeatured?: boolean;
}

export interface StageGuide {
  overview: string;
  keyObjectives: string[];
  process: {
    name: string;
    duration: string;
    description: string;
  }[];
  stageOutput: string[];
  commonPitfalls: string[];
  keyExpertise: string[];
  transitionToNext?: string;
  resources: Resource[];
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
  guide?: StageGuide;
}