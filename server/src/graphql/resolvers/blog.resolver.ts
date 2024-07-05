import { connectToDB } from "../../db";
import { CreateBlog } from "../../interfaces";
import Blog from "../../models/blog.model";
import { uploadToAzureStorage } from "../../azure";

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
  console.log("Input: ", input.imageUrl);
  try {
    const uploadResponse = await uploadToAzureStorage(input.imageUrl);
    console.log("Image uploaded successfully", uploadResponse?.imageUrl);
    try {
      await connectToDB();
      const blog = new Blog({ ...input, imageUrl: uploadResponse?.imageUrl });
      await blog.save();
      return blog;
    } catch (error) {
      console.log("Could not save to database: ", error);
    }
    return uploadResponse;
  } catch (error) {
    console.log("Error on uploading Image: \n", error);
  }
};
