import React, { useContext, useRef, useState } from 'react';
import { get } from 'lodash';
import { Row, Col } from 'react-bootstrap';

import AnimationContainer from '../../components/animation-container';
import BaffleText from '../../components/baffle-text';
import ThemeContext from '../../context';
import { SectionProps, ThemeContextType } from '../../interfaces';

import './styles.scss';

const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

const Contact = ({ id }: SectionProps) => {
  const { height } = useContext(ThemeContext) as ThemeContextType;

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [errorMap, setErrorMap] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const enableShow = () => {
    setShow(true);
  };

  const submit = async () => {
    if (name === '' || email === '' || message === '') {
      setError(true);
      return;
    }
    if (
      !emailRegex.test(email) ||
      (phone.trim().length && !phoneRegex.test(phone))
    ) {
      setError(true);
      return;
    }

    setError(false);

    const toSend = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
    };

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        body: JSON.stringify(toSend),
      });

      if (response.ok) {
        console.log('sent successfully');
      }
    } catch (e) {
      console.log('Error while sending mail ---', e);
    }
  };

  const handleNameChange = (val: string) => {
    const value = get(nameRef, 'current.value', '');
    if (value.length && value.trim().length === 0) {
      setErrorMap({ ...errorMap, name: true });
    } else {
      setErrorMap({ ...errorMap, name: false });
    }
    setName(val);
  };

  const handleMessageChange = (val: string) => {
    const value = get(messageRef, 'current.value', '');
    if (value.length && value.trim().length === 0) {
      setErrorMap({ ...errorMap, message: true });
    } else {
      setErrorMap({ ...errorMap, message: false });
    }
    setMessage(val);
  };

  const handleEmailChange = (val: string) => {
    const value = get(emailRef, 'current.value', '');
    if (
      value.length > 0 &&
      (value.trim().length === 0 || !emailRegex.test(value))
    ) {
      setErrorMap({ ...errorMap, email: true });
    } else {
      setErrorMap({ ...errorMap, email: false });
    }
    setEmail(val);
  };

  const handlePhoneChange = (val: string) => {
    const value = get(phoneRef, 'current.value', '');
    if (
      value.length > 0 &&
      (value.trim().length === 0 || !phoneRegex.test(value))
    ) {
      setErrorMap({ ...errorMap, phone: true });
    } else {
      setErrorMap({ ...errorMap, phone: false });
    }
    setPhone(val);
  };

  const isButtonDisabled = () => {
    return Object.values(errorMap).some((value) => value);
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
                      ref={nameRef}
                      type='text'
                      className={`name ${errorMap['name'] ? 'error' : ''}`}
                      placeholder='Name'
                      onChange={(e) => handleNameChange(e.target.value)}
                    />
                  </div>
                </AnimationContainer>
                <AnimationContainer delay={100} animation='fadeInUp fast'>
                  <div className='form-group'>
                    <input
                      ref={emailRef}
                      type='text'
                      className={`email ${errorMap['email'] ? 'error' : ''}`}
                      placeholder='Email'
                      onChange={(e) => handleEmailChange(e.target.value)}
                    />
                  </div>
                </AnimationContainer>
                <AnimationContainer delay={150} animation='fadeInUp fast'>
                  <div className='form-group'>
                    <input
                      ref={phoneRef}
                      type='text'
                      className={`phone ${errorMap['phone'] ? 'error' : ''}`}
                      placeholder='Phone'
                      onChange={(e) => handlePhoneChange(e.target.value)}
                    />
                  </div>
                </AnimationContainer>
                <AnimationContainer delay={200} animation='fadeInUp fast'>
                  <div className='form-group'>
                    <textarea
                      ref={messageRef}
                      rows={7}
                      className={`message ${
                        errorMap['message'] ? 'error' : ''
                      }`}
                      placeholder='Message'
                      onChange={(e) => handleMessageChange(e.target.value)}
                    ></textarea>
                  </div>
                </AnimationContainer>
                <AnimationContainer delay={250} animation='fadeInUp fast'>
                  <div className='submit'>
                    <button
                      className={`hover-button ${
                        isButtonDisabled() || error ? 'error' : ''
                      }`}
                      onClick={() => submit()}
                      disabled={isButtonDisabled() || error}
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
    );
  };

  const renderMap = () => {
    return (
      <>
        {show || height === 'auto' ? (
          <AnimationContainer
            delay={1000}
            animation='fadeIn fast'
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
    );
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
  );
};

export default Contact;
