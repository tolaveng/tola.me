import React from 'react';
import styles from './page-header.module.css';
import Image from 'next/image';
import { Playpen_Sans } from 'next/font/google';

const titleFont = Playpen_Sans({ weight: '400', subsets: ['latin'], display: 'swap' })

const PageHeader = () => {
  return (
    <div className={styles.pageHeaderContainer}>
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderImage}>
          <Image src={'/images/profile.jpg'} width={80} height={80} alt='Profile Image'/>
        </div>
        <div className={styles.pageHeaderSeparator}></div>
        <div className={`${styles.pageHeaderText}  ${titleFont.className}`}>
          Full-stack developer
        </div>
        <div className={styles.pageHeaderIcons}>
          <span className={`logo-icon icon-android ${styles.pageHeaderIcon}`} />
          <span className={`logo-icon icon-aws ${styles.pageHeaderIcon}`} />
          <span className={`logo-icon icon-azure ${styles.pageHeaderIcon}`} />
          <span className={`logo-icon icon-blazor ${styles.pageHeaderIcon}`} />
          <span className={`logo-icon icon-csharp ${styles.pageHeaderIcon}`} />
          <span className={`logo-icon icon-graphql ${styles.pageHeaderIcon}`} />
          <span className={`logo-icon icon-mongo ${styles.pageHeaderIcon}`} />
          <span className={`logo-icon icon-dotnet ${styles.pageHeaderIcon}`} />
          <span className={`logo-icon icon-react ${styles.pageHeaderIcon}`} />
          <span className={`logo-icon icon-kotlin ${styles.pageHeaderIcon}`} />
          <span className={`logo-icon icon-typescript ${styles.pageHeaderIcon}`} />
          <span className={`logo-icon icon-java ${styles.pageHeaderIcon}`} />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;