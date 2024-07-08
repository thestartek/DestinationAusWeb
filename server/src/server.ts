import "dotenv/config";
import { GraphQL } from "./graphql/index.js";
import { connectToDB } from "./db/index.js";
import { Request, Response } from "express";

const port = process.env.PORT || 5000;

async function startServer() {
  const app = await GraphQL();

  const allowCors = (fn: any) => async (req: Request, res: Response) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
    return await fn(req, res);
  };

  const handler = (req: Request, res: Response) => {
    const d = new Date();
    res.end(d.toString());
  };

  allowCors(handler);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  await connectToDB();
}

startServer().then((r) => {});
