import { model, Schema } from "mongoose";

const articleSchema = new Schema({
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

const Article = model("Article", articleSchema);
export default Article;
