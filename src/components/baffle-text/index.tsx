import React, { useEffect, useState, useRef } from 'react';
// @ts-ignore
import Baffle from 'baffle-react';
import { useInViewport } from 'react-in-viewport';
import { BaffleTextPropTypes } from '../../interfaces';

const BaffleText = ({
  text,
  callMethodTime,
  revealDuration,
  revealDelay,
  parentMethod,
}: BaffleTextPropTypes) => {
  const baffleTextRef = useRef<HTMLSpanElement>(null);
  const [inViewportState, setInViewport] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [obfuscate, setObfuscate] = useState(true);
  const [force, setForce] = useState(false);
  const { inViewport } = useInViewport(baffleTextRef);

  const forceUpdate = () => {
    setTimeout(() => {
      setForce(true);
    }, revealDelay + revealDuration);
  };

  const parentMethodCall = () => {
    setTimeout(() => {
      parentMethod();
    }, callMethodTime);
  };

  useEffect(() => {
    if (inViewportState !== inViewport && !animationComplete) {
      setInViewport(inViewport);
      setAnimationComplete(true);
      setObfuscate(false);
      forceUpdate();
      if (callMethodTime) {
        parentMethodCall();
      }
    }
  }, [inViewport, callMethodTime]);

  return (
    <>
      <span className='baffle_text' ref={baffleTextRef}>
        {!force ? (
          <Baffle
            speed={50}
            characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*'
            obfuscate={obfuscate}
            update={true}
            revealDuration={revealDuration}
            revealDelay={revealDelay}
          >
            {text}
          </Baffle>
        ) : (
          <span>{text}</span>
        )}
      </span>
    </>
  );
};

export default BaffleText;