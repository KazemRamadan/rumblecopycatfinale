/* eslint-disable @typescript-eslint/no-unused-vars */
import { getPosts, createPost } from "@/lib/actions/post.actions";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const posts = await getPosts();
        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Internal Error", error1: error }), { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        if (!data.title || !data.content) {
            return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
        }

        await createPost(data.id, data.title, data.content);
        return new Response(JSON.stringify({ message: "Post created" }), { status: 201 });
    } catch {
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
