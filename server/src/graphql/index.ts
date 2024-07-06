import { getAllBlogs, createBlog } from "./resolvers/blog.resolver.js";
import { expressMiddleware } from "@apollo/server/express4";
// import { getAllBlogs, createBlog } from "./resolvers";
import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
// import { blogType } from "./types";
import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
// import upload from "../middlewares/upload.middleware";
// import { uploadHandler } from "../azure";
import { fileURLToPath } from "url";
import { blogType } from "./types/index.js";
import upload from "../middlewares/upload.middleware.js";
import { uploadHandler } from "../azure/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

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

  app.post("/upload", upload.single("imageUrl"), uploadHandler);

  app.use("/api", expressMiddleware(graphQLServer));

  return app;
}
