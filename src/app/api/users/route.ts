/* eslint-disable @typescript-eslint/no-unused-vars */
import { getUsers } from "@/lib/actions/user.actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const users = await getUsers();
    return new Response(JSON.stringify(users));
  } catch (error) {
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
