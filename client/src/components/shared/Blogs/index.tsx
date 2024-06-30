"use client";

import { GET_ALL_BLOGS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { AnotherBlogCard, BlogCard } from "../BlogCard";
import { BlogType } from "@/types";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_ALL_BLOGS);
  const blogs = data?.getAllBlogs;

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {blogs?.map((blog: BlogType) => (
        <AnotherBlogCard
          createdByUs={true}
          key={blog._id}
          title={blog.title}
          description={blog.description}
          image={blog.imageUrl}
          source={blog.source}
        />
      ))}
    </main>
  );
};

export default Blogs;
