export const faqMutation = `#graphql
    createFAQ(payload: CreateFAQ): FAQ
    updateFAQ(id: ID): FAQ
    deleteFAQ(id: ID): FAQ
`;
