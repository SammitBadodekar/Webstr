"use client";
import React from "react";
import ProfileAvatar from "@/components/ui/profile-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useSession } from "next-auth/react";
import { truncateString } from "@/components/truncate-string";
import { Skeleton } from "@/components/ui/skeleton";
import SignOutButton from "./signout-button";
import Link from "next/link";

export const revalidate = 5;

const Profile = () => {
  const { data: session, status } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {status !== "loading" ? (
          <ProfileAvatar src={session?.user?.image!} size={40} />
        ) : (
          <Skeleton className=" h-8 w-8 rounded-full" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-secondaryLightTheme dark:bg-darkGray absolute -right-4 top-4 grid w-max gap-2 p-4 font-bold">
        <DropdownMenuLabel className=" flex items-center gap-2">
          <ProfileAvatar src={session?.user?.image!} size={60} />
          <div>
            <h2 className=" text-lg font-bold">
              {truncateString(session?.user?.name!, 150)}
            </h2>
            <h2 className=" font-normal text-slate-400">
              {truncateString(session?.user?.email!, 170)}
            </h2>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className=" -mt-2" />
        <DropdownMenuItem asChild>
          <Link href="/setup-profile">Profile Setting</Link>
        </DropdownMenuItem>
        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
