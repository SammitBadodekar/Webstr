import React from "react";
import { ThemeToggle } from "./themeToggle";
import Link from "next/link";
import { Button } from "./button";
import Profile from "./profile";

const Header = () => {
  return (
    <div className=" sticky top-0 flex items-center gap-2 bg-secondaryLightTheme p-2 px-4 shadow dark:bg-darkGray">
      <Link
        href="/"
        className=" font-logo w-fit bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-3xl font-black text-transparent "
      >
        Webstr
      </Link>
      <div className=" ml-auto flex items-center gap-4  ">
        <ThemeToggle />
        <Button asChild className=" font-bold" size="sm">
          <Link href="/create">+ new</Link>
        </Button>
        <Profile />
      </div>
    </div>
  );
};

export default Header;
