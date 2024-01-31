'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import { getPosts } from "../actions";
import BlogPosts from "./blog-posts";


export default function BlogPage() {
  return (
    <main>
      <BlogPosts />
    </main>
  )
}