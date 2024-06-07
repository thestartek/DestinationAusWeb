import { models } from "mongoose";
import { model, Schema } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  source: {
    type: String,
  },
});

const Blog = models.Blog || model("Blog", blogSchema);
export default Blog;
