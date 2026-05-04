import { mockArticleOfTheDay, mockCategories, mockComments, mockPosts } from "@/lib/mockData";

export async function getAllCategories() {
  return mockCategories.slice(0, 8);
}

export async function getLatestPosts() {
  // Sort descending by date
  const sorted = [...mockPosts].sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));
  return sorted.slice(0, 2);
}

export async function getArticleOfTheDay() {
  return mockArticleOfTheDay;
}

export async function getMostVisitedPosts() {
  const sorted = [...mockPosts].sort((a, b) => b.views - a.views);
  return sorted.slice(0, 8);
}

export async function getCategoryBySlug(slug) {
  const category = mockCategories.find(c => c.slug.current === slug);
  if (!category) return null;

  const categoryPosts = mockPosts
    .filter(p => p.category._id === category._id)
    .sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))
    .slice(0, 8);

  const totalComments = mockComments.filter(c => 
    mockPosts.find(p => p._id === c.post._ref && p.category._id === category._id)
  ).length;

  const totalViews = categoryPosts.reduce((acc, post) => acc + post.views, 0);

  return { name: category.name, banner: category.banner, totalViews, totalComments, posts: categoryPosts };
}

export async function getPostBySlug(slug) {
  const post = mockPosts.find(p => p.slug.current === slug);
  if (!post) return null;

  const comments = mockComments
    .filter(c => c.post._ref === post._id)
    .sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));

  return { ...post, comments };
}