import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ParticlesProps } from '../../interfaces';

const ParticlesContainer = ({ id }: ParticlesProps) => (
  <Particles
    id={id}
    className='particles'
    init={(main) => loadFull(main)}
    options={{
      particles: {
        number: {
          value: 70,
          density: {
            enable: false,
            value_area: 10000,
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
          speed: 2,
          direction: 'none',
          enable: true,
        },
      },
      fullScreen: {
        enable: false,
      },
      retina_detect: true,
    }}
  />
);

export default ParticlesContainer;
