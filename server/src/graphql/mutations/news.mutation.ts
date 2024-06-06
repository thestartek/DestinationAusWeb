export const newsMutation = `#graphql
    createNews(payload: CreateNews): News
    updateNews(id: ID!): News
    deleteNews(id: ID!): News
`;
