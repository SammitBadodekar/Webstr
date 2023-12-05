import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Store current request url in a custom header, which you can read later
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-url", req.url);

    return NextResponse.next({
      request: {
        // Apply new request headers
        headers: requestHeaders,
      },
    });
  },
  {
    callbacks: {
      authorized: ({ token }) => (token?.email ? true : false),
    },
    pages: {
      signIn: "/login",
      error: "/error",
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
