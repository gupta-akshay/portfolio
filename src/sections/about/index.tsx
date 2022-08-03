import React, { useContext } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import ThemeContext from '../../context';
import Progress from 'components/progress';
import { ThemeContextType } from 'interfaces';

import './styles.scss';

type HeroType = {
  id: string
};

const ParticlesContainer = () =>
  <Particles
    id='particles'
    className='particles'
    init={(main) => loadFull(main)}
    options={{
      particles: {
        number: {
          value: 50,
          density: {
            enable: false,
            value_area: 5000,
          },
        },
        line_linked: {
          enable: true,
          opacity: 0.5,
        },
        size: {
          value: 1,
        },
        move: {
          direction: "none",
          enable: true
        }
      },
      fullScreen: {
        enable: false,
      },
      retina_detect: true,
    }}
  />;

const Hero = ({ id }: HeroType) => {
  const { height } = useContext(ThemeContext) as ThemeContextType;
  return (
    <section id={id} className='about' style={{ height }}>
      <ParticlesContainer />
      <Row>
        <Col md={6} className='content'>
          <div className='content-text'>
            <div className='line-text'>
              <h4>About Me</h4>
            </div>
            <h3>I&apos;m a Full Stack web developer working remotely</h3>
            <div className='separator' />
            <p>
              I am a developer currently working with PeopleGrove, having more
              than 4 years of professional experience with a keen eye for
              design to deliver seamless user experience and best in class
              products. Enthusiastic about newly evolving technologies with
              focus on product details.
            </p>
            <p>
              In my free time I like to make electronic music and play video
              games. Sometimes, when I get a chance then I love to do DJing as
              well.
            </p>
            <p>
              Also, if you&apos;re wondering where the audio is coming from. Then
              don&apos;t worry, those are just a few of my singles and bootlegs
              playing in the background.
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
              I know I cannot quantify my skills, but this does look great on
              a page. Right?!
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
  )
};

export default Hero;