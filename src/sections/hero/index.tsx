import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import get from 'lodash/get';
import Typewriter from 'typewriter-effect';
import Glitch from '../../components/glitch';
import ThemeContext from '../../context';
import { ThemeContextType } from '../../interfaces';
import { HeroTypes } from '../../interfaces/hero';

import './styles.scss';

const HeroContainer = ({ id, icons, mainImg, mainPdf }: HeroTypes) => {
  const { height } = useContext(ThemeContext) as ThemeContextType;

  const renderIcons = () => {
    return icons?.edges?.map((value, index) => {
      return (
        <img
          src={get(value, 'node.childImageSharp.fluid.src')}
          className={`animated fadeIn move-${
            Math.floor(Math.random() * 10) % 2 === 0 ? 'up' : 'down'
          } float-image`}
          style={{
            left: `${index * 10}%`,
            bottom: `${
              Math.random() *
                (+(index % 2 === 0 ? 80 : 20) - +(index % 2 === 0 ? 70 : 10)) +
              +(index % 2 === 0 ? 70 : 10)
            }%`,
          }}
          alt='shape'
          key={index}
        />
      );
    });
  };

  const pdfPath = get(mainPdf, 'edges.0.node.publicURL');
  const imagePath = get(mainImg, 'childImageSharp.fluid.src');
  return (
    <section id={id} className='hero' style={{ height }}>
      <Row>
        <Col md={6} className='content'>
          <div className='content-text'>
            <div className='line-text'>
              <h4>Hello, I&apos;m</h4>
            </div>
            <Glitch text='Akshay Gupta' />
            <Typewriter
              options={{
                strings: [
                  'Full Stack Web Developer',
                  'Electronic Music Producer',
                  'DJ',
                  'Traveller',
                ],
                autoStart: true,
                loop: true,
              }}
            />
            {pdfPath && (
              <a href={pdfPath} download="Akshay's CV" className='hover-button'>
                <span>Download CV</span>
              </a>
            )}
          </div>
          {renderIcons()}
        </Col>
        <Col md={6} className='img'>
          <img src={imagePath} alt='person' />
        </Col>
      </Row>
    </section>
  );
};

type initProps = {
  id: string;
};

const Hero = (props: initProps) => (
  <StaticQuery
    query={graphql`
      query {
        icons: allFile(
          filter: {
            extension: { regex: "/(png)/" }
            relativeDirectory: { eq: "icons" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
        }
        Img: file(relativePath: { eq: "person.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              src
            }
          }
        }
        Pdf: allFile(filter: { base: { eq: "akshay-cv.pdf" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `}
    render={({ icons, Img, Pdf }) => (
      <HeroContainer icons={icons} mainImg={Img} mainPdf={Pdf} {...props} />
    )}
  />
);

export default Hero;
