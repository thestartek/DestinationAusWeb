"use client";

import Articles from "@/components/shared/Articles";
import { client } from "@/lib/utils";
import { ApolloProvider } from "@apollo/client";

const NewsPage = () => {
  return (
    <ApolloProvider client={client}>
      <Articles />
    </ApolloProvider>
  );
};

export default NewsPage;
