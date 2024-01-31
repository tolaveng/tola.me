'use client';
import styles from "./page.module.css";
import HeaderHero from "./components/header-hero";
import { Playpen_Sans } from 'next/font/google'
import BlogPosts from "./blog/blog-posts";
import Image from "next/image";
import { useCallback, useRef } from "react";

const titleFont = Playpen_Sans({ weight: '400', subsets: ['latin'], display: 'swap' })

export default function HomePage() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const scrollToBody = useCallback(() => {
    bodyRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <main className={styles.homeContainer}>
      <div className={styles.headerContainer}></div>
      <div className={styles.headerBackground}>
      </div>

      <div className={styles.headerHero}>
        <HeaderHero />
      </div>

      <div className={styles.headerIcons}>
        <Image src="/icons/react.png" alt="" height="64" width="64"/>
        <Image src="/icons/graphql.png" alt="" height="64" width="64"/>
        <Image src="/icons/android.png" alt="" height="64" width="64"/>
        <Image src="/icons/net-core.png" alt="" height="64" width="64"/>
        <Image src="/icons/blazor.png" alt="" height="64" width="64"/>
        <Image src="/icons/c-sharp.png" alt="" height="64" width="64"/>
        <Image src="/icons/ts.png" alt="" height="64" width="64"/>
        <Image src="/icons/azure.png" alt="" height="64" width="64"/>
        <Image src="/icons/aws.png" alt="" height="64" width="64"/>
        <Image src="/icons/mongo.png" alt="" height="64" width="64"/>
        <Image src="/icons/swift.png" alt="" height="64" width="64"/>
      </div>
      
      <div className={`${styles.headerProfileSection} ${titleFont.className}`}>
        <div className={styles.headerProfileImage}>
          <img src="/images/profile.jpg" alt="Profile Image" style={{maxHeight: 200, maxWidth: 200}} />
        </div>
        <div className={styles.headerProfileTitle}>
          Hi, I&apos;m Tola Veng
        </div>
        <div className={`${styles.headerProfileDescription}`}>
          <div id="profileDescription" style={{minHeight: '2rem'}}>
            <ul className="profileDescription" style={{display: 'none'}}>
              <li data-in-effect="shake" data-out-effect="bounceOut">Welcome to my blog</li>
              <li data-in-effect="flipInY" data-out-effect="fadeOut" data-in-shuffle="false" data-out-shuffle="false">I&apos;m a full-stack developer</li>
              <li data-in-effect="rotateIn" data-out-effect="flipOutY" data-out-shuffle="true">I build Modern Web Mobile Applications</li>
              <li data-in-effect="bounceIn" data-out-effect="rotateOutDownLeft" data-out-shuffle="true">.Net, C#, Blazor App, API, MVC </li>
              <li data-in-effect="rotateInUpRight" data-out-effect="fadeOut" data-out-shuffle="true">ReactJs, React Native, Android & IOS</li>
              <li data-in-effect="fadeIn" data-out-effect="bounceOut" data-out-shuffle="true">Azure, Aws & MongoAtlas</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.animateDownArrow} onClick={scrollToBody}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div ref={bodyRef} className={styles.blogPosts}>
        <BlogPosts />
      </div>
    </main>
  )
}
