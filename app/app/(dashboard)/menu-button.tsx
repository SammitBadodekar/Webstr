"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { homeSidebarState } from "@/app/state/atoms/home-sidebar";
import { useRecoilState } from "recoil";
import { IoCloseSharp } from "react-icons/io5";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useRecoilState(homeSidebarState);
  return (
    <Button
      className="mr-auto bg-transparent md:hidden"
      size="icon"
      variant="secondary"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {isOpen ? (
        <IoCloseSharp className="text-2xl text-primary" />
      ) : (
        <FaBarsStaggered />
      )}
    </Button>
  );
};

export default MenuButton;
