import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { GraphQL } from "./graphql/graphql";

dotenv.config();

const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

async function startServer() {
  const app = await GraphQL();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();
