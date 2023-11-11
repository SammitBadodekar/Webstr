import { User as NextAuthUser } from "next-auth";
import { User as PrismaUser } from "@prisma/client";
import { type } from "os";

export type CustomUser = NextAuthUser & PrismaUser;

export type SetupProfileResponse = {
  message: string;
  success: boolean;
};
