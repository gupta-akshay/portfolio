import React, { useEffect, useState, WheelEvent } from 'react';
import ScrollLock from 'react-scrolllock';
import { ThemeProvider } from '../../context';
import { ReactChildren } from '../../types';
import Navigation from 'components/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'scss/main.scss';
let scrollToElement = require('scroll-to-element')

const sections = [
  'home',
  'about',
  // 'contact'
]

const Layout = ({ children }: ReactChildren) => {
  const [sectionId, setSectionId] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [layoutState, setLayoutState] = useState({
    height: window.innerWidth < 992 ? 'auto' : window.innerHeight,
    mobile: window.innerWidth < 992 ? true : false,
    scrolllock: window.innerWidth < 1025 ? false : true,
    width: window.innerWidth,
  });

  const updateDimensions = () => {
    const { width } = layoutState;
    if (width !== window.innerWidth) {
      window.location.reload();
    }
    setLayoutState({
      ...layoutState,
      height: window.innerHeight,
      width: window.innerWidth
    });
    if (window.innerWidth < 1025) {
      setLayoutState({ ...layoutState, scrolllock: false });
      if (window.innerWidth < 992) {
        setLayoutState({ ...layoutState, mobile: true })
      }
    } else {
      setLayoutState({ ...layoutState, mobile: false, scrolllock: true });
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const wheel = (e: WheelEvent<HTMLDivElement>) => {
    if (!scrolling && !layoutState.mobile) {
      setScrolling(true);
      if (e.deltaY < 0) {
        if (
          sections[
            (sectionId + sections.length - 1) % sections.length
          ] !== sections[sections.length - 1]
        ) {
          setSectionId((sectionId + sections.length - 1) % sections.length);
        }
      } else {
        if (sectionId !== sections.length - 1) {
          setSectionId((sectionId + 1) % sections.length);
        }
      }
      const el = document.getElementById(sections[sectionId]);
      scrollToElement(el, {
        offset: 0,
        ease: 'in-out-expo',
        duration: 2000,
      }).on('end', () => {
        setScrolling(false);
      });
    }
  }

  return (
    <ThemeProvider
      value={{ height: layoutState.mobile ? 'auto' : layoutState.height }}
    >
      <Navigation change={setSectionId} />
      <div onWheel={e => wheel(e)}>{children}</div>
      <ScrollLock isActive={layoutState.scrolllock} />
    </ThemeProvider>
  )
}

export default Layout;
