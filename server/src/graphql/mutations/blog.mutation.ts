export const blogMutation = `#graphql
    createBlog({title, description, imageUrl, source}: CreateBlog): Blog
    updateBlog(id: ID!): Blog
    deleteBlog(id: ID!): Blog
`;
