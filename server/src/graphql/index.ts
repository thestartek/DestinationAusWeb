import { getAllBlogs, createBlog } from "./resolvers/blog.resolver";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import { blogType } from "./types";
import express from "express";
import cors from "cors";

export async function GraphQL() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static("uploads"));

  const graphQLServer = new ApolloServer({
    typeDefs: blogType,
    resolvers: {
      Query: {
        getAllBlogs,
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
