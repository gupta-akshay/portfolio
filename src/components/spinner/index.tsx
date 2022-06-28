import React, { useEffect, useState } from 'react';
import './styles.scss';

interface propType {
  duration: number;
}

const Spinner = ({ duration }:propType) => {
  const [spin, setSpin] = useState<boolean>(true);

  const showSpinner = (duration: number) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        setSpin(false);
        document.body.classList.remove('no-overflow');
        resolve();
      }, duration);
    })
  }

  useEffect(() => {
    showSpinner(duration).then(() => {
      setTimeout(() => {
        let spinnerEl = document.getElementById('spinner') as HTMLElement;
        if (spinnerEl) {
          spinnerEl.remove()
        }
      }, 500)
    })
    return () => setSpin(true);
  }, []);

  return (
    <div>
      <div className="spinner">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="dot"></div>
      </div>
    </div>
  )
}

export default Spinner;
