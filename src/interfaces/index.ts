import React from "react";

export interface BaffleTextPropTypes {
  text: string,
  callMethodTime: number,
  revealDuration: number,
  revealDelay: number,
  parentMethod: () => void,
}

export interface AnimationContainerProps {
  id?: string,
  children: React.ReactNode,
  height?: string,
  animation: string,
  delay: number,
}

export interface ProgressProps {
  delay: number,
  value: number,
  name: string,
}

export interface ThemeContextType {
  height: any
}
