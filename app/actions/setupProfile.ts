"use server";

import { prisma } from "@/lib/db";

export async function setupProfile(username: string, email: string) {
  try {
    await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        name: username,
      },
    });
    return { message: "Saved!!", success: true };
  } catch (error) {
    console.log(error);
    return { message: error as string, success: false };
  }
}
