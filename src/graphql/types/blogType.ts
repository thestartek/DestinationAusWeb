export const blogType = `#graphql
    type Blog {
        id: ID!
        title: String!
        description: String!
        imageUrl: String
        source: String
        creator: User
    }
    input CreateBlog {
        title: String!
        description: String!
        imageUrl: String
        source: String
    }
`;
