'use client'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from '@tsparticles/slim';
import React, { useEffect, useRef, useState } from 'react';
import styles from './header-hero.module.css';
import { particleNasa } from "./particle-nasa";



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
    <Particles id="headerHero" options={particleNasa} className={styles.headerHero} />
  );
}
