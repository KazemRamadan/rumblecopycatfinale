import { getPostbyID } from "@/lib/actions/post.actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: { id: string } }) {
    const { id } = context.params;  // Accessing params via context
    try {
        const post = await getPostbyID(id);
        return NextResponse.json(post);  // Using NextResponse to return a JSON response
    } catch (error) {
        return NextResponse.json({ error: `Internal Error ${error}` }, { status: 500 });
    }
}
