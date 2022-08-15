import React from 'react';

export interface BaffleTextPropTypes {
  text: string;
  callMethodTime: number;
  revealDuration: number;
  revealDelay: number;
  parentMethod: () => void;
}

export interface AnimationContainerProps {
  id?: string;
  children: React.ReactNode;
  height?: string;
  animation: string;
  delay: number;
}

export interface ProgressProps {
  delay: number;
  value: number;
  name: string;
}

export interface ThemeContextType {
  height: any;
}

export interface GlitchProps {
  text: string;
}

export interface ParticlesProps {
  id: string;
}

export interface SpinnerProps {
  duration: number;
}

export interface TimelineCardProps {
  id: number;
  role: string;
  company: string;
  timeInRole: string;
  location: string;
  responsibilities: string;
  isEducation: boolean;
  skills: string[];
}

export interface CounterProps {
  text: string;
  symbol: string;
  value: number;
  icon: any;
  duration: number;
}

export interface SectionProps {
  id: string;
}
