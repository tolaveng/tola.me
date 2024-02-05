'use client'
import React, { useMemo } from 'react';
import { useCallback, useEffect, useRef, useState } from "react";
import { getPosts } from "../actions";
import PostItem from './blog-item';
import Spinner from '../components/spinner';

export default function BlogPosts () {
  const [pageNum, setPageNum] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const initialized = useRef(false)
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const fetchData = useCallback(async(pageNo: number) => {
    try {
      const data = await getPosts(pageNo) as Pagination<Post>;
      if (data.items) {
        setPosts(prev => [...prev.concat(data.items)])
      }
      setHasNext(data.hasNext);
    } catch (ex) {
      console.log('error', ex);
    }
  }, []);


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
  }, [fetchData, loading, pageNum]);

  // observe when the load more section visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries && entries[0] && entries[0].isIntersecting) {
        loadMore();
      }
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    });
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore]);


  const postItems = useMemo(() => posts.map((post, i) => <PostItem key={i} index={i} post={post} />), [posts]);

  return (
    <>
      { postItems }
      <div ref={loadMoreRef} className='flex justify-center items-center mt-3 mb-3 py-3'>
        { hasNext && <Spinner text='Loading...'/> }
      </div>
    </>
  );
};