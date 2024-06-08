export const newsMutation = `#graphql
    createNews(input: CreateNewsInput): News
    deleteNews(id: ID!): News
`;

export const faqMutation = `#graphql
    createFAQ(input: CreateFaqInput): FAQ
    updateFAQ(id: ID!, input: CreateFaqInput): FAQ
    deleteFAQ(id: ID!): FAQ
`;

export const blogMutation = `#graphql
    createBlog(input: CreateBlogInput): Blog
    updateBlog(id: ID!, input: CreateBlogInput): Blog
    deleteBlog(id: ID!): Blog
`;
