import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    require: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const modelComment = mongoose.model("Comment", CommentSchema);
export default modelComment;
