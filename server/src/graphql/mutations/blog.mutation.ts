export const blogMutation = `#graphql
    createBlog(payload: CreateBlog): Blog
    updateBlog(id: ID!): Blog
    deleteBlog(id: ID!): Blog
`;
