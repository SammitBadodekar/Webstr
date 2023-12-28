import React from "react";
import { Button } from "@/components/ui/button";
import { FaCrown } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { VscFileSubmodule } from "react-icons/vsc";
import { LuLayoutTemplate } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";
import { getServerSession } from "next-auth";
import ProfileAvatar from "@/components/ui/profile-avatar";

const Sidebar = async () => {
  const session = await getServerSession();
  return (
    <div className=" m-2 h-[calc(100dvh_-_4.5rem)] w-64 overflow-y-scroll rounded-lg bg-secondaryLightTheme p-2 shadow dark:bg-darkGray">
      <div className=" flex items-center gap-2 p-2 px-4">
        <ProfileAvatar src={session?.user?.image!} size={40} />
        <p className=" text-sm font-semibold">Free Tier</p>
      </div>
      <Link
        href="/pro"
        className=" mb-4 flex w-full items-center justify-center gap-2 rounded-md bg-lightTheme p-2 font-bold transition-colors ease-in hover:bg-slate-300 dark:bg-darkTheme dark:hover:bg-black"
      >
        <p className=" pb-1 text-yellow-500">
          <FaCrown />
        </p>

        <p>Get Webstr Pro</p>
      </Link>

      <div className=" grid gap-1">
        <SidebarItem href="/" title="Home">
          <CiHome />
        </SidebarItem>
        <SidebarItem href="/projects" title="Projects">
          <VscFileSubmodule />
        </SidebarItem>
        <SidebarItem href="/templates" title="Templates">
          <LuLayoutTemplate />
        </SidebarItem>
        <SidebarItem href="/create-team" title="Create a team">
          <BsBuildings />
        </SidebarItem>
        <div className=" my-2 h-[0.1rem] w-full bg-slate-300 dark:bg-slate-600 "></div>
        <SidebarItem href="/trash" title="Trash">
          <RiDeleteBin5Line />
        </SidebarItem>
      </div>
    </div>
  );
};

export default Sidebar;

const SidebarItem = ({
  children,
  title,
  href,
}: {
  children: React.ReactNode;
  title: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className=" flex items-center gap-2 rounded-md p-1 px-2 transition-colors ease-in hover:bg-lightTheme dark:hover:bg-darkTheme"
    >
      {children} <p>{title}</p>
    </Link>
  );
};
