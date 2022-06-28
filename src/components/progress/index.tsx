import React, { Component } from 'react';
import handleViewport from 'react-in-viewport';
import CountUp from 'react-countup';
import './styles.scss';

interface PropTypes {
  inViewport: boolean
  value: number
  delay: number
  name: string
}

class ProgressAnimation extends Component<PropTypes> {
  state = {
    value: 0,
    inViewport: false,
    animationComplete: false,
  };

  showProgress = () => {
    setTimeout(() => {
      this.setState({ value: this.props.value });
    }, this.props.delay)
  }

  componentDidUpdate() {
    if (
      this.state.inViewport !== this.props.inViewport
      && !this.state.animationComplete
    ) {
      this.setState({ inViewport: this.props.inViewport });
      this.setState({ animationComplete: true });
      this.showProgress();
    }
  }

  render() {
    const { name } = this.props;
    const { inViewport, value } = this.state;
    return (
      <div className="progress-container">
        <span className="name">{name}</span>
        <span className="value">
          <CountUp start={0} end={inViewport ? value : 0} />%
        </span>
        <div className="progress" style={{width: `${value}%`}}></div>
      </div>
    )
  }
}

const Progress = handleViewport(ProgressAnimation);

export default Progress;
