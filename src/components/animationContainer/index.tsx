import React, { Component } from 'react';
import handleViewport from 'react-in-viewport';
import { AnimationContainerProps } from '../../types';
import 'animate.css/animate.css';

class Animation extends Component<AnimationContainerProps> {
  state = {
    inViewport: false,
    animationComplete: false,
    classChanged: false,
  };

  changeClass = () => {
    const { delay } = this.props
    setTimeout(() => { 
        this.setState({classChanged: true});
    }, delay);
  }

  componentDidUpdate() {
    if (this.state.inViewport !== this.props.inViewport && !this.state.animationComplete) {
      this.setState({inViewport: this.props.inViewport});
      this.changeClass();
      this.setState({animationComplete: true});
    }
  }

  render() {
    const { children, animation, id, height } = this.props
    return (
        <div className={this.state.classChanged ? `animated ${animation}` : ""} style={{opacity: this.state.classChanged ? 1 : 0, height: height ? height : "auto"}} id={id} >
          {children}
        </div>
    );
  }
}

const AnimationContainer = handleViewport(Animation);

export default AnimationContainer