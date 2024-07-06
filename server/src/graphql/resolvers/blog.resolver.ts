import { connectToDB } from "../../db/index.js";
import { CreateBlog } from "../../interfaces/index.js";
import Blog from "../../models/blog.model.js";

export const getAllBlogs = async () => {
  try {
    await connectToDB();
    return await Blog.find();
  } catch (error) {
    console.log("Error while fetching blogs", error);
  }
};

export const getBlog = async (id: string) => {
  try {
    await connectToDB();
    const blog = await Blog.findById(id);
    console.log("Successfully fetched the selected blog: ", blog);
    return blog;
  } catch (error) {
    console.log("Error while getting blog", error);
  }
};

export const createBlog = async (_: any, { input }: { input: CreateBlog }) => {
  try {
    await connectToDB();
    const blog = new Blog(input);
    await blog.save();
    return blog;
  } catch (error) {
    console.log("Could not save blog: \n", error);
  }
};
