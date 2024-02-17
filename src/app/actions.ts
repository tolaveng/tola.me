'use server'

export const getPosts = async(pageNo: number) => {
  const getPostsUrl = `${process.env.API_BASE_URL}posts?pageno=${pageNo}&pagesize=5`;
  const res = await fetch(getPostsUrl);

  if (!res.ok) {
    throw new Error('Failed to fetch data from server');
  }

  return res.json();
};