"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiHome } from "react-icons/fi";
import { VscFileSubmodule } from "react-icons/vsc";
import { LuLayoutTemplate } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { homeSidebarState } from "@/app/state/atoms/home-sidebar";

import { usePathname, useRouter } from "next/navigation";
import Profile from "@/components/profile";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import ProPlanBanner from "./pro-plan-banner";

let hasVisited = false;

const Sidebar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(homeSidebarState);
  const modalRef = useRef<HTMLDivElement>(null);
  const path = usePathname();

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={` ${
          !isOpen
            ? "-translate-x-full md:translate-x-0"
            : "translate-x-0  md:pt-0"
        } fixed top-0 z-30 flex h-full w-64 flex-col overflow-y-scroll bg-popover p-2 transition-transform md:static md:z-0 md:w-96 `}
        ref={modalRef}
      >
        <div className="mb-8 hidden items-center justify-between md:mx-8 md:mb-0 md:mt-8 md:flex">
          <Link
            href="/"
            className="font-logo w-fit text-3xl font-black md:text-5xl "
          >
            Webstr
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex flex-col gap-1 p-2 md:p-8">
          <SidebarItem href="/" title="Home">
            <FiHome />
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

          <SidebarItem href="/trash" title="Trash">
            <RiDeleteBin5Line />
          </SidebarItem>
        </div>

        <ProPlanBanner />
        <div className=" p-4 ">
          <Profile />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute top-0 z-20 h-[100dvh] w-screen bg-darkTransparent backdrop-blur-[0.1rem] md:hidden`}
      ></div>
    </>
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
  const [isOpen, setIsOpen] = useRecoilState(homeSidebarState);
  const [url, setUrl] = useState<string | undefined>();
  const router = useRouter();

  useEffect(() => {
    if (window) {
      setUrl(window?.location?.pathname);
    }
  }, []);

  console.log(url);

  if (url)
    return (
      <Link
        onClick={() => {
          setIsOpen(false);
          hasVisited = true;
        }}
        href={href}
        className={`${
          url === href
            ? "bg-black/10 dark:bg-background"
            : "hover:bg-black/5 dark:hover:bg-black/[0.15]"
        } flex items-center gap-2 rounded-md p-1 px-2 transition-colors ease-in md:p-2 `}
      >
        <span className="text-lg md:text-xl">{children}</span> <p>{title}</p>
      </Link>
    );
};
