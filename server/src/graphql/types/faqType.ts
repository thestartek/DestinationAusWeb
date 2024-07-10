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
