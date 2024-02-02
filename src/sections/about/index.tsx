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
            <h3>Greetings from the Digital Realm!</h3>
            <div className='separator' />
            <p>
              I&apos;m a code conjurer and pixel whisperer, otherwise known as a
              Full Stack Web Developer, crafting digital wonders from the
              comfort of my abode. Currently weaving web magic with the
              brilliant minds at PeopleGrove, I boast over {yearsOfExperience}{' '}
              years of navigating the mystical lands of syntax and semicolons.
              My quest? To forge seamless user experiences and top-tier digital
              marvels, all while keeping an eye out for the elusive perfect line
              of code.
            </p>
            <p>
              When not in the throes of development, you can find me
              orchestrating electronic symphonies or moonlighting as a DJ, where
              the beats are as dynamic as my code. My love for gaming knows no
              bounds, be it console wars or the peace of PC realms. And when the
              screens fade to black, I&apos;m off to sandy shores and salty
              breezes, with Goa being my sanctuary from the binary world.
              Because after all, even a web wizard needs a haven to recharge
              their creative spells.
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
            <h4>The Toolbox</h4>
          </div>
          <div className='line-text'>
            <h6>
              Attempting to quantify my skills is like trying to measure the
              internet with a ruler - ambitious but a tad impractical.
              Nevertheless, they do make for an impressive display on this
              digital canvas, don&apos;t you think?
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
