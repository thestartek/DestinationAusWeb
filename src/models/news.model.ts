import { model, Schema } from "mongoose";

const newsSchema = new Schema({
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

const News = model("News", newsSchema);
export default News;
