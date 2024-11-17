/* eslint-disable @typescript-eslint/no-unused-vars */
import { getUsers } from "@/lib/actions/user.actions";
import { NextResponse } from "next/server";

export async function GET(res: NextResponse) {
    const users = await getUsers();
    return new NextResponse(JSON.stringify(users), {status: 200});
}