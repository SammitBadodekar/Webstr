import Profile from "@/components/ui/profile";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" flex w-full items-center justify-between bg-secondaryLightTheme p-2 px-4 shadow dark:bg-darkGray">
      <div className=" flex items-center gap-2">
        <Link href="/">
          <ArrowLeft />
        </Link>
        <p>Untitled</p>
      </div>
    </div>
  );
};

export default Header;
