import React, { useEffect, useRef, useState } from 'react';
import styles from './blog-item.module.css'
import { htmlDecode } from '@/utils/html';
import { dateFormt } from '@/utils/utils';
import Spinner from '../components/spinner';

export default function PostItem ({ post, index } : {post: Post, index: number}) {
  const blogSectionRef = useRef<HTMLDivElement>(null);
  const [isTitleVisible, setTitleVisible] = useState(false);
  const [isImageLoaded, setImageLoaded] = useState(false);

  // slide in if title visible
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (isTitleVisible) return;
      setTitleVisible(entry.isIntersecting);
    });
    if (blogSectionRef.current) {
      observer.observe(blogSectionRef.current);
    }
    return () => observer.disconnect();
  }, [isTitleVisible])
  
  let className = styles.blogItemContainer;
  if (index % 2 != 0) {
    className += " " + styles.blogItemContainerReversed;
  }

  // image effect
  let imageClassName = styles.blogItemImage;
  if (index % 3 === 0) {
    imageClassName = `${styles.blogItemImage} ${styles.blogItemImageDistorted}`;
  } else if (index % 3 === 1) {
    imageClassName = `${styles.blogItemImage} ${styles.blogItemImageSkew}`;
  }
  imageClassName = imageClassName + " " + (isTitleVisible && isImageLoaded ? styles.slideIn : '');

  return (
    <div className={className}>
      <div className={styles.blogItemTitle}>
        <span>{post.title}</span>
      </div>
      <div className={styles.blogItemSection} ref={blogSectionRef}>
        {post.featureImageUrl && (
          <div className={styles.blogItemSectionLeft}>
            <div className={imageClassName} style={{display: isImageLoaded ? 'block' : 'none'}}>
              <img src={post.featureImageUrl} onLoad={() => setImageLoaded(true)} />
            </div>
            {!isImageLoaded && <Spinner/>}
          </div>
        )}

        <div className={styles.blogItemSectionLeft}>
          <div className={`${styles.blogItemContent} ${isTitleVisible ? styles.slideIn : ''}`}>
            <div>
              { htmlDecode(post.summary)}
            </div>

            { post.content && post.content.trim() !== "" && (
              <button type='button'>read more...</button>
            )}
          </div>
        </div>
      </div>

      <div className='text-right italic'>
        published: {dateFormt(post.publishedDateTime)}
      </div>
    </div>
  )
}