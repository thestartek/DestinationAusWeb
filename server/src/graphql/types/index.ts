export const userType = `#graphql
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        profilePicture: String
        createdAt: String
        blogs: [Blog]
        news: [News]
        isVerified: Boolean
    }
`;

export const newsType = `#graphql
    type News {
        id: ID!
        title: String!
        description: String!
        imageUrl: String
        source: String
        creator: User
        createdAt: String
    }
    input CreateNewsInput {
        title: String!
        description: String!
        imageUrl: String
        source: String
    }
`;

export const faqType = `#graphql
    type FAQ {
        id: ID!
        question: String!
        answer: String!
    }
    input CreateFaqInput {
        question: String!
        answer: String!
    }
`;

export const blogType = `#graphql
    type Blog {
        _id: ID!
        title: String!
        description: String!
        imageUrl: String!
        source: String!
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
