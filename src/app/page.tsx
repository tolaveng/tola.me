'use client';
import styles from "./page.module.css";
import HeaderHero from "./components/header-hero";
import { Playpen_Sans } from 'next/font/google'
import BlogPosts from "./blog/blog-posts";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const titleFont = Playpen_Sans({ weight: '400', subsets: ['latin'], display: 'swap' })

export default function HomePage() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const scrollToBody = useCallback(() => {
    bodyRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const [isBodySectionVisible, setBodySectionVisible] = useState(false);

  // observe when the body section visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries && entries[0]) {
        setBodySectionVisible(entries[0].isIntersecting);
      }
    }, {
      root: null,
      rootMargin: "-100px",
      threshold: 0,
    });
    if (bodyRef.current) {
      observer.observe(bodyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.homeContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerBackground}>
        </div>

        <div className={styles.headerHero}>
          <HeaderHero />
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
      </div>

      <div className={styles.headerIcons}>
        <span className={`${styles.headerIcon} ${styles.iconAndroid}`} />
        <span className={`${styles.headerIcon} ${styles.iconAws}`} />
        <span className={`${styles.headerIcon} ${styles.iconAzure}`} />
        <span className={`${styles.headerIcon} ${styles.iconBlazor}`} />
        <span className={`${styles.headerIcon} ${styles.iconCSharp}`} />
        <span className={`${styles.headerIcon} ${styles.iconGraphql}`} />
        <span className={`${styles.headerIcon} ${styles.iconMongo}`} />
        <span className={`${styles.headerIcon} ${styles.iconDotNet}`} />
        <span className={`${styles.headerIcon} ${styles.iconReact}`} />
        <span className={`${styles.headerIcon} ${styles.iconSwift}`} />
        <span className={`${styles.headerIcon} ${styles.iconTypescript}`} />
        {/* <Image src="/icons/react.png" alt="" height="64" width="64"/>
        <Image src="/icons/graphql.png" alt="" height="64" width="64"/>
        <Image src="/icons/android.png" alt="" height="64" width="64"/>
        <Image src="/icons/net-core.png" alt="" height="64" width="64"/>
        <Image src="/icons/blazor.png" alt="" height="64" width="64"/>
        <Image src="/icons/c-sharp.png" alt="" height="64" width="64"/>
        <Image src="/icons/ts.png" alt="" height="64" width="64"/>
        <Image src="/icons/azure.png" alt="" height="64" width="64"/>
        <Image src="/icons/aws.png" alt="" height="64" width="64"/>
        <Image src="/icons/mongo.png" alt="" height="64" width="64"/>
        <Image src="/icons/swift.png" alt="" height="64" width="64"/> */}
      </div>

      <div ref={arrowRef} className={styles.animateDownArrow} style={{display: isBodySectionVisible ? 'none': 'flex'}} >
          <div onClick={scrollToBody}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
      <div ref={bodyRef} className={styles.bodySection}>
        <BlogPosts />
      </div>

      <div>
        Footer
      </div>
    </main>
  )
}
