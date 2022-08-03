import React from 'react';
import './styles.scss';

type GlitchProps = {
  text: string
}

const Glitch = ({ text }: GlitchProps) => {
  return (
    <div className='glitch' data-text={text}>
      {text}
    </div>
  )
};

export default Glitch;