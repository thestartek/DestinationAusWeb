export const newsType = `#graphql
    type News {
        id: ID!
        title: String!
        description: String!
        imageUrl: String
        source: String
        creator: User
    }
    type CreateNews {
        title: String!
        description: String!
        imageUrl: String
        source: String
    }
`;
