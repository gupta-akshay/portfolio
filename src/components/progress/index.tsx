import React, { useEffect, useState, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import CountUp from 'react-countup';

import { ProgressProps } from 'interfaces';

import './styles.scss';

const Progress = ({ delay, value: propValue, name }: ProgressProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [inViewportState, setInViewportState] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const { inViewport } = useInViewport(progressRef);

  useEffect(() => {
    if (inViewportState !== inViewport && !animationComplete) {
      setInViewportState(inViewport);
      setAnimationComplete(true);
      showProgress();
    }
  }, []);

  const showProgress = () => {
    setTimeout(() => {
      setValue(propValue);
    }, delay)
  }

  return (
    <div className='progress-container' ref={progressRef}>
      <span className='name'>{name}</span>
      <span className='value'>
        <CountUp
          start={0}
          end={inViewportState ? value : 0}
        />
        %
      </span>
      <div
        className='progress'
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default Progress;