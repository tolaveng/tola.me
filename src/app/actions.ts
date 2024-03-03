'use server'

export const getPosts = async(pageNo: number) => {
  const getPostsUrl = `${process.env.API_BASE_URL}posts?pageno=${pageNo}&pagesize=3`;
  const res = await fetch(getPostsUrl);

  if (!res.ok) {
    throw new Error('Failed to fetch data from server');
  }

  return res.json();
};

export const getPostsByTag = async(pageNo: number, tag: string) => {
  const getPostsUrl = `${process.env.API_BASE_URL}posts/tag/${tag}?pageno=${pageNo}&pagesize=20`;
  const res = await fetch(getPostsUrl);

  if (!res.ok) {
    throw new Error('Failed to fetch data from server');
  }

  return res.json();
};