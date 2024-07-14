"use client";

import Blog from "@/components/shared/SingleBlogPage";
import { client } from "@/lib/utils";
import { ApolloProvider } from "@apollo/client";

const BlogDetails = ({ params }: { params: { blogId: string } }) => {
  return (
    <ApolloProvider client={client}>
      <Blog blogId={params.blogId} />
    </ApolloProvider>
  );
};

export default BlogDetails;
