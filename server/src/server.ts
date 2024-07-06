import "dotenv/config";
import { GraphQL } from "./graphql/index.js";
import { connectToDB } from "./db/index.js";

const port = process.env.PORT || 5000;

async function startServer() {
  const app = await GraphQL();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  await connectToDB();
}

startServer().then((r) => {});
