"use client";

import { GET_ALL_BLOGS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { BlogCard } from "../BlogCard";
import { BlogType } from "@/types";
import Loader from "@/components/ui/loader";
import Container from "@/components/ui/container";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_ALL_BLOGS);
  const blogs = data?.getAllBlogs;

  if (loading)
    return (
      <Container className="min-h-[70vh] justify-center">
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container className="min-h-[70vh] justify-center">
        <h2 className="text-3xl font-bold">No blogs to see.</h2>
      </Container>
    );

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[70vh] my-8">
      {blogs?.map((blog: BlogType) => (
        <BlogCard key={blog._id} _id={blog._id} />
      ))}
    </Container>
  );
};

export default Blogs;
