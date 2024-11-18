/* eslint-disable @typescript-eslint/no-unused-vars */
import { getUsers } from "@/lib/actions/user.actions";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const users = await getUsers();
    return new Request (JSON.stringify(users));
}