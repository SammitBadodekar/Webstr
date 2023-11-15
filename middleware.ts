import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token);
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
