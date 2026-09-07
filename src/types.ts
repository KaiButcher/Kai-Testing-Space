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
