import React from 'react';
import FilterablePosts from 'components/FilterablePosts';
import { getAllPosts } from 'service/posts';

export default async function page() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
