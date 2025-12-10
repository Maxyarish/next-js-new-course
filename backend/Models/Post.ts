import mongoose, { Document } from "mongoose";

interface IPost extends Document {
  name: string;
  title: string;
  description: string;
  createdAt: Date;
  userId?: mongoose.Schema.Types.ObjectId;
}

const postSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minLength: 3, maxLength: 20 },
    title: { type: String, required: true, minLength: 5, maxLength: 50 },
    description: { type: String, required: true, minLength: 5, maxLength: 200 },
    createdAt: { type: Date, required: true, default: Date.now },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
postSchema.index({ name: 1 }, { unique: true });

export default mongoose.model<IPost>("Post", postSchema);
