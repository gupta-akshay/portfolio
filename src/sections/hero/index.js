import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import get from 'lodash/get';
import Typewriter from 'typewriter-effect';
import Glitch from 'components/glitch';
import ThemeContext from '../../context';
import './styles.scss';

class Hero extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { id } = this.props;
    const { height } = this.context;
    const pdfPath = get(this.props, 'mainPdf.edges.0.node.publicURL');
    const imagePath = get(this.props, 'mainImg.childImageSharp.fluid.src');
    return (
      <section id={id} className='hero' style={{ height }}>
        <Row>
          <Col md={6} className='content'>
            <div className='content-text'>
              <div className='line-text'>
                <h4>Hello, I'm</h4>
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
                <a
                  href={pdfPath}
                  target='_blank'
                  download="Akshay's CV"
                  className='hover-button'
                >
                  <span>Download CV</span>
                </a>
              )}
            </div>
            {this.icons()}
          </Col>
          <Col md={6} className='img'>
            <img src={imagePath} alt='person' />
          </Col>
        </Row>
      </section>
    );
  }

  icons() {
    const { icons } = this.props;
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
  }
}

export default (props) => (
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
      <Hero icons={icons} mainImg={Img} mainPdf={Pdf} {...props} />
    )}
  />
);
