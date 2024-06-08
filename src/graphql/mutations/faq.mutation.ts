export const faqMutation = `#graphql
    createFAQ(payload: CreateFAQ): FAQ
    updateFAQ(id: ID!, input: FAQInput): FAQ
    deleteFAQ(id: ID): FAQ
`;
