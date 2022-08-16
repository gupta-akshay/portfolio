import React, { PureComponent } from 'react';
import { ThemeProvider } from '../../context';
import Navigation from '../navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'scss/index.scss';

type LayoutProps = {
  children: React.ReactNode;
};

type LayoutState = {
  height: string | number;
  mobile: boolean;
  width: number;
};

class Layout extends PureComponent<LayoutProps, LayoutState> {
  private sectionId: number;
  private scrolling: boolean;

  constructor(props: LayoutProps | Readonly<LayoutProps>) {
    super(props);
    this.state = {
      height: 0,
      mobile: false,
      width: 0,
    };
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
      if (window.innerWidth < 992) {
        this.setState({ mobile: true });
      }
    } else {
      this.setState({ mobile: false });
    }
  };

  setDefaults() {
    this.setState({
      height: window.innerWidth < 992 ? 'auto' : window.innerHeight,
      mobile: window.innerWidth < 992,
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

  render() {
    const { children } = this.props;
    const { mobile, height } = this.state;
    return (
      <ThemeProvider value={{ height: mobile ? 'auto' : height }}>
        <Navigation change={this.changeSection} />
        <div>{children}</div>
      </ThemeProvider>
    );
  }
}

export default Layout;
