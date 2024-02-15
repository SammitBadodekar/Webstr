"use client";
import { ReactNode } from "react";
import SidebarWrapper from "./sidebar-wrapper";
import MenuButton from "./menu-button";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-[100dvh] w-full overflow-hidden bg-background">
      <SidebarWrapper />
      <div className="flex h-full w-full flex-col gap-8 overflow-y-scroll p-4 pt-8 md:pl-0 md:pt-4">
        <div className="fixed left-0 right-0 top-0 z-10 flex w-full items-center justify-between bg-white/75 p-2 backdrop-blur-lg dark:bg-darkGray/75 md:hidden">
          <MenuButton />
          <Link
            href="/"
            className="font-logo w-full text-center text-3xl font-black"
          >
            Webstr
          </Link>

          <ThemeToggle />
        </div>
        {children}
      </div>
    </main>
  );
}
