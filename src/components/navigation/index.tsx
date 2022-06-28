import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faT } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

let scrollToElement = require('scroll-to-element');

const sections = [
  {
      name: "Home"
  },
  {
      name: "About"
  },
  // {
  //     name: "Contact"
  // }
];

interface propTypes {
  change: (sectionId: number) => void
}

const Navigation = ({ change }: propTypes) => {
  const [show, setShow] = useState(false);

  const navScroll = (id: string, v: any) => {
    setShow(false);
    const el = document.getElementById(id);
    scrollToElement(el, {
      offset: 0,
      ease: 'in-out-expo',
      duration: 2000,
    }).on('end', () => {
      change(v);
    });
  }

  const items = () => {
    return sections.map((value, index) => (
      <li key={index}>
        <button
          onClick={() => navScroll(value.name.toLowerCase(), index)}
        >
          {value.name}
        </button>
      </li>
    ))
  }

  return (
    <div>
      <div className="opener">
        <FontAwesomeIcon
          icon={faBars}
          className="closeNav"
          onClick={() => setShow(true)}
        />
      </div>
      <div className={`navigation ${show ? 'active' : ''}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className="closeNav"
          onClick={() => setShow(false)}
        />
        <div className="logo">
          <div>Akshay Gupta</div>
        </div>
        <div className="links">
          <ul>
            {items()}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigation;
