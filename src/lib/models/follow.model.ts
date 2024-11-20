import mongoose, { Schema, Document, Model } from "mongoose";

interface IFollow extends Document {
    followerID: string;
    followingID: string;
}

const followSchema = new Schema<IFollow>(
    {
        followerID: { type: String, required: true },
        followingID: { type: String, required: true }
    },
    { timestamps: true }
);

const Follow: Model<IFollow> =
    mongoose.models?.Follow || mongoose.model<IFollow>("Follow", followSchema);

export default Follow;