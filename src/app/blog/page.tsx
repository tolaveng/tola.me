'use client'
import styles from "./blog-posts.module.css";
import { PageFooter } from "../components/page-footer";
import BlogPosts from "./blog-posts";
import PageHeader from "../components/page-header";


export default function BlogPage() {
  return (
      <main className={styles.mainContainer}>
        <PageHeader />
        <div className={styles.bodySection}>
          <BlogPosts />
        </div>
        <PageFooter />
      </main>
      
    
  )
}