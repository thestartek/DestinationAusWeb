import { gql } from "@apollo/client";

export const CREATE_BLOG = gql`
  mutation createBlog($input: CreateBlogInput!) {
    createBlog(input: $input) {
      _id
      title
      description
      imageUrl
      source
    }
  }
`;

export const UPDATE_BLOG = gql`
  mutation updateBlog($id: ID!, $payload: UpdateBlog!) {
    updateBlog(id: $id, payload: $payload) {
      id
      title
      description
      imageUrl
      source
    }
  }
`;

export const DELETE_BLOG = gql`
  mutation deleteBlog($id: ID!) {
    deleteBlog(id: $id) {
      id
    }
  }
`;
