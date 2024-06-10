import { getAllBlogs, getBlog, createBlog } from "./resolvers/blog.resolver";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { blogType, faqType, newsType, userType } from "./types";
import { blogQueries, faqQuery, newsQueries, userQueries } from "./queries";
import { blogMutation, faqMutation, newsMutation } from "./mutations";

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
            ${faqType}
            ${newsType}

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

  app.use("/graphql", expressMiddleware(graphQLServer));

  return app;
}
