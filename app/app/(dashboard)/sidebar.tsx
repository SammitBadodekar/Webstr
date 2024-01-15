"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FaCrown } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { VscFileSubmodule } from "react-icons/vsc";
import { LuLayoutTemplate } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ProfileAvatar from "@/components/ui/profile-avatar";
import { useRecoilState } from "recoil";
import { homeSidebarState } from "@/app/state/atoms/home-sidebar";
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(homeSidebarState);
  const modalRef = useRef<HTMLDivElement>(null);

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
            : "translate-x-0 pt-16 md:pt-0"
        } fixed top-0 z-20 h-screen w-72 overflow-y-scroll bg-popover p-2 transition-transform md:static md:z-0 md:h-full md:bg-background`}
        ref={modalRef}
      >
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="absolute right-6 top-6 md:hidden"
        >
          <IoCloseSharp className="text-primary" />
        </button>

        <div className=" flex items-center gap-2 p-2 px-4">
          <ProfileAvatar src={session?.user?.image!} size={40} />
          <p className=" text-sm font-semibold">Free Tier</p>
        </div>
        <Link
          href="/pro"
          className=" mb-4 flex w-full items-center justify-center gap-2 rounded-md bg-background p-2 font-bold transition-colors ease-in hover:bg-white dark:hover:bg-gray-700 md:bg-popover"
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
      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute top-0 z-10 h-[100dvh] w-screen bg-darkTransparent backdrop-blur-[0.1rem] md:hidden`}
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
  const url = usePathname();
  const isActive = url === href;
  console.log(isActive, url , href)
  return (
    <Link
      onClick={() => setIsOpen(false)}
      href={href}
      className={`${
        isActive ? "bg-background font-bold transition-all md:bg-popover" : ""
      } flex items-center gap-2 rounded-md p-1 px-2 transition-colors ease-in hover:bg-popover`}
    >
      {children} <p>{title}</p>
    </Link>
  );
};
