import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine/types/engine';
import { ParticlesProps } from '../../interfaces';

const ParticlesContainer = ({ id }: ParticlesProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id={id}
      className='particles'
      // @ts-ignore
      init={particlesInit}
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
};

export default ParticlesContainer;
