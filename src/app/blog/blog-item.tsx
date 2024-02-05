import React, { useEffect, useRef, useState } from 'react';
import styles from './blog-item.module.css'
import { htmlDecode } from '@/utils/html';
import { dateFormt } from '@/utils/utils';

export default function PostItem ({ post, index } : {post: Post, index: number}) {
  const titleRef = useRef<HTMLDivElement>(null);
  const [isTitleVisible, setTitleVisible] = useState(false);

  // slide in if title visible
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (isTitleVisible) return;
      setTitleVisible(entry.isIntersecting);
    });
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return () => observer.disconnect();
  }, [isTitleVisible])
  
  
  let className = `${styles.blogItemContainer}`;
  if (index % 2 != 0) {
    className += " " + styles.blogItemContainerReversed;
  }

  return (
    <div className={className}>
      <div className={styles.blogItemTitle} ref={titleRef}>
        <span>{post.title}</span>
      </div>
      <div className={styles.blogItemSection}>
        {post.featureImageUrl && (
          <div className={styles.blogItemSectionLeft}>
            <div className={`${styles.blogItemImage} ${isTitleVisible ? styles.slideIn : ''}`}>
              <img src={post.featureImageUrl} />
            </div>
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