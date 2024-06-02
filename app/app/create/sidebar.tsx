"use client"
import React, { ReactElement, ReactNode, SetStateAction, useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import lz from "lzutf8";
import copy from 'copy-to-clipboard';
import { IoMdHome } from "react-icons/io";
import { RxComponent1 } from "react-icons/rx";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";
import Link from 'next/link';
import { Editor } from '@tiptap/react';
import { NodeButtonEditor } from '@/components/nodes';


export const SideBar = ({ editor }: { editor: Editor | null }) => {
  // const [activeSection, setActiveSection] = useState<string | null>(null)
  // const [activeTab, setActiveTab] = useState<string | null>(null)
  // const isItemSelected = active && related?.toolbar

  return (
    <aside className="hidden h-[100dvh] w-[28rem] bg-popover p-4 md:block">
      <div className="grid gap-8 p-4">
        <div className="flex w-full items-center justify-around gap-8">
          <Link
            href="/"
            className="rounded-md bg-lightTheme p-2 transition-opacity hover:opacity-75"
          >
            <IoMdHome className="text-2xl text-darkGray" />
          </Link>
          <Button className="flex w-full items-center gap-4 bg-[#eb761c] text-white">
            <FaLocationArrow /> Publish
          </Button>
        </div>

        {/* <div className="grid gap-4">
          <SidebarItem
            activeSection={"fsfsdf"}
            title="Components"
            setActiveSection={() => { }}
          >
            <RxComponent1 />
          </SidebarItem>
        </div> */}
      </div>
      {/* )} */}

      {/* <>
        <div className="">
          <button
            className="my-2 flex w-full items-center justify-between gap-8 rounded-md bg-white/60 p-4 shadow dark:bg-white/5"
          >
            {menuItem.name}
            <span>
              <IoIosArrowForward />
            </span>
          </button>
        </div>
        <div>
          <div className="w-full">
            <BackButton set={() => { }} />
            <ul className="flex w-full flex-wrap gap-4 pt-8">
              <div
              >
                fghfgh
              </div>
            </ul>
          </div>
        </div>
      </> */}

      <div>
        {editor?.isActive("nodeButton") && <NodeButtonEditor editor={editor} />}
      </div>
    </aside>
  );
};

const BackButton = ({ set }: { set: Function }) => {
  return (
    <Button
      className="flex w-full items-center gap-4 mb-4"
      variant="secondary"
      onClick={() => set(null)}
    >
      <IoMdArrowBack />
      Back
    </Button>
  );
}

const SidebarItem = ({
  title,
  activeSection,
  children,
  setActiveSection,
}: {
  title: string;
  activeSection: string;
  children: React.ReactNode;
  setActiveSection: React.Dispatch<SetStateAction<string | null>>
}) => {
  return (
    <button
      onClick={() => {
        setActiveSection(title)
      }}
      className={`${title === activeSection
        ? "bg-black/10 dark:bg-background"
        : "hover:bg-black/5 dark:hover:bg-black/[0.15]"
        } flex items-center gap-2 rounded-md p-1 px-2 transition-colors ease-in md:p-2 `}
    >
      <span className="text-lg md:text-xl">{children}</span><p>{title}</p>
    </button>
  );
};
