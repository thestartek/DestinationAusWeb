import { gql } from "@apollo/client";

export const GET_ALL_BLOGS = gql`
  query GetAllBlogs {
    getAllBlogs {
      _id
      title
      description
      imageUrl
      source
    }
  }
`;

export const GET_BLOG = gql`
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      _id
      title
      description
      imageUrl
      source
    }
  }
`;

export const GET_ALL_ARTICLES = gql`
  query getAllArticles {
    getAllArticles {
      _id
      title
      description
      imageUrl
      source
    }
  }
`;

export const GET_ARTICLE = gql`
  query getArticle($id: ID!) {
    getArticle(id: $id) {
      _id
      title
      description
      imageUrl
      source
    }
  }
`;

export const GET_ALL_FAQS = gql`
  query getAllFaqs {
    getFaqs {
      id
      question
      answer
    }
  }
`;
