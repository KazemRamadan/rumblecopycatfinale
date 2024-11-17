import { getPostbyID } from "@/lib/actions/post.actions";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        const post = await getPostbyID(id);
        return new Response(JSON.stringify(post), { status: 200 });
    } catch {
        return new Response(JSON.stringify({ error: "Internal Error" }), { status: 500 });
    }
}
