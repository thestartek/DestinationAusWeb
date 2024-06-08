import "dotenv/config";
import path from "path";
import fs from "fs";
import { GraphQL } from "./graphql";
import { connectToDB } from "./db";

const port = process.env.PORT || 5000;

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

async function startServer() {
  const app = await GraphQL();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  await connectToDB();
}

startServer();
