'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import { getPosts } from "../actions";


export default function BlogPage() {
  const [pageNum, setPageNum] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const initialized = useRef(false)

  const fetchData = useCallback(async(pageNo: number) => {
    const data = await getPosts(pageNo) as Pagination<Post>;
    console.log('posts', data.items);
    if (data.items) {
      setPosts(prev => [...prev.concat(data.items)])
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

  //const postTest = posts.map((post) => <div key={post._id}></div>);
  
 
  return (
    <main>
      <div>
          This is a blog page
          {
            posts.map((post, i) => <div key={i}>{post.title}</div>)
          }
          {
            loading && <span>loading...</span>
          }
          <button onClick={loadMore}>Load more</button>
      </div>
    </main>
  )
}