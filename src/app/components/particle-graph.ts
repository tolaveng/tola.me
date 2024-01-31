import { ISourceOptions } from "@tsparticles/engine";

//https://particles.js.org/
export const particleGraph: ISourceOptions  = {
  autoPlay: true,
  fullScreen: false,
  background: {
    color: {value: "#000000"},
    //image: 'url("./images/header-bg.jpg")',
    opacity: 0.2,
    repeat: 'no-repeat',
    size: 'cover'
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 50,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    stroke: {
      width: 0,
      color: '#ffffff',
    },
    size: {
      value: { min: 1, max: 6 },
    },
  },
  detectRetina: true,
  responsive: [{
    maxWidth: 720, options: {
      particles: {
        number: { limit: {value: 25}}
      }
    }
  }]
};