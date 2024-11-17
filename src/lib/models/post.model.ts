import mongoose, { Schema, Document, Model } from "mongoose";

interface IPost extends Document {
    id: string;
    title: string;
    content: string;
    authorID: string;
    authorName: string;
}

const postSchema = new Schema<IPost>(
    {
        id: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        content: { type: String },
        authorID: { type: String},
        authorName: {type: String}
    },
    { timestamps: true }
);

const Post: Model<IPost> =
    mongoose.models?.Post || mongoose.model<IPost>("Post", postSchema);

export default Post;
