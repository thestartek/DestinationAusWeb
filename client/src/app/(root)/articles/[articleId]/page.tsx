"use client";

import Article from "@/components/shared/SingleArticlePage";
import { client } from "@/lib/utils";
import { ApolloProvider } from "@apollo/client";

const ArticleDetails = ({ params }: { params: { articleId: string } }) => {
  const { articleId } = params;

  return (
    <ApolloProvider client={client}>
      <Article articleId={articleId} />
    </ApolloProvider>
  );
};

export default ArticleDetails;
