import React, { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
// @ts-ignore
import HorizontalTimeline from 'react-horizontal-timeline';
import AnimationContainer from '../animation-container';
import Card from './card';
import data from './data';

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleClass, setVisibleClass] = useState('hidden');
  const { inViewport } = useInViewport(timelineRef);

  useEffect(() => {
    if (inViewport) {
      setVisibleClass('');
    }
  }, [inViewport]);

  const cardProps = data[currentIndex];

  return (
    <div
      className={`horizontal-timeline-container ${visibleClass}`}
      ref={timelineRef}
    >
      <AnimationContainer delay={200} animation='fadeIn slow'>
        <HorizontalTimeline
          index={currentIndex}
          indexClick={(index: React.SetStateAction<number>) => {
            setCurrentIndex(index);
          }}
          values={data.map((el) => el.date)}
          getLabel={(date: string | number | Date) => {
            const dateSubString = new Date(date)
              .toDateString()
              .substring(4)
              .trim();
            return dateSubString
              .split(' ')
              .filter((el, index) => index !== 1)
              .join(' ');
          }}
          styles={{
            background: 'transparent',
            foreground: '#eb83f8',
            outline: '#fff',
          }}
        />
      </AnimationContainer>
      <AnimationContainer
        animation='alideInLeft experience-container'
        delay={100}
      >
        <Card
          id={cardProps.id}
          role={cardProps.role}
          company={cardProps.company}
          timeInRole={cardProps.timeInRole}
          location={cardProps.location}
          responsibilities={cardProps.responsibilities}
          isEducation={cardProps.isEducation || false}
          skills={cardProps.skills}
        />
      </AnimationContainer>
    </div>
  );
};

export default Timeline;
