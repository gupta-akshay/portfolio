import React from 'react';
import './styles.scss';

interface propTypes {
  text: string
}

const Glitch = ({ text }: propTypes) => {
  return (
    <div className="glitch" data-text={text}>{text}</div>
  )
}

export default Glitch;
