import { connectToDB } from "../../db";
import { dummyData } from "../../dummy";
import { CreateBlog } from "../../interfaces";
import Blog from "../../models/blog.model";

export const getAllBlogs = async () => {
  // try {
  //   await connectToDB();
  //   const blogs = await Blog.find();
  //   return { ok: true, blogs, message: "Blogs fetched successfully" };
  // } catch (error) {
  //   return { ok: false, message: `Failed to get blogs: ${error}` };
  // }
  return dummyData;
};

export const getBlog = async (id: string) => {
  try {
    await connectToDB();
    const blog = await Blog.findById(id);
    if (!blog) {
      return { ok: false, message: "Blog not found" };
    }
    return { ok: true, blog, message: "Blog fetched successfully" };
  } catch (error) {
    return { ok: false, message: `Failed to get blog: ${error}` };
  }
};

export const createBlog = async (parent: any, args: CreateBlog) => {
  try {
    // await connectToDB();
    // const blog = new Blog(args);
    // await blog.save();
    return { _id: Math.random() * 1000000, ...args };
  } catch (error) {
    console.log(error);
    return { ok: false, message: `Failed to create blog: ${error}` };
  }
};
