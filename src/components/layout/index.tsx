import React, { PureComponent, WheelEvent } from 'react';
import ScrollLock from 'react-scrolllock';
import { ThemeProvider } from '../../context';
import Navigation from '../navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'scss/index.scss';

const scrollToElement = require('scroll-to-element');

type LayoutProps = {
  children: React.ReactNode;
};

type LayoutState = {
  height: string | number;
  mobile: boolean;
  scrollLock: boolean;
  width: number;
};

class Layout extends PureComponent<LayoutProps, LayoutState> {
  private readonly sections: string[];
  private sectionId: number;
  private scrolling: boolean;
  constructor(props: LayoutProps | Readonly<LayoutProps>) {
    super(props);
    this.state = {
      height: 0,
      mobile: false,
      scrollLock: false,
      width: 0,
    };
    this.sections = ['home', 'about', 'work experience', 'contact'];
    this.sectionId = 0;
    this.scrolling = false;
  }

  updateDimensions = () => {
    const { width } = this.state;
    if (width !== window.innerWidth) {
      window.location.reload();
    }
    this.setState({ height: window.innerHeight, width: window.innerWidth });
    if (window.innerWidth < 1025) {
      this.setState({ scrollLock: false });
      if (window.innerWidth < 992) {
        this.setState({ mobile: true });
      }
    } else {
      this.setState({ mobile: false, scrollLock: true });
    }
  };

  setDefaults() {
    this.setState({
      height: window.innerWidth < 992 ? 'auto' : window.innerHeight,
      mobile: window.innerWidth < 992,
      scrollLock: window.innerWidth >= 1025,
      width: window.innerWidth,
    });
  }

  componentDidMount() {
    this.setDefaults();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  changeSection = (id: number) => {
    this.sectionId = id;
  };

  wheel = (e: WheelEvent<HTMLDivElement>) => {
    if (!this.scrolling && !this.state.mobile) {
      this.scrolling = true;
      if (e.deltaY < 0) {
        if (
          this.sections[
            (this.sectionId + this.sections.length - 1) % this.sections.length
          ] !== this.sections[this.sections.length - 1]
        )
          this.sectionId =
            (this.sectionId + this.sections.length - 1) % this.sections.length;
      } else {
        if (this.sectionId !== this.sections.length - 1)
          this.sectionId = (this.sectionId + 1) % this.sections.length;
      }
      const el = document.getElementById(
        this.sections[this.sectionId]
      ) as HTMLElement;
      scrollToElement(el, {
        offset: 0,
        ease: 'in-out-expo',
        duration: 500,
      }).on('end', () => {
        this.scrolling = false;
      });
    }
  };

  render() {
    const { children } = this.props;
    const { scrollLock, mobile, height } = this.state;
    return (
      <ThemeProvider value={{ height: mobile ? 'auto' : height }}>
        <Navigation change={this.changeSection} />
        <div onWheel={(e) => this.wheel(e)}>{children}</div>
        <ScrollLock isActive={scrollLock} />
      </ThemeProvider>
    );
  }
}

export default Layout;
