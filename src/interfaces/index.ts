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
