'use client'
import { ISourceOptions, tsParticles } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from '@tsparticles/slim';
import React, { useEffect, useRef, useState } from 'react';
import styles from './header-hero.module.css';

//https://particles.js.org/
const options: ISourceOptions  = {
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
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    stroke: {
      width: 0,
      color: '#ffffff'
    },
    size: {
      value: { min: 1, max: 6 },
    },
  },
  detectRetina: true,
  responsive: [{
    maxWidth: 720, options: {
      particles: {
        number: { limit: {value: 50}}
      }
    }
  }]
};

export default function HeaderHero() {
  const [init, setInit] = useState(false);
  const particleStarted = useRef(false);

  useEffect(() => {
    // This should run once
    if (particleStarted.current) return;
    particleStarted.current = true;
    
    initParticlesEngine(async(engine) => {
      await loadSlim(engine);
    }).then(() => { 
      setInit(true);
    }).catch((e) => console.log('particle error', e));
  }, []);

  

  if (!init) return <></>;

  return (
    <Particles id="headerHero" options={options} className={styles.headerHero} />
  );
}
