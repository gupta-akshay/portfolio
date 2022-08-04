import React, { useEffect, useState, useRef } from 'react';
import { useInViewport } from "react-in-viewport";

import { AnimationContainerProps } from '../../interfaces';

import 'animate.css/animate.css';

const AnimationContainer = ({ id, children, height, animation, delay }: AnimationContainerProps) => {
  const animationContainerRef = useRef<HTMLDivElement>(null);
  const [inViewportState, setInViewportState] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [classChanged, setClassChanged] = useState(false);
  const { inViewport } = useInViewport(animationContainerRef);

  const changeClass = () => {
    setTimeout(() => {
      setClassChanged(true);
    }, delay)
  }

  useEffect(() => {
    if (inViewportState !== inViewport && !animationComplete) {
      setInViewportState(inViewport);
      changeClass();
      setAnimationComplete(true);
    }
  }, [inViewport]);

  return (
    <div
      ref={animationContainerRef}
      className={classChanged ? `animation ${animation}` : ''}
      style={{
        opacity: classChanged ? 1 : 0,
        height: height || 'auto',
      }}
    >
      {children}
    </div>
  );
};

export default AnimationContainer;