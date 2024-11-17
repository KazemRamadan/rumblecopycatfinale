/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPostsByAuthorID } from "@/lib/actions/post.actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";


export async function GET(req: NextRequest) {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const data = await getPostsByAuthorID(user.id);

    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}
