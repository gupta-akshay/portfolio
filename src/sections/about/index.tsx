import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';

import ThemeContext from '../../context';
import Progress from '../../components/progress';
import ParticlesContainer from '../../components/particles';
import { SectionProps, ThemeContextType } from '../../interfaces';

import './styles.scss';

const calculateExperience = () => {
  const startDate = new Date('2017-09-13').getTime();
  const currentDate = new Date().getTime();
  const diffInMilliseconds = currentDate - startDate;
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365);
  return Math.floor(diffInYears);
};

const Hero = ({ id }: SectionProps) => {
  const { height } = useContext(ThemeContext) as ThemeContextType;
  const yearsOfExperience = calculateExperience();

  return (
    <section id={id} className='about' style={{ height }}>
      <ParticlesContainer id='particles-1' />
      <Row>
        <Col md={6} className='content'>
          <div className='content-text'>
            <div className='line-text'>
              <h4>About Me</h4>
            </div>
            <h3>I&apos;m a Full Stack web developer working remotely</h3>
            <div className='separator' />
            <p>
              I am a web developer currently working with PeopleGrove, having
              more than {yearsOfExperience} years of professional experience with a keen eye for
              design to deliver seamless user experience and best in class
              products.
            </p>
            <p>
              Apart from work I enjoy making electronic music, and be a DJ
              whenever I get the chance to. I also enjoy console and PC gaming.
              I also like to travel a lot (specially to beaches), and that makes
              Goa my goto destination.
            </p>
            <div className='social social_icons'>
              <FontAwesomeIcon
                icon={faGithub}
                className='social_icon'
                onClick={() => window.open('https://github.com/gupta-akshay')}
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className='social_icon'
                onClick={() =>
                  window.open('https://www.linkedin.com/in/akshayguptaujn/')
                }
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className='social_icon'
                onClick={() => window.open('https://twitter.com/ashay_music')}
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className='social_icon'
                onClick={() =>
                  window.open(
                    'https://www.youtube.com/channel/UCqM2-2boBgr3DiZRJDrW5hQ'
                  )
                }
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className='social_icon'
                onClick={() =>
                  window.open('https://www.instagram.com/dja_shay')
                }
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className='social_icon'
                onClick={() =>
                  window.open('https://www.facebook.com/deejay.ashay')
                }
              />
            </div>
          </div>
        </Col>
        <Col md={6} className='skills'>
          <div className='line-text'>
            <h4>My Skills</h4>
          </div>
          <div className='line-text'>
            <h6>
              I know I cannot quantify my skills, but this does look great on a
              page. Right?!
            </h6>
          </div>
          <div className='separator' />
          <div className='skills-container'>
            <Progress name='Javascript' value={90} delay={1100} />
            <Progress name='Typescript' value={90} delay={1100} />
            <Progress name='Node.js' value={90} delay={1100} />
            <Progress name='React' value={90} delay={1100} />
            <Progress name='Redux' value={80} delay={1100} />
            <Progress name='PostgreSQL' value={80} delay={1100} />
            <Progress name='Redis' value={80} delay={1100} />
            <Progress name='RabbitMQ' value={80} delay={1100} />
            <Progress name='Google Cloud Platform' value={70} delay={1100} />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Hero;
