"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="h-full rounded-lg p-2 transition-all duration-150 ease-in-out hover:bg-background"
    >
      <LogOut width={18} />
    </button>
  );
}
