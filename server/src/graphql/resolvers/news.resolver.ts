import { connectToDB } from "../../db/index.js";
import { CreateNewsType } from "../../interfaces/index.js";
import News from "../../models/news.model.js";

export const getAllNews = async () => {
  try {
    await connectToDB();
    return await News.find();
  } catch (error) {
    console.log("Error while fetching news: ", error);
  }
};

export const getNews = async (id: string) => {
  try {
    await connectToDB();
    return await News.findById(id);
  } catch (error) {
    console.log("Error while fetching this specific news: ", error);
  }
};

export const createNews = async (
  _: any,
  { input }: { input: CreateNewsType }
) => {
  try {
    await connectToDB();
    const news = new News(input);
    await news.save();
    return news;
  } catch (error) {
    console.log("Error uploading image to azure: ", error);
  }
};
