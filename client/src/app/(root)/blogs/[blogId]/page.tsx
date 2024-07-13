"use client";

import Container from "@/components/ui/container";
import { GET_BLOG } from "@/graphql/queries";
import { useQuery } from "@apollo/client";

const SingleBlogPage = ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;
  const { data, loading } = useQuery(GET_BLOG, { variables: { id: blogId } });

  if (loading) return <Container>Loading...</Container>;

  return (
    <Container className="min-h-[70vh] max-w-4xl">
      <div>SingleBlogPage with id {blogId}</div>
    </Container>
  );
};

export default SingleBlogPage;
