import React, { Component } from 'react'
import './styles.scss'

interface PropTypes {
  duration: number;
}

class Spinner extends Component<PropTypes> {
  state = {
    spin: true,
  }

  componentDidMount() {
    const { duration } = this.props; 
    this.showSpinner(duration).then(() => {
      setTimeout(() => {
        let spinnerEl = document.getElementById('spinner') as HTMLElement;
        if (spinnerEl) {
          spinnerEl.remove()
        }
      }, 500)
    })
  }

  showSpinner = (duration: number) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        this.setState({ spin: false })
        document.body.classList.remove('no-overflow')
        resolve()
      }, duration)
    })
  }

  render() {
    const { spin } = this.state;
    return (
      <div
        className={`spinner-container ${spin ? 'show' : ''}`}
        id="spinner"
      >
        <div className="spinner">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="dot"></div>
        </div>
      </div>
    )
  }
}

export default Spinner
