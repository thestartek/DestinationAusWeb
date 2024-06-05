import { models } from "mongoose";
import { model, Schema } from "mongoose";

const blogSchema = new Schema({
  // _id: {
  //   type: Schema.Types.ObjectId,
  //   unique: true,
  //   required: true,
  //   auto: true,
  // },
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

const Blog = models.User || model("Blog", blogSchema);
export default Blog;
