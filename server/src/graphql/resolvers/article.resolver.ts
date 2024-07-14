import { connectToDB } from "../../db/index.js";
import { CreateArticleType } from "../../interfaces/index.js";
import Article from "../../models/article.model.js";

export const getAllArticles = async () => {
  try {
    await connectToDB();
    return await Article.find();
  } catch (error) {
    console.log("Error while fetching articles: ", error);
  }
};

export const getArticle = async (_: any, { id }: { id: string }) => {
  try {
    await connectToDB();
    return await Article.findById(id);
  } catch (error) {
    console.log("Error while fetching this specific article: ", error);
  }
};

export const createArticle = async (
  _: any,
  { input }: { input: CreateArticleType }
) => {
  try {
    await connectToDB();
    const article = new Article(input);
    await article.save();
    return article;
  } catch (error) {
    console.log("Error uploading article: ", error);
  }
};
