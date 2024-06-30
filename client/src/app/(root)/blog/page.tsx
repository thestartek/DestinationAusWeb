"use client";

import Blogs from "@/components/shared/Blogs";
import { client } from "@/lib/utils";
import { ApolloProvider } from "@apollo/client";

const Blog = () => {
  return (
    <div className="max-w-7xl bg-gray-100 mx-auto p-4">
      {/* <AnotherBlogCard {...blogData} /> */}
      <ApolloProvider client={client}>
        <Blogs />
      </ApolloProvider>
    </div>
  );
};

export default Blog;
