import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from 'react-countup';
import { useInViewport } from "react-in-viewport";

type CounterProps = {
  text: string,
  symbol: string,
  value: number,
  icon: any,
  duration: number
};

const Counter = ({ icon, text, value, symbol, duration }: CounterProps) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const [inViewportState, setInViewportState] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const { inViewport } = useInViewport(counterRef);

  useEffect(() => {
    if (inViewportState !== inViewport && !animationComplete) {
      setInViewportState(inViewport);
      setAnimationComplete(true);
    }
  }, [inViewport]);

  return (
    <div className='counter_component' ref={counterRef}>
      <div className='icon'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className='value'>
        <CountUp
          end={inViewportState ? value : 0}
          start={0}
          duration={duration || 1}
        />
        <span className='symbol'>{symbol}</span>
      </div>
      <div className='text'>{text}</div>
    </div>
  );
};

export default Counter;
