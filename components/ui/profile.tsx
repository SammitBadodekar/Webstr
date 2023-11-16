import React from "react";
import ProfileAvatar from "./ProfileAvatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { getServerSession } from "next-auth";
import { truncateString } from "../truncateString";
import SignOutButton from "./signOutButton";
import Link from "next/link";

const Profile = async () => {
  const session = await getServerSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ProfileAvatar src={session?.user?.image!} size={60} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" absolute -right-4 top-4 grid w-max gap-4 bg-secondaryLightTheme p-4 font-bold dark:bg-darkGray">
        <DropdownMenuLabel className=" flex items-center gap-2">
          <ProfileAvatar src={session?.user?.image!} size={80} />
          <div>
            <h2 className=" text-xl font-bold">
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
