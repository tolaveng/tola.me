'use client'
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./page.module.css";
import HeaderHero from "./components/header-hero";
import { Playpen_Sans } from 'next/font/google'
import Head from "next/head";
import Script from "next/script";


const titleFont = Playpen_Sans({ weight: '400', subsets: ['latin'], display: 'swap' })

export default function HomePage() {

  return (
    <main>
      <div className={styles.headerBg + " h-screen border-2 border-red"}>
        <div className={styles.headerHero}>
          <HeaderHero />
        </div>
        <div className={`${styles.headerWrapper} ${titleFont.className}`}>
          <div className={styles.headerProfileImage}>
            <img src="/images/profile.jpg" alt="Profile Image" style={{maxHeight: 200, maxWidth: 200}} />
          </div>
          <div className={styles.headerProfileTitle}>
            Hi, I&apos;m Tola Veng
          </div>
          <div className={`${styles.headerProfileDescription}`}>
            <div id="profileDescription" style={{minHeight: '2rem'}}>
              <ul className="profileDescription" style={{display: 'none'}}>
                <li data-in-effect="bounceIn" data-out-effect="bounceOut">Welcome to my blog</li>
                <li data-in-effect="flipInY" data-out-effect="fadeOut" data-in-shuffle="false" data-out-shuffle="false">I'm a software engineer</li>
                <li data-in-effect="rotateIn" data-out-effect="flipOutY" data-out-shuffle="true">I build Web and Mobile apps</li>
                <li data-in-effect="bounceIn" data-out-effect="rotateOutDownLeft" data-out-shuffle="true">.Net, C#, Blazor App, API, MVC </li>
                <li data-in-effect="rotateInUpRight" data-out-effect="shake" data-out-shuffle="true">ReactJs, React Native, Android & IOS</li>
                <li data-in-effect="fadeIn" data-out-effect="bounceOut" data-out-shuffle="true">Cloud Azure, Aws & MongoAtlas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        Loading...
      </div>
    </main>
  )
}
