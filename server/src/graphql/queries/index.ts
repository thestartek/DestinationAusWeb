export const userQueries = `#graphql
 getCurrentUser: User
`;

export const newsQueries = `#graphql
    getAllNews: [News]
    getNews(id: ID!): News
`;

export const faqQuery = `#graphql
    getAllFAQs: [FAQ]
`;

export const blogQueries = `#graphql
    getAllBlogs: [Blog]
    getBlog(id: ID!): Blog
`;
