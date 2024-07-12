export const articleType = `#graphql
    type Article {
        _id: ID!
        title: String!
        description: String!
        imageUrl: String!
        source: String
    }
    input CreateArticleInput {
        title: String!
        description: String!
        imageUrl: String!
        source: String
    }
    type Query {
        getAllArticles: [Article!]
        getArticle(id: ID!): Article
    }
    type Mutation {
        createArticle(input: CreateArticleInput!): Article
    }
`;
