import React, { useContext, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BaffleText from "../../components/baffle-text";
import HorizontalTimeline from '../../components/timeline';
import ParticlesContainer from "../../components/particles";
import ThemeContext from "../../context";
import { ThemeContextType } from "../../interfaces";
import './styles.scss';

type TimelineType = {
  id: string
};

const Timeline = ({ id }: TimelineType) => {
  const { height } = useContext(ThemeContext) as ThemeContextType;
  const [show, setShow] = useState(false);

  const enableShow = () => {
    setShow(true);
  };

  const renderServices = () => {
    return (
      <>
        {show || height === 'auto' ? (
          <Row>
            <Col md={12} className='horizontal-timeline'>
              <HorizontalTimeline />
            </Col>
          </Row>
        ) : null}
      </>
    )
  };

  const renderCounters = () => {
    return null;
  };

  return (
    <section
      id={`${id}`}
      className="services"
      style={{ height }}
    >
      <Row
        className="top"
        style={{
          maxHeight:
            height !== 'auto'
              ? height * 0.8
              : 'inherit',
        }}
      >
        <ParticlesContainer id='particles-2' />
        <div className="content">
          <Col md={12}>
            <div className="line-text">
              <h4>Work Experience</h4>
            </div>
            <div className="heading">
              <BaffleText
                text="What I have done"
                revealDuration={500}
                revealDelay={500}
                parentMethod={enableShow}
                callMethodTime={1100}
              />
            </div>
            <div
              className="services_container"
              style={{
                minHeight:
                  height !== 'auto'
                    ? height * 0.6
                    : 'inherit',
              }}
            >
              <Container>{renderServices()}</Container>
            </div>
          </Col>
        </div>
      </Row>
      <Row className="bottom">{renderCounters()}</Row>
    </section>
  )
};

export default Timeline;
