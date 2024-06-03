import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = [
  "/admin/dashboard",
  "/admin/dashboard/blogs",
  "/admin/dashboard/news",
  "/admin/dashboard/faqs",
  "/admin/dashboard/profile",
];

// later set this to a global context variable
let isAuthenticated = true;

export default function middleware(req: NextRequest) {
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/signin", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL);
  }
  return NextResponse.next();
}

export const config = {
  matches: protectedRoutes,
};
