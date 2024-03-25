import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between border-b-2 border-slate-500 bg-secondaryLightTheme p-2 px-4 shadow-lg dark:bg-darkGray">
      <div className=" flex items-center gap-2">
        <Link href="/">
          <ArrowLeft />
        </Link>
        <p>Untitled</p>
      </div>
      <Button size="sm">Publish</Button>
    </div>
  );
};

export default Header;
