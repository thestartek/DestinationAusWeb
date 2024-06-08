import { gql } from "@apollo/client";

export const GET_ALL_BLOGS = gql`
  query getAllBlogs {
    blogs {
      id
      title
      description
      imageUrl
      source
    }
  }
`;

export const GET_BLOG = gql`
  query getBlog($id: ID!) {
    blog(id: $id) {
      id
      title
      description
      imageUrl
      source
    }
  }
`;

export const GET_ALL_NEWS = gql`
  query getAllNews {
    news {
      id
      title
      description
      imageUrl
      source
    }
  }
`;

export const GET_NEWS = gql`
  query getNews($id: ID!) {
    newsItem(id: $id) {
      id
      title
      description
      imageUrl
      source
    }
  }
`;

export const GET_ALL_FAQS = gql`
  query getAllFaqs {
    faqs {
      id
      question
      answer
    }
  }
`;
