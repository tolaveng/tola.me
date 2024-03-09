'use client';
import styles from "./posts.module.css";
import { PageFooter } from "../components/page-footer";
import BlogPosts from "./posts";
import PageHeader from "../components/page-header";
import Breadcrumb, { BreadcrumbPath } from "../components/breadcrumb";

const breadcrumbs: BreadcrumbPath[] = [
  { name: 'Posts' },
];

export default function BlogPage() {
  return (
    <main className={styles.mainContainer}>
      <PageHeader />
      <div className={styles.bodySection}>
        <Breadcrumb paths={breadcrumbs} />
        <BlogPosts />
      </div>
      <PageFooter />
    </main>
  )
}