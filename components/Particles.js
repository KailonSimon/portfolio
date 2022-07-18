import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "fixed",
  },
}));

export const ParticlesBackground = () => {
  const { classes } = useStyles();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      className={classes.wrapper}
      canvasClassName="particles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#000",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "repulse",
            },
            onHover: {
              enable: false,
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "left",
            enable: true,
            straight: true,
            speed: 0.5,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.25,
              sync: false,
            },
          },
          shape: {
            type: "star",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          size: {
            value: {
              min: 1,
              max: 4,
            },
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
