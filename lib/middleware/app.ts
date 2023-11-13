import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const appMiddleware = async (req: NextRequest) => {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log(token?.email);

  if (!token?.email) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
};
