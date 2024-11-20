import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { updateUser } from "@/lib/actions/user.actions";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { getUser } = getKindeServerSession();
        const user = await getUser();

        if (!user?.id) {
            return NextResponse.json(
                { error: "Authentication failed or user data is invalid." },
                { status: 401 }
            );
        }

        await updateUser(user.id, user.given_name || '', user.email || '');

        return NextResponse.redirect('http:localhost:3000/home');
    } catch (error) {
        console.error("Error in GET handler:", error);
        return NextResponse.json(
            { error: "An internal server error occurred." },
            { status: 500 }
        );
    }
}
