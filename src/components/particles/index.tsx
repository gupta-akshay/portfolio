import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

type ParticlesProps = {
  id: string
}

const ParticlesContainer = ({ id }: ParticlesProps) =>
  <Particles
    id={id}
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

export default ParticlesContainer;
