import React from 'react';
import styles from './blog-item.module.css'
import { htmlDecode } from '@/utils/html';

export default function PostItem ({ post } : {post: Post}) {
  return (
    <div className={styles.blogItemContainer}>
      <div className={styles.parallaxBackground} style={{backgroundColor: 'yellow'}}>

      </div>
      <div className={styles.blogItemContent}>
        <div>
          { post.title}
        </div>
        <div>
          { htmlDecode(post.summary)}
        </div>
      </div>
    </div>
  )
}