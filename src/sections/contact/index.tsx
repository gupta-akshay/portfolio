import React, { useContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import AnimationContainer from '../../components/animation-container';
import BaffleText from '../../components/baffle-text';
import ThemeContext from '../../context';
import { ThemeContextType } from "../../interfaces";

import './styles.scss';

type ContactType = {
  id: string
};

const Contact = ({ id }: ContactType) => {
  const { height } = useContext(ThemeContext) as ThemeContextType;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const enableShow = () => {
    setShow(true);
  }

  const check = (val: string) => !(error && val === '');

  const submit = () => {
    if (name === '' || email === '' || message === '') {
      setError(true);
      return;
    }
    setError(false);
  };

  const renderForm = () => {
    return (
      <>
        {show || height === 'auto' ? (
          <AnimationContainer delay={0} animation='fadeInUp fast'>
            <div className='form-container'>
              <div className='line-text'>
                <h4>Get In Touch</h4>
                <AnimationContainer delay={50} animation='fadeInUp fast'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className={`name ${check(name) ? '' : 'error'}`}
                      placeholder='Name'
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </AnimationContainer>
                <AnimationContainer delay={100} animation='fadeInUp fast'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className={`email ${check(email) ? '' : 'error'}`}
                      placeholder='Email'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </AnimationContainer>
                <AnimationContainer delay={150} animation='fadeInUp fast'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='phone'
                      placeholder='Phone'
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </AnimationContainer>
                <AnimationContainer delay={200} animation='fadeInUp fast'>
                  <div className='form-group'>
                  <textarea
                    rows={7}
                    className={`message ${check(message) ? '' : 'error'}`}
                    placeholder='Message'
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  </div>
                </AnimationContainer>
                <AnimationContainer delay={250} animation='fadeInUp fast'>
                  <div className='submit'>
                    <button
                      className={`hover-button ${error ? 'error' : ''}`}
                      onClick={() => submit()}
                    >
                      <span>Send Message</span>
                    </button>
                  </div>
                </AnimationContainer>
              </div>
            </div>
          </AnimationContainer>
        ) : null}
      </>
    )
  };

  const renderMap = () => {
    return (
      <>
        {show || height === 'auto' ? (
          <AnimationContainer
            delay={1000}
            animation="fadeIn fast"
            height={height}
          >
            <iframe
              title='map'
              width='100%'
              height='100%'
              style={{ filter: 'invert(90%)' }}
              referrerPolicy='no-referrer-when-downgrade'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58688.52668488091!2d75.79722045!3d23.16899865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00ff23%3A0x7f82abdf7899d412!2sUjjain%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1656359717223!5m2!1sen!2sin'
            />
          </AnimationContainer>
        ) : null}
      </>
    )
  };

  return (
    <section id={id} className='contact' style={{ height }}>
      <Row>
        <Col md={2} className='side'>
          <h2>
            <BaffleText
              text='Contact'
              revealDuration={500}
              revealDelay={500}
              parentMethod={enableShow}
              callMethodTime={1100}
            />
          </h2>
        </Col>
        <Col md={5} className='form'>
          {renderForm()}
        </Col>
        <Col md={5} className='map'>
          {renderMap()}
        </Col>
      </Row>
    </section>
  )
}

export default Contact;