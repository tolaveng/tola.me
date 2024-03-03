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
          <Image src={'/icons/logo-icons.png'} width={400} height={1} alt='' />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;