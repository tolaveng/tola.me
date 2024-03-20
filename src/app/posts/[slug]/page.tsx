'use client'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from "./page.module.css";
import Breadcrumb, { BreadcrumbPath } from '@/app/components/breadcrumb';
import PageHeader from '@/app/components/page-header';
import { PageFooter } from '@/app/components/page-footer';
import { getPostByPath } from '@/app/actions';
import Spinner from '@/app/components/spinner';

const breadcrumbs: BreadcrumbPath[] = [
  { name: 'Posts', link: '/posts' }
];


export default function PostPage({ params }: { params: { slug: string } }) {
  const path = params && params.slug && params.slug.trim().toLowerCase();

  const breadCrumbs = useRef([...breadcrumbs, { name: path }]);
  const [post, setPost] = useState<Post>();

  const fetchData = useCallback(async () => {
    const aPost = await getPostByPath(path) as Post;
    setPost(aPost);
  }, [path]);

  useEffect(() => { fetchData() }, [fetchData])

  const RenderPost = useMemo(() => {
    return (
      <div className={styles.postContainer}>
        <div className={styles.postTitle}>
          { post?.title }
        </div>
        <div className={styles.postContent}>
          { post?.content }
        </div>
      </div>
    );
  }, [post]);

  return (
    <main className={styles.mainContainer}>
      <PageHeader />
      <div className={styles.bodySection}>
        <Breadcrumb paths={breadCrumbs.current} />
        <div>
          {!post && <div className='flex justify-center m-8'>
            <Spinner text='Loading...'/>
          </div>}
          { post && RenderPost}
        </div>
      </div>
      <PageFooter />
    </main>
  )
}
