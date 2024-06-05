"use client";

import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs", {
          method: "GET",
        });
        const data = await response.json();
        console.log("Blogs fetched successfully: ", data);
      } catch (error) {
        console.log("Failed to fetch blogs: ", error);
      }
    };
    fetchBlogs();
  }, []);

  return <div>Blog</div>;
};

export default Blog;
