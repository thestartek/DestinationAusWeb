import { connectToDB } from "../../db";
import { dummyData } from "../../dummy";
import { CreateBlog } from "../../interfaces";
import Blog from "../../models/blog.model";

export const getAllBlogs = async () => {
  try {
    await connectToDB();
    const blogs = await Blog.find();
    console.log("Blogs fetched successfully: ", blogs);
    return blogs;
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
    console.log("Blog created successfully");
    return blog;
  } catch (error) {
    console.log("Error on creating Blog: ", error);
  }
};
