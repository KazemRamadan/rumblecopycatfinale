/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { followUser, getFollowers } from "@/lib/actions/user.actions"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const data = await req.json();
    try {
        if (!data.followingID) {
            return new Response(JSON.stringify({ error: "FollowingID is missing" }), { status: 400 });
        }
        await followUser(user.id, data.followingID);
        return new Response(JSON.stringify({ message: "Followed successfully" }), { status: 201 });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}


export async function GET(req: NextRequest) {
    try {
      const { getUser } = getKindeServerSession();
      const user = await getUser();
      const data = await getFollowers(user.id);

      return new Response(JSON.stringify(data), { status: 200 });

    } catch (error: any) {
      return new Response(JSON.stringify({ error: error.message }));
    }
  }
