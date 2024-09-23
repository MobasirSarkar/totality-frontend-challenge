/* import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(request: NextRequest) {
	const isAuthenticated = await auth();

	if (isAuthenticated) {
		return NextResponse.next();
	}

	return NextResponse.redirect(new URL("/sign-in", request.url));
}

export const config = {
	matcher: "/*",
}; */

export { auth as middleware } from "./auth";
