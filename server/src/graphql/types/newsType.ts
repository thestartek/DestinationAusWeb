export const newsType = `#graphql
    type News {
        id: ID!
        title: String!
        description: String!
        imageUrl: String
        source: String
        # creator: User
        createdAt: String
    }
    input CreateNewsInput {
        title: String!
        description: String!
        imageUrl: String
        source: String
    }
    type Query {
        getAllNews: [News!]
        getNews(id: ID!): News
    }
    type Mutation {
        createNews(input: CreateNewsInput!): News
    }
`;
