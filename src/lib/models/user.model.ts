import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
    id: string;
    name: string;
    email?: string;
    bio?: string;
    posts: mongoose.Types.ObjectId[];
}

const userSchema = new Schema<IUser>(
    {
        id: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        email: { type: String, unique: true },
        bio: { type: String },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: "posts",
            },
        ],
    },
    { timestamps: true }
);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
