import React from 'react';
import './styles.scss';

import { GlitchProps } from '../../interfaces';

const Glitch = ({ text }: GlitchProps) => {
  return (
    <div className='glitch' data-text={text}>
      {text}
    </div>
  );
};

export default Glitch;