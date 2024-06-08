export const newsMutation = `#graphql
    createNews(payload: CreateNews): News
    deleteNews(id: ID!): News
`;
