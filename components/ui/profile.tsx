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

const Profile = async () => {
  const session = await getServerSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ProfileAvatar src={session?.user?.image!} size={60} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-full border-2 bg-secondaryLightTheme shadow-md dark:border-slate-700 dark:bg-darkGray">
        <DropdownMenuLabel className=" flex items-center gap-2 p-4">
          <ProfileAvatar src={session?.user?.image!} size={100} />
          <div>
            <h2 className=" text-2xl">
              {truncateString(session?.user?.name!, 150)}
            </h2>
            <h2 className=" font-normal text-slate-400">
              {truncateString(session?.user?.email!, 200)}
            </h2>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className=" bg-slate-500" />
        <DropdownMenuLabel>SignOut</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
