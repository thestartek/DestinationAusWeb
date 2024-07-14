"use client";

import Articles from "@/components/shared/Articles";
import Container from "@/components/ui/container";
import { client } from "@/lib/utils";
import { ApolloProvider } from "@apollo/client";

const NewsPage = () => {
  return (
    <ApolloProvider client={client}>
      <Container className="min-h-[70vh] my-16 justify-center items-center">
        <Articles />
      </Container>
    </ApolloProvider>
  );
};

export default NewsPage;
