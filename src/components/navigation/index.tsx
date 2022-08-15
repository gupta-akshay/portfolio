import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const scrollToElement = require('scroll-to-element');

const sections = [
  {
    name: 'Home',
  },
  {
    name: 'About',
  },
  {
    name: 'Work Experience',
  },
  {
    name: 'Contact',
  },
];

type NavigationProps = {
  change: (arg1: number) => void;
};

const Navigation = ({ change }: NavigationProps) => {
  const [show, setShow] = useState(false);

  const navScroll = (id: string, v: number) => {
    setShow(false);
    const el = document.getElementById(id) as HTMLElement;
    scrollToElement(el, {
      offset: 0,
      ease: 'in-out-expo',
      duration: 1000,
    }).on('end', () => {
      change(v);
    });
  };

  return (
    <div>
      <div className='opener'>
        <FontAwesomeIcon
          icon={faBars}
          className='closeNav'
          onClick={() => setShow(true)}
        />
      </div>
      <div className={`navigation ${show ? 'active' : ''}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className='closeNav'
          onClick={() => setShow(false)}
        />
        <div className='logo'>
          <div>Akshay Gupta</div>
        </div>
        <div className='links'>
          <ul>
            {sections.map((value, index) => (
              <li key={index}>
                <button
                  onClick={() => navScroll(value.name.toLowerCase(), index)}
                >
                  {value.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
