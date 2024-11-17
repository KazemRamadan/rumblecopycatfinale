/* eslint-disable @typescript-eslint/no-explicit-any */
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