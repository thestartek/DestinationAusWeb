export const blogType = `#graphql
    type Blog {
        _id: ID!
        title: String!
        description: String!
        imageUrl: String!
        source: String
    }
    input CreateBlogInput {
        title: String!
        description: String!
        imageUrl: String!
        source: String
    }
    type Query {
        getAllBlogs: [Blog!]
        getBlog(id: ID!): Blog
    }
    type Mutation {
        createBlog(input: CreateBlogInput!): Blog
    }
`;
