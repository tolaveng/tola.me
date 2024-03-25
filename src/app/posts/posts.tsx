'use client'
import React, { useMemo } from 'react';
import styles from './posts.module.css'
import { useCallback, useEffect, useRef, useState } from "react";
import { getPosts, getPostsByTag } from "../actions";
import PostItem from './post-item';
import Spinner from '../components/spinner';

export default function BlogPosts ({ tag }: { tag?: string}) {
  const [pageNum, setPageNum] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasNext, setHasNext] = useState(false);
  const initialized = useRef(false)
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const fetchData = useCallback(async(pageNo: number) => {
    try {
      const data = tag 
        ? await getPostsByTag(pageNo, tag) as Pagination<Post>
        : await getPosts(pageNo) as Pagination<Post>;
      if (data && data.items) {
        setPosts(prev => [...prev.concat(data.items)])
        setHasNext(data.hasNext);
      }
    } catch (ex) {
      console.log('error', ex);
    }
  }, [tag]);


  useEffect(() => {
    if(!initialized.current) {
      setLoading(true);
      fetchData(1).finally(() => setLoading(false));
      initialized.current = true;
    }
  }, [fetchData]);

  const loadMore = useCallback(() => {
    if (loading || !hasNext) return;
    const n = pageNum + 1;
    setPageNum(n);
    setLoading(true);
    fetchData(n).finally(() => setLoading(false));
  }, [fetchData, hasNext, loading, pageNum]);

  // observe when the load more section visible: infinite scroll
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     if (entries && entries[0] && entries[0].isIntersecting) {
  //       loadMore();
  //     }
  //   }, {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 1,
  //   });
  //   if (loadMoreRef.current) {
  //     observer.observe(loadMoreRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, [loadMore]);


  const postItems = useMemo(() => posts.map((post, i) => <PostItem key={i} index={i} post={post} />), [posts]);

  return (
    <div className={styles.blogPostContainer}>
      <div className='p-2'></div>

      { !loading && !!postItems && postItems.length == 0 && (
        <div className='p-8'>
          Hmm! Something went wrong. <a href='/' className='underline underline-offset-2'>Visit Home Page</a>
        </div>
      )}
      { !!postItems && postItems.length > 0 && (<div className='timeline'>
        {postItems}
        <div className='timeline-item'>
          <div className='timeline-item-dot' />
        </div>
      </div>) }
      { loading && <div className={styles.blogPostLoadMore}>
        <Spinner text='Loading...'/> </div>
      }
      {hasNext && <div ref={loadMoreRef} className={styles.blogPostLoadMore} >
        { !loading && (
          <button onClick={loadMore} className='text-white border-white bg-cyan-700 border-2 rounded-full p-2 px-6 drop-shadow hover:bg-cyan-900'>
            Load More
          </button>
        )}
        </div>
      }
      
      <div className='p-2'></div>
    </div>
  );
};