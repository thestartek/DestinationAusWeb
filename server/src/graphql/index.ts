import { expressMiddleware } from "@apollo/server/express4";
import { getAllBlogs, createBlog } from "./resolvers";
import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import { blogType } from "./types";
import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import upload from "../middlewares/upload.middleware";

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

export async function GraphQL() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.static(uploadDir));

  const graphQLServer = new ApolloServer({
    typeDefs: `
      ${blogType}
     `,
    resolvers: {
      Query: {
        getAllBlogs,
      },
      Mutation: {
        createBlog,
      },
    },
    csrfPrevention: true,
  });

  await graphQLServer.start();

  app.use("/api", upload.single("input"), expressMiddleware(graphQLServer));

  return app;
}
