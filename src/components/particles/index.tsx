import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadLinksPreset } from 'tsparticles-preset-links';
import { ParticlesProps } from '../../interfaces';

const ParticlesContainer = ({ id }: ParticlesProps) => {
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      id={id}
      className='particles'
      // @ts-ignore
      init={particlesInit}
      options={{
        preset: 'links',
        fullScreen: {
          enable: false,
        },
        retina_detect: true,
        background: {
          // color: 'transparent',
          opacity: 0.01,
        },
        particles: {
          size: {
            value: 1,
          },
          number: {
            value: 80,
            density: {
              enable: false,
              value_area: 10000,
            },
          },
          line_linked: {
            opacity: 0.5,
          },
        },
      }}
    />
  );
};

export default ParticlesContainer;
