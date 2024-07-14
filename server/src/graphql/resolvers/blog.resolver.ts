import { uploadToAzureStorage } from "../../azure/index.js";
import { connectToDB } from "../../db/index.js";
import { CreateBlogType } from "../../interfaces/index.js";
import Blog from "../../models/blog.model.js";

export const getAllBlogs = async () => {
  try {
    await connectToDB();
    return await Blog.find();
  } catch (error) {
    console.log("Error while fetching blogs", error);
  }
};

export const getBlog = async (_: any, { id }: { id: string }) => {
  try {
    await connectToDB();
    return await Blog.findById(id);
  } catch (error) {
    console.log("Error while getting blog", error);
  }
};

export const createBlog = async (
  _: any,
  { input }: { input: CreateBlogType }
) => {
  try {
    const response = await uploadToAzureStorage(input.imageUrl);
    try {
      await connectToDB();
      const blog = new Blog(input);
      await blog.save();
      return blog;
    } catch (error) {
      console.log("Something Went Wrong while saving blog: \n", error);
    }
  } catch (error) {
    console.log("Could not save blog: \n", error);
  }
};
