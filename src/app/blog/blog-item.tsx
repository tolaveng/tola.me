import React from 'react';
import styles from './blog-item.module.css'
import { htmlDecode } from '@/utils/html';
import { dateFormt } from '@/utils/utils';

export default function PostItem ({ post, index } : {post: Post, index: number}) {
  let className = `${styles.blogItemContainer}`;
  if (index % 2 != 0) {
    className += " " + styles.blogItemContainerReversed;
  }
  return (
    <div className={className}>
      <div className={styles.blogItemTitle}>
        <span>{post.title}</span>
      </div>
      <div className={styles.blogItemSection}>
        {post.featureImageUrl && (
          <div className={styles.blogItemSectionLeft}>
            <div className={styles.blogItemImage}>
              <img src={post.featureImageUrl} />
            </div>
          </div>
        )}

        <div className={styles.blogItemSectionLeft}>
          <div className={styles.blogItemContent}>
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