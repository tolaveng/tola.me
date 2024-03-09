'use client'
import React from 'react';
import styles from "./page.module.css";


export default function PostPage({ params }: { params: { slug: string } }) {
    return (
      <main>
        <div>
            This is a slug page {params.slug}
        </div>
      </main>
    )
  }