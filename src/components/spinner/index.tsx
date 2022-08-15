import React, { useState, useEffect } from 'react';
import { SpinnerProps } from '../../interfaces';

import './styles.scss';

const Spinner = ({ duration }: SpinnerProps) => {
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    showSpinner(duration).then(() => {
      setTimeout(() => {
        const element = document.getElementById('spinner') as HTMLDivElement;
        element.remove();
      }, 500);
    });
  }, []);

  const showSpinner = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setSpin(false);
        document.body.classList.remove('no-overflow');
        resolve();
      }, duration);
    });
  };

  return (
    <div className={`spinner-container ${spin ? 'show' : ''}`} id='spinner'>
      <div className='spinner'>
        <div className='ring'></div>
        <div className='ring'></div>
        <div className='dot'></div>
      </div>
    </div>
  );
};

export default Spinner;
