'use client'
import React, { useMemo } from 'react';
import { useCallback, useEffect, useRef, useState } from "react";
import { getPosts } from "../actions";
import PostItem from './blog-item';

export default function BlogPosts () {
  const [pageNum, setPageNum] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const initialized = useRef(false)

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
    const n = pageNum + 1;
    setPageNum(n);
    setLoading(true);
    fetchData(n).finally(() => setLoading(false));
  }, [fetchData, pageNum]);

  const postItems = useMemo(() => posts.map((post, i) => <PostItem key={i} post={post} />), [posts]);

  return (
    <>
      { postItems }
    </>
  );
};