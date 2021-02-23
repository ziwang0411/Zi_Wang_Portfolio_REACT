import React from "react";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    color: "red",
    opacity: 0.5,
  },
});
const ParticleAnim = () => {
  const classes = useStyles();

  return (
    <Particles
      canvasClassName={classes.particlesCanva}
      params={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          color: {
            value: "random",
          },
          links: {
            color: {
              value: "random",
            },
            enable: true,
            opacity: 0.4,
            width: 2,
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "tomato",
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 0.1,
              sync: true,
            },
          },
        },
        opacity: {
          value: 0.7,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: true,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
};

export default ParticleAnim;
