"use client";

import Blogs from "@/components/shared/Blogs";
import { client } from "@/lib/utils";
import { ApolloProvider } from "@apollo/client";

const BlogsPage = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Blogs />
      </ApolloProvider>
    </>
  );
};

export default BlogsPage;
