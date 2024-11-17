/* eslint-disable @typescript-eslint/no-explicit-any */
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Post from "../models/post.model";
import { connectToDB } from "../mongoos";
import User from "../models/user.model";

export async function createPost(
  id: string,
  title: string,
  content: string
): Promise<void> {

  const { getUser } = getKindeServerSession();
  const userData = await getUser();

  console.log('xxxxxxxxx');
  console.log(userData);

  try {
    if (!id || !title || !content) {
      throw new Error("All fields (id, title, content) are required");
    }
    console.log("Connecting to the database...");
    await connectToDB();

    const newPost = await Post.create({
      id: id,
      title: title,
      content: content,
      authorID: userData.id,
      authorName: userData.given_name,
    });

    const postId = newPost._id;

    await User.findOneAndUpdate(
      { id: userData.id },
      { $push: { posts: { $each: [postId] } } },
      { new: true }
    );

    console.log("Post created successfully.");
  } catch (error) {
    console.error("Error in createPost:", error);
    throw new Error("Failed to create post");
  }
}

export async function getPosts(): Promise<any> {
  try {
    await connectToDB();
    console.log("connected");
    const posts = await Post.find();
    console.log(posts);
    return posts;
  } catch (error) {
    console.log("Error while getting posts: " + error);
    throw error;
  }
}

export async function getPostbyID(id: string): Promise<any> {
  await connectToDB();
  return await Post.find({ id }).exec();
}

export async function getPostsByAuthorID(
  authorID: string
): Promise<any> {
  await connectToDB();
  const authorPosts = await Post.find({
    authorID: authorID
  }
  , {
    id: 1,
    title: 1,
    authorID: 1,
    authorName: 1,
    createdAt: 1,
    updatedAt: 1,
  }
).exec()
  return authorPosts;
}
