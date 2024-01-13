import React from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Profile from "./profile";
import MenuButton from "./menu-button";

const Header = () => {
  return (
    <div className="sticky top-0 flex items-center gap-2 border-b-2 border-secondary bg-secondaryLightTheme p-2 px-4 dark:bg-darkGray">
      <MenuButton />
      <Link
        href="/"
        className=" background-animate font-logo w-fit bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-3xl font-black text-transparent "
      >
        Webstr
      </Link>
      <div className=" ml-auto flex items-center gap-4  ">
        <ThemeToggle />
        <Button asChild className="hidden font-bold md:flex" size="sm">
          <Link href="/create">+ new</Link>
        </Button>
        <Profile />
      </div>
    </div>
  );
};

export default Header;
