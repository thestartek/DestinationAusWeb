"use client";

import { AnotherBlogCard, BlogCard } from "@/components/shared/BlogCard";

const Blog = () => {
  const blogData = {
    image: "/mountains.jpg",
    title: "Sample Blog Post",
    description: "This is a short description of the blog post...",
    createdByUs: true,
    comments: [
      "Great post!",
      "Really informative, thank you.",
      "Loved the insights shared here.",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <AnotherBlogCard {...blogData} />
    </div>
  );
};

export default Blog;
