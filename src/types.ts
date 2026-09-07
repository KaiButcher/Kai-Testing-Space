export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  category: 'Spatial & UI' | 'Creative Dev' | 'Systems' | 'Web Apps' | 'Audio Tech';
  year: string;
  image: string;
  accentColor: string;
  summary: string;
  fullDescription: string;
  stats?: { label: string; value: string }[];
  tags: string[];
  role: string;
  featured?: boolean;
  bentoSpan: 'col-span-1 md:col-span-2' | 'col-span-1 md:col-span-1' | 'col-span-1 md:col-span-3' | 'col-span-1 md:col-span-1 md:row-span-2';
}

export type CategoryFilter = 'All' | 'Spatial & UI' | 'Creative Dev' | 'Systems' | 'Web Apps' | 'Audio Tech';

export interface PrototypeItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  description: string;
  prototypeNumber: string;
  category: 'Audio / UI' | 'Game / Tool' | 'Utility';
}

export type ActiveModal = 
  | null 
  | { type: 'prototype'; prototypeId: string }
  | { type: 'github' }
  | { type: 'terminal' }
  | { type: 'privacy' };

