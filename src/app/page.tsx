'use client';
import styles from "./page.module.css";
import HeaderHero from "./components/header-hero";
import { Playpen_Sans } from 'next/font/google'
import BlogPosts from "./posts/posts";
import { useCallback, useEffect, useRef, useState } from "react";
import { PageFooter } from "./components/page-footer";

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
    <>
    <main className={styles.homeContainer}>
      <div className={styles.headerContainerFixed}>
        <div className={styles.headerHero}>
          <HeaderHero />
        </div>

        <div className={styles.headerIcons}>
          <span className={`logo-icon icon-android ${styles.iconAndroid}`} />
          <span className={`logo-icon icon-aws ${styles.iconAws}`} />
          <span className={`logo-icon icon-azure ${styles.iconAzure}`} />
          <span className={`logo-icon icon-blazor ${styles.iconBlazor}`} />
          <span className={`logo-icon icon-csharp ${styles.iconCSharp}`} />
          <span className={`logo-icon icon-graphql ${styles.iconGraphql}`} />
          <span className={`logo-icon icon-mongo ${styles.iconMongo}`} />
          <span className={`logo-icon icon-dotnet ${styles.iconDotNet}`} />
          <span className={`logo-icon icon-react ${styles.iconReact}`} />
          <span className={`logo-icon icon-kotlin ${styles.iconKotlin}`} />
          <span className={`logo-icon icon-typescript ${styles.iconTypescript}`} />
          <span className={`logo-icon icon-java ${styles.iconJava}`} />
        </div>
      </div>

      <div className={`${styles.headerContainer}  ${titleFont.className}`}>
        <div className={`${styles.headerProfileSection}`}>
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
                <li data-in-effect="bounceIn" data-out-effect="rotateOutDownLeft" data-out-shuffle="true">.Net, C#, Blazor, API, MVC </li>
                <li data-in-effect="rotateInUpRight" data-out-effect="fadeOut" data-out-shuffle="true">ReactJs, React Native, Android</li>
                <li data-in-effect="rotateIn" data-out-effect="flipOutY" data-out-shuffle="true">Java, Spring Boot, MVC, API</li>
                <li data-in-effect="fadeIn" data-out-effect="bounceOut" data-out-shuffle="true">Native Cloud, Azure, Aws & MongoAtlas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.headerProfileSubTitle}>
        💻 have a look at my hobbies 👨‍💻
        </div>

        <div ref={arrowRef} className={styles.animateDownArrow} >
          <div onClick={scrollToBody}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      <div ref={bodyRef} className={styles.bodySection}>
        <BlogPosts />
      </div>
    </main>
    <PageFooter />
    </>
  )
}
