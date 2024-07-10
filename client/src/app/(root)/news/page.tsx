"use client";

import News from "@/components/shared/News";
import { client } from "@/lib/utils";
import { ApolloProvider } from "@apollo/client";

const NewsPage = () => {
  return (
    <ApolloProvider client={client}>
      <News />
    </ApolloProvider>
  );
};

export default NewsPage;
