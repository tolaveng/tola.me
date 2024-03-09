'use client';
import React from 'react';
import styles from "./page.module.css";
import BlogPosts from '@/app/posts/posts';
import { PageFooter } from '@/app/components/page-footer';
import PageHeader from '@/app/components/page-header';
import { usePathname } from 'next/navigation';
import Breadcrumb, { BreadcrumbPath } from '@/app/components/breadcrumb';

interface props {
  params: {
    slug: string;
  }
}

const breadcrumbs: BreadcrumbPath[] = [
  { name: 'Posts', link: '/posts' },
  { name: 'Tag' },
];

const BlogTag = ({ params }: props) => {
  const pathname = usePathname()
  if (!params || !params.slug) return null;

  const tag = params.slug.trim().toLowerCase();
  
  return (
    <main className={styles.mainContainer}>
      <PageHeader />
      <div className={styles.bodySection}>
        <Breadcrumb paths={breadcrumbs} />
        <BlogPosts tag={tag} />
      </div>
      <PageFooter />
    </main>
  );
}

export default BlogTag;