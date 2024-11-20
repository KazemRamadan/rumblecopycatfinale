/* eslint-disable @typescript-eslint/no-explicit-any */
import Follow from "../models/follow.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoos";

export async function updateUser(
    id: string,
    name: string,
    email: string
): Promise<void> {
    await connectToDB();

    await User.updateOne(
        { id },
        { name, email },
        { upsert: true }
    );
}

export async function getUsers(): Promise<any> {
    await connectToDB();
    console.log('connected from getUser Function')
    const usersData = await User.find().exec();
    console.log(usersData[0]["id"])
    return usersData
}

export async function followUser(
    followerID: string,
    followingID: string,
): Promise<void> {
    await connectToDB();
    await Follow.findOneAndUpdate(
        { followerID, followingID },
        { followerID, followingID },
        { upsert: true }
    );
}

export async function getFollowers(id: string): Promise<any> {
    const followers = await Follow.find({ id }, {
        _id: 0,
        followerID: 1,
        followingID: 1,
        createdAt: 1,
        updatedAt: 1,
    }).exec();
    console.log(followers)
    return followers;
}