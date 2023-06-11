import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    desc: {
      type: String,
      required: [true, "Please provide a description"],
    },
    image: {
      // changed from 'img'
      type: String,
      required: [true, "Please provide an image"],
    },
    content: {
      type: String,
      required: [true, "Please provide content"], // changed from 'category'
    },
    username: {
      type: String,
      required: [true, "Please provide a username"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
