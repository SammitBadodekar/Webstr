"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaCrown } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
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
import { usePathname, useRouter } from "next/navigation";
import LogoutButton from "@/components/logout-button";
import Profile from "@/components/profile";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { IoClose } from "react-icons/io5";
import ProPlanBanner from "./pro-plan-banner";

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
        } fixed top-0 z-20 flex h-[100dvh] w-96 flex-col overflow-y-scroll bg-popover p-2 transition-transform md:static md:z-0 `}
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

        <div className="mx-8 mt-8 flex items-center justify-between">
          <Link href="/" className="font-logo  w-fit text-5xl font-black ">
            Webstr
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex flex-col gap-1 px-8 py-8">
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
  const router = useRouter();

  useEffect(() => {
    router.push(url);
  }, []);

  if (url)
    return (
      <Link
        onClick={() => setIsOpen(false)}
        href={href}
        className={`${
          url === href ? "bg-background" : "hover:bg-black/[0.15]"
        } flex items-center gap-2 rounded-md p-2 transition-colors ease-in `}
      >
        <span className="text-xl">{children}</span> <p>{title}</p>
      </Link>
    );
};
