import { connectToDB } from "../../db";
import { CreateBlog } from "../../interfaces";
import Blog from "../../models/blog.model";

export const getAllBlogs = async () => {
  try {
    await connectToDB();
    const blogs = await Blog.find();
    return { ok: true, blogs, message: "Blogs fetched successfully" };
  } catch (error) {
    return { ok: false, message: `Failed to get blogs: ${error}` };
  }
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

export const createBlog = async (payload: CreateBlog) => {
  try {
    await connectToDB();
    const blog = new Blog(payload);
    await blog.save();
    return { ok: true, blog, message: "Blog created successfully" };
  } catch (error) {
    console.log(error);
    return { ok: false, message: `Failed to create blog: ${error}` };
  }
};
