"use client";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "./logout-button";
import { useSession } from "next-auth/react";
import ProfileAvatar from "./ui/profile-avatar";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div className="flex w-full items-center justify-between">
      <Link
        href="/settings"
        className="flex h-full w-full flex-1 items-center space-x-3 rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:bg-background"
      >
        <ProfileAvatar src={session?.user?.image!} size={35} />

        <span className="truncate text-sm font-medium">
          {session?.user?.name}
        </span>
      </Link>
      <LogoutButton />
    </div>
  );
}
