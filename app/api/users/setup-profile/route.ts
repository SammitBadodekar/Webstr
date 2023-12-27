import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/options";
import prisma from "@/lib/prisma";

export async function PUT(req: NextRequest) {
  const { username } = await req.json();
  try {
    const session = await getServerSession(authOptions);

    const user = await prisma.user.update({
      where: {
        email: session?.user?.email!,
      },
      data: {
        name: username as any,
      },
    });
    return NextResponse.json({
      message: "Saved!!",
      username: user.name,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error as string, success: false });
  }
}
