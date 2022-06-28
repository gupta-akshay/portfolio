import React, { useContext } from 'react';
import Particles from 'react-particles-js';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'
import Progress from 'components/Progress';
import ThemeContext from '../../context';
import { AboutProps } from '../../types';
import './styles.scss';

const About = ({ id }: AboutProps) => {
  const { height } = useContext(ThemeContext);

  const renderParticles = () => {
    return (
      <Particles
        className="particles"
        params={{
          "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": false,
                    "value_area": 5000
                }
            },
            "line_linked": {
                "enable": true,
                "opacity": .5
            },
            "size": {
                "value": 1
            },
          },
          "retina_detect": true
        }}
      />
    )
  }

  return (
    <section id={id} className="about" style={{ height }}>
      {renderParticles()}
      <Row>
        <Col md={6} className="content">
          <div className="content-text">
            <div className="line-text">
              <h4>About Me</h4>
            </div>
            <h3>I'm a Full Stack web developer working from home</h3>
            <div className="separator" />
            <p>I am a developer with more than 4 years of professional experience with a keen eye for design to deliver seamless user experience and best in class products. Enthusiastic about newly evolving technologies with focus on product details. In my free time I like to make electronic music and play video games. Sometimes, when I get a chance then I love to do DJing as well.</p>
            <div className="social social_icons">
              <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/gupta-akshay')}/>
              <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/akshayguptaujn/')} />
              <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://twitter.com/ashay_music')} />
              <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com/channel/UCqM2-2boBgr3DiZRJDrW5hQ')} />
              <FontAwesomeIcon icon={faInstagram} className="social_icon" onClick={() => window.open('https://www.instagram.com/dja_shay')} />
              <FontAwesomeIcon icon={faFacebook} className="social_icon" onClick={() => window.open('https://www.facebook.com/deejay.ashay')} />           
            </div>
          </div>
        </Col>
        <Col md={6} className="skills">
          <div className="line-text">
            <h4>My Skills</h4>
          </div>
          <div className="line-text">
            <h6>I know I cannot quantify my skills, but this UI does look great. Right?!</h6>
          </div>
          <div className="skills-container">
            <Progress name="Node.js" value={90} delay={1100} />
            <Progress name="React" value={90} delay={1100} />
            <Progress name="PostgreSQL" value={80} delay={1100} />
            <Progress name="Redis" value={80} delay={1100} />
            <Progress name="RabbitMQ" value={80} delay={1100} />
            <Progress name="Google Cloud Platform" value={70} delay={1100} />
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default About;
