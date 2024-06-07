import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import { blogType, faqType, newsType, userType } from "./types";
import { blogQueries, faqQuery, newsQueries, userQueries } from "./queries";
import { blogMutation, faqMutation, newsMutation } from "./mutations";
import { getAllBlogs, getBlog, createBlog } from "./resolvers";

export async function GraphQL() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static("uploads"));

  const graphQLServer = new ApolloServer({
    typeDefs: `
          ${userType}
          ${blogType}
          ${newsType}
          ${faqType}

          type Query {
            ${userQueries}
            ${blogQueries}
            ${faqQuery}
            ${newsQueries}
          }

          type Mutation {
            ${blogMutation}
            ${newsMutation}
            ${faqMutation}
          }
      `,
    resolvers: {
      Query: {
        getAllBlogs,
        getBlog,
      },
      Mutation: {
        createBlog,
      },
    },
  });

  await graphQLServer.start();

  app.use("/api", expressMiddleware(graphQLServer));

  return app;
}
