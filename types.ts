import React from 'react';

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  type: 'note' | 'image';
  rotation?: string;
}

export enum ContactStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}