import React, { useEffect, useRef, useState } from 'react';
import styles from './post-item.module.css'
import { htmlDecode } from '@/utils/html';
import { dateFormt } from '@/utils/utils';
import ImageHolder from '../components/image-holder';
import Tag from '../components/tag';

export default function PostItem ({ post, index } : {post: Post, index: number}) {
  const blogSectionRef = useRef<HTMLDivElement>(null);
  const [isBlogVisible, setBlogVisible] = useState(false);
  const [isImageLoaded, setImageLoaded] = useState(false);

  // slide in if title visible
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (isBlogVisible) return;
      setBlogVisible(entry.isIntersecting);
    });
    if (blogSectionRef.current) {
      observer.observe(blogSectionRef.current);
    }
    return () => observer.disconnect();
  }, [isBlogVisible])
  
  let className = `${styles.blogItemContainer} timeline-item`;

  // image effect
  let imgClassName = styles.blogItemImage;
  if (index % 3 === 0) {
    imgClassName = `${styles.blogItemImage} ${styles.blogItemImageDistorted}`;
  } else if (index % 3 === 1) {
    imgClassName = `${styles.blogItemImage} ${styles.blogItemImageSkew}`;
  }
  const [imageClassName, setImageClassName] = useState(imgClassName);

  const onImageLoad = () => {
    setImageLoaded(true);
    setImageClassName(prev => prev + " " + styles.slideIn);
  };
  
  return (
    <div className={className}>
      <div className='timeline-item-dot' />
      <div className={`${styles.blogItemTitle}`}>
        <span>{post.title}</span>
      </div>
      <div className='basis-1/2 ps-8'>
          {post.tags && post.tags.map((t, i) => <Tag key={i} text={t}/>)}
      </div>
      <div className={styles.blogItemSection} ref={blogSectionRef}>
        <div className={styles.blogItemSectionCol}>
          <div className={`${styles.blogItemContent} ${isBlogVisible ? styles.slideIn : ''}`}>
            <div>
              { htmlDecode(post.summary)}
            </div>

            { post.content && post.content.trim() !== "" && (
              <span>👉 <a href={`/posts/${post.path}`} className='underline underline-offset-2'>More Details</a></span>
            )}
          </div>
        </div>
        {post.featureImageUrl && (
          <div className={styles.blogItemSectionCol}>
            {// lazy load image when blog visible
            isBlogVisible && (
              <div className={styles.blogItemImageContainer}>
                {!isImageLoaded && <ImageHolder/>}
                <img src={post.featureImageUrl} onLoad={onImageLoad} className={imageClassName}/>
              </div>
            )}
          </div>
        )}
      </div>
      <div className='text-right italic'>
          wrote on {dateFormt(post.publishedDateTime)}
      </div>
    </div>
  )
}