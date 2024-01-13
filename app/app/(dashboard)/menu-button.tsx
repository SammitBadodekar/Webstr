"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { homeSidebarState } from "@/app/state/atoms/home-sidebar";
import { useRecoilState } from "recoil";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useRecoilState(homeSidebarState);
  return (
    <Button
      className="md:hidden"
      size="icon"
      variant="secondary"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <FaBarsStaggered />
    </Button>
  );
};

export default MenuButton;
