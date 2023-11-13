import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },
});
